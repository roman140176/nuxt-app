<template>
  <div class="rounded-2xl pt-[40px] pr-[16px] pb-[24px] border border-white">
    <div class="flex justify-end items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mr-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
      <div class="text-white font-semibold text-5xl">0{{ index }}</div>      
      <div v-html="adventage.name" class="text-spec ml-4"></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    adventage:{
      Type:Object,
      default:()=>{}
    },
    index:{
      Type:Number,
      default:0
    }
  })
</script>
