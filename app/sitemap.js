const ROUTES = [
  '',
  '/sobre-nosotros',
  '/programas',
  '/recursos',
  '/blog',
  '/eventos',
  '/comunidad',
  '/equipo',
  '/alianzas',
  '/transparencia',
  '/contacto',
]

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amatl.org'

  return ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
