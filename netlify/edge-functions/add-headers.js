export default async function addHeaders(request, context) {
  const response = await context.next();
  const headers = new Headers(response.headers);

  headers.set('X-Robots-Tag', 'all');
  headers.set('X-AI-Access', 'allow');
  headers.set('Access-Control-Allow-Origin', '*');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
