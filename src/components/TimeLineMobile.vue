<script setup lang="ts">
  import { ref } from 'vue'
  import type { TimelineItem } from '../data/timeLine'
  import { useScrollIntoView } from '../composables/useScrollIntoView'
  
  
  const props = defineProps<{
    items: TimelineItem[]
    selectedItem: TimelineItem | undefined
  }>()
  
  const emit = defineEmits<{
    (e: 'select', item: TimelineItem): void
  }>()
  const itemRefs = ref<Record<number, HTMLElement | undefined>>({});

  function setItemRef(year: number, el: unknown) {
    if (el instanceof HTMLElement) {
      itemRefs.value[year] = el
    }
  }

  const select = (item: TimelineItem  ) => {
    emit('select', item);
    useScrollIntoView(itemRefs.value[item.year]);
  }

</script>
<template>
  <div 
  class="relative w-fit h-fit flex flex-row gap-6 px-2 py-6 items-center caret-none select-none cursor-pointer"
  >
    <div
      v-for="item in items"
      :key="item.year"
      class="flex flex-col items-center cursor-pointer"
      @click="select(item)"
      :ref="el => setItemRef(item.year, el)"
    >
      <div
        :class="[
          'w-14 h-14 rounded-full flex items-center justify-center transition',
          item.year === selectedItem?.year
            ? 'bg-yellow scale-110'
            : 'bg-white'
        ]"
      >
        <img v-if="item.icon" :src="item.icon" class="w-10 h-10" />
      </div>

      <span
        :class="[
          'mt-2 text-sm',
          item.year === selectedItem?.year
            ? 'text-yellow font-bold'
            : 'text-white'
        ]"
      >
        {{ item.year }}
      </span>
    </div>
  </div>
</template>
