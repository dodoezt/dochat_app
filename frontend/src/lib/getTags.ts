import { prisma } from "./prisma";
import { TagsChace } from "./chace";

export type TagsType = {
    id: number,
    name: string,
    tier: 'Common' | 'Kinda Cool' | 'Absolute OG'
}

export const getTags = async() => {
    const cache: TagsType[] | undefined = TagsChace.get('tags')
    if (cache) return cache

    const data = await prisma.tags.findMany()
    TagsChace.set('tags', data)

    return data
}