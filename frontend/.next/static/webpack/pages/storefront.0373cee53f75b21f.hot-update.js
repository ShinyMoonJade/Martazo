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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; },\n/* harmony export */   \"MainNavBar\": function() { return /* binding */ MainNavBar; },\n/* harmony export */   \"StorefrontNavBar\": function() { return /* binding */ StorefrontNavBar; },\n/* harmony export */   \"TopSpacer\": function() { return /* binding */ TopSpacer; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ModalContext */ \"./utils/ModalContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction NavBar(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex justify-center w-full top-0 space-x-4 flex-shrink-0 bg-background/90 backdrop-blur-xl z-30 py-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex grow max-w-[90rem] px-6 md:px-14 space-x-4\",\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n};\n_c = NavBar;\nfunction MainNavBar() {\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_4__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var modalController = (0,_utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBar, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: walletSession.walletAddress ? 'Go to Dashboard' : 'Log in with MetaMask',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                onClick: _asyncToGenerator(_Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var sessionStatus;\n                    return _Users_joshkokatnur_Desktop_Martazo_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (!walletSession.walletAddress) {\n                                    _ctx.next = 4;\n                                    break;\n                                }\n                                {\n                                    router.push('/dashboard');\n                                }\n                                _ctx.next = 7;\n                                break;\n                            case 4:\n                                _ctx.next = 6;\n                                return walletSession.connectWallet();\n                            case 6:\n                                sessionStatus = _ctx.sent;\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                /*\n                console.log(sessionStatus)\n    \n                if (sessionStatus.isConnected) { router.push('/dashboard') }\n                */ }))\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this));\n}\n_s(MainNavBar, \"bhCITYzOnTmNSUjeluIz7hgSX/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _utils_ModalContext__WEBPACK_IMPORTED_MODULE_7__.useModal\n    ];\n});\n_c1 = MainNavBar;\nfunction StorefrontNavBar() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavBar, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__.CustomLogo, {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NavButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: 'Button 1',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                link: '/storefront'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this));\n}\n_c2 = StorefrontNavBar;\nfunction TopSpacer() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"sticky flex flex-shrink-0 top-0 h-0 w-full pb-8\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/components/NavBar.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this));\n}\n_c3 = TopSpacer;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"MainNavBar\");\n$RefreshReg$(_c2, \"StorefrontNavBar\");\n$RefreshReg$(_c3, \"TopSpacer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1U7QUFDMkI7QUFDNUI7QUFDSztBQUNTO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsUUFBUSxDQUFDTyxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ25DLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTZHOzhGQUN2SEQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBaUQ7c0JBQzNERixLQUFLLENBQUNHLFFBQVE7Ozs7Ozs7Ozs7O0FBSS9CLENBQUM7S0FSdUJKLE1BQU07QUFVdkIsU0FBU0ssVUFBVSxHQUFHLENBQUM7O0lBRTFCLEdBQUssQ0FBQ0MsYUFBYSxHQUFHVixpREFBVSxDQUFDRCx1RUFBYTtJQUM5QyxHQUFLLENBQUNZLE1BQU0sR0FBR1Ysc0RBQVM7SUFDeEIsR0FBSyxDQUFDVyxlQUFlLEdBQUdWLDZEQUFRO0lBRWhDLE1BQU0sNkVBQ0RFLE1BQU07O3dGQUNGUCw2Q0FBSTs7Ozs7d0ZBQ0pTLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7d0ZBQ3pCVCxrREFBUztnQkFBQ2UsSUFBSSxFQUFFSCxhQUFhLENBQUNJLGFBQWEsR0FBRyxDQUFpQixtQkFBRyxDQUFzQjtnQkFBRUMsT0FBTyxFQUFFLENBQU87Z0JBQUVDLFNBQVMsRUFBRSxDQUFXO2dCQUFFQyxPQUFPLDRLQUFFLFFBQVEsV0FBSSxDQUFDO3dCQWE3SUMsYUFBYTs7OztxQ0FIbkJSLGFBQWEsQ0FBQ0ksYUFBYTs7OztnQ0FBRSxDQUFDO29DQUM5QkgsTUFBTSxDQUFDUSxJQUFJLENBQUMsQ0FBWTtnQ0FDNUIsQ0FBQzs7Ozs7dUNBQytCVCxhQUFhLENBQUNVLGFBQWE7O2dDQUFqREYsYUFBYTs7Ozs7O2dCQUd2QixFQUlFOzs7O2dCQUFBLEdBQ04sQ0FBQzs7Ozs7O3dGQUNBcEIsa0RBQVM7Z0JBQUNlLElBQUksRUFBRSxDQUFhO2dCQUFFRSxPQUFPLEVBQUUsQ0FBVztnQkFBRUMsU0FBUyxFQUFFLENBQU87Z0JBQUVLLE1BQU0sRUFBRSxDQUFNO2dCQUFFQyxJQUFJLEVBQUUsQ0FBYTs7Ozs7Ozs7Ozs7O0FBR3pILENBQUM7R0FuQ2ViLFVBQVU7O1FBR1BSLGtEQUFTO1FBQ0FDLHlEQUFROzs7TUFKcEJPLFVBQVU7QUFxQ25CLFNBQVNjLGdCQUFnQixHQUFHLENBQUM7SUFDaEMsTUFBTSw2RUFDRG5CLE1BQU07O3dGQUNGRCw2Q0FBVTs7Ozs7d0ZBQ1ZHLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7d0ZBQ3pCVCxrREFBUztnQkFBQ2UsSUFBSSxFQUFFLENBQVU7Z0JBQUVFLE9BQU8sRUFBRSxDQUFPO2dCQUFFQyxTQUFTLEVBQUUsQ0FBVztnQkFBRU0sSUFBSSxFQUFFLENBQWE7Ozs7Ozs7Ozs7OztBQUl0RyxDQUFDO01BVGVDLGdCQUFnQjtBQVd6QixTQUFTQyxTQUFTLEdBQUcsQ0FBQztJQUN6QixNQUFNLDZFQUNEbEIsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBaUQ7Ozs7OztBQUV4RSxDQUFDO01BSmVpQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzP2ViOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiXG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gXCIuL05hdkJ1dHRvblwiXG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxzL1dhbGxldFNlc3Npb25Qcm92aWRlclwiXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi4vdXRpbHMvTW9kYWxDb250ZXh0XCI7XG5pbXBvcnQgeyBDdXN0b21Mb2dvIH0gZnJvbSBcIi4vbG9nb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCB0b3AtMCBzcGFjZS14LTQgZmxleC1zaHJpbmstMCBiZy1iYWNrZ3JvdW5kLzkwIGJhY2tkcm9wLWJsdXIteGwgei0zMCBweS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdyBtYXgtdy1bOTByZW1dIHB4LTYgbWQ6cHgtMTQgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1haW5OYXZCYXIoKSB7XG5cbiAgICBjb25zdCB3YWxsZXRTZXNzaW9uID0gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBtb2RhbENvbnRyb2xsZXIgPSB1c2VNb2RhbCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkJhcj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3Jvd1wiIC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9e3dhbGxldFNlc3Npb24ud2FsbGV0QWRkcmVzcyA/ICdHbyB0byBEYXNoYm9hcmQnIDogJ0xvZyBpbiB3aXRoIE1ldGFNYXNrJ30gYmdDb2xvcj17J3doaXRlJ30gdGV4dENvbG9yPXsnbWFpbkJsYWNrJ30gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbW9kYWxDb250cm9sbGVyLnNldENvbnRlbnQoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLTI0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG51bml0by1mb250IGZvbnQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIElzc3VlIHdpdGggTWV0YW1hc2suXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBtb2RhbENvbnRyb2xsZXIuc2V0SXNTaG93bih0cnVlKTtcbiAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgaWYgKHdhbGxldFNlc3Npb24ud2FsbGV0QWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvblN0YXR1cyA9IGF3YWl0IHdhbGxldFNlc3Npb24uY29ubmVjdFdhbGxldCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvblN0YXR1cylcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblN0YXR1cy5pc0Nvbm5lY3RlZCkgeyByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpIH1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxOYXZCdXR0b24gdGV4dD17J0dldCBTdGFydGVkJ30gYmdDb2xvcj17J21haW5CbGFjayd9IHRleHRDb2xvcj17J3doaXRlJ30gc2hhZG93PXsnaGlnaCd9IGxpbms9eycvZ2V0c3RhcnRlZCd9IC8+XG4gICAgICAgIDwvTmF2QmFyPlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlZnJvbnROYXZCYXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkJhcj5cbiAgICAgICAgICAgIDxDdXN0b21Mb2dvIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3Jvd1wiIC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9eydCdXR0b24gMSd9IGJnQ29sb3I9eyd3aGl0ZSd9IHRleHRDb2xvcj17J21haW5CbGFjayd9IGxpbms9eycvc3RvcmVmcm9udCd9IC8+XG4gICAgICAgICAgICB7Lyo8TmF2QnV0dG9uIHRleHQ9eydCdXR0b24gMid9IGJnQ29sb3I9eydtYWluQmxhY2snfSB0ZXh0Q29sb3I9eyd3aGl0ZSd9IHNoYWRvdz17J2hpZ2gnfSBsaW5rPXsnL3N0b3JlZnJvbnQnfSAvPiovfVxuICAgICAgICA8L05hdkJhcj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb3BTcGFjZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgZmxleCBmbGV4LXNocmluay0wIHRvcC0wIGgtMCB3LWZ1bGwgcGItOFwiIC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMb2dvIiwiTmF2QnV0dG9uIiwiV2FsbGV0Q29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJ1c2VNb2RhbCIsIkN1c3RvbUxvZ28iLCJOYXZCYXIiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiTWFpbk5hdkJhciIsIndhbGxldFNlc3Npb24iLCJyb3V0ZXIiLCJtb2RhbENvbnRyb2xsZXIiLCJ0ZXh0Iiwid2FsbGV0QWRkcmVzcyIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJvbkNsaWNrIiwic2Vzc2lvblN0YXR1cyIsInB1c2giLCJjb25uZWN0V2FsbGV0Iiwic2hhZG93IiwibGluayIsIlN0b3JlZnJvbnROYXZCYXIiLCJUb3BTcGFjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.js\n");

/***/ })

});