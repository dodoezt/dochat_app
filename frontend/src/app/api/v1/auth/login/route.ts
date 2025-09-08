import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
    const {email}: {email: string} = await request.json();
    if (!email) {
        return NextResponse.json({ message: 'NOT ENOUGH PARAMS' }, { status: 400 });
    }

    try {
        const user = await prisma.users.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return NextResponse.json({ message: 'USER NOT FOUND' }, { status: 404 });
        }

        const response = NextResponse.json({ message: 'USER FOUND' }, { status: 200 });

        const jwtToken = jwt.sign(
            {
                userId: user.userId,
                username: user.username,
                email: user.email,
                email_name: user.email_name
            },
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        );

        response.cookies.set('log-session', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7,
        })

        return response;
    } catch (error) {
        return NextResponse.json({ message: 'INTERNAL SERVER ERROR' }, { status: 500 });
    }
}