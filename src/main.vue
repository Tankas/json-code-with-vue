<template>
  <div class="main-wrapper">
    <j-recursion :componentObj="schema" :sid="sid" :scope="scope"></j-recursion>
  </div>
</template>
<script>
import JRecursion from './components/recursion'

import { random } from './utils/tools'

// 配置对象,渲染

export default {
  name: 'Jarvis',
  components: {
    JRecursion,
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
    initDateHub() {
      const dataHubList = Object.keys(this.dataHub)
      if (!dataHubList) return
      dataHubList.forEach((i) => {
        this.$store.dispatch('dataHubSet', {
          path: i,
          val: this.dataHub[i],
        })
      })
    },
  },
}
</script>
