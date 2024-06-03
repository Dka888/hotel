<script setup>
import CardComponent from '../components/CardComponent.vue'
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Aroma Bath',
    id: 1,
    image: 'src/assets/treatments/aroma_bath.jpeg',
    price: 250
  },
  {
    title: 'Beer Bath',
    id: 2,
    image: 'src/assets/treatments/beer_bath.jpeg',
    price: 300
  },
  {
    title: 'Dry Sauna',
    id: 3,
    image: 'src/assets/treatments/dry_sauna.jpeg',
    price: 500
  },
  {
    title: 'Jacuzzi',
    id: 4,
    image: 'src/assets/treatments/jacuzzi.jpeg',
    price: 300
  },
  {
    title: 'Panorama Sauna',
    id: 5,
    image: 'src/assets/treatments/panorama_sauna.jpeg',
    price: 400
  },
  {
    title: 'Relax Massage',
    id: 6,
    image: 'src/assets/treatments/relax-massage.jpeg',
    price: 300
  },
  {
    title: 'Sauna Bucket',
    id: 7,
    image: 'src/assets/treatments/sauna_bucket.jpeg',
    price: 300
  },
  {
    title: 'Thai Massage',
    id: 8,
    image: 'src/assets/treatments/thai_massage.jpeg',
    price: 500
  },
  {
    title: 'Wet Sauna',
    id: 9,
    image: 'src/assets/treatments/wet_sauna.jpeg',
    price: 400
  }
])
</script>

<template>
  <div class="spa">
    <div class="spa__wrapper">
      <CardComponent :cards="cards"></CardComponent>
    </div>
  </div>
</template>

<style>
.spa {
  background-image: url('../assets/spa_background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  padding: auto;
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
