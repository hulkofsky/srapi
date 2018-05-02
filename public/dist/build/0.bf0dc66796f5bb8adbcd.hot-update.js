webpackHotUpdate(0,{25:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),a=n(0),i=n.n(a),c=n(53),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u="@@router/LOCATION_CHANGE",p={location:null};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,o=e.payload;return n===u?s({},t,{location:o}):t}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=h(this,t.call.apply(t,[this].concat(a))),o.handleLocationChange=function(t){o.store.dispatch({type:u,payload:t})},h(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){var t=this.props,e=t.store,n=t.history,o=t.isSSR;this.store=e||this.context.store,this.handleLocationChange(n.location),o||(this.unsubscribeFromHistory=n.listen(this.handleLocationChange))},e.prototype.componentWillUnmount=function(){this.unsubscribeFromHistory&&this.unsubscribeFromHistory()},e.prototype.render=function(){return r.a.createElement(c.Router,this.props)},e}(o.Component);f.propTypes={store:i.a.object,history:i.a.object.isRequired,children:i.a.node,isSSR:i.a.bool},f.contextTypes={store:i.a.object};var d=f,y=function(t){return t.router.location},m=function(t){var e=null,n=null;return function(o){var r=(y(o)||{}).pathname;if(r===e)return n;e=r;var a=Object(c.matchPath)(r,t);return a&&n&&a.url===n.url||(n=a),n}},b="@@router/CALL_HISTORY_METHOD";function v(t){return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return{type:b,payload:{method:t,args:n}}}}var g=v("push"),w=v("replace"),O=v("go"),R=v("goBack"),j=v("goForward"),P={push:g,replace:w,go:O,goBack:R,goForward:j};function C(t){return function(){return function(e){return function(n){if(n.type!==b)return e(n);var o=n.payload,r=o.method,a=o.args;t[r].apply(t,a)}}}}n.d(e,"ConnectedRouter",function(){return d}),n.d(e,"getLocation",function(){return y}),n.d(e,"createMatchSelector",function(){return m}),n.d(e,"LOCATION_CHANGE",function(){return u}),n.d(e,"routerReducer",function(){return l}),n.d(e,"CALL_HISTORY_METHOD",function(){return b}),n.d(e,"push",function(){return g}),n.d(e,"replace",function(){return w}),n.d(e,"go",function(){return O}),n.d(e,"goBack",function(){return R}),n.d(e,"goForward",function(){return j}),n.d(e,"routerActions",function(){return P}),n.d(e,"routerMiddleware",function(){return C})},28:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o,r=s(n(1)),a=s(n(0)),i=n(16),c=n(61);function s(t){return t&&t.__esModule?t:{default:t}}(o=n(4).enterModule)&&o(t);var u=function(t){var e=t.locations;return r.default.createElement("div",null,r.default.createElement("h1",null,"Home page"),e.map(function(t){return r.default.createElement(c.NavLink,{to:t.url},t.name)}))};u.propTypes={locations:a.default.shape({name:a.default.string,url:a.default.string})};var p,l,h=function(t){return{locations:[{name:"London",url:"london"},{name:"Colechester",url:"colechester"},{name:"Sheffield",url:"sheffield"}]}},f=(0,i.connect)(h)(u),d=f;e.default=d,p=n(4).default,l=n(4).leaveModule,p&&(p.register(u,"HomePage","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),p.register(h,"mapStateToProps","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),p.register(f,"CHomePage","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),p.register(d,"default","C:/Users/venom/Desktop/future_generation/front/src/components/HomePage.js"),l(t))}).call(this,n(8)(t))},49:function(t,e,n){"use strict";(function(t){var e,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(h(n(48)),h(n(1))),a=n(43),i=n(16),c=n(14),s=h(n(32)),u=(n(53),n(25)),p=h(n(29)),l=h(n(26));function h(t){return t&&t.__esModule?t:{default:t}}(e=n(4).enterModule)&&e(t);var f,d,y=(0,s.default)(),m=(0,u.routerMiddleware)(y),b=(0,c.createStore)((0,c.combineReducers)(o({},l.default,{router:u.routerReducer})),(0,c.applyMiddleware)(m));(0,a.render)(r.default.createElement(i.Provider,{store:b},r.default.createElement(u.ConnectedRouter,{history:y},r.default.createElement(p.default,null))),document.getElementById("root")),f=n(4).default,d=n(4).leaveModule,f&&(f.register(y,"history","C:/Users/venom/Desktop/future_generation/front/src/index.js"),f.register(m,"middleware","C:/Users/venom/Desktop/future_generation/front/src/index.js"),f.register(b,"store","C:/Users/venom/Desktop/future_generation/front/src/index.js"),d(t))}).call(this,n(8)(t))},51:function(t,e,n){"use strict";var o=n(2),r=n.n(o),a=n(3),i=n.n(a),c=n(1),s=n.n(c),u=n(0),p=n.n(u),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=h(this,t.call.apply(t,[this].concat(a))),o.state={match:o.computeMatch(o.props.history.location.pathname)},h(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getChildContext=function(){return{router:l({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},e.prototype.computeMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}},e.prototype.componentWillMount=function(){var t=this,e=this.props,n=e.children,o=e.history;i()(null==n||1===s.a.Children.count(n),"A <Router> may have only one child element"),this.unlisten=o.listen(function(){t.setState({match:t.computeMatch(o.location.pathname)})})},e.prototype.componentWillReceiveProps=function(t){r()(this.props.history===t.history,"You cannot change <Router history>")},e.prototype.componentWillUnmount=function(){this.unlisten()},e.prototype.render=function(){var t=this.props.children;return t?s.a.Children.only(t):null},e}(s.a.Component);f.propTypes={history:p.a.object.isRequired,children:p.a.node},f.contextTypes={router:p.a.object},f.childContextTypes={router:p.a.object.isRequired},e.a=f},52:function(t,e,n){"use strict";var o=n(2),r=n.n(o),a=n(3),i=n.n(a),c=n(1),s=n.n(c),u=n(0),p=n.n(u),l=n(6),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=function(t){return 0===s.a.Children.count(t)},y=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=f(this,t.call.apply(t,[this].concat(a))),o.state={match:o.computeMatch(o.props,o.context.router)},f(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getChildContext=function(){return{router:h({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},e.prototype.computeMatch=function(t,e){var n=t.computedMatch,o=t.location,r=t.path,a=t.strict,c=t.exact,s=t.sensitive;if(n)return n;i()(e,"You should not use <Route> or withRouter() outside a <Router>");var u=e.route,p=(o||u.location).pathname;return r?Object(l.a)(p,{path:r,strict:a,exact:c,sensitive:s}):u.match},e.prototype.componentWillMount=function(){r()(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),r()(!(this.props.component&&this.props.children&&!d(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),r()(!(this.props.render&&this.props.children&&!d(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},e.prototype.componentWillReceiveProps=function(t,e){r()(!(t.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),r()(!(!t.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(t,e.router)})},e.prototype.render=function(){var t=this.state.match,e=this.props,n=e.children,o=e.component,r=e.render,a=this.context.router,i=a.history,c=a.route,u=a.staticContext,p={match:t,location:this.props.location||c.location,history:i,staticContext:u};return o?t?s.a.createElement(o,p):null:r?t?r(p):null:n?"function"==typeof n?n(p):d(n)?null:s.a.Children.only(n):null},e}(s.a.Component);y.propTypes={computedMatch:p.a.object,path:p.a.string,exact:p.a.bool,strict:p.a.bool,sensitive:p.a.bool,component:p.a.func,render:p.a.func,children:p.a.oneOfType([p.a.func,p.a.node]),location:p.a.object},y.contextTypes={router:p.a.shape({history:p.a.object.isRequired,route:p.a.object.isRequired,staticContext:p.a.object})},y.childContextTypes={router:p.a.object.isRequired},e.a=y},53:function(t,e,n){"use strict";n.r(e);var o=n(59);n.d(e,"MemoryRouter",function(){return o.a});var r=n(58);n.d(e,"Prompt",function(){return r.a});var a=n(54);n.d(e,"Redirect",function(){return a.a});var i=n(52);n.d(e,"Route",function(){return i.a});var c=n(51);n.d(e,"Router",function(){return c.a});var s=n(57);n.d(e,"StaticRouter",function(){return s.a});var u=n(56);n.d(e,"Switch",function(){return u.a});var p=n(6);n.d(e,"matchPath",function(){return p.a});var l=n(55);n.d(e,"withRouter",function(){return l.a})},54:function(t,e,n){"use strict";var o=n(1),r=n.n(o),a=n(0),i=n.n(a),c=n(2),s=n.n(c),u=n(3),p=n.n(u),l=n(13),h=n(12),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},d=function(t,e,n,o){var r=void 0;"string"==typeof t?(r=function(t){var e=t||"/",n="",o="",r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));var a=e.indexOf("?");return-1!==a&&(n=e.substr(a),e=e.substr(0,a)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(r=f({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==e&&void 0===r.state&&(r.state=e));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(r.key=n),o?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=Object(l.default)(r.pathname,o.pathname)):r.pathname=o.pathname:r.pathname||(r.pathname="/"),r},y=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&Object(h.default)(t.state,e.state)};"undefined"==typeof window||!window.document||window.document.createElement,"function"==typeof Symbol&&Symbol.iterator,Object.assign,Object.assign,"function"==typeof Symbol&&Symbol.iterator,Object.assign;var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=d(t.to),n=d(this.props.to);y(e,n)?s()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},e.prototype.perform=function(){var t=this.context.router.history,e=this.props,n=e.push,o=e.to;n?t.push(o):t.replace(o)},e.prototype.render=function(){return null},e}(r.a.Component);m.propTypes={push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},m.defaultProps={push:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};e.a=m},55:function(t,e,n){"use strict";var o=n(1),r=n.n(o),a=n(0),i=n.n(a),c=n(9),s=n.n(c),u=n(52),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a=function(t){var e=function(e){var n=e.wrappedComponentRef,o=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["wrappedComponentRef"]);return r.a.createElement(u.a,{render:function(e){return r.a.createElement(t,p({},o,e,{ref:n}))}})};return e.displayName="withRouter("+(t.displayName||t.name)+")",e.WrappedComponent=t,e.propTypes={wrappedComponentRef:i.a.func},s()(e,t)}},56:function(t,e,n){"use strict";var o=n(1),r=n.n(o),a=n(0),i=n.n(a),c=n(2),s=n.n(c),u=n(3),p=n.n(u),l=n(6);var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Switch> outside a <Router>")},e.prototype.componentWillReceiveProps=function(t){s()(!(t.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),s()(!(!t.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')},e.prototype.render=function(){var t=this.context.router.route,e=this.props.children,n=this.props.location||t.location,o=void 0,a=void 0;return r.a.Children.forEach(e,function(e){if(r.a.isValidElement(e)){var i=e.props,c=i.path,s=i.exact,u=i.strict,p=i.sensitive,h=i.from,f=c||h;null==o&&(a=e,o=f?Object(l.a)(n.pathname,{path:f,exact:s,strict:u,sensitive:p}):t.match)}}),o?r.a.cloneElement(a,{location:n,computedMatch:o}):null},e}(r.a.Component);h.contextTypes={router:i.a.shape({route:i.a.object.isRequired}).isRequired},h.propTypes={children:i.a.node,location:i.a.object},e.a=h},57:function(t,e,n){"use strict";var o=n(2),r=n.n(o),a=n(3),i=n.n(a),c=n(1),s=n.n(c),u=n(0),p=n.n(u),l=n(5),h=n(51),f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var y=function(t,e){return t?f({},e,{pathname:Object(l.addLeadingSlash)(t)+e.pathname}):e},m=function(t){return"string"==typeof t?Object(l.parsePath)(t):(n=(e=t).pathname,o=void 0===n?"/":n,r=e.search,a=void 0===r?"":r,i=e.hash,c=void 0===i?"":i,{pathname:o,search:"?"===a?"":a,hash:"#"===c?"":c});var e,n,o,r,a,i,c},b=function(t){return"string"==typeof t?t:Object(l.createPath)(t)},v=function(t){return function(){i()(!1,"You cannot %s with <StaticRouter>",t)}},g=function(){},w=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=d(this,t.call.apply(t,[this].concat(a))),o.createHref=function(t){return Object(l.addLeadingSlash)(o.props.basename+b(t))},o.handlePush=function(t){var e=o.props,n=e.basename,r=e.context;r.action="PUSH",r.location=y(n,m(t)),r.url=b(r.location)},o.handleReplace=function(t){var e=o.props,n=e.basename,r=e.context;r.action="REPLACE",r.location=y(n,m(t)),r.url=b(r.location)},o.handleListen=function(){return g},o.handleBlock=function(){return g},d(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},e.prototype.componentWillMount=function(){r()(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.")},e.prototype.render=function(){var t=this.props,e=t.basename,n=(t.context,t.location),o=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["basename","context","location"]),r={createHref:this.createHref,action:"POP",location:function(t,e){if(!t)return e;var n=Object(l.addLeadingSlash)(t);return 0!==e.pathname.indexOf(n)?e:f({},e,{pathname:e.pathname.substr(n.length)})}(e,m(n)),push:this.handlePush,replace:this.handleReplace,go:v("go"),goBack:v("goBack"),goForward:v("goForward"),listen:this.handleListen,block:this.handleBlock};return s.a.createElement(h.a,f({},o,{history:r}))},e}(s.a.Component);w.propTypes={basename:p.a.string,context:p.a.object.isRequired,location:p.a.oneOfType([p.a.string,p.a.object])},w.defaultProps={basename:"",location:"/"},w.childContextTypes={router:p.a.object.isRequired},e.a=w},58:function(t,e,n){"use strict";var o=n(1),r=n.n(o),a=n(0),i=n.n(a),c=n(3),s=n.n(c);var u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.enable=function(t){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(t)},e.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},e.prototype.componentWillMount=function(){s()(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},e.prototype.componentWillReceiveProps=function(t){t.when?this.props.when&&this.props.message===t.message||this.enable(t.message):this.disable()},e.prototype.componentWillUnmount=function(){this.disable()},e.prototype.render=function(){return null},e}(r.a.Component);u.propTypes={when:i.a.bool,message:i.a.oneOfType([i.a.func,i.a.string]).isRequired},u.defaultProps={when:!0},u.contextTypes={router:i.a.shape({history:i.a.shape({block:i.a.func.isRequired}).isRequired}).isRequired},e.a=u},59:function(t,e,n){"use strict";var o=n(2),r=n.n(o),a=n(1),i=n.n(a),c=n(0),s=n.n(c),u=n(23),p=n.n(u),l=n(51);function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=h(this,t.call.apply(t,[this].concat(a))),o.history=p()(o.props),h(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){r()(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.")},e.prototype.render=function(){return i.a.createElement(l.a,{history:this.history,children:this.props.children})},e}(i.a.Component);f.propTypes={initialEntries:s.a.array,initialIndex:s.a.number,getUserConfirmation:s.a.func,keyLength:s.a.number,children:s.a.node},e.a=f},6:function(t,e,n){"use strict";var o=n(22),r=n.n(o),a={},i=0;e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof e&&(e={path:e});var n=e,o=n.path,c=void 0===o?"/":o,s=n.exact,u=void 0!==s&&s,p=n.strict,l=void 0!==p&&p,h=n.sensitive,f=function(t,e){var n=""+e.end+e.strict+e.sensitive,o=a[n]||(a[n]={});if(o[t])return o[t];var c=[],s={re:r()(t,c,e),keys:c};return i<1e4&&(o[t]=s,i++),s}(c,{end:u,strict:l,sensitive:void 0!==h&&h}),d=f.re,y=f.keys,m=d.exec(t);if(!m)return null;var b=m[0],v=m.slice(1),g=t===b;return u&&!g?null:{path:c,url:"/"===c&&""===b?"/":b,isExact:g,params:y.reduce(function(t,e,n){return t[e.name]=v[n],t},{})}}},60:function(t,e,n){"use strict";e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=p(n(2)),a=p(n(3)),i=n(18),c=n(5),s=p(n(17)),u=n(31);function p(t){return t&&t.__esModule?t:{default:t}}var l={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+(0,c.stripLeadingSlash)(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:c.stripLeadingSlash,decodePath:c.addLeadingSlash},slash:{encodePath:c.addLeadingSlash,decodePath:c.addLeadingSlash}},h=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},f=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(u.canUseDOM,"Hash history needs a DOM");var e=window.history,n=(0,u.supportsGoWithoutReloadUsingHash)(),p=t.getUserConfirmation,d=void 0===p?u.getConfirmation:p,y=t.hashType,m=void 0===y?"slash":y,b=t.basename?(0,c.stripTrailingSlash)((0,c.addLeadingSlash)(t.basename)):"",v=l[m],g=v.encodePath,w=v.decodePath,O=function(){var t=w(h());return(0,r.default)(!b||(0,c.hasBasename)(t,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+b+'".'),b&&(t=(0,c.stripBasename)(t,b)),(0,i.createLocation)(t)},R=(0,s.default)(),j=function(t){o(U,t),U.length=e.length,R.notifyListeners(U.location,U.action)},P=!1,C=null,x=function(){var t=h(),e=g(t);if(t!==e)f(e);else{var n=O(),o=U.location;if(!P&&(0,i.locationsAreEqual)(o,n))return;if(C===(0,c.createPath)(n))return;C=null,E(n)}},E=function(t){P?(P=!1,j()):R.confirmTransitionTo(t,"POP",d,function(e){e?j({action:"POP",location:t}):T(t)})},T=function(t){var e=U.location,n=M.lastIndexOf((0,c.createPath)(e));-1===n&&(n=0);var o=M.lastIndexOf((0,c.createPath)(t));-1===o&&(o=0);var r=n-o;r&&(P=!0,L(r))},_=h(),S=g(_);_!==S&&f(S);var k=O(),M=[(0,c.createPath)(k)],L=function(t){(0,r.default)(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},H=0,q=function(t){1===(H+=t)?(0,u.addEventListener)(window,"hashchange",x):0===H&&(0,u.removeEventListener)(window,"hashchange",x)},A=!1,U={length:e.length,action:"POP",location:k,createHref:function(t){return"#"+g(b+(0,c.createPath)(t))},push:function(t,e){(0,r.default)(void 0===e,"Hash history cannot push state; it is ignored");var n=(0,i.createLocation)(t,void 0,void 0,U.location);R.confirmTransitionTo(n,"PUSH",d,function(t){if(t){var e=(0,c.createPath)(n),o=g(b+e);if(h()!==o){C=e,function(t){window.location.hash=t}(o);var a=M.lastIndexOf((0,c.createPath)(U.location)),i=M.slice(0,-1===a?0:a+1);i.push(e),M=i,j({action:"PUSH",location:n})}else(0,r.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),j()}})},replace:function(t,e){(0,r.default)(void 0===e,"Hash history cannot replace state; it is ignored");var n=(0,i.createLocation)(t,void 0,void 0,U.location);R.confirmTransitionTo(n,"REPLACE",d,function(t){if(t){var e=(0,c.createPath)(n),o=g(b+e);h()!==o&&(C=e,f(o));var r=M.indexOf((0,c.createPath)(U.location));-1!==r&&(M[r]=e),j({action:"REPLACE",location:n})}})},go:L,goBack:function(){return L(-1)},goForward:function(){return L(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=R.setPrompt(t);return A||(q(1),A=!0),function(){return A&&(A=!1,q(-1)),e()}},listen:function(t){var e=R.appendListener(t);return q(1),function(){q(-1),e()}}};return U}},61:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),a=n(1),i=n.n(a),c=n(0),s=n.n(c),u=n(32),p=n.n(u),l=n(51).a;function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=h(this,t.call.apply(t,[this].concat(a))),o.history=p()(o.props),h(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},e.prototype.render=function(){return i.a.createElement(l,{history:this.history,children:this.props.children})},e}(i.a.Component);f.propTypes={basename:s.a.string,forceRefresh:s.a.bool,getUserConfirmation:s.a.func,keyLength:s.a.number,children:s.a.node};var d=f,y=n(60),m=n.n(y);function b(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var v=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=b(this,t.call.apply(t,[this].concat(a))),o.history=m()(o.props),b(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},e.prototype.render=function(){return i.a.createElement(l,{history:this.history,children:this.props.children})},e}(i.a.Component);v.propTypes={basename:s.a.string,getUserConfirmation:s.a.func,hashType:s.a.oneOf(["hashbang","noslash","slash"]),children:s.a.node};var g=v,w=n(3),O=n.n(w),R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var P=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},C=function(t){function e(){var n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=j(this,t.call.apply(t,[this].concat(a))),o.handleClick=function(t){if(o.props.onClick&&o.props.onClick(t),!t.defaultPrevented&&0===t.button&&!o.props.target&&!P(t)){t.preventDefault();var e=o.context.router.history,n=o.props,r=n.replace,a=n.to;r?e.replace(a):e.push(a)}},j(o,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){var t=this.props,e=(t.replace,t.to),n=t.innerRef,o=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["replace","to","innerRef"]);O()(this.context.router,"You should not use <Link> outside a <Router>");var r=this.context.router.history.createHref("string"==typeof e?{pathname:e}:e);return i.a.createElement("a",R({},o,{onClick:this.handleClick,href:r,ref:n}))},e}(i.a.Component);C.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},C.defaultProps={replace:!1},C.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired};var x=C,E=n(59).a,T=n(52).a,_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var k=function(t){var e=t.to,n=t.exact,o=t.strict,r=t.location,a=t.activeClassName,c=t.className,s=t.activeStyle,u=t.style,p=t.isActive,l=t.ariaCurrent,h=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","ariaCurrent"]);return i.a.createElement(T,{path:"object"===(void 0===e?"undefined":S(e))?e.pathname:e,exact:n,strict:o,location:r,children:function(t){var n=t.location,o=t.match,r=!!(p?p(o,n):o);return i.a.createElement(x,_({to:e,className:r?[c,a].filter(function(t){return t}).join(" "):c,style:r?_({},u,s):u,"aria-current":r&&l},h))}})};k.propTypes={to:x.propTypes.to,exact:s.a.bool,strict:s.a.bool,location:s.a.object,activeClassName:s.a.string,className:s.a.string,activeStyle:s.a.object,style:s.a.object,isActive:s.a.func,ariaCurrent:s.a.oneOf(["page","step","location","true"])},k.defaultProps={activeClassName:"active",ariaCurrent:"true"};var M=k,L=n(58).a,H=n(54).a,q=n(57).a,A=n(56).a,U=n(6).a,W=n(55).a;n.d(e,"BrowserRouter",function(){return d}),n.d(e,"HashRouter",function(){return g}),n.d(e,"Link",function(){return x}),n.d(e,"MemoryRouter",function(){return E}),n.d(e,"NavLink",function(){return M}),n.d(e,"Prompt",function(){return L}),n.d(e,"Redirect",function(){return H}),n.d(e,"Route",function(){return T}),n.d(e,"Router",function(){return l}),n.d(e,"StaticRouter",function(){return q}),n.d(e,"Switch",function(){return A}),n.d(e,"matchPath",function(){return U}),n.d(e,"withRouter",function(){return W})}});
//# sourceMappingURL=main.map