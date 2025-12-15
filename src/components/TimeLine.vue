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
  <div class="h-full w-fit overflow-y-auto scrollbar-hide">
    <div class="hidden md:block">
      <TimeLineDesktop
        :items="items"
        :selectedItem="selectedItem"
        @select="emit('select', $event)"
      />
    </div>

    <div class="block md:hidden">
      <TimeLineMobile
        :items="items"
        :selectedItem="selectedItem"
        @select="emit('select', $event)"
      />
    </div>
  </div>
</template>