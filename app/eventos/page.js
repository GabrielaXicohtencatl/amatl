import Image from 'next/image'
import PageHero from '@/components/PageHero'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Eventos',
  description: 'Talleres, encuentros y actividades comunitarias de AMATL.',
}

// Datos de tus eventos: puedes editar, quitar o agregar aquí fácilmente
const eventos = [
  {
    id: 1,
    titulo: 'Campaña de Recolección de Ropa',
    tipo: 'proximo', // 'proximo', 'ocurriendo', o 'pasado'
    fecha: '17,18 de Octubre, 2026',
    hora: '12:30 PM - 3:00 PM',
    lugar: 'Oficinas de Regidores, H. Presidencia de San Cosme Mazatecochco',
    descripcion: 'Únete a nuestra siguiente campaña de recolección de ropa. ¡Tu ayuda hace la diferencia!',
    imagen: '/images/eventos/limpieza-octubre.jpg',
    linkRegistro: '#',
  },
  {
    id: 2,
    titulo: 'Jornada de Limpieza Comunitaria de nuestras Barrancas',
    tipo: 'pasado', // 'proximo', 'ocurriendo', o 'pasado'
    fecha: '24 de Agosto, 2026',
    hora: '10:00 AM',
    lugar: 'San Cosme Mazatecochco',
    descripcion: 'Únete a nuestra siguiente jornada para rescatar y limpiar nuestros espacios naturales.',
    imagen: '/images/eventos/limpieza-octubre.jpg',
  },
  {
    id: 3,
    titulo: 'Ponencia "¿Por qué nadie nos enseñó a aprender?"',
    tipo: 'pasado',
    fecha: '22 de Septiembre, 2026',
    hora: '10:00 AM',
    lugar: 'Escuela Secundaria Técnica No. 46, Mazatecochco, Tlaxcala',
    descripcion: 'Una charla sobre la importancia del aprendizaje autónomo y cómo podemos mejorar nuestras habilidades de aprendizaje.',
    imagen: '/images/eventos/taller-pet.jpg',
  },
]

export default function EventosPage() {
  const proximosUOcurriendo = eventos.filter(e => e.tipo === 'proximo' || e.tipo === 'ocurriendo')
  const pasados = eventos.filter(e => e.tipo === 'pasado')

  return (
    <>
      <PageHero
        eyebrow="Eventos y Comunidad"
        title="Encuentros para aprender y crecer juntos"
        description="Descubre nuestras próximas actividades o revive el impacto de los eventos que ya realizamos."
      />

      {/* SECCIÓN DE PRÓXIMOS / OCURRIENDO */}
      <section className="bg-fondo py-16 amate-edge">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12">
            <span className="text-dorado uppercase tracking-widest text-sm font-semibold">Agenda abierta</span>
            <h2 className="text-3xl sm:text-4xl font-display text-verde mt-1">Próximos Eventos</h2>
          </div>

          {proximosUOcurriendo.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proximosUOcurriendo.map((evento) => (
                <div key={evento.id} className="bg-marfil rounded-2xl p-6 shadow-sm border border-dorado/20 flex flex-col justify-between">
                  <div>
                    {evento.tipo === 'ocurriendo' && (
                      <span className="inline-block bg-verde text-fondo text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-pulse">
                        ¡Sucediendo ahora!
                      </span>
                    )}
                    <span className="text-xs font-semibold text-tierra uppercase tracking-wider block mb-2">
                      {evento.fecha} • {evento.hora}
                    </span>
                    <h3 className="text-2xl font-display text-verde-oscuro mb-3">{evento.titulo}</h3>
                    <p className="text-verde-oscuro/80 text-sm mb-4">{evento.descripcion}</p>
                    <p className="text-xs text-tierra font-medium mb-6">📍 {evento.lugar}</p>
                  </div>
                  
                  {evento.linkRegistro && (
                    <a
                      href={evento.linkRegistro}
                      className="inline-block text-center bg-verde text-fondo py-2.5 px-5 rounded-xl font-medium text-sm hover:bg-verde-claro transition-colors"
                    >
                      Quiero participar
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-marfil p-8 rounded-2xl text-center border border-dorado/20 max-w-xl mx-auto">
              <p className="text-verde-oscuro/80 mb-6">Pronto anunciaremos nuevas fechas para nuestros encuentros comunitarios.</p>
              <WaitlistForm
                title="Entérate primero de nuestros próximos eventos."
                description="Deja tu correo y te avisamos en cuanto se abra el calendario."
              />
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN DE EVENTOS PASADOS */}
      {pasados.length > 0 && (
        <section className="bg-marfil py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-dorado uppercase tracking-widest text-sm font-semibold">Memoria colectiva</span>
              <h2 className="text-3xl sm:text-4xl font-display text-verde mt-1">Eventos Anteriores</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pasados.map((evento) => (
                <div key={evento.id} className="bg-fondo rounded-2xl p-6 border border-dorado/20 opacity-90">
                  <span className="text-xs font-semibold text-tierra uppercase tracking-wider block mb-2">
                    {evento.fecha} • Concluido
                  </span>
                  <h3 className="text-xl font-display text-verde-oscuro mb-2">{evento.titulo}</h3>
                  <p className="text-verde-oscuro/80 text-sm mb-4">{evento.descripcion}</p>
                  <p className="text-xs text-tierra font-medium">📍 {evento.lugar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}