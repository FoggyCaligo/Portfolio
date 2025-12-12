<script setup lang="ts">
  import dayjs from 'dayjs'
  import { ref } from 'vue'
  import { timelineData } from '../data/timeline'
  import TimeLine from '../components/TimeLine.vue'

  const selectedItem = ref<TimeLineItem | null>(timelineData[0])

  const handleSelect = (item : TimeLineItem) => {
    selectedItem.value = item
  }

</script>

<template>

  <div class="flex justify-between w-full h-full pt-10">

    <div class="w-fit flex flex-col ">
      <TimeLine
        :items="timelineData"
        :selectedItem="selectedItem"
        @select="handleSelect"
      />
    </div>

    <div class="w-3/4 p-8 bg-white rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold mb-4">
        {{ selectedItem?.year }} Projects
      </h2>

      <p class="text-gray-700">
        여기에 해당 연도 프로젝트 정보가 표시됩니다.
        {{ selectedItem?.description }}
      </p>
    </div>
  </div>
</template>