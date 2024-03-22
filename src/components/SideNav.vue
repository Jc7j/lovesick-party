<script lang="ts" setup>
import useMobile from '../utils/useMobile';
import { ref } from 'vue';

const { isMobile } = useMobile();
const isToggled = ref(false);

const toggleClass = () => {
  isToggled.value = !isToggled.value;
};
</script>

<template>
  <nav class="side-menu" :class="{ 'is-toggled': isToggled }">
    <button class="toggle-button" @click="toggleClass" v-if="isMobile">
      <div class="icon" :class="{ toggled: isToggled }"></div>
    </button>
    <ul>
      <li>Zoku</li>
      <li>Clans</li>
      <li>Vision</li>
      <li>Custom</li>
      <li>Roadmap</li>
      <li>Team</li>
      <li>FAQ</li>
    </ul>
  </nav>
</template>

<style scoped>
.side-menu {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  z-index: 1000; 
}

.side-menu.is-toggled {
  transform: translateX(0); /* Show menu */
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin-top: 20px; /* Adjust based on your layout */
}

.side-menu li {
  margin: 10px 0; /* Spacing between items */
  text-decoration: none;
  font-weight: bold;
}

.toggle-button {
  position: absolute;
  top: 10px;
  right: -50px; /* Adjust button position */
  z-index: 1001; /* Above the side menu */
  cursor: pointer;
  background-color: #333; /* Match the menu background */
  color: white;
  border: none;
  height: 40px;
  width: 40px;
}

.icon,
.icon:before,
.icon:after {
  background-color: rgb(33, 150, 243);
  transition: all 0.25s;
}

.icon {
  display: block;
  position: relative;
  height: 5px;
  width: 25px;
  border-radius: 100px;
}

.icon:before,
.icon:after {
  content: "";
  position: absolute;
  height: 5px;
  width: 25px;
  left: 0;
  border-radius: 100px;
}

.icon:before { top: -10px; }
.icon:after { bottom: -10px; }

.icon.toggled:before { transform: rotate(45deg); top: 0; }
.icon.toggled:after { transform: rotate(-45deg); bottom: 0; }

@media (min-width: 641px) {
  .side-menu {
    transform: none; /* Always visible in non-mobile */
    padding-top: 100px; /* Adjust as necessary */
  }

  .toggle-button {
    display: none; /* Hide toggle in non-mobile view */
  }
}
</style>
