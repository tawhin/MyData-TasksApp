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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"lSNA\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"yXPU\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"o0o1\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskForm */ \"mqW6\");\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/config */ \"KOl/\");\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_server_config__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"vDqi\");\n\n\n\n\nvar TaskList = function TaskList(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      tasks = _useState2[0],\n      setTasks = _useState2[1];\n\n  var loadTasks = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n      var resp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log('loading tasks');\n              _context.prev = 1;\n              _context.next = 4;\n              return axios.get(\"http://\".concat(_server_config__WEBPACK_IMPORTED_MODULE_6___default.a.dataServer, \"/dataset\"));\n\n            case 4:\n              resp = _context.sent;\n              console.log(resp);\n              setTasks(Object.values(resp.data));\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function loadTasks() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    // Load tasks after the first render has been mounted, or if the refresh property changes\n    loadTasks();\n  }, [props.refresh, setTasks]); // Pass the setTasks variable here prevents the useEffects from when setTasks is called.\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h2\", null, \"Existing Tasks\"), tasks.map(function (existingTask) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TaskForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: existingTask.id,\n      task: _objectSpread({}, existingTask),\n      refreshTasks: props.setRefresh\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWkNsci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0LmpzPzY0MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuaW1wb3J0IFRhc2tGb3JtIGZyb20gJy4vVGFza0Zvcm0nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJztcblxuY29uc3QgVGFza0xpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgbG9hZFRhc2tzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIHRhc2tzJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8ke2NvbmZpZy5kYXRhU2VydmVyfS9kYXRhc2V0YCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgIHNldFRhc2tzKE9iamVjdC52YWx1ZXMocmVzcC5kYXRhKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIExvYWQgdGFza3MgYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlciBoYXMgYmVlbiBtb3VudGVkLCBvciBpZiB0aGUgcmVmcmVzaCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgbG9hZFRhc2tzKCk7XG4gIH0sIFtwcm9wcy5yZWZyZXNoLCBzZXRUYXNrc10pOyAvLyBQYXNzIHRoZSBzZXRUYXNrcyB2YXJpYWJsZSBoZXJlIHByZXZlbnRzIHRoZSB1c2VFZmZlY3RzIGZyb20gd2hlbiBzZXRUYXNrcyBpcyBjYWxsZWQuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMj5FeGlzdGluZyBUYXNrczwvaDI+XG4gICAgICB7dGFza3MubWFwKChleGlzdGluZ1Rhc2spID0+IChcbiAgICAgICAgPFRhc2tGb3JtXG4gICAgICAgICAga2V5PXtleGlzdGluZ1Rhc2suaWR9XG4gICAgICAgICAgdGFzaz17eyAuLi5leGlzdGluZ1Rhc2sgfX1cbiAgICAgICAgICByZWZyZXNoVGFza3M9e3Byb3BzLnNldFJlZnJlc2h9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ZClr\n");

/***/ }),

/***/ "mqW6":
/*!************************************!*\
  !*** ./src/components/TaskForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"yXPU\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"J4zp\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"o0o1\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/config */ \"KOl/\");\n/* harmony import */ var _server_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"vDqi\");\n\n\n\nvar TaskForm = function TaskForm(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.task.description),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      desc = _useState2[0],\n      setDesc = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.task.priority),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      priority = _useState4[0],\n      setPriority = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(props.task.date),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      date = _useState6[0],\n      setDate = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      submitType = _useState8[0],\n      setSubmitType = _useState8[1];\n\n  var axiosInstance = axios.create({\n    baseURL: \"http://\".concat(_server_config__WEBPACK_IMPORTED_MODULE_4___default.a.dataServer),\n    headers: {\n      'Access-Control-Allow-Origin': '*'\n    }\n  });\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              event.preventDefault();\n              _context.t0 = submitType;\n              _context.next = _context.t0 === 'create' ? 5 : _context.t0 === 'update' ? 11 : _context.t0 === 'delete' ? 15 : 20;\n              break;\n\n            case 5:\n              console.log('POSTING new task');\n              _context.next = 8;\n              return axiosInstance.post('/data', getTask());\n\n            case 8:\n              clearTask(); // Refresh the task list\n\n              props.refreshTasks();\n              return _context.abrupt(\"break\", 22);\n\n            case 11:\n              console.log(\"PUT task id: \".concat(props.task.id));\n              _context.next = 14;\n              return axiosInstance.put(\"/data/\".concat(props.task.id), getTask());\n\n            case 14:\n              return _context.abrupt(\"break\", 22);\n\n            case 15:\n              console.log(\"DELETE task id: \".concat(props.task.id));\n              _context.next = 18;\n              return axiosInstance.delete(\"/data/\".concat(props.task.id));\n\n            case 18:\n              props.refreshTasks();\n              return _context.abrupt(\"break\", 22);\n\n            case 20:\n              console.log('Unknown form submit type');\n              return _context.abrupt(\"break\", 22);\n\n            case 22:\n              _context.next = 27;\n              break;\n\n            case 24:\n              _context.prev = 24;\n              _context.t1 = _context[\"catch\"](0);\n              console.log(_context.t1);\n\n            case 27:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 24]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getTask = function getTask() {\n    return {\n      description: desc,\n      priority: priority,\n      date: date\n    };\n  };\n\n  var clearTask = function clearTask() {\n    setDesc('');\n    setPriority('');\n    setDate('');\n  };\n\n  var taskExists = props.task.id !== undefined;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"Description:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"textarea\", {\n    type: \"text\",\n    value: desc,\n    onChange: function onChange(event) {\n      return setDesc(event.target.value);\n    },\n    required: true\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"Priority:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"select\", {\n    className: \"item\",\n    value: priority,\n    onChange: function onChange(event) {\n      return setPriority(event.target.value);\n    },\n    required: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    disabled: \"disabled\",\n    value: \"\"\n  }, \"select priority\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    value: \"high\"\n  }, \"HIGH\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    value: \"medium\"\n  }, \"MEDIUM\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"option\", {\n    value: \"low\"\n  }, \"LOW\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"Date:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"input\", {\n    className: \"item\",\n    type: \"date\",\n    value: date,\n    onChange: function onChange(event) {\n      return setDate(event.target.value);\n    },\n    required: true\n  }))), taskExists ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    className: \"button\",\n    onClick: function onClick() {\n      return setSubmitType('update');\n    }\n  }, \"Update\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    className: \"button\",\n    onClick: function onClick() {\n      return setSubmitType('delete');\n    }\n  }, \"Delete\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"field-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"button\", {\n    className: \"button\",\n    onClick: function onClick() {\n      return setSubmitType('create');\n    }\n  }, \"Create\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXFXNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rhc2tGb3JtLmpzPzlhYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vc2VydmVyL2NvbmZpZyc7XG5cbmNvbnN0IFRhc2tGb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKHByb3BzLnRhc2suZGVzY3JpcHRpb24pO1xuICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlKHByb3BzLnRhc2sucHJpb3JpdHkpO1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShwcm9wcy50YXNrLmRhdGUpO1xuICBjb25zdCBbc3VibWl0VHlwZSwgc2V0U3VibWl0VHlwZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBgaHR0cDovLyR7Y29uZmlnLmRhdGFTZXJ2ZXJ9YCxcbiAgICBoZWFkZXJzOiB7ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHN3aXRjaCAoc3VibWl0VHlwZSkge1xuICAgICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQT1NUSU5HIG5ldyB0YXNrJyk7XG4gICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5wb3N0KCcvZGF0YScsIGdldFRhc2soKSk7XG4gICAgICAgICAgY2xlYXJUYXNrKCk7XG4gICAgICAgICAgLy8gUmVmcmVzaCB0aGUgdGFzayBsaXN0XG4gICAgICAgICAgcHJvcHMucmVmcmVzaFRhc2tzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgY29uc29sZS5sb2coYFBVVCB0YXNrIGlkOiAke3Byb3BzLnRhc2suaWR9YCk7XG4gICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5wdXQoYC9kYXRhLyR7cHJvcHMudGFzay5pZH1gLCBnZXRUYXNrKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgIGNvbnNvbGUubG9nKGBERUxFVEUgdGFzayBpZDogJHtwcm9wcy50YXNrLmlkfWApO1xuICAgICAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2UuZGVsZXRlKGAvZGF0YS8ke3Byb3BzLnRhc2suaWR9YCk7XG4gICAgICAgICAgcHJvcHMucmVmcmVzaFRhc2tzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5sb2coJ1Vua25vd24gZm9ybSBzdWJtaXQgdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICByZXR1cm4geyBkZXNjcmlwdGlvbjogZGVzYywgcHJpb3JpdHk6IHByaW9yaXR5LCBkYXRlOiBkYXRlIH07XG4gIH07XG5cbiAgY29uc3QgY2xlYXJUYXNrID0gKCkgPT4ge1xuICAgIHNldERlc2MoJycpO1xuICAgIHNldFByaW9yaXR5KCcnKTtcbiAgICBzZXREYXRlKCcnKTtcbiAgfTtcblxuICBjb25zdCB0YXNrRXhpc3RzID0gcHJvcHMudGFzay5pZCAhPT0gdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXBcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOjwvcD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RGVzYyhldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXJvd1wiPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHA+UHJpb3JpdHk6PC9wPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxuICAgICAgICAgICAgdmFsdWU9e3ByaW9yaXR5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0UHJpb3JpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD1cImRpc2FibGVkXCIgdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAgc2VsZWN0IHByaW9yaXR5XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SElHSDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1FRElVTTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxPVzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHA+RGF0ZTo8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RGF0ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHt0YXNrRXhpc3RzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U3VibWl0VHlwZSgndXBkYXRlJyl9PlxuICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTdWJtaXRUeXBlKCdkZWxldGUnKX0+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U3VibWl0VHlwZSgnY3JlYXRlJyl9PlxuICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrRm9ybTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFOQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFEQTtBQWFBO0FBYkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFpQkE7QUFqQkE7QUFBQTtBQUNBO0FBREE7QUFtQkE7QUFuQkE7QUFDQTtBQURBO0FBc0JBO0FBdEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTBCQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBNkJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQVFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mqW6\n");

/***/ }),

/***/ "pJzz":
/*!**************************************!*\
  !*** ./src/components/CreateTask.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskForm */ \"mqW6\");\n //const axios = require('axios');\n\n\n\nvar CreateTask = function CreateTask(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h2\", null, \"Add New Task\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_TaskForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    task: {\n      description: '',\n      priority: '',\n      date: ''\n    },\n    refreshTasks: props.setRefresh\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateTask);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicEp6ei5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRhc2suanM/YTQ5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2NvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuaW1wb3J0IFRhc2tGb3JtIGZyb20gJy4vVGFza0Zvcm0nO1xuXG5jb25zdCBDcmVhdGVUYXNrID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8aDI+QWRkIE5ldyBUYXNrPC9oMj5cbiAgICAgIDxUYXNrRm9ybVxuICAgICAgICB0YXNrPXt7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgIHByaW9yaXR5OiAnJyxcbiAgICAgICAgICBkYXRlOiAnJyxcbiAgICAgICAgfX1cbiAgICAgICAgcmVmcmVzaFRhc2tzPXtwcm9wcy5zZXRSZWZyZXNofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUYXNrO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTtBQVVBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///pJzz\n");

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