webpackHotUpdate(1,{

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_CURRENT_LOCATION; });
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
/* unused harmony export showAuthDialog */
/* unused harmony export hideAuthDialog */
/* unused harmony export submitAuthDialog */
/* unused harmony export processAuthDialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


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
  reactHotLoader.register(requestCurrentLocation, "requestCurrentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(requestLocations, "requestLocations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(receiveCurrentLocation, "receiveCurrentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(receiveLocations, "receiveLocations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(fetchCurrentLocation, "fetchCurrentLocation", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(fetchLocations, "fetchLocations", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(showAuthDialog, "showAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(hideAuthDialog, "hideAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(submitAuthDialog, "submitAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  reactHotLoader.register(processAuthDialog, "processAuthDialog", "C:\\Users\\venom\\Desktop\\future_generation\\front\\actions\\index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__("./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__("./node_modules/react-redux/es/utils/PropTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

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

var _default = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  currentLocation: currentLocation,
  locations: locations,
  authDialog: authDialog
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
  reactHotLoader.register(_default, "default", "C:\\Users\\venom\\Desktop\\future_generation\\front\\reducers\\index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.cd1b64af6373cbe6de21.hot-update.js.map