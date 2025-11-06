export default async (request, context) => {
  // Get the page response from Next.js
  const response = await context.next();

  // Add AI-friendly headers to the response
  const headers = new Headers(response.headers);
  headers.set('X-AI-Access', 'allow');
  headers.set('Access-Control-Allow-Origin', '*');

  if (!headers.has('Cache-Control')) {
    headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  }

  // Return modified response
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  });
};

export const config = {
  path: "/*"
};
