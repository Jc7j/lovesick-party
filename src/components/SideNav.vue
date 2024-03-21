<script lang="ts" setup></script>

<template>
  <nav class="side-menu">
    <ul>
      <li>Gallery</li>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<style scoped>
.side-menu {
  width: 250px;
  position: fixed;
  top: 0;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeInFromLeft 2s ease-out forwards 1.2s;
}

.side-menu ul {
  list-style: none;
  padding: 0;
}

.side-menu li {
  color: white;
  text-decoration: none;
  padding: 10px 0;
  display: block;
  font-weight: bold;
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

@media (max-width: 640px) {
  .side-menu {
    width: 100px;
    bottom: 80%;
    right: 0;
  }
}
</style>
