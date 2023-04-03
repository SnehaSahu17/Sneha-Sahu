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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _public_images_projects_maze_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/projects/maze.png */ \"./public/images/projects/maze.png\");\n\n\n\n\n\nfunction Carousel() {\n    const scrollLeft = ()=>{\n        document.getElementById(\"content\").scrollLeft -= 400;\n    };\n    const scrollRight = ()=>{\n        document.getElementById(\"content\").scrollLeft += 400;\n    };\n    const project = [\n        {\n            key: 1,\n            src: \"maze\",\n            title: \" maze runner\",\n            techstack\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \" Other Projects\",\n                className: \"mb-10 text-5xl mt-10\"\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-0 top-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollLeft,\n                        className: \"p-2 m-2 rounded-full bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronLeft, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: scrollRight,\n                        className: \"p-2 m-2 rounded-full bg-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiChevronRight, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"content\",\n                className: \"carousel p-8 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _public_images_projects_maze_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            title: \"maze runner\",\n                            techstack: [\n                                \"HTML\",\n                                \"CSS\",\n                                \"Javascript\"\n                            ]\n                        }, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Carousel.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUNoQjtBQUNxQztBQUNQO0FBRXhELFNBQVNLLFdBQVc7SUFFcEIsTUFBTUMsYUFBYSxJQUFNO1FBQ3JCQyxTQUFTQyxjQUFjLENBQUMsV0FBV0YsVUFBVSxJQUFJO0lBQ3JEO0lBQ0EsTUFBTUcsY0FBYyxJQUFNO1FBQ3RCRixTQUFTQyxjQUFjLENBQUMsV0FBV0YsVUFBVSxJQUFJO0lBQ3JEO0lBRUEsTUFBTUksVUFBVTtRQUNYO1lBQ0VDLEtBQUs7WUFDTEMsS0FBSTtZQUNKQyxPQUFNO1lBQ05DO1FBQ0Y7S0FDQTtJQUVILHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2hCLHFEQUFZQTtnQkFBQ2lCLE1BQUs7Z0JBQWtCRCxXQUFVOzs7Ozs7MEJBQy9DLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFPQyxTQUFTYjt3QkFBWVUsV0FBVTtrQ0FDckMsNEVBQUNiLHlEQUFhQTs7Ozs7Ozs7OztrQ0FFaEIsOERBQUNlO3dCQUFPQyxTQUFTVjt3QkFBYU8sV0FBVTtrQ0FDdEMsNEVBQUNkLDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkIsOERBQUNhO2dCQUFJSyxJQUFHO2dCQUFVSixXQUFVOztrQ0FDMUIsOERBQUNEO2tDQUNDLDRFQUFDZCw2Q0FBSUE7NEJBQUNXLEtBQUtSLHdFQUFJQTs0QkFBRVMsT0FBTTs0QkFBY0MsV0FBVztnQ0FBQztnQ0FBTztnQ0FBTTs2QkFBYTs7Ozs7Ozs7Ozs7a0NBRTdFLDhEQUFDQztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7O2tDQUVQLDhEQUFDYztrQ0FDQyw0RUFBQ2QsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7S0EvRFNJO0FBaUVULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsLmpzP2NjMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiLi9BbmltYXRlZFRleHRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7IEZpQ2hldnJvblJpZ2h0LCBGaUNoZXZyb25MZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgbWF6ZSBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9wcm9qZWN0cy9tYXplLnBuZ1wiXG5cbmZ1bmN0aW9uIENhcm91c2VsKCkge1xuXG5jb25zdCBzY3JvbGxMZWZ0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5zY3JvbGxMZWZ0IC09IDQwMDtcbn1cbmNvbnN0IHNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5zY3JvbGxMZWZ0ICs9IDQwMDtcbn1cblxuY29uc3QgcHJvamVjdCA9IFtcbiAgICAge1xuICAgICAgIGtleTogMSxcbiAgICAgICBzcmM6XCJtYXplXCIsXG4gICAgICAgdGl0bGU6XCIgbWF6ZSBydW5uZXJcIixcbiAgICAgICB0ZWNoc3RhY2sgXG4gICAgIH0sXG4gICAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIiBPdGhlciBQcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm1iLTEwIHRleHQtNXhsIG10LTEwXCIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC01IFwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbExlZnR9IGNsYXNzTmFtZT1cInAtMiBtLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPEZpQ2hldnJvbkxlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsUmlnaHR9IGNsYXNzTmFtZT1cInAtMiBtLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImNhcm91c2VsIHAtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IG92ZXJmbG93LXgtYXV0byBzY3JvbGwtc21vb3RoIHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENhcmQgc3JjPXttYXplfSB0aXRsZT1cIm1hemUgcnVubmVyXCIgdGVjaHN0YWNrPXtbXCJIVE1MXCIsXCJDU1NcIixcIkphdmFzY3JpcHRcIl19IC8+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiQ2FyZCIsIkZpQ2hldnJvblJpZ2h0IiwiRmlDaGV2cm9uTGVmdCIsIm1hemUiLCJDYXJvdXNlbCIsInNjcm9sbExlZnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsUmlnaHQiLCJwcm9qZWN0Iiwia2V5Iiwic3JjIiwidGl0bGUiLCJ0ZWNoc3RhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Carousel.js\n"));

/***/ })

});