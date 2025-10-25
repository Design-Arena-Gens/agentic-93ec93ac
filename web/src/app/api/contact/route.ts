import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, message: "Missing fields" }, { status: 400 });
    }
    // In real deployment, forward to email/service. For now, log.
    console.log("Contact message:", { name, email, subject, message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, message: "Invalid payload" }, { status: 400 });
  }
}
