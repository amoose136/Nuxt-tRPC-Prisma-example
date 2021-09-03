import { mount } from '@vue/test-utils'
import { index } from '@/pages/index.vue'

describe('Main landing page', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(index)
        expect(wrapper.vm).toBeTruthy()
    })
})
