import { GetUserIdFromCookie } from "@/lib/auth/getUserIdFromCookie";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const userId = await GetUserIdFromCookie();
    if(!userId) return NextResponse.json({message: 'authentication not valid'}, {status: 401});

    try {
        return NextResponse.json({userId: userId}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }
}
