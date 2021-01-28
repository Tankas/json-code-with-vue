import Main from './main.vue'

let instance

const Jarvis = function({ el = null , schema = {}, Vue }) {
  if (Vue.prototype.$isServer) return
  if (!el) {
    console.error('el is required')
    return
  }

  // 定义全局变量
  window.__$jarvis = {}
  window.__$jarvis.__jaSchemaGlobalList = {}
  
  let Constructor = Vue.extend(Main)
  instance = new Constructor({
    data: {schema},
  })
  instance.$mount()
  el.appendChild(instance.$el)
  return instance
}

export default Jarvis