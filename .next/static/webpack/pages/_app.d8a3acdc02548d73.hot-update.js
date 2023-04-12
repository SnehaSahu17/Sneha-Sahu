"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute h-[1px] bg-dark dark:bg-light inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setmode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-start justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex-col justify-center items-center hidden lg:flex\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"rotate-45 translate-y-2.5\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 \".concat(isOpen ? \"-rotate-45 -translate-y-0\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-fflex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/\",\n                                title: \"Home\",\n                                className: \"mr-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/about\",\n                                title: \"About\",\n                                className: \"mx-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                                href: \"/projects\",\n                                title: \"Projects\",\n                                className: \"ml-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex items-center justify-center flex-wrap \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://github.com/SnehaSahu17\",\n                                target: \"_blank\",\n                                className: \"w-6 mr-3 dark:text-light\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://www.linkedin.com/in/sneha-sahu-7117691b7/\",\n                                target: \"_blank\",\n                                className: \"w-6 mx-3\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"https://twitter.com/SSneha1712\",\n                                target: \"_blank\",\n                                className: \"w-6 mx-3\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                                href: \"/\",\n                                target: \"_blank\",\n                                className: \"w-6 ml-3\",\n                                whileHover: {\n                                    y: -2\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 79,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setmode(mode === \"light\" ? \"dark\" : \"light\");\n                                },\n                                className: \"ml-4 flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark\",\n                                children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                                    className: \"fill-dark\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"EfIVtUfYHwe2/zhlLTG/C3le/9U=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNULDhEQUFDYiwyQ0FBT0E7b0NBQUNRLFdBQVc7Ozs7OzhEQUNwQiw4REFBQ0osNENBQVFBO29DQUFDSSxXQUFXOzs7Ozs2Q0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVd6Qyw4REFBQ2E7Z0JBQUliLFdBQVU7MEJBQ2IsNEVBQUNiLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0lBbEZNaUI7O1FBRW1CVCwrREFBZ0JBOzs7TUFGbkNTO0FBb0ZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBEcmliYmJsZUljb24sIEdpdGh1Ykljb24sIExpbmtlZEluSWNvbiwgU3VuSWNvbiwgVHdpdHRlckljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB1c2VUaGVtZVN3aXRjaGVyIGZyb20gXCIuL2hvb2tzL3VzZVRoZW1lU3dpdGNoZXJcIjtcbmltcG9ydCB7IE1vb25JY29uIH0gZnJvbSBcIi4vSWNvbnNcIjtcblxuY29uc3QgQ3VzdG9tTGluayA9ICh7IGhyZWYsIHRpdGxlLCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHJlbGF0aXZlIGdyb3VwYH0+XG4gICAgICB7dGl0bGV9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBoLVsxcHhdIGJnLWRhcmsgZGFyazpiZy1saWdodCBpbmxpbmUtYmxvY2sgbGVmdC0wIC1ib3R0b20tMC41IGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2l0aW9uLVt3aWR0aF0gZWFzZSBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBocmVmID8gXCJ3LWZ1bGxcIiA6IFwidy0wXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgICZuYnNwO1xuICAgICAgPC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcblxuICBjb25zdCBbbW9kZSxzZXRtb2RlXSA9IHVzZVRoZW1lU3dpdGNoZXIoKTtcbiAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dPXVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMzIgcHktOCBmb250LW1lZGl1bSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBkYXJrOnRleHQtbGlnaHRcIj5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaGlkZGVuIGxnOmZsZXhcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgYmxvY2sgaC0wLjUgdy02IHJvdW5kZWQtc20gICR7aXNPcGVuID8gJ3JvdGF0ZS00NSB0cmFuc2xhdGUteS0yLjUnIDogJy10cmFuc2xhdGUteS0wLjUnfWB9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctZGFyayBkYXJrOmJnLWxpZ2h0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBibG9jayBoLTAuNSB3LTYgcm91bmRlZC1zbSBteS0wLjUgJHtpc09wZW4gPyAnb3BhY2l0eS0wJyA6ICdvcGFjaXR5LTEwMCd9YH0+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGJsb2NrIGgtMC41IHctNiByb3VuZGVkLXNtIHRyYW5zbGF0ZS15LTAuNSAke2lzT3BlbiA/ICctcm90YXRlLTQ1IC10cmFuc2xhdGUteS0wJyA6ICd0cmFuc2xhdGUteS0wLjUnfWB9Pjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZmZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8bmF2ID5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9cIiB0aXRsZT1cIkhvbWVcIiBjbGFzc05hbWU9XCJtci00XCIgLz5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiQWJvdXRcIiBjbGFzc05hbWU9XCJteC00XCIgLz5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHRpdGxlPVwiUHJvamVjdHNcIiBjbGFzc05hbWU9XCJtbC00XCIgLz5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBcIj5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TbmVoYVNhaHUxN1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXItMyBkYXJrOnRleHQtbGlnaHRcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICA8R2l0aHViSWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NuZWhhLXNhaHUtNzExNzY5MWI3L1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rZWRJbkljb24gLz5cbiAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU1NuZWhhMTcxMlwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXgtM1wiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPXtcIi9cIn1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtbC0zXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPERyaWJiYmxlSWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0bW9kZShtb2RlPT09XCJsaWdodFwiP1wiZGFya1wiOlwibGlnaHRcIil9fSBjbGFzc05hbWU9XCJtbC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBwLTEgZGFyazpiZy1saWdodCBkYXJrOnRleHQtZGFya1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vZGUgPT09IFwiZGFya1wiID9cbiAgICAgICAgICAgIDxTdW5JY29uIGNsYXNzTmFtZT17XCJmaWxsLWRhcmtcIn0vPiA6XG4gICAgICAgICAgICA8TW9vbkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifS8+XG5cbiAgICAgICAgICB9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG5cbiAgICAgXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV1cIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTG9nbyIsInVzZVJvdXRlciIsIkRyaWJiYmxlSWNvbiIsIkdpdGh1Ykljb24iLCJMaW5rZWRJbkljb24iLCJTdW5JY29uIiwiVHdpdHRlckljb24iLCJtb3Rpb24iLCJ1c2VUaGVtZVN3aXRjaGVyIiwiTW9vbkljb24iLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsIm1vZGUiLCJzZXRtb2RlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlQ2xpY2siLCJoZWFkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2IiwibmF2IiwiYSIsInRhcmdldCIsIndoaWxlSG92ZXIiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});