import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request){
    const { name, description, addedUserIds } = await req.json();

    if(!name || !addedUserIds || !Array.isArray(addedUserIds) || addedUserIds.length < 2){
        return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    try {
        const conversation = await prisma.conversations.create({
            data: {
                id: crypto.randomUUID(),
                isGroup: true,
                group_atributs: {
                    create: {
                        group_name: name,
                        group_pfp: null,
                        group_description: description,
                    },
                },
                members: {
                    createMany: {
                        data: addedUserIds.map((userId) => ({
                            userId,
                        })),
                    },
                },
            },
        });

        return NextResponse.json(conversation, { status: 201 });

    } catch (error) {
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
}