import Link from 'next/link'

/**
 * Wordmark provisional de AMATL.
 * Cuando tengas el logo definitivo en SVG, reemplaza este componente
 * por un <Image src="/logo.svg" ... /> o pega el <svg> del logo aquí mismo.
 */
export default function Logo({ className = '' }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group ${className}`}
      aria-label="AMATL — Inicio"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* semilla germinando: raíz + brote, motivo central de AMATL */}
        <path
          d="M16 4C16 4 22 9 22 16C22 20.5 19.3 23.7 16 25C12.7 23.7 10 20.5 10 16C10 9 16 4 16 4Z"
          stroke="#1e4d3a"
          strokeWidth="1.6"
        />
        <path d="M16 25V29" stroke="#1e4d3a" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M16 29C16 29 12.5 28.6 11 26.5"
          stroke="#b79a5b"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M16 29C16 29 19.5 28.6 21 26.5"
          stroke="#b79a5b"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-xl text-verde tracking-tight">AMATL</span>
    </Link>
  )
}
