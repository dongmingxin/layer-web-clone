<script setup lang="ts">
const props = defineProps({
  src: { type: String, required: true },
})
</script>

<template>
  <div class="w-full h-[170px] md:h-[280px]">
    <img
      :src="props.src" alt="top image holder"
      class="w-full h-full object-cover"
    >
  </div>
</template>
