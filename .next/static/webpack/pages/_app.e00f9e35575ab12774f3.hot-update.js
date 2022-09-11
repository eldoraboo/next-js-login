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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_eldoraboo_Desktop_next_js_login_next_js_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services */ \"./services/index.js\");\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/eldoraboo/Desktop/next-js-login/next-js-login/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_eldoraboo_Desktop_next_js_login_next_js_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nfunction App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      authorized = _useState2[0],\n      setAuthorized = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    // on initial load - run auth check \n    authCheck(router.asPath); // on route change start - hide page content by setting authorized to false  \n\n    var hideContent = function hideContent() {\n      return setAuthorized(false);\n    };\n\n    router.events.on('routeChangeStart', hideContent); // on route change complete - run auth check \n\n    router.events.on('routeChangeComplete', authCheck); // unsubscribe from events in useEffect return function\n\n    return function () {\n      router.events.off('routeChangeStart', hideContent);\n      router.events.off('routeChangeComplete', authCheck);\n    }; // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n\n  function authCheck(url) {\n    // redirect to login page if accessing a private page and not logged in \n    setUser(services__WEBPACK_IMPORTED_MODULE_6__.userService.userValue);\n    var publicPaths = ['/account/login', '/account/register'];\n    var path = url.split('?')[0];\n\n    if (!services__WEBPACK_IMPORTED_MODULE_6__.userService.userValue && !publicPaths.includes(path)) {\n      setAuthorized(false);\n      router.push({\n        pathname: '/account/login',\n        query: {\n          returnUrl: router.asPath\n        }\n      });\n    } else {\n      setAuthorized(true);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Next.js 11 - User Registration and Login Example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        href: \"//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"app-container \".concat(user ? 'bg-light' : ''),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Nav, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Alert, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this), authorized && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-center mt-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"https://jasonwatmore.com/post/2021/08/19/next-js-11-user-registration-and-login-tutorial-with-example-app\",\n          target: \"_top\",\n          children: \"Next.js 11 - User Registration and Login Tutorial with Example App\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"https://eldoraboo.github.io\",\n          target: \"_top\",\n          children: \"eldoraboo.github.io\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(App, \"ZAGIuXu4UqOED9xI/T2koDUtj5A=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUEsWUFSSixlQWlCSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNJO0FBQUEsK0JBQ0k7QUFBRyxjQUFJLEVBQUMsMkdBQVI7QUFBb0gsZ0JBQU0sRUFBQyxNQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUEsK0JBQ0k7QUFBRyxjQUFJLEVBQUMsNkJBQVI7QUFBc0MsZ0JBQU0sRUFBQyxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQko7QUFBQSxrQkFESjtBQTRCSDs7R0FyRVFGO1VBQ1VKOzs7S0FEVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgJ3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmltcG9ydCB7IHVzZXJTZXJ2aWNlIH0gZnJvbSAnc2VydmljZXMnO1xuaW1wb3J0IHsgTmF2LCBBbGVydCB9IGZyb20gJ2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYXV0aG9yaXplZCwgc2V0QXV0aG9yaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBvbiBpbml0aWFsIGxvYWQgLSBydW4gYXV0aCBjaGVjayBcbiAgICAgICAgYXV0aENoZWNrKHJvdXRlci5hc1BhdGgpO1xuXG4gICAgICAgIC8vIG9uIHJvdXRlIGNoYW5nZSBzdGFydCAtIGhpZGUgcGFnZSBjb250ZW50IGJ5IHNldHRpbmcgYXV0aG9yaXplZCB0byBmYWxzZSAgXG4gICAgICAgIGNvbnN0IGhpZGVDb250ZW50ID0gKCkgPT4gc2V0QXV0aG9yaXplZChmYWxzZSk7XG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoaWRlQ29udGVudCk7XG5cbiAgICAgICAgLy8gb24gcm91dGUgY2hhbmdlIGNvbXBsZXRlIC0gcnVuIGF1dGggY2hlY2sgXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhdXRoQ2hlY2spXG5cbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgZnJvbSBldmVudHMgaW4gdXNlRWZmZWN0IHJldHVybiBmdW5jdGlvblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoaWRlQ29udGVudCk7XG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGF1dGhDaGVjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gYXV0aENoZWNrKHVybCkge1xuICAgICAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIGFjY2Vzc2luZyBhIHByaXZhdGUgcGFnZSBhbmQgbm90IGxvZ2dlZCBpbiBcbiAgICAgICAgc2V0VXNlcih1c2VyU2VydmljZS51c2VyVmFsdWUpO1xuICAgICAgICBjb25zdCBwdWJsaWNQYXRocyA9IFsnL2FjY291bnQvbG9naW4nLCAnL2FjY291bnQvcmVnaXN0ZXInXTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICAgICAgICBpZiAoIXVzZXJTZXJ2aWNlLnVzZXJWYWx1ZSAmJiAhcHVibGljUGF0aHMuaW5jbHVkZXMocGF0aCkpIHtcbiAgICAgICAgICAgIHNldEF1dGhvcml6ZWQoZmFsc2UpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FjY291bnQvbG9naW4nLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHJldHVyblVybDogcm91dGVyLmFzUGF0aCB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEF1dGhvcml6ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk5leHQuanMgMTEgLSBVc2VyIFJlZ2lzdHJhdGlvbiBhbmQgTG9naW4gRXhhbXBsZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAbmV4dC9uZXh0L25vLWNzcy10YWdzICovfVxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcHAtY29udGFpbmVyICR7dXNlciA/ICdiZy1saWdodCcgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICAgICAgPEFsZXJ0IC8+XG4gICAgICAgICAgICAgICAge2F1dGhvcml6ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogY3JlZGl0cyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9qYXNvbndhdG1vcmUuY29tL3Bvc3QvMjAyMS8wOC8xOS9uZXh0LWpzLTExLXVzZXItcmVnaXN0cmF0aW9uLWFuZC1sb2dpbi10dXRvcmlhbC13aXRoLWV4YW1wbGUtYXBwXCIgdGFyZ2V0PVwiX3RvcFwiPk5leHQuanMgMTEgLSBVc2VyIFJlZ2lzdHJhdGlvbiBhbmQgTG9naW4gVHV0b3JpYWwgd2l0aCBFeGFtcGxlIEFwcDwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VsZG9yYWJvby5naXRodWIuaW9cIiB0YXJnZXQ9XCJfdG9wXCI+ZWxkb3JhYm9vLmdpdGh1Yi5pbzwvYT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VyU2VydmljZSIsIk5hdiIsIkFsZXJ0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJhdXRob3JpemVkIiwic2V0QXV0aG9yaXplZCIsImF1dGhDaGVjayIsImFzUGF0aCIsImhpZGVDb250ZW50IiwiZXZlbnRzIiwib24iLCJvZmYiLCJ1cmwiLCJ1c2VyVmFsdWUiLCJwdWJsaWNQYXRocyIsInBhdGgiLCJzcGxpdCIsImluY2x1ZGVzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJyZXR1cm5VcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});