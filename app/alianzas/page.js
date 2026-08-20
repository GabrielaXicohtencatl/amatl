import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Alianzas',
  description: 'AMATL está abierto a construir alianzas con instituciones, organizaciones y empresas.',
}

export default function AlianzasPage() {
  return (
    <>
      <PageHero
        eyebrow="Alianzas"
        title="La colaboración multiplica el impacto"
        description="Estamos abiertos a construir alianzas con instituciones educativas, organizaciones sociales, empresas y comunidades que compartan nuestros valores."
        enDesarrollo
      />

      <section className="bg-fondo">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16">
          <div className="rounded-3xl border-2 border-dorado/40 bg-marfil px-6 sm:px-12 py-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl text-verde">
              ¿Quieres ser aliado de AMATL?
            </h2>
            <p className="mt-3 text-verde-oscuro/75 max-w-md mx-auto">
              Si representas una institución, organización o empresa interesada en colaborar con
              nosotros, nos encantaría conocerte.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2iTZ_W7mfUv52JLyPtuecAII1Nd71wvAu9xgbzwkpodWzPQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-verde px-7 py-3 text-sm text-marfil hover:bg-verde-claro transition-colors"
            >
              Conviértete en aliado
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}