/**
 * The short, self-contained answer placed right under the hero: the passage a
 * search engine or an AI answer engine can quote as is (answer first, proof after).
 */
export default function AnswerBox({ text, label = 'La réponse courte', children }) {
  if (!text) return null;
  return (
    <div className="container">
      <div className="answer">
        <p className="label">{label}</p>
        <p className="answer-text">{text}</p>
        {children}
      </div>
    </div>
  );
}

export function Disclaimer({ children }) {
  return (
    <div className="disclaimer" role="note">
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="M10 1.5 19 18H1L10 1.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 7.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="15.2" r="1.1" fill="currentColor" />
      </svg>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  );
}
