<script setup lang="ts">
import { useRouter } from 'vue-router'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import navIcon from '@/assets/nav_icon.png'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sme = breakpoints.smallerOrEqual('md')
const isNavExpended = ref<boolean>(false)

const toggleNavExpend = (): boolean => isNavExpended.value = !isNavExpended.value

watch(isNavExpended, (newValue, oldValue) => {
  // eslint-disable-next-line no-console
  console.log(`isNavExpended changed from ${oldValue} to ${newValue}`)
  // eslint-disable-next-line no-console, @typescript-eslint/no-use-before-define
  console.log(navClass.value)
})

const navClass = computed(() => (isNavExpended.value && sme) ? 'nav_expended' : 'nav_collapsed')

const router = useRouter()

router.afterEach(() => {
  isNavExpended.value = false
})

const topNavItem: { name: string; to: string }[] = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Services',
    to: '/services',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Our Team',
    to: '/our-team',
  },
  {
    name: 'No-Win No-Fee',
    to: '/no-win-no-fee',
  },
]
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="flex flex-col w-full p-4 xl:flex-row md:justify-between lg:w-10/12 md:w-11/12 2xl:w-8/12 md:py-9 ">
      <div class="flex justify-center mb-5 md:m-0">
        <img :src="navIcon" alt="nav icon">
      </div>
      <div class="flex justify-between pt-[8px] items-center w-full xl:pl-20 xl:pt-0">
        <div>
          <div
            v-if="sme"
            class="w-[44px] h-[34px] border border-gray-800 rounded flex flex-col items-center justify-center cursor-pointer"
            @click="toggleNavExpend"
          >
            <span class="w-[22px] h-[2px] bg-gray-800" />
            <span class="w-[22px] h-[2px] m-[4px] bg-gray-800" />
            <span class="w-[22px] h-[2px] bg-gray-800" />
          </div>
          <div v-else>
            <ul class="flex flex-row space-x-4 text-[#8D8C8A]">
              <li v-for="item in topNavItem" :key="item.name">
                <RouterLink :to="item.to" exact-active-class="text-[#25ade3]">
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex space-x-2">
          <button class="bg-[#58585a] text-white px-6 py-2 rounded-full font-extrabold text-xs">
            Contact
          </button>
          <button class="bg-[#25ade3] text-white px-4 py-2 rounded-full font-extrabold text-xs">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="sme" :class="`${navClass} nav_content px-4`">
    <div v-for="item in topNavItem" :key="item.name" class="text-[#8D8C8A] py-1 text-sm">
      <RouterLink :to="item.to" exact-active-class="text-[#25ade3]">
        {{ item.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.nav_content {
  height: 150px;
  transition: height 0.5s ease;
  overflow: hidden;
}

.nav_expended {
  border-top: 1px solid #e7e7e7;
}

.nav_collapsed {
  height: 0px;
}
</style>
