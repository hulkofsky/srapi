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
    key: "setActiveSlide",
    value: function setActiveSlide(slider, nextActiveSlideIndex) {
      var _this2 = this;

      var pxToScroll = 0;
      console.log(slider.activeSlideIndex);
      slider.controls.map(function (control, controlIndex) {
        control.classList.remove('active');
        pxToScroll += slider.slides[controlIndex].clientWidth;

        if (controlIndex == nextActiveSlideIndex) {
          control.classList.add('active');

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
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "Location page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector-trigger', this.state.roomsTypeSelectorVisible ? 'd-none' : ''].join(' '),
        onClick: function onClick() {
          return _this4.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector', this.state.roomsTypeSelectorVisible ? '' : 'd-none'].join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Classic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "en suite"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
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
          lineNumber: 143
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row content-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "The Steel city itself. Welcome to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "city-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "sheffield")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 offset-md-2 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_hero.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-starting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Rooms starting from only \xA3000.00 per month"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row sections-and-slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "There was a time when the best thing to come out of Sheffield was a bunch of steel and 5 naked blokes. That time is gone. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), "Sheffield is emerging from it\u2019s shadows as a cultural northern powerhouse, here\u2019s your Future Generation guide to the best (and worst) of the steel city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "jump to a section"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.local-heroes');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.foodie');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.did-you-know');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.for-extrovers');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "for extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.local-music');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.team-mentality');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Local music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.when-sober');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "when you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item rooms-section-item",
        onClick: function onClick() {
          return _this4.scrollToBlock('.rooms-section');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Oh, and the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "suffix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, "Or keep scrolling. You\u2019re your own person."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-7 right d-flex align-items-md-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "feel like you know it better than a local")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "local-heroes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider with-next-visible heroes-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section foodie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_food.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, "Great, now I\u2019m hungry."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, "Sheffields food economy has exploded in the past few years. With a number of street food hubs and restraunts you\u2019ll be able to find somewhere affordable at any time."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, "Great, now I\u2019m hungry."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "did-you-know",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "facts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, "\u201Cey up chap\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
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
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "\u201Cey up chap\u201D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. 1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, "\u201Cey up chap 1\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 1"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, "\u201Cey up chap 1\u201D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. 2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, "\u201Cey up chap 2\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 2"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, "\u201Cey up chap 2\u201D")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "for-extrovers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, "For extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider for-extrovers-list with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section local-music",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, "Local Music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_music.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }, "Encore."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, "Audiophiles rejoice. Sheffield has a great music scene from the smaller bar gigs to sell-out tour concert venues. Whatever your genre, you\u2019re bound to find it here."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, "Encore."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "team-mentality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_activity 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        }
      }, "Mixed Rowing"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "when-sober",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        }
      }, "When you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row intro-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }, "Ok so your family or friends are coming to visit for the day. What the hell are you going to do in all that time? Fotunately we\u2019ve got a list for you to try."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider when-sober-list with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        }
      }, "oh, and the rooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        }
      }, "And what you\u2019re naturally here for, the rooms available in our building. We have 3 types available ranging through communal kitchen floors to private studio flats."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        }
      }, "classic Bedrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-dark-orange-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        }
      }, "Book"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        }
      }, "Pan around what could be your bedroom, come multi-million business origin story"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        }
      }, "classic Kitchen"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_kitchen hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        }
      }, "Look around a space where you\u2019ll revise, drink, regret drinking, and have deep conversations over pizza"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
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
//# sourceMappingURL=5.e8cf077a5ae25bd5d868.hot-update.js.map