import { NextResponse } from "next/server";
import { findLicense, getOrStartTrial } from "../../../lib/supabase";
import { TRIAL_DAYS } from "../../../lib/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/license?email=...  ->  { licensed, email, trial? }
// O app pergunta se a conta tem licença (a secret do Supabase fica no
// servidor). Sem licença, o backend inicia (ou relê) o trial do e-mail e
// devolve as datas — o prazo é calculado aqui, com o relógio do servidor.
export async function GET(req) {
  try {
    const email = new URL(req.url).searchParams.get("email") || "";
    if (!email) return NextResponse.json({ licensed: false });
    const row = await findLicense(email);
    if (row) return NextResponse.json({ licensed: true, email: row.email });

    const startedAt = await getOrStartTrial(email);
    const endsMs = new Date(startedAt).getTime() + TRIAL_DAYS * 86400000;
    // daysLeft desce sozinho até 0 conforme os dias passam (relógio do
    // SERVIDOR) — equivale a uma coluna free_days decrementada diariamente,
    // sem cron e sem congelar se o usuário ficar sem abrir o app.
    const daysLeft = Math.max(0, Math.ceil((endsMs - Date.now()) / 86400000));
    return NextResponse.json({
      licensed: false,
      email: null,
      trial: {
        startedAt,
        endsAt: new Date(endsMs).toISOString(),
        daysLeft,
        active: daysLeft > 0,
      },
    });
  } catch (e) {
    return NextResponse.json({ error: String(e.message || e) }, { status: 500 });
  }
}
