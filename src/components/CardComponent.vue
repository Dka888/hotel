<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
})

const addToCart = (card) => {}
</script>

<template>
  <div class="card" v-for="card in cards" :key="card.id">
    <div class="card__picture">
      <img :src="card.image" :alt="card.title" />
    </div>
    <div class="card__info">
      <h5 class="card__title">{{ card.title }}</h5>
      <div class="card__addition">
        <div style="height: 30px; display: flex">
          <div><img src="../assets/star-active.svg" alt="star" /></div>
          <div><img src="../assets/star-active.svg" alt="star" /></div>
          <div><img src="../assets/star-active.svg" alt="star" /></div>
          <div><img src="../assets/star-active.svg" alt="star" /></div>
          <div><img src="../assets/star-active.svg" alt="star" /></div>
        </div>
        <div class="card__price">{{ card.price }} PLN</div>
      </div>
      <RouterLink to="/booking">
        <button class="card__button" v-onclick="addToCart(card)">Zarezerwuj</button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
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

.card__picture {
  width: 100%;

  img {
    width: 100%;
  }
}

.card__info {
  height: 150px;
  text-align: center;

  h5 {
    font-size: 25px;
    font-weight: 600;
    margin: 5px 0;
  }
}

.card__addition {
  display: flex;
  justify-content: space-between;
  margin: 15px 2rem;
}
.card__price {
  font-weight: 600;
}

.card__button {
  border: solid 1px var(--text-color);
  border-radius: 4px;
  color: var(--main-color);
  padding: 10px 15px;
  cursor: pointer;
  background-color: rgb(65, 130, 65);
  color: white;
  font-weight: 600;

  &:hover {
    background-color: rgb(70, 150, 70);
  }
}
</style>
