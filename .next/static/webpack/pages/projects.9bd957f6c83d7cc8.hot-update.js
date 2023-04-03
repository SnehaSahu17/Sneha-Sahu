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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _public_images_projects_maze_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/projects/maze.png */ \"./public/images/projects/maze.png\");\n\n\n\n\n\nfunction Carousel() {\n    const scrollLeft = ()=>{\n        document.getElementById(\"content\").scrollLeft -= 400;\n    };\n    const scrollRight = ()=>{\n        document.getElementById(\"content\").scrollLeft += 400;\n    };\n    const color1 = \"\";\n    const color2 = \"\";\n    const color3 = \"\";\n    const techstack = [\n        \"\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \" Other Projects\",\n                className: \"mb-10 text-5xl mt-10\"\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-0 top-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollLeft,\n                        className: \"p-2 m-2 rounded-full bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronLeft, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollRight,\n                        className: \"p-2 m-2 rounded-full bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronRight, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"content\",\n                className: \"carousel p-8 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _public_images_projects_maze_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            title: \"maze runner\",\n                            techstack: (\"HTML\", \"Jav\")\n                        }, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNoQjtBQUNxQztBQUNQO0FBRXhELFNBQVNLLFdBQVc7SUFFcEIsTUFBTUMsYUFBYSxJQUFNO1FBQ3JCQyxTQUFTQyxjQUFjLENBQUMsV0FBV0YsVUFBVSxJQUFJO0lBQ3JEO0lBQ0EsTUFBTUcsY0FBYyxJQUFNO1FBQ3RCRixTQUFTQyxjQUFjLENBQUMsV0FBV0YsVUFBVSxJQUFJO0lBQ3JEO0lBRUEsTUFBTUksU0FBTztJQUNiLE1BQU1DLFNBQU87SUFDYixNQUFNQyxTQUFPO0lBQ2IsTUFBTUMsWUFBVztRQUFDO0tBQUc7SUFFbkIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZixxREFBWUE7Z0JBQUNnQixNQUFLO2dCQUFrQkQsV0FBVTs7Ozs7OzBCQUMvQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBT0MsU0FBU1o7d0JBQVlTLFdBQVU7a0NBQ3JDLDRFQUFDWix5REFBYUE7Ozs7Ozs7Ozs7a0NBRWhCLDhEQUFDYzt3QkFBT0MsU0FBU1Q7d0JBQWFNLFdBQVU7a0NBQ3RDLDRFQUFDYiwwREFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDWTtnQkFBSUssSUFBRztnQkFBVUosV0FBVTs7a0NBQzFCLDhEQUFDRDtrQ0FDQyw0RUFBQ2IsNkNBQUlBOzRCQUFDbUIsS0FBS2hCLHdFQUFJQTs0QkFBRWlCLE9BQU07NEJBQWNSLFdBQVcsU0FBYSxLQUFLOzs7Ozs7Ozs7OztrQ0FFcEUsOERBQUNDO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNhO2tDQUNDLDRFQUFDYiw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtLQTNEU0k7QUE2RFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/Y2MxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCIuL0FuaW1hdGVkVGV4dFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHsgRmlDaGV2cm9uUmlnaHQsIEZpQ2hldnJvbkxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBtYXplIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2plY3RzL21hemUucG5nXCJcblxuZnVuY3Rpb24gQ2Fyb3VzZWwoKSB7XG5cbmNvbnN0IHNjcm9sbExlZnQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnNjcm9sbExlZnQgLT0gNDAwO1xufVxuY29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLnNjcm9sbExlZnQgKz0gNDAwO1xufVxuXG5jb25zdCBjb2xvcjE9XCJcIjtcbmNvbnN0IGNvbG9yMj1cIlwiO1xuY29uc3QgY29sb3IzPVwiXCI7XG5jb25zdCB0ZWNoc3RhY2sgPVtcIlwiXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIiBPdGhlciBQcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtNXhsIG10LTEwXCIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC01IFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbExlZnR9IGNsYXNzTmFtZT1cInAtMiBtLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPEZpQ2hldnJvbkxlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsUmlnaHR9IGNsYXNzTmFtZT1cInAtMiBtLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImNhcm91c2VsIHAtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IG92ZXJmbG93LXgtYXV0byBzY3JvbGwtc21vb3RoIHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENhcmQgc3JjPXttYXplfSB0aXRsZT1cIm1hemUgcnVubmVyXCIgdGVjaHN0YWNrPXtcIkhUTUxcIixcIkNTU1wiLFwiSmF2XCJ9IC8+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiQ2FyZCIsIkZpQ2hldnJvblJpZ2h0IiwiRmlDaGV2cm9uTGVmdCIsIm1hemUiLCJDYXJvdXNlbCIsInNjcm9sbExlZnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsUmlnaHQiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJ0ZWNoc3RhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsImlkIiwic3JjIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Carousel.js\n"));

/***/ })

});