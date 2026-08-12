// Resolve as chaves conforme o ambiente. Troque STRIPE_MODE (test|live) na
// Vercel para alternar sandbox/produção sem mexer nas outras variáveis.

// .trim() limpa espaços E o BOM (U+FEFF conta como whitespace no ECMAScript):
// ferramentas/CLI às vezes gravam um BOM invisível no início do valor, que
// quebraria ao virar header HTTP ou URL.
const env = (name) => (process.env[name] || "").trim();

export const STRIPE_MODE = env("STRIPE_MODE") === "live" ? "live" : "test";

export const STRIPE_SECRET_KEY =
  STRIPE_MODE === "live" ? env("STRIPE_LIVE_SECRET_KEY") : env("STRIPE_TEST_SECRET_KEY");

export const STRIPE_WEBHOOK_SECRET =
  STRIPE_MODE === "live" ? env("STRIPE_LIVE_WEBHOOK_SECRET") : env("STRIPE_TEST_WEBHOOK_SECRET");

export const SUPABASE_URL = env("SUPABASE_URL");
export const SUPABASE_SECRET_KEY = env("SUPABASE_SECRET_KEY");

export const PRICE_CENTS = Number(env("NIPUZ_PRICE_CENTS")) || 1990;

// Dias de teste grátis antes de exigir o pagamento único.
export const TRIAL_DAYS = Number(env("NIPUZ_TRIAL_DAYS")) || 7;

// URLs de retorno do Checkout. Não precisam existir de fato: o app do Nipuz
// intercepta o redirect antes de qualquer navegação real.
export const SUCCESS_URL = env("NIPUZ_SUCCESS_URL") || "https://nipuz.lumni.dev.br/licenca/ok";
export const CANCEL_URL = env("NIPUZ_CANCEL_URL") || "https://nipuz.lumni.dev.br/licenca/cancelado";
