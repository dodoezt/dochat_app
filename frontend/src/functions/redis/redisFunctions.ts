import { redis } from "@/lib/caches/RedisCaches"

type SetRedisType = {
  key: string
  value: unknown
  age: number // umur cache dalam detik
}

export async function setRedis({ key, value, age }: SetRedisType): Promise<void> {
  await redis.set(key, JSON.stringify(value), {
    ex: age, // expire time dalam detik
  })
}

export async function getRedis<T>({key}: {key: string}): Promise<T | null> {
  const value = await redis.get(key) as string
  if(!value) return null
  try {
    return JSON.parse(value) as T
  } catch (error) {
    return value as T
  }
}
