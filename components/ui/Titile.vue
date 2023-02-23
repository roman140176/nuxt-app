<template>
  <component :is="tag" :class="classname">
    <slot/>
  </component>
</template>

<script setup>
const tag = ref('DataPropsAndMethods')

const props = defineProps(
  { level: { 
    type: Number, 
    required: true, 
    validator: (value) => value >= 1 && value <= 6, 
    }, 
  
  classname:{
    Type: String,
    default: 'text-3xl font-bold mb-6'
  }
  })
   onMounted(()=>{
    tag.value = `h${props.level}`
   })
  
</script>
