// Resolve as chaves conforme o ambiente. Troque STRIPE_MODE (test|live) na
// Vercel para alternar sandbox/produção sem mexer nas outras variáveis.
export const STRIPE_MODE = process.env.STRIPE_MODE === "live" ? "live" : "test";

export const STRIPE_SECRET_KEY =
  STRIPE_MODE === "live"
    ? process.env.STRIPE_LIVE_SECRET_KEY
    : process.env.STRIPE_TEST_SECRET_KEY;

export const STRIPE_WEBHOOK_SECRET =
  STRIPE_MODE === "live"
    ? process.env.STRIPE_LIVE_WEBHOOK_SECRET
    : process.env.STRIPE_TEST_WEBHOOK_SECRET;

export const SUPABASE_URL = process.env.SUPABASE_URL || "";
export const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || "";

export const PRICE_CENTS = Number(process.env.NIPUZ_PRICE_CENTS) || 1990;

// URLs de retorno do Checkout. Não precisam existir de fato: o app do Nipuz
// intercepta o redirect antes de qualquer navegação real.
export const SUCCESS_URL =
  process.env.NIPUZ_SUCCESS_URL || "https://nipuz.lumni.dev.br/licenca/ok";
export const CANCEL_URL =
  process.env.NIPUZ_CANCEL_URL || "https://nipuz.lumni.dev.br/licenca/cancelado";
