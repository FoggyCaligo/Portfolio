<script setup lang="ts">
    import { ref } from 'vue'

    import TimeLineItem from '../components/TimeLineItem.vue'

    const years = [2020, 2021, 2022, 2023, 2024]
    const selectedYear = ref(2024) // 기본 선택 연도


    const icons = {
        2020 :  "~/assets/icons/icon_univ.png",
    }

    const selectYear = (year: number) => {
        selectedYear.value = year
    }
</script>

<template>
    <div class="flex justify-between w-full h-full pt-10">

    <!-- LEFT TIMELINE -->
    <div class="w-fit flex flex-col gap-8">
      <TimeLineItem 
        v-for="year in years" 
        :key="year"
        :label="year"
        :active="selectedYear === year"
        @click="selectYear(year)"
      />

    </div>

    <!-- RIGHT CONTENT -->
    <div class="w-3/4 p-8 bg-white rounded-xl shadow-lg">
      <h2 class="text-3xl font-bold mb-4">
        {{ selectedYear }} Projects
      </h2>

      <p class="text-gray-700">
        여기에 해당 연도 프로젝트 정보가 표시됩니다.
      </p>
    </div>
  </div>
</template>