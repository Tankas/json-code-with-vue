import Jarvis from './render'

const render = (json, dom) => {
  let schema = {}
  try {
    schema = JSON.parse(json)
  } catch (err) {
    console.log(err)
    schema = {}
  }
  Jarvis({el: dom, schema })
}

export default render