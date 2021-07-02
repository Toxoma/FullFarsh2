/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGlo"]("main",{

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupContent = document.querySelector('.popup-content'),\n      popupBtns = document.querySelectorAll('.popup-btn'),\n      inputs = popupContent.querySelectorAll('input');\n  popup.style.display = 'block';\n  popup.style.transform = 'translateY(-100%)';\n  popupContent.style.transform = 'translateX(-100%)';\n\n  var popupTransition = function popupTransition(value) {\n    popupContent.style.transition = \"\".concat(value);\n    popupBtns.forEach(function (btn) {\n      return btn.addEventListener('click', function () {\n        popupContent.style.transform = 'translateX(0%)';\n        popup.style.transform = 'translateY(0%)';\n      });\n    });\n  };\n\n  var timoutsPopup = [];\n\n  var sizePopup = function sizePopup() {\n    timoutsPopup.push(setTimeout(function () {\n      timoutsPopup.forEach(function (item) {\n        return clearTimeout(item);\n      });\n\n      if (window.innerWidth >= 768) {\n        popupTransition('1s');\n      } else {\n        popupTransition('');\n      }\n    }, 500));\n  };\n\n  sizePopup();\n  window.addEventListener('resize', sizePopup);\n  popup.addEventListener('click', function (e) {\n    var target = e.target;\n\n    var close = function close() {\n      popup.style.transform = 'translateY(-100%)';\n      popupContent.style.transform = 'translateX(-100%)';\n      inputs.forEach(function (input) {\n        input.value = '';\n      });\n    };\n\n    if (target.classList.contains('popup-close')) {\n      close();\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        close();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3DGlo/./src/modules/togglePopUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f903f65906bc7e44d120")
/******/ })();
/******/ 
/******/ }
);