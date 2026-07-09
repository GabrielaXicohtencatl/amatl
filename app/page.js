import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'

const PILARES = [
  {
    titulo: 'Aprendizaje',
    texto: 'Promovemos el acceso al conocimiento mediante recursos, experiencias y espacios de formación continua.',
  },
  {
    titulo: 'Comunidad',
    texto: 'Construimos redes de personas que colaboran, comparten y crecen juntas.',
  },
  {
    titulo: 'Cultura',
    texto: 'Reconocemos el valor de nuestras raíces, nuestra historia y la diversidad de perspectivas.',
  },
  {
    titulo: 'Impacto',
    texto: 'Transformamos el conocimiento en acciones que generen cambios reales.',
  },
]

const PARTICIPA = [
  { titulo: 'Como estudiante', texto: 'Explora recursos y oportunidades de aprendizaje.' },
  { titulo: 'Como voluntario', texto: 'Contribuye al crecimiento de la comunidad.' },
  { titulo: 'Como mentor', texto: 'Comparte conocimientos y experiencias.' },
  { titulo: 'Como aliado', texto: 'Impulsa iniciativas de impacto.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-fondo amate-edge">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-dorado mb-4">
              Comunidad de aprendizaje
            </p>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight text-verde">
              Aprender para trascender
            </h1>
            <p className="mt-5 font-sans text-lg text-verde-oscuro/80 max-w-md">
              AMATL es una comunidad que impulsa el aprendizaje, la creatividad y el crecimiento
              humano para generar un impacto positivo en las personas y en su entorno.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/sobre-nosotros"
                className="rounded-full bg-verde px-6 py-3 text-sm text-marfil hover:bg-verde-claro transition-colors"
              >
                Conoce AMATL
              </Link>
              <Link
                href="#lista-de-espera"
                className="rounded-full border border-verde px-6 py-3 text-sm text-verde hover:bg-verde hover:text-marfil transition-colors"
              >
                Únete a la comunidad
              </Link>
            </div>
          </div>

          {/* Motivo visual: semilla → árbol, raíces profundas (identidad AMATL) */}
          <div className="relative mx-auto w-full max-w-sm aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
              <circle cx="200" cy="200" r="190" fill="#FAF8F2" />
              {/* raíces */}
              <path
                d="M200 230C200 230 150 260 130 320M200 230C200 230 250 260 270 320M200 230C200 230 200 280 200 340"
                stroke="#8B6B4A"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* tallo */}
              <path d="M200 230V120" stroke="#1e4d3a" strokeWidth="3" strokeLinecap="round" />
              {/* copa / hojas concéntricas, evocando anillos de crecimiento */}
              <circle cx="200" cy="110" r="26" stroke="#1e4d3a" strokeWidth="2" fill="none" />
              <circle cx="200" cy="110" r="46" stroke="#4F8A5B" strokeWidth="1.6" fill="none" />
              <circle cx="200" cy="110" r="66" stroke="#b79a5b" strokeWidth="1.2" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* QUÉ ES AMATL */}
      <section className="bg-marfil border-b border-verde/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-verde">¿Qué es AMATL?</h2>
          <p className="mt-6 text-verde-oscuro/80 leading-relaxed">
            AMATL nace de la convicción de que el aprendizaje tiene el poder de transformar vidas.
            Inspirado en la tradición del conocimiento compartido, buscamos crear espacios donde
            las personas puedan desarrollar habilidades, intercambiar ideas y construir proyectos
            que contribuyan al bienestar de sus comunidades.
          </p>
          <p className="mt-4 text-verde-oscuro/80 leading-relaxed">
            Creemos que aprender no consiste únicamente en adquirir información, sino en
            desarrollar la capacidad de comprender, crear y trascender.
          </p>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-fondo">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <h2 className="font-display text-2xl sm:text-3xl text-verde text-center">Nuestros pilares</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES.map((p) => (
              <div key={p.titulo} className="rounded-2xl bg-marfil border border-verde/10 p-6">
                <h3 className="font-display text-lg text-verde">{p.titulo}</h3>
                <p className="mt-2 text-sm text-verde-oscuro/75 leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPA */}
      <section className="bg-verde text-marfil">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <h2 className="font-display text-2xl sm:text-3xl text-center">Participa en AMATL</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTICIPA.map((p) => (
              <div key={p.titulo} className="rounded-2xl border border-marfil/15 p-6">
                <h3 className="font-display text-lg text-dorado-claro">{p.titulo}</h3>
                <p className="mt-2 text-sm text-marfil/75 leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTADO DEL PROYECTO */}
      <section className="bg-marfil border-b border-verde/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-dorado/15 px-4 py-1.5 text-xs text-verde-oscuro">
            🚧 En construcción y crecimiento
          </span>
          <p className="mt-5 text-verde-oscuro/80 leading-relaxed">
            Actualmente estamos desarrollando nuevas iniciativas, recursos y espacios para la
            comunidad. Te invitamos a acompañarnos en este proceso.
          </p>
        </div>
      </section>

      {/* LISTA DE ESPERA */}
      <section id="lista-de-espera" className="bg-fondo amate-edge">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <div className="rounded-3xl bg-verde text-marfil px-6 sm:px-12 py-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-dorado-claro mb-3">
                Únete a la lista de espera
              </p>
              <h2 className="font-display text-2xl sm:text-3xl">
                Sé de las primeras personas en entrar a AMATL
              </h2>
              <p className="mt-3 text-marfil/75 max-w-md">
                Cursos, mentorías y comunidad están en camino. Deja tu correo y te avisamos en
                cuanto abramos las primeras inscripciones.
              </p>
            </div>
            <WaitlistForm
              className="[&_p]:text-marfil [&_input]:bg-marfil"
              title=""
              description=""
            />
          </div>
        </div>
      </section>

      {/* LLAMADO FINAL */}
      <section className="bg-marfil">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-verde">
            El conocimiento florece cuando se comparte.
          </h2>
          <Link
            href="/contacto"
            className="mt-8 inline-flex rounded-full bg-dorado px-7 py-3 text-sm font-medium text-verde-oscuro hover:bg-dorado-claro transition-colors"
          >
            Únete a AMATL
          </Link>
        </div>
      </section>
    </>
  )
}
