import PageHero from '@/components/PageHero'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Eventos',
  description: 'Talleres, encuentros y actividades comunitarias de AMATL.',
}

export default function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Eventos"
        title="Encuentros para aprender y crecer juntos"
        description="En esta sección encontrarás talleres, encuentros, actividades comunitarias y eventos especiales."
        enDesarrollo
      />
      <section className="bg-marfil">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <WaitlistForm
            title="Entérate primero de nuestros próximos eventos."
            description="Deja tu correo y te avisamos en cuanto se abra el calendario de eventos."
          />
        </div>
      </section>
    </>
  )
}
