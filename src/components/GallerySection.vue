<template>
  <section class="container">
    <div class="gallery">
      <img src="/gallery-image-one.jpeg" alt="lovesick party crowd" class="image" />
      <img src="/gallery-image-two.jpeg" alt="lovesick party crowd" class="image" />
      <img src="/gallery-image-three.jpeg" alt="lovesick party crowd" class="image" />
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
}

.gallery {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 100%;
  gap: 2px;
  padding: 5px;
}

.image {
  flex-grow: 1;
  object-fit: cover;
  width: 100%;
  height: 33.333%;
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
  }

  .gallery {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }

  .image {
    width: 33.333%;
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
