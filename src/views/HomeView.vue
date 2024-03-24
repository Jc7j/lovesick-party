<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <main id="layout">
    <HeroSection />
    <GallerySection />
    <AboutSection />
    <FooterSection />
  </main>
</template>

<style scoped>
#layout {
  position: relative;
}
</style>
