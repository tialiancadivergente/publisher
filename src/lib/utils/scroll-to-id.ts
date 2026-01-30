export type ScrollToIdOptions = {
  delayMs?: number
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
}

export function scrollToId(id: string, options: ScrollToIdOptions = {}) {
  const {
    delayMs = 100,
    behavior = "smooth",
    block = "start",
    inline = "nearest",
  } = options

  if (typeof document === "undefined") return

  setTimeout(() => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior, block, inline })
      return
    }

    console.error(`Elemento com id '${id}' não encontrado`)
  }, delayMs)
}

