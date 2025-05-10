import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { jwt } = await request.json();

    const cookie = NextResponse.json({ message: "Cookie set successfully" }, { status: 200 });

    cookie.cookies.set('log-session', jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite : 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    })

    return cookie;
}