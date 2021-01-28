import Jarvis from './render'

const render = (json, dom, Vue) => {
  let schema = {}
  try {
    schema = JSON.parse(json)
  } catch (err) {
    console.log(err)
    schema = {}
  }
  Jarvis({el: dom, schema, Vue })
}


export default render
