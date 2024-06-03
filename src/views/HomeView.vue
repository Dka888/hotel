<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <div class="mainView">
      <h1 class="mainView__tittle">Witamy na stronie SPA Club</h1>
      <div>
        <h2 class="mainView__text">
          Doznaj pełnego odprężenia podczas relaksacyjnych pakietów Spa, łączących saunę, kąpiel
          piwna, degustacje i sielski relaks na słomie.
        </h2>
        <h2 class="mainView__text">
          Fenomenalna atrakcja w centrum miasta. Idealna dla par i dla przyjaciół. Sauna, kąpiel,
          degustacja i relaks na słomie to świetna propozycja na deszczowe dni i leniwe wieczory po
          aktywnym dniu.
        </h2>
      </div>

      <div class="home__button" style="width: 250px">
        <RouterLink to="/rooms">
          <button class="button">Check it</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  max-width: 1400px;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 1px;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

.mainView {
  color: white;
  background-image: linear-gradient(
    to right bottom,
    rgba(156, 224, 201, 0.3),
    rgba(69, 134, 83, 0.3)
  );
  padding: 1rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;

  @media (max-width: 900px) {
    margin: auto;
  }

  @media (min-width: 900px) {
    grid-area: 1 / 6 / 5 / 12;
    text-align: left;
    max-height: 700px;
  }
}

.mainView__tittle {
  font-size: 2rem;
  margin: 0;
  margin-top: 0.25rem;
  z-index: 3;

  @media (min-width: 900px) {
    font-size: 3rem;
    margin-top: 0.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-top: 10px;
  }
}

.mainView__text {
  font-size: 1rem;
  font-weight: 400;
  text-wrap: wrap;
  margin: 10px 5px;

  @media (min-width: 900px) {
    font-size: 1.5rem;
    font-weight: 400;
    text-wrap: wrap;
    margin: 20px 5px;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
    font-weight: 400;
    text-wrap: wrap;
    margin: 20px 10px;
  }
}

.button {
  padding: 0.5rem 1.75rem;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  color: var(--text-color);

  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgb(19, 53, 7);
  }
}

.home__button {
  margin: 0 auto;
}
</style>
