"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 1\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singelword = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 sm: flex items-center justify-center text-center overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"\".concat(className, \" inline-block w-full text-dark dark:text-light font-bold text-8xl capitalize\"),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singelword,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/AnimatedText.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/AnimatedText.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/AnimatedText.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNXO0FBRXBDLE1BQU1FLFFBQU87SUFDVEMsU0FBUztRQUNMQyxTQUFRO0lBQ1o7SUFDQUMsU0FBUTtRQUNKRCxTQUFRO1FBQ1JFLFlBQVk7WUFDUkMsT0FBTTtZQUNOQyxpQkFBZ0I7UUFDcEI7SUFDSjtBQUNKO0FBQ0EsTUFBTUMsYUFBWTtJQUNkTixTQUFTO1FBQ0xDLFNBQVE7UUFDUk0sR0FBRTtJQUNOO0lBQ0FMLFNBQVE7UUFDSkQsU0FBUTtRQUNSTSxHQUFFO1FBQ0ZKLFlBQVk7WUFDUkssVUFBUztRQUNiO0lBQ0o7QUFDSjtBQUlBLE1BQU1DLGVBQWUsU0FBc0I7UUFBckIsRUFBQ0MsS0FBSSxFQUFDQyxVQUFTLEVBQUM7SUFDcEMscUJBQ0UsOERBQUNDO1FBQUlELFdBQVU7a0JBQ1gsNEVBQUNiLG9EQUFTO1lBQUNhLFdBQVcsR0FBYSxPQUFWQSxXQUFVO1lBQStFRyxVQUFVZjtZQUMzSEMsU0FBUTtZQUFVRSxTQUFRO3NCQUVuQlEsS0FBS0ssS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxzQkFDdEIsOERBQUNwQixzREFBVztvQkFBc0JhLFdBQVU7b0JBQWVHLFVBQVVSOzt3QkFDaEVXO3dCQUFLOzttQkFEUUEsT0FBSyxNQUFJQzs7Ozs7Ozs7Ozs7Ozs7O0FBUS9DO0tBZk1UO0FBaUJOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGV4dC5qcz80YzE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmNvbnN0IHF1b3RlID17XG4gICAgaW5pdGlhbDoge1xuICAgICAgICBvcGFjaXR5OjEsXG4gICAgfSxcbiAgICBhbmltYXRlOntcbiAgICAgICAgb3BhY2l0eToxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkZWxheTowLjUsXG4gICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46MC4wOCxcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IHNpbmdlbHdvcmQgPXtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIG9wYWNpdHk6MCxcbiAgICAgICAgeTo1MFxuICAgIH0sXG4gICAgYW5pbWF0ZTp7XG4gICAgICAgIG9wYWNpdHk6MSxcbiAgICAgICAgeTowLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkdXJhdGlvbjoxLFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKHt0ZXh0LGNsYXNzTmFtZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG14LWF1dG8gcHktMiBzbTogZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgICAgPG1vdGlvbi5oMSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LWRhcmsgZGFyazp0ZXh0LWxpZ2h0IGZvbnQtYm9sZCB0ZXh0LTh4bCBjYXBpdGFsaXplYH0gdmFyaWFudHM9e3F1b3RlfVxuICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPVwiYW5pbWF0ZVwiICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dC5zcGxpdChcIiBcIikubWFwKCh3b3JkLGluZGV4KT0+IFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW4ga2V5PXt3b3JkK1wiLVwiK2luZGV4fSBjbGFzc05hbWU9J2lubGluZS1ibG9jaycgdmFyaWFudHM9e3NpbmdlbHdvcmR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwicXVvdGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzaW5nZWx3b3JkIiwieSIsImR1cmF0aW9uIiwiQW5pbWF0ZWRUZXh0IiwidGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidmFyaWFudHMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});