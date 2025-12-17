<script setup>
  import Navbar from './components/Navbar.vue'
  const mobilePadding = 'px-5'
  const customPadding = 'md:px-20 px-5 md:px-20 py-5'

</script>
  
<template>
  <div :class="'bg-brand ' + customPadding"  style="--nav-h: 10rem">
    <Navbar/>
    <RouterView />
  </div>
</template>