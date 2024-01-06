import { Resend } from 'resend'

export const sendEmail = async (name, userText) => {
  const apiKey = 're_HdYao8Ko_E1zzvFNzcBZbc9ZAqebnXXCn'

  const resend = new Resend(apiKey)

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['grosendoh73@gmail.com'],
    subject: `Message from ${name}`,
    text: userText
  })
}
