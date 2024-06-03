<script setup>
import { useCartStore } from '@/stores/CartStore'

const { carts } = useCartStore()
</script>

<template>
  <div class="book">
    <div class="panel__book">
      <div class="panel__card">
        {{ carts }}
      </div>
      <div class="panel__calendar"></div>
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
}
</style>
