<script setup lang="ts">
import { useRoute } from 'vue-router'
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import Subtitle from '@/components/pageIntroLayout/Subtitle.vue'
import Text from '@/components/pageIntroLayout/Text.vue'
import ImageBanner from '@/components/imageBanner/ImageBanner.vue'
import servicesBanner from '@/assets/services_banner.jpg'

const route = useRoute()
const service = route.params.service
const serviceName = Array.isArray(service) ? service[0] : service
const formattedServiceName = serviceName.replace(/-/g, ' ')
</script>

<template>
  <ImageBanner :src="servicesBanner" />
  <PageIntroLayout>
    <template #title>
      <Title>
        {{ formattedServiceName }}
      </Title>
    </template>
    <template #content>
      <Subtitle class="font-semibold">
        What is a {{ formattedServiceName }}?
      </Subtitle>
      <Text>
        If adverse action (including dismissal) has been
        taken against you for a prohibited reason, you may be
        eligible to make a general protections claim in the Fair
        Work Commission
      </Text>
      <Text>
        Prohibited reasons include your race, colour, sex,
        sexual orientation, age, physical or mental disability,
        marital status, family or carer's responsibilities,
        pregnancy, religion, political opinion, national extraction
        or social origin. It also includes you exercising,
        or proposing to exercise, a workplace right, including
        your right to make a complaint or inquiry in relation
        to your employment.
      </Text>
      <Subtitle>
        How do I make a claim?
      </Subtitle>
      <Text>
        The general protections process involves filing an
        application in the Fair Work Commission. If you have
        been dismissed, the application must be filed within
        21 days of the dismissal. The Fair Work Commission
        convenes a conference between the parties to provide
        them with an opportunity to settle the dispute. If the
        parties can't settle the dispute, the Commission issues
        a certificate and the claim can then be pursued in the
        Federal Circuit Court of Australia or the Federal Court
        of Australia.
      </Text>
      <Text>
        The lawyers at Jewell Hancock Employment Lawyers have
        brought hundreds of successful general protections claims
        over the last ten years. We can assist you at every stage
        of the process, from preparing the application in the Fair
        Work Commission all the way through to a final hearing.
      </Text>
      <Text>
        If you have been dismissed within the last 21 days for
        a prohibited reason, you may qualify for a free 30 minute
        consultation as well as our no-win no-fee service.
      </Text>
    </template>
  </PageIntroLayout>
</template>

<style scoped>

</style>
