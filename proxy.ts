import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const ua = (request.headers.get('user-agent') || '').toLowerCase()
  const allowAi = /(chatgpt-user|gptbot|google-extended|google-inspectiontool|claude|anthropic|perplexitybot|ccbot|applebot|applebot-extended)/i.test(ua)

  if (allowAi) {
    // Normalize request headers to avoid compressed/partial or streamed responses the bots cannot parse
    const reqHeaders = new Headers(request.headers)
    reqHeaders.delete('accept-encoding')
    reqHeaders.delete('range')
    reqHeaders.set('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
    reqHeaders.set('x-ai-access', 'allow')

    const res = NextResponse.next({ request: { headers: reqHeaders } })
    res.headers.set('X-AI-Access', 'allow')
    res.headers.set('Vary', 'User-Agent')
    res.headers.set('Content-Type', 'text/html; charset=utf-8')
    res.headers.set('Connection', 'close')
    if (!res.headers.get('Cache-Control')) res.headers.set('Cache-Control', 'public, max-age=60')
    return res
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
