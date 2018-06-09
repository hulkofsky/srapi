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
    key: "setActiveSlide",
    value: function setActiveSlide(slider, activeSlideIndex) {
      slider.controls.map(function (control, controlIndex) {
        control.classList.remove('active');

        if (controlIndex == activeSlideIndex) {
          control.classList.add('active');
          slider.scrollLeft = 847 * activeSlideIndex;
        }
      });
    }
  }, {
    key: "setupItemsSliders",
    value: function setupItemsSliders() {
      var _this2 = this;

      var sliders = Array.prototype.slice.call(document.querySelectorAll(".items-slider"));
      sliders.map(function (slider) {
        var controlsContainerNodes = slider.parentNode.getElementsByClassName("slider-controls");
        var controls = Array.prototype.slice.call(controlsContainerNodes[0].getElementsByClassName("slider-control"));
        slider.controls = controls;
        controls.map(function (control, index) {
          control.addEventListener("click", _this2.setActiveSlide.bind(_this2, slider, index));

          if (control.classList.contains('active')) {
            slider.activeSlideIndex = index;
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "location-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        title: "Location page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector-trigger', this.state.roomsTypeSelectorVisible ? 'd-none' : ''].join(' '),
        onClick: function onClick() {
          return _this3.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: ['rooms-type-selector', this.state.roomsTypeSelectorVisible ? '' : 'd-none'].join(' '),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Classic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "en suite"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "type-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "studio"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "arrow",
        src: "/static/svg/FG_UI01_assets_arrow icon.svg",
        alt: "",
        onClick: function onClick() {
          return _this3.toggleRoomsTypeSelector();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "main-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row content-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "The Steel city itself. Welcome to"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "city-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "sheffield")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 offset-md-2 image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_hero.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-starting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Rooms starting from only \xA3000.00 per month"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row sections-and-slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-5 left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, "There was a time when the best thing to come out of Sheffield was a bunch of steel and 5 naked blokes. That time is gone. ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), "Sheffield is emerging from it\u2019s shadows as a cultural northern powerhouse, here\u2019s your Future Generation guide to the best (and worst) of the steel city."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "jump to a section"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "prefix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Jump to:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sections-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.local-heroes');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.foodie');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.did-you-know');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.for-extrovers');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "for extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.local-music');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.team-mentality');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Local music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.when-sober');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "when you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "section-item rooms-section-item",
        onClick: function onClick() {
          return _this3.scrollToBlock('.rooms-section');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Oh, and the rooms")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "suffix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Or keep scrolling. You\u2019re your own person."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-7 right d-flex align-items-md-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slogan",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "feel like you know it better than a local")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "local-heroes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, "Local Heroes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider with-next-visible heroes-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item hero type-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_local 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, "Helen Sharman"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, "First Briton in Space"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "Helen Patricia Sharman, OBE PhD, is a British chemist who became the first Briton in space and the first woman to visit the Mir space station in 1991. She received a BSc in chemistry at the University of Sheffield in 1984 and a PhD from Birkbeck, University of London. Helen worked as an engineer for GEC in London and later as a chemist for Mars Incorporated dealing with flavourant properties of chocolate. Sweet."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section foodie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, "Foodie Heaven"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_food.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, "Great, now I\u2019m hungry."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "Sheffields food economy has exploded in the past few years. With a number of street food hubs and restraunts you\u2019ll be able to find somewhere affordable at any time."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "Great, now I\u2019m hungry."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "did-you-know",
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
      }, "Did you know"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "facts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, "\u201Cey up chap\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, "\u201Cey up chap\u201D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. 1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, "\u201Cey up chap 1\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 1"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, "\u201Cey up chap 1\u201D"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "fact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, "From the nich\xE9 sayings to the interresting details, Sheffield has a lot to offer. So before you move there and become a Sheffieldian, lets get you up to speed. 2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, "\u201Cey up chap 2\u201D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, "Translation:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, "\u201CHow are you? or \u201Dare you alright?\u201D. Whether you\u2019re greeting someone down the local pub or just passing them in the street, \u2018ey up\u2019 is the go to phrase here in Sheffield. Ususally accompanied with a complimentary nod or even a smile. When someone says this to you, the best thing to do is return the gesture. 2"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "quote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, "\u201Cey up chap 2\u201D")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "for-extrovers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, "For extroverts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider for-extrovers-list with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_club 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, "Pop tarts"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }, "FG rating 7.5 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
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
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "vertical-image-section local-music",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, "Local Music"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_music.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, "Encore."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }, "Audiophiles rejoice. Sheffield has a great music scene from the smaller bar gigs to sell-out tour concert venues. Whatever your genre, you\u2019re bound to find it here."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-orange-transparent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn discount",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, "see our favourITES"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "dashes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, "Encore."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "team-mentality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, "team mentality"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_activity 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, "Mixed Rowing"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, "It\u2019s the elephant in the room. Despite being the best SU club night in the country there are some who dare to insult the hallowed grounds of Pop Tarts.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }), "Home to basic bitches and the final hurdle of many socials, Pop Tarts sells out within the week before it. So clearly they\u2019re doing something right. The SU really does have a simple brief here. Play fuck loads of Beyonc\xE9, Britney, and Chumbawumba. Simple, yet crowdpleasing."))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "when-sober",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, "When you\u2019re sober"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row intro-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, "Ok so your family or friends are coming to visit for the day. What the hell are you going to do in all that time? Fotunately we\u2019ve got a list for you to try."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "items-slider when-sober-list with-next-visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 1.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "item type-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/images/FG_UI01_assets_location_sober 2.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-1 name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        }
      }, "Tropical Butterfly"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "line-2 role",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        }
      }, "FG rating 8 / 10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        }
      }, "If you dream of escaping to a tropical climate, where exotic birds and butterflies fly freely over your head in a rainforest-like setting, then the Tropical Butterfly House is for you.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        }
      }), "Getting immersed in nature is what this wildlife and falconry centre is all about. Whether it\u2019s brightly coloured winged creatures flying around your head, walking through Meerkat Mansion, handling a bird of prey or, for the bravest, there are snakes, crocodiles and spiders in the Tropical House!"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-controls on-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "slider-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536
        }
      }, "oh, and the rooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        }
      }, "And what you\u2019re naturally here for, the rooms available in our building. We have 3 types available ranging through communal kitchen floors to private studio flats."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "rooms-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        }
      }, "classic Bedrooms"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn-dark-orange-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        }
      }, "Book"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        }
      }, "Pan around what could be your bedroom, come multi-million business origin story"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 room-part-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        }
      }, "classic Kitchen"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 book-btn-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "hero-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_kitchen hero.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, "Look around a space where you\u2019ll revise, drink, regret drinking, and have deep conversations over pizza"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "horizontal-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row additional-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-6 images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 1.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/images/FG_UI01_assets_location_bedroom thumbnail 2.jpg",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-4 offset-md-1 text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        }
      }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
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
//# sourceMappingURL=5.360fd4155e1f5edc0742.hot-update.js.map