<script setup>
import { RouterLink } from 'vue-router'
import './MenuHeader.css'
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <nav class="menu">
    <RouterLink to="/" class="menu__item">Home</RouterLink>
    <RouterLink to="/about" class="menu__item">About</RouterLink>
    <RouterLink to="/rooms" class="menu__item">Rooms</RouterLink>
    <RouterLink to="/spa" class="menu__item">Services</RouterLink>
  </nav>
  <div class="menuPhone" v-on:click="toggleMenu">
    <img src="../assets/menu-mobile.svg" />
  </div>
  <nav class="menuPhone__items" v-if="isMenuOpen">
    <RouterLink to="/" class="menuPhone__item" v-on:click="toggleMenu">Home</RouterLink>
    <RouterLink to="/about" class="menuPhone__item" v-on:click="toggleMenu">About</RouterLink>
    <RouterLink to="/rooms" class="menuPhone__item" v-on:click="toggleMenu">Rooms</RouterLink>
    <RouterLink to="/spa" class="menuPhone__item" v-on:click="toggleMenu">Services</RouterLink>
    <div class="closeMenu" v-on:click="toggleMenu">&#x2715;</div>
  </nav>
</template>
