"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/components/Carousel.js":
/*!************************************!*\
  !*** ./src/components/Carousel.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _public_images_projects_maze_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/projects/maze.png */ \"./public/images/projects/maze.png\");\n\n\n\n\n\nconst project = [\n    {\n        key: 1,\n        img: \"maze\",\n        title: \" maze runner\",\n        techstack: [\n            \"HTML\",\n            \"CSS\",\n            \"Javascript\"\n        ]\n    }\n];\nfunction Carousel(param) {\n    let { project  } = param;\n    const scrollLeft = ()=>{\n        document.getElementById(\"content\").scrollLeft -= 400;\n    };\n    const scrollRight = ()=>{\n        document.getElementById(\"content\").scrollLeft += 400;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \" Other Projects\",\n                className: \"mb-10 text-5xl mt-10\"\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-0 top-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollLeft,\n                        className: \"p-2 m-2 rounded-full bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronLeft, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollRight,\n                        className: \"p-2 m-2 rounded-full bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronRight, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"content\",\n                className: \"carousel p-8 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide\",\n                children: [\n                    projproject.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: img,\n                            title: title,\n                            techstack: techstack\n                        }, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNoQjtBQUNxQztBQUNQO0FBRXhELE1BQU1LLFVBQVU7SUFDZDtRQUNFQyxLQUFLO1FBQ0xDLEtBQUk7UUFDSkMsT0FBTTtRQUNOQyxXQUFVO1lBQUM7WUFBTztZQUFNO1NBQWE7SUFDdkM7Q0FDQTtBQUNGLFNBQVNDLFNBQVMsS0FBUyxFQUFFO1FBQVgsRUFBQ0wsUUFBTyxFQUFDLEdBQVQ7SUFFbEIsTUFBTU0sYUFBYSxJQUFNO1FBQ3JCQyxTQUFTQyxjQUFjLENBQUMsV0FBV0YsVUFBVSxJQUFJO0lBQ3JEO0lBQ0EsTUFBTUcsY0FBYyxJQUFNO1FBQ3RCRixTQUFTQyxjQUFjLENBQUMsV0FBV0YsVUFBVSxJQUFJO0lBQ3JEO0lBRUUscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDaEIscURBQVlBO2dCQUFDaUIsTUFBSztnQkFBa0JELFdBQVU7Ozs7OzswQkFDL0MsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU9DLFNBQVNSO3dCQUFZSyxXQUFVO2tDQUNyQyw0RUFBQ2IseURBQWFBOzs7Ozs7Ozs7O2tDQUVoQiw4REFBQ2U7d0JBQU9DLFNBQVNMO3dCQUFhRSxXQUFVO2tDQUN0Qyw0RUFBQ2QsMERBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQ2E7Z0JBQUlLLElBQUc7Z0JBQVVKLFdBQVU7O29CQUV4QkssWUFBWUMsR0FBRyxDQUFDLENBQUNqQix3QkFDakIsOERBQUNKLDZDQUFJQTs0QkFBQ3NCLEtBQUtoQjs0QkFBS0MsT0FBT0E7NEJBQU9DLFdBQVdBOzs7Ozs7b0JBQ3hDOzs7Ozs7Ozs7Ozs7O0FBSVg7S0E1QlNDO0FBOEJULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsLmpzP2NjMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiLi9BbmltYXRlZFRleHRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7IEZpQ2hldnJvblJpZ2h0LCBGaUNoZXZyb25MZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgbWF6ZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wcm9qZWN0cy9tYXplLnBuZ1wiXG5cbmNvbnN0IHByb2plY3QgPSBbXG4gIHtcbiAgICBrZXk6IDEsXG4gICAgaW1nOlwibWF6ZVwiLFxuICAgIHRpdGxlOlwiIG1hemUgcnVubmVyXCIsXG4gICAgdGVjaHN0YWNrOltcIkhUTUxcIixcIkNTU1wiLFwiSmF2YXNjcmlwdFwiXSAsIFxuICB9LFxuIF07XG5mdW5jdGlvbiBDYXJvdXNlbCh7cHJvamVjdH0pIHtcblxuY29uc3Qgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc2Nyb2xsTGVmdCAtPSA0MDA7XG59XG5jb25zdCBzY3JvbGxSaWdodCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc2Nyb2xsTGVmdCArPSA0MDA7XG59XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8QW5pbWF0ZWRUZXh0IHRleHQ9XCIgT3RoZXIgUHJvamVjdHNcIiBjbGFzc05hbWU9XCJtYi0xMCB0ZXh0LTV4bCBtdC0xMFwiLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtNSBcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzY3JvbGxMZWZ0fSBjbGFzc05hbWU9XCJwLTIgbS0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxGaUNoZXZyb25MZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFJpZ2h0fSBjbGFzc05hbWU9XCJwLTIgbS0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxGaUNoZXZyb25SaWdodCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBwLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsLXNtb290aCBzY3JvbGxiYXItaGlkZVwiPlxuICAgICAgICBcbiAgICAgICAgeyBwcm9qcHJvamVjdC5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICA8Q2FyZCBzcmM9e2ltZ30gdGl0bGU9e3RpdGxlfSB0ZWNoc3RhY2s9e3RlY2hzdGFja30gLz4gXG4gICAgICAgICkpfTtcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJuYW1lcyI6WyJBbmltYXRlZFRleHQiLCJDYXJkIiwiRmlDaGV2cm9uUmlnaHQiLCJGaUNoZXZyb25MZWZ0IiwibWF6ZSIsInByb2plY3QiLCJrZXkiLCJpbWciLCJ0aXRsZSIsInRlY2hzdGFjayIsIkNhcm91c2VsIiwic2Nyb2xsTGVmdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxSaWdodCIsImRpdiIsImNsYXNzTmFtZSIsInRleHQiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJwcm9qcHJvamVjdCIsIm1hcCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carousel.js\n"));

/***/ })

});