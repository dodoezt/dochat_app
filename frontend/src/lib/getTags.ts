import { prisma } from "./prisma";
import { TagsCache } from "./chaches/TagsCache";

export type TagsType = {
    id: number,
    name: string,
    tier: 'Common' | 'Kinda Cool' | 'Absolute OG'
}

export const getTags = async() => {
    const cache: TagsType[] | undefined = TagsCache.get('tags')
    if (cache) return cache

    const data = await prisma.tags.findMany()
    TagsCache.set('tags', data)

    return data
}