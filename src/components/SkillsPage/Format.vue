<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full pt-4">
    <p class="w-full flex text-start font-bold text-xl text-surface">{{ title }}</p>    
    <div class="w-full flex text-start font-thin text-lg text-surface">
      <slot></slot>
    </div>
  </div>
</template>