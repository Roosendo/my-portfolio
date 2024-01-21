export function showAndHideAlert (alertElement: HTMLElement, timeout: number = 2000) {
  alertElement.classList.remove('hidden')
  alertElement.classList.add('flex')
  setTimeout(() => {
    alertElement.classList.remove('flex')
    alertElement.classList.add('hidden')
  }, timeout)
}

export function copyToClipboard(text: string): boolean {
  const tempInput = document.createElement('textarea')
  tempInput.value = text
  document.body.appendChild(tempInput)
  tempInput.select()

  try {
    const successful = document.execCommand('copy')
    document.body.removeChild(tempInput)
    return successful
  } catch (err) {
    console.error(`Failed to copy the value: ${text}`)
    return false
  }
}
