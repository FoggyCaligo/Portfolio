<script setup lang="ts">
  import type { TimelineItem } from '../data/timeLine'
  import TimeLineDesktop from './TimeLineDesktop.vue';
  import TimeLineMobile from './TimeLineMobile.vue';
  
  defineProps<{
    items: TimelineItem[]
    selectedItem: TimelineItem | undefined
  }>()
  const emit = defineEmits<{
    (e: 'select', item: TimelineItem): void
  }>()
  
</script>
  
<template>
  <div class="h-full w-full overflow-hidden">
    <div class="hidden md:block overflow-y-scroll h-full scrollbar-hide">
      <TimeLineDesktop
        :items="items"
        :selectedItem="selectedItem"
        @select="emit('select', $event)"
      />
    </div>
    <div class="block md:hidden overflow-x-scroll scrollbar-hide">
      <TimeLineMobile
        :items="items"
        :selectedItem="selectedItem"
        @select="emit('select', $event)"
      />
    </div>
  </div>
</template>