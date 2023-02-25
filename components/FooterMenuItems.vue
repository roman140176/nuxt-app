<template>
  <div class="footer__item w-[200px]" v-for="{ id, name, menu } in boxes" :key="id">
    <header class="font-bold text-xl mb-4">{{ name }}</header>
    <ul>
      <li v-for="item in menu" :key="item.id" class="leading-7 cursor-pointer">
        {{ item.name }}
      </li>
    </ul>        
  </div>
</template>

<script setup>
  const props = defineProps({
    boxes:{
      Type:Array,
      default:()=>[]
    }
  })
</script>
