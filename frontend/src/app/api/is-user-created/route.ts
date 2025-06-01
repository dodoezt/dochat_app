import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    return NextResponse.json({ exists: !!user }, { status: 200 });

  } catch (error) {
    console.error('Error checking user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
