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

/***/ "./utils/ModalContext.js":
/*!*******************************!*\
  !*** ./utils/ModalContext.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": function() { return /* binding */ useModal; },\n/* harmony export */   \"ModalTypes\": function() { return /* binding */ ModalTypes; },\n/* harmony export */   \"default\": function() { return /* binding */ ModalProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();\n// create context\nvar ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useModal() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);\n}\n_s(useModal, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar ModalTypes = {\n    TopRight: 'tr',\n    TopLeft: 'tl',\n    BottomRight: 'br',\n    BottomLeft: 'bl'\n};\nfunction ModalProvider(props) {\n    _s1();\n    // setup state for modal type\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), modalType = ref[0], setModalType = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), content = ref1[0], setContent = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {\n        value: {\n            modalType: modalType,\n            setModalType: setModalType,\n            setContent: setContent\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {\n                isShown: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-64 h-64\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this));\n}; //modalType == ModalTypes.TopRight\n_s1(ModalProvider, \"4eLOaIE0Yl15ohhrrvSgicSmGzk=\");\n_c = ModalProvider;\nfunction Modal(props) {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loaded = ref[0], setLoaded = ref[1];\n    //const [blur, setBlur] = useState(0)\n    /*\n    useEffect(() => {\n        if (props.isShown) {\n            setLoaded(true)\n        }\n    })\n    */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute w-screen h-screen backdrop-blur-none z-50 transition-all duration-500 \" + (props.isShown ? \"backdrop-blur-[4px] bg-secondary/30\" : \"backdrop-blur-none bg-transparent invisible\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed top-default right-default bg-accent p-default rounded-2xl shadow-highest \" + (!props.isShown && \"invisible\"),\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n}\n_s2(Modal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c1 = Modal;\nfunction ModalProvider2(props) {\n    var _this = this;\n    _s3();\n    // setup state for modal type\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ModalTypes.BottomLeft), modalType = ref[0], setModalType = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), content = ref2[0], setContent = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setContent(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-64 h-64\"\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, _this));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {\n        value: {\n            modalType: modalType,\n            setModalType: setModalType,\n            setContent: setContent\n        },\n        children: [\n             true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal2, {\n                isShown: false,\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n                lineNumber: 80,\n                columnNumber: 17\n            }, this),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this));\n} //modalType == ModalTypes.TopRight\n_s3(ModalProvider2, \"iF7vY1sgPSZnOdXl+KIssNKcP70=\");\n_c2 = ModalProvider2;\nfunction Modal2(props) {\n    _s4();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loaded = ref[0], setLoaded = ref[1];\n    //const [blur, setBlur] = useState(0)\n    /*\n    useEffect(() => {\n        if (props.isShown) {\n            setLoaded(true)\n        }\n    })\n    */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-50 flex items-center justify-center fixed w-full h-screen transition-all duration-500 bg-gray-500/50 backdrop-blur-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 rounded-2xl shadow-high \" + (!props.isShown && \"invisible\"),\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n            lineNumber: 105,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, this));\n} //style={{marginRight: spacing + 'em'}}\n //style={{background-color: '#000000'}}\n_s4(Modal2, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = Modal2;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalProvider\");\n$RefreshReg$(_c1, \"Modal\");\n$RefreshReg$(_c2, \"ModalProvider2\");\n$RefreshReg$(_c3, \"Modal2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTs7Ozs7OztBQUczQixDQUFDLENBQWtDO0lBM0IxQkcsY0FBYztNQUFkQSxjQUFjO1NBNkJkQyxNQUFNLENBQUNmLEtBQUssRUFBRSxDQUFDOztJQUVwQixHQUFLLENBQXVCVixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFuQ3NCLE1BQU0sR0FBZXRCLEdBQWUsS0FBNUJ1QixTQUFTLEdBQUl2QixHQUFlO0lBQzNDLEVBQXFDO0lBRXJDLEVBTUU7Ozs7OztJQUFBLEdBRUYsTUFBTSw2RUFDRG1CLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlIOzhGQUNuSUQsQ0FBRztZQUFDQyxTQUFTLEVBQUUsQ0FBdUMsMkNBQUtWLEtBQUssQ0FBQ1EsT0FBTyxJQUFJLENBQVc7c0JBQ25GUixLQUFLLENBQUNXLFFBQVE7Ozs7Ozs7Ozs7O0FBSS9CLENBQUMsQ0FFc0M7QUFDdkMsQ0FBdUM7SUF2QjlCSSxNQUFNO01BQU5BLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvTW9kYWxDb250ZXh0LmpzPzE1MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbi8vIGNyZWF0ZSBjb250ZXh0XG5jb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KE1vZGFsQ29udGV4dClcbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsVHlwZXMgPSB7XG4gICAgVG9wUmlnaHQ6ICd0cicsXG4gICAgVG9wTGVmdDogJ3RsJyxcbiAgICBCb3R0b21SaWdodDogJ2JyJyxcbiAgICBCb3R0b21MZWZ0OiAnYmwnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbFByb3ZpZGVyKHByb3BzKSB7XG5cbiAgICAvLyBzZXR1cCBzdGF0ZSBmb3IgbW9kYWwgdHlwZVxuICAgIGNvbnN0IFttb2RhbFR5cGUsIHNldE1vZGFsVHlwZV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtb2RhbFR5cGUsIHNldE1vZGFsVHlwZSwgc2V0Q29udGVudCB9fT5cblxuICAgICAgICAgICAgPE1vZGFsIGlzU2hvd249e3RydWV9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC02NFwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0vL21vZGFsVHlwZSA9PSBNb2RhbFR5cGVzLlRvcFJpZ2h0XG5cbmZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XG5cbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy9jb25zdCBbYmx1ciwgc2V0Qmx1cl0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgLypcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuaXNTaG93bikge1xuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpXG4gICAgICAgIH1cbiAgICB9KVxuICAgICovXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJhYnNvbHV0ZSB3LXNjcmVlbiBoLXNjcmVlbiBiYWNrZHJvcC1ibHVyLW5vbmUgei01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgXCIgKyAocHJvcHMuaXNTaG93biA/IFwiYmFja2Ryb3AtYmx1ci1bNHB4XSBiZy1zZWNvbmRhcnkvMzBcIiA6IFwiYmFja2Ryb3AtYmx1ci1ub25lIGJnLXRyYW5zcGFyZW50IGludmlzaWJsZVwiKSB9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZpeGVkIHRvcC1kZWZhdWx0IHJpZ2h0LWRlZmF1bHQgYmctYWNjZW50IHAtZGVmYXVsdCByb3VuZGVkLTJ4bCBzaGFkb3ctaGlnaGVzdCBcIiArICghcHJvcHMuaXNTaG93biAmJiBcImludmlzaWJsZVwiKSB9ID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBNb2RhbFByb3ZpZGVyMihwcm9wcykge1xuXG4gICAgLy8gc2V0dXAgc3RhdGUgZm9yIG1vZGFsIHR5cGVcbiAgICBjb25zdCBbbW9kYWxUeXBlLCBzZXRNb2RhbFR5cGVdID0gdXNlU3RhdGUoTW9kYWxUeXBlcy5Cb3R0b21MZWZ0KVxuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvbnRlbnQoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC02NFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtb2RhbFR5cGUsIHNldE1vZGFsVHlwZSwgc2V0Q29udGVudCB9fT5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRydWUgJiZcbiAgICAgICAgICAgICAgICA8TW9kYWwyIGlzU2hvd249e2ZhbHNlfSA+XG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvTW9kYWwyPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0vL21vZGFsVHlwZSA9PSBNb2RhbFR5cGVzLlRvcFJpZ2h0XG5cbmZ1bmN0aW9uIE1vZGFsMihwcm9wcykge1xuXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vY29uc3QgW2JsdXIsIHNldEJsdXJdID0gdXNlU3RhdGUoMClcblxuICAgIC8qXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmlzU2hvd24pIHtcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAqL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZpeGVkIHctZnVsbCBoLXNjcmVlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgYmctZ3JheS01MDAvNTAgYmFja2Ryb3AtYmx1ci1zbVwiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJnLXdoaXRlIHAtNCByb3VuZGVkLTJ4bCBzaGFkb3ctaGlnaCBcIiArICghcHJvcHMuaXNTaG93biAmJiBcImludmlzaWJsZVwiKX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy9zdHlsZT17e21hcmdpblJpZ2h0OiBzcGFjaW5nICsgJ2VtJ319XG4vL3N0eWxlPXt7YmFja2dyb3VuZC1jb2xvcjogJyMwMDAwMDAnfX0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVBvcnRhbCIsIk1vZGFsQ29udGV4dCIsInVzZU1vZGFsIiwiTW9kYWxUeXBlcyIsIlRvcFJpZ2h0IiwiVG9wTGVmdCIsIkJvdHRvbVJpZ2h0IiwiQm90dG9tTGVmdCIsIk1vZGFsUHJvdmlkZXIiLCJwcm9wcyIsIm1vZGFsVHlwZSIsInNldE1vZGFsVHlwZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIk1vZGFsIiwiaXNTaG93biIsImRpdiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiTW9kYWxQcm92aWRlcjIiLCJNb2RhbDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/ModalContext.js\n");

/***/ })

});