import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = await prisma.tags.findMany()

        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}