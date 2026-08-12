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

// Esse e-mail tem licença? True se: eternal=true (grant manual, vale sempre,
// independente de pagamento/modo) OU há pagamento confirmado no modo atual.
// eternal só é setado manualmente no banco (secret key) — o cliente nunca escreve.
// Trial de 7 dias, uma vez por e-mail, PARA SEMPRE: registrado como uma linha
// na própria tabela licenses com status="trial" e stripe_session_id="trial:<email>"
// (coluna única → reinstalar o app ou repetir a chamada não cria outro trial).
// O início é o created_at gravado pelo RELÓGIO DO SERVIDOR (default now()) —
// mexer no relógio do PC não estica o prazo. findLicense nunca casa com essas
// linhas (só eternal=true ou status=paid), então trial jamais vira licença.
export async function getOrStartTrial(email) {
  const e = email.toLowerCase();
  const key = encodeURIComponent("trial:" + e);
  const sel = `${SUPABASE_URL}/rest/v1/licenses?select=created_at&stripe_session_id=eq.${key}&limit=1`;
  let res = await fetch(sel, { headers: headers() });
  if (!res.ok) throw new Error("supabase trial select " + res.status);
  const rows = await res.json();
  if (rows[0]) return rows[0].created_at;

  // merge-duplicates: se duas chamadas correrem juntas, a segunda "funde" com a
  // primeira sem tocar no created_at original (não está no payload).
  res = await fetch(SUPABASE_URL + "/rest/v1/licenses?on_conflict=stripe_session_id", {
    method: "POST",
    headers: headers({
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=representation",
    }),
    body: JSON.stringify({ email: e, stripe_session_id: "trial:" + e, status: "trial", amount_cents: 0 }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error("supabase trial insert " + res.status + " " + body);
  }
  const created = await res.json();
  return created[0] ? created[0].created_at : new Date().toISOString();
}

export async function findLicense(email) {
  const e = encodeURIComponent(email.toLowerCase());
  const or = `or=(eternal.eq.true,and(status.eq.paid,stripe_mode.eq.${STRIPE_MODE}))`;
  const url = `${SUPABASE_URL}/rest/v1/licenses?select=id,email,eternal&email=eq.${e}&${or}&limit=1`;
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) throw new Error("supabase select " + res.status);
  const rows = await res.json();
  return rows[0] || null;
}
