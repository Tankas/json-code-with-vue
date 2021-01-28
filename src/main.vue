<template>
  <div class="main-wrapper">
    <node :componentObj="schema" :sid="sid" :scope="scope"></node>
  </div>
</template>
<script>
import Node from './components/node'

import { random } from './utils/tools'

// 配置对象,渲染

export default {
  name: 'Jarvis',
  components: {
    Node,
  },
  data() {
    return {
      sid: random(),
    }
  },
  created() {
    console.log(this.schema)
  },
  methods: {
  },
}
</script>
