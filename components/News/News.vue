<template>
  <section class="news py-16">
    <div class="container mx-auto">
      <header class="news__header flex justify-between items-center mb-16">        
       <UiTitile :level="2" :classname="'text-3xl font-bold'">Новости и события</UiTitile>     
       <UiDetailLink :linkText="'Читать все новости'"/>
      </header>
      <div class="news-grid grid grid-cols-3 gap-x-[64px]">
        <NewsItem :news="news"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  const news = ref([
    {id:1,date:"04/06/2021",title:"Органический трафик обнадёживает",preview:"И нет сомнений, что непосредственные участники технического прогресса могут быть в равной степени предоставлены сами себе."},
    {id:2,date:"04/05/2021",title:"Есть над чем задуматься",preview:"Равным образом, синтетическое тестирование прекрасно подходит для реализации направлений прогрессивного развития."},
    {id:3,date:"04/04/2021",title:"Кровь стынет в жилах",preview:"Господа, повышение уровня гражданского сознания в значительной степени обусловливает важность форм воздействия."},
  ])  
</script>
