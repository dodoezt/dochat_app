import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(){
    try {
        const users = await prisma.users.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}