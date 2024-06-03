<script setup>
import CardComponent from '../components/CardComponent.vue'
import { useRoomStore } from '@/stores/RoomStore'

const { rooms } = useRoomStore()
</script>

<template>
  <div class="rooms">
    <div class="rooms__wrapper">
      <div class="card" v-for="room in rooms" :key="room.id">
        <CardComponent :card="room"></CardComponent>
      </div>
    </div>
  </div>
</template>

<style>
.rooms {
  background-image: url('../assets/background-hotel.jpg');
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

.rooms__wrapper {
  max-width: 100%;
  padding: 3rem 5rem;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 15px;
}
</style>
