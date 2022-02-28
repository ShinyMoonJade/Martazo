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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; },\n/* harmony export */   \"TopSpacer\": function() { return /* binding */ TopSpacer; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ModalContext */ \"./utils/ModalContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction NavBar(props) {\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var modalController = (0,_utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex w-full top-0 space-x-4 flex-shrink-0 bg-background/90 backdrop-blur-xl z-30 py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: walletSession.walletAddress ? 'Go to Dashboard' : 'Log in with MetaMask',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                onClick: _asyncToGenerator(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var sessionStatus;\n                    return _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (!walletSession.walletAddress) {\n                                    _ctx.next = 4;\n                                    break;\n                                }\n                                {\n                                    router.push('/dashboard');\n                                }\n                                _ctx.next = 7;\n                                break;\n                            case 4:\n                                _ctx.next = 6;\n                                return walletSession.connectWallet();\n                            case 6:\n                                sessionStatus = _ctx.sent;\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                /*\n                console.log(sessionStatus)\n\n                if (sessionStatus.isConnected) { router.push('/dashboard') }\n                */ }))\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this));\n};\n_s(NavBar, \"bhCITYzOnTmNSUjeluIz7hgSX/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal\n    ];\n});\n_c = NavBar;\nfunction StorefrontNavBar() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex justify-center grow w-full top-0 space-x-4 flex-shrink-0 bg-background/90 backdrop-blur-xl z-50 py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex grow max-w-[90rem] px-6 md:px-14\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CustomLogo, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex grow\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: 'Button 1',\n                    bgColor: 'white',\n                    textColor: 'mainBlack',\n                    link: '/storefront'\n                }, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this));\n}\n_c1 = StorefrontNavBar;\nfunction TopSpacer() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex flex-shrink-0 top-0 h-0 w-full pb-8\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this));\n}\n_c2 = TopSpacer;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"StorefrontNavBar\");\n$RefreshReg$(_c2, \"TopSpacer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNVO0FBQzJCO0FBQzVCO0FBQ0s7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxRQUFRLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7O0lBRW5DLEdBQUssQ0FBQ0MsYUFBYSxHQUFHTCxpREFBVSxDQUFDRCx1RUFBYTtJQUM5QyxHQUFLLENBQUNPLE1BQU0sR0FBR0wsc0RBQVM7SUFDeEIsR0FBSyxDQUFDTSxlQUFlLEdBQUdMLDZEQUFRO0lBRWhDLE1BQU0sNkVBQ0RNLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThGOzt3RkFDeEdaLDZDQUFJOzs7Ozt3RkFDSlcsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozt3RkFDekJYLGtEQUFTO2dCQUFDWSxJQUFJLEVBQUVMLGFBQWEsQ0FBQ00sYUFBYSxHQUFHLENBQWlCLG1CQUFHLENBQXNCO2dCQUFFQyxPQUFPLEVBQUUsQ0FBTztnQkFBRUMsU0FBUyxFQUFFLENBQVc7Z0JBQUVDLE9BQU8sNEtBQUUsUUFBUSxXQUFJLENBQUM7d0JBYTdJQyxhQUFhOzs7O3FDQUhuQlYsYUFBYSxDQUFDTSxhQUFhOzs7O2dDQUFFLENBQUM7b0NBQzlCTCxNQUFNLENBQUNVLElBQUksQ0FBQyxDQUFZO2dDQUM1QixDQUFDOzs7Ozt1Q0FDK0JYLGFBQWEsQ0FBQ1ksYUFBYTs7Z0NBQWpERixhQUFhOzs7Ozs7Z0JBR3ZCLEVBSUU7Ozs7Z0JBQUEsR0FDTixDQUFDOzs7Ozs7d0ZBQ0FqQixrREFBUztnQkFBQ1ksSUFBSSxFQUFFLENBQWE7Z0JBQUVFLE9BQU8sRUFBRSxDQUFXO2dCQUFFQyxTQUFTLEVBQUUsQ0FBTztnQkFBRUssTUFBTSxFQUFFLENBQU07Z0JBQUVDLElBQUksRUFBRSxDQUFhOzs7Ozs7Ozs7Ozs7QUFHekgsQ0FBQztHQW5DdUJoQixNQUFNOztRQUdYRixrREFBUztRQUNBQyx5REFBUTs7O0tBSlpDLE1BQU07U0FxQ3JCaUIsZ0JBQWdCLEdBQUcsQ0FBQztJQUN6QixNQUFNLDZFQUNEWixDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrSDs4RkFDNUhELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXVDOzs0RkFDakRZLFVBQVU7Ozs7OzRGQUNWYixDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7OzRGQUN6Qlgsa0RBQVM7b0JBQUNZLElBQUksRUFBRSxDQUFVO29CQUFFRSxPQUFPLEVBQUUsQ0FBTztvQkFBRUMsU0FBUyxFQUFFLENBQVc7b0JBQUVNLElBQUksRUFBRSxDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxRyxDQUFDO01BWFFDLGdCQUFnQjtBQWFsQixTQUFTRSxTQUFTLEdBQUcsQ0FBQztJQUN6QixNQUFNLDZFQUNEZCxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpRDs7Ozs7O0FBRXhFLENBQUM7TUFKZWEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIlxuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi9OYXZCdXR0b25cIlxuaW1wb3J0IHsgV2FsbGV0Q29udGV4dCB9IGZyb20gXCIuLi91dGlscy9XYWxsZXRTZXNzaW9uUHJvdmlkZXJcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4uL3V0aWxzL01vZGFsQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIocHJvcHMpIHtcblxuICAgIGNvbnN0IHdhbGxldFNlc3Npb24gPSB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IG1vZGFsQ29udHJvbGxlciA9IHVzZU1vZGFsKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSBmbGV4IHctZnVsbCB0b3AtMCBzcGFjZS14LTQgZmxleC1zaHJpbmstMCBiZy1iYWNrZ3JvdW5kLzkwIGJhY2tkcm9wLWJsdXIteGwgei0zMCBweS00XCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyb3dcIiAvPlxuICAgICAgICAgICAgPE5hdkJ1dHRvbiB0ZXh0PXt3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MgPyAnR28gdG8gRGFzaGJvYXJkJyA6ICdMb2cgaW4gd2l0aCBNZXRhTWFzayd9IGJnQ29sb3I9eyd3aGl0ZSd9IHRleHRDb2xvcj17J21haW5CbGFjayd9IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIG1vZGFsQ29udHJvbGxlci5zZXRDb250ZW50KFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC0yNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBudW5pdG8tZm9udCBmb250LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBJc3N1ZSB3aXRoIE1ldGFtYXNrLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbW9kYWxDb250cm9sbGVyLnNldElzU2hvd24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGlmICh3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MpIHsgXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJykgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvblN0YXR1cyA9IGF3YWl0IHdhbGxldFNlc3Npb24uY29ubmVjdFdhbGxldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb25TdGF0dXMpXG5cbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblN0YXR1cy5pc0Nvbm5lY3RlZCkgeyByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpIH1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxOYXZCdXR0b24gdGV4dD17J0dldCBTdGFydGVkJ30gYmdDb2xvcj17J21haW5CbGFjayd9IHRleHRDb2xvcj17J3doaXRlJ30gc2hhZG93PXsnaGlnaCd9IGxpbms9eycvZ2V0c3RhcnRlZCd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU3RvcmVmcm9udE5hdkJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSBmbGV4IGp1c3RpZnktY2VudGVyIGdyb3cgdy1mdWxsIHRvcC0wIHNwYWNlLXgtNCBmbGV4LXNocmluay0wIGJnLWJhY2tncm91bmQvOTAgYmFja2Ryb3AtYmx1ci14bCB6LTUwIHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93IG1heC13LVs5MHJlbV0gcHgtNiBtZDpweC0xNFwiPlxuICAgICAgICAgICAgICAgIDxDdXN0b21Mb2dvIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyb3dcIiAvPlxuICAgICAgICAgICAgICAgIDxOYXZCdXR0b24gdGV4dD17J0J1dHRvbiAxJ30gYmdDb2xvcj17J3doaXRlJ30gdGV4dENvbG9yPXsnbWFpbkJsYWNrJ30gbGluaz17Jy9zdG9yZWZyb250J30gLz5cbiAgICAgICAgICAgICAgICB7Lyo8TmF2QnV0dG9uIHRleHQ9eydCdXR0b24gMid9IGJnQ29sb3I9eydtYWluQmxhY2snfSB0ZXh0Q29sb3I9eyd3aGl0ZSd9IHNoYWRvdz17J2hpZ2gnfSBsaW5rPXsnL3N0b3JlZnJvbnQnfSAvPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvcFNwYWNlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSBmbGV4IGZsZXgtc2hyaW5rLTAgdG9wLTAgaC0wIHctZnVsbCBwYi04XCIgLz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxvZ28iLCJOYXZCdXR0b24iLCJXYWxsZXRDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsInVzZU1vZGFsIiwiTmF2QmFyIiwicHJvcHMiLCJ3YWxsZXRTZXNzaW9uIiwicm91dGVyIiwibW9kYWxDb250cm9sbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dCIsIndhbGxldEFkZHJlc3MiLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwib25DbGljayIsInNlc3Npb25TdGF0dXMiLCJwdXNoIiwiY29ubmVjdFdhbGxldCIsInNoYWRvdyIsImxpbmsiLCJTdG9yZWZyb250TmF2QmFyIiwiQ3VzdG9tTG9nbyIsIlRvcFNwYWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});