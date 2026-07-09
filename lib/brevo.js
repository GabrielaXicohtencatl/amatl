const BREVO_API_URL = 'https://api.brevo.com/v3'

/**
 * Agrega un correo a una lista de Brevo (usado por la lista de espera y el newsletter).
 * Necesita BREVO_API_KEY y BREVO_LIST_ID en las variables de entorno.
 */
export async function addContactToBrevoList(email) {
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (!apiKey || !listId) {
    throw new Error('Brevo no está configurado todavía (faltan BREVO_API_KEY / BREVO_LIST_ID).')
  }

  const res = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
  })

  // Brevo responde 204 en éxito y 400 si el contacto ya existe: ambos son "ok" para nosotros.
  if (!res.ok && res.status !== 400) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.message || 'Brevo rechazó la solicitud.')
  }

  return true
}

/**
 * Envía un correo transaccional a contacto@amatl.org con el mensaje del formulario de contacto.
 * Requiere que el remitente esté verificado en Brevo (Senders & IP > Senders).
 */
export async function sendContactEmail({ nombre, correo, asunto, mensaje }) {
  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    throw new Error('Brevo no está configurado todavía (falta BREVO_API_KEY).')
  }

  const res = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: { name: 'Formulario AMATL', email: 'contacto@amatl.org' },
      to: [{ email: 'contacto@amatl.org' }],
      replyTo: { email: correo, name: nombre },
      subject: `[Contacto AMATL] ${asunto}`,
      textContent: `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\n\n${mensaje}`,
    }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.message || 'No se pudo enviar el correo.')
  }

  return true
}
