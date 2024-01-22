import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_TOKEN)

export const POST: APIRoute = async ({ request }) => {
  const { name, message } = await request.json()

  if (!name || !message) {
    return new Response('Missing email or message', { status: 400 })
  }

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['grosendoh73@gmail.com'],
    subject: `Message from ${name}`,
    text: message
  })

  return new Response('success', { status: 200 })
}
