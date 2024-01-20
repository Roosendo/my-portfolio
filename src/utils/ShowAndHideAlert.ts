export function showAndHideAlert (alertElement: HTMLElement, timeout: number = 2000) {
  alertElement.classList.remove('hidden')
  setTimeout(() => {
    alertElement.classList.add('hidden')
  }, timeout)
}
