import type { ContactMessage } from '../lib/contact'

export interface SendEmailResult {
  ok: boolean
}

export async function sendEmail(message: ContactMessage): Promise<SendEmailResult> {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    })
    return { ok: response.ok }
  } catch {
    return { ok: false }
  }
}
