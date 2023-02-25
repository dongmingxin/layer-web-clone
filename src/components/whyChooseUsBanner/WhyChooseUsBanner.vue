<script setup lang="ts">
import whyIcon1 from '@/assets/why1.png'
import whyIcon2 from '@/assets/why2.png'
import whyIcon3 from '@/assets/why3.png'
import whyIcon4 from '@/assets/why4.png'
import whyIcon5 from '@/assets/why5.png'

const benefits: { name: string; icon: string }[] = [
  {
    name: 'Fixed Fees',
    icon: whyIcon1,
  },
  {
    name: 'No-win no-fee',
    icon: whyIcon2,
  },
  {
    name: 'Plain Speak',
    icon: whyIcon3,
  },
  {
    name: '20+ years Experience',
    icon: whyIcon4,
  },
  {
    name: 'Partner Contact',
    icon: whyIcon5,
  },
]
</script>

<template>
  <div class="bg-[#f6f6f6] flex justify-center py-14">
    <div class="w-10/12 lg:w-10/12 md:w-11/12 2xl:w-8/12 flex flex-col items-center">
      <div class="text-[32px] font-semibold">
        Why Choose Us?
      </div>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 pt-7">
        <div
          v-for="benefit in benefits"
          :key="benefit.name"
          class="px-2 relative bg-white w-full h-[120px] md:h-[160px] flex flex-col justify-center items-center text-center"
        >
          <img :src="benefit.icon" alt="benefit icon">
          <div class="mx-[30px] pt-2 text-[18px] font-medium">
            {{ benefit.name }}
          </div>
          <span class="w-[92px] h-[4px] bg-[#25ade3] absolute bottom-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
