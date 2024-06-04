<script setup>
import { useCartStore } from '@/stores/CartStore'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})

const { carts } = useCartStore()
const addToCart = (card) => {
  if (carts.find((cart) => cart.title === card.title)) {
    carts.map((cart) => {
      if (cart.title === card.title) {
        cart.quantity++
        return cart
      }
      return cart
    })
  } else {
    const newCart = {
      ...card,
      quantity: 1
    }
    carts.push(newCart)
  }
}
</script>

<template>
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
    <button class="card__button" v-on:click="addToCart(card)">Zarezerwuj</button>
  </div>
</template>

<style>
.card__picture {
  width: 100%;

  img {
    width: 100%;
    height: 250px;
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
    background-color: rgb(75, 170, 75);
    border-color: rgb(75, 170, 75);
  }
}
</style>
