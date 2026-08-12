import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { upsertLicense } from "../../../lib/supabase";
import { PRICE_CENTS, STRIPE_MODE } from "../../../lib/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/verify  { session_id }  ->  { ok, email }
// Confere na Stripe (com a secret, no servidor) se a sessão foi paga e, se sim,
// grava a licença no Supabase. Chamado pelo app logo após o redirect de sucesso,
// para não depender do timing do webhook.
export async function POST(req) {
  try {
    const { session_id } = await req.json().catch(() => ({}));
    if (!session_id) return NextResponse.json({ error: "session_id ausente" }, { status: 400 });

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status !== "paid") {
      return NextResponse.json({ ok: false, paid: false });
    }

    const email = (session.customer_email || session.metadata?.email || "").toLowerCase();
    await upsertLicense({
      email,
      stripe_session_id: session.id,
      stripe_payment_intent:
        typeof session.payment_intent === "string" ? session.payment_intent : null,
      amount_cents: session.amount_total || PRICE_CENTS,
      currency: session.currency || "brl",
      status: "paid",
      stripe_mode: STRIPE_MODE,
    });

    return NextResponse.json({ ok: true, email });
  } catch (e) {
    return NextResponse.json({ error: String(e.message || e) }, { status: 500 });
  }
}
