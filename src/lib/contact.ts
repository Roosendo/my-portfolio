export interface ContactMessage {
  name: string
  email: string
  phone?: string
  message: string
}

export type ParseContactResult =
  { data: ContactMessage; error: null } | { data: null; error: string }

const NAME_MAX_LENGTH = 100
const EMAIL_MAX_LENGTH = 254
const PHONE_MIN_LENGTH = 7
const PHONE_MAX_LENGTH = 25
const MESSAGE_MAX_LENGTH = 2000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^\+?[0-9\s().-]+$/

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const isPresentString = (value: unknown, maxLength: number): value is string => {
  return typeof value === 'string' && value.trim().length > 0 && value.trim().length <= maxLength
}

export function parseContactMessage(body: unknown): ParseContactResult {
  if (!isRecord(body)) {
    return { data: null, error: 'Request body must be a JSON object' }
  }

  const { name, email, phone, message } = body

  if (!isPresentString(name, NAME_MAX_LENGTH)) {
    return {
      data: null,
      error: `"name" is required and must be at most ${NAME_MAX_LENGTH} characters`
    }
  }

  if (!isPresentString(email, EMAIL_MAX_LENGTH) || !EMAIL_REGEX.test(email)) {
    return { data: null, error: '"email" must be a valid email address' }
  }

  const phoneValue = typeof phone === 'string' ? phone.trim() : ''

  if (
    phoneValue !== '' &&
    (phoneValue.length < PHONE_MIN_LENGTH ||
      phoneValue.length > PHONE_MAX_LENGTH ||
      !PHONE_REGEX.test(phoneValue))
  ) {
    return { data: null, error: '"phone" must be a valid phone number' }
  }

  if (!isPresentString(message, MESSAGE_MAX_LENGTH)) {
    return {
      data: null,
      error: `"message" is required and must be at most ${MESSAGE_MAX_LENGTH} characters`
    }
  }

  return {
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ...(phoneValue !== '' ? { phone: phoneValue } : {})
    },
    error: null
  }
}
