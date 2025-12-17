<script setup lang="ts">
  import { useContact } from '../../composables/useContact';
  import type { ContactItem } from '../../composables/useContact';

  const { copyContact, contacts } = useContact();
  const btnClass = 'w-full mt-4 text-lg text-right text-white opacity-80 hover:opacity-100 cursor-pointer transition' ;

  const handleClick = (contact: ContactItem) => {
    if(contact.copyable){
      copyContact(contact.value);
    }
  }
  
</script>


<template>
  <div class="h-full">
    <img src="../../assets/profile_img.jpg" alt="Profile Image" class="w-48 h-auto rounded-lg shadow-lg"/>
    
    <div class="flex flex-col justify-end text-white space-y-2 pt-10">
      <div class="w-full mt-4 text-xl text-white text-right">[ Shin Jaeyong ]</div>
      <button v-for="contact in contacts" :key="contact.key" type="button" @click="handleClick(contact)" :class="btnClass">
        {{ contact.value }} | 
      </button>
    </div>

  </div>
</template>