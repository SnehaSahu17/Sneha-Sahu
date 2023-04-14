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

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n\n\n\n\nconst Skill = (param)=>{\n    let { name , x , y  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg \",\n        whileHover: {\n            scale: 1.05\n        },\n        initial: {\n            x: 0,\n            y: 0\n        },\n        whileInView: {\n            x: x,\n            y: y\n        },\n        transition: {\n            duration: 1.5\n        },\n        viewport: {\n            once: true\n        },\n        children: name\n    }, void 0, false, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Skill;\nconst Skills = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                text: \"Skills \",\n                className: \"mb-10 !text-8xl !mt-20 md:!text-6xl md:!mt-32\"\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                lineNumber: 23,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"flex items-center justify-center rounded-full font-semibold bg-dark text-light  p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light \",\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        children: \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"HTML\",\n                        x: \"-25vw\",\n                        y: \"2vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"CSS\",\n                        x: \"-5vw\",\n                        y: \"-10vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"Javascript\",\n                        x: \"25vw\",\n                        y: \"1vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"Tailwind CSS\",\n                        x: \"0vw\",\n                        y: \"12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"Bootstrap5\",\n                        x: \"-20vw\",\n                        y: \"-15vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"React JS\",\n                        x: \"15vw\",\n                        y: \"-12vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"Next JS\",\n                        x: \"0vw\",\n                        y: \"-22vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                        name: \"Github\",\n                        x: \"-32vw\",\n                        y: \"-5vw\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/Skills.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c1 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1;\n$RefreshReg$(_c, \"Skill\");\n$RefreshReg$(_c1, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNjO0FBRXJELE1BQU1HLFFBQVEsU0FBb0I7UUFBbkIsRUFBRUMsS0FBSSxFQUFFQyxFQUFDLEVBQUVDLEVBQUMsRUFBRTtJQUMzQixxQkFDRSw4REFBQ0wscURBQVU7UUFDVE8sV0FBVTtRQUNWQyxZQUFZO1lBQUVDLE9BQU87UUFBSztRQUMxQkMsU0FBUztZQUFFTixHQUFHO1lBQUdDLEdBQUc7UUFBRTtRQUN0Qk0sYUFBYTtZQUFFUCxHQUFHQTtZQUFHQyxHQUFHQTtRQUFFO1FBQzFCTyxZQUFZO1lBQUVDLFVBQVU7UUFBRztRQUMzQkMsVUFBVTtZQUFDQyxNQUFLLElBQUk7UUFBQTtrQkFFbkJaOzs7Ozs7QUFHUDtLQWJNRDtBQWVOLE1BQU1jLFNBQVMsSUFBTTtJQUNuQixxQkFDRTs7MEJBQ0MsOERBQUNmLGdFQUFZQTtnQkFBQ2dCLE1BQUs7Z0JBQVVWLFdBQVU7Ozs7OzswQkFFdEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1AscURBQVU7d0JBQ1RPLFdBQVU7d0JBQ1ZDLFlBQVk7NEJBQUVDLE9BQU87d0JBQUs7a0NBQzNCOzs7Ozs7a0NBR0QsOERBQUNQO3dCQUFNQyxNQUFLO3dCQUFPQyxHQUFFO3dCQUFRQyxHQUFFOzs7Ozs7a0NBQy9CLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBTUMsR0FBRTt3QkFBT0MsR0FBRTs7Ozs7O2tDQUM3Qiw4REFBQ0g7d0JBQU1DLE1BQUs7d0JBQWFDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDcEMsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFlQyxHQUFFO3dCQUFNQyxHQUFFOzs7Ozs7a0NBQ3JDLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBYUMsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7O2tDQUNyQyw4REFBQ0g7d0JBQU1DLE1BQUs7d0JBQVdDLEdBQUU7d0JBQU9DLEdBQUU7Ozs7OztrQ0FDbEMsOERBQUNIO3dCQUFNQyxNQUFLO3dCQUFVQyxHQUFFO3dCQUFNQyxHQUFFOzs7Ozs7a0NBQ2hDLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBU0MsR0FBRTt3QkFBUUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7QUFJekM7TUF2Qk1XO0FBeUJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qcz9lMWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0XCI7XG5cbmNvbnN0IFNraWxsID0gKHsgbmFtZSwgeCwgeSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIGJnLWRhcmsgdGV4dC1saWdodCBweS0zIHB4LTYgc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgIGRhcms6YmctbGlnaHQgZGFyazp0ZXh0LWRhcmsgZGFyazpzaGFkb3ctbGlnaHQgbGc6cHktMiBsZzpweC00IG1kOnRleHQtc20gbWQ6cHktMS41IG1kOnB4LTMgeHM6YmcgXCJcbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgIGluaXRpYWw9e3sgeDogMCwgeTogMCB9fVxuICAgICAgd2hpbGVJblZpZXc9e3sgeDogeCwgeTogeSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS41fX1cbiAgICAgIHZpZXdwb3J0PXt7b25jZTp0cnVlfX1cbiAgICA+XG4gICAgICB7bmFtZX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBTa2lsbHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPEFuaW1hdGVkVGV4dCB0ZXh0PVwiU2tpbGxzIFwiIGNsYXNzTmFtZT1cIm1iLTEwICF0ZXh0LTh4bCAhbXQtMjAgbWQ6IXRleHQtNnhsIG1kOiFtdC0zMlwiIC8+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1jaXJjdWxhckxpZ2h0IGRhcms6YmctY2lyY3VsYXJEYXJrXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgYmctZGFyayB0ZXh0LWxpZ2h0ICBwLTggc2hhZG93LWRhcmsgY3Vyc29yLXBvaW50ZXIgZGFyazpiZy1saWdodCBkYXJrOnRleHQtZGFyayBkYXJrOnNoYWRvdy1saWdodCBcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFdlYlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxTa2lsbCBuYW1lPVwiSFRNTFwiIHg9XCItMjV2d1wiIHk9XCIydndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIkNTU1wiIHg9XCItNXZ3XCIgeT1cIi0xMHZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJKYXZhc2NyaXB0XCIgeD1cIjI1dndcIiB5PVwiMXZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJUYWlsd2luZCBDU1NcIiB4PVwiMHZ3XCIgeT1cIjEydndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIkJvb3RzdHJhcDVcIiB4PVwiLTIwdndcIiB5PVwiLTE1dndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIlJlYWN0IEpTXCIgeD1cIjE1dndcIiB5PVwiLTEydndcIiAvPlxuICAgICAgICA8U2tpbGwgbmFtZT1cIk5leHQgSlNcIiB4PVwiMHZ3XCIgeT1cIi0yMnZ3XCIgLz5cbiAgICAgICAgPFNraWxsIG5hbWU9XCJHaXRodWJcIiB4PVwiLTMydndcIiB5PVwiLTV2d1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiQW5pbWF0ZWRUZXh0IiwiU2tpbGwiLCJuYW1lIiwieCIsInkiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJTa2lsbHMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Skills.js\n"));

/***/ })

});