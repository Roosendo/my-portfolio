import { CONTACT_EMAIL, getSecret, RESEND_FROM_EMAIL } from 'astro:env/server'
import { Resend } from 'resend'
import type { ContactMessage } from './contact'

export class EmailServiceError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EmailServiceError'
  }
}

const DEFAULT_FROM_EMAIL = 'onboarding@resend.dev'

const EMAIL_PALETTE = {
  paper: '#f9f5ec',
  paper2: '#ece7dd',
  ink: '#15110c',
  ink2: '#585551',
  rule: '#c7c4be',
  surface: '#fdfcf9',
  accent: '#69a300'
}

const escapeHtml = (value: string): string => {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

const buildContactRow = (label: string, value: string): string => {
  return [
    '<tr>',
    `<td style="padding:6px 0; color:${EMAIL_PALETTE.ink2}; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">${label}</td>`,
    `<td style="padding:6px 0 6px 16px; color:${EMAIL_PALETTE.ink}; font-size:14px;">${escapeHtml(value)}</td>`,
    '</tr>'
  ].join('')
}

const buildEmailText = (message: ContactMessage): string => {
  const lines = [
    'New contact message from your portfolio',
    '',
    `Name: ${message.name}`,
    `Email: ${message.email}`
  ]

  if (message.phone !== undefined) {
    lines.push(`Phone: ${message.phone}`)
  }

  lines.push('', 'Message:', message.message)

  return lines.join('\n')
}

const buildEmailHtml = (message: ContactMessage): string => {
  const contactRows = [
    buildContactRow('Name', message.name),
    buildContactRow('Email', message.email)
  ]

  if (message.phone !== undefined) {
    contactRows.push(buildContactRow('Phone', message.phone))
  }

  return [
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${EMAIL_PALETTE.paper}; padding:24px 12px;">`,
    '<tr><td align="center">',
    `<table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; border:1px solid ${EMAIL_PALETTE.rule}; border-radius:16px; background:${EMAIL_PALETTE.surface};">`,
    `<tr><td style="background:${EMAIL_PALETTE.accent}; padding:20px 28px; border-radius:15px 15px 0 0;">`,
    `<h1 style="margin:0; color:${EMAIL_PALETTE.paper}; font-family:Georgia, 'Times New Roman', serif; font-size:20px; font-weight:700;">New contact message</h1>`,
    '</td></tr>',
    '<tr><td style="padding:24px 28px;">',
    `<p style="margin:0 0 16px; color:${EMAIL_PALETTE.ink2}; font-size:14px; line-height:1.6;">Someone sent you a message through your portfolio. Here is how to reach them back:</p>`,
    `<table role="presentation" cellpadding="0" cellspacing="0">${contactRows.join('')}</table>`,
    `<div style="border-top:1px solid ${EMAIL_PALETTE.paper2}; margin:20px 0;"></div>`,
    `<p style="margin:0 0 8px; color:${EMAIL_PALETTE.ink2}; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px;">Message</p>`,
    `<p style="margin:0; padding:12px 16px; background:${EMAIL_PALETTE.paper}; border:1px solid ${EMAIL_PALETTE.paper2}; border-radius:8px; color:${EMAIL_PALETTE.ink}; font-size:14px; line-height:1.6;">${escapeHtml(message.message).replaceAll('\n', '<br />')}</p>`,
    '</td></tr>',
    '</table>',
    '</td></tr>',
    '</table>'
  ].join('')
}

export async function sendContactEmail(message: ContactMessage): Promise<void> {
  const apiKey = getSecret('RESEND_API_KEY')
  const recipient = CONTACT_EMAIL

  if (!apiKey || !recipient) {
    throw new EmailServiceError('Email service is not configured')
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL ?? DEFAULT_FROM_EMAIL,
    to: recipient,
    replyTo: message.email,
    subject: `New contact message from ${message.name}`,
    text: buildEmailText(message),
    html: buildEmailHtml(message)
  })

  if (error) {
    throw new EmailServiceError(error.message)
  }
}
