"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLoginHandler; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\n/* harmony import */ var _components_NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../testData/testStoresData */ \"./testData/testStoresData.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction DashboardLoginHandler() {\n    var CheckLogin = function CheckLogin() {\n        if (!walletSession.isLoaded) {\n            return;\n        }\n        while(!walletSession.isLoaded){}\n        if (walletSession.walletAddress) {\n            router.push('/dashboard');\n        } else {\n            router.push('/');\n        }\n    };\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.walletAddress\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.isLoaded\n    ]);\n    if (walletSession.walletAddress) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashboard, {}, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading . . .\"\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this));\n    }\n};\n_s(DashboardLoginHandler, \"Oh4K/u280KuTL08TR1zGnZQE/Lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = DashboardLoginHandler;\nfunction Dashboard() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), selectedStore = ref[0], setSelectedStore = ref[1]; //{ storeName: 'My New Store' })\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full items-center bg-background h-full space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__.TopSpacer, {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__.DashboardNavBar, {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-full w-full max-w-[90rem] space-y-8 px-6 md:px-14\",\n                children: [\n                    selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setSelectedStore();\n                                },\n                                className: \"nunito-font font-black text-4xl text-mainBlack/50 hover:text-mainBlack transition-all\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 62,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-4xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineChevronRight, {}, void 0, false, {\n                                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"nunito-font font-black text-4xl\",\n                                children: selectedStore.storeName ? selectedStore.storeName : 'Unnamed Store'\n                            }, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"nunito-font font-black text-4xl\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, this),\n                    selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardStoreContent, {}, void 0, false, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 80,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardMainContent, {}, void 0, false, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 82,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this));\n}\n_s1(Dashboard, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c1 = Dashboard;\nfunction DashboardMainContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"nunito-font text-2xl font-black pt-4\",\n                children: \"My Stores\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StoresList, {\n                stores: (_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default())\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this));\n}\n_c2 = DashboardMainContent;\nfunction StoresList(param) {\n    var stores = param.stores;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-12 grid gap-32 nft-grid\",\n        children: stores.map(function(store) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallStoreDisplay, {\n                logoUri: store.logoUri,\n                subdomain: store.subdomain,\n                name: store.name,\n                owner: store.owner,\n                colourInHex: store.colourInHex\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 106,\n                columnNumber: 25\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, this));\n} //<div className=\"pb-12 grid gap-8 nft-grid scrollbar\">\n_c3 = StoresList;\n//<div className=\"flex space-x-8 overflow-x-scroll p-8\">\nfunction SmallStoreDisplay(param) {\n    var logoUri = param.logoUri, subdomain = param.subdomain, name = param.name, owner = param.owner, colourInHex = param.colourInHex;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-shrink-0 w-96 bg-white p-4 rounded-2xl shadow-high\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"https://cloudflare-ipfs.com/ipfs/\".concat(logoUri),\n            className: \"flex aspect-square flex-shrink-0 rounded-xl\"\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 118,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 117,\n        columnNumber: 9\n    }, this));\n}\n_c4 = SmallStoreDisplay;\nfunction DashboardStoreContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"store\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 125,\n        columnNumber: 9\n    }, this));\n}\n_c5 = DashboardStoreContent;\nfunction DashboardTabs() {}\n_c6 = DashboardTabs;\nfunction EditStoreMetadata() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 137,\n        columnNumber: 9\n    }, this));\n}\n_c7 = EditStoreMetadata;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"DashboardLoginHandler\");\n$RefreshReg$(_c1, \"Dashboard\");\n$RefreshReg$(_c2, \"DashboardMainContent\");\n$RefreshReg$(_c3, \"StoresList\");\n$RefreshReg$(_c4, \"SmallStoreDisplay\");\n$RefreshReg$(_c5, \"DashboardStoreContent\");\n$RefreshReg$(_c6, \"DashboardTabs\");\n$RefreshReg$(_c7, \"EditStoreMetadata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7U0FJYkMsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixNQUFNLDZFQUNEdkIsQ0FBRzs7Ozs7QUFJWixDQUFDO01BTlF1QixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzBlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxzL1dhbGxldFNlc3Npb25Qcm92aWRlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9nb1wiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCdXR0b25cIjtcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuaW1wb3J0IHRlc3RTdG9yZXNEYXRhIGZyb20gXCIuLi90ZXN0RGF0YS90ZXN0U3RvcmVzRGF0YVwiO1xuaW1wb3J0IHsgRGFzaGJvYXJkTmF2QmFyLCBUb3BTcGFjZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkTG9naW5IYW5kbGVyKCkge1xuXG4gICAgY29uc3Qgd2FsbGV0U2Vzc2lvbiA9IHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBmdW5jdGlvbiBDaGVja0xvZ2luKCkge1xuICAgICAgICBpZiAoIXdhbGxldFNlc3Npb24uaXNMb2FkZWQpIHsgcmV0dXJuIH1cblxuICAgICAgICB3aGlsZSAoIXdhbGxldFNlc3Npb24uaXNMb2FkZWQpIHsgfVxuXG4gICAgICAgIGlmICh3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIENoZWNrTG9naW4oKVxuICAgIH0sIFt3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3NdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQ2hlY2tMb2dpbigpXG4gICAgfSwgW3dhbGxldFNlc3Npb24uaXNMb2FkZWRdKVxuXG4gICAgaWYgKHdhbGxldFNlc3Npb24ud2FsbGV0QWRkcmVzcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERhc2hib2FyZCAvPlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9hZGluZyAuIC4gLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFN0b3JlLCBzZXRTZWxlY3RlZFN0b3JlXSA9IHVzZVN0YXRlKCk7ICAvL3sgc3RvcmVOYW1lOiAnTXkgTmV3IFN0b3JlJyB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIgYmctYmFja2dyb3VuZCBoLWZ1bGwgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8VG9wU3BhY2VyIC8+XG4gICAgICAgICAgICA8RGFzaGJvYXJkTmF2QmFyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbCBtYXgtdy1bOTByZW1dIHNwYWNlLXktOCBweC02IG1kOnB4LTE0XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN0b3JlKCl9IGNsYXNzTmFtZT1cIm51bml0by1mb250IGZvbnQtYmxhY2sgdGV4dC00eGwgdGV4dC1tYWluQmxhY2svNTAgaG92ZXI6dGV4dC1tYWluQmxhY2sgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhpT3V0bGluZUNoZXZyb25SaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW5pdG8tZm9udCBmb250LWJsYWNrIHRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFN0b3JlLnN0b3JlTmFtZSA/IHNlbGVjdGVkU3RvcmUuc3RvcmVOYW1lIDogJ1VubmFtZWQgU3RvcmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVuaXRvLWZvbnQgZm9udC1ibGFjayB0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRTdG9yZUNvbnRlbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRNYWluQ29udGVudCAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZE1haW5Db250ZW50KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW5pdG8tZm9udCB0ZXh0LTJ4bCBmb250LWJsYWNrIHB0LTRcIj5cbiAgICAgICAgICAgICAgICBNeSBTdG9yZXNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxTdG9yZXNMaXN0IHN0b3Jlcz17dGVzdFN0b3Jlc0RhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3RvcmVzTGlzdCh7IHN0b3JlcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMiBncmlkIGdhcC0zMiBuZnQtZ3JpZFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0b3Jlcy5tYXAoc3RvcmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNtYWxsU3RvcmVEaXNwbGF5IGxvZ29Vcmk9e3N0b3JlLmxvZ29Vcml9IHN1YmRvbWFpbj17c3RvcmUuc3ViZG9tYWlufSBuYW1lPXtzdG9yZS5uYW1lfSBvd25lcj17c3RvcmUub3duZXJ9IGNvbG91ckluSGV4PXtzdG9yZS5jb2xvdXJJbkhleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0vLzxkaXYgY2xhc3NOYW1lPVwicGItMTIgZ3JpZCBnYXAtOCBuZnQtZ3JpZCBzY3JvbGxiYXJcIj5cbi8vPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOCBvdmVyZmxvdy14LXNjcm9sbCBwLThcIj5cblxuZnVuY3Rpb24gU21hbGxTdG9yZURpc3BsYXkoeyBsb2dvVXJpLCBzdWJkb21haW4sIG5hbWUsIG93bmVyLCBjb2xvdXJJbkhleCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc2hyaW5rLTAgdy05NiBiZy13aGl0ZSBwLTQgcm91bmRlZC0yeGwgc2hhZG93LWhpZ2hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9jbG91ZGZsYXJlLWlwZnMuY29tL2lwZnMvJHtsb2dvVXJpfWB9IGNsYXNzTmFtZT1cImZsZXggYXNwZWN0LXNxdWFyZSBmbGV4LXNocmluay0wIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZFN0b3JlQ29udGVudCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmRUYWJzKCkge1xuXG59XG5cbmZ1bmN0aW9uIEVkaXRTdG9yZU1ldGFkYXRhKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJXYWxsZXRDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9nbyIsIk5hdkJ1dHRvbiIsIkhpT3V0bGluZUNoZXZyb25SaWdodCIsInRlc3RTdG9yZXNEYXRhIiwiRGFzaGJvYXJkTmF2QmFyIiwiVG9wU3BhY2VyIiwiRGFzaGJvYXJkTG9naW5IYW5kbGVyIiwiQ2hlY2tMb2dpbiIsIndhbGxldFNlc3Npb24iLCJpc0xvYWRlZCIsIndhbGxldEFkZHJlc3MiLCJyb3V0ZXIiLCJwdXNoIiwiRGFzaGJvYXJkIiwiZGl2Iiwic2VsZWN0ZWRTdG9yZSIsInNldFNlbGVjdGVkU3RvcmUiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInN0b3JlTmFtZSIsIkRhc2hib2FyZFN0b3JlQ29udGVudCIsIkRhc2hib2FyZE1haW5Db250ZW50IiwiU3RvcmVzTGlzdCIsInN0b3JlcyIsIm1hcCIsInN0b3JlIiwiU21hbGxTdG9yZURpc3BsYXkiLCJsb2dvVXJpIiwic3ViZG9tYWluIiwibmFtZSIsIm93bmVyIiwiY29sb3VySW5IZXgiLCJpbWciLCJzcmMiLCJEYXNoYm9hcmRUYWJzIiwiRWRpdFN0b3JlTWV0YWRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});