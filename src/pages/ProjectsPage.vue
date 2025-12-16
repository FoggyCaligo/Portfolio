<script setup lang="ts">
  import { ref } from 'vue'
  import { timelineData } from '../data/timeLine'
  import TimeLine from '../components/TimeLine.vue'
  import type { TimelineItem } from '../data/timeLine'
  
  const selectedItem = ref<TimelineItem | undefined>(timelineData[4])

  const handleSelect = (item : TimelineItem) => {
    selectedItem.value = item
  }

</script>

<template>
  <div class="flex flex-col md:flex-row overflow-hidden justify-between h-[calc(100dvh-160px)]  md:pt-10 pt-0">
    
    <div class="md:w-fit md:h-full w-full h-fit">
      <TimeLine
        :items="timelineData"
        :selectedItem="selectedItem"
        @select="handleSelect"
      />
    </div>

    <div class="w-full h-full md:py-8 md:px-12 py-6 px-6 ml-0 md:ml-12 bg-surface rounded-xl shadow-lg overflow-y-scroll scrollbar-hide">
      <h3 class="md:text-3xl text-2xl font-bold mb-4">
        {{ selectedItem?.title }}
      </h3>
      <h5>{{ selectedItem?.year }}</h5>
      <p class="text-gray-700 break-words break-all whitespace-pre-line">
        {{ selectedItem?.description }}
      </p>
    </div>
  </div>
</template> 