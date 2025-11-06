// Netlify Edge Function to allow AI crawlers with proper header normalization
export default async (request, context) => {
  const ua = (request.headers.get('user-agent') || '').toLowerCase();

  // Check if it's an AI crawler
  const allowAi = /(chatgpt-user|gptbot|google-extended|google-inspectiontool|claude|anthropic|perplexitybot|ccbot|applebot|applebot-extended|gemini|bingbot|slackbot|facebookexternalhit|twitterbot|linkedinbot)/i.test(ua);

  if (allowAi) {
    // Clone the request to modify headers
    const modifiedHeaders = new Headers(request.headers);

    // Remove problematic headers that can cause parsing issues for bots
    modifiedHeaders.delete('accept-encoding');
    modifiedHeaders.delete('range');

    // Set safe accept header
    modifiedHeaders.set('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8');
    modifiedHeaders.set('x-ai-access', 'allow');

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

    // Add AI-friendly response headers
    modifiedResponse.headers.set('X-AI-Access', 'allow');
    modifiedResponse.headers.set('Vary', 'User-Agent');
    modifiedResponse.headers.set('Content-Type', 'text/html; charset=utf-8');
    modifiedResponse.headers.set('Connection', 'close');

    if (!modifiedResponse.headers.get('Cache-Control')) {
      modifiedResponse.headers.set('Cache-Control', 'public, max-age=60');
    }

    return modifiedResponse;
  }

  // For non-AI crawlers, just pass through
  return context.next();
};
