import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Equipo',
  description: 'Las personas que hacen posible AMATL.',
}

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Las personas detrás de AMATL"
        description="AMATL es posible gracias al compromiso de las personas que creen en el poder del aprendizaje y la colaboración."
      />

      <section className="bg-fondo border-b border-verde/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <h2 className="font-display text-xl text-verde mb-6">Fundador(a)</h2>
          <div className="max-w-sm rounded-2xl bg-marfil border border-verde/10 p-6">
            <div className="w-20 h-20 rounded-full bg-verde/10 mb-4" aria-hidden="true" />
            {/* Reemplaza este bloque con tu fotografía, nombre y biografía breve */}
            <p className="font-display text-lg text-verde">Tu nombre aquí</p>
            <p className="mt-2 text-sm text-verde-oscuro/75">
              Breve biografía: quién eres, por qué creaste AMATL y qué te motiva.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-marfil">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-dorado/15 px-4 py-1.5 text-xs text-verde-oscuro">
            Próximamente
          </span>
          <p className="mt-4 text-verde-oscuro/80">
            Esperamos integrar nuevos colaboradores, voluntarios y aliados que contribuyan al
            crecimiento del proyecto.
          </p>
        </div>
      </section>
    </>
  )
}
