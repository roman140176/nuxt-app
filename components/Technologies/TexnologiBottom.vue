<template>
  <div class="technologies__item">    
    <UiTitile :level="3" :classname="'text-3xl font-bold mb-6 pt-8'">Проекты</UiTitile>     
    <UiParagraf :classnames="'text-xl mb-8'">Наш опыт масштабных проектов на уровне госструктур</UiParagraf>  
    <UiDetailLink />
  </div>
   <div class="technologies__item rounded-2xl bg-white border border-gray-300" v-for="{ id, title, text } in projects" :key="id">
    <div class="rounded-2xl bg-gray-200 mb-8  w-full min-h-[200px]"></div>
    <div class="px-4 pb-8">
      <div class="font-semibold text-lg mb-4 mt-6">{{ title }}</div>
      <div class="text-lg">{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
  projects: {
    Type: Array,
    default: () => []
  }
})

</script>
