import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MenuHeader from '../MenuHeader.vue'
import router from '@/router'

describe('MenuHeader Component', () => {
  it('should render menu links', async () => {
    const wrapper = mount(MenuHeader, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    expect(wrapper.findAll('.menu__item').length).toBe(4)
    expect(wrapper.find('.menu__item:nth-child(1)').text()).toBe('Home')
    expect(wrapper.find('.menu__item:nth-child(2)').text()).toBe('About')
    expect(wrapper.find('.menu__item:nth-child(3)').text()).toBe('Rooms')
    expect(wrapper.find('.menu__item:nth-child(4)').text()).toBe('Services')
  })

  it('should toggle mobile menu', async () => {
    const wrapper = mount(MenuHeader, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    expect(wrapper.find('.menuPhone__items').exists()).toBe(false)
    await wrapper.find('.menuPhone').trigger('click')
    expect(wrapper.find('.menuPhone__items').exists()).toBe(true)
    await wrapper.find('.closeMenu').trigger('click')
    expect(wrapper.find('.menuPhone__items').exists()).toBe(false)
  })
})
