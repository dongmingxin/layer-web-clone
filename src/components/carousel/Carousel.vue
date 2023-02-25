<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
    required: false,
  },
  displayItemArray: {
    type: Array as () => string[],
    required: true,
  },
  itemsDisplayInOneSlide: {
    type: Number,
    default: 1,
    required: false,
  },
})

const numberOfSlide = computed(() => Math.ceil(props.displayItemArray.length / props.itemsDisplayInOneSlide))

const currentDisplayIndex = ref(0)

const offset = computed(() => (currentDisplayIndex.value) * 100)

const next = () => (currentDisplayIndex.value >= numberOfSlide.value - 1) ? currentDisplayIndex.value = 0 : currentDisplayIndex.value += 1

const back = () => (currentDisplayIndex.value > 0) ? currentDisplayIndex.value -= 1 : currentDisplayIndex.value = numberOfSlide.value - 1
</script>

<template>
  <div :class="props.class" class="w-full flex flex-col items-center relative">
    <div class="w-full overflow-hidden h-[200px]">
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${offset}%)` }">
        <div v-for="item in props.displayItemArray" :key="item" class="min-w-[100%] flex justify-center md:min-w-[25%]">
          <img :src="item" class="w-[204px]">
        </div>
      </div>
    </div>
    <span class="right-arrow" @click="next" />
    <span class="left-arrow" @click="back" />
  </div>
</template>

<style scoped lang="scss">
.right-arrow {
  cursor: pointer;
  width: 0;
  height: 0;
  border-width: 15px 0 15px 15px;
  border-color: transparent transparent transparent #007CBA;
  border-style: solid;
  position: absolute;
  right: 15px;
  top: calc(50% - 15px)
}
.left-arrow {
  cursor: pointer;
  width: 0;
  height: 0;
  border-width: 15px 15px 15px 0;
  border-color: transparent #007CBA transparent transparent;
  border-style: solid;
  position: absolute;
  left: 15px;
  top: calc(50% - 15px);
}
</style>
