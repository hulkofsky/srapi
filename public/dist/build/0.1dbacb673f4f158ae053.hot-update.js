webpackHotUpdate(0,{40:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s,n=r(28),i=r(39);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments[1];switch(t.type){case i.REQUEST_LOCATIONS:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case i.RECEIVE_LOCATIONS:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.locations,lastUpdated:t.receivedAt});default:return e}}(s=r(4).enterModule)&&s(e);var d,o,c=(0,n.combineReducers)({locations:a}),u=c;t.default=u,d=r(4).default,o=r(4).leaveModule,d&&(d.register(a,"locations","C:/Users/venom/Desktop/future_generation/front/src/reducers/index.js"),d.register(c,"fgApp","C:/Users/venom/Desktop/future_generation/front/src/reducers/index.js"),d.register(u,"default","C:/Users/venom/Desktop/future_generation/front/src/reducers/index.js"),o(e))}).call(this,r(8)(e))}});
//# sourceMappingURL=main.map