module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_CURRENT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RECEIVE_CURRENT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RECEIVE_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOW_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SUBMIT_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROCESS_AUTH_DIALOG; });
/* unused harmony export requestCurrentLocation */
/* unused harmony export requestLocations */
/* unused harmony export receiveCurrentLocation */
/* unused harmony export receiveLocations */
/* unused harmony export fetchCurrentLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fetchLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return showAuthDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hideAuthDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return submitAuthDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return processAuthDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);

var backendUrl = 'http://desktop-9pqed1r:1337';
var authUrl = backendUrl + '/auth';
var baseApiUrl = backendUrl + '/api';
var REQUEST_CURRENT_LOCATION = 'REQUEST_CURRENT_LOCATION';
var REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
var RECEIVE_CURRENT_LOCATION = 'RECEIVE_CURRENT_LOCATION';
var RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
var SHOW_AUTH_DIALOG = 'SHOW_AUTH_DIALOG';
var HIDE_AUTH_DIALOG = 'HIDE_AUTH_DIALOG';
var SUBMIT_AUTH_DIALOG = 'SUBMIT_AUTH_DIALOG';
var PROCESS_AUTH_DIALOG = 'PROCESS_AUTH_DIALOG';
var requestCurrentLocation = function requestCurrentLocation(locationID) {
  return {
    type: REQUEST_CURRENT_LOCATION,
    id: locationID
  };
};
var requestLocations = function requestLocations() {
  return {
    type: REQUEST_LOCATIONS
  };
};
var receiveCurrentLocation = function receiveCurrentLocation(json) {
  return {
    type: RECEIVE_CURRENT_LOCATION,
    location: json,
    receivedAt: Date.now()
  };
};
var receiveLocations = function receiveLocations(json) {
  return {
    type: RECEIVE_LOCATIONS,
    locations: json,
    receivedAt: Date.now()
  };
};
var fetchCurrentLocation = function fetchCurrentLocation(locationID) {
  return function (dispatch) {
    dispatch(requestCurrentLocation());
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()(baseApiUrl + '/location/' + locationID).then(function (response) {
      return response.json();
    }, function (error) {
      return console.log('An error occurred.', error);
    }).then(function (json) {
      return dispatch(receiveCurrentLocation(json));
    });
  };
};
var fetchLocations = function fetchLocations() {
  return function (dispatch) {
    dispatch(requestLocations());
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()(baseApiUrl + '/location').then(function (response) {
      return response.json();
    }, function (error) {
      return console.log('An error occurred.', error);
    }).then(function (json) {
      return dispatch(receiveLocations(json));
    });
  };
};
var showAuthDialog = function showAuthDialog() {
  return {
    type: SHOW_AUTH_DIALOG
  };
};
var hideAuthDialog = function hideAuthDialog() {
  return {
    type: HIDE_AUTH_DIALOG
  };
};
var submitAuthDialog = function submitAuthDialog(identifier, password) {
  return function (dispatch) {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default()(authUrl + '/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: identifier,
        password: password
      })
    }).then(function (response) {
      return response.json();
    }, function (error) {
      return console.log('An error occurred.', error);
    }).then(function (json) {
      if (json.error) {
        alert(json.message);
      } else {
        dispatch(processAuthDialog(json));
      }
    });
  };
};
var processAuthDialog = function processAuthDialog(auth) {
  return {
    type: PROCESS_AUTH_DIALOG,
    auth: auth
  };
};

/***/ }),

/***/ "./pages/_app.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store.js");

var _jsxFileName = "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\_app.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* initStore */])(
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a)));

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./actions/index.js");



function currentLocation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    item: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["e" /* REQUEST_CURRENT_LOCATION */]:
      return Object.assign({}, state, {
        isFetching: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* RECEIVE_CURRENT_LOCATION */]:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.location,
        lastUpdated: action.receivedAt
      });

    default:
      return state;
  }
}

function locations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    items: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["f" /* REQUEST_LOCATIONS */]:
      return Object.assign({}, state, {
        isFetching: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* RECEIVE_LOCATIONS */]:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.locations,
        lastUpdated: action.receivedAt
      });

    default:
      return state;
  }
}

function authDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isVisible: false,
    isSubmitting: false,
    identifier: null,
    password: null,
    auth: null,
    error: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["g" /* SHOW_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isVisible: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* HIDE_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isVisible: false
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["h" /* SUBMIT_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isSubmitting: true,
        identifier: action.identifier,
        password: action.password
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* PROCESS_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isSubmitting: false,
        isVisible: false,
        auth: action.auth
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  currentLocation: currentLocation,
  locations: locations,
  authDialog: authDialog
}));

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./reducers/index.js");





var appInitialState = {
  locations: [],
  currentLocation: null,
  authDialog: {
    isVisible: false,
    isSubmitting: false,
    identifier: '',
    password: '',
    auth: null,
    error: null
  }
};
var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appInitialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map