<template>
  <footer class="footer bg-gray-300 pt-24">
    <div class="container mx-auto">
      <div class="pb12 flex flex-wrap justify-between pb-4 border-b-gray-400 border-b-[1px]">
        <FooterMenuItems :boxes="boxes"/>
        <FooterAddress/>
      </div>
    </div>
    <FooterBottom/>
  </footer>
</template>

<script setup>
const boxes = reactive([
  {id:1,name:"Продукты",menu:[
    {id:1,name:"GridID Platform"},
    {id:2,name:"Икар Лаб 3"},
    {id:3,name:"Визирь"},
    {id:4,name:"Визирь СКУД"},
    {id:5,name:"Voice2 Med"},
    {id:6,name:"Нестор. Правосудие"},
  ]},
  {
    id: 2, name: "Решения", menu: [
      { id: 7, name: "Взаимодействие с гражданами" },
      { id: 8, name: "Цифровизация рабочих мест" },      
      { id: 10, name: "Безопасный город" },
      { id: 11, name: "Общественная безопасность" },      
    ]
  },
   {
    id: 3, name: "Отрасли", menu: [
      { id: 12, name: "Здравоохранение" },
      { id: 13, name: "Спортивные объекты" },
      { id: 14, name: "Образование" },
      { id: 15, name: "Судебная система" },
      { id: 16, name: "Государственные учреждения" },
      { id: 17, name: "Правоохранительные органы" },
    ]
  }, {
    id: 4, name: "Компания", menu: [
      { id: 18, name: "Здравоохранение" },
      { id: 19, name: "Спортивные объекты" },
      { id: 20, name: "Образование" },
      { id: 21, name: "Судебная система" },
      { id: 22, name: "Государственные учреждения" },
      { id: 23, name: "Правоохранительные органы" },
    ]
  }
])
</script>
