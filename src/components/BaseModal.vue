<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

defineProps<{
  open: boolean
}>();
const emit = defineEmits<{
  (e: 'close'): void
}>();

onMounted(() => {
  document.documentElement.style.overflowY = 'hidden'; // 모달 활성화 시 스크롤 막기
});
onUnmounted(() => {
  document.documentElement.style.overflowY = 'auto'; // 모달 비활성화 시 스크롤 복원
});

</script>

<template>  
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50"> 
      <!--overlay-->
      <div class="absolute inset-0 bg-black/50" @click="emit('close')"></div>
      <!--modal content-->
      <div class="absolute bottom-0 left-0 w-full rounded-t-2xl bg-surface p-6 transition">
      <!-- drag handle -->
      <div class="mx-auto mb-4 h-1.5 w-10 rounded bg-gray-400/50" />
      <slot />
          <!-- optional close -->
      <button
        class="mt-6 w-full text-center text-sm text-gray-500"
        @click="emit('close')"
      >
        닫기
      </button>
    </div>
    </div>
  </Teleport>
</template>