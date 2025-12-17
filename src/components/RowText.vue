<script setup lang="ts">

const props = defineProps<{
  title: string
  content : string
}>()
</script>

<template>
  <div class="w-full flex flex-row">
    <p class="w-full flex text-end text-gray-500 text-sm">{{ title }}</p>
    <p class="w-full flex text-start ">{{ content }}</p>
  </div>
</template>