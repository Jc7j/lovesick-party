<script setup>
import InstagramSvg from './InstagramSvg.vue'
import GmailSvg from './GmailSvg.vue'
</script>

<template>
  <footer class="container section footer">
    <p>PRESENTED BY GANJI © 2024</p>
    <span>
      <InstagramSvg />
      <GmailSvg />
    </span>
    <a href="https://github.com/Jc7j" target="_blank">BUILT BY JAHHSONC</a>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  color: var(--pink-vivid-400);
  font-family: 'Clash Display', sans-serif;
}

span {
  display: flex;
  gap: var(--size-base);
}
</style>
