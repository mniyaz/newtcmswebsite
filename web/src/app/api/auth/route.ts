import { NextResponse } from "next/server";
import {
  clearCmsSession,
  createCmsSession,
  verifyAdminPassword,
} from "@/lib/auth/cms-auth";

export async function POST(request: Request) {
  try {
    const { password } = (await request.json()) as { password?: string };

    if (!password || !verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    await createCmsSession();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function DELETE() {
  await clearCmsSession();
  return NextResponse.json({ success: true });
}
