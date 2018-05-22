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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var HomePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.updateRoomTypesClasses.bind(this), {
        passive: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateRoomTypesClasses);
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
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }
  }, {
    key: "updateRoomTypesClasses",
    value: function updateRoomTypesClasses() {
      var images = document.querySelectorAll('.animated-image'),
          i;

      for (i = 0; i < images.length; ++i) {
        console.log(this.isElementInViewport(images[i]));
      }
    }
  }, {
    key: "toggleElementClass",
    value: function toggleElementClass(el, className) {
      el.classList.toggle("className");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var locations = this.props.locations;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "home page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "logo",
        src: "/static/svg/logo.svg",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "burger",
        src: "/static/svg/burger.svg",
        alt: "burger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "skateboard-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this.scrollToBlock('.status-quo-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "future generation"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "status-quo-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "The status quo doesn't make great leaders ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), " or change ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), " the world.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "give-a-fuck-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 p0 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-8 p0 quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "we don\u2019t give a fuck about the status quo"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "keep-talking-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 p0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "We do things differently. We help you become who you want to be, not just through university but by providing a place which respects you. Encourages you to network, collaborate and relax for your hard work."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this.scrollToBlock('.escalator-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "Keep talking"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "escalator-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "escalator-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rising-standarts-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "RAISING THE STANDARDS OF STUDENT LIVING"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Every standard starts with a problem that needs solving. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), "Ours was that student housing is exactly that. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), "Housing. Nothing more. We\u2019re creating the more."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "tour-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bedroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/bedroom.jpg",
        alt: "bedroom",
        className: "img-fluid animated-image bedroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "Refined personal bedrooms for whatever you get up to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "kitchen-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/kitchen.jpg",
        alt: "kitchen",
        className: "img-fluid animated-image kitchen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Takeaway slaying, sleek looking, party space kitchens"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bathroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/bathroom.jpg",
        alt: "bathroom",
        className: "img-fluid animated-image bathroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "A home from home, right down to the bathrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this.scrollToBlock('.just-living-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, "Take a tour"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line line3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "just-living-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "football",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "We put a football pitch on your roof and a cinema in your basement."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, "THIS ISN\u2019T ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), "STUDENT LIVING. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }), "IT\u2019S JUST LIVING.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "roof",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "roof-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "background-quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "THIS ISN\u2019T ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), "STUDENT LIVING. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }), "IT\u2019S JUST LIVING.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "full-football",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "advantages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, "ROOFTOP SPORT", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "svg-advantages-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/svg/text.svg",
        alt: "Advantages",
        className: "img-fluid svg-advantages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "available-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, "Available at Loughborough, Bristol and Manchester"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolore nulla quidem repellat tenetur. Cumque distinctio dolor dolorum expedita fugiat."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "partner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ellipse-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, "YOU\u2019LL GET 25% OFF OUR PARTNER\u2019S TECH"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/svg/samsung-logo.svg",
        alt: "Samsung logo",
        className: "samsung-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, "This is more than your \uFB01rst, second or third year of Uni, ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }), "this is the beginning of your success story and adult life. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), "So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, "Get 25% off"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/small-bedroom.jpg",
        alt: "bedroom",
        className: "partner-block-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, "Pixel perfect TVs and other tech integration in your spaces"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "leap-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-line quote-line-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, "TAKE THIS STEP"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote-line quote-line-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "TO MAKE YOUR LEAP")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "locations-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption-region-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "paragraph col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, "With over 30 locations across the country, we want there to be a location especially for you. Once you\u2019ve found the best fit, view it\u2019s bespoke page full of local trivia, recommendations and flat details to get you going in your new city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector-container col-md-4 offset-md-4 justify-content-md-end justify-content-center align-items-end d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector-prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, "Region:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "region-selector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "selected-region",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, "Northern England"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "locations-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
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
        src: "/static/images/FG_UI01_assets_home_location 1 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, "Guildford"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "featuring the UKs first LED cinema on site"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 2 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 2 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, "colechester"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, "featuring the UKs first LED cinema on site"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-item d-flex align-items-center justify-content-center type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 main.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, "featuring the UKs first LED cinema on site")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_location 1 detail.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "center-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, "Guildford"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "featuring the UKs first LED cinema on site"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "mailing-block text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, "sign up to our mailing")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
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
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var store, pathname, query;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, pathname = _ref.pathname, query = _ref.query;
                _context.next = 3;
                return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["i" /* fetchLocations */])());

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
    fetchLocations: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions__["i" /* fetchLocations */], dispatch)
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
//# sourceMappingURL=4.d7888da0b0f345c7a97f.hot-update.js.map