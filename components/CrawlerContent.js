/**
 * Crawler-Friendly Content Component (Nov 2025)
 *
 * Provides static, immediately-visible content for AI crawlers.
 * Modern AI crawlers (GPTBot, Claude, Perplexity) EXECUTE JavaScript,
 * so we can't use <noscript>. Instead, we render content visible to crawlers
 * but hidden visually from users.
 */

import React from 'react';

/**
 * Complete page content for crawlers
 * Rendered in SSR when isCrawler=true, hidden visually but accessible to bots
 */
export const CrawlerPageContent = ({ title, description, sections = [], isCrawler = false }) => {
  if (!isCrawler) return null;

  return (
    <article
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <h1>{title}</h1>
      <p>{description}</p>

      {sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {section.content && <div>{section.content}</div>}
          {section.items && (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  {typeof item === 'object' ? (
                    <>
                      <strong>{item.title}:</strong> {item.description}
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <footer>
        <p>
          <strong>Théo Multimédia</strong> - Création de sites internet à Angoulême
        </p>
        <p>Charente, Nouvelle-Aquitaine, France</p>
        <p>Email: contact@theo-multimedia.com</p>
      </footer>
    </article>
  );
};

export default CrawlerPageContent;
