<template>
  <div class="flex flex-wrap justify-between w-full p-12">
  <template v-if="prod">
    <div class="head text-2xl mb-8 font-bold text-gray-200 w-full">Продукты</div>
    <div class="w-1/2">
      <ul class="w-full">
        <li v-for="i in 5" :key="i" class="font-bold text-lg">
          <a href="#">Подпункт {{ i }}</a>
        </li>
      </ul>
    </div>
    <div class="w-1/2">
      <ul class="w-full">
        <li v-for="j in 5" :key="j" class="font-bold text-lg">
          <a href="#">Подпункт {{ j }}</a>
        </li>
      </ul>
    </div>
    </template>
    <template v-else>
    <div class="w-1/2">
      <div class="head text-2xl mb-8 font-bold text-gray-200 w-full">Решения</div>
        <ul class="w-full">
          <li v-for="i in 5" :key="i" class="font-bold text-lg">
            <a href="#">Подпункт {{ i }}</a>
          </li>
        </ul>
      </div>
      <div class="w-1/2">
      <div class="head text-2xl mb-8 font-bold text-gray-200 w-full">Отрасль</div>
        <ul class="w-full">
          <li v-for="j in 5" :key="j" class="font-bold text-lg">
            <a href="#">Подпункт {{ j }}</a>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script setup>

const props = defineProps({
  prod:{
    Type:Boolean,
    default:''
  }
})


</script>
