<script setup>
  import Navbar from './components/Navbar.vue'
  </script>
  
  <template>
    <div class="h-full bg-brand px-20 py-5">
      <Navbar />
      <RouterView />
    </div>
  </template>