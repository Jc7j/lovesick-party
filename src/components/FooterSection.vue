<script setup>
import InstagramSvg from './InstagramSvg.vue'
import GmailSvg from './GmailSvg.vue'
</script>

<template>
  <footer class="container footer">
    <p>PRESENTED BY GANJI © 2024</p>
    <span>
      <InstagramSvg />
      <GmailSvg />
    </span>
    <a href="mailto:info@lovesickparty.com?subject=Come%20Play%20At%20Our%20Venue!" target="_blank"
      >BOOK US FOR YOUR NEXT EVENT !</a
    >
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: var(--pink-vivid-400);
  font-family: 'Clash Display', sans-serif;
  margin-top: var(--size-base);
  margin-bottom: var(--size-base);
}

span {
  display: flex;
  gap: var(--size-base);
}

@media (min-width: 768px) {
  .footer {
    flex-direction: row;
  }
}
</style>
