import PageHero from '@/components/PageHero'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Comunidad',
  description: 'El corazón de AMATL: un espacio para aprender, colaborar y crecer juntas.',
}

export default function ComunidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Comunidad"
        title="El corazón de AMATL"
        description="Nuestro objetivo es construir un espacio donde las personas puedan aprender, colaborar y crecer juntas. Estamos preparando herramientas y espacios que facilitarán la interacción entre miembros."
        enDesarrollo
      />
      <section className="bg-marfil">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <WaitlistForm />
        </div>
      </section>
    </>
  )
}
