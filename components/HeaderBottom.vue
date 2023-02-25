<template>
    <header class="header-bottom">
      <div class="container flex items-center mx-auto">
      <NuxtLink to="/" class="logo-link lg:w-[150px] lg:h-[30px] flex sm:w-[88px]">
        <img class="lg:block md:hidden" src="/logo.svg" />
        <img class="lg:hidden sm:block" src="/logo-mob.svg" />
      </NuxtLink>
      <ul class="flex items-center ml-auto lg:mr-8 md:mr-4">
        <li class="bottom-list-item lg:pr-4 lg:pl-4 md:px-2" v-for="{ id, href, name, sub } in linksBottom" :key="id">
            <NuxtLink :to="href" v-if="!sub" class="text-link-color text-base">{{ name }}</NuxtLink>
            <a href="#" v-else class="sublink text-link-color text-base flex items-end" @click.prevent="$emit('placeSlot',$event)" :rel="'sub' + id">
            {{ name }}          
            <AngleIcon  class="w-5 h-5 transition-transform"/>
            </a>
        </li> 
      </ul>
      <a href="tel:78123258848" class="font-semibold" @click.prevent="$emit('openModal')">+7 (812) 325-88-48</a>
      </div>
    </header>
</template>

<script setup>
import AngleIcon from '@/assets/svg/angle.svg'

const props = defineProps({
  linksBottom:{
    Type:Array,
    default:()=>[]
  }
})
const emits = defineEmits(['placeSlot', 'openModal'])
</script>
