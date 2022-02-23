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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": function() { return /* binding */ useModal; },\n/* harmony export */   \"ModalTypes\": function() { return /* binding */ ModalTypes; },\n/* harmony export */   \"default\": function() { return /* binding */ ModalProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n// create context\nvar ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useModal() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);\n}\n_s(useModal, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar ModalTypes = {\n    TopRight: 'tr',\n    TopLeft: 'tl',\n    BottomRight: 'br',\n    BottomLeft: 'bl'\n};\nfunction ModalProvider(props) {\n    _s1();\n    // setup state for modal type\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), modalType = ref[0], setModalType = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), content = ref1[0], setContent = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {\n        value: {\n            modalType: modalType,\n            setModalType: setModalType,\n            setContent: setContent\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Modal, {\n                isShown: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-64 h-64 bg-blue-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            props.children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this));\n}; //modalType == ModalTypes.TopRight\n_s1(ModalProvider, \"4eLOaIE0Yl15ohhrrvSgicSmGzk=\");\n_c = ModalProvider;\nfunction Modal(props) {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loaded = ref[0], setLoaded = ref[1];\n    //const [blur, setBlur] = useState(0)\n    /*\n    useEffect(() => {\n        if (props.isShown) {\n            setLoaded(true)\n        }\n    })\n    */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center absolute w-screen h-screen backdrop-blur-none z-50 transition-all duration-500 \" + (props.isShown ? \"backdrop-blur-[4px] bg-gray-500/30\" : \"backdrop-blur-none bg-transparent invisible\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 rounded-2xl shadow-high \" + (!props.isShown && \"invisible\"),\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/utils/ModalContext.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n}\n_s2(Modal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c1 = Modal;\nvar _c, _c1;\n$RefreshReg$(_c, \"ModalProvider\");\n$RefreshReg$(_c1, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9Nb2RhbENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDNUI7QUFDUTs7QUFFeEMsRUFBaUI7QUFDakIsR0FBSyxDQUFDSyxZQUFZLGlCQUFHTCxvREFBYTtBQUUzQixTQUFTTSxRQUFRLEdBQUcsQ0FBQzs7SUFDeEIsTUFBTSxDQUFDTCxpREFBVSxDQUFDSSxZQUFZO0FBQ2xDLENBQUM7R0FGZUMsUUFBUTtBQUlqQixHQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQ3ZCQyxRQUFRLEVBQUUsQ0FBSTtJQUNkQyxPQUFPLEVBQUUsQ0FBSTtJQUNiQyxXQUFXLEVBQUUsQ0FBSTtJQUNqQkMsVUFBVSxFQUFFLENBQUk7QUFDcEIsQ0FBQztBQUVjLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFFMUMsRUFBNkI7SUFDN0IsR0FBSyxDQUE2QlYsR0FBVSxHQUFWQSwrQ0FBUSxJQUFuQ1csU0FBUyxHQUFrQlgsR0FBVSxLQUExQlksWUFBWSxHQUFJWixHQUFVO0lBQzVDLEdBQUssQ0FBeUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBL0JhLE9BQU8sR0FBZ0JiLElBQVUsS0FBeEJjLFVBQVUsR0FBSWQsSUFBVTtJQUV4QyxNQUFNLDZFQUNERSxZQUFZLENBQUNhLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFBQ0wsU0FBUyxFQUFUQSxTQUFTO1lBQUVDLFlBQVksRUFBWkEsWUFBWTtZQUFFRSxVQUFVLEVBQVZBLFVBQVU7UUFBQyxDQUFDOzt3RkFFaEVHLEtBQUs7Z0JBQUNDLE9BQU8sRUFBRSxLQUFLO3NHQUNoQkMsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXVCOzs7Ozs7Ozs7OztZQUt6Q1YsS0FBSyxDQUFDVyxRQUFROzs7Ozs7O0FBRzNCLENBQUMsRUFBa0M7SUFsQlhaLGFBQWE7S0FBYkEsYUFBYTtTQW9CNUJRLEtBQUssQ0FBQ1AsS0FBSyxFQUFFLENBQUM7O0lBRW5CLEdBQUssQ0FBdUJWLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5Dc0IsTUFBTSxHQUFldEIsR0FBZSxLQUE1QnVCLFNBQVMsR0FBSXZCLEdBQWU7SUFDM0MsRUFBcUM7SUFFckMsRUFNRTs7Ozs7O0lBQUEsR0FFRixNQUFNLDZFQUNEbUIsQ0FBRztRQUFDQyxTQUFTLEVBQUUsQ0FBa0gscUhBQUlWLEtBQUssQ0FBQ1EsT0FBTyxHQUFHLENBQW9DLHNDQUFHLENBQTZDOzhGQUNyT0MsQ0FBRztZQUFDQyxTQUFTLEVBQUUsQ0FBdUMsMkNBQUtWLEtBQUssQ0FBQ1EsT0FBTyxJQUFJLENBQVc7c0JBQ25GUixLQUFLLENBQUNXLFFBQVE7Ozs7Ozs7Ozs7O0FBSS9CLENBQUM7SUFwQlFKLEtBQUs7TUFBTEEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9Nb2RhbENvbnRleHQuanM/MTUwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuLy8gY3JlYXRlIGNvbnRleHRcbmNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9kYWwoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxufVxuXG5leHBvcnQgY29uc3QgTW9kYWxUeXBlcyA9IHtcbiAgICBUb3BSaWdodDogJ3RyJyxcbiAgICBUb3BMZWZ0OiAndGwnLFxuICAgIEJvdHRvbVJpZ2h0OiAnYnInLFxuICAgIEJvdHRvbUxlZnQ6ICdibCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsUHJvdmlkZXIocHJvcHMpIHtcblxuICAgIC8vIHNldHVwIHN0YXRlIGZvciBtb2RhbCB0eXBlXG4gICAgY29uc3QgW21vZGFsVHlwZSwgc2V0TW9kYWxUeXBlXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG1vZGFsVHlwZSwgc2V0TW9kYWxUeXBlLCBzZXRDb250ZW50IH19PlxuXG4gICAgICAgICAgICA8TW9kYWwgaXNTaG93bj17ZmFsc2V9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC02NCBiZy1ibHVlLTUwMFwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPiBcbiAgICApXG59Ly9tb2RhbFR5cGUgPT0gTW9kYWxUeXBlcy5Ub3BSaWdodFxuXG5mdW5jdGlvbiBNb2RhbChwcm9wcykge1xuXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vY29uc3QgW2JsdXIsIHNldEJsdXJdID0gdXNlU3RhdGUoMClcblxuICAgIC8qXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmlzU2hvd24pIHtcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAqL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUgdy1zY3JlZW4gaC1zY3JlZW4gYmFja2Ryb3AtYmx1ci1ub25lIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIFwiICsgKHByb3BzLmlzU2hvd24gPyBcImJhY2tkcm9wLWJsdXItWzRweF0gYmctZ3JheS01MDAvMzBcIiA6IFwiYmFja2Ryb3AtYmx1ci1ub25lIGJnLXRyYW5zcGFyZW50IGludmlzaWJsZVwiKSB9ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJnLXdoaXRlIHAtNCByb3VuZGVkLTJ4bCBzaGFkb3ctaGlnaCBcIiArICghcHJvcHMuaXNTaG93biAmJiBcImludmlzaWJsZVwiKSB9ID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUG9ydGFsIiwiTW9kYWxDb250ZXh0IiwidXNlTW9kYWwiLCJNb2RhbFR5cGVzIiwiVG9wUmlnaHQiLCJUb3BMZWZ0IiwiQm90dG9tUmlnaHQiLCJCb3R0b21MZWZ0IiwiTW9kYWxQcm92aWRlciIsInByb3BzIiwibW9kYWxUeXBlIiwic2V0TW9kYWxUeXBlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJQcm92aWRlciIsInZhbHVlIiwiTW9kYWwiLCJpc1Nob3duIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJsb2FkZWQiLCJzZXRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/ModalContext.js\n");

/***/ })

});