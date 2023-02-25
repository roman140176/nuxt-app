<template>
    <header class="header-top 2xl:mb-8 py-4">
    <div class="container flex justify-end mx-auto">
      <nav class="flex items-center">
        <button class="bg-none border-none h-[18px] w-[34px] pr-4">
          <SearchIcon height="18px"/>
        </button>
        <ul class="top-list flex items-center">
          <li class="top-list-item pr-4 pl-4" v-for="{ id, href, name } in linksTop" :key="id">
            <NuxtLink :to="href" class="text-link-color text-spec">
              {{ name }}
            </NuxtLink>
          </li>      
        </ul>
        <div class="lang ml-2 text-link-color font-semibold flex items-end relative">
        <AngleIcon  class="w-4 h-4 transition-transform mb-[2px]"/>
        <span @click="$emit('openLanguages')" class="cursor-pointer min-w-[30px]">{{ selectedLang }}</span>
        <ul v-if="isLang" class="absolute bg-white p-2 top-[100%] left-0 whitespace-nowrap shadow-sm min-w-[80px]">
          <li v-for="lang in languages" 
          :key="lang" 
          class="lang-item cursor-pointer" 
          :class="{ active: lang === selectedLang }"
          @click="$emit('closeLangugesAndSelect', $event)"
          v-click-outside="emitCloseLanguges"
          >
            {{ lang }}
          </li>
        </ul>
        </div>
      </nav>
    </div>
    </header>
</template>

<script setup>
import SearchIcon from '@/assets/svg/magnifaer.svg'
import AngleIcon from '@/assets/svg/angle.svg'
const props = defineProps({
  linksTop:{
    Type:Array,
    default:()=>[]
  },
  languages:{
    Type:Array,
    default:()=>[]
  },
  selectedLang:{
    Type:String,
    default:''
  },
  isLang:{
    Type:Boolean,
    default:false
  },
})

const emits = defineEmits(['openLanguages','closeLangugesAndSelect'])
const emitCloseLanguges = ()=>{
  emits('closeLanguges')
}
</script>
