<script setup>
import { ref } from 'vue';
import useMobile from '../utils/useMobile';

const { isMobile } = useMobile();
const isTextVisible = ref(false);

const imageSrc = ref('/menu-icon.png');

const toggleText = () => {
  isTextVisible.value = !isTextVisible.value;
  imageSrc.value = isTextVisible.value ? '/x-icon.png' : '/menu-icon.png';
};
</script>

<template>
  <div v-if="isMobile" class="container">
    <button @click="toggleText">
      <img :src="imageSrc" alt="menu-icon"/>
    </button>
    <p v-if="isTextVisible" class="menu-text">Menu Text Here</p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  position: sticky;
  top: 0;
  text-align: end;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-text {
  margin-top: 10px;
  text-align: right;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.5s, transform 0.5s, visibility 0s 0.5s; /* Delay visibility transition */
}

.container .menu-text {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: opacity 0.5s, transform 0.5s; /* No delay on becoming visible */
}
</style>
