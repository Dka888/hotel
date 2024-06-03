import { defineStore } from 'pinia'
import type { Card } from './useStore'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    carts: [] as Card[]
  })
})
