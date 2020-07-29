module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Gallery.jsx":
/*!********************************!*\
  !*** ./components/Gallery.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"react-image-gallery\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/sam/Desktop/another-app/components/Gallery.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import SimpleCard from \"./PhotoCard\";\n// const Gallery = ({ pics }) => {\n//   return (\n//     <div>\n//       {pics.map((pic) => (\n//         <SimpleCard picture={pic} />\n//       ))}\n//     </div>\n//   );\n// };\n// export default Gallery;\n\n\nconst Gallery = ({\n  pics\n}) => {\n  const images = pics.map(pic => {\n    return {\n      original: pic.link,\n      thumbnail: pic.thumbnail\n    };\n  });\n  return __jsx(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: images,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbGxlcnkuanN4PzZjMzMiXSwibmFtZXMiOlsiR2FsbGVyeSIsInBpY3MiLCJpbWFnZXMiLCJtYXAiLCJwaWMiLCJvcmlnaW5hbCIsImxpbmsiLCJ0aHVtYm5haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzVCLFFBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVVDLEdBQUQsSUFBUztBQUMvQixXQUFPO0FBQ0xDLGNBQVEsRUFBRUQsR0FBRyxDQUFDRSxJQURUO0FBRUxDLGVBQVMsRUFBRUgsR0FBRyxDQUFDRztBQUZWLEtBQVA7QUFJRCxHQUxjLENBQWY7QUFNQSxTQUFPLE1BQUMsMERBQUQ7QUFBYyxTQUFLLEVBQUVMLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBUkQ7O0FBU2VGLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HYWxsZXJ5LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBTaW1wbGVDYXJkIGZyb20gXCIuL1Bob3RvQ2FyZFwiO1xuXG4vLyBjb25zdCBHYWxsZXJ5ID0gKHsgcGljcyB9KSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIHtwaWNzLm1hcCgocGljKSA9PiAoXG4vLyAgICAgICAgIDxTaW1wbGVDYXJkIHBpY3R1cmU9e3BpY30gLz5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcbi8vIGV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG5cbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSBcInJlYWN0LWltYWdlLWdhbGxlcnlcIjtcblxuY29uc3QgR2FsbGVyeSA9ICh7IHBpY3MgfSkgPT4ge1xuICBjb25zdCBpbWFnZXMgPSBwaWNzLm1hcCgocGljKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yaWdpbmFsOiBwaWMubGluayxcbiAgICAgIHRodW1ibmFpbDogcGljLnRodW1ibmFpbCxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIDxJbWFnZUdhbGxlcnkgaXRlbXM9e2ltYWdlc30gLz47XG59O1xuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gallery.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Gallery */ \"./components/Gallery.jsx\");\nvar _jsxFileName = \"/Users/sam/Desktop/another-app/pages/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst HomePage = ({\n  pics\n}) => {\n  return __jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    pics: pics,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nasync function getStaticProps() {\n  const res = await fetch(`https://kyle-garrett-photo-server.herokuapp.com/photos/`);\n  const pics = await res.json();\n  return {\n    props: {\n      pics\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInBpY3MiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzdCLFNBQU8sTUFBQywyREFBRDtBQUFTLFFBQUksRUFBRUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQUZEOztBQUdlRCx1RUFBZjtBQUVPLGVBQWVFLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDcEIseURBRG9CLENBQXZCO0FBR0EsUUFBTUgsSUFBSSxHQUFHLE1BQU1FLEdBQUcsQ0FBQ0UsSUFBSixFQUFuQjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xMO0FBREs7QUFERixHQUFQO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYWxsZXJ5XCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKHsgcGljcyB9KSA9PiB7XG4gIHJldHVybiA8R2FsbGVyeSBwaWNzPXtwaWNzfSAvPjtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9reWxlLWdhcnJldHQtcGhvdG8tc2VydmVyLmhlcm9rdWFwcC5jb20vcGhvdG9zL2BcbiAgKTtcbiAgY29uc3QgcGljcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGljcyxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam/Desktop/another-app/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-image-gallery":
/*!**************************************!*\
  !*** external "react-image-gallery" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-image-gallery\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZS1nYWxsZXJ5XCI/ZTM4OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pbWFnZS1nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW1hZ2UtZ2FsbGVyeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-image-gallery\n");

/***/ })

/******/ });