webpackHotUpdate(4,{

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "handleAuthDialogSubmit",
    value: function handleAuthDialogSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      this.props.submitAuthDialog(data.get("identifier"), data.get("password"));
    }
  }, {
    key: "render",
    value: function render() {
      var authDialog = this.props.authDialog;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */], {
        bsStyle: "primary",
        bsSize: "large",
        onClick: this.props.showAuthDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Show auth dialog"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Modal */], {
        show: authDialog.isVisible,
        onHide: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Modal */].Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Modal */].Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Authentication required")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Modal */].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "identifierInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Username or email"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "identifier",
        className: "form-control",
        id: "identifierInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
        htmlFor: "passwordInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "password",
        name: "password",
        className: "form-control",
        id: "passwordInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Submit")))));
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
    authDialog: state.authDialog
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions__["k" /* showAuthDialog */], dispatch),
    submitAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions__["l" /* submitAuthDialog */], dispatch),
    processAuthDialog: Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions__["j" /* processAuthDialog */], dispatch)
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Header);

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

/***/ "./node_modules/react-bootstrap/es/Modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_events__ = __webpack_require__("./node_modules/dom-helpers/events/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dom_helpers_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_helpers_ownerDocument__ = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_helpers_ownerDocument___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_dom_helpers_ownerDocument__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_inDOM__ = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_inDOM___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_inDOM__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize__ = __webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal__ = __webpack_require__("./node_modules/react-overlays/lib/Modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_overlays_lib_utils_isOverflowing__ = __webpack_require__("./node_modules/react-overlays/lib/utils/isOverflowing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_overlays_lib_utils_isOverflowing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_overlays_lib_utils_isOverflowing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ModalBody__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalBody.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ModalDialog__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ModalFooter__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalFooter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ModalHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ModalTitle__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utils_splitComponentProps__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/splitComponentProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");




























var propTypes = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal___default.a.propTypes, __WEBPACK_IMPORTED_MODULE_18__ModalDialog__["a" /* default */].propTypes, {

  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['static', true, false]),

  /**
   * Add an optional extra class name to .modal-backdrop
   * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
   */
  backdropClassName: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogComponentClass: __WEBPACK_IMPORTED_MODULE_15_prop_types_extra_lib_elementType___default.a,

  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * @private
   */
  container: __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal___default.a.propTypes.container
});

var defaultProps = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal___default.a.defaultProps, {
  animation: true,
  dialogComponentClass: __WEBPACK_IMPORTED_MODULE_18__ModalDialog__["a" /* default */]
});

var childContextTypes = {
  $bs_modal: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.shape({
    onHide: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func
  })
};

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props) {
  return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Fade__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props, { timeout: Modal.TRANSITION_DURATION }));
}

function BackdropTransition(props) {
  return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Fade__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props, { timeout: Modal.BACKDROP_TRANSITION_DURATION }));
}

/* eslint-enable no-use-before-define */

var Modal = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Modal, _React$Component);

  function Modal(props, context) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Modal);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props, context));

    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleDialogClick = _this.handleDialogClick.bind(_this);
    _this.setModalRef = _this.setModalRef.bind(_this);

    _this.state = {
      style: {}
    };
    return _this;
  }

  Modal.prototype.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide
      }
    };
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  Modal.prototype.setModalRef = function setModalRef(ref) {
    this._modal = ref;
  };

  Modal.prototype.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  Modal.prototype.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    __WEBPACK_IMPORTED_MODULE_6_dom_helpers_events___default.a.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  Modal.prototype.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    __WEBPACK_IMPORTED_MODULE_6_dom_helpers_events___default.a.off(window, 'resize', this.handleWindowResize);
  };

  Modal.prototype.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  Modal.prototype.updateStyle = function updateStyle() {
    if (!__WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_inDOM___default.a) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();
    var dialogHeight = dialogNode.scrollHeight;

    var document = __WEBPACK_IMPORTED_MODULE_7_dom_helpers_ownerDocument___default()(dialogNode);
    var bodyIsOverflowing = __WEBPACK_IMPORTED_MODULE_14_react_overlays_lib_utils_isOverflowing___default()(__WEBPACK_IMPORTED_MODULE_12_react_dom___default.a.findDOMNode(this.props.container || document.body));
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize___default()() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? __WEBPACK_IMPORTED_MODULE_9_dom_helpers_util_scrollbarSize___default()() : undefined
      }
    });
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        backdrop = _props.backdrop,
        backdropClassName = _props.backdropClassName,
        animation = _props.animation,
        show = _props.show,
        Dialog = _props.dialogComponentClass,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        onEntering = _props.onEntering,
        onExited = _props.onExited,
        props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['backdrop', 'backdropClassName', 'animation', 'show', 'dialogComponentClass', 'className', 'style', 'children', 'onEntering', 'onExited']);

    var _splitComponentProps = Object(__WEBPACK_IMPORTED_MODULE_24__utils_splitComponentProps__["a" /* default */])(props, __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal___default.a),
        baseModalProps = _splitComponentProps[0],
        dialogProps = _splitComponentProps[1];

    var inClassName = show && !animation && 'in';

    return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_Modal___default.a,
      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, baseModalProps, {
        ref: this.setModalRef,
        show: show,
        containerClassName: Object(__WEBPACK_IMPORTED_MODULE_22__utils_bootstrapUtils__["e" /* prefix */])(props, 'open'),
        transition: animation ? DialogTransition : undefined,
        backdrop: backdrop,
        backdropTransition: animation ? BackdropTransition : undefined,
        backdropClassName: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_22__utils_bootstrapUtils__["e" /* prefix */])(props, 'backdrop'), backdropClassName, inClassName),
        onEntering: Object(__WEBPACK_IMPORTED_MODULE_23__utils_createChainedFunction__["a" /* default */])(onEntering, this.handleEntering),
        onExited: Object(__WEBPACK_IMPORTED_MODULE_23__utils_createChainedFunction__["a" /* default */])(onExited, this.handleExited)
      }),
      __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        Dialog,
        __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, dialogProps, {
          style: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, this.state.style, style),
          className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, inClassName),
          onClick: backdrop === true ? this.handleDialogClick : null
        }),
        children
      )
    );
  };

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_10_react___default.a.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

Modal.Body = __WEBPACK_IMPORTED_MODULE_17__ModalBody__["a" /* default */];
Modal.Header = __WEBPACK_IMPORTED_MODULE_20__ModalHeader__["a" /* default */];
Modal.Title = __WEBPACK_IMPORTED_MODULE_21__ModalTitle__["a" /* default */];
Modal.Footer = __WEBPACK_IMPORTED_MODULE_19__ModalFooter__["a" /* default */];

Modal.Dialog = __WEBPACK_IMPORTED_MODULE_18__ModalDialog__["a" /* default */];

Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_22__utils_bootstrapUtils__["a" /* bsClass */])('modal', Object(__WEBPACK_IMPORTED_MODULE_22__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_25__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_25__utils_StyleConfig__["c" /* Size */].SMALL], Modal)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordion__ = __webpack_require__("./node_modules/react-bootstrap/es/Accordion.js");
/* unused harmony reexport Accordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert__ = __webpack_require__("./node_modules/react-bootstrap/es/Alert.js");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge__ = __webpack_require__("./node_modules/react-bootstrap/es/Badge.js");
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumb__ = __webpack_require__("./node_modules/react-bootstrap/es/Breadcrumb.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BreadcrumbItem__ = __webpack_require__("./node_modules/react-bootstrap/es/BreadcrumbItem.js");
/* unused harmony reexport BreadcrumbItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonGroup.js");
/* unused harmony reexport ButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ButtonToolbar__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* unused harmony reexport ButtonToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Carousel__ = __webpack_require__("./node_modules/react-bootstrap/es/Carousel.js");
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CarouselItem__ = __webpack_require__("./node_modules/react-bootstrap/es/CarouselItem.js");
/* unused harmony reexport CarouselItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Checkbox__ = __webpack_require__("./node_modules/react-bootstrap/es/Checkbox.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Clearfix__ = __webpack_require__("./node_modules/react-bootstrap/es/Clearfix.js");
/* unused harmony reexport Clearfix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CloseButton__ = __webpack_require__("./node_modules/react-bootstrap/es/CloseButton.js");
/* unused harmony reexport CloseButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ControlLabel__ = __webpack_require__("./node_modules/react-bootstrap/es/ControlLabel.js");
/* unused harmony reexport ControlLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Col__ = __webpack_require__("./node_modules/react-bootstrap/es/Col.js");
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Collapse__ = __webpack_require__("./node_modules/react-bootstrap/es/Collapse.js");
/* unused harmony reexport Collapse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/Dropdown.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DropdownButton__ = __webpack_require__("./node_modules/react-bootstrap/es/DropdownButton.js");
/* unused harmony reexport DropdownButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");
/* unused harmony reexport Fade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Form__ = __webpack_require__("./node_modules/react-bootstrap/es/Form.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FormControl__ = __webpack_require__("./node_modules/react-bootstrap/es/FormControl.js");
/* unused harmony reexport FormControl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FormGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/FormGroup.js");
/* unused harmony reexport FormGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Glyphicon__ = __webpack_require__("./node_modules/react-bootstrap/es/Glyphicon.js");
/* unused harmony reexport Glyphicon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Grid__ = __webpack_require__("./node_modules/react-bootstrap/es/Grid.js");
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__HelpBlock__ = __webpack_require__("./node_modules/react-bootstrap/es/HelpBlock.js");
/* unused harmony reexport HelpBlock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Image__ = __webpack_require__("./node_modules/react-bootstrap/es/Image.js");
/* unused harmony reexport Image */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__InputGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/InputGroup.js");
/* unused harmony reexport InputGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Jumbotron__ = __webpack_require__("./node_modules/react-bootstrap/es/Jumbotron.js");
/* unused harmony reexport Jumbotron */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Label__ = __webpack_require__("./node_modules/react-bootstrap/es/Label.js");
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ListGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroup.js");
/* unused harmony reexport ListGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ListGroupItem__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroupItem.js");
/* unused harmony reexport ListGroupItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Media__ = __webpack_require__("./node_modules/react-bootstrap/es/Media.js");
/* unused harmony reexport Media */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__MenuItem__ = __webpack_require__("./node_modules/react-bootstrap/es/MenuItem.js");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Modal__ = __webpack_require__("./node_modules/react-bootstrap/es/Modal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_33__Modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ModalBody__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalBody.js");
/* unused harmony reexport ModalBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ModalFooter__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalFooter.js");
/* unused harmony reexport ModalFooter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ModalHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalHeader.js");
/* unused harmony reexport ModalHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ModalTitle__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalTitle.js");
/* unused harmony reexport ModalTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Nav__ = __webpack_require__("./node_modules/react-bootstrap/es/Nav.js");
/* unused harmony reexport Nav */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Navbar__ = __webpack_require__("./node_modules/react-bootstrap/es/Navbar.js");
/* unused harmony reexport Navbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__NavbarBrand__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarBrand.js");
/* unused harmony reexport NavbarBrand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__NavDropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/NavDropdown.js");
/* unused harmony reexport NavDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__NavItem__ = __webpack_require__("./node_modules/react-bootstrap/es/NavItem.js");
/* unused harmony reexport NavItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Overlay__ = __webpack_require__("./node_modules/react-bootstrap/es/Overlay.js");
/* unused harmony reexport Overlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__OverlayTrigger__ = __webpack_require__("./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* unused harmony reexport OverlayTrigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__PageHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/PageHeader.js");
/* unused harmony reexport PageHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__PageItem__ = __webpack_require__("./node_modules/react-bootstrap/es/PageItem.js");
/* unused harmony reexport PageItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__Pager__ = __webpack_require__("./node_modules/react-bootstrap/es/Pager.js");
/* unused harmony reexport Pager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__Pagination__ = __webpack_require__("./node_modules/react-bootstrap/es/Pagination.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__Panel__ = __webpack_require__("./node_modules/react-bootstrap/es/Panel.js");
/* unused harmony reexport Panel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__PanelGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelGroup.js");
/* unused harmony reexport PanelGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__Popover__ = __webpack_require__("./node_modules/react-bootstrap/es/Popover.js");
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ProgressBar__ = __webpack_require__("./node_modules/react-bootstrap/es/ProgressBar.js");
/* unused harmony reexport ProgressBar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__Radio__ = __webpack_require__("./node_modules/react-bootstrap/es/Radio.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ResponsiveEmbed__ = __webpack_require__("./node_modules/react-bootstrap/es/ResponsiveEmbed.js");
/* unused harmony reexport ResponsiveEmbed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__Row__ = __webpack_require__("./node_modules/react-bootstrap/es/Row.js");
/* unused harmony reexport Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* unused harmony reexport SafeAnchor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__SplitButton__ = __webpack_require__("./node_modules/react-bootstrap/es/SplitButton.js");
/* unused harmony reexport SplitButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__Tab__ = __webpack_require__("./node_modules/react-bootstrap/es/Tab.js");
/* unused harmony reexport Tab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__TabContainer__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContainer.js");
/* unused harmony reexport TabContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__TabContent__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContent.js");
/* unused harmony reexport TabContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__Table__ = __webpack_require__("./node_modules/react-bootstrap/es/Table.js");
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__TabPane__ = __webpack_require__("./node_modules/react-bootstrap/es/TabPane.js");
/* unused harmony reexport TabPane */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__Tabs__ = __webpack_require__("./node_modules/react-bootstrap/es/Tabs.js");
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__Thumbnail__ = __webpack_require__("./node_modules/react-bootstrap/es/Thumbnail.js");
/* unused harmony reexport Thumbnail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ToggleButton__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButton.js");
/* unused harmony reexport ToggleButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ToggleButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButtonGroup.js");
/* unused harmony reexport ToggleButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__Tooltip__ = __webpack_require__("./node_modules/react-bootstrap/es/Tooltip.js");
/* unused harmony reexport Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__Well__ = __webpack_require__("./node_modules/react-bootstrap/es/Well.js");
/* unused harmony reexport Well */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__utils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/index.js");
/* unused harmony reexport utils */













































































































































/***/ })

})
//# sourceMappingURL=4.370e1c0b59c5f39d346a.hot-update.js.map