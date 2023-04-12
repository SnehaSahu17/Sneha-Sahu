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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useThemeSwitcher */ \"./src/components/hooks/useThemeSwitcher.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute h-[1px] bg-dark dark:bg-light inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    _s1();\n    const [mode, setmode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-start justify-between dark:text-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex flex-col justify-center items-center\",\n                onClick: handleClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm  \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm translate-y-0.5 \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://github.com/SnehaSahu17\",\n                        target: \"_blank\",\n                        className: \"w-6 mr-3 dark:text-light\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://www.linkedin.com/in/sneha-sahu-7117691b7/\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedInIcon, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"https://twitter.com/SSneha1712\",\n                        target: \"_blank\",\n                        className: \"w-6 mx-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.a, {\n                        href: \"/\",\n                        target: \"_blank\",\n                        className: \"w-6 ml-3\",\n                        whileHover: {\n                            y: -2\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.DribbbleIcon, {}, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setmode(mode === \"light\" ? \"dark\" : \"light\");\n                        },\n                        className: \"ml-4 flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark\",\n                        children: mode === \"dark\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.MoonIcon, {\n                            className: \"fill-dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/components/NavBar.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(NavBar, \"EfIVtUfYHwe2/zhlLTG/C3le/9U=\", false, function() {\n    return [\n        _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDZDtBQUNjO0FBQytDO0FBQ2hEO0FBQ2lCO0FBQ3JCO0FBRW5DLE1BQU1hLGFBQWEsU0FBcUM7UUFBcEMsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFdBQVksR0FBRSxFQUFFOztJQUNqRCxNQUFNQyxTQUFTYixzREFBU0E7SUFDeEIscUJBQ0UsOERBQUNKLGtEQUFJQTtRQUFDYyxNQUFNQTtRQUFNRSxXQUFXLEdBQWEsT0FBVkEsV0FBVTs7WUFDdkNEOzBCQUNELDhEQUFDRztnQkFDQ0YsV0FBVyxrSUFFVixPQURDQyxPQUFPRSxNQUFNLEtBQUtMLE9BQU8sV0FBVyxLQUFLOzBCQUU1Qzs7Ozs7Ozs7Ozs7O0FBS1A7R0FkTUQ7O1FBQ1dULGtEQUFTQTs7O0tBRHBCUztBQWdCTixNQUFNTyxTQUFTLElBQU07O0lBRW5CLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFHWCxtRUFBZ0JBO0lBQ3ZDLE1BQU0sQ0FBQ1ksUUFBT0MsVUFBVSxHQUFDdEIsK0NBQVFBLENBQUMsS0FBSztJQUV2QyxNQUFNdUIsY0FBYyxJQUFNO1FBQ3hCRCxVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0c7UUFBT1YsV0FBVTs7MEJBRWhCLDhEQUFDVztnQkFBT1gsV0FBVTtnQkFBNENZLFNBQVNIOztrQ0FDckUsOERBQUNQO3dCQUFLRixXQUFXLGlGQUF5SSxPQUF4RE8sU0FBUyw0QkFBNEIsa0JBQWtCOzs7Ozs7a0NBQ3pKLDhEQUFDTDt3QkFBS0YsV0FBVyx1RkFBNEgsT0FBckNPLFNBQVMsY0FBYyxhQUFhOzs7Ozs7a0NBQzVJLDhEQUFDTDt3QkFBS0YsV0FBVyxnR0FBeUosT0FBekRPLFNBQVMsOEJBQThCLGlCQUFpQjs7Ozs7Ozs7Ozs7OzBCQUUzSyw4REFBQ007O2tDQUNDLDhEQUFDaEI7d0JBQVdDLE1BQUs7d0JBQUlDLE9BQU07d0JBQU9DLFdBQVU7Ozs7OztrQ0FDNUMsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFTQyxPQUFNO3dCQUFRQyxXQUFVOzs7Ozs7a0NBQ2xELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBV0MsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUcxRCw4REFBQ2E7Z0JBQUliLFdBQVU7O2tDQUNiLDhEQUFDTixtREFBUTt3QkFDUEksTUFBSzt3QkFDTGlCLFFBQU87d0JBQ1BmLFdBQVU7d0JBQ1ZnQixZQUFZOzRCQUFFQyxHQUFHLENBQUM7d0JBQUU7d0JBQ3BCQyxVQUFVOzRCQUFFQyxPQUFPO3dCQUFJO2tDQUV2Qiw0RUFBQzdCLDhDQUFVQTs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0ksbURBQVE7d0JBQ1BJLE1BQUs7d0JBQ0xpQixRQUFPO3dCQUNQZixXQUFVO3dCQUNWZ0IsWUFBWTs0QkFBRUMsR0FBRyxDQUFDO3dCQUFFO3dCQUNwQkMsVUFBVTs0QkFBRUMsT0FBTzt3QkFBSTtrQ0FFdkIsNEVBQUM1QixnREFBWUE7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNHLG1EQUFRO3dCQUNQSSxNQUFLO3dCQUNMaUIsUUFBTzt3QkFDUGYsV0FBVTt3QkFDVmdCLFlBQVk7NEJBQUVDLEdBQUcsQ0FBQzt3QkFBRTt3QkFDcEJDLFVBQVU7NEJBQUVDLE9BQU87d0JBQUk7a0NBRXZCLDRFQUFDMUIsK0NBQVdBOzs7Ozs7Ozs7O2tDQUVkLDhEQUFDQyxtREFBUTt3QkFDUEksTUFBTTt3QkFDTmlCLFFBQU87d0JBQ1BmLFdBQVU7d0JBQ1ZnQixZQUFZOzRCQUFFQyxHQUFHLENBQUM7d0JBQUU7d0JBQ3BCQyxVQUFVOzRCQUFFQyxPQUFPO3dCQUFJO2tDQUV2Qiw0RUFBQzlCLGdEQUFZQTs7Ozs7Ozs7OztrQ0FFZiw4REFBQ3NCO3dCQUFPQyxTQUFTLElBQU07NEJBQUVOLFFBQVFELFNBQU8sVUFBUSxTQUFPLE9BQU87d0JBQUM7d0JBQUdMLFdBQVU7a0NBRXhFSyxTQUFTLHVCQUNULDhEQUFDYiwyQ0FBT0E7NEJBQUNRLFdBQVc7Ozs7O3NEQUNwQiw4REFBQ0osNENBQVFBOzRCQUFDSSxXQUFXOzs7OztxQ0FBYzs7Ozs7Ozs7Ozs7OzBCQU16Qyw4REFBQ29CO2dCQUFJcEIsV0FBVTswQkFDYiw0RUFBQ2IsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7SUEzRU1pQjs7UUFFbUJULCtEQUFnQkE7OztNQUZuQ1M7QUE2RU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzPzZiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IERyaWJiYmxlSWNvbiwgR2l0aHViSWNvbiwgTGlua2VkSW5JY29uLCBTdW5JY29uLCBUd2l0dGVySWNvbiB9IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHVzZVRoZW1lU3dpdGNoZXIgZnJvbSBcIi4vaG9va3MvdXNlVGhlbWVTd2l0Y2hlclwiO1xuaW1wb3J0IHsgTW9vbkljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xuXG5jb25zdCBDdXN0b21MaW5rID0gKHsgaHJlZiwgdGl0bGUsIGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcmVsYXRpdmUgZ3JvdXBgfT5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGgtWzFweF0gYmctZGFyayBkYXJrOmJnLWxpZ2h0IGlubGluZS1ibG9jayBsZWZ0LTAgLWJvdHRvbS0wLjUgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgIHJvdXRlci5hc1BhdGggPT09IGhyZWYgPyBcInctZnVsbFwiIDogXCJ3LTBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L3NwYW4+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttb2RlLHNldG1vZGVdID0gdXNlVGhlbWVTd2l0Y2hlcigpO1xuICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl09dXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1saWdodFwiPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJsb2NrIGgtMC41IHctNiByb3VuZGVkLXNtICAke2lzT3BlbiA/ICdyb3RhdGUtNDUgdHJhbnNsYXRlLXktMScgOiAnLXRyYW5zbGF0ZS15LTAuNSd9YH0+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1kYXJrIGRhcms6YmctbGlnaHQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJsb2NrIGgtMC41IHctNiByb3VuZGVkLXNtIG15LTAuNSAke2lzT3BlbiA/ICdvcGFjaXR5LTAnIDogJ29wYWNpdHktMTAwJ31gfT48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWRhcmsgZGFyazpiZy1saWdodCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYmxvY2sgaC0wLjUgdy02IHJvdW5kZWQtc20gdHJhbnNsYXRlLXktMC41ICR7aXNPcGVuID8gJy1yb3RhdGUtNDUgLXRyYW5zbGF0ZS15LTEnIDogJ3RyYW5zbGF0ZS15LTAuNSd9YH0+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8bmF2PlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT1cIm1yLTRcIiAvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgdGl0bGU9XCJBYm91dFwiIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzTmFtZT1cIm1sLTRcIiAvPlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIFwiPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NuZWhhU2FodTE3XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci0zIGRhcms6dGV4dC1saWdodFwiXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxHaXRodWJJY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc25laGEtc2FodS03MTE3NjkxYjcvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtlZEluSWNvbiAvPlxuICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TU25laGExNzEyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBteC0zXCJcbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1sLTNcIlxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgID5cbiAgICAgICAgICA8RHJpYmJibGVJY29uIC8+XG4gICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyBzZXRtb2RlKG1vZGU9PT1cImxpZ2h0XCI/XCJkYXJrXCI6XCJsaWdodFwiKX19IGNsYXNzTmFtZT1cIm1sLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIHAtMSBkYXJrOmJnLWxpZ2h0IGRhcms6dGV4dC1kYXJrXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbW9kZSA9PT0gXCJkYXJrXCIgP1xuICAgICAgICAgICAgPFN1bkljb24gY2xhc3NOYW1lPXtcImZpbGwtZGFya1wifS8+IDpcbiAgICAgICAgICAgIDxNb29uSWNvbiBjbGFzc05hbWU9e1wiZmlsbC1kYXJrXCJ9Lz5cblxuICAgICAgICAgIH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25hdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MCVdIHRvcC0yIHRyYW5zbGF0ZS14LVstNTAlXVwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dvIiwidXNlUm91dGVyIiwiRHJpYmJibGVJY29uIiwiR2l0aHViSWNvbiIsIkxpbmtlZEluSWNvbiIsIlN1bkljb24iLCJUd2l0dGVySWNvbiIsIm1vdGlvbiIsInVzZVRoZW1lU3dpdGNoZXIiLCJNb29uSWNvbiIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwibW9kZSIsInNldG1vZGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVDbGljayIsImhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJhIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInkiLCJ3aGlsZVRhcCIsInNjYWxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});