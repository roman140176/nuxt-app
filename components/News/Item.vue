<template>
  <div class="news__item" v-for="{ id, date, title, preview } in news" :key="id">
    <div class="date mb-8">{{ date }}</div>
    <div class="font-semibold text-lg mb-4">{{ title }}</div>
    <div class="text-lg">{{ preview }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  news:{
    Type:Array,
    default:()=>[]
  }
})
</script>
