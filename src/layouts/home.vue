<script setup lang="ts">
import Footer from '@/components/footer/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue'
</script>

<template>
  <main>
    <div class="min-h-screen relative">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </main>
</template>
