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
  const classUnSelected = "bg-surface";
  
  
</script>
<template>
  <div class="flex gap-6 overflow-x-scroll px-4 py-6 scrollbar-hide">
    <div
      v-for="item in items"
      :key="item.year"
      class="flex-shrink-0 flex flex-col items-center cursor-pointer"
      @click="$emit('select', item)"
    >
      <div
        :class="[
          'w-14 h-14 rounded-full flex items-center justify-center transition',
          item.year === selectedItem?.year
            ? 'bg-yellow scale-110'
            : 'bg-white'
        ]"
      >
        <img v-if="item.icon" :src="item.icon" class="w-8 h-8" />
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
