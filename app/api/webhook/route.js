import { getStripe } from "../../../lib/stripe";
import { upsertLicense } from "../../../lib/supabase";
import { STRIPE_WEBHOOK_SECRET, PRICE_CENTS, STRIPE_MODE } from "../../../lib/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/webhook  (Stripe)
// Rede de segurança: mesmo que o app não chame /api/verify, o webhook grava a
// licença quando o pagamento conclui. Precisa do corpo BRUTO para validar a
// assinatura, por isso lemos req.text().
export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const raw = await req.text();

  let event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(raw, sig, STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    return new Response("assinatura inválida: " + e.message, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const s = event.data.object;
      if (s.payment_status === "paid") {
        const email = (s.customer_email || (s.metadata && s.metadata.email) || "").toLowerCase();
        await upsertLicense({
          email,
          stripe_session_id: s.id,
          stripe_payment_intent: typeof s.payment_intent === "string" ? s.payment_intent : null,
          amount_cents: s.amount_total || PRICE_CENTS,
          currency: s.currency || "brl",
          status: "paid",
          stripe_mode: STRIPE_MODE,
        });
      }
    }
    return new Response("ok", { status: 200 });
  } catch (e) {
    return new Response("erro: " + e.message, { status: 500 });
  }
}
