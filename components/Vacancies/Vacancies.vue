<template>
  <section class="py-20">
    <div class="container mx-auto flex justify-between">
      <UiTitile :level="2" :classname="'text-3xl font-bold self-baseline w-8/12'">
        <span>Присоединяйтесь <br>к команде экспертов</span>
      </UiTitile>
      <div class="flex flex-wrap rounded-2xl bg-white w-8/12">
        <div class="p-8 w-8/12">
          <UiTitile :level="3" :classname="'text-xl font-bold mb-8'">Вакансии в нашей компании</UiTitile>
          <UiParagraf :classnames="'text-base'">
            В рамках спецификации современных <br>стандартов, предприниматели в сети интернет <br>своевременно верифицированы.
          </UiParagraf>
        </div>
        <div class="bg-gray-200 h-64 w-4/12"></div>
      </div>
    </div>  
  </section>
</template>

<script setup>

</script>
