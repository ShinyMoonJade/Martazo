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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLoginHandler; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\n/* harmony import */ var _components_NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../testData/testStoresData */ \"./testData/testStoresData.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction DashboardLoginHandler() {\n    var CheckLogin = function CheckLogin() {\n        if (!walletSession.isLoaded) {\n            return;\n        }\n        while(!walletSession.isLoaded){}\n        if (walletSession.walletAddress) {\n            router.push('/dashboard');\n        } else {\n            router.push('/');\n        }\n    };\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.walletAddress\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.isLoaded\n    ]);\n    if (walletSession.walletAddress) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashboard, {}, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading . . .\"\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this));\n    }\n};\n_s(DashboardLoginHandler, \"Oh4K/u280KuTL08TR1zGnZQE/Lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = DashboardLoginHandler;\nfunction Dashboard() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), selectedStore = ref[0], setSelectedStore = ref[1]; //{ storeName: 'My New Store' })\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full items-center bg-background h-full space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__.TopSpacer, {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__.DashboardNavBar, {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-full w-full max-w-[90rem] space-y-8 px-6 md:px-14\",\n                children: [\n                    selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setSelectedStore();\n                                },\n                                className: \"nunito-font font-black text-4xl text-mainBlack/50 hover:text-mainBlack transition-all\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 62,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-4xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineChevronRight, {}, void 0, false, {\n                                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"nunito-font font-black text-4xl\",\n                                children: selectedStore.storeName ? selectedStore.storeName : 'Unnamed Store'\n                            }, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 68,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"nunito-font font-black text-4xl\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, this),\n                    selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardStoreContent, {}, void 0, false, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 80,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardMainContent, {\n                        setSelectedStore: setSelectedStore\n                    }, void 0, false, {\n                        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                        lineNumber: 82,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this));\n}\n_s1(Dashboard, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c1 = Dashboard;\nfunction DashboardMainContent(param) {\n    var setSelectedStore = param.setSelectedStore;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"nunito-font text-2xl font-black\",\n                children: \"My Stores\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StoresList, {\n                stores: (_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default()),\n                setSelectedStore: setSelectedStore\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this));\n}\n_c2 = DashboardMainContent;\nfunction StoresList(param) {\n    var stores = param.stores, setSelectedStore = param.setSelectedStore;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-12 grid gap-8 store-grid\",\n        children: stores.map(function(store) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallStoreDisplay, {\n                logoUri: store.logoUri,\n                subdomain: store.subdomain,\n                name: store.name,\n                owner: store.owner,\n                colourInHex: store.colourInHex,\n                setSelectedStore: setSelectedStore\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 106,\n                columnNumber: 25\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, this));\n} //<div className=\"pb-12 grid gap-8 nft-grid scrollbar\">\n_c3 = StoresList;\n//<div className=\"flex space-x-8 overflow-x-scroll p-8\">\nfunction SmallStoreDisplay(param) {\n    var logoUri = param.logoUri, subdomain = param.subdomain, name = param.name, owner = param.owner, colourInHex = param.colourInHex, setSelectedStore = param.setSelectedStore;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"flex aspect-square w-full bg-white p-4 rounded-2xl shadow-low hover:shadow-high hover:scale-105 transition-all\",\n        onClick: function() {\n            setSelectedStore(name);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://cloudflare-ipfs.com/ipfs/\".concat(logoUri),\n                className: \"flex aspect-square flex-shrink-0 rounded-xl\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 117,\n        columnNumber: 9\n    }, this));\n}\n_c4 = SmallStoreDisplay;\nfunction DashboardStoreContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"store\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 131,\n        columnNumber: 9\n    }, this));\n}\n_c5 = DashboardStoreContent;\nfunction DashboardTabs() {}\n_c6 = DashboardTabs;\nfunction EditStoreMetadata() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 143,\n        columnNumber: 9\n    }, this));\n}\n_c7 = EditStoreMetadata;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"DashboardLoginHandler\");\n$RefreshReg$(_c1, \"Dashboard\");\n$RefreshReg$(_c2, \"DashboardMainContent\");\n$RefreshReg$(_c3, \"StoresList\");\n$RefreshReg$(_c4, \"SmallStoreDisplay\");\n$RefreshReg$(_c5, \"DashboardStoreContent\");\n$RefreshReg$(_c6, \"DashboardTabs\");\n$RefreshReg$(_c7, \"EditStoreMetadata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFnSDtRQUMxSEUsT0FBTyxFQUFFLFFBQ3pCLEdBRCtCLENBQUM7WUFDWkgsZ0JBQWdCLENBQUNlLElBQUk7UUFDekIsQ0FBQzs7d0ZBQ0pHLENBQUc7Z0JBQUNDLEdBQUcsRUFBRyxDQUFpQyxtQ0FBVSxPQUFSTixPQUFPO2dCQUFJWixTQUFTLEVBQUMsQ0FBNkM7Ozs7Ozt3RkFDL0dHLENBQUM7MEJBQ0dXLElBQUk7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDO01BWlFILGlCQUFpQjtTQWNqQk4scUJBQXFCLEdBQUcsQ0FBQztJQUM5QixNQUFNLDZFQUNEUixDQUFHO2tCQUFDLENBRUw7Ozs7OztBQUVSLENBQUM7TUFOUVEscUJBQXFCO1NBUXJCYyxhQUFhLEdBQUcsQ0FBQyxDQUV6QjtNQUZRQSxhQUFhO1NBSWJDLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsTUFBTSw2RUFDRHZCLENBQUc7Ozs7O0FBSVosQ0FBQztNQU5RdUIsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgV2FsbGV0Q29udGV4dCB9IGZyb20gXCIuLi91dGlscy9XYWxsZXRTZXNzaW9uUHJvdmlkZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ29cIjtcbmltcG9ydCBOYXZCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QnV0dG9uXCI7XG5pbXBvcnQgeyBIaU91dGxpbmVDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmltcG9ydCB0ZXN0U3RvcmVzRGF0YSBmcm9tIFwiLi4vdGVzdERhdGEvdGVzdFN0b3Jlc0RhdGFcIjtcbmltcG9ydCB7IERhc2hib2FyZE5hdkJhciwgVG9wU3BhY2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZExvZ2luSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHdhbGxldFNlc3Npb24gPSB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgZnVuY3Rpb24gQ2hlY2tMb2dpbigpIHtcbiAgICAgICAgaWYgKCF3YWxsZXRTZXNzaW9uLmlzTG9hZGVkKSB7IHJldHVybiB9XG5cbiAgICAgICAgd2hpbGUgKCF3YWxsZXRTZXNzaW9uLmlzTG9hZGVkKSB7IH1cblxuICAgICAgICBpZiAod2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBDaGVja0xvZ2luKClcbiAgICB9LCBbd2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIENoZWNrTG9naW4oKVxuICAgIH0sIFt3YWxsZXRTZXNzaW9uLmlzTG9hZGVkXSlcblxuICAgIGlmICh3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEYXNoYm9hcmQgLz5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvYWRpbmcgLiAuIC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRTdG9yZSwgc2V0U2VsZWN0ZWRTdG9yZV0gPSB1c2VTdGF0ZSgpOyAgLy97IHN0b3JlTmFtZTogJ015IE5ldyBTdG9yZScgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGJnLWJhY2tncm91bmQgaC1mdWxsIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPFRvcFNwYWNlciAvPlxuICAgICAgICAgICAgPERhc2hib2FyZE5hdkJhciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgbWF4LXctWzkwcmVtXSBzcGFjZS15LTggcHgtNiBtZDpweC0xNFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTdG9yZSgpfSBjbGFzc05hbWU9XCJudW5pdG8tZm9udCBmb250LWJsYWNrIHRleHQtNHhsIHRleHQtbWFpbkJsYWNrLzUwIGhvdmVyOnRleHQtbWFpbkJsYWNrIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaU91dGxpbmVDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVuaXRvLWZvbnQgZm9udC1ibGFjayB0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTdG9yZS5zdG9yZU5hbWUgPyBzZWxlY3RlZFN0b3JlLnN0b3JlTmFtZSA6ICdVbm5hbWVkIFN0b3JlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bml0by1mb250IGZvbnQtYmxhY2sgdGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkU3RvcmVDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkTWFpbkNvbnRlbnQgc2V0U2VsZWN0ZWRTdG9yZT17c2V0U2VsZWN0ZWRTdG9yZX0gLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmRNYWluQ29udGVudCh7IHNldFNlbGVjdGVkU3RvcmUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bml0by1mb250IHRleHQtMnhsIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICBNeSBTdG9yZXNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxTdG9yZXNMaXN0IHN0b3Jlcz17dGVzdFN0b3Jlc0RhdGF9IHNldFNlbGVjdGVkU3RvcmU9e3NldFNlbGVjdGVkU3RvcmV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3RvcmVzTGlzdCh7IHN0b3Jlcywgc2V0U2VsZWN0ZWRTdG9yZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMiBncmlkIGdhcC04IHN0b3JlLWdyaWRcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdG9yZXMubWFwKHN0b3JlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbFN0b3JlRGlzcGxheSBsb2dvVXJpPXtzdG9yZS5sb2dvVXJpfSBzdWJkb21haW49e3N0b3JlLnN1YmRvbWFpbn0gbmFtZT17c3RvcmUubmFtZX0gb3duZXI9e3N0b3JlLm93bmVyfSBjb2xvdXJJbkhleD17c3RvcmUuY29sb3VySW5IZXh9IHNldFNlbGVjdGVkU3RvcmU9e3NldFNlbGVjdGVkU3RvcmV9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Ly88ZGl2IGNsYXNzTmFtZT1cInBiLTEyIGdyaWQgZ2FwLTggbmZ0LWdyaWQgc2Nyb2xsYmFyXCI+XG4vLzxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTggb3ZlcmZsb3cteC1zY3JvbGwgcC04XCI+XG5cbmZ1bmN0aW9uIFNtYWxsU3RvcmVEaXNwbGF5KHsgbG9nb1VyaSwgc3ViZG9tYWluLCBuYW1lLCBvd25lciwgY29sb3VySW5IZXgsIHNldFNlbGVjdGVkU3RvcmUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBhc3BlY3Qtc3F1YXJlIHctZnVsbCBiZy13aGl0ZSBwLTQgcm91bmRlZC0yeGwgc2hhZG93LWxvdyBob3ZlcjpzaGFkb3ctaGlnaCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRTdG9yZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9jbG91ZGZsYXJlLWlwZnMuY29tL2lwZnMvJHtsb2dvVXJpfWB9IGNsYXNzTmFtZT1cImZsZXggYXNwZWN0LXNxdWFyZSBmbGV4LXNocmluay0wIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cblxuZnVuY3Rpb24gRGFzaGJvYXJkU3RvcmVDb250ZW50KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZFRhYnMoKSB7XG5cbn1cblxuZnVuY3Rpb24gRWRpdFN0b3JlTWV0YWRhdGEoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIldhbGxldENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMb2dvIiwiTmF2QnV0dG9uIiwiSGlPdXRsaW5lQ2hldnJvblJpZ2h0IiwidGVzdFN0b3Jlc0RhdGEiLCJEYXNoYm9hcmROYXZCYXIiLCJUb3BTcGFjZXIiLCJEYXNoYm9hcmRMb2dpbkhhbmRsZXIiLCJDaGVja0xvZ2luIiwid2FsbGV0U2Vzc2lvbiIsImlzTG9hZGVkIiwid2FsbGV0QWRkcmVzcyIsInJvdXRlciIsInB1c2giLCJEYXNoYm9hcmQiLCJkaXYiLCJzZWxlY3RlZFN0b3JlIiwic2V0U2VsZWN0ZWRTdG9yZSIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwic3RvcmVOYW1lIiwiRGFzaGJvYXJkU3RvcmVDb250ZW50IiwiRGFzaGJvYXJkTWFpbkNvbnRlbnQiLCJTdG9yZXNMaXN0Iiwic3RvcmVzIiwibWFwIiwic3RvcmUiLCJTbWFsbFN0b3JlRGlzcGxheSIsImxvZ29VcmkiLCJzdWJkb21haW4iLCJuYW1lIiwib3duZXIiLCJjb2xvdXJJbkhleCIsImltZyIsInNyYyIsIkRhc2hib2FyZFRhYnMiLCJFZGl0U3RvcmVNZXRhZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});