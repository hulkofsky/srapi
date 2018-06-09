webpackHotUpdate(4,{

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
/* unused harmony export fetchCurrentLocation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fetchLocations; });
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

/***/ "./pages/index.jsx":
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

var _jsxFileName = "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx";

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











var HomePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        escalatorHiddenContentClass: '',
        escalatorHiddenContentTimer: null,
        advantagesItems: [{
          id: 1,
          name: "ROOFTOP SPORT",
          image: '/static/images/FG_UI01_assets_home_features.jpg'
        }, {
          id: 2,
          name: "coworking",
          image: '/static/images/FG_UI01_assets_home_features.jpg'
        }, {
          id: 3,
          name: "skyline bars",
          image: '/static/images/FG_UI01_assets_home_features.jpg'
        }, {
          id: 4,
          name: "on site cinema",
          image: '/static/images/FG_UI01_assets_home_features.jpg'
        }],
        activeAdvantageItem: null,
        justLivingSlidingBlock: null
      }
    }), _temp));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var justLivingSlidingBlock = document.querySelector(".sliding-block");
      this.setState({
        justLivingSlidingBlock: justLivingSlidingBlock
      });
      window.addEventListener('scroll', this.updateRoomTypesImagesClasses.bind(this), {
        passive: true
      });
      justLivingSlidingBlock.addEventListener('wheel', this.handleJustLivingScroll.bind(this));
      this.setActiveAdvantage(0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateRoomTypesImagesClasses);
      window.removeEventListener('wheel', this.handleJustLivingScroll);
    }
  }, {
    key: "scrollToBlock",
    value: function scrollToBlock(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "isElementInViewport",
    value: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight - 300 && rect.bottom > 300;
    }
  }, {
    key: "updateRoomTypesImagesClasses",
    value: function updateRoomTypesImagesClasses() {
      var images = document.querySelectorAll('.animated-image'),
          i;

      for (i = 0; i < images.length; ++i) {
        if (this.isElementInViewport(images[i])) {
          images[i].classList.add("scrolled-into-view");
        } else {
          images[i].classList.remove("scrolled-into-view");
        }
      }
    }
  }, {
    key: "setActiveAdvantage",
    value: function setActiveAdvantage(index) {
      this.setState({
        activeAdvantageItem: this.state.advantagesItems[index]
      });
    }
  }, {
    key: "escalatorMouseOver",
    value: function escalatorMouseOver() {
      var _this2 = this;

      var timeout = setTimeout(function () {
        _this2.setState({
          escalatorHiddenContentClass: 'hidden-content-shown'
        });
      }, 3000);
      this.setState({
        escalatorHiddenContentTimer: timeout
      });
    }
  }, {
    key: "escalatorMouseOut",
    value: function escalatorMouseOut() {
      clearTimeout(this.state.escalatorHiddenContentTimer);
      this.setState({
        escalatorHiddenContentClass: ''
      });
    }
  }, {
    key: "handleJustLivingScroll",
    value: function handleJustLivingScroll(e) {
      var justLivingSlidingBlock = this.state.justLivingSlidingBlock;
      justLivingSlidingBlock.scrollLeft += e.deltaY;

      if (e.deltaY > 0) {
        if (!justLivingSlidingBlock.classList.contains('fully-scrolled')) {
          e.preventDefault();
        }

        if (justLivingSlidingBlock.scrollLeft < justLivingSlidingBlock.scrollWidth - justLivingSlidingBlock.clientWidth) {
          justLivingSlidingBlock.classList.add('partially-scrolled');
        } else {
          justLivingSlidingBlock.classList.remove('partially-scrolled');
          justLivingSlidingBlock.classList.add('fully-scrolled');
        }
      } else {
        if (justLivingSlidingBlock.classList.contains('partially-scrolled') || justLivingSlidingBlock.classList.contains('fully-scrolled')) {
          e.preventDefault();
        }

        if (justLivingSlidingBlock.scrollLeft > 0) {
          justLivingSlidingBlock.classList.add('partially-scrolled');
          justLivingSlidingBlock.classList.remove('fully-scrolled');
        } else {
          justLivingSlidingBlock.classList.remove('partially-scrolled');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var locations = this.props.locations;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "home page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "skateboard-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        id: "heroVideo",
        className: "heroVideo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: "/static/siska.mp4",
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this3.scrollToBlock('.status-quo-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "future generation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "status-quo-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "The status quo doesn't make great leaders ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), " or change ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), " the world.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "give-a-fuck-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 p0 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-8 p0 quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, "we don\u2019t give a fuck about the status quo"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "keep-talking-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 p0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "We do things differently. We help you become who you want to be, not just through university but by providing a place which respects you. Encourages you to network, collaborate and relax for your hard work."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this3.scrollToBlock('.escalator-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "Keep talking"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['escalator-block', this.state.escalatorHiddenContentClass].join(' '),
        onMouseOut: function onMouseOut() {
          return _this3.escalatorMouseOut();
        },
        onMouseOver: function onMouseOver() {
          return _this3.escalatorMouseOver();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "escalator-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines-mask-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rising-standarts-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "RAISING THE STANDARDS OF STUDENT LIVING"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, "Every standard starts with a problem that needs solving. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), "Ours was that student housing is exactly that. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }), "Housing. Nothing more. We\u2019re creating the more."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "tour-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bedroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_bedroom.jpg",
        alt: "bedroom",
        className: "img-fluid animated-image bedroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "Refined personal bedrooms for whatever you get up to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "kitchen-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_kitchen.jpg",
        alt: "kitchen",
        className: "img-fluid animated-image kitchen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "Takeaway slaying, sleek looking, party space kitchens"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bathroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_bathroom.jpg",
        alt: "bathroom",
        className: "img-fluid animated-image bathroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, "A home from home, right down to the bathrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this3.scrollToBlock('.just-living-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, "Take a tour"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line line3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "just-living-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "football",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, "We put a football pitch on your roof and a cinema in your basement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sliding-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, "THIS ISN\u2019T ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }), "STUDENT LIVING. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }), "IT\u2019S JUST LIVING."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "roof-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row advantages-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, this.state.activeAdvantageItem ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.activeAdvantageItem.image,
        className: "advantage-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }) : ''), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantages-names",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, this.state.advantagesItems && this.state.advantagesItems.map(function (advantageItem, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: ['advantage-name', _this3.state.activeAdvantageItem && advantageItem.id === _this3.state.activeAdvantageItem.id ? 'active' : ''].join(' '),
          key: index,
          onClick: function onClick() {
            return _this3.setActiveAdvantage(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
          viewBox: "0 0 100 12",
          className: "advantage-name-svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("text", {
          className: "advantage-name-text",
          x: "100",
          y: "11",
          textAnchor: "end",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          }
        }, advantageItem.name)));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "available-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, "Available at Loughborough, Bristol and Manchester"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolore nulla quidem repellat tenetur. Cumque distinctio dolor dolorum expedita fugiat."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "partner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ellipse-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, "YOU\u2019LL GET 25% OFF OUR PARTNER\u2019S TECH"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/svg/samsung-logo.svg",
        alt: "Samsung logo",
        className: "img-fluid samsung-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, "This is more than your \uFB01rst, second or third year of Uni, ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }), "this is the beginning of your success story and adult life. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), "So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, "Get 25% off"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/small-bedroom.jpg",
        alt: "bedroom",
        className: "partner-block-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, "Pixel perfect TVs and other tech integration in your spaces"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "leap-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-line quote-line-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, "TAKE THIS STEP"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-line quote-line-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, "TO MAKE YOUR LEAP")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "locations-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption-region-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "paragraph col-md-6 col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, "With over 30 locations across the country, we want there to be a location especially for you. Once you\u2019ve found the best fit, view it\u2019s bespoke page full of local trivia, recommendations and flat details to get you going in your new city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector-container col-md-6 col-lg-4 offset-lg-4 justify-content-md-end justify-content-center align-items-end d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector-prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, "Region:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "selected-region",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, "Northern England"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "locations-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        href: {
          pathname: '/location',
          query: {
            id: 1
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, "Guildford")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, "featuring the UKs first LED cinema on site"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 2 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 2 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        href: {
          pathname: '/location',
          query: {
            id: 1
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, "colechester")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, "featuring the UKs first LED cinema on site"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        href: {
          pathname: '/location',
          query: {
            id: 1
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, "Guildford")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, "featuring the UKs first LED cinema on site"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "mailing-block text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        }
      }, "sign up to our mailing")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
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
                return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["k" /* fetchLocations */])());

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

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HomePage.propTypes = {
  locations: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    url: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  }))
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    locations: state.locations.items
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchLocations: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions__["k" /* fetchLocations */], dispatch)
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(HomePage);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePage, "HomePage", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
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
//# sourceMappingURL=4.66f627c871d979ebb809.hot-update.js.map