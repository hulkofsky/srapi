webpackHotUpdate(4,{

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_MailingBlock__ = __webpack_require__("./components/MailingBlock.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_LocationsList__ = __webpack_require__("./components/LocationsList.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer__ = __webpack_require__("./components/Footer.jsx");
var _jsxFileName = "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx";

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









var wheelEventShouldBePrevented = false;

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
        advantageItemSvgX: 100,
        advantageItemSvgTextAnchor: 'end',
        activeAdvantageItem: null,
        justLivingSlidingBlock: null,
        windowLastScrollY: 0,
        windowLastTouchY: 0
      }
    }), _temp));
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var justLivingSlidingBlock = document.querySelector(".sliding-block");
      this.setState({
        justLivingSlidingBlock: justLivingSlidingBlock
      });
      window.addEventListener('scroll', this.updateRoomTypesImagesClasses.bind(this), {
        passive: true
      });
      window.addEventListener('scroll', this.handleJustLivingScroll.bind(this));
      window.addEventListener('touchstart', function (e) {
        _this2.setState({
          windowTouchLastY: e.touches[0].clientY
        });
      });
      window.addEventListener('touchmove', function (e) {
        e.deltaY = -1 / 10 * (e.changedTouches[0].clientY - _this2.state.windowTouchLastY);

        _this2.handleJustLivingScroll(e);
      });
      this.setActiveAdvantage(0);

      if (window.innerWidth <= 767) {
        this.setState({
          advantageItemSvgX: 0,
          advantageItemSvgTextAnchor: 'start'
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateRoomTypesImagesClasses);
      window.removeEventListener('scroll', this.handleJustLivingScroll);
      window.removeEventListener('touchstart', this.handleJustLivingScroll);
      window.removeEventListener('touchmove', this.handleJustLivingScroll);
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
      var _this3 = this;

      var timeout = setTimeout(function () {
        _this3.setState({
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
      var deltaY = window.scrollY - this.state.windowLastScrollY;
      var justLivingSlidingBlock = this.state.justLivingSlidingBlock;
      var bounds = justLivingSlidingBlock.getBoundingClientRect();
      wheelEventShouldBePrevented = true;
      this.setState({
        windowLastScrollY: window.scrollY
      });

      if (deltaY > 0) {
        if (bounds.y > 90) {
          return;
        }
      }

      if (deltaY < 0) {
        if (bounds.height + bounds.y <= window.innerHeight) {
          return;
        }
      }

      justLivingSlidingBlock.scrollLeft += deltaY;

      if (deltaY > 0) {
        if (!justLivingSlidingBlock.classList.contains('fully-scrolled')) {
          window.addEventListener("wheel", function (e) {
            e.preventDefault();
          });
        } else {
          window.removeEventListener("wheel");
        }

        if (justLivingSlidingBlock.scrollLeft < justLivingSlidingBlock.scrollWidth - justLivingSlidingBlock.clientWidth) {
          justLivingSlidingBlock.classList.add('partially-scrolled');
        } else {
          justLivingSlidingBlock.classList.remove('partially-scrolled');
          justLivingSlidingBlock.classList.add('fully-scrolled');
        }
      } else {
        if (justLivingSlidingBlock.classList.contains('partially-scrolled') || justLivingSlidingBlock.classList.contains('fully-scrolled')) {
          window.addEventListener("wheel", function (e) {
            e.preventDefault();
          });
        } else {
          window.removeEventListener("wheel");
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
      var _this4 = this;

      var locations = this.props.locations;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
        title: "home page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "skateboard-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        id: "heroVideo",
        className: "heroVideo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
        src: "/static/siska.mp4",
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this4.scrollToBlock('.status-quo-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "future generation"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "status-quo-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "The status quo doesn't make great leaders ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), " or change ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), " the world.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "give-a-fuck-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-4 p0 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-8 p0 quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "we don\u2019t give a fuck about the status quo"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "keep-talking-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-4 p0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, "We do things differently. We help you become who you want to be, not just through university but by providing a place which respects you. Encourages you to network, collaborate and relax for your hard work."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this4.scrollToBlock('.escalator-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, "Keep talking"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: ['escalator-block', this.state.escalatorHiddenContentClass].join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row position-relative",
        onMouseOut: function onMouseOut() {
          return _this4.escalatorMouseOut();
        },
        onMouseOver: function onMouseOver() {
          return _this4.escalatorMouseOver();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "escalator-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lines-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lines-mask-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lines-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "rising-standarts-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "RAISING THE STANDARDS OF STUDENT LIVING"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, "Every standard starts with a problem that needs solving. Ours was that student housing is exactly that. Housing. Nothing more. We\u2019re creating the more."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dashes first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dashes second",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tour-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bedroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_bedroom.jpg",
        alt: "bedroom",
        className: "img-fluid animated-image bedroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "Refined personal bedrooms for whatever you get up to"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "kitchen-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_kitchen.jpg",
        alt: "kitchen",
        className: "img-fluid animated-image kitchen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, "Takeaway slaying, sleek looking, party space kitchens"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bathroom-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_home_bathroom.jpg",
        alt: "bathroom",
        className: "img-fluid animated-image bathroom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, "A home from home, right down to the bathrooms"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "quote-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, "This is more than your first, second or third year of Uni, this is the beginning of your success story and adult life. So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-container",
        onClick: function onClick() {
          return _this4.scrollToBlock('.just-living-block');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn tour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, "Take a tour"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "line line3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "just-living-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sliding-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "football",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, "We put a football pitch on your roof and a cinema in your basement."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, "THIS ISN\u2019T ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }), "STUDENT LIVING. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }), "IT\u2019S JUST LIVING."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "roof-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row advantages-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, this.state.activeAdvantageItem ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.state.activeAdvantageItem.image,
        className: "advantage-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }) : ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "advantages-names",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, this.state.advantagesItems && this.state.advantagesItems.map(function (advantageItem, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: ['advantage-name', _this4.state.activeAdvantageItem && advantageItem.id === _this4.state.activeAdvantageItem.id ? 'active' : ''].join(' '),
          key: index,
          onClick: function onClick() {
            return _this4.setActiveAdvantage(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
          viewBox: "0 0 100 12",
          className: "advantage-name-svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
          className: "advantage-name-text",
          x: _this4.state.advantageItemSvgX,
          y: "11",
          textAnchor: _this4.state.advantageItemSvgTextAnchor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          }
        }, advantageItem.name)));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "available",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "available-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, "Available at Loughborough, Bristol and Manchester"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dolore nulla quidem repellat tenetur. Cumque distinctio dolor dolorum expedita fugiat."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, this.state.advantagesItems && this.state.advantagesItems.map(function (advantageItem, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: ['slider-control', _this4.state.activeAdvantageItem && advantageItem.id === _this4.state.activeAdvantageItem.id ? 'active' : ''].join(' '),
          key: index,
          onClick: function onClick() {
            return _this4.setActiveAdvantage(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "lines",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "partner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ellipse-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "YOU\u2019LL GET 25% OFF OUR PARTNER\u2019S TECH"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/svg/samsung-logo.svg",
        alt: "Samsung logo",
        className: "img-fluid samsung-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "paragraph",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, "This is more than your \uFB01rst, second or third year of Uni, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }), "this is the beginning of your success story and adult life. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }), "So reject the status quo, and rebuild it. With us."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, "Get 25% off"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/small-bedroom.jpg",
        alt: "bedroom",
        className: "partner-block-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, "Pixel perfect TVs and other tech integration in your spaces"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "leap-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "quote-line quote-line-one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, "TAKE THIS STEP"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "quote-line quote-line-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, "TO MAKE YOUR LEAP")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_LocationsList__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_MailingBlock__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(null, null)(HomePage);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(wheelEventShouldBePrevented, "wheelEventShouldBePrevented", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx");
  reactHotLoader.register(HomePage, "HomePage", "C:\\Users\\venom\\Desktop\\future_generation\\front\\pages\\index.jsx");
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
//# sourceMappingURL=4.80b9336de36add3c6116.hot-update.js.map