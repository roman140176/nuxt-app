<template>
  <div class="main-top rounded-t-3xl bg-gray-300 mt-16 p-[64px]">
    <div class="flex justify-between">   
      <div class="flex flex-col w-[50%]">
        <UiTitile :level="1" :classname="'text-7xl font-bold text-gray-700'">
          Эксперт в <br>области решений <br>для госсектора
        </UiTitile>
        <UiParagraf :classnames="'text-3xl mt-auto mb-12'">
          В рамках спецификации современных стандартов, предприниматели в сети интернет своевременно верифицированы.
        </UiParagraf>
      </div>   
      <div class="w-[45%] h-[435px] rounded-3xl overflow-hidden bg-gray-400">        
      </div>
    </div>
  </div>
  <div class="adventages bg-gray-300 rounded-b-3xl grid grid-cols-4 gap-6 p-[24px] pt-0 mb-20">
    <div class="adventages-item" v-for="adventage in adventages" :key="adventage.id">
      <Adventages :adventage="adventage" :index="adventage.id"/>
    </div>
  </div>
</template>

<script setup>
const adventages = ref([
  {id:1,name:"Безлпасный <br>город"},
  {id: 2, name: "Цифровизация <br>рабочих мест"},
  {id: 3, name: "Общественная <br>безопасность"},
  {id: 4, name: "Взаимодействие <br>с гражданами" }
])

</script>
