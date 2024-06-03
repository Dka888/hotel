<script>
import BedIcon from 'vue-material-design-icons/Bed.vue'
import BedDoubleIcon from 'vue-material-design-icons/BedDouble.vue'
import BedKingIcon from 'vue-material-design-icons/BedKing.vue'
import BedSingleIcon from 'vue-material-design-icons/BedSingle.vue'
import BalconyIcon from 'vue-material-design-icons/Balcony.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    BedIcon,
    BedDoubleIcon,
    BedKingIcon,
    BedSingleIcon,
    BalconyIcon
  }
}
</script>

<template>
  <div class="rooms__wrapper">
    <div class="rooms-hotel">
      <div class="room">
        <div class="room__picture">
          <img src="../assets/rooms/balcony_room.jpg" alt="balcony_room" />
        </div>
        <div class="room__card">
          <h5 style="font-weight: 700">Balcony Room</h5>
          <div class="room__addition">
            <div><BalconyIcon></BalconyIcon></div>
            <div class="room__price">250 PLN</div>
          </div>
          <RouterLink to="/booking"><button class="room__button">Zarezerwuj</button></RouterLink>
        </div>
      </div>

      <div class="room">
        <div class="room__picture">
          <img src="../assets/rooms/double_room.jpg" alt="double__room" />
        </div>
        <div class="room__card">
          <h5 style="font-weight: 700">Double Room</h5>
          <div class="room__addition">
            <div><BedDoubleIcon></BedDoubleIcon></div>
            <div class="room__price">350 PLN</div>
          </div>
          <RouterLink to="/booking"><button class="room__button">Zarezerwuj</button></RouterLink>
        </div>
      </div>
      <div class="room">
        <div class="room__picture">
          <img src="../assets/rooms/premium_room.jpeg" alt="premium_room" />
        </div>
        <div class="room__card">
          <h5 style="font-weight: 700">Premium Room</h5>
          <div class="room__addition">
            <div><BedKingIcon></BedKingIcon></div>
            <div class="room__price">550 PLN</div>
          </div>
          <RouterLink to="/booking"><button class="room__button">Zarezerwuj</button></RouterLink>
        </div>
      </div>
      <div class="room">
        <div class="room__picture">
          <img src="../assets/rooms/single_room.jpeg" alt="single_room" />
        </div>
        <div class="room__card">
          <h5 style="font-weight: 700">Single Room</h5>
          <div class="room__addition">
            <div><BedSingleIcon></BedSingleIcon></div>
            <div class="room__price">200 PLN</div>
          </div>
          <RouterLink to="/booking"><button class="room__button">Zarezerwuj</button></RouterLink>
        </div>
      </div>
      <div class="room">
        <div class="room__picture">
          <img src="../assets/rooms/terrace_room.jpeg" alt="terrace_room" />
        </div>
        <div class="room__card">
          <h5 style="font-weight: 700">Terrace Room</h5>
          <div class="room__addition">
            <div><BedIcon></BedIcon></div>
            <div class="room__price">340 PLN</div>
          </div>
          <RouterLink to="/booking">
            <button class="room__button">Zarezerwuj</button>
          </RouterLink>
        </div>
      </div>
      <div class="room">
        <div class="room__picture">
          <img src="../assets/rooms/view_room.jpeg" alt="view_room" />
        </div>
        <div class="room__card">
          <h5 style="font-weight: 700">View Room</h5>
          <div class="room__addition">
            <div><BedIcon></BedIcon></div>
            <div class="room__price">350 PLN</div>
          </div>
          <RouterLink to="/booking">
            <button class="room__button">Zarezerwuj</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.rooms__wrapper {
  background-image: url('../assets/background-hotel.jpg');
  background-size: contain;
  max-width: 100%;
  background-repeat: no-repeat;
}

.rooms-hotel {
  max-width: 100%;
  padding: 3rem 5rem;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 15px;
}

.room {
  width: 350px;
  border: 1px solid white;
  padding: 15px 10px 5px;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 10px 10px 10px;
}
.room__picture {
  width: 100%;

  img {
    width: 100%;
  }
}

.room__card {
  height: 150px;
  text-align: center;

  h5 {
    font-size: 25px;
    font-weight: 600;
    margin: 5px 0;
  }
}

.room__addition {
  display: flex;
  justify-content: space-between;
  margin: 15px 2rem;
}
.room__price {
  font-weight: 600;
}

.room__button {
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
