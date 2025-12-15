<script setup lang="ts">
  import { ref } from 'vue'
  import { timelineData } from '../data/timeline'
  import TimeLine from '../components/TimeLine.vue'
  import type { TimelineItem } from '../data/timeline'
  
  const selectedItem = ref<TimelineItem | undefined>(timelineData[4])

  const handleSelect = (item : TimelineItem) => {
    selectedItem.value = item
  }

</script>

<template>

  <div class="flex justify-between w-full ">
    <div class="flex w-full justify-between h-[calc(100vh-160px)] overflow-hidden gap-12">
      <!-- 🔹 Timeline (스크롤 전용) -->
      <div class="flex-shrink-0">
        <TimeLine
          :items="timelineData"
          :selectedItem="selectedItem"
          @select="handleSelect"
        />
      </div>
      <!-- 🔹 Content (고정) -->
      <div class="flex-1 pt-10 caret-none select-none ">
        <div class="h-full p-8 bg-white rounded-xl shadow-lg overflow-y-scroll scrollbar-hide">
          <h3 class="text-3xl font-bold mb-4">
            {{ selectedItem?.title }}
          </h3>
          <h5>{{ selectedItem?.year }}</h5>
          <p class="text-gray-700 break-words break-all whitespace-pre-line">
            {{ selectedItem?.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>