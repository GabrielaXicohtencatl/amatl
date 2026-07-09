import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/brevo'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const { nombre, correo, asunto, mensaje, empresa } = body

  // Honeypot: si este campo oculto viene lleno, es un bot.
  if (empresa) {
    return NextResponse.json({ ok: true })
  }

  if (!nombre || !asunto || !mensaje || !EMAIL_REGEX.test(correo || '')) {
    return NextResponse.json({ error: 'Revisa los campos del formulario.' }, { status: 400 })
  }

  try {
    await sendContactEmail({ nombre, correo, asunto, mensaje })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Error enviando mensaje de contacto:', err)
    return NextResponse.json(
      { error: 'No pudimos enviar tu mensaje en este momento. Intenta de nuevo más tarde.' },
      { status: 500 }
    )
  }
}
