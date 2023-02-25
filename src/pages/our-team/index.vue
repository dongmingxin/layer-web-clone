<script setup lang="ts">
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import ImageBanner from '@/components/imageBanner/ImageBanner.vue'
import ourTeamBanner from '@/assets/our_team_banner.jpg'
import teamMemberAvatar from '@/assets/team-member-avatar.webp'

const teamInfos: { photo: string; name: string; link: string }[] = [
  {
    photo: teamMemberAvatar,
    name: 'Andrew Jewell',
    link: '',
  },
  {
    photo: teamMemberAvatar,
    name: 'Trent Hancock',
    link: '',
  },
  {
    photo: teamMemberAvatar,
    name: 'Sam Nottle',
    link: '',
  },
  {
    photo: teamMemberAvatar,
    name: 'Michael Kriewaldt',
    link: '',
  },
  {
    photo: teamMemberAvatar,
    name: 'Phi Tran',
    link: '',
  },
  {
    photo: teamMemberAvatar,
    name: 'Lily Passchier',
    link: '',
  },
]
</script>

<template>
  <div>
    <ImageBanner :src="ourTeamBanner" />
    <PageIntroLayout>
      <template #title>
        <Title>
          Our Team
        </Title>
      </template>
      <template #content>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-[22px]">
          <div v-for="item in teamInfos" :key="item.name" class="flex flex-col items-center">
            <img :src="item.photo" class="h-[195px] w-[195px]">
            <div class="pt-[32px] pb-[18px]">
              {{ item.name }}
            </div>
            <span class="text-[13px] text-[#25ade3] cursor-pointer">
              Read more
            </span>
          </div>
        </div>
      </template>
    </PageIntroLayout>
  </div>
</template>

<style scoped>

</style>
