<script setup>
import { computed } from 'vue'

const text = 'LOVESICK'
const splitText = computed(() => text.split(''))
</script>

<template>
  <section class="hero">
    <h1 id="header-title">
      <span
        v-for="(letter, index) in splitText"
        :key="index"
        class="letter"
        :style="{ 'animation-delay': `${index * 0.1}s` }"
        >{{ letter }}</span
      >
    </h1>
    <p class="hero-subtitle">K-POP PARTY</p>

    <div class="next-event-container">
      <div class="positioning">
        <p>March 15th</p>
        <p>3771 Las Vegas BLVD @ Hard Rock Cafe</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  height: 100vh;
}

.letter {
  display: inline-block;
  animation: wave 1.3s infinite ease-in;
  font-size: 8rem;
}

.next-event-container {
  position: relative;
}

.positioning {
  position: absolute;
  width: 300px;
  height: 300px;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 640px) {
  .letter {
    font-size: 2rem;
  }
}
</style>
