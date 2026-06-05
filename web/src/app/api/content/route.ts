import { NextResponse } from "next/server";
import { isCmsAuthenticated } from "@/lib/auth/cms-auth";
import {
  getHomepageContent,
  resetHomepageContent,
  updateHomepageContent,
} from "@/lib/content/repository";
import { homepageContentSchema } from "@/lib/content/schema";

export async function GET() {
  const content = await getHomepageContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  if (!(await isCmsAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body: unknown = await request.json();
    const content = homepageContentSchema.parse(body);
    const updated = await updateHomepageContent(content);
    return NextResponse.json(updated);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid content payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE() {
  if (!(await isCmsAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await resetHomepageContent();
  return NextResponse.json(content);
}
