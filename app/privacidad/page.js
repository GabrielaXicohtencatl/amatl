import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Aviso de privacidad',
  description: 'Cómo AMATL trata los datos personales de quienes visitan y usan el sitio.',
}

export default function PrivacidadPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso de privacidad" />
      <section className="bg-marfil">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 space-y-4 text-sm text-verde-oscuro/80 leading-relaxed">
          <p>
            <strong>Nota:</strong> este es un texto de partida. Antes de publicar el sitio, revísalo
            con criterio legal (o con alguien que sepa del tema) para asegurarte de que cumple con
            la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México).
          </p>
          <p>
            AMATL recopila el correo electrónico que proporcionas voluntariamente al unirte a la
            lista de espera o al escribirnos mediante el formulario de contacto. Usamos esta
            información únicamente para comunicarnos contigo sobre AMATL: novedades, cursos,
            mentorías, comunidad y eventos.
          </p>
          <p>
            No vendemos ni compartimos tu información con terceros con fines comerciales. Puedes
            solicitar la eliminación de tus datos en cualquier momento escribiendo a{' '}
            <a href="mailto:ecosistemaamatl@gmail.com" className="text-verde underline">
              ecosistemaamatl@gmail.com
            </a>
            .
          </p>
          <p>
            Utilizamos Google Analytics para entender cómo se usa el sitio, y Brevo para gestionar
            el envío de correos a quienes se suscriben.
          </p>
        </div>
      </section>
    </>
  )
}
