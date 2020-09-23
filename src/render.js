import Vue from 'vue'
import Main from './main.vue'

// let Constructor = Vue.extend(Main)

let instance

const Jarvis = function({ el = null , schema = {}, scope = {}, dataHub = {} }) {
  if (Vue.prototype.$isServer) return
  if (!el) {
    console.error('el is required')
    return
  }
  console.log('schema', schema)

  // 定义全局变量
  window.__$jarvis = {}
  window.__$jarvis.__jaSchemaGlobalList = {}
  
  let Constructor = Vue.extend(Main)
  instance = new Constructor({
    data: {schema, scope, dataHub},
  })
  instance.$mount()
  el.appendChild(instance.$el)
  return instance
}

export default Jarvis