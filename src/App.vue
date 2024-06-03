<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import MenuHeader from './components/MenuHeader.vue'
import { ref, provide } from 'vue'
import { useCartStore } from '../src/stores/CartStore'

let view = ref('home')
provide('view', view)

const { carts } = useCartStore()
</script>

<template>
  <header>
    <RouterLink to="/home" class="logo">
      <img src="./assets/spa_logo.jpg" alt="logo" width="95px" height="95px" />
    </RouterLink>
    <div class="wrapper">
      <MenuHeader />
    </div>
    <RouterLink to="/booking" style="position: relative">
      <div class="cartIcon"></div>
      <div class="cartBadge" v-if="!!carts.length">{{ carts.length }}</div>
    </RouterLink>
    <div class="autorization">
      <RouterLink to="/log-in">
        <button class="autorization__button login">Log in</button>
      </RouterLink>
      <RouterLink to="/sign-up">
        <button class="autorization__button signup">Sign up</button>
      </RouterLink>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 6rem;
  border-radius: 14px;
  align-items: center;
  background-color: var(--main-color);

  @media (min-width: 600px) {
    padding: 0 3rem;
  }
}
main {
  background-image: url('./assets/spa_background.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  padding: auto;
}
.wrapper {
  width: 50%;
}

.logo {
  width: 15%;
  height: 100%;
}

.autorization {
  width: 100px;

  @media (min-width: 600px) {
    width: 200px;
  }
}

.autorization__button {
  margin: 5px;
  padding: 5px 5px;
  border-radius: 8px;
  color: var(--text-color);
  border: var(--text-color) 1px solid;
  cursor: pointer;
  outline: none;
  font-weight: 600;

  @media (min-width: 600px) {
    padding: 10px 10px;
    margin: 0 5px;
  }
}
.login {
  background-color: rgb(65, 130, 65);
  color: white;

  &:hover {
    background-color: rgb(70, 150, 70);
  }
}

.signup {
  background-color: var(--text-color);
  color: var(--main-color);

  &:hover {
    background-color: var(--main-color);
    color: var(--text-color);
  }
}

.cartIcon {
  background-image: url('./assets/shopping_cart.svg');
  width: 24px;
  height: 24px;
}

.cartBadge {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: rgb(65, 130, 65);
  color: white;
  font-size: 8px;
  padding: 3px;
  text-align: center;
}
</style>
