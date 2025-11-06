export async function handler(event, context) {
  try {
    const url = 'https://theo-multimedia.com'
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'TheoMultimedia-SSR-Probe/1.0 (+https://theo-multimedia.com)'
      },
      redirect: 'follow',
    })
    const text = await res.text()
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ok: res.ok,
        status: res.status,
        url: res.url,
        length: text.length,
        snippet: text.slice(0, 500),
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: String(err && err.message || err) }),
    }
  }
}
