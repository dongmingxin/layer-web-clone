<script setup lang="ts">
import { ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import Subtitle from '@/components/pageIntroLayout/Subtitle.vue'
import Text from '@/components/pageIntroLayout/Text.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import findOutMoreImg from '@/assets/find-out-more-img.jpg'
import sealReward from '@/assets/2022_Seal_Winne.png'
import aLAReward from '@/assets/ALA_2022_Reward.png'
import aLA22 from '@/assets/ALA22.png'
import employmentLawRecommended2020 from '@/assets/Employment-Law-Recommended-2020.png'
import employmentLeading2021 from '@/assets/Employment-Leading-2021.png'
import employmentLeading2022 from '@/assets/Employment-Leading-2022-1.png'
import cta1 from '@/assets/cta1.png'
import cta2 from '@/assets/cta2.png'
import cta3 from '@/assets/cta3.png'
import cta4 from '@/assets/cta4.png'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sme = breakpoints.smallerOrEqual('md')

const activeHoveredIndex = ref<number | null>(null)

const CarcouselItems: string[] = [
  sealReward,
  aLAReward,
  aLA22,
  employmentLawRecommended2020,
  employmentLeading2021,
  employmentLeading2022,
]

const assistService: { title: string; detail: string; icon: string }[] = [
  {
    title: 'Unfair Dismissal',
    detail: 'If you have been dismissed within the last 21 days and were employed for at least six months you may be eligible to make an unfair dismissal claim.',
    icon: cta1,
  },
  {
    title: 'General Protections',
    detail: 'If adverse action (including dismissal) has been taken against you for a prohibited reason, you may be eligible to make a general protections claim',
    icon: cta2,
  },
  {
    title: 'Contract Advice',
    detail: 'Employment contracts may contain clauses that favour the employer or unfairly restrict what you can do both during and after the employment.',
    icon: cta3,
  },
  {
    title: 'Workplace Bullying',
    detail: 'If you have been bullied or harassed at work, we can assist you in preparing a formal complaint to your employer.',
    icon: cta4,
  },
]
</script>

<template>
  <div class="w-full h-[300px] md:h-[400px] xl:h-[600px] relative">
    <img
      :src="findOutMoreImg"
      alt="find out more image"
      class="w-full h-full object-cover -z-50"
    >
    <div class="absolute top-[20%] left-[8%] 2xl:left-[16%]">
      <div class="flex flex-col text-white font-extrabold text-2xl md:text-5xl xl:text-7xl md:leading-relaxed">
        <span>Your</span>
        <span>Employment</span>
        <span>Lawyers</span>
      </div>
      <button class="bg-[#25ade3] text-white mt-5 px-[17px] py-[7px] rounded-full font-extrabold text-[15px]">
        Find Out More
      </button>
    </div>
  </div>
  <PageIntroLayout>
    <template #title>
      <Title>
        Employment lawyers that put you first
      </Title>
    </template>
    <template #content>
      <Subtitle>
        As a full service employment law firm exclusively
        for employees, Jewell Hancock Employment Lawyers can
        assist with any workplace issue facing an employee.
      </Subtitle>
      <Text>
        Unlike other firms, we don't act for employers, we don't have any union
        affiliations and we don't perform work in other practice areas - our only
        focus is to provide independent, affordable and expert advice to workers.
        With over two decades of combined experience, our Melbourne-based employment
        lawyers have already assisted thousands of employees to achieve fair and practical
        outcomes in the workplace.
      </Text>
      <Text>
        The firm was recently recognised as a Leading Employment Law Firm
        (Employee & Trade Union Representation) - Victoria, 2022 by Doyle's
        Guide and in both the Australian and Australasian Law Awards for our
        expertise and abilities in employment and workplace relations.
      </Text>
      <div class="flex space-x-2 pt-[50px]">
        <button class="bg-[#25ade3] text-white w-[113px] py-[12px] rounded-full font-extrabold text-[12px]">
          More
        </button>
        <button class="bg-[#25ade3] text-white w-[113px] py-[12px] rounded-full font-extrabold text-[12px]">
          Book Now
        </button>
      </div>
    </template>
  </PageIntroLayout>
  <div class="w-full flex justify-center py-10 lg:py-14">
    <div class="2xl:w-8/12">
      <Carousel v-if="sme" :display-item-array="CarcouselItems" />
      <Carousel v-else :display-item-array="CarcouselItems" :items-display-in-one-slide="parseInt('4')" />
    </div>
  </div>
  <div class="w-full bg-[#f6f6f6] flex justify-center">
    <div class="lg:w-10/12 md:w-11/12 2xl:w-8/12 grid grid-cols-1 place-items-center gap-8 md:grid-cols-4 py-20">
      <div
        v-for="(item, index) in assistService"
        :key="item.title"
        class="w-[230px] h-[230px] container-size"
        @mouseover="() => activeHoveredIndex = index" @mouseleave="() => activeHoveredIndex = null"
      >
        <div v-if="activeHoveredIndex === index" class="w-full h-full relative bg-[#292929] flex flex-col items-center justify-center">
          <span class="text-[22px] font-[500] text-[#25ade3]">
            {{ item.title.split(' ')[0] }}
          </span>
          <span class="text-[22px] font-[500] text-[#25ade3] leading-3">
            {{ item.title.split(' ')[1] }}
          </span>
          <p class="text-white text-[13px] w-9/12 overflow-hidden h-2/3 mt-5">
            {{ item.detail }}
          </p>
          <span class="w-[92px] h-[4px] bg-[#25ade3] absolute bottom-0" />
        </div>
        <div v-else class="w-full h-full relative bg-[white] flex flex-col items-center justify-center">
          <img :src="item.icon" class="pb-[20px]">
          <span class="text-[22px] font-[500]">
            {{ item.title.split(' ')[0] }}
          </span>
          <span class="text-[22px] font-[500] leading-3">
            {{ item.title.split(' ')[1] }}
          </span>
          <span class="w-[92px] h-[4px] bg-[#25ade3] absolute bottom-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (768px <= width <= 1165px) {
  .container-size {
    width: 170px;
    height: 260px;
  }
}
</style>
