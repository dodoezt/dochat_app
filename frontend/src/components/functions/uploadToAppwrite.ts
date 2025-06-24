import { storage, ID } from '@/lib/appwrite/appwrite'

export async function uploadProfilePicture (blob: Blob, username: string){
    const file = new File([blob], `${username}-pfp.jpg`, {type: 'image/jpeg'})

    const uploaded = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
        ID.unique(),
        file
    )
}