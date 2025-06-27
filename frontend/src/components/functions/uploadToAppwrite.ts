import { storage, ID } from '@/lib/appwrite/appwrite'
import { prisma } from '@/lib/prisma'

export async function uploadProfilePicture (blob: Blob, username: string){
    console.log(blob.type)
    const file = new File([blob], `${username}-pfp.jpg`, {type: 'image/jpeg'})

    try {
        const uploaded = await storage.createFile(
            process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
            ID.unique(),
            file
        )

        return uploaded.$id
    } catch (error) {
        console.log(error)
        return null
    }
}