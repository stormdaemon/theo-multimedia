/** Questions as native <details>: readable without JavaScript, answers stay in the HTML. */
export default function Faq({ items, className = '' }) {
  if (!items?.length) return null;
  return (
    <div className={`faq ${className}`.trim()}>
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            <span>{q}</span>
            <span className="pm" aria-hidden="true" />
          </summary>
          <div className="faq-a">
            <p>{a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
