import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'NOT ENOUGH PARAMS' }, { status: 400 });
    }

    try {
        const user = await prisma.users.findUnique({
            where: {
                username: username,
            },
        });

        if (user) {
            return NextResponse.json({ exists: true });
        } else {
            return NextResponse.json({ exists: false });
        }
    } catch (error) {
        return NextResponse.json({ error: 'INTERNAL SERVER ERROR' }, { status: 500 });
    }
}