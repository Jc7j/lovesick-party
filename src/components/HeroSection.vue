<script setup>
import useMobile from '../utils/useMobile'
import GetTicketButton from './GetTicketButton.vue'
import BorderLine from './BorderLine.vue'

const { isMobile } = useMobile()
</script>

<template>
  <section class="hero container">
    <h1 class="header">THE LOVESICK PARTY</h1>
    <div class="date-time">
      <span>
        <p class="info-title">DATE</p>
        <p class="info">03.15.24</p>
      </span>
      <span>
        <p class="info-title">TIME</p>
        <p class="info">opens 9pm</p>
      </span>
    </div>

    <BorderLine />

    <p class="description">
      IMMERSE YOURSELF IN THE SENSATIONAL WORLD OF KOREAN POP AT OUR 18+ K-POP PARTY
    </p>

    <div v-if="isMobile" class="mobile-main-display">
      <a class="" href="https://posh.vip/f/9ecc" target="_blank">
        <img src="/lovesick-poster.png" alt="lovesick promotional poster" />
      </a>
      <GetTicketButton />
    </div>

    <div v-if="!isMobile" class="desktop-main-display">
      <div>
        <p class="display-sub">@ 3771 LAS VEGAS BLVD</p>
        <p class="display-title">
          HARD ROCK <br />
          LIVE
        </p>
        <GetTicketButton />
      </div>

      <a href="https://posh.vip/f/9ecc" target="_blank">
        <img src="/lovesick-poster.png" alt="lovesick promotional poster" />
      </a>

      <div>
        <p class="display-sub">HANG OUT</p>
        <p class="display-title">
          RESERVE <br />
          NOW
        </p>
        <GetTicketButton />
      </div>
    </div>

    <BorderLine />

    <div class="amenities">
      <p>DJ'S</p>
      <p>DRINKS</p>
      <p>FOODS</p>
      <p>MERCH</p>
    </div>
  </section>
</template>

<style scoped>
img {
  margin-top: var(--size-base);
  width: 100%;
  border-radius: 20px;
  margin-bottom: var(--size-4xl);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
}

a {
  text-decoration: none;
  color: var(--pink-vivid-300);
}

.hero {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: var(--pink-vivid-300);
  font-size: var(--size-2xl);
}

.header {
  color: var(--pink-vivid-400);
  font-size: var(--size-6xl);
  margin-top: var(--size-base);
}

.date-time {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info-title,
.info {
  margin: -(var(--size-xxs)) 0;
}

.info {
  font-size: var(--size-4xl);
  font-weight: 500;
  font-style: italic;
}

.description {
  font-size: var(--size-2xl);
}

.mobile-main-display {
  margin-bottom: var(--size-2xl);
}

.desktop-main-display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.desktop-main-display > div,
.desktop-main-display > a {
  flex: 1;
  text-align: center;
}

.display-title {
  font-weight: bold;
  font-size: var(--size-6xl);
  margin-bottom: var(--size-xxs);
}

.display-sub {
  margin-bottom: -1rem;
  font-size: var(--size-base);
}

.amenities {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .header {
    font-size: var(--size-7xl);
  }
}

@media (min-width: 1024px) {
  .header {
    font-size: var(--size-8xl);
  }

  .description {
    font-size: var(--size-4xl);
  }
  .info {
    font-size: var(--size-5xl);
  }

  .amenities {
    font-size: var(--size-4xl);
  }
}
</style>
