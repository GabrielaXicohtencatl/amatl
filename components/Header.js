'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/programas', label: 'Programas' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/blog', label: 'Blog' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/comunidad', label: 'Comunidad' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/alianzas', label: 'Alianzas' },
  { href: '/transparencia', label: 'Transparencia' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-fondo/95 backdrop-blur border-b border-verde/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Logo />

        {/* Navegación de escritorio */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-verde-oscuro hover:text-dorado transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden lg:inline-flex items-center rounded-full bg-verde px-5 py-2 text-sm text-marfil hover:bg-verde-claro transition-colors"
        >
          Únete a la comunidad
        </Link>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-verde"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6L20 20M20 6L6 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 8H22M4 13H22M4 18H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="lg:hidden border-t border-verde/10 bg-fondo px-5 py-4 flex flex-col gap-3"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1.5 text-verde-oscuro"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full bg-verde px-5 py-2.5 text-marfil"
          >
            Únete a la comunidad
          </Link>
        </nav>
      )}
    </header>
  )
}
