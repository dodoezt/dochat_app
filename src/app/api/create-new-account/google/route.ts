import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type requestBody = {
    username: string,
    email: string,
}

export async function POST(request: Request) {
    const { username, email }: requestBody = await request.json();

    if (!username || !email) {
        return NextResponse.json({ error: 'NOT ENOUGH PARAMS' }, { status: 400 });
    }

    const createdAt = new Date().toISOString()

    try {
        const user = await prisma.users.create({
            data: {
                username,
                provider : 'google',
                email,
                createdAt,
            },
        });

        return NextResponse.json({ message: 'USER SUCCESFULLY CREATED' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'INTERNAL SERVER ERROR' }, { status: 500 });
    }

}