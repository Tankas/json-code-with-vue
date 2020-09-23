<template>
  <div class="recursion-wrapper">
    <component
      :is="componentObj.componentName"
      :data="componentObj"
      v-bind="propObj"
      :ref="sid"
      :sid="sid">
      <slot></slot>
      <template>
        <j-recursion
          v-for="(item, index) in childrenComponentList"
          :key="index"
          :componentObj="item"
          :sid="sid"
          :scope="scope"
        >
        {{ item.slot }}
        </j-recursion>
      </template>
    </component>
  </div>
</template>
<script>
export default {
  name: 'j-recursion',
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
