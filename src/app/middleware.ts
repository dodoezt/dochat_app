// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()

  const geoRes = await fetch('https://ipapi.co/json/')
  const geoData = await geoRes.json()

  const country = geoData.country || 'ID'
  const callingCode = geoData.country_calling_code || '+62'

  res.cookies.set('country', country)
  res.cookies.set('calling_code', callingCode)

  return res
}
