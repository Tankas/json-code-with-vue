import render from '../lib/main'

const json = '{"componentName":"div","componentList":[{"componentName":"p","slot":"p1"},{"componentName":"p","slot":"p2"}]}'

render(json, document.getElementById('#app'))
