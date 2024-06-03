<script setup>
import { useStore } from '@/stores/useStore'
import CardComponent from '../components/CardComponent.vue'
import { ref } from 'vue'

const { cards } = useStore()
</script>

<template>
  <div class="spa">
    <div class="spa__wrapper">
      <div class="card" v-for="card in cards" :key="card.id">
        <CardComponent :card="card"></CardComponent>
      </div>
    </div>
  </div>
</template>

<style>
.spa {
  background-image: url('../assets/spa_background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 100%;
  padding: auto;
}

.card {
  width: 350px;
  border: 1px solid white;
  padding: 15px 10px 5px;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 10px 10px 10px;
  height: 400px;
}

.spa__wrapper {
  max-width: 100%;
  padding: 3rem 5rem;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 15px;
}
</style>
