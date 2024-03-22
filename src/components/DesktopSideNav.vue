<script setup>
import useMobile from '../utils/useMobile'

const { isMobile } = useMobile()
</script>

<template>
  <nav v-if="!isMobile" class="container nav-menu">
    <ul class="lists">
      <li class="list"><a class="link">GALLERY</a></li>
      <li class="list"><a class="link">FAQ</a></li>
      <li class="list"><a class="link">CONTACT</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 0.5rem;
}

.lists {
  position: fixed;
  top: 0;
  bottom: 0;
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  z-index: 1;
  opacity: 0;
  animation: fadeInFromLeft 2s ease-out forwards 2s;
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

@media (min-width: 475px) {
  .container {
    max-width: 475px;
  }
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
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
