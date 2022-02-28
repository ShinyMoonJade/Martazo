"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; },\n/* harmony export */   \"MainNavBar\": function() { return /* binding */ MainNavBar; },\n/* harmony export */   \"TopSpacer\": function() { return /* binding */ TopSpacer; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ModalContext */ \"./utils/ModalContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction NavBar(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex justify-center w-full top-0 space-x-4 flex-shrink-0 bg-background/90 backdrop-blur-xl z-30 py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex grow max-w-[90rem] px-6 md:px-14\",\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n};\n_c = NavBar;\nfunction MainNavBar() {\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var modalController = (0,_utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal)();\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBar, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: walletSession.walletAddress ? 'Go to Dashboard' : 'Log in with MetaMask',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                onClick: _asyncToGenerator(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var sessionStatus;\n                    return _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (!walletSession.walletAddress) {\n                                    _ctx.next = 4;\n                                    break;\n                                }\n                                {\n                                    router.push('/dashboard');\n                                }\n                                _ctx.next = 7;\n                                break;\n                            case 4:\n                                _ctx.next = 6;\n                                return walletSession.connectWallet();\n                            case 6:\n                                sessionStatus = _ctx.sent;\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                /*\n            console.log(sessionStatus)\n\n            if (sessionStatus.isConnected) { router.push('/dashboard') }\n            */ }))\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNavBar, \"bhCITYzOnTmNSUjeluIz7hgSX/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal\n    ];\n});\n_c1 = MainNavBar;\nfunction StorefrontNavBar() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBar, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CustomLogo, {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Button 1',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                link: '/storefront'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this));\n}\n_c2 = StorefrontNavBar;\nfunction TopSpacer() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex flex-shrink-0 top-0 h-0 w-full pb-8\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this));\n}\n_c3 = TopSpacer;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"MainNavBar\");\n$RefreshReg$(_c2, \"StorefrontNavBar\");\n$RefreshReg$(_c3, \"TopSpacer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDVTtBQUMyQjtBQUM1QjtBQUNLO0FBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsUUFBUSxDQUFDTSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ25DLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTZHOzhGQUN2SEQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBdUM7c0JBQ2pERixLQUFLLENBQUNHLFFBQVE7Ozs7Ozs7Ozs7O0FBSS9CLENBQUM7S0FSdUJKLE1BQU07QUFVdkIsU0FBU0ssVUFBVSxHQUFHLENBQUM7O0lBRTFCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHVCxpREFBVSxDQUFDRCx1RUFBYTtJQUM5QyxHQUFLLENBQUNXLE1BQU0sR0FBR1Qsc0RBQVM7SUFDeEIsR0FBSyxDQUFDVSxlQUFlLEdBQUdULDZEQUFRO2dGQUUvQkMsTUFBTTs7d0ZBQ0ZOLDZDQUFJOzs7Ozt3RkFDSlEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozt3RkFDekJSLGtEQUFTO2dCQUFDYyxJQUFJLEVBQUVILGFBQWEsQ0FBQ0ksYUFBYSxHQUFHLENBQWlCLG1CQUFHLENBQXNCO2dCQUFFQyxPQUFPLEVBQUUsQ0FBTztnQkFBRUMsU0FBUyxFQUFFLENBQVc7Z0JBQUVDLE9BQU8sNEtBQUUsUUFBUSxXQUFJLENBQUM7d0JBYTdJQyxhQUFhOzs7O3FDQUhuQlIsYUFBYSxDQUFDSSxhQUFhOzs7O2dDQUFFLENBQUM7b0NBQzlCSCxNQUFNLENBQUNRLElBQUksQ0FBQyxDQUFZO2dDQUM1QixDQUFDOzs7Ozt1Q0FDK0JULGFBQWEsQ0FBQ1UsYUFBYTs7Z0NBQWpERixhQUFhOzs7Ozs7Z0JBR3ZCLEVBSUU7Ozs7WUFBQSxHQUNOLENBQUM7Ozs7Ozt3RkFDQW5CLGtEQUFTO2dCQUFDYyxJQUFJLEVBQUUsQ0FBYTtnQkFBRUUsT0FBTyxFQUFFLENBQVc7Z0JBQUVDLFNBQVMsRUFBRSxDQUFPO2dCQUFFSyxNQUFNLEVBQUUsQ0FBTTtnQkFBRUMsSUFBSSxFQUFFLENBQWE7Ozs7Ozs7Ozs7OztBQUVySCxDQUFDO0dBakNlYixVQUFVOztRQUdQUCxrREFBUztRQUNBQyx5REFBUTs7O01BSnBCTSxVQUFVO1NBbUNqQmMsZ0JBQWdCLEdBQUcsQ0FBQztJQUN6QixNQUFNLDZFQUNEbkIsTUFBTTs7d0ZBQ0ZvQixVQUFVOzs7Ozt3RkFDVmxCLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7d0ZBQ3pCUixrREFBUztnQkFBQ2MsSUFBSSxFQUFFLENBQVU7Z0JBQUVFLE9BQU8sRUFBRSxDQUFPO2dCQUFFQyxTQUFTLEVBQUUsQ0FBVztnQkFBRU0sSUFBSSxFQUFFLENBQWE7Ozs7Ozs7Ozs7OztBQUl0RyxDQUFDO01BVFFDLGdCQUFnQjtBQVdsQixTQUFTRSxTQUFTLEdBQUcsQ0FBQztJQUN6QixNQUFNLDZFQUNEbkIsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBaUQ7Ozs7OztBQUV4RSxDQUFDO01BSmVrQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzP2ViOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiXG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gXCIuL05hdkJ1dHRvblwiXG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxzL1dhbGxldFNlc3Npb25Qcm92aWRlclwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi4vdXRpbHMvTW9kYWxDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IGZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHRvcC0wIHNwYWNlLXgtNCBmbGV4LXNocmluay0wIGJnLWJhY2tncm91bmQvOTAgYmFja2Ryb3AtYmx1ci14bCB6LTMwIHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93IG1heC13LVs5MHJlbV0gcHgtNiBtZDpweC0xNFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluTmF2QmFyKCkge1xuXG4gICAgY29uc3Qgd2FsbGV0U2Vzc2lvbiA9IHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbW9kYWxDb250cm9sbGVyID0gdXNlTW9kYWwoKTtcblxuICAgIDxOYXZCYXI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93XCIgLz5cbiAgICAgICAgPE5hdkJ1dHRvbiB0ZXh0PXt3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MgPyAnR28gdG8gRGFzaGJvYXJkJyA6ICdMb2cgaW4gd2l0aCBNZXRhTWFzayd9IGJnQ29sb3I9eyd3aGl0ZSd9IHRleHRDb2xvcj17J21haW5CbGFjayd9IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuc2V0Q29udGVudChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC0yNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBudW5pdG8tZm9udCBmb250LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIElzc3VlIHdpdGggTWV0YW1hc2suXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuc2V0SXNTaG93bih0cnVlKTtcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGlmICh3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25TdGF0dXMgPSBhd2FpdCB3YWxsZXRTZXNzaW9uLmNvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25TdGF0dXMpXG5cbiAgICAgICAgICAgIGlmIChzZXNzaW9uU3RhdHVzLmlzQ29ubmVjdGVkKSB7IHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJykgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgfX0gLz5cbiAgICAgICAgPE5hdkJ1dHRvbiB0ZXh0PXsnR2V0IFN0YXJ0ZWQnfSBiZ0NvbG9yPXsnbWFpbkJsYWNrJ30gdGV4dENvbG9yPXsnd2hpdGUnfSBzaGFkb3c9eydoaWdoJ30gbGluaz17Jy9nZXRzdGFydGVkJ30gLz5cbiAgICA8L05hdkJhcj5cbn1cblxuZnVuY3Rpb24gU3RvcmVmcm9udE5hdkJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TmF2QmFyPlxuICAgICAgICAgICAgPEN1c3RvbUxvZ28gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93XCIgLz5cbiAgICAgICAgICAgIDxOYXZCdXR0b24gdGV4dD17J0J1dHRvbiAxJ30gYmdDb2xvcj17J3doaXRlJ30gdGV4dENvbG9yPXsnbWFpbkJsYWNrJ30gbGluaz17Jy9zdG9yZWZyb250J30gLz5cbiAgICAgICAgICAgIHsvKjxOYXZCdXR0b24gdGV4dD17J0J1dHRvbiAyJ30gYmdDb2xvcj17J21haW5CbGFjayd9IHRleHRDb2xvcj17J3doaXRlJ30gc2hhZG93PXsnaGlnaCd9IGxpbms9eycvc3RvcmVmcm9udCd9IC8+Ki99XG4gICAgICAgIDwvTmF2QmFyPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvcFNwYWNlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSBmbGV4IGZsZXgtc2hyaW5rLTAgdG9wLTAgaC0wIHctZnVsbCBwYi04XCIgLz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxvZ28iLCJOYXZCdXR0b24iLCJXYWxsZXRDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsInVzZU1vZGFsIiwiTmF2QmFyIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIk1haW5OYXZCYXIiLCJ3YWxsZXRTZXNzaW9uIiwicm91dGVyIiwibW9kYWxDb250cm9sbGVyIiwidGV4dCIsIndhbGxldEFkZHJlc3MiLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwib25DbGljayIsInNlc3Npb25TdGF0dXMiLCJwdXNoIiwiY29ubmVjdFdhbGxldCIsInNoYWRvdyIsImxpbmsiLCJTdG9yZWZyb250TmF2QmFyIiwiQ3VzdG9tTG9nbyIsIlRvcFNwYWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});