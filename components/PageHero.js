export default function PageHero({ eyebrow, title, description, enDesarrollo = false }) {
  return (
    <section className="border-b border-verde/10 amate-edge bg-marfil">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20">
        {eyebrow && (
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-dorado mb-3">{eyebrow}</p>
        )}
        <h1 className="font-display text-3xl sm:text-4xl text-verde max-w-2xl">{title}</h1>
        {description && (
          <p className="mt-4 text-verde-oscuro/80 max-w-xl leading-relaxed">{description}</p>
        )}
        {enDesarrollo && (
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-dorado/15 px-4 py-1.5 text-xs text-verde-oscuro">
            🚧 En desarrollo — esta sección seguirá creciendo
          </span>
        )}
      </div>
    </section>
  )
}
