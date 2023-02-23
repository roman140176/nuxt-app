<template>
  <Teleport to="body">
  
    <div class="modal-wrap fixed h-full w-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-[1000]" v-if="isModal" @click.self="$emit('closeModal')">
      <div class="modal-content w-[1000px] h-[500px] bg-white mx-auto relative">   
      <div class="modal-close absolute top-6 right-6 text-white bg-black rounded-full cursor-pointer w-12 h-12 flex items-center justify-center" @click="$emit('closeModal')">
        <iconClose class="w-10 h-10" />
      </div>     
        <slot />
      </div>
    </div>
   
  </Teleport>
</template>

<script setup>
import iconClose from '@/assets/svg/close.svg'
const props = defineProps({
  isModal:{
    Type:Boolean,
    default:false
  },
  slotName:{
    Type:String,
    default:''
  }
})
const emit = defineEmits(['openModal','closeModal'])
const closeModal = () => {
  props.isModal = false
}
</script>
