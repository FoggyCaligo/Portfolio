<script setup>
  import Navbar from './components/Navbar.vue'
  </script>
  
  <template>
    <div class="min-h-screen min-w-screen bg-brand px-14 py-5 overflow-x-hidden">
      <Navbar />
      <RouterView />
    </div>
  </template>