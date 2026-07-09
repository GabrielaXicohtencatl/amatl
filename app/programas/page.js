import PageHero from '@/components/PageHero'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Programas',
  description: 'Talleres, mentorías, clubes y proyectos que AMATL está construyendo.',
}

const PROGRAMAS = [
  {
    titulo: 'Talleres',
    texto:
      'Estamos diseñando talleres enfocados en habilidades personales, creatividad, liderazgo, tecnología, educación y desarrollo comunitario.',
  },
  {
    titulo: 'Mentorías',
    texto:
      'Nuestro objetivo es conectar personas con experiencia y conocimientos con quienes buscan orientación para continuar aprendiendo y creciendo.',
  },
  {
    titulo: 'Clubes',
    texto:
      'Estamos trabajando en la creación de espacios de encuentro para compartir intereses comunes, debatir ideas y fortalecer la comunidad.',
  },
  {
    titulo: 'Proyectos',
    texto: 'AMATL impulsará proyectos colaborativos orientados al aprendizaje, la innovación y el impacto social.',
  },
]

export default function ProgramasPage() {
  return (
    <>
      <PageHero
        eyebrow="Programas"
        title="Oportunidades de aprendizaje y participación"
        description="Los programas de AMATL buscan ofrecer oportunidades de aprendizaje, participación y desarrollo para diferentes perfiles e intereses. Actualmente nos encontramos desarrollando nuevas iniciativas que serán incorporadas progresivamente."
      />

      <section className="bg-fondo border-b border-verde/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid sm:grid-cols-2 gap-6">
          {PROGRAMAS.map((p) => (
            <div key={p.titulo} className="rounded-2xl bg-marfil border border-verde/10 p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-dorado/15 px-3 py-1 text-xs text-verde-oscuro">
                🚧 En desarrollo
              </span>
              <h2 className="mt-4 font-display text-xl text-verde">{p.titulo}</h2>
              <p className="mt-2 text-sm text-verde-oscuro/75 leading-relaxed">{p.texto}</p>
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
