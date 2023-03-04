<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default: '',
    reuired: false,
  },
})
</script>

<template>
  <h2 class="text-[22px] leading-[1.2]" :class="props.class">
    <slot />
  </h2>
</template>
