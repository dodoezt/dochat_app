import { GetUserInfoFromCookie } from "@/functions/auth/user/getUserInfoFromCookie";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { uploadProfilePicture } from "@/functions/uploadToAppwrite";

export async function POST(req: Request) {
    const userInfo = await GetUserInfoFromCookie()
    const formData = await req.formData()
    const file = formData.get('file') as Blob

    console.log(file)

    if(!userInfo) return NextResponse.json({message: 'authentication not valid'}, {status: 401})
    
    const pfp_id = await uploadProfilePicture(file, userInfo?.username)

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
