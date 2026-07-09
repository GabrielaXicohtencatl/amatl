import PageHero from '@/components/PageHero'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Recursos',
  description: 'Artículos, guías, biblioteca y herramientas abiertas de AMATL.',
}

const RECURSOS = [
  { titulo: 'Artículos', estado: '🚧 Próximamente', texto: 'Contenido sobre educación, productividad, cultura, tecnología y desarrollo personal.' },
  { titulo: 'Guías', estado: '🚧 Próximamente', texto: 'Guías prácticas para aprender nuevas habilidades y explorar diferentes áreas del conocimiento.' },
  { titulo: 'Biblioteca', estado: '🚧 En construcción', texto: 'Recomendaciones de libros, documentos, investigaciones y materiales de consulta.' },
  { titulo: 'Herramientas', estado: '🚧 En construcción', texto: 'Recopilación de recursos digitales seleccionados para apoyar el aprendizaje y la productividad.' },
]

export default function RecursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Acceso abierto al conocimiento"
        description="Esta sección reunirá materiales útiles para apoyar el aprendizaje continuo."
      />

      <section className="bg-fondo border-b border-verde/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 gap-6">
          {RECURSOS.map((r) => (
            <div key={r.titulo} className="rounded-2xl bg-marfil border border-verde/10 p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-dorado/15 px-3 py-1 text-xs text-verde-oscuro">
                {r.estado}
              </span>
              <h2 className="mt-4 font-display text-xl text-verde">{r.titulo}</h2>
              <p className="mt-2 text-sm text-verde-oscuro/75 leading-relaxed">{r.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-marfil">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <WaitlistForm />
        </div>
      </section>
    </>
  )
}
