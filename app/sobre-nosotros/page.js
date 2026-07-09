import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Sobre nosotros',
  description: 'La historia, la misión, la visión y los valores detrás de AMATL.',
}

const VALORES = [
  { titulo: 'Aprendizaje permanente', texto: 'Siempre existe algo nuevo por descubrir.' },
  { titulo: 'Curiosidad', texto: 'Las preguntas son el inicio del conocimiento.' },
  { titulo: 'Colaboración', texto: 'Crecemos más cuando aprendemos juntos.' },
  { titulo: 'Inclusión', texto: 'Todas las personas tienen algo valioso que aportar.' },
  { titulo: 'Integridad', texto: 'Actuamos con honestidad y responsabilidad.' },
  { titulo: 'Impacto', texto: 'Buscamos generar cambios significativos y sostenibles.' },
]

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        title="Una comunidad construida alrededor de una pregunta sencilla"
        description="¿Cómo podemos construir una comunidad donde aprender sea una herramienta para transformar vidas?"
      />

      <section className="bg-marfil border-b border-verde/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 space-y-4 text-verde-oscuro/80 leading-relaxed">
          <h2 className="font-display text-2xl text-verde">Historia</h2>
          <p>
            AMATL surge como una iniciativa orientada a fomentar el aprendizaje significativo y el
            crecimiento integral de las personas. Desde esa inquietud comenzó la construcción de un
            espacio que busca conectar conocimiento, cultura, creatividad y compromiso social.
          </p>
          <p>
            AMATL continúa evolucionando como un proyecto abierto a nuevas ideas, personas y
            oportunidades de colaboración.
          </p>
        </div>
      </section>

      <section className="bg-fondo border-b border-verde/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 space-y-4 text-verde-oscuro/80 leading-relaxed">
          <h2 className="font-display text-2xl text-verde">Significado de AMATL</h2>
          <p>
            La palabra "Āmatl" proviene del náhuatl y hace referencia al papel utilizado por
            diversas culturas mesoamericanas para preservar conocimiento, registrar acontecimientos
            y transmitir saberes entre generaciones.
          </p>
          <p>
            Elegimos este nombre porque representa la importancia del aprendizaje, la memoria
            colectiva y la construcción de conocimiento compartido. Así como el amate permitió
            conservar historias y conocimientos, AMATL busca convertirse en un espacio donde las
            ideas puedan crecer, desarrollarse y trascender.
          </p>
        </div>
      </section>

      <section className="bg-marfil border-b border-verde/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-verde/10 p-6">
            <h2 className="font-display text-xl text-verde">Misión</h2>
            <p className="mt-3 text-sm text-verde-oscuro/80 leading-relaxed">
              Impulsar el aprendizaje, la colaboración y el desarrollo humano mediante la creación
              de espacios accesibles que fomenten el crecimiento personal, la participación
              comunitaria y la generación de impacto positivo.
            </p>
          </div>
          <div className="rounded-2xl border border-verde/10 p-6">
            <h2 className="font-display text-xl text-verde">Visión</h2>
            <p className="mt-3 text-sm text-verde-oscuro/80 leading-relaxed">
              Convertirnos en una comunidad de referencia para el aprendizaje y la transformación
              social, donde las personas encuentren oportunidades para desarrollar su potencial y
              contribuir activamente a la construcción de un mejor futuro.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-fondo">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <h2 className="font-display text-2xl text-verde text-center">Valores</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALORES.map((v) => (
              <div key={v.titulo} className="rounded-2xl bg-marfil border border-verde/10 p-6">
                <h3 className="font-display text-lg text-verde">{v.titulo}</h3>
                <p className="mt-2 text-sm text-verde-oscuro/75">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
