<template>
  <section class="container">
    <div class="gallery">
      <img src="/gallery-image-one.jpeg" alt="lovesick party crowd" class="image"/>
      <img src="/gallery-image-two.jpeg" alt="lovesick party crowd" class="image"/>
      <img src="/gallery-image-three.jpeg" alt="lovesick party crowd" class="image"/>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  height: 30vh;
  position: relative;
}

.gallery {
  height: 30vh;
  border: 2px solid black;
  height: 100%;
  display:flex;
  justify-content: space-between;
  gap: 5px;
  padding: 5px;
}

.image {
  flex-grow: 1;
  object-fit: cover;
  width: 33.333%;
  height: 100%;
}

</style>
