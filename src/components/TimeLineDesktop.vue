<script setup lang="ts">
  import { ref, watch, nextTick } from 'vue'
  import type { TimelineItem } from '../data/timeLine'
  import { useScrollIntoView } from '../composables/useScrollIntoView'
  const props = defineProps<{
    items: TimelineItem[]
    selectedItem: TimelineItem | undefined
  }>()
  
  const emit = defineEmits<{
    (e: 'select', item: TimelineItem): void
  }>()

  const bigCircleSize = '32';
  const smallCircleSize = '12';

  const classMainWrapper = `relative w-fit h-full flex flex-col ml-24 mr-2 my-5 gap-8 box-border items-center`;
  const classCenterLine = "absolute top-0 w-0 h-full  border-4 border-white left-1/2 -translate-x-1/2";
  const classItem = 'relative flex flex-row justify-center items-center z-10 caret-none select-none cursor-pointer gap-8';
  
  const itemRefs = ref<Record<number, HTMLElement | undefined>>({});

  function setItemRef(year: number, el: unknown) {
    if (el instanceof HTMLElement) {
      itemRefs.value[year] = el
    }
  }

  watch(
    () => props.selectedItem,
    async (item) => {
      if (!item) return
      await nextTick()
      useScrollIntoView(itemRefs.value[item.year])
    },
    { immediate: true }
  )
</script>
  
<template>
  <div :class="classMainWrapper" >
    <div :class="classCenterLine"/>
    <div v-for="item in items" :key="item.year" :class="classItem" @click="emit('select', item)" :ref="el => setItemRef(item.year, el)">
      <div :class="[
        'absolute mr-12 whitespace-nowrap transition-transform transition-colors duration-300 ease-out no-caret',
        item?.year === selectedItem?.year ? 'text-yellow font-bold' : 'text-white',
        item.icon ? 'text-3xl -translate-x-24' : 'text-2xl -translate-x-full'
      ]">
        {{ item.year }}
      </div>
      <div
          :class="[
            'rounded-full no-select transition-transform transition-colors duration-300 ease-out flex',
            item.icon ? `w-${bigCircleSize} h-${bigCircleSize}` : `w-${smallCircleSize} h-${smallCircleSize}`,
            item?.year === selectedItem?.year ? 'bg-yellow scale-110' : 'bg-white'
          ]">
        <img v-if="item.icon" :src="item.icon" />
      </div>
    </div>
  </div>
</template>