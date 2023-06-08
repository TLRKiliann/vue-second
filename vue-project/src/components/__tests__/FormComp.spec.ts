import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FormComp from '../FormComp.vue'


describe('FormComp holly test', () => {
  test("test of trigger form", async () => {
    const wrapper = mount(FormComp)
    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
    await wrapper.find('select').setValue('usa')
    await wrapper.find('input[type=checkbox]').setValue()
  })
})

/*
test('trigger', async () => {
  const wrapper = mount(FormComp)

  // trigger the element
  await wrapper.find('button').trigger('click')

  // assert some action has been performed, like an emitted event.
  expect(wrapper.emitted()).toHaveProperty('submit')
})

describe('FormComp holly test', () => {
  test("test of trigger form", async () => {
    const wrapper = mount(FormComp)
    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
    await wrapper.find('select').setValue('usa')
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=sveltekit]').setValue()
  })
})

const email = 'name@mail.com'
const description = 'Lorem ipsum dolor sit amet'
const city = 'moscow'

await wrapper.find('input[type=email]').setValue(email)
await wrapper.find('textarea').setValue(description)
await wrapper.find('select').setValue(city)
await wrapper.find('input[type=checkbox]').setValue()
await wrapper.find('input[type=radio][value=monthly]').setValue()

await wrapper.find('form').trigger('submit.prevent')

expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
  email,
  description,
  city,
  subscribe: true,
  interval: 'monthly'
})
*/