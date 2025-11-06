// Netlify Edge Function - Optimize response headers for all requests
export default async (request, context) => {
  // Get the response from Next.js
  const response = await context.next();

  // Create a new response with modified headers
  const headers = new Headers(response.headers);

  // Add AI-friendly headers
  headers.set('X-AI-Access', 'allow');
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  headers.set('Access-Control-Allow-Origin', '*');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  });
};
