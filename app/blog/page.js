import PageHero from '@/components/PageHero'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Blog',
  description: 'Artículos, reflexiones y contenidos relacionados con la misión de AMATL.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Reflexiones sobre aprendizaje, cultura e impacto"
        description="Estamos trabajando en la publicación de artículos, reflexiones y contenidos relacionados con la misión de AMATL."
        enDesarrollo
      />
      <section className="bg-marfil">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <WaitlistForm
            title="Te avisamos cuando publiquemos el primer artículo."
            description="Deja tu correo y sé de las primeras personas en leer el blog de AMATL."
          />
        </div>
      </section>
    </>
  )
}
