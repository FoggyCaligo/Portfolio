<script setup lang="ts">
  import { ref, toRef } from 'vue'
  import type { TimelineItem } from '../data/timeline'
  import { useScrollIntoView } from '../composables/useScrollIntoView'
  const props = defineProps<{
    items: TimelineItem[]
    selectedItem: TimelineItem | undefined
  }>()
  
  const emit = defineEmits<{
    (e: 'select', item: TimelineItem): void
  }>()

  const classMainWrapper = "relative w-24 h-full flex flex-col ml-20 mr-2 mt-10 mb-10 gap-8 box-border items-center";
  const classCenterLine = "absolute top-0 w-0 h-full  border-4 border-white left-1/2 -translate-x-1/2";
  const classItem = 'relative flex flex-row justify-center items-center w-full h-full z-10 cursor-pointer';
  const classCircleBase = 'rounded-full transition-transform transition-colors duration-300 ease-out flex';
  const classCircleBig = "w-24 h-24";
  const classCircleSmall = "w-10 h-10";
  const classSelected = "bg-yellow scale-110";
  const classUnSelected = "bg-white";
  
  const itemRefs = ref<Record<number, HTMLElement | undefined>>({});
  useScrollIntoView(
    toRef(props, 'selectedItem'),
    (item) => itemRefs.value[item.year]
  )
</script>
  
<template>
  <div :class="classMainWrapper" >
    <div :class="classCenterLine"/>
    <div v-for="item in items" :key="item.year" :class="classItem" @click="emit('select', item)" :ref="el => itemRefs[item.year] = el">
      <div :class="[
        'absolute -translate-x-full pr-6 whitespace-nowrap transition-transform transition-colors duration-300 ease-out',
        item?.year === selectedItem?.year ? 'text-yellow font-bold' : 'text-white',
        item.icon ? 'text-2xl' : 'text-lg'
      ]">
        {{ item.year }}
      </div>
      <div
          :class="[
            classCircleBase,
            item.icon ? classCircleBig : classCircleSmall,
            item?.year === selectedItem?.year ? classSelected : classUnSelected
          ]">
        <img v-if="item.icon" :src="item.icon" />
      </div>
    </div>
  </div>
</template>