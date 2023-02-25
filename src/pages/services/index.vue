<script setup lang="ts">
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import Subtitle from '@/components/pageIntroLayout/Subtitle.vue'
import ImageBanner from '@/components/imageBanner/ImageBanner.vue'
import servicesBanner from '@/assets/services_banner.jpg'

const services: { service: string; href: string }[] = [
  { service: 'Unfair dismissal', href: 'Unfair-dismissal' },
  { service: 'General protections', href: 'General-protections' },
  { service: 'Contract advice', href: 'Contract-advice' },
  { service: 'Workplace bullying', href: 'Workplace-bullying' },
  { service: 'Redundancy advice', href: 'Redundancy-advice' },
  { service: 'Workplace discrimination', href: 'Workplace-discrimination' },
  { service: 'Underpayment claims', href: 'Underpayment-claims' },
  { service: 'Sham contracting', href: 'Sham-contracting' },
  { service: 'Misleading and deceptive conduct', href: 'Misleading-and-deceptive-conduct' },
  { service: 'Executive employment', href: 'Executive-employment' },
  { service: 'Migrant employment', href: 'Migrant-employment' },
  { service: 'General negotiation', href: 'General-negotiation' },
]
</script>

<template>
  <div class="w-full">
    <ImageBanner :src="servicesBanner" />
    <PageIntroLayout>
      <template #title>
        <Title>
          Services
        </Title>
      </template>
      <template #content>
        <Subtitle>
          As a full service employment law firm for employees,
          Jewell Hancock Employment Lawyers can assist with any
          workplace issue facing an employee.
        </Subtitle>
      </template>
    </PageIntroLayout>
    <div class="w-full bg-[#f6f6f6] flex justify-center">
      <div class="w-10/12 lg:w-10/12 md:w-11/12 2xl:w-8/12 grid grid-cols-1 place-items-center gap-8 md:grid-cols-6 py-20">
        <div v-for="service in services" :key="service.service" class="relative bg-white w-full h-[130px] flex flex-col justify-center items-center text-center hover:bg-[#292929] hover:text-[#25ade3]">
          <RouterLink :to="`/services/${service.href}`" class="mx-[30px] service__title--font">
            {{ service.service }}
          </RouterLink>
          <span class="w-[92px] h-[4px] bg-[#25ade3] absolute bottom-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (768px <= width <= 1165px) {
  .service__title--font {
    font-size: 12px;
  }
}
</style>
