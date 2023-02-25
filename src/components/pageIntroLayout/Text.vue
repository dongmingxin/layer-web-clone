<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: '',
    reuired: false,
  },
})
</script>

<template>
  <p :class="`text-[15px] text-justify ${props.class}`">
    <slot />
  </p>
</template>
