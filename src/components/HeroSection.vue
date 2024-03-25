<script setup>
import useMobile from '../utils/useMobile'

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

    <div class="border"></div>

    <p class="description">
      IMMERSE YOURSELF IN THE SENSATIONAL WORLD OF KOREAN POP AT OUR 18+ K-POP PARTY
    </p>

    <div v-if="isMobile" class="mobile-main-display">
      <a class="" href="https://posh.vip/f/9ecc" target="_blank">
        <img src="/lovesick-poster.png" alt="lovesick promotional poster" />
      </a>

      <a href="https://posh.vip/f/9ecc" target="_blank" class="get-ticket">TICKETS</a>
    </div>

    <div v-if="!isMobile" class="desktop-main-display">
      <div>
        <p class="display-sub">@ 3771 LAS VEGAS BLVD</p>
        <p class="display-title">HARD ROCK <br/> LIVE</p>
        <a href="https://posh.vip/f/9ecc" target="_blank" class="get-ticket">TICKETS</a>
      </div>

      <a href="https://posh.vip/f/9ecc" target="_blank">
        <img src="/lovesick-poster.png" alt="lovesick promotional poster" />
      </a>

      <div>
        <p class="display-sub">HANG OUT</p>
        <p class="display-title">RESERVE <br/> NOW</p>
        <a href="https://posh.vip/f/9ecc" target="_blank" class="get-ticket">TICKETS</a>
      </div>
    </div>

    <div class="border"></div>
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
  margin-top: 1rem;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  color: #f364a2;
}

.hero {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #f364a2;
  font-size: 1.5rem;
}

.header {
  color: #e8368f;
  font-size: 3.75rem;
  margin-top: 1rem;
}

.date-time {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
}

.info-title,
.info {
  margin: -0.5rem 0;
}

.info {
  font-size: 2.25rem;
  font-weight: 500;
  font-style: italic;
}

.description {
  font-size: 2rem;
}

.border {
  border: 1.5px solid #f364a2;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
}

.mobile-main-display {
  margin-bottom: 1.5rem;
}

.desktop-main-display {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.desktop-main-display p {
  margin-bottom: .5rem;
}

.display-title {
  font-weight: bold;
  font-size: 2.25rem;
  margin-top: -1rem;
}

.display-sub {
  font-size: 1rem;
}

.get-ticket {
  border: 2px solid #f364a2;
  padding: 1rem 5rem;
  border-radius: 4rem;
}

.get-ticket:hover {
  color: white;
  background-color: #f364a2;
}

.amenities {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .header {
    font-size: 4.5rem;
  }

  .get-ticket {
    padding: .5rem 2.5rem;
  }

  .amenities {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .header {
    font-size: 6rem;
  }

  .info {
    font-size: 3rem;
  }
}
</style>
