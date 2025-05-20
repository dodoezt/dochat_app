import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.users.findUnique({
      where: { email },
      select: {
        userId: true,
        username: true,
        provider: true,
        email: true,
        email_name: true,
      }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 401 });
    }

    const token = jwt.sign(
      {
        userId: user.userId,
        username: user.username,
        provider: 'google',
        email: user.email,
        email_name: user.email_name,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    const response = new NextResponse(
      JSON.stringify({ message: 'cookie set successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

    response.cookies.set('log-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
