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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Instagram */ \"@material-ui/icons/Instagram\");\n/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/sam/Desktop/another-app/components/Header.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(() => ({\n  textStyles: {\n    color: \"rgba(0, 0, 0, 0.87)\",\n    // marginLeft: \"60px\",\n    margin: \"0 auto\",\n    fontWeight: 500\n  }\n}));\n\nfunction handleInstaIconClick() {\n  window.open(\"https://www.instagram.com/kylegarrettphoto/\");\n}\n\nconst Header = () => {\n  const classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    position: \"static\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: handleInstaIconClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    color: \"action\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    className: classes.textStyles,\n    variant: \"h5\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Kyle Garrett Photography\"), __jsx(DropDownMenu, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })));\n};\n\nconst DropDownMenu = () => {\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  function handleBurgerIconClick(event) {\n    setOpen(event.currentTarget);\n  }\n\n  function handleClose() {\n    setOpen(null);\n  }\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: handleBurgerIconClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"action\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n    id: \"dropdown-menu\",\n    anchorEl: open,\n    keepMounted: true,\n    open: Boolean(open),\n    onClose: handleClose,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"Climbing\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, \"Portraits\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, \"Not Climbing\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, \"About\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, \"Contact\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGV4dFN0eWxlcyIsImNvbG9yIiwibWFyZ2luIiwiZm9udFdlaWdodCIsImhhbmRsZUluc3RhSWNvbkNsaWNrIiwid2luZG93Iiwib3BlbiIsIkhlYWRlciIsImNsYXNzZXMiLCJEcm9wRG93bk1lbnUiLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVCdXJnZXJJY29uQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQyxPQUFPO0FBQ2xDQyxZQUFVLEVBQUU7QUFDVkMsU0FBSyxFQUFFLHFCQURHO0FBRVY7QUFDQUMsVUFBTSxFQUFFLFFBSEU7QUFJVkMsY0FBVSxFQUFFO0FBSkY7QUFEc0IsQ0FBUCxDQUFELENBQTVCOztBQVNBLFNBQVNDLG9CQUFULEdBQWdDO0FBQzlCQyxRQUFNLENBQUNDLElBQVAsQ0FBWSw2Q0FBWjtBQUNEOztBQUVELE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CLFFBQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBRU0sb0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQWUsU0FBSyxFQUFDLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRUksT0FBTyxDQUFDUixVQUEvQjtBQUEyQyxXQUFPLEVBQUMsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FKRixFQU9FLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixDQURGO0FBYUQsQ0FmRDs7QUFpQkEsTUFBTVMsWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBTTtBQUFBLE9BQUNILElBQUQ7QUFBQSxPQUFPSTtBQUFQLE1BQWtCQyxzREFBUSxDQUFDLElBQUQsQ0FBaEM7O0FBRUEsV0FBU0MscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDO0FBQ3BDSCxXQUFPLENBQUNHLEtBQUssQ0FBQ0MsYUFBUCxDQUFQO0FBQ0Q7O0FBRUQsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkwsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUVFLHFCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFVLFNBQUssRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFDRSxNQUFFLEVBQUMsZUFETDtBQUVFLFlBQVEsRUFBRU4sSUFGWjtBQUdFLGVBQVcsTUFIYjtBQUlFLFFBQUksRUFBRVUsT0FBTyxDQUFDVixJQUFELENBSmY7QUFLRSxXQUFPLEVBQUVTLFdBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixFQVFFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixFQVNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBV0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsQ0FKRixDQURGO0FBb0JELENBL0JEOztBQWlDZVIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBCYXIsXG4gIFRvb2xiYXIsXG4gIFR5cG9ncmFwaHksXG4gIEJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICB0ZXh0U3R5bGVzOiB7XG4gICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICAgIC8vIG1hcmdpbkxlZnQ6IFwiNjBweFwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUluc3RhSWNvbkNsaWNrKCkge1xuICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20va3lsZWdhcnJldHRwaG90by9cIik7XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgIDxUb29sYmFyPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUluc3RhSWNvbkNsaWNrfT5cbiAgICAgICAgICA8SW5zdGFncmFtSWNvbiBjb2xvcj1cImFjdGlvblwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dFN0eWxlc30gdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgS3lsZSBHYXJyZXR0IFBob3RvZ3JhcGh5XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERyb3BEb3duTWVudSAvPlxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvQXBwQmFyPlxuICApO1xufTtcblxuY29uc3QgRHJvcERvd25NZW51ID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBmdW5jdGlvbiBoYW5kbGVCdXJnZXJJY29uQ2xpY2soZXZlbnQpIHtcbiAgICBzZXRPcGVuKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgc2V0T3BlbihudWxsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQnVyZ2VySWNvbkNsaWNrfT5cbiAgICAgICAgPE1lbnVJY29uIGNvbG9yPVwiYWN0aW9uXCIgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1lbnVcbiAgICAgICAgaWQ9XCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e29wZW59XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4ob3Blbil9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW0+Q2xpbWJpbmc8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0+UG9ydHJhaXRzPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtPk5vdCBDbGltYmluZzwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbT5BYm91dDwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbT5Db250YWN0PC9NZW51SXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./components/Theme.jsx":
/*!******************************!*\
  !*** ./components/Theme.jsx ***!
  \******************************/
/*! exports provided: theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/sam/Desktop/another-app/components/Theme.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: \"#607d8b\",\n      secondary: \"#263238\",\n      contrastText: \"rgba(117, 117, 117, 0.91)\"\n    },\n    text: {\n      primary: \"rgba(0, 0, 0, 0.87)\",\n      secondary: \"#b0bec5\"\n    },\n    accent1Color: \"#f44336\",\n    accent2Color: \"#f50057\",\n    accent3Color: \"#ff80ab\",\n    alternateTextColor: \"#ff5722\",\n    canvasColor: \"#90a4ae\",\n    borderColor: \"rgba(255, 255, 255, 0.87)\",\n    disabledColor: \"rgba(255, 255, 255, 0.47)\",\n    pickerHeaderColor: \"rgba(255, 255, 255, 0.18)\",\n    clockCircleColor: \"rgba(255, 255, 255, 0.24)\",\n    shadowColor: \"rgba(0, 0, 0, 0.75)\",\n    background: {\n      default: \"#607d8b\"\n    }\n  },\n  appBar: {\n    color: \"#607d8b\",\n    textColor: \"rgba(0, 0, 0, 0.87)\",\n    height: 67,\n    titleFontWeight: 400,\n    padding: 24\n  },\n  badge: {\n    color: \"#00acc1\",\n    fontWeight: 500,\n    textColor: \"rgba(0, 0, 0, 0.85)\",\n    primaryColor: \"rgba(96, 125, 139, 0.98)\",\n    primaryTextColor: \"rgba(255, 255, 255, 0.54)\"\n  },\n  button: {\n    height: 36,\n    minWidth: 88,\n    iconButtonSize: 48\n  },\n  card: {\n    titleColor: \"#263238\",\n    subtitleColor: \"rgba(0, 0, 0, 0.58)\",\n    fontWeight: 500\n  },\n  borderRadius: 4\n});\n\nconst Theme = ({\n  children\n}) => {\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RoZW1lLmpzeD83MDZjIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJjb250cmFzdFRleHQiLCJ0ZXh0IiwiYWNjZW50MUNvbG9yIiwiYWNjZW50MkNvbG9yIiwiYWNjZW50M0NvbG9yIiwiYWx0ZXJuYXRlVGV4dENvbG9yIiwiY2FudmFzQ29sb3IiLCJib3JkZXJDb2xvciIsImRpc2FibGVkQ29sb3IiLCJwaWNrZXJIZWFkZXJDb2xvciIsImNsb2NrQ2lyY2xlQ29sb3IiLCJzaGFkb3dDb2xvciIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwiYXBwQmFyIiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJoZWlnaHQiLCJ0aXRsZUZvbnRXZWlnaHQiLCJwYWRkaW5nIiwiYmFkZ2UiLCJmb250V2VpZ2h0IiwicHJpbWFyeUNvbG9yIiwicHJpbWFyeVRleHRDb2xvciIsImJ1dHRvbiIsIm1pbldpZHRoIiwiaWNvbkJ1dHRvblNpemUiLCJjYXJkIiwidGl0bGVDb2xvciIsInN1YnRpdGxlQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJUaGVtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxLQUFLLEdBQUdDLHdFQUFjLENBQUM7QUFDbENDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFLFNBREM7QUFFUEMsZUFBUyxFQUFFLFNBRko7QUFHUEMsa0JBQVksRUFBRTtBQUhQLEtBREY7QUFNUEMsUUFBSSxFQUFFO0FBQ0pKLGFBQU8sRUFBRSxxQkFETDtBQUVKRSxlQUFTLEVBQUU7QUFGUCxLQU5DO0FBVVBHLGdCQUFZLEVBQUUsU0FWUDtBQVdQQyxnQkFBWSxFQUFFLFNBWFA7QUFZUEMsZ0JBQVksRUFBRSxTQVpQO0FBYVBDLHNCQUFrQixFQUFFLFNBYmI7QUFjUEMsZUFBVyxFQUFFLFNBZE47QUFlUEMsZUFBVyxFQUFFLDJCQWZOO0FBZ0JQQyxpQkFBYSxFQUFFLDJCQWhCUjtBQWlCUEMscUJBQWlCLEVBQUUsMkJBakJaO0FBa0JQQyxvQkFBZ0IsRUFBRSwyQkFsQlg7QUFtQlBDLGVBQVcsRUFBRSxxQkFuQk47QUFvQlBDLGNBQVUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWDtBQXBCTCxHQUR5QjtBQXVCbENDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUUsU0FERDtBQUVOQyxhQUFTLEVBQUUscUJBRkw7QUFHTkMsVUFBTSxFQUFFLEVBSEY7QUFJTkMsbUJBQWUsRUFBRSxHQUpYO0FBS05DLFdBQU8sRUFBRTtBQUxILEdBdkIwQjtBQThCbENDLE9BQUssRUFBRTtBQUNMTCxTQUFLLEVBQUUsU0FERjtBQUVMTSxjQUFVLEVBQUUsR0FGUDtBQUdMTCxhQUFTLEVBQUUscUJBSE47QUFJTE0sZ0JBQVksRUFBRSwwQkFKVDtBQUtMQyxvQkFBZ0IsRUFBRTtBQUxiLEdBOUIyQjtBQXFDbENDLFFBQU0sRUFBRTtBQUNOUCxVQUFNLEVBQUUsRUFERjtBQUVOUSxZQUFRLEVBQUUsRUFGSjtBQUdOQyxrQkFBYyxFQUFFO0FBSFYsR0FyQzBCO0FBMENsQ0MsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxTQURSO0FBRUpDLGlCQUFhLEVBQUUscUJBRlg7QUFHSlIsY0FBVSxFQUFFO0FBSFIsR0ExQzRCO0FBK0NsQ1MsY0FBWSxFQUFFO0FBL0NvQixDQUFELENBQTVCOztBQWtEUCxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDOUIsU0FDRSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFdEMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdzQyxRQUZILENBREY7QUFNRCxDQVBEOztBQVFlRCxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGhlbWUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDc3NCYXNlTGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCIjNjA3ZDhiXCIsXG4gICAgICBzZWNvbmRhcnk6IFwiIzI2MzIzOFwiLFxuICAgICAgY29udHJhc3RUZXh0OiBcInJnYmEoMTE3LCAxMTcsIDExNywgMC45MSlcIixcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHByaW1hcnk6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICAgICAgc2Vjb25kYXJ5OiBcIiNiMGJlYzVcIixcbiAgICB9LFxuICAgIGFjY2VudDFDb2xvcjogXCIjZjQ0MzM2XCIsXG4gICAgYWNjZW50MkNvbG9yOiBcIiNmNTAwNTdcIixcbiAgICBhY2NlbnQzQ29sb3I6IFwiI2ZmODBhYlwiLFxuICAgIGFsdGVybmF0ZVRleHRDb2xvcjogXCIjZmY1NzIyXCIsXG4gICAgY2FudmFzQ29sb3I6IFwiIzkwYTRhZVwiLFxuICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NylcIixcbiAgICBkaXNhYmxlZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NylcIixcbiAgICBwaWNrZXJIZWFkZXJDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpXCIsXG4gICAgY2xvY2tDaXJjbGVDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpXCIsXG4gICAgc2hhZG93Q29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjc1KVwiLFxuICAgIGJhY2tncm91bmQ6IHsgZGVmYXVsdDogXCIjNjA3ZDhiXCIgfSxcbiAgfSxcbiAgYXBwQmFyOiB7XG4gICAgY29sb3I6IFwiIzYwN2Q4YlwiLFxuICAgIHRleHRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gICAgaGVpZ2h0OiA2NyxcbiAgICB0aXRsZUZvbnRXZWlnaHQ6IDQwMCxcbiAgICBwYWRkaW5nOiAyNCxcbiAgfSxcbiAgYmFkZ2U6IHtcbiAgICBjb2xvcjogXCIjMDBhY2MxXCIsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHRleHRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuODUpXCIsXG4gICAgcHJpbWFyeUNvbG9yOiBcInJnYmEoOTYsIDEyNSwgMTM5LCAwLjk4KVwiLFxuICAgIHByaW1hcnlUZXh0Q29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KVwiLFxuICB9LFxuICBidXR0b246IHtcbiAgICBoZWlnaHQ6IDM2LFxuICAgIG1pbldpZHRoOiA4OCxcbiAgICBpY29uQnV0dG9uU2l6ZTogNDgsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICB0aXRsZUNvbG9yOiBcIiMyNjMyMzhcIixcbiAgICBzdWJ0aXRsZUNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC41OClcIixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gIH0sXG4gIGJvcmRlclJhZGl1czogNCxcbn0pO1xuXG5jb25zdCBUaGVtZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENzc0Jhc2VMaW5lIC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Theme.jsx\n");

/***/ }),

/***/ "./node_modules/fontsource-roboto/index.css":
/*!**************************************************!*\
  !*** ./node_modules/fontsource-roboto/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9mb250c291cmNlLXJvYm90by9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/fontsource-roboto/index.css\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontsource-roboto */ \"./node_modules/fontsource-roboto/index.css\");\n/* harmony import */ var fontsource_roboto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fontsource_roboto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Theme */ \"./components/Theme.jsx\");\nvar _jsxFileName = \"/Users/sam/Desktop/another-app/pages/_app.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_components_Theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxTQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJmb250c291cmNlLXJvYm90b1wiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9jb21wb25lbnRzL1RoZW1lXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Instagram\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtXCI/NjkzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Instagram\n");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiPzhlZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Menu\n");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI/ZmQ4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/styles\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });