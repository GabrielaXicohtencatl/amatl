import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Transparencia',
  description: 'Información sobre los avances y resultados de AMATL.',
}

export default function TransparenciaPage() {
  return (
    <PageHero
      eyebrow="Transparencia"
      title="La confianza es fundamental"
      description="En esta sección compartiremos información relevante sobre nuestros avances y resultados. Conforme AMATL crezca, publicaremos informes, indicadores y reportes de impacto."
      enDesarrollo
    />
  )
}
