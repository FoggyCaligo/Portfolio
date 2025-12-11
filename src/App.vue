<script setup>
  import Navbar from './components/Navbar.vue'
  </script>
  
  <template>
    <div class="min-h-screen bg-brand p-10">
      <Navbar />
      <RouterView />
      <!-- <main class="pt-20 px-4 md:px-8">
        
      </main> -->
    </div>
  </template>