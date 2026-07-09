import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Aviso de cookies',
  description: 'Qué cookies usa el sitio de AMATL y para qué.',
}

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso de cookies" />
      <section className="bg-marfil">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 space-y-4 text-sm text-verde-oscuro/80 leading-relaxed">
          <p>
            Este sitio utiliza cookies de Google Analytics para entender, de forma agregada y
            anónima, cómo las personas navegan por AMATL: qué páginas visitan y cómo llegaron aquí.
            Esta información nos ayuda a mejorar el sitio.
          </p>
          <p>
            No usamos cookies de publicidad ni de rastreo de terceros. Puedes bloquear las cookies
            desde la configuración de tu navegador si lo prefieres, aunque algunas funciones del
            sitio podrían no funcionar igual.
          </p>
        </div>
      </section>
    </>
  )
}
