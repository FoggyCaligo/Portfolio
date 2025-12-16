export function useScrollIntoView(
  target: HTMLElement | null | undefined,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'center', inline: 'center' }
) {
  if (!target) return
  target.scrollIntoView(options)
}
