"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/TransitionEffect.js":
/*!********************************************!*\
  !*** ./src/components/TransitionEffect.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction TransitionEffect() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                exit: {\n                    x: [\n                        \"0%\",\n                        \"100%\"\n                    ],\n                    width\n                },\n                transition: {\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/TransitionEffect.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/TransitionEffect.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.4,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/TransitionEffect.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = TransitionEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransitionEffect);\nvar _c;\n$RefreshReg$(_c, \"TransitionEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDVztBQUVwQyxTQUFTRSxtQkFBbUI7SUFDMUIscUJBQ0U7OzBCQUNBLDhEQUFDRCxxREFBVTtnQkFBQ0csV0FBVTtnQkFDVkMsU0FBUztvQkFBQ0MsR0FBRTtvQkFBT0MsT0FBTTtnQkFBTTtnQkFDL0JDLFNBQVM7b0JBQUNGLEdBQUU7b0JBQUtDLE9BQU07Z0JBQUk7Z0JBQzNCRSxNQUFNO29CQUFDSCxHQUFFO3dCQUFDO3dCQUFLO3FCQUFPO29CQUFDQztnQkFBSztnQkFDNUJHLFlBQVk7b0JBQUNDLFVBQVM7b0JBQUlDLE1BQUs7Z0JBQVc7Ozs7OzswQkFDdEQsOERBQUNYLHFEQUFVO2dCQUFDRyxXQUFVO2dCQUNWQyxTQUFTO29CQUFDQyxHQUFFO29CQUFPQyxPQUFNO2dCQUFNO2dCQUMvQkMsU0FBUztvQkFBQ0YsR0FBRTtvQkFBS0MsT0FBTTtnQkFBSTtnQkFDM0JHLFlBQVk7b0JBQUNHLE9BQU07b0JBQUlGLFVBQVM7b0JBQUlDLE1BQUs7Z0JBQVc7Ozs7OzswQkFDaEUsOERBQUNYLHFEQUFVO2dCQUFDRyxXQUFVO2dCQUNWQyxTQUFTO29CQUFDQyxHQUFFO29CQUFPQyxPQUFNO2dCQUFNO2dCQUMvQkMsU0FBUztvQkFBQ0YsR0FBRTtvQkFBS0MsT0FBTTtnQkFBSTtnQkFDM0JHLFlBQVk7b0JBQUNHLE9BQU07b0JBQUlGLFVBQVM7b0JBQUlDLE1BQUs7Z0JBQVc7Ozs7Ozs7O0FBS3BFO0tBcEJTVjtBQXNCVCwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RyYW5zaXRpb25FZmZlY3QuanM/MTYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZnVuY3Rpb24gVHJhbnNpdGlvbkVmZmVjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBoLXNjcmVlbiB6LTMwIGJnLXByaW1hcnknXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e3g6XCIxMDAlXCIsd2lkdGg6XCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3t4OlwiMCVcIix3aWR0aDpcIjAlXCJ9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3t4OltcIjAlXCIsXCIxMDAlXCJdLHdpZHRofX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246MC44LGVhc2U6XCJlYXNlSW5PdXRcIn19Lz5cbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9J2ZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0yMCBiZy1saWdodCdcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7eDpcIjEwMCVcIix3aWR0aDpcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e3g6XCIwJVwiLHdpZHRoOlwiMCVcIn19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2RlbGF5OjAuMixkdXJhdGlvbjowLjgsZWFzZTpcImVhc2VJbk91dFwifX0vPlxuICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZml4ZWQgdG9wLTAgYm90dG9tLTAgcmlnaHQtZnVsbCB3LXNjcmVlbiBoLXNjcmVlbiB6LTEwIGJnLWRhcmsnXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e3g6XCIxMDAlXCIsd2lkdGg6XCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3t4OlwiMCVcIix3aWR0aDpcIjAlXCJ9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkZWxheTowLjQsZHVyYXRpb246MC44LGVhc2U6XCJlYXNlSW5PdXRcIn19Lz5cblxuICAgIFxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb25FZmZlY3QiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJUcmFuc2l0aW9uRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIngiLCJ3aWR0aCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.js\n"));

/***/ })

});