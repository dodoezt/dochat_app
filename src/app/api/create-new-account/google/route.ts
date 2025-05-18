import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'

type requestBody = {
    username: string,
    email: string,
    email_name: string,
}

export async function POST(request: Request) {
    const { username, email, email_name  }: requestBody = await request.json();

    if (!username || !email) {
        return NextResponse.json({ message: 'NOT ENOUGH PARAMS' }, { status: 400 });
    }

    if (username.length < 5 || username.length > 20) {
        return NextResponse.json({ message: 'USERNAME MUsST BE BETWEEN 5 AND 20 CHARACTERS' }, { status: 400 });
    }

    const createdAt = new Date().toISOString()

    try {
        const user = await prisma.users.create({
            data: {
                username,
                provider : 'google',
                email,
                email_name,
                createdAt,
            },
        });

        if (!user) {
            return NextResponse.json({ message: 'USER NOT CREATED' }, { status: 400 });
        }
        const response = NextResponse.json({ message: 'USER SUCCESFULLY CREATED' }, { status: 201 });

        const jwtToken = jwt.sign(
            {
                userId: user.userId,
                username: user.username,
                email: user.email,
                email_name : user.email_name
            },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        )
        
        response.cookies.set('log-session',jwtToken , {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite : 'lax',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        });

        return response;
    } catch (error) {
        return NextResponse.json({ message: 'INTERNAL SERVER ERROR' }, { status: 500 });
    }

}