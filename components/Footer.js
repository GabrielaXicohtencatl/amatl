import Link from 'next/link'
import Logo from './Logo'

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/amatl' },
  { label: 'Facebook', href: 'https://facebook.com/amatl' },
  { label: 'X', href: 'https://x.com/amatl' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/amatl' },
  { label: 'YouTube', href: 'https://youtube.com/@amatl' },
]

const COLUMNS = [
  {
    title: 'Comunidad',
    links: [
      { href: '/sobre-nosotros', label: 'Sobre nosotros' },
      { href: '/programas', label: 'Programas' },
      { href: '/comunidad', label: 'Comunidad' },
      { href: '/equipo', label: 'Equipo' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { href: '/recursos', label: 'Recursos' },
      { href: '/blog', label: 'Blog' },
      { href: '/eventos', label: 'Eventos' },
    ],
  },
  {
    title: 'Organización',
    links: [
      { href: '/alianzas', label: 'Alianzas' },
      { href: '/transparencia', label: 'Transparencia' },
      { href: '/contacto', label: 'Contacto' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-verde text-marfil">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo className="[&_span]:text-marfil" />
          <p className="mt-3 text-sm text-marfil/70 max-w-xs">Aprender para trascender</p>
          <p className="mt-4 text-sm text-marfil/70">
            <a href="mailto:contacto@amatl.org" className="hover:text-dorado-claro">
              contacto@amatl.org
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-marfil/70 hover:text-dorado-claro"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-display text-sm text-dorado-claro mb-3">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-marfil/70 hover:text-marfil">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-marfil/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-marfil/50">
          <p>© {new Date().getFullYear()} AMATL. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-marfil">Aviso de privacidad</Link>
            <Link href="/cookies" className="hover:text-marfil">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
