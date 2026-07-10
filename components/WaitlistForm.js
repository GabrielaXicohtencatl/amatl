'use client'

import { useState } from 'react'

export default function WaitlistForm({
  title = 'Estamos construyendo AMATL.',
  description = 'Sé una de las primeras personas en conocer nuestros cursos, mentorías y comunidad.',
  className = '',
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'No se pudo completar el registro.')
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  if (status === 'success') {
     return (
       <div className={`rounded-2xl border border-dorado/40 bg-marfil p-6 ${className}`}>
         <p className="font-display text-lg !text-verde">¡Listo, ya eres parte de la lista!</p>
         <p className="mt-1 text-sm !text-verde-oscuro/80">
           Te avisaremos en cuanto abramos cursos, mentorías y espacios de comunidad.
         </p>
       </div>
     )
   }

  return (
    <div className={className}>
      <p className="font-display text-lg sm:text-xl text-verde">{title}</p>
      <p className="mt-1 text-sm text-verde-oscuro/80 max-w-md">{description}</p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 max-w-md">
        <label htmlFor="waitlist-email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-verde/20 bg-marfil px-4 py-2.5 text-sm text-verde-oscuro placeholder:text-verde-oscuro/40 focus:border-dorado outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-dorado px-6 py-2.5 text-sm font-medium text-verde-oscuro hover:bg-dorado-claro transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando…' : 'Quiero unirme'}
        </button>
      </form>

      {status === 'error' && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {errorMsg || 'Algo salió mal. Intenta de nuevo en un momento.'}
        </p>
      )}
    </div>
  )
}
