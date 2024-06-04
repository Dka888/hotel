<script setup>
import { useCartStore } from '@/stores/CartStore'

const { carts } = useCartStore()

const totalPrice = carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
const taxes = (totalPrice * 20) / 100

const addQuantity = (cart) => {
  carts.map((_cart) => {
    if (_cart.id === cart.id) {
      _cart.quantity++
    }
    return cart
  })
}

const removeQuantity = (cart) => {
  carts.map((_cart, i, arr) => {
    if (cart.id === _cart.id) {
      if (_cart.quantity === 1) {
        arr.splice(i, 1)
      } else {
        _cart.quantity--
      }
    }
    return _cart
  })
}
</script>

<template>
  <div v-if="!carts.length" class="empty_cart">Cart is empty</div>

  <div class="book">
    <div class="book__wrapper" v-if="carts.length > 0">
      <div class="panel__book" v-for="cart of carts" :key="cart.id">
        <div class="panel__card">
          <div class="panel__card-image">
            <img :src="cart.image" :alt="cart.title" width="100%" />
          </div>

          <div
            class="panel__middle"
            style="display: flex; flex-direction: column; justify-content: space-around"
          >
            <div>
              <h5 class="panel__title">{{ cart.title }}</h5>
            </div>
            <div class="panel__card-calendar">
              <label name="date">Wybierz termin:</label>
              <input id="name" type="date" />
            </div>
          </div>

          <div class="panel__right">
            <div class="panel__quantity">
              <span class="button_quantity" v-on:click="() => removeQuantity(cart)">-</span>
              {{ cart.quantity }}
              <span class="button_quantity" v-on:click="() => addQuantity(cart)">+</span>
            </div>
            <h3 class="panel__title">{{ cart.price }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="book__summary" v-if="carts.length > 0">
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
  padding: 3px;
  margin: 5px auto;
  border-radius: 14px;
  display: flex;

  @media (min-width: 650px) {
    padding: 1rem;
  }
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
  max-width: 100px;
  margin: auto 0;
  @media (min-width: 600px) {
    max-width: 250px;
  }
}
.panel__card-calendar {
  display: flex;
  flex-direction: column;
  margin: auto 0;
  font-size: 10px;

  @media (min-width: 650px) {
    width: 150px;
    font-size: 14px;
    gap: 15px;
  }

  input {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    width: 60px;

    @media (min-width: 650px) {
      padding: 4px 7px;
      width: 110px;
    }
  }
}

.book__summary {
  width: 300px;
  padding: 10px 20px;
  background-image: linear-gradient(to top, rgb(255, 255, 255, 0.3), rgb(0, 128, 0, 0.3));
  height: 350px;
  border-radius: 14px;
  color: var(--main-color);
  flex-grow: 1;
  margin: auto;

  @media (min-width: 650px) {
    min-width: 300px;
    max-width: 500px;
    margin: 0 auto;
    margin-right: 20px;
  }
}

.panel__quantity {
  border: 1px solid black;
  padding: 2px 5px;
  font-size: 0.75rem;

  @media (min-width: 650px) {
    font-size: 1.25rem;
    width: 70px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
}

.panel__right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.button_quantity {
  cursor: pointer;
}

.panel__title {
  font-size: 14px;
  margin: 0;

  @media (min-width: 650px) {
    font-size: 24px;
    margin: 0.5rem auto;
  }
}

.empty_cart {
  position: absolute;
  top: 35%;
  left: 40%;
  color: white;

  @media (min-width: 650px) {
    font-size: 36px;
  }
}
</style>
