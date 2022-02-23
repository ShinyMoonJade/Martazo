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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ModalContext */ \"./utils/ModalContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var modalController = (0,_utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex grow mx-14 my-14 h-14 space-x-4 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: walletSession.walletAddress ? 'Go to Dashboard' : 'Log in',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                onClick: _asyncToGenerator(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var sessionStatus;\n                    return _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                modalController.setContent(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"w-64 h-64 flex items-center justify-center nunito-font font-black\"\n                                }, void 0, false, void 0, void 0));\n                                modalController.setIsShown(true);\n                                _ctx.next = 4;\n                                return walletSession.connectWallet();\n                            case 4:\n                                sessionStatus = _ctx.sent;\n                                if (sessionStatus.isConnected) {\n                                    router.push('/dashboard');\n                                }\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this));\n};\n_s(NavBar, \"bhCITYzOnTmNSUjeluIz7hgSX/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1U7QUFDMkI7QUFDNUI7QUFDSztBQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLFFBQVEsQ0FBQ00sTUFBTSxHQUFHLENBQUM7O0lBRTlCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHSixpREFBVSxDQUFDRCx1RUFBYTtJQUM5QyxHQUFLLENBQUNNLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsR0FBSyxDQUFDSyxlQUFlLEdBQUdKLDZEQUFRO0lBRWhDLE1BQU0sNkVBQ0RLLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW9EOzt3RkFDOURYLDZDQUFJOzs7Ozt3RkFDSlUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7Ozs7Ozt3RkFDekJWLGtEQUFTO2dCQUFDVyxJQUFJLEVBQUVMLGFBQWEsQ0FBQ00sYUFBYSxHQUFHLENBQWlCLG1CQUFHLENBQVE7Z0JBQUVDLE9BQU8sRUFBRSxDQUFPO2dCQUFFQyxTQUFTLEVBQUUsQ0FBVztnQkFBRUMsT0FBTyw0S0FBRSxRQUFRLFdBQUksQ0FBQzt3QkFRbklDLGFBQWE7Ozs7Z0NBUG5CUixlQUFlLENBQUNTLFVBQVUsNkVBQ3JCUixDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBbUU7O2dDQUl0RkYsZUFBZSxDQUFDVSxVQUFVLENBQUMsSUFBSTs7dUNBRUhaLGFBQWEsQ0FBQ2EsYUFBYTs7Z0NBQWpESCxhQUFhO2dDQUVuQixFQUFFLEVBQUVBLGFBQWEsQ0FBQ0ksV0FBVyxFQUFFLENBQUM7b0NBQUNiLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDLENBQVk7Z0NBQUUsQ0FBQzs7Ozs7O2dCQUNoRSxDQUFDOzs7Ozs7d0ZBQ0FyQixrREFBUztnQkFBQ1csSUFBSSxFQUFFLENBQWE7Z0JBQUVFLE9BQU8sRUFBRSxDQUFXO2dCQUFFQyxTQUFTLEVBQUUsQ0FBTztnQkFBRVEsTUFBTSxFQUFFLENBQU07Z0JBQUVDLElBQUksRUFBRSxDQUFhOzs7Ozs7Ozs7Ozs7QUFHekgsQ0FBQztHQXpCdUJsQixNQUFNOztRQUdYRixrREFBUztRQUNBQyx5REFBUTs7O0tBSlpDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanM/ZWI5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCJcbmltcG9ydCBOYXZCdXR0b24gZnJvbSBcIi4vTmF2QnV0dG9uXCJcbmltcG9ydCB7IFdhbGxldENvbnRleHQgfSBmcm9tIFwiLi4vdXRpbHMvV2FsbGV0U2Vzc2lvblByb3ZpZGVyXCJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCIuLi91dGlscy9Nb2RhbENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuXG4gICAgY29uc3Qgd2FsbGV0U2Vzc2lvbiA9IHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbW9kYWxDb250cm9sbGVyID0gdXNlTW9kYWwoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93IG14LTE0IG15LTE0IGgtMTQgc3BhY2UteC00IGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3Jvd1wiIC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9e3dhbGxldFNlc3Npb24ud2FsbGV0QWRkcmVzcyA/ICdHbyB0byBEYXNoYm9hcmQnIDogJ0xvZyBpbid9IGJnQ29sb3I9eyd3aGl0ZSd9IHRleHRDb2xvcj17J21haW5CbGFjayd9IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuc2V0Q29udGVudChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtNjQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbnVuaXRvLWZvbnQgZm9udC1ibGFja1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuc2V0SXNTaG93bih0cnVlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25TdGF0dXMgPSBhd2FpdCB3YWxsZXRTZXNzaW9uLmNvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblN0YXR1cy5pc0Nvbm5lY3RlZCkgeyByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpIH1cbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9eydHZXQgU3RhcnRlZCd9IGJnQ29sb3I9eydtYWluQmxhY2snfSB0ZXh0Q29sb3I9eyd3aGl0ZSd9IHNoYWRvdz17J2hpZ2gnfSBsaW5rPXsnL2dldHN0YXJ0ZWQnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxvZ28iLCJOYXZCdXR0b24iLCJXYWxsZXRDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsInVzZU1vZGFsIiwiTmF2QmFyIiwid2FsbGV0U2Vzc2lvbiIsInJvdXRlciIsIm1vZGFsQ29udHJvbGxlciIsImRpdiIsImNsYXNzTmFtZSIsInRleHQiLCJ3YWxsZXRBZGRyZXNzIiwiYmdDb2xvciIsInRleHRDb2xvciIsIm9uQ2xpY2siLCJzZXNzaW9uU3RhdHVzIiwic2V0Q29udGVudCIsInNldElzU2hvd24iLCJjb25uZWN0V2FsbGV0IiwiaXNDb25uZWN0ZWQiLCJwdXNoIiwic2hhZG93IiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});