import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const currentHost = hostname.split('.')[0]

  const url = request.nextUrl.clone()

  if (currentHost === 'login') {
    url.pathname = `/login${url.pathname}`
  } else if (currentHost === 'chat') {
    url.pathname = `/chat${url.pathname}`
  }

  return NextResponse.rewrite(url)
}
