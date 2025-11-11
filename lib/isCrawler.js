/**
 * Detect if the user agent is a crawler/bot (Nov 2025)
 * Used to disable animations for better content extraction by AI crawlers
 */

export function isCrawler(userAgent) {
  if (!userAgent) return false;

  const crawlerPatterns = [
    // Search engines
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebot',
    'ia_archiver',

    // AI crawlers (2025)
    'gptbot',
    'chatgpt',
    'anthropic',
    'claude',
    'perplexitybot',
    'google-extended',
    'ccbot',
    'applebot',
    'bytespider',
    'omgilibot',

    // Other bots
    'linkedinbot',
    'twitterbot',
    'whatsapp',
    'telegram',
    'slackbot',
    'discordbot',
  ];

  const ua = userAgent.toLowerCase();
  return crawlerPatterns.some(pattern => ua.includes(pattern));
}

/**
 * Server-side check for crawler
 * Returns props to disable animations on SSR for crawlers
 */
export function getCrawlerProps(req) {
  const userAgent = req.headers['user-agent'] || '';
  const isBot = isCrawler(userAgent);

  return {
    isCrawler: isBot,
    // Disable animations for crawlers to ensure content is visible
    disableAnimations: isBot,
  };
}
