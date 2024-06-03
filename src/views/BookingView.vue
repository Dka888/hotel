<script setup>
import CardComponent from '@/components/CardComponent.vue'
</script>

<template>
  <div class="book">
    <div class="panel__book">
      <div class="panel__card">
        <CardComponent></CardComponent>
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
  background-color: var(--text-color);
}
</style>
