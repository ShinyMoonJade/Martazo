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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLoginHandler; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\n/* harmony import */ var _components_NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../testData/testStoresData */ \"./testData/testStoresData.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nfunction DashboardLoginHandler() {\n    var CheckLogin = function CheckLogin() {\n        if (!walletSession.isLoaded) {\n            return;\n        }\n        while(!walletSession.isLoaded){}\n        if (walletSession.walletAddress) {\n            router.push('/dashboard');\n        } else {\n            router.push('/');\n        }\n    };\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.walletAddress\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.isLoaded\n    ]);\n    if (walletSession.walletAddress) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashboard, {}, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading . . .\"\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this));\n    }\n};\n_s(DashboardLoginHandler, \"Oh4K/u280KuTL08TR1zGnZQE/Lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = DashboardLoginHandler;\nfunction Dashboard() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), selectedStore = ref[0], setSelectedStore = ref[1]; //{ storeName: 'My New Store' })\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center bg-background h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-[90rem] bg-background px-14\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardNavBar, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this),\n                selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setSelectedStore();\n                            },\n                            className: \"nunito-font font-black text-4xl text-mainBlack/50 hover:text-mainBlack transition-all\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                            lineNumber: 60,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-4xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 64,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                            lineNumber: 63,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"nunito-font font-black text-4xl\",\n                            children: selectedStore.storeName ? selectedStore.storeName : 'Unnamed Store'\n                        }, void 0, false, {\n                            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                            lineNumber: 66,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 59,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nunito-font font-black text-4xl\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 71,\n                    columnNumber: 25\n                }, this),\n                selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardStoreContent, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 78,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardMainContent, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 80,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n}\n_s1(Dashboard, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c1 = Dashboard;\nfunction DashboardNavBar() {\n    _s2();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex grow my-14 h-14 space-x-4 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: 'Landing Page',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                link: '/'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this));\n}\n_s2(DashboardNavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c2 = DashboardNavBar;\nfunction DashboardMainContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"nunito-font text-2xl font-black\",\n                children: \"My Stores\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StoresList, {\n                stores: (_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default())\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this));\n}\n_c3 = DashboardMainContent;\nfunction StoresList(param) {\n    var stores = param.stores;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: stores.map(function(store) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallStoreDisplay, {\n                logoUri: store.logoUri,\n                subdomain: store.subdomain,\n                name: store.name,\n                owner: store.owner,\n                colourInHex: store.colourInHex\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 118,\n                columnNumber: 25\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, this));\n}\n_c4 = StoresList;\nfunction SmallStoreDisplay(param) {\n    var logoUri = param.logoUri, subdomain = param.subdomain, name = param.name, owner = param.owner, colourInHex = param.colourInHex;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://cloudflare-ipfs.com/ipfs/\".concat(logoUri),\n                className: \"flex aspect-square flex-shrink-0 rounded-xl\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 128,\n        columnNumber: 9\n    }, this));\n}\n_c5 = SmallStoreDisplay;\nfunction DashboardStoreContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"store\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 139,\n        columnNumber: 9\n    }, this));\n}\n_c6 = DashboardStoreContent;\nfunction DashboardTabs() {}\n_c7 = DashboardTabs;\nfunction EditStoreMetadata() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 151,\n        columnNumber: 9\n    }, this));\n}\n_c8 = EditStoreMetadata;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"DashboardLoginHandler\");\n$RefreshReg$(_c1, \"Dashboard\");\n$RefreshReg$(_c2, \"DashboardNavBar\");\n$RefreshReg$(_c3, \"DashboardMainContent\");\n$RefreshReg$(_c4, \"StoresList\");\n$RefreshReg$(_c5, \"SmallStoreDisplay\");\n$RefreshReg$(_c6, \"DashboardStoreContent\");\n$RefreshReg$(_c7, \"DashboardTabs\");\n$RefreshReg$(_c8, \"EditStoreMetadata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBCLEtBQWdELENBQXJDQSxTQUFTLEVBQUVDLElBQUksR0FBMUIsS0FBZ0QsQ0FBMUJBLElBQUksRUFBRUMsS0FBSyxHQUFqQyxLQUFnRCxDQUFwQkEsS0FBSyxFQUFFQyxXQUFXLEdBQTlDLEtBQWdELENBQWJBLFdBQVc7SUFDckUsTUFBTSw2RUFDRHpCLENBQUc7UUFBQ0csU0FBUyxFQUFDLENBQUU7O3dGQUNadUIsQ0FBRztnQkFBQ0MsR0FBRyxFQUFHLENBQWlDLG1DQUFVLE9BQVJOLE9BQU87Z0JBQUlsQixTQUFTLEVBQUMsQ0FBNkM7Ozs7Ozt3RkFDL0dJLENBQUM7MEJBQ0dnQixJQUFJOzs7Ozs7Ozs7Ozs7QUFJckIsQ0FBQztNQVRRSCxpQkFBaUI7U0FXakJYLHFCQUFxQixHQUFHLENBQUM7SUFDOUIsTUFBTSw2RUFDRFQsQ0FBRztrQkFBQyxDQUVMOzs7Ozs7QUFFUixDQUFDO01BTlFTLHFCQUFxQjtTQVFyQm1CLGFBQWEsR0FBRyxDQUFDLENBRXpCO01BRlFBLGFBQWE7U0FJYkMsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixNQUFNLDZFQUNEN0IsQ0FBRzs7Ozs7QUFJWixDQUFDO01BTlE2QixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzBlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxzL1dhbGxldFNlc3Npb25Qcm92aWRlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9nb1wiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCdXR0b25cIjtcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuaW1wb3J0IHRlc3RTdG9yZXNEYXRhIGZyb20gXCIuLi90ZXN0RGF0YS90ZXN0U3RvcmVzRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRMb2dpbkhhbmRsZXIoKSB7XG5cbiAgICBjb25zdCB3YWxsZXRTZXNzaW9uID0gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGZ1bmN0aW9uIENoZWNrTG9naW4oKSB7XG4gICAgICAgIGlmICghd2FsbGV0U2Vzc2lvbi5pc0xvYWRlZCkgeyByZXR1cm4gfVxuXG4gICAgICAgIHdoaWxlICghd2FsbGV0U2Vzc2lvbi5pc0xvYWRlZCkgeyB9XG5cbiAgICAgICAgaWYgKHdhbGxldFNlc3Npb24ud2FsbGV0QWRkcmVzcykge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQ2hlY2tMb2dpbigpXG4gICAgfSwgW3dhbGxldFNlc3Npb24ud2FsbGV0QWRkcmVzc10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBDaGVja0xvZ2luKClcbiAgICB9LCBbd2FsbGV0U2Vzc2lvbi5pc0xvYWRlZF0pXG5cbiAgICBpZiAod2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb2FkaW5nIC4gLiAuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXG4gICAgY29uc3QgW3NlbGVjdGVkU3RvcmUsIHNldFNlbGVjdGVkU3RvcmVdID0gdXNlU3RhdGUoKTsgIC8veyBzdG9yZU5hbWU6ICdNeSBOZXcgU3RvcmUnIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGJnLWJhY2tncm91bmQgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LVs5MHJlbV0gYmctYmFja2dyb3VuZCBweC0xNFwiPlxuICAgICAgICAgICAgICAgIDxEYXNoYm9hcmROYXZCYXIgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU3RvcmUoKX0gY2xhc3NOYW1lPVwibnVuaXRvLWZvbnQgZm9udC1ibGFjayB0ZXh0LTR4bCB0ZXh0LW1haW5CbGFjay81MCBob3Zlcjp0ZXh0LW1haW5CbGFjayB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bml0by1mb250IGZvbnQtYmxhY2sgdGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3RvcmUuc3RvcmVOYW1lID8gc2VsZWN0ZWRTdG9yZS5zdG9yZU5hbWUgOiAnVW5uYW1lZCBTdG9yZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW5pdG8tZm9udCBmb250LWJsYWNrIHRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFN0b3JlQ29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZE1haW5Db250ZW50IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gRGFzaGJvYXJkTmF2QmFyKCkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdyBteS0xNCBoLTE0IHNwYWNlLXgtNCBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyb3dcIiAvPlxuICAgICAgICAgICAgPE5hdkJ1dHRvbiB0ZXh0PXsnTGFuZGluZyBQYWdlJ30gYmdDb2xvcj17J3doaXRlJ30gdGV4dENvbG9yPXsnbWFpbkJsYWNrJ30gbGluaz17Jy8nfSAvPlxuICAgICAgICAgICAgPE5hdkJ1dHRvbiB0ZXh0PXsnR2V0IFN0YXJ0ZWQnfSBiZ0NvbG9yPXsnbWFpbkJsYWNrJ30gdGV4dENvbG9yPXsnd2hpdGUnfSBzaGFkb3c9eydoaWdoJ30gbGluaz17Jy9nZXRzdGFydGVkJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmRNYWluQ29udGVudCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVuaXRvLWZvbnQgdGV4dC0yeGwgZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICAgIE15IFN0b3Jlc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPFN0b3Jlc0xpc3Qgc3RvcmVzPXt0ZXN0U3RvcmVzRGF0YX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTdG9yZXNMaXN0KHsgc3RvcmVzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdG9yZXMubWFwKHN0b3JlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbFN0b3JlRGlzcGxheSBsb2dvVXJpPXtzdG9yZS5sb2dvVXJpfSBzdWJkb21haW49e3N0b3JlLnN1YmRvbWFpbn0gbmFtZT17c3RvcmUubmFtZX0gb3duZXI9e3N0b3JlLm93bmVyfSBjb2xvdXJJbkhleD17c3RvcmUuY29sb3VySW5IZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNtYWxsU3RvcmVEaXNwbGF5KHsgbG9nb1VyaSwgc3ViZG9tYWluLCBuYW1lLCBvd25lciwgY29sb3VySW5IZXggfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzLyR7bG9nb1VyaX1gfSBjbGFzc05hbWU9XCJmbGV4IGFzcGVjdC1zcXVhcmUgZmxleC1zaHJpbmstMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZFN0b3JlQ29udGVudCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmRUYWJzKCkge1xuXG59XG5cbmZ1bmN0aW9uIEVkaXRTdG9yZU1ldGFkYXRhKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJXYWxsZXRDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9nbyIsIk5hdkJ1dHRvbiIsIkhpT3V0bGluZUNoZXZyb25SaWdodCIsInRlc3RTdG9yZXNEYXRhIiwiRGFzaGJvYXJkTG9naW5IYW5kbGVyIiwiQ2hlY2tMb2dpbiIsIndhbGxldFNlc3Npb24iLCJpc0xvYWRlZCIsIndhbGxldEFkZHJlc3MiLCJyb3V0ZXIiLCJwdXNoIiwiRGFzaGJvYXJkIiwiZGl2Iiwic2VsZWN0ZWRTdG9yZSIsInNldFNlbGVjdGVkU3RvcmUiLCJjbGFzc05hbWUiLCJEYXNoYm9hcmROYXZCYXIiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInN0b3JlTmFtZSIsIkRhc2hib2FyZFN0b3JlQ29udGVudCIsIkRhc2hib2FyZE1haW5Db250ZW50IiwidGV4dCIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5rIiwic2hhZG93IiwiU3RvcmVzTGlzdCIsInN0b3JlcyIsIm1hcCIsInN0b3JlIiwiU21hbGxTdG9yZURpc3BsYXkiLCJsb2dvVXJpIiwic3ViZG9tYWluIiwibmFtZSIsIm93bmVyIiwiY29sb3VySW5IZXgiLCJpbWciLCJzcmMiLCJEYXNoYm9hcmRUYWJzIiwiRWRpdFN0b3JlTWV0YWRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});