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
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** multi ./src/renderers/dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/renderers/dom.js */"4qhl");


/***/ }),

/***/ "4qhl":
/*!******************************!*\
  !*** ./src/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/App */ \"r8ck\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ \"VxdY\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNHFobC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvZG9tLmpzP2UyYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJ2NvbXBvbmVudHMvQXBwJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJztcblxuUmVhY3RET00uaHlkcmF0ZSg8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4qhl\n");

/***/ }),

/***/ "KOl/":
/*!******************************!*\
  !*** ./src/server/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  port: 4247,\n  host: 'localhost',\n  isDev: true,\n  isBrowser: typeof window !== 'undefined',\n  dataServer: 'localhost:4242'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS09sLy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY29uZmlnLmpzPzI4ZTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBvcnQ6IDQyNDcsXG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBpc0RldjogdHJ1ZSxcbiAgaXNCcm93c2VyOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyxcbiAgZGF0YVNlcnZlcjogJ2xvY2FsaG9zdDo0MjQyJyxcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///KOl/\n");

/***/ }),

/***/ "VxdY":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVnhkWS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzRlNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///VxdY\n");

/***/ }),

/***/ "ZClr":
/*!************************************!*\
  !*** ./src/components/TaskList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"lSNA\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"yXPU\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"o0o1\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskForm */ \"mqW6\");\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/config */ \"KOl/\");\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_server_config__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"vDqi\");\n\n\n\n/**\n * React component to render a list of existing task objects within collection of TaskForm components.\n * @param {*} props - Set of properties provided to the component.\n * @returns JSX\n */\n\nvar TaskList = function TaskList(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      tasks = _useState2[0],\n      setTasks = _useState2[1];\n\n  var loadTasks = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('loading tasks');\n              _context.prev = 1;\n              _context.next = 4;\n              return axios.get(\"http://\".concat(_server_config__WEBPACK_IMPORTED_MODULE_6___default.a.dataServer, \"/dataset\"));\n\n            case 4:\n              resp = _context.sent;\n              console.log(resp);\n              setTasks(Object.values(resp.data));\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function loadTasks() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  /**\n   * Use the react effect to render a list when the component is first mounted and when the task list is dynamically\n   * changed.\n   */\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    loadTasks();\n    /* Adding setTasks a dependent ensures that the tasks are loaded when the setter is first returned by useState.\n     * This ensures we have a list of existing tasks when rendering for the first time (as the setter is created only once).\n     * We then monitor the refresh property to use this effect dynamically as tasks are added or removed within the TaskForm\n     * component.\n     */\n  }, [props.refresh, setTasks]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h2\", null, \"Existing Tasks\"), tasks.map(function (existingTask) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TaskForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: existingTask.id,\n      task: _objectSpread({}, existingTask),\n      refreshTasks: props.setRefresh\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWkNsci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0LmpzPzY0MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuaW1wb3J0IFRhc2tGb3JtIGZyb20gJy4vVGFza0Zvcm0nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJztcblxuLyoqXG4gKiBSZWFjdCBjb21wb25lbnQgdG8gcmVuZGVyIGEgbGlzdCBvZiBleGlzdGluZyB0YXNrIG9iamVjdHMgd2l0aGluIGNvbGxlY3Rpb24gb2YgVGFza0Zvcm0gY29tcG9uZW50cy5cbiAqIEBwYXJhbSB7Kn0gcHJvcHMgLSBTZXQgb2YgcHJvcGVydGllcyBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICogQHJldHVybnMgSlNYXG4gKi9cbmNvbnN0IFRhc2tMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGxvYWRUYXNrcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbG9hZGluZyB0YXNrcycpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vJHtjb25maWcuZGF0YVNlcnZlcn0vZGF0YXNldGApO1xuICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICBzZXRUYXNrcyhPYmplY3QudmFsdWVzKHJlc3AuZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZSB0aGUgcmVhY3QgZWZmZWN0IHRvIHJlbmRlciBhIGxpc3Qgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIHdoZW4gdGhlIHRhc2sgbGlzdCBpcyBkeW5hbWljYWxseVxuICAgKiBjaGFuZ2VkLlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkVGFza3MoKTtcblxuICAgIC8qIEFkZGluZyBzZXRUYXNrcyBhIGRlcGVuZGVudCBlbnN1cmVzIHRoYXQgdGhlIHRhc2tzIGFyZSBsb2FkZWQgd2hlbiB0aGUgc2V0dGVyIGlzIGZpcnN0IHJldHVybmVkIGJ5IHVzZVN0YXRlLlxuICAgICAqIFRoaXMgZW5zdXJlcyB3ZSBoYXZlIGEgbGlzdCBvZiBleGlzdGluZyB0YXNrcyB3aGVuIHJlbmRlcmluZyBmb3IgdGhlIGZpcnN0IHRpbWUgKGFzIHRoZSBzZXR0ZXIgaXMgY3JlYXRlZCBvbmx5IG9uY2UpLlxuICAgICAqIFdlIHRoZW4gbW9uaXRvciB0aGUgcmVmcmVzaCBwcm9wZXJ0eSB0byB1c2UgdGhpcyBlZmZlY3QgZHluYW1pY2FsbHkgYXMgdGFza3MgYXJlIGFkZGVkIG9yIHJlbW92ZWQgd2l0aGluIHRoZSBUYXNrRm9ybVxuICAgICAqIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgfSwgW3Byb3BzLnJlZnJlc2gsIHNldFRhc2tzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMj5FeGlzdGluZyBUYXNrczwvaDI+XG4gICAgICB7dGFza3MubWFwKChleGlzdGluZ1Rhc2spID0+IChcbiAgICAgICAgPFRhc2tGb3JtXG4gICAgICAgICAga2V5PXtleGlzdGluZ1Rhc2suaWR9XG4gICAgICAgICAgdGFzaz17eyAuLi5leGlzdGluZ1Rhc2sgfX1cbiAgICAgICAgICByZWZyZXNoVGFza3M9e3Byb3BzLnNldFJlZnJlc2h9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFTQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///ZClr\n");

/***/ }),

/***/ "mqW6":
/*!************************************!*\
  !*** ./src/components/TaskForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"yXPU\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"o0o1\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/config */ \"KOl/\");\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"vDqi\");\n\n\n/**\n * React component to render task objects within a form capable of creating, updating or deleting tasks.\n * @param {*} props - Set of properties provided to the component.\n * @returns JSX\n */\n\nvar TaskForm = function TaskForm(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.task.description),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      desc = _useState2[0],\n      setDesc = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.task.priority),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      priority = _useState4[0],\n      setPriority = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.task.date),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      date = _useState6[0],\n      setDate = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      submitType = _useState8[0],\n      setSubmitType = _useState8[1];\n\n  var axiosInstance = axios.create({\n    baseURL: \"http://\".concat(_server_config__WEBPACK_IMPORTED_MODULE_4___default.a.dataServer),\n    // Added to allow code to be executed in web React Sandbox environments, useful when leaning the framework.\n    // Allows the website to interface with our local data service instance.\n    headers: {\n      'Access-Control-Allow-Origin': '*'\n    }\n  });\n  /**\n   * Function to action the form submit event and perform the required CRUD operation to\n   * the data service backend.\n   * @param {*} event - Form submit event.\n   */\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              // Override the default form submit event.\n              event.preventDefault(); // Perform the required AJAX operation depending on the submit action type.\n\n              _context.t0 = submitType;\n              _context.next = _context.t0 === 'create' ? 5 : _context.t0 === 'update' ? 11 : _context.t0 === 'delete' ? 15 : 20;\n              break;\n\n            case 5:\n              console.log('POSTING new task');\n              _context.next = 8;\n              return axiosInstance.post('/data', getTask());\n\n            case 8:\n              clearTask(); // Refresh the task list\n\n              props.refreshTasks();\n              return _context.abrupt(\"break\", 22);\n\n            case 11:\n              console.log(\"PUT task id: \".concat(props.task.id));\n              _context.next = 14;\n              return axiosInstance.put(\"/data/\".concat(props.task.id), getTask());\n\n            case 14:\n              return _context.abrupt(\"break\", 22);\n\n            case 15:\n              console.log(\"DELETE task id: \".concat(props.task.id));\n              _context.next = 18;\n              return axiosInstance.delete(\"/data/\".concat(props.task.id));\n\n            case 18:\n              props.refreshTasks();\n              return _context.abrupt(\"break\", 22);\n\n            case 20:\n              console.log('Unknown form submit type');\n              return _context.abrupt(\"break\", 22);\n\n            case 22:\n              _context.next = 27;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t1 = _context[\"catch\"](0);\n              // TODO - Provide visual feedback of the network error to the user.\n              console.log(_context.t1);\n\n            case 27:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 24]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  /**\n   * Create a task object from the react state variables.\n   * @returns {Object} task object\n   */\n\n\n  var getTask = function getTask() {\n    return {\n      description: desc,\n      priority: priority,\n      date: date\n    };\n  };\n  /**\n   * Reset the react state variable to trigger a render.\n   */\n\n\n  var clearTask = function clearTask() {\n    setDesc('');\n    setPriority('');\n    setDate('');\n  };\n  /**\n   * Determines whether the form contains an existing task or an empty task.\n   */\n\n\n  var taskExists = props.task.id !== undefined;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"Description:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"textarea\", {\n    type: \"text\",\n    value: desc,\n    onChange: function onChange(event) {\n      return setDesc(event.target.value);\n    },\n    required: true\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"Priority:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"select\", {\n    className: \"item\",\n    value: priority,\n    onChange: function onChange(event) {\n      return setPriority(event.target.value);\n    },\n    required: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    disabled: \"disabled\",\n    value: \"\"\n  }, \"select priority\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    value: \"high\"\n  }, \"HIGH\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    value: \"medium\"\n  }, \"MEDIUM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    value: \"low\"\n  }, \"LOW\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"Date:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"input\", {\n    className: \"item\",\n    type: \"date\",\n    value: date,\n    onChange: function onChange(event) {\n      return setDate(event.target.value);\n    },\n    required: true\n  }))), taskExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    className: \"button\",\n    onClick: function onClick() {\n      return setSubmitType('update');\n    }\n  }, \"Update\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    className: \"button\",\n    onClick: function onClick() {\n      return setSubmitType('delete');\n    }\n  }, \"Delete\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    className: \"button\",\n    onClick: function onClick() {\n      return setSubmitType('create');\n    }\n  }, \"Create\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXFXNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rhc2tGb3JtLmpzPzlhYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vc2VydmVyL2NvbmZpZyc7XG5cbi8qKlxuICogUmVhY3QgY29tcG9uZW50IHRvIHJlbmRlciB0YXNrIG9iamVjdHMgd2l0aGluIGEgZm9ybSBjYXBhYmxlIG9mIGNyZWF0aW5nLCB1cGRhdGluZyBvciBkZWxldGluZyB0YXNrcy5cbiAqIEBwYXJhbSB7Kn0gcHJvcHMgLSBTZXQgb2YgcHJvcGVydGllcyBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICogQHJldHVybnMgSlNYXG4gKi9cbmNvbnN0IFRhc2tGb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKHByb3BzLnRhc2suZGVzY3JpcHRpb24pO1xuICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlKHByb3BzLnRhc2sucHJpb3JpdHkpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShwcm9wcy50YXNrLmRhdGUpO1xuICBjb25zdCBbc3VibWl0VHlwZSwgc2V0U3VibWl0VHlwZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGBodHRwOi8vJHtjb25maWcuZGF0YVNlcnZlcn1gLFxuICAgIC8vIEFkZGVkIHRvIGFsbG93IGNvZGUgdG8gYmUgZXhlY3V0ZWQgaW4gd2ViIFJlYWN0IFNhbmRib3ggZW52aXJvbm1lbnRzLCB1c2VmdWwgd2hlbiBsZWFuaW5nIHRoZSBmcmFtZXdvcmsuXG4gICAgLy8gQWxsb3dzIHRoZSB3ZWJzaXRlIHRvIGludGVyZmFjZSB3aXRoIG91ciBsb2NhbCBkYXRhIHNlcnZpY2UgaW5zdGFuY2UuXG4gICAgaGVhZGVyczogeyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonIH0sXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBhY3Rpb24gdGhlIGZvcm0gc3VibWl0IGV2ZW50IGFuZCBwZXJmb3JtIHRoZSByZXF1aXJlZCBDUlVEIG9wZXJhdGlvbiB0b1xuICAgKiB0aGUgZGF0YSBzZXJ2aWNlIGJhY2tlbmQuXG4gICAqIEBwYXJhbSB7Kn0gZXZlbnQgLSBGb3JtIHN1Ym1pdCBldmVudC5cbiAgICovXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pdCBldmVudC5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIFBlcmZvcm0gdGhlIHJlcXVpcmVkIEFKQVggb3BlcmF0aW9uIGRlcGVuZGluZyBvbiB0aGUgc3VibWl0IGFjdGlvbiB0eXBlLlxuICAgICAgc3dpdGNoIChzdWJtaXRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2NyZWF0ZSc6XG4gICAgICAgICAgY29uc29sZS5sb2coJ1BPU1RJTkcgbmV3IHRhc2snKTtcbiAgICAgICAgICBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QoJy9kYXRhJywgZ2V0VGFzaygpKTtcbiAgICAgICAgICBjbGVhclRhc2soKTtcbiAgICAgICAgICAvLyBSZWZyZXNoIHRoZSB0YXNrIGxpc3RcbiAgICAgICAgICBwcm9wcy5yZWZyZXNoVGFza3MoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhgUFVUIHRhc2sgaWQ6ICR7cHJvcHMudGFzay5pZH1gKTtcbiAgICAgICAgICBhd2FpdCBheGlvc0luc3RhbmNlLnB1dChgL2RhdGEvJHtwcm9wcy50YXNrLmlkfWAsIGdldFRhc2soKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgY29uc29sZS5sb2coYERFTEVURSB0YXNrIGlkOiAke3Byb3BzLnRhc2suaWR9YCk7XG4gICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5kZWxldGUoYC9kYXRhLyR7cHJvcHMudGFzay5pZH1gKTtcbiAgICAgICAgICBwcm9wcy5yZWZyZXNoVGFza3MoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmxvZygnVW5rbm93biBmb3JtIHN1Ym1pdCB0eXBlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBUT0RPIC0gUHJvdmlkZSB2aXN1YWwgZmVlZGJhY2sgb2YgdGhlIG5ldHdvcmsgZXJyb3IgdG8gdGhlIHVzZXIuXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFzayBvYmplY3QgZnJvbSB0aGUgcmVhY3Qgc3RhdGUgdmFyaWFibGVzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXNrIG9iamVjdFxuICAgKi9cbiAgY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICByZXR1cm4geyBkZXNjcmlwdGlvbjogZGVzYywgcHJpb3JpdHk6IHByaW9yaXR5LCBkYXRlOiBkYXRlIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSByZWFjdCBzdGF0ZSB2YXJpYWJsZSB0byB0cmlnZ2VyIGEgcmVuZGVyLlxuICAgKi9cbiAgY29uc3QgY2xlYXJUYXNrID0gKCkgPT4ge1xuICAgIHNldERlc2MoJycpO1xuICAgIHNldFByaW9yaXR5KCcnKTtcbiAgICBzZXREYXRlKCcnKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBmb3JtIGNvbnRhaW5zIGFuIGV4aXN0aW5nIHRhc2sgb3IgYW4gZW1wdHkgdGFzay5cbiAgICovXG4gIGNvbnN0IHRhc2tFeGlzdHMgPSBwcm9wcy50YXNrLmlkICE9PSB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcFwiPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHA+RGVzY3JpcHRpb246PC9wPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2Rlc2N9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREZXNjKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcm93XCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8cD5Qcmlvcml0eTo8L3A+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXG4gICAgICAgICAgICB2YWx1ZT17cHJpb3JpdHl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQcmlvcml0eShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPVwiZGlzYWJsZWRcIiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICBzZWxlY3QgcHJpb3JpdHlcbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5ISUdIPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TUVESVVNPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TE9XPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICA8cD5EYXRlOjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgdmFsdWU9e2RhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXREYXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3Rhc2tFeGlzdHMgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTdWJtaXRUeXBlKCd1cGRhdGUnKX0+XG4gICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFN1Ym1pdFR5cGUoJ2RlbGV0ZScpfT5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTdWJtaXRUeXBlKCdjcmVhdGUnKX0+XG4gICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tGb3JtO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUUE7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFEQTtBQWVBO0FBZkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFtQkE7QUFuQkE7QUFBQTtBQUNBO0FBREE7QUFxQkE7QUFyQkE7QUFDQTtBQURBO0FBd0JBO0FBeEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTRCQTtBQUNBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFRQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///mqW6\n");

/***/ }),

/***/ "pJzz":
/*!**************************************!*\
  !*** ./src/components/CreateTask.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskForm */ \"mqW6\");\n //const axios = require('axios');\n\n\n/**\n * React component to render a clean TaskForm used to create a new task.\n * @param {*} props - Set of properties provided to the component.\n * @returns JSX\n */\n\nvar CreateTask = function CreateTask(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", null, \"Add New Task\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_TaskForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    task: {\n      description: '',\n      priority: '',\n      date: ''\n    },\n    refreshTasks: props.setRefresh\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTask);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicEp6ei5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRhc2suanM/YTQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2NvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuaW1wb3J0IFRhc2tGb3JtIGZyb20gJy4vVGFza0Zvcm0nO1xuXG4vKipcbiAqIFJlYWN0IGNvbXBvbmVudCB0byByZW5kZXIgYSBjbGVhbiBUYXNrRm9ybSB1c2VkIHRvIGNyZWF0ZSBhIG5ldyB0YXNrLlxuICogQHBhcmFtIHsqfSBwcm9wcyAtIFNldCBvZiBwcm9wZXJ0aWVzIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gKiBAcmV0dXJucyBKU1hcbiAqL1xuY29uc3QgQ3JlYXRlVGFzayA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGgyPkFkZCBOZXcgVGFzazwvaDI+XG4gICAgICA8VGFza0Zvcm1cbiAgICAgICAgdGFzaz17e1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBwcmlvcml0eTogJycsXG4gICAgICAgICAgZGF0ZTogJycsXG4gICAgICAgIH19XG4gICAgICAgIHJlZnJlc2hUYXNrcz17cHJvcHMuc2V0UmVmcmVzaH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVGFzaztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBVUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pJzz\n");

/***/ }),

/***/ "r8ck":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTask */ \"pJzz\");\n/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskList */ \"ZClr\");\n\n\n\n\n\nvar TaskManager = function TaskManager() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      refresh = _useState2[0],\n      setRefresh = _useState2[1];\n\n  var triggerRefresh = function triggerRefresh() {\n    setRefresh(refresh + 1);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"My Tasks Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setRefresh: triggerRefresh\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    refresh: refresh,\n    setRefresh: triggerRefresh\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjhjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENyZWF0ZVRhc2sgZnJvbSAnLi9DcmVhdGVUYXNrJztcbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuL1Rhc2tMaXN0JztcblxuY29uc3QgVGFza01hbmFnZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZWZyZXNoLCBzZXRSZWZyZXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0cmlnZ2VyUmVmcmVzaCA9ICgpID0+IHtcbiAgICBzZXRSZWZyZXNoKHJlZnJlc2ggKyAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TXkgVGFza3MgTWFuYWdlcjwvaDE+XG4gICAgICA8Q3JlYXRlVGFzayBzZXRSZWZyZXNoPXt0cmlnZ2VyUmVmcmVzaH0gLz5cbiAgICAgIDxUYXNrTGlzdCByZWZyZXNoPXtyZWZyZXNofSBzZXRSZWZyZXNoPXt0cmlnZ2VyUmVmcmVzaH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tNYW5hZ2VyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///r8ck\n");

/***/ })

/******/ });