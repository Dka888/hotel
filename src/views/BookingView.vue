<script setup>
import { useCartStore } from '@/stores/CartStore'

const { carts } = useCartStore()

const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0)
const taxes = (totalPrice * 20) / 100
</script>

<template>
  <div class="book">
    <div class="book__wrapper">
      <div class="panel__book" v-for="cart of carts" :key="cart.id">
        <div class="panel__card">
          <div class="panel__card-image">
            <img :src="cart.image" :alt="cart.title" width="100%" />
          </div>
          <div style="display: flex; justify-content: space-evenly; flex-direction: column">
            <h5 style="font-size: x-large">{{ cart.title }}</h5>
            <h3 style="font-size: x-large; font-weight: 800; color: brown">{{ cart.price }}</h3>
          </div>
          <div class="panel__card-calendar">
            Wybierz termin:
            <div class="panel__calendar"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="book__summary">
      <h2>Summary:</h2>
      <div style="display: flex; justify-content: space-between">
        <h5>Price:</h5>
        <h5>
          {{ totalPrice }}
        </h5>
      </div>
      <div style="display: flex; justify-content: space-between">
        <h5>Taxes:</h5>
        <h5>
          {{ taxes }}
        </h5>
      </div>
      <div style="display: flex; justify-content: space-between">
        <h5>Invirenment fee:</h5>
        <h5>50</h5>
      </div>
      <hr />
      <div
        style="
          display: flex;
          justify-content: space-between;
          color: black;
          font-weight: 900;
          font-size: x-large;
        "
      >
        <h5>Total price:</h5>
        <h5>{{ totalPrice + taxes + 50 }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.book {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/background-hotel.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 1rem;

  @media (min-width: 600px) {
    display: flex;
  }
}

.book__wrapper {
  flex-grow: 2;
}

.panel__book {
  background-image: linear-gradient(to left, rgb(255, 255, 255, 0.3), rgb(144, 238, 144, 0.3));
  width: 75%;
  padding: 1rem;
  margin: 5px auto;
  border-radius: 14px;
  display: flex;
}

.panel__card {
  display: flex;
  width: 300px;
  margin: auto;
  justify-content: space-between;
  border: var(--text-color) solid 1px;
  border-radius: 14px;
  padding: 0.25rem 1rem;
  gap: 5px;

  @media (min-width: 600px) {
    width: 750px;
  }
}

.panel__card-image {
  max-width: 150px;
  margin: auto 0;
  @media (min-width: 600px) {
    max-width: 250px;
  }

  .panel__card-calendar {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid black;
  }
}

.book__summary {
  min-width: 300px;
  padding: 10px 20px;
  max-width: 500px;
  background-image: linear-gradient(to top, rgb(255, 255, 255, 0.3), rgb(0, 128, 0, 0.3));
  height: 350px;
  border-radius: 14px;
  color: var(--main-color);
  margin: 0 auto;
  flex-grow: 1;
}
</style>
