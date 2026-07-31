import type { APIRoute } from 'astro'
import { parseContactMessage } from '../../lib/contact'
import { sendContactEmail } from '../../lib/email'

export const prerender = false

const JSON_HEADERS = { 'Content-Type': 'application/json' } as const

const jsonResponse = (payload: Record<string, unknown>, status: number): Response => {
  return new Response(JSON.stringify(payload), { status, headers: JSON_HEADERS })
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400)
  }

  const parsed = parseContactMessage(body)
  if (parsed.error !== null) {
    return jsonResponse({ error: parsed.error }, 400)
  }

  try {
    await sendContactEmail(parsed.data)
    return jsonResponse({ success: true }, 200)
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return jsonResponse({ error: 'Failed to send email' }, 500)
  }
}
