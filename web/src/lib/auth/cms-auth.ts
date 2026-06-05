import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

const CMS_SESSION_COOKIE = "tcms_cms_session";
const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours

function getAdminPassword(): string {
  return process.env.CMS_ADMIN_PASSWORD ?? "tcms-admin-change-me";
}

function hashToken(token: string): string {
  return createHash("sha256").update(`${token}:${getAdminPassword()}`).digest("hex");
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getAdminPassword();
  if (password.length !== expected.length) {
    return false;
  }
  return timingSafeEqual(Buffer.from(password), Buffer.from(expected));
}

const SESSION_MARKER = "authenticated";

export async function createCmsSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(CMS_SESSION_COOKIE, hashToken(SESSION_MARKER), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function isCmsAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(CMS_SESSION_COOKIE)?.value;
  if (!session) {
    return false;
  }
  const expected = hashToken(SESSION_MARKER);
  if (session.length !== expected.length) {
    return false;
  }
  return timingSafeEqual(Buffer.from(session), Buffer.from(expected));
}

export async function clearCmsSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(CMS_SESSION_COOKIE);
}
