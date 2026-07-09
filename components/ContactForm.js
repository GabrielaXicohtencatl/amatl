'use client'

import { useState } from 'react'

const initialForm = { nombre: '', correo: '', asunto: '', mensaje: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'No se pudo enviar tu mensaje.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-dorado/40 bg-marfil p-6">
        <p className="font-display text-lg text-verde">¡Gracias por escribirnos!</p>
        <p className="mt-1 text-sm text-verde-oscuro/80">
          Leemos cada mensaje. Te responderemos a la brevedad a tu correo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-lg" noValidate>
      <div>
        <label htmlFor="nombre" className="block text-sm text-verde-oscuro mb-1">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={handleChange}
          className="w-full rounded-lg border border-verde/20 bg-marfil px-4 py-2.5 text-sm focus:border-dorado outline-none"
        />
      </div>

      <div>
        <label htmlFor="correo" className="block text-sm text-verde-oscuro mb-1">
          Correo electrónico
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          value={form.correo}
          onChange={handleChange}
          className="w-full rounded-lg border border-verde/20 bg-marfil px-4 py-2.5 text-sm focus:border-dorado outline-none"
        />
      </div>

      <div>
        <label htmlFor="asunto" className="block text-sm text-verde-oscuro mb-1">
          Asunto
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          value={form.asunto}
          onChange={handleChange}
          className="w-full rounded-lg border border-verde/20 bg-marfil px-4 py-2.5 text-sm focus:border-dorado outline-none"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm text-verde-oscuro mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          value={form.mensaje}
          onChange={handleChange}
          className="w-full rounded-lg border border-verde/20 bg-marfil px-4 py-2.5 text-sm focus:border-dorado outline-none"
        />
      </div>

      {/* honeypot anti-spam: invisible para personas, atractivo para bots */}
      <input type="text" name="empresa" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="justify-self-start rounded-full bg-verde px-6 py-2.5 text-sm text-marfil hover:bg-verde-claro transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-700">
          {errorMsg || 'Algo salió mal. Intenta de nuevo en un momento.'}
        </p>
      )}
    </form>
  )
}
