import { GetUserIdFromCookie } from "@/functions/auth/user/getUserIdFromCookie";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const userId = await GetUserIdFromCookie();
    if(!userId) return NextResponse.json({userId: null}, {status: 401});

    try {
        return NextResponse.json({userId: userId}, {status: 200});
    } catch (error) {
        return NextResponse.json({userId: null}, {status: 500});
    }
}
