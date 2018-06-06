webpackHotUpdate(6,{

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_CURRENT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REQUEST_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RECEIVE_CURRENT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RECEIVE_LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOW_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SUBMIT_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PROCESS_AUTH_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SHOW_MAIN_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HIDE_MAIN_MENU; });
/* unused harmony export requestCurrentLocation */
/* unused harmony export requestLocations */
/* unused harmony export receiveCurrentLocation */
/* unused harmony export receiveLocations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fetchCurrentLocation; });
/* unused harmony export fetchLocations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return showAuthDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hideAuthDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return showMainMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hideMainMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return submitAuthDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return processAuthDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var backendUrl = 'http://localhost:1337';
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
var SHOW_MAIN_MENU = 'SHOW_MAIN_MENU';
var HIDE_MAIN_MENU = 'HIDE_MAIN_MENU';
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
var showMainMenu = function showMainMenu() {
  return {
    type: SHOW_MAIN_MENU
  };
};
var hideMainMenu = function hideMainMenu() {
  return {
    type: HIDE_MAIN_MENU
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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(backendUrl, "backendUrl", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(authUrl, "authUrl", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(baseApiUrl, "baseApiUrl", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(REQUEST_CURRENT_LOCATION, "REQUEST_CURRENT_LOCATION", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(REQUEST_LOCATIONS, "REQUEST_LOCATIONS", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(RECEIVE_CURRENT_LOCATION, "RECEIVE_CURRENT_LOCATION", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(RECEIVE_LOCATIONS, "RECEIVE_LOCATIONS", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(SHOW_AUTH_DIALOG, "SHOW_AUTH_DIALOG", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(HIDE_AUTH_DIALOG, "HIDE_AUTH_DIALOG", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(SUBMIT_AUTH_DIALOG, "SUBMIT_AUTH_DIALOG", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(PROCESS_AUTH_DIALOG, "PROCESS_AUTH_DIALOG", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(SHOW_MAIN_MENU, "SHOW_MAIN_MENU", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(HIDE_MAIN_MENU, "HIDE_MAIN_MENU", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(requestCurrentLocation, "requestCurrentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(requestLocations, "requestLocations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(receiveCurrentLocation, "receiveCurrentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(receiveLocations, "receiveLocations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(fetchCurrentLocation, "fetchCurrentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(fetchLocations, "fetchLocations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(showAuthDialog, "showAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(hideAuthDialog, "hideAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(showMainMenu, "showMainMenu", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(hideMainMenu, "hideMainMenu", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(submitAuthDialog, "submitAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(processAuthDialog, "processAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "C:\\Users\\venom\\Desktop\\future_generation\\front\\components\\Header.jsx";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        navIsSticky: false
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "handleAuthDialogSubmit",
    value: function handleAuthDialogSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      this.props.submitAuthDialog(data.get("identifier"), data.get("password"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.updateMainMenuSticky.bind(this), {
        passive: true
      });
      this.updateMainMenuSticky();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateMainMenuSticky);
    }
  }, {
    key: "updateMainMenuSticky",
    value: function updateMainMenuSticky() {
      this.setState({
        navIsSticky: window.pageYOffset > 0
      });
    }
  }, {
    key: "toggleMainMenu",
    value: function toggleMainMenu() {
      this.props.mainMenu.isVisible ? this.props.hideMainMenu() : this.props.showMainMenu();
    }
  }, {
    key: "render",
    value: function render() {
      var authDialog = this.props.authDialog;
      var navClasses = ['nav', this.props.navClass ? this.props.navClass : '', this.state.navIsSticky ? 'sticky ' : '', this.props.mainMenu.isVisible ? 'menu-visible ' : ''];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Modal */], {
        show: authDialog.isVisible,
        onHide: this.props.hideAuthDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Modal */].Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Modal */].Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Authentication required")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Modal */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleAuthDialogSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "identifierInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Username or email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "identifier",
        className: "form-control",
        id: "identifierInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "passwordInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "password",
        name: "password",
        className: "form-control",
        id: "passwordInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Submit")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: navClasses.join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "logo",
        src: "/static/svg/logo.svg",
        alt: "logo",
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "burger",
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: 'main-menu ' + (this.props.mainMenu.isVisible ? 'visible' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/locations'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "locations"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/spotify'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "spotify"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/stance'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "stance"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/contact'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "main-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        onClick: this.toggleMainMenu.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "contact")))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    authDialog: state.authDialog,
    mainMenu: state.mainMenu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions__["o" /* showAuthDialog */], dispatch),
    hideAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions__["l" /* hideAuthDialog */], dispatch),
    submitAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions__["q" /* submitAuthDialog */], dispatch),
    processAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions__["n" /* processAuthDialog */], dispatch),
    showMainMenu: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions__["p" /* showMainMenu */], dispatch),
    hideMainMenu: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_5__actions__["m" /* hideMainMenu */], dispatch)
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Header);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "C:\\Users\\venom\\Desktop\\future_generation\\front\\components\\Header.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\Users\\venom\\Desktop\\future_generation\\front\\components\\Header.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\Users\\venom\\Desktop\\future_generation\\front\\components\\Header.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\venom\\Desktop\\future_generation\\front\\components\\Header.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/location.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Footer__ = __webpack_require__("./components/Footer.jsx");

var _jsxFileName = "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var whenSoberBlock = null;
var roomTypeSelectorTrigger = null;
var roomTypeSelectorTriggerHeight = 0;
var whenSoberBottomOffset = 0;

var LocationPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocationPage, _React$Component);

  function LocationPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LocationPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LocationPage.__proto__ || Object.getPrototypeOf(LocationPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        roomsTypeSelectorVisible: false
      }
    }), _temp));
  }

  _createClass(LocationPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      whenSoberBlock = document.querySelector(".when-sober");
      roomTypeSelectorTrigger = document.querySelector(".rooms-type-selector-trigger");
      whenSoberBottomOffset = whenSoberBlock.offsetTop + whenSoberBlock.getBoundingClientRect().height;
      roomTypeSelectorTriggerHeight = roomTypeSelectorTrigger.clientHeight;
      window.addEventListener('scroll', this.updateRoomTypeSelectorTriggerStyle.bind(this), {
        passive: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateRoomTypeSelectorTriggerStyle);
    }
  }, {
    key: "updateRoomTypeSelectorTriggerStyle",
    value: function updateRoomTypeSelectorTriggerStyle() {
      var roomTypeWidgetMinY = window.scrollY + window.innerHeight / 2 + roomTypeSelectorTriggerHeight;

      if (roomTypeWidgetMinY > whenSoberBottomOffset) {
        roomTypeSelectorTrigger.style.top = whenSoberBottomOffset - roomTypeWidgetMinY + window.innerHeight / 2 + 'px';
      } else {
        roomTypeSelectorTrigger.style.top = '50%';
      }
    }
  }, {
    key: "scrollToBlock",
    value: function scrollToBlock(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "toggleRoomsTypeSelector",
    value: function toggleRoomsTypeSelector() {
      this.setState({
        roomsTypeSelectorVisible: !this.state.roomsTypeSelectorVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "Location page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector-trigger', this.state.roomsTypeSelectorVisible ? 'd-none' : ''].join(' '),
        onClick: function onClick() {
          return _this2.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector', this.state.roomsTypeSelectorVisible ? '' : 'd-none'].join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Classic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "en suite"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "studio"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        onClick: function onClick() {
          return _this2.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row content-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "The Steel city itself. Welcome to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "city-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "sheffield")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 offset-md-2 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_hero.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-starting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Rooms starting from only \xA3000.00 per month"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row sections-and-slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "There was a time when the best thing to come out of Sheffield was a bunch of steel and 5 naked blokes. That time is gone. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), "Sheffield is emerging from it\u2019s shadows as a cultural northern powerhouse, here\u2019s your Future Generation guide to the best (and worst) of the steel city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "jump to a section"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.local-heroes');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.foodie');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.did-you-know');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.for-extrovers');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "for extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.local-music');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.team-mentality');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Local music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.when-sober');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "when you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item rooms-section-item",
        onClick: function onClick() {
          return _this2.scrollToBlock('.rooms-section');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Oh, and the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "suffix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Or keep scrolling. You\u2019re your own person."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-7 right d-flex align-items-md-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "feel like you know it better than a local")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "local-heroes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider with-next-visible heroes-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this2.setActiveLocalHero(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveLocalHero(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveLocalHero(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveLocalHero(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section foodie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_food.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, "Great, now I\u2019m hungry."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "Sheffields food economy has exploded in the past few years. With a number of street food hubs and restraunts you\u2019ll be able to find somewhere affordable at any time."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "Great, now I\u2019m hungry."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "did-you-know",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "facts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, "\u201Cey up chap\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "\u201Cey up chap\u201D")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this2.setActiveDidYouKnow(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveDidYouKnow(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveDidYouKnow(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveDidYouKnow(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "for-extrovers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, "For extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this2.setActiveForExtroverts(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveForExtroverts(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveForExtroverts(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveForExtroverts(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section local-music",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, "Local Music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_music.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, "Encore."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, "Audiophiles rejoice. Sheffield has a great music scene from the smaller bar gigs to sell-out tour concert venues. Whatever your genre, you\u2019re bound to find it here."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, "Encore."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "team-mentality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_activity 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, "Mixed Rowing"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this2.setActiveTeamMentality(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveTeamMentality(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveTeamMentality(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveTeamMentality(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "when-sober",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, "When you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row intro-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, "Ok so your family or friends are coming to visit for the day. What the hell are you going to do in all that time? Fotunately we\u2019ve got a list for you to try."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this2.setActiveWhenSober(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveWhenSober(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveWhenSober(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this2.setActiveWhenSober(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, "oh, and the rooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, "And what you\u2019re naturally here for, the rooms available in our building. We have 3 types available ranging through communal kitchen floors to private studio flats."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, "classic Bedrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-dark-orange-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        }
      }, "Book"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        }
      }, "Pan around what could be your bedroom, come multi-million business origin story"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }, "classic Kitchen"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_kitchen hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, "Look around a space where you\u2019ll revise, drink, regret drinking, and have deep conversations over pizza"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var store, pathname, query;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref2.store, pathname = _ref2.pathname, query = _ref2.query;
                _context.next = 3;
                return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["k" /* fetchCurrentLocation */])(query.id));

              case 3:
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

  return LocationPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

LocationPage.propTypes = {
  location: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    url: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  })
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    location: state.currentLocation
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, null)(LocationPage);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(whenSoberBlock, "whenSoberBlock", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  reactHotLoader.register(roomTypeSelectorTrigger, "roomTypeSelectorTrigger", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  reactHotLoader.register(roomTypeSelectorTriggerHeight, "roomTypeSelectorTriggerHeight", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  reactHotLoader.register(whenSoberBottomOffset, "whenSoberBottomOffset", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  reactHotLoader.register(LocationPage, "LocationPage", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\location.jsx");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/location")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./actions/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




function currentLocation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    item: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["f" /* REQUEST_CURRENT_LOCATION */]:
      return Object.assign({}, state, {
        isFetching: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* RECEIVE_CURRENT_LOCATION */]:
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
    case __WEBPACK_IMPORTED_MODULE_1__actions__["g" /* REQUEST_LOCATIONS */]:
      return Object.assign({}, state, {
        isFetching: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["e" /* RECEIVE_LOCATIONS */]:
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
    case __WEBPACK_IMPORTED_MODULE_1__actions__["h" /* SHOW_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isVisible: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* HIDE_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isVisible: false
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["j" /* SUBMIT_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isSubmitting: true,
        identifier: action.identifier,
        password: action.password
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* PROCESS_AUTH_DIALOG */]:
      return Object.assign({}, state, {
        isSubmitting: false,
        isVisible: false,
        auth: action.auth
      });

    default:
      return state;
  }
}

function mainMenu() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isVisible: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["i" /* SHOW_MAIN_MENU */]:
      return Object.assign({}, state, {
        isVisible: true
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* HIDE_MAIN_MENU */]:
      return Object.assign({}, state, {
        isVisible: false
      });

    default:
      return state;
  }
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  currentLocation: currentLocation,
  locations: locations,
  authDialog: authDialog,
  mainMenu: mainMenu
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(currentLocation, "currentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\reducers\\index.js");
  reactHotLoader.register(locations, "locations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\reducers\\index.js");
  reactHotLoader.register(authDialog, "authDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\reducers\\index.js");
  reactHotLoader.register(mainMenu, "mainMenu", "C:\\Users\\venom\\Desktop\\future_generation\\front\\reducers\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\venom\\Desktop\\future_generation\\front\\reducers\\index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.9b5acd7878cf57387cbe.hot-update.js.map