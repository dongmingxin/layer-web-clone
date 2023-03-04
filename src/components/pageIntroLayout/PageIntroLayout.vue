<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default: '',
    reuired: false,
  },
  borderClass: {
    type: String,
    default: '',
    reuired: false,
  },
  layoutClass: {
    type: String,
    default: '',
    reuired: false,
  },
})
</script>

<template>
  <div :class="`w-full flex flex-col items-center ${props.class}`">
    <div :class="`flex flex-col w-full px-[15px] pt-[75px] pb-[25px] lg:w-10/12 md:w-11/12 2xl:w-8/12 md:px-0 md:flex-row md:justify-between md:space-x-20 ${layoutClass}`">
      <div class="w-full md:w-4/12 xl:w-3/12">
        <div :class="`w-[98px] h-[4px] bg-[#25ade3] ${borderClass}`" />
        <div class="w-2/3 sm:w-2/6 md:w-full">
          <slot name="title" />
        </div>
        <slot name="title-content" />
      </div>
      <div class="md:w-8/12 xl:w-9/12 flex flex-col space-y-3">
        <slot name="content" />
      </div>
      <slot />
    </div>
  </div>
</template>
