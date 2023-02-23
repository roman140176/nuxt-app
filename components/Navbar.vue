
<script setup>
import SearchIcon from '@/assets/svg/magnifaer.svg'
import AngleIcon from '@/assets/svg/angle.svg'


const linksTop = ref([
  {id:0,name:'Карьера',href:'#'},{id:1,name:'Техподдержка',href:'#'},{id:2,name:'Контакты',href:'#'}
])
const linksBottom = ref([
  {id:0,name:'Продукты',href:'#', sub: true },{id:1,name:'Решения',href:'#', sub: true },{id:2,name:'Пресс-центр',href:'#'},
  { id: 3, name: 'Проекты', href: '#' }, { id: 4, name: 'О компании', href: '#' }
])
const isModal = ref(false)
const prod = ref(null)
const languages = reactive([
  'Ru',
  'En',
  'Esp'
])


const selectedLang = ref('')
const isLang = ref(false)

const openLanguages = () => {
  isLang.value = !isLang.value
}
const closeLangugesAndSelect = (e) => {
  selectedLang.value = e.target.textContent
  localStorage.setItem('lang', e.target.textContent)
  isLang.value = false
}

const closeLanguges = () =>{
  isLang.value = false
}
const openModal = (e) => {
  isModal.value = true
  
}

const closeModal = () => {
  isModal.value = false  
  prod.value = null
  
}
const placeSlot = (e) => {
  openModal()
  if(e.target.rel==='sub0'){
    prod.value = true
    
  }else{
    prod.value=false    
  }
  
}

onMounted(()=>{
    selectedLang.value = localStorage.getItem('lang') || languages[0]
    console.log(localStorage.getItem('lang'));
   })

</script>
<template>
  <header class="header-top mb-8">
  <div class="container flex justify-end py-4 mx-auto">
    <nav class="flex items-center">
      <button class="bg-none border-none h-[18px] w-[34px] pr-4">
        <SearchIcon height="18px"/>
      </button>
      <ul class="top-list flex items-center">
      <li class="top-list-item pr-4 pl-4" v-for="{id,href,name} in linksTop" :key="id">
        <NuxtLink :to="href" class="text-link-color text-spec">
          {{ name }}
        </NuxtLink>
      </li>      
      </ul>
      <div class="lang ml-2 text-link-color font-semibold flex items-end relative">
      <AngleIcon  class="w-4 h-4 transition-transform mb-[2px]"/>
      <span @click="openLanguages" class="cursor-pointer min-w-[30px]">{{ selectedLang }}</span>
      <ul v-if="isLang" class="absolute bg-white p-2 top-[100%] left-0 whitespace-nowrap shadow-sm min-w-[80px]">
        <li v-for="lang in languages" 
        :key="lang" 
        class="lang-item cursor-pointer" 
        :class="{active:lang === selectedLang}"
        @click="closeLangugesAndSelect"
        v-click-outside="closeLanguges"
        >
          {{ lang }}
        </li>
      </ul>
      </div>
    </nav>
  </div>
  </header>
  <header class="header-bottom">
    <div class="container flex items-center mx-auto">
    <NuxtLink to="/" class="logo-link w-[150px] h-[30px] flex">
      <img src="logo.svg" />
    </NuxtLink>
    <ul class="flex items-center ml-auto mr-8">
      <li class="bottom-list-item pr-4 pl-4" v-for="{ id, href, name,sub } in linksBottom" :key="id">
          <NuxtLink :to="href" v-if="!sub" class="text-link-color text-base">{{ name }}</NuxtLink>
          <a href="#" v-else class="sublink text-link-color text-base flex items-end" @click.prevent="placeSlot" :rel="'sub'+id">
          {{ name }}          
          <AngleIcon  class="w-5 h-5 transition-transform"/>
          </a>
      </li> 
    </ul>
    <a href="tel:78123258848" class="font-semibold" @click.prevent="openModal">+7 (812) 325-88-48</a>
    </div>
  </header>
  <Modal :isModal="isModal" @openModal="openModal" @closeModal="closeModal">
    <SubMenuProd :prod="prod"/>
  </Modal>
</template>



