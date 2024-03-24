<template>
  <section class="container">
    <div class="worked-with">Worked With</div>
    <div class="about">
      <p>About</p>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  height: 60vh;
  position: relative;
  opacity: 0;
  animation: fadeInFromBottom 2s ease-out forwards 2s;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.worked-with {
  border: 2px solid black;
  text-align: center;
  padding: 5px;
  width: 100%;
  height: 50%;
}

.about {
  text-align: center;
  border: 2px solid black;
  padding: 5px;
  width: 100%;
  height: 50%;
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
    height: 30vh;
    flex-direction: row;
  }

  .worked-with {
    width: 50%;
    height: 100%;
  }

  .about {
    width: 50%;
    height: 100%;
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
