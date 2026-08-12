import { SUPABASE_URL, SUPABASE_SECRET_KEY, STRIPE_MODE } from "./config";

// A secret key do Supabase vive SÓ aqui no servidor (Vercel). O app nunca a vê.
function headers(extra) {
  return {
    apikey: SUPABASE_SECRET_KEY,
    Authorization: "Bearer " + SUPABASE_SECRET_KEY,
    ...(extra || {}),
  };
}

// Grava (ou atualiza, se a mesma sessão chegar de novo) a licença. on_conflict
// em stripe_session_id evita duplicar quando webhook + verify disparam juntos.
export async function upsertLicense(row) {
  const res = await fetch(SUPABASE_URL + "/rest/v1/licenses?on_conflict=stripe_session_id", {
    method: "POST",
    headers: headers({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    }),
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error("supabase upsert " + res.status + " " + body);
  }
}

// Existe licença paga para esse e-mail no ambiente atual (test/live)?
export async function findLicense(email) {
  const q = new URLSearchParams({
    select: "id,email,created_at",
    email: "eq." + email.toLowerCase(),
    status: "eq.paid",
    stripe_mode: "eq." + STRIPE_MODE,
    limit: "1",
  });
  const res = await fetch(SUPABASE_URL + "/rest/v1/licenses?" + q, { headers: headers() });
  if (!res.ok) throw new Error("supabase select " + res.status);
  const rows = await res.json();
  return rows[0] || null;
}
