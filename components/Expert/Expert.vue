<template>
  
  <div class="grid grid-cols-2 gap-x-[100px]">
    <div class="expert-left">      
      <UiTitile :level="2" :classname="'text-3xl font-bold mb-6'">
        Технологический эксперт в области распознования голоса, синтеза речи, записи и анализа, идентификаци лиц и&nbsp;голоса
      </UiTitile>      
      <UiParagraf :classnames="'text-xl pr-8 mb-10'">
        ЦРТ&nbsp;&mdash;&nbsp;российская копания, разработчик иноновационных систем в сфере технологий синтезе и распознования речи,
          анализа аудио и видеоинформации, распознавания лиц, голосовой и мультимодальной биометрии.
          Успеха в этой области смогли достичь всего несколько компаний в мире
      </UiParagraf>
      <UiDetailLink :linkText="'Подробнее о технологиях'"/>
    </div>
    <div class="expert__right flex flex-wrap">
      <div class="expert__item w-1/2 text-center flex justify-center flex-wrap mb-8" v-for="{id,name} in items" :key="id">
        <div class="rounded-full w-[100px] h-[100px] bg-gray-200 mb-4"></div>
        <div class="w-full text-base" v-html="name"></div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
const items = ref([
  {id:1,name:'Синтез и <br>распознавание речи'},  
  {id:2,name:'Распознавание <br>лиц'},  
  {id:3,name:'Анализ аудио- и <br>видеоинформации'},  
  {id:3,name:'Голосовая и <br>мультимодальная <br>биометрия'}
])

</script>
