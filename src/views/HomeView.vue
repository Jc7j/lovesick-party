<script setup lang="ts">
import HeroLoveSick from '@/components/HeroLoveSick.vue'
import SideNav from '@/components/SideNav.vue'
</script>

<template>
  <main id="layout">
    <SideNav />
    <HeroLoveSick />
  </main>
</template>

<style scoped>
#layout {
  position: relative;
}
</style>
