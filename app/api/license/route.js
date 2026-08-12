import { NextResponse } from "next/server";
import { findLicense } from "../../../lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/license?email=...  ->  { licensed, email }
// O app pergunta se a conta tem licença; recebe só sim/não (a secret do
// Supabase fica no servidor). Usado no "restaurar" e ao logar.
export async function GET(req) {
  try {
    const email = new URL(req.url).searchParams.get("email") || "";
    if (!email) return NextResponse.json({ licensed: false });
    const row = await findLicense(email);
    return NextResponse.json({ licensed: Boolean(row), email: row ? row.email : null });
  } catch (e) {
    return NextResponse.json({ error: String(e.message || e) }, { status: 500 });
  }
}
