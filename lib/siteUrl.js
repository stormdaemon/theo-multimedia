export function getSiteUrlFromHeaders(req) {
  try {
    const envUrl = process.env.NEXT_PUBLIC_SITE_URL
    if (envUrl) return envUrl.replace(/\/$/, '')
    const host = (req?.headers['x-forwarded-host'] || req?.headers['host'] || '').toString()
    if (!host) return 'https://theo-multimedia.com'
    const proto = (req?.headers['x-forwarded-proto'] || 'https').toString()
    return `${proto}://${host}`.replace(/\/$/, '')
  } catch {
    return 'https://theo-multimedia.com'
  }
}

