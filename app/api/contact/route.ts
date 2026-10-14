import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Honeypot — silently succeed
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    // STUB: wire to Resend or another email provider via env vars
    // RESEND_API_KEY, CONTACT_TO_EMAIL
    console.info("[contact]", {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      service: parsed.data.service,
      message: parsed.data.message.slice(0, 120),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
