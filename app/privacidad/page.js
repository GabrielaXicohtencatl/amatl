import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Aviso de privacidad',
  description: 'Cómo AMATL trata los datos personales de quienes visitan y usan el sitio.',
}

export default function PrivacidadPage() {
  return (
    <>
      <PageHero eyebrow="AMATL" title="Aviso de privacidad" />
      <section className="bg-marfil">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 space-y-6 text-sm text-verde-oscuro/80 leading-relaxed">

          <div>
            <h2 className="font-display text-lg text-verde mb-2">¿Qué datos recopilamos?</h2>
            <p>
              AMATL recopila el correo electrónico que proporcionas voluntariamente al suscribirte
              a nuestras actualizaciones, o al escribirnos mediante el formulario de contacto.
              Adicionalmente, si te registras para participar en AMATL a través de nuestro
              formulario de inscripción, recopilamos tu nombre, correo electrónico, teléfono y la
              información que compartas sobre cómo te gustaría participar.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-verde mb-2">Datos de personas menores de edad</h2>
            <p>
              Nuestro formulario de inscripción permite registrar a otra persona, incluyendo
              menores de edad. En estos casos, requerimos que quien realiza el registro sea el
              padre, madre o tutor/a legal del menor, y que proporcione un medio de contacto
              (correo y/o teléfono) de un adulto responsable, nunca del menor directamente. Toda
              comunicación relacionada con la inscripción de un menor se dirige exclusivamente a
              ese contacto adulto. Al enviar el formulario en representación de un menor, la
              persona confirma tener la autoridad legal para hacerlo y autoriza el tratamiento de
              esos datos conforme a este aviso.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-verde mb-2">¿Para qué usamos tus datos?</h2>
            <p>
              Usamos esta información únicamente para comunicarnos contigo sobre AMATL: novedades,
              cursos, mentorías, comunidad y eventos, así como para dar seguimiento a tu
              inscripción o mensaje. No vendemos ni compartimos tu información con terceros con
              fines comerciales.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-verde mb-2">Servicios que utilizamos</h2>
            <p>
              Para operar el sitio nos apoyamos en herramientas de terceros: Brevo (para enviar
              correos a quienes se suscriben o escriben), Google Forms (para procesar inscripciones)
              y Google Analytics (para entender, de forma agregada y anónima, cómo se usa el
              sitio). Estos proveedores procesan los datos conforme a sus propias políticas de
              privacidad.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-verde mb-2">Tus derechos</h2>
            <p>
              Puedes solicitar en cualquier momento el acceso, corrección o eliminación de tus
              datos (o los de un menor bajo tu tutela) escribiendo a{' '}
              <a href="mailto:ecosistemaamatl@gmail.com" className="text-verde underline">
                ecosistemaamatl@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}