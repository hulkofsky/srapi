webpackHotUpdate(0,{43:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(0),_propTypes2=_interopRequireDefault(_propTypes),_reactRedux=__webpack_require__(20),_reactRouterDom=__webpack_require__(19),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var HomePage=function(_React$Component){function HomePage(){return _classCallCheck(this,HomePage),_possibleConstructorReturn(this,(HomePage.__proto__||Object.getPrototypeOf(HomePage)).apply(this,arguments))}return _inherits(HomePage,_React$Component),_createClass(HomePage,[{key:"componentDidMount",value:function(){this.props.dispatch(fetchLocations())}},{key:"render",value:function(){var e=this.props.locations;return _react2.default.createElement("div",null,_react2.default.createElement("h1",null,"Home page"),e.map(function(e){return _react2.default.createElement("div",null,_react2.default.createElement(_reactRouterDom.NavLink,{to:e.url},e.name))}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HomePage}(_react2.default.Component);HomePage.propTypes={locations:_propTypes2.default.shape({name:_propTypes2.default.string,url:_propTypes2.default.string})};var mapStateToProps=function(e){return{locations:e.locations.items}},mapDispatchToProps=function(e){return{onTodoClick:function(t){e(toggleTodo(t))}}},HomePageContainer=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(HomePage),_default=HomePageContainer,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(HomePage,"HomePage","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),reactHotLoader.register(HomePageContainer,"HomePageContainer","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),reactHotLoader.register(_default,"default","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),leaveModule(module))}).call(this,__webpack_require__(8)(module))}});
//# sourceMappingURL=main.map