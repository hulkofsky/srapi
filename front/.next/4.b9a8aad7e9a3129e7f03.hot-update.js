webpackHotUpdate(4,{

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
        escalatorHiddenContentTimer: null
      }
    }), _temp));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.updateRoomTypesImagesClasses.bind(this), {
        passive: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateRoomTypesImagesClasses);
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
      var advantagesNames = document.querySelectorAll(".roof-block .advantage-name");
      var sliderControls = document.querySelectorAll(".roof-block .slider-control");

      for (var i = 0; i < advantagesNames.length; ++i) {
        if (i !== index) {
          advantagesNames[i].classList.remove("active");
          sliderControls[i].classList.remove("active");
        } else {
          advantagesNames[i].classList.add("active");
          sliderControls[i].classList.add("active");
        }
      }
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var locations = this.props.locations;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "home page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "skateboard-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        id: "heroVideo",
        className: "heroVideo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
        src: "/static/siska.mp4",
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this3.scrollToBlock('.status-quo-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "future generation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "status-quo-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "The status quo doesn't make great leaders ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), " or change ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), " the world.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "give-a-fuck-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 p0 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-8 p0 quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "we don\u2019t give a fuck about the status quo"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "keep-talking-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 p0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "We do things differently. We help you become who you want to be, not just through university but by providing a place which respects you. Encourages you to network, collaborate and relax for your hard work."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this3.scrollToBlock('.escalator-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Keep talking"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
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
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "escalator-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines-mask-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rising-standarts-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "RAISING THE STANDARDS OF STUDENT LIVING"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Every standard starts with a problem that needs solving. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }), "Ours was that student housing is exactly that. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }), "Housing. Nothing more. We\u2019re creating the more."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "tour-block",
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
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bedroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/bedroom.jpg",
        alt: "bedroom",
        className: "img-fluid animated-image bedroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, "Refined personal bedrooms for whatever you get up to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "kitchen-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/kitchen.jpg",
        alt: "kitchen",
        className: "img-fluid animated-image kitchen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "Takeaway slaying, sleek looking, party space kitchens"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bathroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/bathroom.jpg",
        alt: "bathroom",
        className: "img-fluid animated-image bathroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "A home from home, right down to the bathrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this3.scrollToBlock('.just-living-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "Take a tour"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line line3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "just-living-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "football",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, "We put a football pitch on your roof and a cinema in your basement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "THIS ISN\u2019T ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }), "STUDENT LIVING. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), "IT\u2019S JUST LIVING.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "roof",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "roof-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, "THIS ISN\u2019T ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }), "STUDENT LIVING. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }), "IT\u2019S JUST LIVING.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row advantages-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantage-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantages-names",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantage-name active",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        viewBox: "0 0 100 12",
        className: "advantage-name-svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("text", {
        className: "advantage-name-text",
        x: "0",
        y: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, "ROOFTOP SPORT"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantage-name",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        viewBox: "0 0 100 12",
        className: "advantage-name-svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("text", {
        className: "advantage-name-text",
        x: "0",
        y: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, "coworking"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantage-name",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        viewBox: "0 0 100 12",
        className: "advantage-name-svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("text", {
        className: "advantage-name-text",
        x: "0",
        y: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, "skyline bars"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantage-name",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
        viewBox: "0 0 100 12",
        className: "advantage-name-svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("text", {
        className: "advantage-name-text",
        x: "0",
        y: "11",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, "on site cinema")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "available-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, "Available at Loughborough, Bristol and Manchester"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolore nulla quidem repellat tenetur. Cumque distinctio dolor dolorum expedita fugiat."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        onClick: function onClick() {
          return _this3.setActiveAdvantage(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "partner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ellipse-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, "YOU\u2019LL GET 25% OFF OUR PARTNER\u2019S TECH"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/svg/samsung-logo.svg",
        alt: "Samsung logo",
        className: "img-fluid samsung-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, "This is more than your \uFB01rst, second or third year of Uni, ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }), "this is the beginning of your success story and adult life. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }), "So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, "Get 25% off"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/small-bedroom.jpg",
        alt: "bedroom",
        className: "partner-block-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, "Pixel perfect TVs and other tech integration in your spaces"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "leap-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-line quote-line-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, "TAKE THIS STEP"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-line quote-line-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, "TO MAKE YOUR LEAP")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "locations-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption-region-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "paragraph col-md-6 col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, "With over 30 locations across the country, we want there to be a location especially for you. Once you\u2019ve found the best fit, view it\u2019s bespoke page full of local trivia, recommendations and flat details to get you going in your new city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector-container col-md-6 col-lg-4 offset-lg-4 justify-content-md-end justify-content-center align-items-end d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector-prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, "Region:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "selected-region",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, "Northern England"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "locations-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
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
          lineNumber: 399
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, "Guildford")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, "featuring the UKs first LED cinema on site"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-2",
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
        src: "/static/images/FG_UI01_assets_home_location 2 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 2 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "colechester")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, "featuring the UKs first LED cinema on site"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-1",
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
        src: "/static/images/FG_UI01_assets_home_location 1 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
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
      }, "Guildford")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, "featuring the UKs first LED cinema on site"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "mailing-block text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }, "sign up to our mailing")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
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

/***/ })

})
//# sourceMappingURL=4.b9a8aad7e9a3129e7f03.hot-update.js.map