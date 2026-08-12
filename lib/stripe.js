import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "./config";

// Instância preguiçosa: só cria (e valida a chave) quando uma rota realmente
// usa o Stripe. Assim o build não quebra se as env vars ainda não existirem.
let _stripe = null;

export function getStripe() {
  if (!_stripe) {
    if (!STRIPE_SECRET_KEY) throw new Error("STRIPE secret key ausente (verifique STRIPE_MODE e as chaves).");
    _stripe = new Stripe(STRIPE_SECRET_KEY);
  }
  return _stripe;
}
