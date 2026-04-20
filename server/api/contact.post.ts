import nodemailer from 'nodemailer'

type ContactBody = {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)
  const name = body?.name?.trim() || ''
  const email = body?.email?.trim() || ''
  const message = body?.message?.trim() || ''

  if (!name) {
    throw createError({ statusCode: 400, statusMessage: 'Ingresa tu nombre.' })
  }

  if (!email) {
    throw createError({ statusCode: 400, statusMessage: 'Ingresa tu correo.' })
  }

  if (!emailPattern.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Usa un correo valido.' })
  }

  if (!message || message.length < 12) {
    throw createError({ statusCode: 400, statusMessage: 'Escribe un mensaje mas detallado.' })
  }

  const config = useRuntimeConfig(event)
  const smtpHost = config.smtpHost
  const smtpPort = Number(config.smtpPort || 587)
  const smtpUser = config.smtpUser
  const smtpPass = config.smtpPass
  const smtpSecure = String(config.smtpSecure).toLowerCase() === 'true'
  const contactToEmail = config.contactToEmail || 'info@darse.do'
  const contactFromEmail = config.contactFromEmail || smtpUser

  if (!smtpHost || !smtpUser || !smtpPass || !contactFromEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'El formulario aun no esta configurado para enviar correos. Configura SMTP en el servidor.'
    })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })

  await transporter.sendMail({
    from: `"Formulario DarsePOS" <${contactFromEmail}>`,
    to: contactToEmail,
    replyTo: email,
    subject: `Nuevo mensaje desde la web de DARSE: ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      '',
      'Mensaje:',
      message
    ].join('\n'),
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #101010; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">Nuevo mensaje desde la web de DARSE</h2>
        <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 16px 0 8px;"><strong>Mensaje:</strong></p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `
  })

  return { ok: true }
})

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
