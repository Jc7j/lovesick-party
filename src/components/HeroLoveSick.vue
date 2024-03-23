<script setup>
import { computed } from 'vue'
import useMobile from '../utils/useMobile'
import MobileDrawer from '@/components/MobileDrawer.vue'

const { isMobile } = useMobile()

const text = 'LOVESICK'
const splitText = computed(() => text.split(''))
</script>

<template>
  <section class="container">
    <div class="top-bar">
      <p class="description">
        DANCE THE NIGHT AWAY TO THE GENERES BIGGEST HITS & HIDDEN GEMS, IMMERSED IN A HIGH-ENERGY &
        PRODUCTION EXPERIENCE
      </p>

      <div class="icons" v-if="!isMobile">
        <a href="https://www.instagram.com/lovesickparty/" target="_blank"
          ><img class="icon" src="/instagram-icon.png" alt="instagram icon"
        /></a>
        <a href="mailto:info@lovesickparty.com"
          ><img class="icon" src="/gmail-icon.png" alt="gmail icon"
        /></a>
      </div>

      <MobileDrawer />
    </div>

    <div class="main-display">
      <h1 class="header-title">
        <span
          v-for="(letter, index) in splitText"
          :key="index"
          class="letter"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          >{{ letter }}</span
        >
      </h1>
      <p class="hero-subtitle">K-POP PARTY</p>
      <a href="https://posh.vip/f/9ecc" target="_blank">
        <img src="/LOVESICK--SQ--PHASE2.png" alt="LoveSick Poster" class="lovesick-poster" />
      </a>
      <a href="https://posh.vip/f/9ecc" target="_blank" class="ticket-link"> Get Tickets! </a>
    </div>

    <div class="next-event">
      <div></div>
      <div>
        <p>Coming up</p>
        <strong>The Hard Rock Cafe</strong>
        <p>March 15th</p>
        <p>3771 Las Vegas BLVD @ Hard Rock Cafe</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 90vh;
  position: relative;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  height: 15vh;
  opacity: 0;
  animation: fadeInFromLeft 2s ease-out forwards 2s;
}

.description {
  font-size: 1.1rem;
}

.icons {
  display: flex;
}

.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0.5rem 0.5rem;
}

.main-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.header-title {
  position: absolute;
  animation: moveFromInitial 2s ease-in forwards 2s;
}

.letter {
  display: inline-block;
  animation: wave 1.3s infinite ease-in;
  font-weight: bold;
  font-size: 2.5rem;
  color:var(--lovesick-blue);
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
}

.lovesick-poster {
  width: 22rem;
  border-radius: 5%;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
}

.ticket-link {
  text-decoration: none;
  border-radius: 8%;
  padding: 5px;
  background-color: var(--lovesick-yellow);
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
}

.next-event {
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  font-size: 1.3rem;
  height: 20vh;
  opacity: 0;
  animation: fadeInFromRight 2s ease-out forwards 2s;
}

@keyframes wave {
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInFromRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes moveFromInitial {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    bottom: 0;
    left: 1rem;
  }
}

@media (min-width: 475px) {
  .container {
    max-width: 475px;
  }

  .description {
    font-size: 1.5rem;
  }

  .letter {
    font-size: 3rem;
  }

  .lovesick-poster {
    width: 27rem;
  }
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
  .description {
    font-size: 1.8rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }

  .next-event {
    margin-left: 40%;
    text-align: start;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }

  .description {
    font-size: 2.3rem;
    width: 80%;
  }

  .letter {
    font-size: 5rem;
  }

  .lovesick-poster {
    width: 30rem;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
</style>
