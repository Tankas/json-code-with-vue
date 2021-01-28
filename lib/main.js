(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/main.vue?vue&type=template&id=3c208292&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-wrapper" },
    [
      _c("node", {
        attrs: { componentObj: _vm.schema, sid: _vm.sid, scope: _vm.scope }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/main.vue?vue&type=template&id=3c208292&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/node.vue?vue&type=template&id=152d2512&
var nodevue_type_template_id_152d2512_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    _vm.componentObj.componentName,
    _vm._b(
      {
        ref: _vm.sid,
        tag: "component",
        attrs: { data: _vm.componentObj, sid: _vm.sid }
      },
      "component",
      _vm.propObj,
      false
    ),
    [
      _vm._t("default"),
      _vm._l(_vm.childrenComponentList, function(item, index) {
        return _c(
          "node",
          {
            key: index,
            attrs: { componentObj: item, sid: _vm.sid, scope: _vm.scope }
          },
          [_vm._v("\n    " + _vm._s(item.slot) + "\n    ")]
        )
      })
    ],
    2
  )
}
var nodevue_type_template_id_152d2512_staticRenderFns = []
nodevue_type_template_id_152d2512_render._withStripped = true


// CONCATENATED MODULE: ./src/components/node.vue?vue&type=template&id=152d2512&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/node.vue?vue&type=script&lang=js&


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nodevue_type_script_lang_js_ = ({
  name: 'node',

  data() {
    return {};
  },

  props: {
    componentObj: {
      type: Object
    },
    sid: {
      type: String
    },
    scope: Object
  },
  computed: {
    propObj() {
      if (typeof this.componentObj.editProps === 'object') {
        return _objectSpread(_objectSpread({}, this.componentObj), this.componentObj.editProps);
      }

      return _objectSpread({}, this.componentObj);
    },

    childrenComponentList() {
      return this.componentObj.componentList;
    }

  }
});
// CONCATENATED MODULE: ./src/components/node.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nodevue_type_script_lang_js_ = (nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/node.vue





/* normalize component */

var component = normalizeComponent(
  components_nodevue_type_script_lang_js_,
  nodevue_type_template_id_152d2512_render,
  nodevue_type_template_id_152d2512_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node.vue"
/* harmony default export */ var node = (component.exports);
// CONCATENATED MODULE: ./src/utils/tools.js
function replaceItem(obj, word) {
  return word.split('[#').map(item => {
    const replaceArray = item.split('#]');

    if (obj[replaceArray[0]]) {
      replaceArray.splice(0, 1, obj[replaceArray[0]]);
    }

    return replaceArray.join('');
  }).reduce((total, value) => {
    total += value;
    return total;
  });
}
function random() {
  return Math.random().toString(36).substring(2);
}
function toDownload(data) {
  const blob = new Blob([data]);
  const href = window.URL.createObjectURL(blob);
  return href;
} // 根据路径取数据

function objectGetByPath(obj = {}, path = '') {
  let val;

  try {
    val = path.split('.').reduce((a, b) => a && a[b], obj);
  } catch (error) {
    console.warn('error', error);
  }

  return val;
}
function objectSetByPath(obj = {}, path = '', val) {
  path = path.split('.');
  const key = path.pop();
  let preObj = obj;

  try {
    preObj = path.reduce((a, b) => {
      if (!(a && typeof a === 'object')) a = {};
      if (!(a[b] && typeof a[b] === 'object')) a[b] = {};
      return a[b];
    }, obj);
  } catch (e) {
    console.error(e);
  }

  preObj[key] = val; // set(obj, path, val);

  return obj;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/main.vue?vue&type=script&lang=js&
//
//
//
//
//

 // 配置对象,渲染

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'Jarvis',
  components: {
    Node: node
  },

  data() {
    return {
      sid: random()
    };
  },

  created() {
    console.log(this.schema);
  },

  methods: {}
});
// CONCATENATED MODULE: ./src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/main.vue





/* normalize component */

var main_component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./src/render.js

let instance;

const Jarvis = function ({
  el = null,
  schema = {},
  Vue
}) {
  if (Vue.prototype.$isServer) return;

  if (!el) {
    console.error('el is required');
    return;
  } // 定义全局变量


  window.__$jarvis = {};
  window.__$jarvis.__jaSchemaGlobalList = {};
  let Constructor = Vue.extend(main);
  instance = new Constructor({
    data: {
      schema
    }
  });
  instance.$mount();
  el.appendChild(instance.$el);
  return instance;
};

/* harmony default export */ var src_render = (Jarvis);
// CONCATENATED MODULE: ./src/index.js


const src_render_0 = (json, dom, Vue) => {
  let schema = {};

  try {
    schema = JSON.parse(json);
  } catch (err) {
    console.log(err);
    schema = {};
  }

  src_render({
    el: dom,
    schema,
    Vue
  });
};

/* harmony default export */ var src = __webpack_exports__["default"] = (src_render_0);

/***/ })
/******/ ])["default"];
});