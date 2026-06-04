const PageFeatureBand = ({ eyebrow, title, description, artwork, items }) => (
  <section className="tm-page-band px-4 py-10 sm:px-6">
    <div className="tm-thick-glass relative mx-auto grid max-w-6xl min-w-0 overflow-hidden rounded-2xl lg:grid-cols-[38%_62%]">
      <div className="relative z-10 min-w-0 p-6 md:p-8">
        <p className="tm-kicker">{eyebrow}</p>
        <h2 className="tm-title mt-2 text-2xl sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      </div>
      <div className="relative grid min-w-0 gap-px bg-white/10 sm:grid-cols-3">
        <img src={artwork} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        {items.map((item) => (
          <article key={item.title} className="tm-feature-cell relative z-10 min-w-0 p-5">
            <img src={item.icon} alt="" className="h-9 w-9 object-contain" />
            <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PageFeatureBand;
