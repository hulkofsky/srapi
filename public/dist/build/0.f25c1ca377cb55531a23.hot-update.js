webpackHotUpdate(0,{30:function(e,t,n){"use strict";(function(e){var o;Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLocations=t.receiveLocations=t.requestLocations=t.RECEIVE_LOCATIONS=t.REQUEST_LOCATIONS=void 0,n(43),(o=n(4).enterModule)&&o(e);var r,s,i=t.REQUEST_LOCATIONS="REQUEST_LOCATIONS",c=t.RECEIVE_LOCATIONS="RECEIVE_LOCATIONS",u=t.requestLocations=function(){return{type:i}},a=t.receiveLocations=function(e){return{type:c,locations:e,receivedAt:Date.now()}},f=t.fetchLocations=function(){return function(e){return e(u()),fetch("/location").then(function(e){return e.json()},function(e){return console.log("An error occurred.",e)}).then(function(t){return e(a(t))})}};r=n(4).default,s=n(4).leaveModule,r&&(r.register(i,"REQUEST_LOCATIONS","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(c,"RECEIVE_LOCATIONS","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(u,"requestLocations","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(a,"receiveLocations","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(f,"fetchLocations","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),s(e))}).call(this,n(8)(e))}});
//# sourceMappingURL=main.map