import { watch, nextTick, type Ref } from 'vue'

export function useScrollIntoView<T>(
  selected: Ref<T | undefined>,
  getEl: (item: T) => HTMLElement | undefined,
  options: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'center',
  }
) {
  watch(selected, async (item) => {
    if (!item) return
    await nextTick()
    getEl(item)?.scrollIntoView(options)
  })
}
