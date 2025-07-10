import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import { DecodedToken } from '@/types/contexts'

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get('log-session')?.value;
    let provider: 'google' | 'whatsapp' | null = null;

    if (token) {
        try {
        const decoded = jwtDecode<{ provider: 'google' | 'whatsapp' }>(token);
        if (decoded.provider === 'google' || decoded.provider === 'whatsapp') {
            provider = decoded.provider;
        }
        } catch {}
    }

    return NextResponse.json({ provider });
}
