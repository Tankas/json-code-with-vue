// import render from '../lib/main'
import render from '../src'
import Vue from 'vue'

console.log('vue instance')
console.log(Vue)

import test from './test.vue'

Vue.component(
  test.name,
  test,
)

const json = '{"componentName":"div","componentList":[{"componentName":"p","slot":"p1"},{"componentName":"test"}]}'

render(json, document.getElementById('#app'), Vue)
