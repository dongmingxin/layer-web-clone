<script setup lang="ts">
import ImageBanner from '@/components/imageBanner/ImageBanner.vue'
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import Subtitle from '@/components/pageIntroLayout/Subtitle.vue'
import Text from '@/components/pageIntroLayout/Text.vue'
import noWinNoFeeBanner from '@/assets/no-win-no-fee-banner.jpg'
</script>

<template>
  <div class="w-full">
    <ImageBanner :src="noWinNoFeeBanner" />
    <PageIntroLayout>
      <template #title>
        <Title>
          No-win No-fee
        </Title>
      </template>
      <template #content>
        <Subtitle>
          What is “no-win no-fee”?
        </Subtitle>
        <Text>
          No-win no-fee is a term often used but not well
          understood - so what does it actually mean?
        </Text>
        <Text>
          Essentially, it means that your legal costs
          (excluding disbursements) are only paid upon a
          successful result and paid from any settlement amount
          or any award of compensation you receive. What are
          disbursements? These are costs that we incur on your behalf,
          such as the filing fee of $77.80 in the Fair Work Commission.
          If your matter does not resolve, or if you are unsuccessful at
          any final hearing, your legal costs are not payable. In offering
          you this agreement we are confident of achieving a satisfactory
          outcome otherwise, we don't get paid!
        </Text>
        <Text>
          No-win no-fee does not mean that we charge a percentage
          of the overall outcome. Instead, we quote a fixed fee, up
          front, which is then deducted from any settlement amount or
          any award of compensation you receive. No catches, no hidden
          fees.
        </Text>
        <Text>
          Our lawyers pride themselves on their friendly and down-to-earth
          approach and are happy to field any and all questions you might
          have about fee arrangements.
        </Text>
        <Subtitle class="pt-6">
          Can you act for me on a no-win no-fee basis?
        </Subtitle>
        <Text>
          If you have been dismissed within the last 21 days,
          if you wish to negotiate the termination of your
          employment or if you have been underpaid, we can likely
          assist you, partially or fully, on a no-win no-fee basis.
        </Text>
      </template>
    </PageIntroLayout>
  </div>
</template>

<style scoped>

</style>
