webpackHotUpdate(5,{

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
      this.setupItemsSliders();
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
    key: "scrollTo",
    value: function scrollTo(element, property, to, duration) {
      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var start = element[property],
          change = to - start,
          currentTime = 0,
          increment = 20;

      var animateScroll = function animateScroll() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element[property] = val;

        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };

      animateScroll();
    }
  }, {
    key: "getElementWidth",
    value: function getElementWidth(element) {
      var style = element.currentStyle || window.getComputedStyle(element),
          width = element.offsetWidth,
          margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight),
          padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight),
          border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width + margin + padding + border;
    }
  }, {
    key: "setActiveSlide",
    value: function setActiveSlide(slider, nextActiveSlideIndex) {
      var _this2 = this;

      var pxToScroll = 0;
      slider.controls.map(function (control, controlIndex) {
        control.classList.remove('active');
        console.log(_this2.getElementWidth(slider.slides[controlIndex])); // pxToScroll += slider.slides[controlIndex].clientWidth

        if (controlIndex == nextActiveSlideIndex) {
          control.classList.add('active');
          slider.activeSlideIndex = nextActiveSlideIndex;

          _this2.scrollTo(slider, 'scrollLeft', pxToScroll, 500);
        }
      });
    }
  }, {
    key: "setupItemsSliders",
    value: function setupItemsSliders() {
      var _this3 = this;

      var sliders = Array.prototype.slice.call(document.querySelectorAll(".items-slider"));
      sliders.map(function (slider) {
        var controlsContainerNodes = slider.parentNode.getElementsByClassName("slider-controls");
        var controls = Array.prototype.slice.call(controlsContainerNodes[0].getElementsByClassName("slider-control"));
        var slides = Array.prototype.slice.call(slider.getElementsByClassName("item"));
        slider.controls = controls;
        slider.slides = slides;
        controls.map(function (control, index) {
          control.addEventListener("click", _this3.setActiveSlide.bind(_this3, slider, index));

          if (control.classList.contains('active')) {
            slider.activeSlideIndex = index;
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "Location page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector-trigger', this.state.roomsTypeSelectorVisible ? 'd-none' : ''].join(' '),
        onClick: function onClick() {
          return _this4.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector', this.state.roomsTypeSelectorVisible ? '' : 'd-none'].join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "Classic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "en suite"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "studio"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        onClick: function onClick() {
          return _this4.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row content-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "The Steel city itself. Welcome to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "city-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "sheffield")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 offset-md-2 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_hero.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-starting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Rooms starting from only \xA3000.00 per month"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row sections-and-slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "There was a time when the best thing to come out of Sheffield was a bunch of steel and 5 naked blokes. That time is gone. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), "Sheffield is emerging from it\u2019s shadows as a cultural northern powerhouse, here\u2019s your Future Generation guide to the best (and worst) of the steel city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "jump to a section"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.local-heroes');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.foodie');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.did-you-know');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.for-extrovers');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, "for extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.local-music');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.team-mentality');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, "Local music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.when-sober');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "when you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item rooms-section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.rooms-section');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "Oh, and the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "suffix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, "Or keep scrolling. You\u2019re your own person."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-7 right d-flex align-items-md-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "feel like you know it better than a local")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "local-heroes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider with-next-visible heroes-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section foodie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_food.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, "Great, now I\u2019m hungry."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, "Sheffields food economy has exploded in the past few years. With a number of street food hubs and restraunts you\u2019ll be able to find somewhere affordable at any time."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, "Great, now I\u2019m hungry."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "did-you-know",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "facts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "\u201Cey up chap\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, "\u201Cey up chap\u201D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. 1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, "\u201Cey up chap 1\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 1"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, "\u201Cey up chap 1\u201D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. 2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, "\u201Cey up chap 2\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 2"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, "\u201Cey up chap 2\u201D")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "for-extrovers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, "For extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider for-extrovers-list with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section local-music",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, "Local Music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_music.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }, "Encore."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, "Audiophiles rejoice. Sheffield has a great music scene from the smaller bar gigs to sell-out tour concert venues. Whatever your genre, you\u2019re bound to find it here."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }, "Encore."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "team-mentality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_activity 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, "Mixed Rowing"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "when-sober",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, "When you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row intro-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, "Ok so your family or friends are coming to visit for the day. What the hell are you going to do in all that time? Fotunately we\u2019ve got a list for you to try."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider when-sober-list with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, "oh, and the rooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }, "And what you\u2019re naturally here for, the rooms available in our building. We have 3 types available ranging through communal kitchen floors to private studio flats."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        }
      }, "classic Bedrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-dark-orange-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }, "Book"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        }
      }, "Pan around what could be your bedroom, come multi-million business origin story"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        }
      }, "classic Kitchen"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_kitchen hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        }
      }, "Look around a space where you\u2019ll revise, drink, regret drinking, and have deep conversations over pizza"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
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

/***/ })

})
//# sourceMappingURL=5.12635c27b58d3cd12463.hot-update.js.map