/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/_app.js\",\"import\":\"Montserrat\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-mont\"}],\"variableName\":\"montserrat\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.js\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-mont\\\"}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Footer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\".concat((next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_5___default().variable), \" font-mont bg-light w-full min-h-screen\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Footer__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                        fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/snehasahu/Desktop/code/Sneha-Sahu/src/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTU1BO0FBTm1DO0FBQ0E7QUFDWDtBQUVGO0FBTWIsU0FBU0ksSUFBSSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCO0lBQzFCLHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ0k7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBVyxHQUF1QixPQUFwQmQseUxBQW1CLEVBQUM7O2tDQUN0Qyw4REFBQ0UsMERBQU1BOzs7OztrQ0FDUCw4REFBQ0c7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O2tDQUN4Qiw4REFBQ0wsMkRBQU1BOzs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztLQWR1QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgTW9udHNlcnJhdCB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IG1vbnRzZXJyYXQgPSBNb250c2VycmF0KHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHZhcmlhYmxlOiBcIi0tZm9udC1tb250XCIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YCR7bW9udHNlcnJhdC52YXJpYWJsZX0gZm9udC1tb250IGJnLWxpZ2h0IHctZnVsbCBtaW4taC1zY3JlZW5gfT5cbiAgICAgICAgPE5hdkJhci8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW9udHNlcnJhdCIsIkZvb3RlciIsIk5hdkJhciIsIkhlYWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJ2YXJpYWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});