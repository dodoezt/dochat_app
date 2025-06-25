import { GetUserInfoFromCookie } from "@/lib/auth/getUserInfoFromCookie";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { uploadProfilePicture } from "@/components/functions/uploadToAppwrite";

export async function POST(req: Request) {
    const userInfo = await GetUserInfoFromCookie()
    const { blobImg } = await req.json()

    if(!userInfo) return NextResponse.json({message: 'authentication not valid'}, {status: 401})
    
    const pfp_id = await uploadProfilePicture(blobImg, userInfo?.username)

    console.log(pfp_id)

    if(!pfp_id) return NextResponse.json({message: 'failed to upload'}, {status: 401})

    try {
        const response = await prisma.user_atribut.update({
            where: {userId: userInfo.userId},
            data: {
                pfp_id: pfp_id
            }
        })

        return NextResponse.json({message: 'pfp uploaded succesfully'}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500})
    }
}