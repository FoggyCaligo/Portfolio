<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// 공통 메뉴 스타일
const baseMenuClass = "text-white transition-colors hover:text-gray-300"

// 활성 메뉴 스타일
const getMenuClass = (path: string) => {
  const isActive = route.path === path
  return isActive 
    ? baseMenuClass + " text-yellow "
    : baseMenuClass
}
</script>

<template>
  <header 
    class="sticky top-0 left-0 w-full h-20 flex items-center justify-between 
           border-b-4 border-white z-50 bg-brand"
  >
    <!-- Left Title -->
    <div class="flex flex-col leading-tight">
      <RouterLink 
        to="/" 
        class="text-4xl font-semibold text-white select-none"
      >
        Shin - Jaeyong
      </RouterLink>

      <span class="text-xl text-white/80 ml-0">
        Frontend Developer
      </span>
    </div>

    <!-- Right Menu -->
    <nav class="flex items-center gap-8 font-medium text-white text-lg">
      <RouterLink to="/" :class="getMenuClass('/')"> | Projects</RouterLink>
      <RouterLink to="/about" :class="getMenuClass('/about')"> | About</RouterLink>
      <RouterLink to="/skills" :class="getMenuClass('/skills')"> | Skills</RouterLink>
    </nav>
  </header>
</template>
