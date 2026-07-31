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
