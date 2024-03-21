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
}

@media (max-width: 640px) {
  .side-menu {
    width: 100px;
    bottom: 80%;
  }
}
</style>
