# json-code-with-vue
通过json文件渲染出html页面在vue项目中

## install
```javascript
  npm install json-code-with-vue --save
```
## quick start
```javascript
  import render from 'json-code-with-vue'

  const jsonStr = '{"componentName":"div","componentList":[{"componentName":"p","slot":"p1"},{"componentName":"p","slot":"p2"}]}'
  /**
   * jsonStr: json串
   * dom: 挂载的dom节点
   */
  render(jsonStr, dom)

```
## json 规范
componentName: 组件名，可以是全局组件名，或者html 标签  
componentList: 子组件列表
