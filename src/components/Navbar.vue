<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

// 공통 메뉴 스타일
const baseMenuClass = "text-surface transition-colors md:text-3xl text-xl"

// 활성 메뉴 스타일
const getMenuClass = (path: string) => {
  const isActive = route.path === path
  return isActive 
    ? baseMenuClass + " text-yellow "
    : baseMenuClass
}
</script>

<template>
  <header class="sticky top-0 left-0 w-full h-fit flex items-center justify-between border-b-4 border-surface z-50 bg-brand pb-5">
    <!-- Left Title -->
    <div class="flex flex-col leading-tight">
      <RouterLink to="/" class="md:text-6xl text-3xl font-semibold text-surface select-none">
        Shin - Jaeyong
      </RouterLink>

      <span class="md:text-3xl text-xl text-surface/80 ml-0">
        Frontend Developer
      </span>
    </div>

    <!-- Right Menu -->
    <nav class="flex md:items-center md:items-start md:gap-8 gap-0 font-medium text-surface text-3xl md:flex-row flex-col">
      <RouterLink to="/" :class="getMenuClass('/')"> | Projects</RouterLink>
      <RouterLink to="/about" :class="getMenuClass('/about')"> | About</RouterLink>
      <RouterLink to="/skills" :class="getMenuClass('/skills')"> | Skills</RouterLink>
    </nav>
  </header>
</template>
