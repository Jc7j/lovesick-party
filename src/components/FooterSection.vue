<template>
  <section class="container">
    <div class="inner">
      <div class="left-side">
        <p>Contact Us</p>
        <a href="https://www.instagram.com/lovesickparty/" target="_blank"
          ><img class="icon" src="/instagram-icon.png" alt="instagram icon"
        /></a>
        <a href="mailto:info@lovesickparty.com"
          ><img class="icon" src="/gmail-icon.png" alt="gmail icon"
        /></a>
      </div>

      <p>© 2024 by GANJI Presents</p>
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
  height: 10vh;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
}

.inner {
  display: flex;
  align-items: center;
  border: 2px solid black;
  padding: 0 10px;
}

.left-side {
  display: flex;
  align-items: center;
  flex: 1;
}

.icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0.5rem 0.5rem;
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
