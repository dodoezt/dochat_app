import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/login", "/welcome", "/google-success", "/new-user/google"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isPublicPath = PUBLIC_PATHS.includes(pathname);

  const token = req.cookies.get("log-session")?.value;

  let isValidSession = false;

  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
      isValidSession = true;
    } catch (_) {
      isValidSession = false;
    }
  }

  if (!isValidSession && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isValidSession && isPublicPath) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|js|css)).*)",
  ],
};
