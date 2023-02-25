<template>
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
</template>
