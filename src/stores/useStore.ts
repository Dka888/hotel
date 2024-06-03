import { defineStore } from 'pinia'

export const useStore = defineStore('cart', {
  state: () => ({
    count: 0,
    cart: [] as Cart[]
  }),

  actions: {
    increment() {
      this.count++
    },

    addToCart(newCart: Cart) {
      this.cart = [...this.cart, newCart]
    }
  },
  getters: {}
})

interface Cart {
  id: number
  title: string
  price: number
  image: string
}
