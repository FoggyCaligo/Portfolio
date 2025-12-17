<script setup lang="ts">
import { ref } from 'vue';
import { useContact } from '../../composables/useContact';
import BaseModal from '../BaseModal.vue';
import RowText from '../RowText.vue';


const { copyContact, contacts } = useContact();
const btnClass = 'w-full h-fit bg-surface rounded-full text-brand text-xl font-semibold my-2';
type ActiveModal = 'profile' | 'contact' | null;

const activeModal = ref<ActiveModal>(null);


</script>

<template>
  <!-- <div class="w-full h-fit flex flex-row ">
    <div :class="btnClass">Profile</div>
    <div :class="btnClass">Contact</div>
  </div> -->

  <div class="w-full flex justify-center gap-2 text-white/80 text-sm">
    <button
      :class="btnClass"
      @click="activeModal = 'profile'"
    >
      Profile
    </button>

    <button
      :class="btnClass"
      @click="activeModal = 'contact'"
    >
      Contact
    </button>

    <BaseModal 
      :open="activeModal === 'profile'" 
      @close="activeModal = null"
    >
      <div class="p-4">
        <h2 class="w-full flex justify-center text-lg font-bold mb-10">Profile</h2>
        <img src="../../assets/profile_img.jpg" alt="Profile Image" class="w-full h-auto rounded-lg shadow-lg mb-4"/>
        <p class="text-xl text-center mb-4">Shin Jaeyong</p>
        <RowText title="Birth" content="2001.01.04" />
        <RowText title="Location" content="서울 관악구 신원로 34" />
        <RowText title="Major" content="컴퓨터공학" />
      </div>
    </BaseModal>


    <BaseModal 
      :open="activeModal === 'contact'" 
      @close="activeModal = null"
    >
      <div class="p-4 flex flex-col justify-center w-full caret-none select-none" >
        <h2 class="w-full flex justify-center text-lg font-bold mb-10">Contact</h2>
        

        <div class="flex flex-col">
          <div class="w-full items-center flex flex-row"
              v-for="contact in contacts" 
              :key="contact.key"  
              type="button">
            <div class="w-full h-fit text-black text-center transition font-bold">
              {{ contact.label }}
            </div>
            <div class="w-full h-fit text-brand text-center transition font-bold"
              @click="contact.copyable ? copyContact(contact.value) : null">
              {{ contact.value }}
            </div>
            <div class="w-full h-fit text-black text-center transition font-bold">
              복사 
            </div>
          </div>
        </div>

      </div>
    </BaseModal>
  </div>
</template>