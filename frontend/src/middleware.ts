import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/login", "/welcome"];
const SENSITIVE_PATHS = ["/google-success", "/new-user"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isPublicPath = PUBLIC_PATHS.some(path => pathname.startsWith(path));
  const isSensitivePath = SENSITIVE_PATHS.some(path => pathname.startsWith(path));

  const token = req.cookies.get("log-session")?.value;

  let isValidSession = false;

  const res = NextResponse.next();

  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
      isValidSession = true;
    } catch (_) {
      isValidSession = false;
    }
  }

  res.cookies.set('isLogged', isValidSession ? 'true' : 'false', {
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 1 week
  })

  if (!isValidSession && !isPublicPath && !isSensitivePath && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isValidSession && isSensitivePath) {
    return NextResponse.redirect(new URL("/chat", req.nextUrl));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|js|css)).*)",
  ],
};
