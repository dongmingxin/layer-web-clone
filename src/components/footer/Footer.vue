<script setup lang='ts'>
import arrowIcon from '@/assets/arrow.png'
import facebook from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'
import instagram from '@/assets/instagram.png'
import linkedin from '@/assets/linked-in.png'

const contactUsSections: { title: string; info: string }[] = [
  {
    title: 'Phone',
    info: '(03) 8610 6369',
  },
  {
    title: 'Email',
    info: 'contact@jhel.com.au',
  },
]

const importantLinks: { linkName: string; href: string }[] = [
  {
    linkName: 'Appointments & Fees',
    href: '',
  },
  {
    linkName: 'Choosing the Right Lawyer',
    href: '',
  },
  {
    linkName: 'Blog',
    href: '',
  },
  {
    linkName: 'News',
    href: '',
  },
  {
    linkName: 'JH Briefs',
    href: '',
  },
  {
    linkName: 'Privacy',
    href: '',
  },
]

const followUsIconList: { icon: string; href: string }[] = [
  {
    icon: facebook,
    href: '',
  },
  {
    icon: twitter,
    href: '',
  },
  {
    icon: instagram,
    href: '',
  },
  {
    icon: linkedin,
    href: '',
  },
]
</script>

<template>
  <div class="bg-[#3d3d3e] w-full pt-12 pb-5 flex flex-col md:flex-row lg:justify-between flex-wrap md:px-4">
    <div class="pl-4 pb-8 w-full md:w-1/2 lg:w-1/4 p-4">
      <div class="text-[22px] text-[#25ade3] mb-7">
        Address
      </div>
      <div class="text-[15px] text-white font-normal">
        Level 3<br>
        126 Wellington Parade<br>
        East Melbourne, Victoria, 3002<br>
        <br>
        Collins Street Tower<br>
        Level 3, 480 Collins Street<br>
        Melbourne, Victoria, 3000<br>
      </div>
    </div>
    <div class="pl-4 pb-8 text-[15px] w-full md:w-1/2 lg:w-1/4 p-4">
      <div class="text-[22px] text-[#25ade3] mb-7">
        Contact Us
      </div>
      <div v-for="item in contactUsSections" :key="item.info" class="flex flex-col pb-3 text-white">
        <span class="text-[#25ade3]">
          {{ item.title }}
        </span>
        {{ item.info }}
      </div>
    </div>
    <div class="pl-4 pb-8 text-white w-full md:w-1/2 lg:w-1/4 p-4">
      <div class="text-[22px] text-[#25ade3] mb-7">
        Important Links
      </div>
      <ul class="mb-4">
        <li v-for="item in importantLinks" :key="item.linkName" class="leading-10 flex items-center">
          <img :src="arrowIcon" alt="list arrow" class="pr-1">
          {{ item.linkName }}
        </li>
      </ul>
      <div>
        Liability limited by a scheme approved under Professional Standards Legislation
      </div>
    </div>
    <div class="pl-4 pb-8 text-white w-full md:w-1/2 lg:w-1/4 p-4">
      <div class="text-[22px] text-[#25ade3] mb-7">
        Follow Us
      </div>
      <div class="flex space-x-4 pb-12">
        <img
          v-for="item in followUsIconList"
          :key="item.icon"
          :src="item.icon"
          alt="social links"
          class="p"
        >
      </div>
      <div class="flex flex-col text-[#717171]">
        <span class="w-[98px] h-[1px] bg-[#717171] mb-4" />
        <span>Jewell Hancock copy</span>
        <span>ABN: 50 644 574 149</span>
        <span>Website only for learning purpose</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
