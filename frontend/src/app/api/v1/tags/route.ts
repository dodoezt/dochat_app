import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getTags } from "@/lib/getTags";

export async function GET(){
    try {
        const tags = await getTags()

        return NextResponse.json(tags)
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}