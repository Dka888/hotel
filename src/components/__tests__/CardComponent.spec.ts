import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import CardComponent from '../CardComponent.vue'
import { useCartStore } from '../../stores/CartStore'
import type { Card } from '@/stores/useStore'

const mockCard = {
  image: 'https://via.placeholder.com/150',
  title: 'Sample Card',
  price: 100,
  id: 0
} as Card

describe('CardComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders card details correctly', () => {
    const wrapper = mount(CardComponent, {
      props: { card: mockCard }
    })

    expect(wrapper.find('.card__title').text()).toBe(mockCard.title)
    expect(wrapper.find('.card__price').text()).toBe(`${mockCard.price} PLN`)
  })

  it('adds item to cart when button is clicked', async () => {
    const wrapper = mount(CardComponent, {
      props: { card: mockCard }
    })
    const cartStore = useCartStore()

    await wrapper.find('.card__button').trigger('click')

    const addedCard = cartStore.carts.find((card) => card.title === mockCard.title)
    expect(addedCard).toMatchObject(mockCard)
  })
})
