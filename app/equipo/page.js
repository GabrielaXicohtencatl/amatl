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
          <h2 className="font-display text-xl text-verde mb-6">Fundadora</h2>
          <div className="max-w-xl rounded-2xl bg-marfil border border-verde/10 p-7">
            <p className="font-display text-lg text-verde">Gabriela Xicohtencatl</p>
            <p className="text-xs uppercase tracking-wide text-dorado mt-1 mb-4">Fundadora de AMATL</p>
            <div className="space-y-3 text-sm text-verde-oscuro/80 leading-relaxed">
              <p>
                Estoy por cursar mi último año de preparatoria como estudiante de programación, en ese
                contexto de permanente formación, AMATL nació de algo muy simple: aprender es, para mí, 
                una de las cosas más hermosas del mundo, y creo profundamente que es uno de los pilares 
                más importantes de cualquier sociedad. En lugar de decirle a las personas cómo aprender, 
                en AMATL buscamos ayudarlas a descubrir su propia forma de hacerlo, para que logren
                integrarla a áreas como la escuela cualquier ámbito más de su vida.
              </p>
              <p>
                Me apasiona el mundo STEM, quiero estudiar Ingeniería en Ciencia de Datos y, más
                adelante, Física, pero también amo la lectoescritura, la música y muchas, muchísimas
                cosas más. Esa variedad de intereses viene del mismo lugar: el amor por aprender.
              </p>
              <p>
                Para mí, aprender no es solo para algunos, es para todos, aunque el camino sea distinto
                en cada persona. AMATL es mi forma de acompañar ese camino.
              </p>
            </div>
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
