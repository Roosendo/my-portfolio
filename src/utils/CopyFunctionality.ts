export function showAndHideAlert(alertElement: HTMLElement, timeout: number = 2000) {
  alertElement.classList.remove('hidden')
  alertElement.classList.add('flex')
  setTimeout(() => {
    alertElement.classList.remove('flex')
    alertElement.classList.add('hidden')
  }, timeout)
}

export async function copyToClipboard(text: string): Promise<boolean> {
  const legacyCopy = (): boolean => {
    const tempInput = document.createElement('textarea')
    tempInput.value = text
    tempInput.setAttribute('readonly', '')
    tempInput.style.position = 'fixed'
    tempInput.style.top = '-9999px'
    tempInput.style.opacity = '0'
    document.body.appendChild(tempInput)
    tempInput.select()
    const successful = document.execCommand('copy')
    document.body.removeChild(tempInput)
    return successful
  }

  if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => legacyCopy())
  }

  return Promise.resolve(legacyCopy())
}

export async function sendEmail(name: string, email: string, message: string): Promise<boolean> {
  const apiUrl = 'https://money-minder-api.up.railway.app/api/emails/send-email'

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  }

  try {
    const response = await fetch(apiUrl, requestOptions)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return true
  } catch (err) {
    return false
  }
}
