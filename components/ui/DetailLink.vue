<template>
  <NuxtLink to="#" class="text-link-color text-xl flex items-center font-semibold">
    <span>
      {{ linkText }}
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  linkText:{
    Type:String,
    default:'Подробнее'
  }
})
</script>
