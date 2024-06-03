import { defineStore } from 'pinia'

export const useRoomStore = defineStore('roomStore', {
  state: () => ({
    rooms: [
      {
        id: 1,
        title: 'Balcony Room',
        price: 250,
        image: 'src/assets/rooms/balcony_room.jpg'
      },
      {
        id: 2,
        title: 'Double Room',
        price: 350,
        image: 'src/assets/rooms/double_room.jpg'
      },
      {
        id: 3,
        title: 'Premium Room',
        price: 450,
        image: 'src/assets/rooms/premium_room.jpeg'
      },
      {
        id: 4,
        title: 'Single Room',
        price: 250,
        image: 'src/assets/rooms/single_room.jpeg'
      },
      {
        id: 5,
        title: 'Terrace Room',
        price: 350,
        image: 'src/assets/rooms/terrace_room.jpeg'
      },
      {
        id: 6,
        title: 'View Room',
        price: 550,
        image: 'src/assets/rooms/view_room.jpeg'
      }
    ]
  })
})
