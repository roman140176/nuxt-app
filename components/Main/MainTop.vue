<template>
  <div class="main-top rounded-t-3xl bg-gray-300 2xl:mt-16 2xl:p-[64px] md:mt-8 xl:p-12 md:p-8 sm:p-4">
    <div class="flex justify-between">
      <div class="flex flex-col w-[50%]">
        <UiTitile :level="1" :classname="'2xl:text-7xl font-bold text-gray-700 lg:text-5xl md:text-4xl sm:text-3xl'">
          Эксперт в <br>области решений <br>для госсектора
        </UiTitile>
        <UiParagraf :classnames="'2xl:text-3xl lg:text-xl 2xl:mt-auto xl:mt-8 md:mt-4 lg:mb-12 md:mb-4'">
          В рамках спецификации современных стандартов, предприниматели в сети интернет своевременно верифицированы.
        </UiParagraf>
      </div>
      <div class="w-[45%] 2xl:h-[435px] xl:h-auto rounded-3xl overflow-hidden bg-gray-400">
      </div>
    </div>
  </div>
  <div class="adventages bg-gray-300 rounded-b-3xl grid grid-cols-4 gap-6 p-[24px] pt-0 mb-20">
    <div class="adventages-item" v-for="adventage in adventages" :key="adventage.id">
      <Adventages :adventage="adventage" :index="adventage.id" />
    </div>
  </div>
</template>

<script setup>
const adventages = ref([
  { id: 1, name: "Безлпасный <br>город" },
  { id: 2, name: "Цифровизация <br>рабочих мест" },
  { id: 3, name: "Общественная <br>безопасность" },
  { id: 4, name: "Взаимодействие <br>с гражданами" }
])

</script>
