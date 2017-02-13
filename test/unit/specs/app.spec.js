import { app } from '../../../src/app'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = app.$mount('#app')
    expect(vm.$el.querySelector('.github').textContent)
      .to.equal('\n        Built with Vue.js\n      ')
  })
})
