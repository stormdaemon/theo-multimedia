const BrandLogo = ({ compact = false }) => (
  <span className="tm-brand flex shrink-0 items-center gap-2.5">
    <img
      src="/assets/logo-theo-multimedia-orange-v2.webp"
      alt=""
      className={compact ? 'h-10 w-12 object-contain' : 'h-12 w-14 object-contain'}
    />
    <span className="leading-tight">
      <strong className="tm-brand-name block font-[var(--font-heading)] tracking-tight">
        Théo Multimédia
      </strong>
      <small className="block text-[10px] uppercase tracking-[.12em] text-orange-200/70">
        Agence Web & SEO
      </small>
    </span>
  </span>
);

export default BrandLogo;
