<script setup lang="ts">
import ImageBanner from '@/components/imageBanner/ImageBanner.vue'
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import Subtitle from '@/components/pageIntroLayout/Subtitle.vue'
import Text from '@/components/pageIntroLayout/Text.vue'
import aboutBanner from '@/assets/about_banner.jpg'
import employmentLeadingIcon from '@/assets/Employment-Leading-2022-1.png'
</script>

<template>
  <div class="w-full">
    <ImageBanner :src="aboutBanner" />
    <PageIntroLayout>
      <template #title>
        <Title>
          About
        </Title>
      </template>
      <template #title-content>
        <div class="w-full h-[190px] flex justify-center md:justify-start pb-8">
          <img
            :src="employmentLeadingIcon"
            alt="reward icon"
            class="h-full"
          >
        </div>
      </template>
      <template #content>
        <Subtitle>
          Jewell Hancock Employment Lawyers was established
          by Andrew Jewell and Trent Hancock, two principal
          lawyers with more than two decades of experience
          between them. After working together at a boutique
          employment law firm in the Melbourne CBD, they identified
          an opportunity to provide a more personalised, pragmatic
          and cost-effective service to clients, so decided to start
          their own firm.
        </Subtitle>
        <Text>
          Having successfully assisted thousands of employees with
          their workplace disputes, Andrew and Trent know what clients
          want. That's why the firm operates on an entirely fixed fee
          basis and makes sure that all legal costs are clearly
          explained from the very first appointment. If you have been
          dismissed, we can likely offer our services on a no-win no-fee
          basis (excluding disbursements). In order to make our services
          as affordable as possible we work predominantly by telephone,
          video conference and email, with in-person appointments
          available on request. Of course, your lawyer will appear
          in court where required.
        </Text>
        <Text>
          The firm prides itself on being truly independent.
          We don't perform conflicting work for employers and we
          don't receive referrals from unions. This means you can
          be confident that you are always receiving truly independent
          advice and representation tailored to your circumstances.
        </Text>
      </template>
    </PageIntroLayout>
  </div>
</template>

<style scoped>

</style>
