<template>
  <component
    :is="componentObj.componentName"
    :data="componentObj"
    v-bind="propObj"
    :ref="sid"
    :sid="sid">
    <slot></slot>
    <template>
      <node
        v-for="(item, index) in childrenComponentList"
        :key="index"
        :componentObj="item"
        :sid="sid"
        :scope="scope"
      >
      {{ item.slot }}
      </node>
    </template>
  </component>
</template>
<script>
export default {
  name: 'node',
  data() {
    return {
    }
  },
  props: {
    componentObj: {
      type: Object,
    },
    sid: {
      type: String,
    },
    scope: Object,
  },
  computed: {
    propObj() {
      if (typeof this.componentObj.editProps === 'object') {
        return { ...this.componentObj, ...this.componentObj.editProps }
      }
      return { ...this.componentObj }
    },
    childrenComponentList() {
      return this.componentObj.componentList
    },
  },
}
</script>
