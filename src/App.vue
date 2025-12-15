<script setup>
  import Navbar from './components/Navbar.vue'
  </script>
  
  <template>
    <div class="h-full bg-brand p-10">
      <Navbar />
      <RouterView />
    </div>
  </template>