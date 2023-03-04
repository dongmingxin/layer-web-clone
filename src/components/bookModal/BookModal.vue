<script setup lang="ts">
import Appointment from './Appointment.vue'
const props = defineProps ({
  showModal: {
    type: Boolean,
    default: false,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.showModal"
      class="h-full w-full top-0 right-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50"
      @click.prevent.self="props.onClose()"
    >
      <div class="h-full w-full max-h-[800px] max-w-[900px] md:w-11/12 md:h-[98%] bg-white overflow-y-scroll">
        <div class="flex w-full justify-end px-2">
          <button @click="() => props.onClose()">
            <span class="text-[#00b0f0] font-avenirMedium font-black text-xl">
              X
            </span>
          </button>
        </div>
        <div class="w-full flex justify-center my-3">
          <Appointment />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
