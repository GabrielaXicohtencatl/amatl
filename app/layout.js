import { Libre_Baskerville, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amatl.org'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AMATL | Aprender para trascender',
    template: '%s | AMATL',
  },
  description:
    'AMATL es una comunidad dedicada al aprendizaje, el crecimiento humano y la construcción de conocimiento compartido.',
  openGraph: {
    title: 'AMATL | Aprender para trascender',
    description:
      'AMATL es una comunidad dedicada al aprendizaje, el crecimiento humano y la construcción de conocimiento compartido.',
    url: siteUrl,
    siteName: 'AMATL',
    locale: 'es_MX',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AMATL' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMATL | Aprender para trascender',
    description:
      'AMATL es una comunidad dedicada al aprendizaje, el crecimiento humano y la construcción de conocimiento compartido.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${libreBaskerville.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-verde focus:text-marfil focus:px-4 focus:py-2 focus:rounded"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
