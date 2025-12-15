<script setup>
  import Navbar from './components/Navbar.vue'
  </script>
  
  <template>
    <div class="min-h-screen bg-brand px-4 md:px-20 py-5 overflow-hidden">
      <Navbar />
      <RouterView />
    </div>
  </template>