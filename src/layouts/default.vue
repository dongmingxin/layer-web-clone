<script setup lang="ts">
import Footer from '@/components/footer/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue'
import SendEnquiry from '@/components/sendEnquiry/SendEnquiry.vue'
import WhyChooseUsBanner from '@/components/whyChooseUsBanner/WhyChooseUsBanner.vue'
</script>

<template>
  <main>
    <div class="min-h-screen relative">
      <Navigation />
      <router-view />
      <WhyChooseUsBanner />
      <SendEnquiry />
      <Footer />
    </div>
  </main>
</template>
