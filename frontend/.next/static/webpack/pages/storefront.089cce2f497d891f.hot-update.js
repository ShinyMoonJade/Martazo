"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/storefront",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; },\n/* harmony export */   \"TopSpacer\": function() { return /* binding */ TopSpacer; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ModalContext */ \"./utils/ModalContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction NavBar() {\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var modalController = (0,_utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex w-full top-0 space-x-4 flex-shrink-0 z-30 bg-background p-4 -mx-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: walletSession.walletAddress ? 'Go to Dashboard' : 'Log in with MetaMask',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                onClick: _asyncToGenerator(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var sessionStatus;\n                    return _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (!walletSession.walletAddress) {\n                                    _ctx.next = 4;\n                                    break;\n                                }\n                                {\n                                    router.push('/dashboard');\n                                }\n                                _ctx.next = 7;\n                                break;\n                            case 4:\n                                _ctx.next = 6;\n                                return walletSession.connectWallet();\n                            case 6:\n                                sessionStatus = _ctx.sent;\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                /*\n                console.log(sessionStatus)\n\n                if (sessionStatus.isConnected) { router.push('/dashboard') }\n                */ }))\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this));\n};\n_s(NavBar, \"bhCITYzOnTmNSUjeluIz7hgSX/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal\n    ];\n});\n_c = NavBar;\nfunction TopSpacer() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex flex-shrink-0 top-0 h-0 w-full pb-8\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this));\n}\n_c1 = TopSpacer;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"TopSpacer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNVO0FBQzJCO0FBQzVCO0FBQ0s7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxRQUFRLENBQUNNLE1BQU0sR0FBRyxDQUFDOztJQUU5QixHQUFLLENBQUNDLGFBQWEsR0FBR0osaURBQVUsQ0FBQ0QsdUVBQWE7SUFDOUMsR0FBSyxDQUFDTSxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEdBQUssQ0FBQ0ssZUFBZSxHQUFHSiw2REFBUTtJQUVoQyxNQUFNLDZFQUNESyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUErRTs7d0ZBQ3pGWCw2Q0FBSTs7Ozs7d0ZBQ0pVLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7d0ZBQ3pCVixrREFBUztnQkFBQ1csSUFBSSxFQUFFTCxhQUFhLENBQUNNLGFBQWEsR0FBRyxDQUFpQixtQkFBRyxDQUFzQjtnQkFBRUMsT0FBTyxFQUFFLENBQU87Z0JBQUVDLFNBQVMsRUFBRSxDQUFXO2dCQUFFQyxPQUFPLDRLQUFFLFFBQVEsV0FBSSxDQUFDO3dCQWE3SUMsYUFBYTs7OztxQ0FIbkJWLGFBQWEsQ0FBQ00sYUFBYTs7OztnQ0FBRSxDQUFDO29DQUM5QkwsTUFBTSxDQUFDVSxJQUFJLENBQUMsQ0FBWTtnQ0FDNUIsQ0FBQzs7Ozs7dUNBQytCWCxhQUFhLENBQUNZLGFBQWE7O2dDQUFqREYsYUFBYTs7Ozs7O2dCQUd2QixFQUlFOzs7O2dCQUFBLEdBQ04sQ0FBQzs7Ozs7O3dGQUNBaEIsa0RBQVM7Z0JBQUNXLElBQUksRUFBRSxDQUFhO2dCQUFFRSxPQUFPLEVBQUUsQ0FBVztnQkFBRUMsU0FBUyxFQUFFLENBQU87Z0JBQUVLLE1BQU0sRUFBRSxDQUFNO2dCQUFFQyxJQUFJLEVBQUUsQ0FBYTs7Ozs7Ozs7Ozs7O0FBR3pILENBQUM7R0FuQ3VCZixNQUFNOztRQUdYRixrREFBUztRQUNBQyx5REFBUTs7O0tBSlpDLE1BQU07QUFxQ3ZCLFNBQVNnQixTQUFTLEdBQUcsQ0FBQztJQUN6QixNQUFNLDZFQUNEWixDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpRDs7Ozs7O0FBRXhFLENBQUM7TUFKZVcsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci5qcz9lYjkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIlxuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi9OYXZCdXR0b25cIlxuaW1wb3J0IHsgV2FsbGV0Q29udGV4dCB9IGZyb20gXCIuLi91dGlscy9XYWxsZXRTZXNzaW9uUHJvdmlkZXJcIlxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4uL3V0aWxzL01vZGFsQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG5cbiAgICBjb25zdCB3YWxsZXRTZXNzaW9uID0gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBtb2RhbENvbnRyb2xsZXIgPSB1c2VNb2RhbCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgZmxleCB3LWZ1bGwgdG9wLTAgc3BhY2UteC00IGZsZXgtc2hyaW5rLTAgei0zMCBiZy1iYWNrZ3JvdW5kIHAtNCAtbXgtNFwiPlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93XCIgLz5cbiAgICAgICAgICAgIDxOYXZCdXR0b24gdGV4dD17d2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzID8gJ0dvIHRvIERhc2hib2FyZCcgOiAnTG9nIGluIHdpdGggTWV0YU1hc2snfSBiZ0NvbG9yPXsnd2hpdGUnfSB0ZXh0Q29sb3I9eydtYWluQmxhY2snfSBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuc2V0Q29udGVudChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtMjQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbnVuaXRvLWZvbnQgZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSXNzdWUgd2l0aCBNZXRhbWFzay5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIG1vZGFsQ29udHJvbGxlci5zZXRJc1Nob3duKHRydWUpO1xuICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICBpZiAod2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzKSB7IFxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25TdGF0dXMgPSBhd2FpdCB3YWxsZXRTZXNzaW9uLmNvbm5lY3RXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uU3RhdHVzKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb25TdGF0dXMuaXNDb25uZWN0ZWQpIHsgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKSB9XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9eydHZXQgU3RhcnRlZCd9IGJnQ29sb3I9eydtYWluQmxhY2snfSB0ZXh0Q29sb3I9eyd3aGl0ZSd9IHNoYWRvdz17J2hpZ2gnfSBsaW5rPXsnL2dldHN0YXJ0ZWQnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb3BTcGFjZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgZmxleCBmbGV4LXNocmluay0wIHRvcC0wIGgtMCB3LWZ1bGwgcGItOFwiIC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMb2dvIiwiTmF2QnV0dG9uIiwiV2FsbGV0Q29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJ1c2VNb2RhbCIsIk5hdkJhciIsIndhbGxldFNlc3Npb24iLCJyb3V0ZXIiLCJtb2RhbENvbnRyb2xsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0Iiwid2FsbGV0QWRkcmVzcyIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJvbkNsaWNrIiwic2Vzc2lvblN0YXR1cyIsInB1c2giLCJjb25uZWN0V2FsbGV0Iiwic2hhZG93IiwibGluayIsIlRvcFNwYWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});