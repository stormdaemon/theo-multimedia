function escapeXml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTitle(title) {
  const words = title.split(' ');
  const lines = [];
  let current = '';

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > 34 && lines.length < 2) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines.slice(0, 3);
}

export default function handler(req, res) {
  const title = escapeXml(String(req.query.title || 'Théo Multimédia'));
  const type = escapeXml(String(req.query.type || 'Site vitrine • SEO local • Sur mesure'));
  const lines = wrapTitle(title);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#03070c"/>
      <stop offset=".58" stop-color="#07101a"/>
      <stop offset="1" stop-color="#020408"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="28%" r="62%">
      <stop offset="0" stop-color="#ff6a00" stop-opacity=".72"/>
      <stop offset=".42" stop-color="#ff5a00" stop-opacity=".22"/>
      <stop offset="1" stop-color="#03070c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="960" cy="145" r="230" fill="#ff5a00" opacity=".16"/>
  <rect x="74" y="72" width="1052" height="486" rx="34" fill="#ffffff" opacity=".055"/>
  <rect x="74" y="72" width="1052" height="486" rx="34" fill="none" stroke="#ff8a42" stroke-opacity=".48"/>
  <text x="108" y="145" fill="#ff7a2a" font-family="Arial, sans-serif" font-size="28" font-weight="700">Théo Multimédia</text>
  <text x="108" y="198" fill="#ffbf91" font-family="Arial, sans-serif" font-size="24" font-weight="700">${type}</text>
  ${lines.map((line, index) => `<text x="108" y="${292 + index * 72}" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="800">${line}</text>`).join('')}
  <text x="108" y="508" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="28">Cognac • Angoulême • Saintes • Charente</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800');
  res.status(200).send(svg);
}
