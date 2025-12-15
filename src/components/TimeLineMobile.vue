<script setup lang="ts">
  import type { TimelineItem } from '../data/timeLine'
  
  defineProps<{
    items: TimelineItem[]
    selectedItem: TimelineItem | undefined
  }>()
  
  const emit = defineEmits<{
    (e: 'select', item: TimelineItem): void
  }>()

  const classCircleBase = 'rounded-full transition-transform transition-colors duration-300 ease-out flex';
  const classCircleBig = "w-24 h-24";
  const classCircleSmall = "w-10 h-10";
  const classSelected = "bg-yellow scale-110";
  const classUnSelected = "bg-white";
  
  
</script>
  
<template>
  <div class="w-full flex flex-row gap-8 overflow-x-auto py-4 px-2 box-border">
    <div v-for="item in items" :key="item.year" class="flex flex-col items-center cursor-pointer" @click="emit('select', item)">
      <div
          :class="[
            classCircleBase,
            item.icon ? classCircleBig : classCircleSmall,
            item?.year === selectedItem?.year ? classSelected : classUnSelected
          ]">
        <img v-if="item.icon" :src="item.icon" />
      </div>
      <div :class="[
        'mt-2 transition-colors duration-300 ease-out',
        item?.year === selectedItem?.year ? 'text-yellow font-bold' : 'text-white',
        item.icon ? 'text-2xl' : 'text-lg'
      ]">
        {{ item.year }}
      </div>
    </div>
  </div>
</template>