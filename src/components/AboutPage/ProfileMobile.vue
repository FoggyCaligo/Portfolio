<script setup lang="ts">
// import { ref } from 'vue';

const btnClass = 'w-full h-fit text-center text-lg text-surface p-2';

// const profileInfo = ref({
//   name: 'Shin Jaeyong',
//   contact: '010 6716 7075',
//   email: 'biglai@naver.com'
// });


</script>

<template>
  <div class="w-full h-fit flex flex-row">
    <div :class="btnClass" class="">Profile</div>
    <div class="">|</div>
    <div :class="btnClass" class="">Contact</div>
  </div>
</template>