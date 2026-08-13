import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { PRICE_CENTS, SUCCESS_URL, CANCEL_URL, STRIPE_MODE } from "../../../lib/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/checkout  { email }  ->  { url }
// Cria a Stripe Checkout Session (com a secret, no servidor) e devolve só a URL
// do checkout. O app do Nipuz abre essa URL na janela modal.
export async function POST(req) {
  try {
    const { email } = await req.json().catch(() => ({}));
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ error: "e-mail inválido" }, { status: 400 });
    }
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      metadata: { email: email.toLowerCase(), mode: STRIPE_MODE, product: "nipuz" },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "brl",
            unit_amount: PRICE_CENTS,
            product_data: { name: "Nipuz · Licença vitalícia" },
          },
        },
      ],
      success_url: SUCCESS_URL + "?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: CANCEL_URL,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    return NextResponse.json({ error: String(e.message || e) }, { status: 500 });
  }
}
