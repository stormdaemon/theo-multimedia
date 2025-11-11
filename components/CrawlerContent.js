/**
 * Crawler-Friendly Content Component (Nov 2025)
 *
 * Provides static, immediately-visible content for AI crawlers
 * that don't execute JavaScript or render animations.
 *
 * This ensures Gemini, ChatGPT, Perplexity and other AI search engines
 * can extract meaningful content from your pages.
 */

import React from 'react';

/**
 * NoScript wrapper - displays content ONLY to crawlers without JS
 */
export const CrawlerNoScript = ({ children }) => {
  return <noscript>{children}</noscript>;
};

/**
 * Static text content for crawlers
 * Hidden from visual users (screen-reader only class)
 */
export const CrawlerText = ({ children, className = '' }) => {
  return (
    <div className={`sr-only ${className}`} aria-hidden="true">
      {children}
    </div>
  );
};

/**
 * Complete page content for crawlers
 * Includes all text in a structured, accessible format
 */
export const CrawlerPageContent = ({ title, description, sections = [] }) => {
  return (
    <CrawlerNoScript>
      <article
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>{title}</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
          {description}
        </p>

        {sections.map((section, index) => (
          <section key={index} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>
              {section.title}
            </h2>
            {section.content && (
              <div style={{ fontSize: '16px', lineHeight: '1.6' }}>
                {section.content}
              </div>
            )}
            {section.items && (
              <ul style={{ marginLeft: '20px' }}>
                {section.items.map((item, i) => (
                  <li key={i} style={{ marginBottom: '10px', lineHeight: '1.6' }}>
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

        <footer style={{ marginTop: '60px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <p>
            <strong>Théo Multimédia</strong> - Création de sites internet à Angoulême
          </p>
          <p>Charente, Nouvelle-Aquitaine, France</p>
          <p>Email: contact@theo-multimedia.com</p>
        </footer>
      </article>
    </CrawlerNoScript>
  );
};

export default CrawlerPageContent;
