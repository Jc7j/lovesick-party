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
    <img src="/LOVESICK--SQ--PHASE2.png" alt="LoveSick Poster" class="lovesick-poster" />
    <a class="get-tickets" href="https://posh.vip/f/9ecc" target="_blank">Get Tickets!</a>

    <div class="description">
      <p>VIVID FUN K-POP CENTRIC PARTY WITH TONS OF FUN BLAH BLAH BLAH BLAH</p>
    </div>
    <div class="icons">
      <a href="https://www.instagram.com/lovesickparty/" target="_blank"
        ><img class="icon" src="/instagram-icon.png" alt="instagram icon"
      /></a>
      <a href="mailto:info@lovesickparty.com"
        ><img class="icon" src="/gmail-icon.png" alt="gmail icon"
      /></a>
    </div>

    <div class="next-event-container">
      <p>Coming up</p>
      <strong>The Hard Rock Cafe</strong>
      <p>March 15th</p>
      <p>3771 Las Vegas BLVD @ Hard Rock Cafe</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  text-align: center;
  align-items: center;
  height: 100vh;
}

.letter {
  display: inline-block;
  animation: wave 1.3s infinite ease-in 2s;
  font-size: 6rem;
  font-weight: bold;
}

#header-title {
  animation: moveUpwardsAfterInitialLoad 2s ease-in forwards 1.5s;
  position: absolute;
  z-index: 1;
}

.hero-subtitle {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-in forwards 2s;
}

.description {
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 2.5rem;
  width: 33rem;
  text-align: start;
  opacity: 0;
  animation: fadeInFromLeft 2s ease-out forwards 2s;
}

.lovesick-poster {
  width: 30rem;
  height: 30rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
}

.get-tickets {
  text-decoration: none;
  border: 0px solid rgb(255, 248, 107);
  background: #fff86b;
  border-radius: 7px;
  font-weight: bold;
  padding: 10px;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
}

.icons {
  position: absolute;
  top: 2rem;
  right: 2rem;
  opacity: 0;
  animation: fadeInFromRight 2s ease-out forwards 2s;
}

.icon {
  width: 20px;
  height: 20px;
  margin: 0 0.5rem;
}

.next-event-container {
  position: absolute;
  right: 4rem;
  text-align: start;
  padding-left: 5px;
  border-left: 5px solid #615be6;
  font-size: 1rem;
  opacity: 0;
  animation: fadeInFromRight 2s ease-out forwards 2s;
}

@keyframes wave {
  50% {
    transform: translateY(-20px);
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

@keyframes moveUpwardsAfterInitialLoad {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-340px);
  }
}

@media (max-width: 640px) {
  .icons {
    display: flex;
    flex-direction: column;
  }
  .hero-subtitle {
    margin-bottom: 1rem;
  }
  .letter {
    font-size: 2rem;
  }

  .lovesick-poster {
    width: 20rem;
    height: 20rem;
  }

  .description {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.2rem;
    width: 16rem;
    text-align: start;
  }

  .next-event-container {
    display: none;
  }

  @keyframes wave {
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes moveUpwardsAfterInitialLoad {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-235px);
    }
  }
}
</style>
