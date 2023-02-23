<template>
  <div class="technologies__item p-8">    
    <UiTitile :level="3">Области применения наших технологий в госсекторе</UiTitile>   
    <UiParagraf :classnames="'text-xl'">Ясность нашей позиции очевидна: новая модель организационной деятельности представляет собой</UiParagraf>
  </div>
  <div class="technologies__item rounded-2xl p-8 bg-gray-100" v-for="{ id, name, title } in tech" :key="id">
    <div class="rounded-full bg-gray-200 mb-8  w-20 h-20"></div>
    <div class="font-semibold text-lg mb-8">{{ title }}</div>
    <div class="text-lg">{{ name }}</div>
  </div>
  <div class="technologies__item row-start-3 grid-col-start-1"></div>
</template>

<script setup>
  const props = defineProps({
    tech:{
      Type:Array,
      default:()=>[]
    }
  })
  
</script>
