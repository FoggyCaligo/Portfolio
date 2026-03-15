<script setup>
  import Navbar from './components/Navbar.vue'

</script>
  
<template>
  <div class="bg-brand md:px-20 px-5 md:px-20 py-5"  style="--nav-h: 10rem">
    <Navbar/>
    <RouterView />
  </div>
</template>