<script setup lang="ts">
  import { ref } from 'vue'
  import type { TimelineItem } from '../../data/timeLine'
  import { useScrollIntoView } from '../../composables/useScrollIntoView'
  const props = defineProps<{
    items: TimelineItem[]
    selectedItem: TimelineItem | undefined
  }>()
  
  const emit = defineEmits<{
    (e: 'select', item: TimelineItem): void
  }>()

  const classMainWrapper = `relative w-fit h-fit flex flex-col ml-24 mr-2 my-5 gap-8 items-center`;
  const classCenterLine = "absolute top-0 w-0 h-full  border-4 border-surface left-1/2 -translate-x-1/2";
  const classItem = 'relative flex flex-row justify-center items-center z-10 caret-none select-none cursor-pointer gap-8';
  
  const itemRefs = ref<Record<number, HTMLElement | undefined>>({});

  const setItemRef = (year: number, el: unknown) => {
    if (el instanceof HTMLElement) {
      itemRefs.value[year] = el
    }
  }

  const select = (item: TimelineItem) => {
    emit('select', item);
    useScrollIntoView(itemRefs.value[item.year]);
  }
</script>
  
<template>
  <div :class="classMainWrapper" >
    <div :class="classCenterLine"/>
    <div v-for="item in items" :key="item.year" :class="classItem" @click="select(item)" :ref="el => setItemRef(item.year, el)">
      <div :class="[
        'absolute mr-12 whitespace-nowrap duration-300 ease-out no-caret',
        item?.year === selectedItem?.year ? 'text-yellow font-bold' : 'text-surface',
        item.icon ? 'text-3xl -translate-x-24' : 'text-2xl -translate-x-full'
      ]">
        {{ item.year }}
      </div>
      <div
          :class="[
            'rounded-full no-select duration-300 ease-out flex',
            item.icon ? `w-32 h-32` : `w-14 h-14`,
            item?.year === selectedItem?.year ? 'bg-yellow scale-110' : 'bg-surface'
          ]">
        <img v-if="item.icon" :src="item.icon" />
      </div>
    </div>
  </div>
</template>