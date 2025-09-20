import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { GetUserInfoFromCookie } from "@/functions/auth/user/getUserInfoFromCookie";

export async function GET() {
    const userInfo = await GetUserInfoFromCookie()

    if(!userInfo) return NextResponse.json({message: 'auth failed'}, {status: 401}) 
    const { userId } = userInfo
    try {
        const response = await prisma.friendships.findMany({
            where: {
                OR: [
                    {userId: userId},
                    {friendId: userId}
                ]
            },
            include: {
                users_friendships_userIdTousers: {
                    select: {
                        userId: true,
                        username: true,
                        user_atribut: {
                            select: {
                                pfp_id: true,
                            }
                        }
                    }
                },
                users_friendships_friendIdTousers: {
                    select: {
                        userId: true,
                        username: true,
                        user_atribut: {
                            select: {
                                pfp_id: true,
                            }
                        }
                    }
                }
            }
        })

        console.log(response)
        return NextResponse.json(response, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }

}