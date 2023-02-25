<script setup lang="ts">
import Footer from '@/components/footer/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue'
</script>

<template>
  <main>
    <div class="min-h-screen relative">
      <Navigation />
      This is 404
      <router-view />
      <Footer />
    </div>
  </main>
</template>

<style lang="scss">
</style>
