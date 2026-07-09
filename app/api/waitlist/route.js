import { NextResponse } from 'next/server'
import { addContactToBrevoList } from '@/lib/brevo'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const email = (body.email || '').trim().toLowerCase()

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Ingresa un correo electrónico válido.' }, { status: 400 })
  }

  try {
    await addContactToBrevoList(email)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Error registrando en la lista de espera:', err)
    return NextResponse.json(
      { error: 'No pudimos guardar tu correo en este momento. Intenta de nuevo más tarde.' },
      { status: 500 }
    )
  }
}
