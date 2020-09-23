/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/recursion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/recursion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'j-recursion',
  data: function data() {
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
    propObj: function propObj() {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(this.componentObj.editProps) === 'object') {
        return _objectSpread(_objectSpread({}, this.componentObj), this.componentObj.editProps);
      }

      return _objectSpread({}, this.componentObj);
    },
    childrenComponentList: function childrenComponentList() {
      return this.componentObj.componentList;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_recursion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/recursion */ "./src/components/recursion.vue");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/tools */ "./src/utils/tools.js");
//
//
//
//
//

 // 配置对象,渲染

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Jarvis',
  components: {
    JRecursion: _components_recursion__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sid: Object(_utils_tools__WEBPACK_IMPORTED_MODULE_1__["random"])()
    };
  },
  created: function created() {
    console.log(this.schema);
  },
  methods: {
    initDateHub: function initDateHub() {
      var _this = this;

      var dataHubList = Object.keys(this.dataHub);
      if (!dataHubList) return;
      dataHubList.forEach(function (i) {
        _this.$store.dispatch('dataHubSet', {
          path: i,
          val: _this.dataHub[i]
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/recursion.vue?vue&type=template&id=44bbaa82&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/recursion.vue?vue&type=template&id=44bbaa82& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "recursion-wrapper" },
    [
      _c(
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
          _vm._v(" "),
          _vm._l(_vm.childrenComponentList, function(item, index) {
            return _c(
              "j-recursion",
              {
                key: index,
                attrs: { componentObj: item, sid: _vm.sid, scope: _vm.scope }
              },
              [_vm._v("\n      " + _vm._s(item.slot) + "\n      ")]
            )
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/main.vue?vue&type=template&id=3c208292&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/main.vue?vue&type=template&id=3c208292& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-wrapper" },
    [
      _c("j-recursion", {
        attrs: { componentObj: _vm.schema, sid: _vm.sid, scope: _vm.scope }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/components/recursion.vue":
/*!**************************************!*\
  !*** ./src/components/recursion.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recursion_vue_vue_type_template_id_44bbaa82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recursion.vue?vue&type=template&id=44bbaa82& */ "./src/components/recursion.vue?vue&type=template&id=44bbaa82&");
/* harmony import */ var _recursion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recursion.vue?vue&type=script&lang=js& */ "./src/components/recursion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recursion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recursion_vue_vue_type_template_id_44bbaa82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recursion_vue_vue_type_template_id_44bbaa82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/recursion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/recursion.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/recursion.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recursion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2!../../node_modules/vue-loader/lib??vue-loader-options!./recursion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/recursion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recursion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/recursion.vue?vue&type=template&id=44bbaa82&":
/*!*********************************************************************!*\
  !*** ./src/components/recursion.vue?vue&type=template&id=44bbaa82& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recursion_vue_vue_type_template_id_44bbaa82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./recursion.vue?vue&type=template&id=44bbaa82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/recursion.vue?vue&type=template&id=44bbaa82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recursion_vue_vue_type_template_id_44bbaa82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recursion_vue_vue_type_template_id_44bbaa82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");


var render = function render(json, dom) {
  var schema = {};

  try {
    schema = JSON.parse(json);
  } catch (err) {
    console.log(err);
    schema = {};
  }

  Object(_render__WEBPACK_IMPORTED_MODULE_0__["default"])({
    el: dom,
    schema: schema
  });
};

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/main.vue":
/*!**********************!*\
  !*** ./src/main.vue ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_3c208292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=3c208292& */ "./src/main.vue?vue&type=template&id=3c208292&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./src/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_3c208292___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_3c208292___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/main.vue?vue&type=script&lang=js&":
/*!***********************************************!*\
  !*** ./src/main.vue?vue&type=script&lang=js& ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/main.vue?vue&type=template&id=3c208292&":
/*!*****************************************************!*\
  !*** ./src/main.vue?vue&type=template&id=3c208292& ***!
  \*****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3c208292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=3c208292& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/main.vue?vue&type=template&id=3c208292&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3c208292___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3c208292___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _main_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue */ "./src/main.vue");

 // let Constructor = Vue.extend(Main)

var instance;

var Jarvis = function Jarvis(_ref) {
  var _ref$el = _ref.el,
      el = _ref$el === void 0 ? null : _ref$el,
      _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? {} : _ref$scope,
      _ref$dataHub = _ref.dataHub,
      dataHub = _ref$dataHub === void 0 ? {} : _ref$dataHub;
  if (vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$isServer) return;

  if (!el) {
    console.error('el is required');
    return;
  }

  console.log('schema', schema); // 定义全局变量

  window.__$jarvis = {};
  window.__$jarvis.__jaSchemaGlobalList = {};
  var Constructor = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend(_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  instance = new Constructor({
    data: {
      schema: schema,
      scope: scope,
      dataHub: dataHub
    }
  });
  instance.$mount();
  el.appendChild(instance.$el);
  return instance;
};

/* harmony default export */ __webpack_exports__["default"] = (Jarvis);

/***/ }),

/***/ "./src/utils/tools.js":
/*!****************************!*\
  !*** ./src/utils/tools.js ***!
  \****************************/
/*! exports provided: replaceItem, random, toDownload, objectGetByPath, objectSetByPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceItem", function() { return replaceItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDownload", function() { return toDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectGetByPath", function() { return objectGetByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSetByPath", function() { return objectSetByPath; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

function replaceItem(obj, word) {
  return word.split('[#').map(function (item) {
    var replaceArray = item.split('#]');

    if (obj[replaceArray[0]]) {
      replaceArray.splice(0, 1, obj[replaceArray[0]]);
    }

    return replaceArray.join('');
  }).reduce(function (total, value) {
    total += value;
    return total;
  });
}
function random() {
  return Math.random().toString(36).substring(2);
}
function toDownload(data) {
  var blob = new Blob([data]);
  var href = window.URL.createObjectURL(blob);
  return href;
} // 根据路径取数据

function objectGetByPath() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var val;

  try {
    val = path.split('.').reduce(function (a, b) {
      return a && a[b];
    }, obj);
  } catch (error) {
    console.warn('error', error);
  }

  return val;
}
function objectSetByPath() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var val = arguments.length > 2 ? arguments[2] : undefined;
  path = path.split('.');
  var key = path.pop();
  var preObj = obj;

  try {
    preObj = path.reduce(function (a, b) {
      if (!(a && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a) === 'object')) a = {};
      if (!(a[b] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a[b]) === 'object')) a[b] = {};
      return a[b];
    }, obj);
  } catch (e) {
    console.error(e);
  }

  preObj[key] = val; // set(obj, path, val);

  return obj;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3JlY3Vyc2lvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9tYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWN1cnNpb24udnVlPzNhMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udnVlPzFlNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVjdXJzaW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWN1cnNpb24udnVlPzE0ZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVjdXJzaW9uLnZ1ZT8wODNhIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udnVlP2YxYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udnVlPzkwMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG9vbHMuanMiXSwibmFtZXMiOlsicmVuZGVyIiwianNvbiIsImRvbSIsInNjaGVtYSIsIkpTT04iLCJwYXJzZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJKYXJ2aXMiLCJlbCIsImluc3RhbmNlIiwic2NvcGUiLCJkYXRhSHViIiwiVnVlIiwicHJvdG90eXBlIiwiJGlzU2VydmVyIiwiZXJyb3IiLCJ3aW5kb3ciLCJfXyRqYXJ2aXMiLCJfX2phU2NoZW1hR2xvYmFsTGlzdCIsIkNvbnN0cnVjdG9yIiwiZXh0ZW5kIiwiTWFpbiIsImRhdGEiLCIkbW91bnQiLCJhcHBlbmRDaGlsZCIsIiRlbCIsInJlcGxhY2VJdGVtIiwib2JqIiwid29yZCIsInNwbGl0IiwibWFwIiwiaXRlbSIsInJlcGxhY2VBcnJheSIsInNwbGljZSIsImpvaW4iLCJyZWR1Y2UiLCJ0b3RhbCIsInZhbHVlIiwicmFuZG9tIiwiTWF0aCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwidG9Eb3dubG9hZCIsImJsb2IiLCJCbG9iIiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9iamVjdEdldEJ5UGF0aCIsInBhdGgiLCJ2YWwiLCJhIiwiYiIsIndhcm4iLCJvYmplY3RTZXRCeVBhdGgiLCJrZXkiLCJwb3AiLCJwcmVPYmoiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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QixDQUFKLEVBQXlDRCxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPLEVBQVA7QUFDekMsYUFBT0QsQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFDRCxLQUpRLEVBSU56QixHQUpNLENBQVQ7QUFLRCxHQU5ELENBTUUsT0FBTytCLENBQVAsRUFBVTtBQUNWckQsV0FBTyxDQUFDVSxLQUFSLENBQWMyQyxDQUFkO0FBQ0Q7O0FBQ0RELFFBQU0sQ0FBQ0YsR0FBRCxDQUFOLEdBQWNMLEdBQWQsQ0Fid0QsQ0FjeEQ7O0FBQ0EsU0FBT3ZCLEdBQVA7QUFDRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyZWN1cnNpb24td3JhcHBlclwiPlxuICAgIDxjb21wb25lbnRcbiAgICAgIDppcz1cImNvbXBvbmVudE9iai5jb21wb25lbnROYW1lXCJcbiAgICAgIDpkYXRhPVwiY29tcG9uZW50T2JqXCJcbiAgICAgIHYtYmluZD1cInByb3BPYmpcIlxuICAgICAgOnJlZj1cInNpZFwiXG4gICAgICA6c2lkPVwic2lkXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8dGVtcGxhdGU+XG4gICAgICAgIDxqLXJlY3Vyc2lvblxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjaGlsZHJlbkNvbXBvbmVudExpc3RcIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgOmNvbXBvbmVudE9iaj1cIml0ZW1cIlxuICAgICAgICAgIDpzaWQ9XCJzaWRcIlxuICAgICAgICAgIDpzY29wZT1cInNjb3BlXCJcbiAgICAgICAgPlxuICAgICAgICB7eyBpdGVtLnNsb3QgfX1cbiAgICAgICAgPC9qLXJlY3Vyc2lvbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdqLXJlY3Vyc2lvbicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgY29tcG9uZW50T2JqOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfSxcbiAgICBzaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHNjb3BlOiBPYmplY3QsXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcHJvcE9iaigpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb21wb25lbnRPYmouZWRpdFByb3BzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4geyAuLi50aGlzLmNvbXBvbmVudE9iaiwgLi4udGhpcy5jb21wb25lbnRPYmouZWRpdFByb3BzIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IC4uLnRoaXMuY29tcG9uZW50T2JqIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuQ29tcG9uZW50TGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudE9iai5jb21wb25lbnRMaXN0XG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFpbi13cmFwcGVyXCI+XG4gICAgPGotcmVjdXJzaW9uIDpjb21wb25lbnRPYmo9XCJzY2hlbWFcIiA6c2lkPVwic2lkXCIgOnNjb3BlPVwic2NvcGVcIj48L2otcmVjdXJzaW9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEpSZWN1cnNpb24gZnJvbSAnLi9jb21wb25lbnRzL3JlY3Vyc2lvbidcblxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi91dGlscy90b29scydcblxuLy8g6YWN572u5a+56LGhLOa4suafk1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdKYXJ2aXMnLFxuICBjb21wb25lbnRzOiB7XG4gICAgSlJlY3Vyc2lvbixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2lkOiByYW5kb20oKSxcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zY2hlbWEpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0RGF0ZUh1YigpIHtcbiAgICAgIGNvbnN0IGRhdGFIdWJMaXN0ID0gT2JqZWN0LmtleXModGhpcy5kYXRhSHViKVxuICAgICAgaWYgKCFkYXRhSHViTGlzdCkgcmV0dXJuXG4gICAgICBkYXRhSHViTGlzdC5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdkYXRhSHViU2V0Jywge1xuICAgICAgICAgIHBhdGg6IGksXG4gICAgICAgICAgdmFsOiB0aGlzLmRhdGFIdWJbaV0sXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJlY3Vyc2lvbi13cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgX3ZtLmNvbXBvbmVudE9iai5jb21wb25lbnROYW1lLFxuICAgICAgICBfdm0uX2IoXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBfdm0uc2lkLFxuICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogX3ZtLmNvbXBvbmVudE9iaiwgc2lkOiBfdm0uc2lkIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgX3ZtLnByb3BPYmosXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNoaWxkcmVuQ29tcG9uZW50TGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJqLXJlY3Vyc2lvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBjb21wb25lbnRPYmo6IGl0ZW0sIHNpZDogX3ZtLnNpZCwgc2NvcGU6IF92bS5zY29wZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhpdGVtLnNsb3QpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWFpbi13cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImotcmVjdXJzaW9uXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgY29tcG9uZW50T2JqOiBfdm0uc2NoZW1hLCBzaWQ6IF92bS5zaWQsIHNjb3BlOiBfdm0uc2NvcGUgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcmVjdXJzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGJiYWE4MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZWN1cnNpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWN1cnNpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hpcm9zZW5zZWkvdGFua2EvanNvbi1jb2RlLXdpdGgtdnVlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ0YmJhYTgyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ0YmJhYTgyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ0YmJhYTgyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZWN1cnNpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YmJhYTgyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ0YmJhYTgyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9yZWN1cnNpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVjdXJzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVjdXJzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWN1cnNpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YmJhYTgyJlwiIiwiaW1wb3J0IEphcnZpcyBmcm9tICcuL3JlbmRlcidcblxuY29uc3QgcmVuZGVyID0gKGpzb24sIGRvbSkgPT4ge1xuICBsZXQgc2NoZW1hID0ge31cbiAgdHJ5IHtcbiAgICBzY2hlbWEgPSBKU09OLnBhcnNlKGpzb24pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgICBzY2hlbWEgPSB7fVxuICB9XG4gIEphcnZpcyh7ZWw6IGRvbSwgc2NoZW1hIH0pXG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMjA4MjkyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoaXJvc2Vuc2VpL3RhbmthL2pzb24tY29kZS13aXRoLXZ1ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYzIwODI5MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYzIwODI5MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYzIwODI5MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MyMDgyOTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2MyMDgyOTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9tYWluLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzIwODI5MiZcIiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluLnZ1ZSdcblxuLy8gbGV0IENvbnN0cnVjdG9yID0gVnVlLmV4dGVuZChNYWluKVxuXG5sZXQgaW5zdGFuY2VcblxuY29uc3QgSmFydmlzID0gZnVuY3Rpb24oeyBlbCA9IG51bGwgLCBzY2hlbWEgPSB7fSwgc2NvcGUgPSB7fSwgZGF0YUh1YiA9IHt9IH0pIHtcbiAgaWYgKFZ1ZS5wcm90b3R5cGUuJGlzU2VydmVyKSByZXR1cm5cbiAgaWYgKCFlbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2VsIGlzIHJlcXVpcmVkJylcbiAgICByZXR1cm5cbiAgfVxuICBjb25zb2xlLmxvZygnc2NoZW1hJywgc2NoZW1hKVxuXG4gIC8vIOWumuS5ieWFqOWxgOWPmOmHj1xuICB3aW5kb3cuX18kamFydmlzID0ge31cbiAgd2luZG93Ll9fJGphcnZpcy5fX2phU2NoZW1hR2xvYmFsTGlzdCA9IHt9XG4gIFxuICBsZXQgQ29uc3RydWN0b3IgPSBWdWUuZXh0ZW5kKE1haW4pXG4gIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKHtcbiAgICBkYXRhOiB7c2NoZW1hLCBzY29wZSwgZGF0YUh1Yn0sXG4gIH0pXG4gIGluc3RhbmNlLiRtb3VudCgpXG4gIGVsLmFwcGVuZENoaWxkKGluc3RhbmNlLiRlbClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEphcnZpcyIsImV4cG9ydCBmdW5jdGlvbiByZXBsYWNlSXRlbShvYmosIHdvcmQpIHtcbiAgcmV0dXJuIHdvcmQuc3BsaXQoJ1sjJykubWFwKChpdGVtKSA9PiB7XG4gICAgY29uc3QgcmVwbGFjZUFycmF5ID0gaXRlbS5zcGxpdCgnI10nKVxuICAgIGlmIChvYmpbcmVwbGFjZUFycmF5WzBdXSkge1xuICAgICAgcmVwbGFjZUFycmF5LnNwbGljZSgwLCAxLCBvYmpbcmVwbGFjZUFycmF5WzBdXSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcGxhY2VBcnJheS5qb2luKCcnKVxuICB9KS5yZWR1Y2UoKHRvdGFsLCB2YWx1ZSkgPT4ge1xuICAgIHRvdGFsICs9IHZhbHVlXG4gICAgcmV0dXJuIHRvdGFsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5zdWJzdHJpbmcoMilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRG93bmxvYWQoZGF0YSkge1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGFdKVxuICBjb25zdCBocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgcmV0dXJuIGhyZWZcbn1cblxuLy8g5qC55o2u6Lev5b6E5Y+W5pWw5o2uXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0R2V0QnlQYXRoKG9iaiA9IHt9LCBwYXRoID0gJycpIHtcbiAgbGV0IHZhbFxuICB0cnkge1xuICAgIHZhbCA9IHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKGEsIGIpID0+IGEgJiYgYVtiXSwgb2JqKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUud2FybignZXJyb3InLCBlcnJvcilcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RTZXRCeVBhdGgob2JqID0ge30sIHBhdGggPSAnJywgdmFsKSB7XG4gIHBhdGggPSBwYXRoLnNwbGl0KCcuJylcbiAgY29uc3Qga2V5ID0gcGF0aC5wb3AoKVxuICBsZXQgcHJlT2JqID0gb2JqXG4gIHRyeSB7XG4gICAgcHJlT2JqID0gcGF0aC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgIGlmICghKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSkgYSA9IHt9XG4gICAgICBpZiAoIShhW2JdICYmIHR5cGVvZiBhW2JdID09PSAnb2JqZWN0JykpIGFbYl0gPSB7fVxuICAgICAgcmV0dXJuIGFbYl1cbiAgICB9LCBvYmopXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gIH1cbiAgcHJlT2JqW2tleV0gPSB2YWxcbiAgLy8gc2V0KG9iaiwgcGF0aCwgdmFsKTtcbiAgcmV0dXJuIG9ialxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==