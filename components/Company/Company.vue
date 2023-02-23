<template>
  <section class="company bg-white py-24">
    <div class="container mx-auto grid grid-cols-2 gap-x-[100px] mb-32">
      <div class="company-left">        
        <UiTitile :level="2">Почему мы</UiTitile>
        <UiParagraf :classnames="'text-xl pr-8 mb-10'">
          Мы создаем продукты и технологии, которые помогают людям
            понимать других и быть понятными, делая жизнь в глобальном информационном сообществе
            эффективнее и безопаснее
        </UiParagraf>
        <UiDetailLink :linkText="'Пдробнее о компании'"/>
      </div>
      <div class="company-right flex flex-wrap pr-24">
        <div class="company__item w-1/2 flex flex-col items-center p-8 border-gray-600" v-for="{id,num,text, classname} in items" :class="classname" :key="id">
          <div class="company__title text-6xl font-bold mb-4">{{ num }}</div>
          <div class="company__desc text-2xl">{{ text }}</div>
        </div>
      </div>
    </div>
   <CompanySlider/>
  </section>
</template>

<script setup>
const items = ref([
  {id:1,num:'30',text:'лет опыта и успешно реализованных проектов',classname:'border-b-2 pl-0'},
  {id:2,num:'74',text:'страны где внедрены наши продукты',classname:'border-b-2 border-l-2 pr-0'},
  {id:3,num:'5000',text:'проектов',classname:'pl-0'},
  {id:4,num:'R&D',text:'Consequuntur magni dolores eos pui retione',classname:'border-l-2 pr-0'},
])
</script>
