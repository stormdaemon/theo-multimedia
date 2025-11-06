// Netlify Edge Function to allow ALL requests with optimized headers
// Removes restrictions - everyone can access the site
export default async (request, context) => {
  // Clone the request to modify headers
  const modifiedHeaders = new Headers(request.headers);

  // Remove problematic headers that can cause parsing issues
  modifiedHeaders.delete('accept-encoding');
  modifiedHeaders.delete('range');

  // Set safe accept header for better compatibility
  if (!modifiedHeaders.get('accept')) {
    modifiedHeaders.set('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8');
  }

  // Create a new request with modified headers
  const modifiedRequest = new Request(request.url, {
    method: request.method,
    headers: modifiedHeaders,
    body: request.body,
  });

  // Get the response from the origin
  const response = await context.next(modifiedRequest);

  // Clone the response to modify headers
  const modifiedResponse = new Response(response.body, response);

  // Add optimized response headers for all clients
  modifiedResponse.headers.set('X-AI-Access', 'allow');
  modifiedResponse.headers.set('Vary', 'User-Agent');
  modifiedResponse.headers.set('Content-Type', 'text/html; charset=utf-8');
  modifiedResponse.headers.set('Connection', 'close');

  if (!modifiedResponse.headers.get('Cache-Control')) {
    modifiedResponse.headers.set('Cache-Control', 'public, max-age=60');
  }

  return modifiedResponse;
};
