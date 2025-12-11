<script setup lang="ts">
    const props = defineProps<{
      label: string | number
      active: boolean
      icon : string
    }>()

    

    const baseCircleClass = "w-12 h-12 rounded-full border-none flex items-center justify-center transition-all"

    const bigSizeClass=" w-32 h-32"
    const smallSizeClass = " w-12 h-12"

    const onSelectedClass = " bg-yellow border-yellow scale-110"
    const onNormalClass = " bg-white border-white scale-100"

    
    const getMenuClass = () => {
        return props.icon  
            ? baseCircleClass + bigSizeClass + (props.active ? onSelectedClass : onNormalClass)
            : baseCircleClass + smallSizeClass + (props.active ? onSelectedClass : onNormalClass)
    }

    const emit = defineEmits(['click'])


    </script>
    
    <template>
      <div 
        class="flex justify-center items-center gap-10 cursor-pointer select-none"
        @click="emit('click')"
      >
        <!-- Label text -->
        <span 
            class="text-white text-xl transition-all"
            :class="props.active ? 'text-yellow font-bold' : 'text-white'"
        >
          {{ props.label }}
        </span>
        <!-- Circle -->
        <div :class="getMenuClass()">
            <img :src="props.icon" v-if="props.icon" alt="icon" class="w-16 h-16"/> 
        </div>
    
       
      </div>
    </template>
    