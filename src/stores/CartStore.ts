import { defineStore } from 'pinia'
import type { Card } from './useStore'

interface Cart extends Card {
  quantity: number
}

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    carts: [] as Cart[]
  })
})
