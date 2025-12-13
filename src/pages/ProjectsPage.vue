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
    <div class="flex w-full  justify-between h-[calc(100vh-160px)] overflow-hidden gap-12">
      <!-- 🔹 Timeline (스크롤 전용) -->
      <div class="flex-shrink-0">
        <TimeLine
          :items="timelineData"
          :selectedItem="selectedItem"
          @select="handleSelect"
        />
      </div>

      <!-- 🔹 Content (고정) -->
      <div class="flex-1 pt-10">
        <div class="h-full p-8 bg-white rounded-xl shadow-lg overflow-y-scroll scrollbar-hide">
          <h3 class="text-3xl font-bold mb-4">
            {{ selectedItem?.title }}
          </h3>
          <h5>{{ selectedItem?.year }}</h5>
          <p class="text-gray-700 word-break break-keep whitespace-pre-line">
            {{ selectedItem?.description }}
          </p>
        </div>
      </div>
  </div>




    <!-- 
  <div class="flex-shrink-0">
    <TimeLine
      :items="timelineData"
      :selectedItem="selectedItem"
      @select="handleSelect"
    />
  </div>
  <div class="flex-1">
    <div class="h-full p-8 bg-white rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold mb-4">
        {{ selectedItem?.year }} Projects
      </h2>
      <p class="text-gray-700">
        {{ selectedItem?.description }}
      </p>
    </div>
  </div> -->




    <!-- <div class="w-fit flex flex-col ">
      <TimeLine
        :items="timelineData"
        :selectedItem="selectedItem"
        @select="handleSelect"
      />
    </div>

    <div class=" sticky top-0 left-0 w-full h- w-3/4 p-8 bg-white rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold mb-4">
        {{ selectedItem?.year }} Projects
      </h2>

      <p class="text-gray-700">
        여기에 해당 연도 프로젝트 정보가 표시됩니다.
        {{ selectedItem?.description }}
      </p>
    </div> -->
  </div>
</template>