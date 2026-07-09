import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Alianzas',
  description: 'AMATL está abierto a construir alianzas con instituciones, organizaciones y empresas.',
}

export default function AlianzasPage() {
  return (
    <PageHero
      eyebrow="Alianzas"
      title="La colaboración multiplica el impacto"
      description="Estamos abiertos a construir alianzas con instituciones educativas, organizaciones sociales, empresas y comunidades que compartan nuestros valores. Próximamente presentaremos nuestras alianzas y colaboraciones."
      enDesarrollo
    />
  )
}
