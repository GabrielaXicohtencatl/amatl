import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contacto',
  description: 'Escríbenos si deseas colaborar, participar o conocer más sobre AMATL.',
}

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Conectemos"
        description="Si deseas colaborar, participar o conocer más sobre AMATL, estaremos encantados de escucharte."
      />
      <section className="bg-fondo">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="text-sm text-verde-oscuro/80">
            <p>
              También puedes escribirnos directamente a{' '}
              <a href="mailto:contacto@amatl.org" className="text-verde underline">
                contacto@amatl.org
              </a>
            </p>
            <p className="mt-4">O encontrarnos en redes sociales:</p>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-verde" href="https://instagram.com/amatl" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="hover:text-verde" href="https://facebook.com/amatl" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a className="hover:text-verde" href="https://x.com/amatl" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a className="hover:text-verde" href="https://linkedin.com/company/amatl" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="hover:text-verde" href="https://youtube.com/@amatl" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
