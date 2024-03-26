<script setup></script>

<template>
  <a href="https://posh.vip/f/9ecc" target="_blank" class="get-ticket">TICKETS</a>
</template>

<style scoped>
.get-ticket {
  border: 2px solid var(--pink-vivid-300);
  padding: var(--size-base) var(--size-7xl);
  border-radius: var(--size-6xl);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  transition: background-color 0.3s ease;
}

.get-ticket:hover {
  color: white;
  background-color: var(--pink-vivid-300);
}

@media (min-width: 768px) {
  .header {
    font-size: var(--size-7xl);
  }

  .get-ticket {
    padding: var(--size-xxs) var(--size-4xl);
  }
}
</style>
