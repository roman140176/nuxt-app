<template>
  <footer class="footer bg-gray-300 pt-24">
    <div class="container mx-auto">
      <div class="pb12 flex flex-wrap justify-between pb-4 border-b-gray-400 border-b-[1px]">
        <div class="footer__item w-[200px]" v-for="{ id, name, menu } in boxes" :key="id">
          <header class="font-bold text-xl mb-4">{{ name }}</header>
          <ul>
            <li v-for="item in menu" :key="item.id" class="leading-7 cursor-pointer">
              {{ item.name }}
            </li>
          </ul>        
        </div>
        <div class="adsress w-[400px] mb-4">
          <header class="font-bold text-xl mb-4">Наши контакты</header>
            <address class="not-italic mb-4">
              <div class="font-bold  mb-2">
                <span>Санкт-Петербург,</span>
                <a href="#" class="text-link-color"> 194044, Гельсингфорсская, 3-11, лит.Д</a>
              </div>
              <div class="phone flex mb-1">
              <span>Телефон:</span>
              <a href="tel:78123258848" class="text-serif">+7 (812) 325-88-48</a>
              </div>
              <div class="email flex mb-1">
              <span>Email:</span>
              <a href="tel:78123258848" class="text-serif">stc-spb@speechpro.com</a>
              </div>
            </address>
            <address class="not-italic">
              <div class="font-bold  mb-2">
                <span>Москва,</span>
                <a href="#" class="text-link-color"> 1099004, ул. Земляной Вал, стр. 2</a>
              </div>
              <div class="phone flex mb-1">
              <span>Телефон:</span>
              <a href="tel:78123258848" class="text-serif">+7 (812) 325-88-48</a>
              </div>
              <div class="email flex mb-1">
              <span>Email:</span>
              <a href="tel:78123258848" class="text-serif">stc-spb@speechpro.com</a>
              </div>
            </address>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="py-8 flex items-center justify-between">
        <div class="footer-bottom-left">
          <div class="grid grid-cols-[repeat(4,60px)] gap-x-4 mb-8">
            <div class="rounded-full w-[60px] h-[60px] bg-white" v-for="i in 4" :key="i"></div>
          </div>
          <div class="term-links grid grid-cols-3 gap-x-8 mb-12">
            <a href="#">Политика конфидициальности</a>
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Карта сайта</a>
          </div>
          <div class="copy">&copy; Photo, inc 2019. We love our users!</div>
        </div>
        <div class="footer-bottom-right">
          <NuxtLink to="/" class="logo-link w-[150px] h-[30px] flex mb-4">
            <img src="/logo.svg" />
          </NuxtLink>
          <div class="grid grid-cols-3 gap-x-4 font-bold">
            <span>Ru</span>
            <span>En</span>
            <span>Esp</span>
          </div>
        </div>
      </div>
    </div>
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
