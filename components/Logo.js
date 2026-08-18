import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className = '' }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group ${className}`}
      aria-label="AMATL — Inicio"
    >
      <Image
        src="/logo.png"
        alt="AMATL"
        width={36}
        height={36}
        className="object-contain"
        priority
      />
      <span className="font-display text-xl text-verde tracking-tight">AMATL</span>
    </Link>
  )
}