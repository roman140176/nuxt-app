<template>
  <div class="container mx-auto relative">
      <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="5"      
      :loop="false"    
      :spaceBetween="64"       
      :navigation = "{
                prevEl: '.prev',
                nextEl: '.next',
              }"
      :breakpoints="{
        1681:{
          spaceBetween:64
        },
        0:{
          spaceBetween:32
        }
      }"
      
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <div class="h-[100px] flex items-center justify-center bg-gray-200 mb-2">
        {{slide}}
        </div>
        <div class="text-lg text-center">Клиент {{ slide }}</div>
      </SwiperSlide>
    </Swiper>
      <div class="navigarion">
        <div class="prev" ref="prev">
          <iconPrev/>

        </div>
        <div class="next" ref="next">         
          <iconNext/>
        </div>
      </div>
    </div>
</template>

<script setup>
import iconPrev from '@/assets/svg/prev.svg'
import iconNext from '@/assets/svg/next.svg'
</script>
