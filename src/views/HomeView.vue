<script setup>
import DesktopSideNav from '@/components/DesktopSideNav.vue'
import HeroLoveSick from '@/components/HeroLoveSick.vue'
import GalleryShow from '@/components/GalleryShow.vue'
</script>

<template>
  <main id="layout">
    <DesktopSideNav />
    <HeroLoveSick />
    <GalleryShow/>
  </main>
</template>

<style scoped>
#layout {
  position: relative;
}
</style>
