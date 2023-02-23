<template>
  <p :class="classnames">
    <slot/>
  </p>
</template>

<script setup>
const props = defineProps({
  classnames:{
    Type:Object,
    default:()=>{}
  }
})
</script>
