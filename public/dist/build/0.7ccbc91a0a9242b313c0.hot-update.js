webpackHotUpdate(0,{31:function(e,t,n){"use strict";(function(e){var o;Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLocations=t.fetchLocation=t.receiveLocations=t.receiveLocation=t.requestLocations=t.requestLocation=t.RECEIVE_LOCATIONS=t.RECEIVE_LOCATION=t.REQUEST_LOCATIONS=t.REQUEST_LOCATION=void 0,n(44),(o=n(4).enterModule)&&o(e);var r,s,i=t.REQUEST_LOCATION="REQUEST_LOCATION",c=t.REQUEST_LOCATIONS="REQUEST_LOCATIONS",u=t.RECEIVE_LOCATION="RECEIVE_LOCATION",a=t.RECEIVE_LOCATIONS="RECEIVE_LOCATIONS",f=t.requestLocation=function(e){return{type:i,id:e}},E=t.requestLocations=function(){return{type:c}},C=t.receiveLocation=function(e){return{type:u,location:e,receivedAt:Date.now()}},L=t.receiveLocations=function(e){return{type:a,locations:e,receivedAt:Date.now()}},O=t.fetchLocation=function(e){return function(t){return t(f()),fetch("/location/"+e).then(function(e){return e.json()},function(e){return console.log("An error occurred.",e)}).then(function(e){return t(C(e))})}},_=t.fetchLocations=function(){return function(e){return e(E()),fetch("/location").then(function(e){return e.json()},function(e){return console.log("An error occurred.",e)}).then(function(t){return e(L(t))})}};r=n(4).default,s=n(4).leaveModule,r&&(r.register(i,"REQUEST_LOCATION","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(c,"REQUEST_LOCATIONS","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(u,"RECEIVE_LOCATION","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(a,"RECEIVE_LOCATIONS","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(f,"requestLocation","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(E,"requestLocations","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(C,"receiveLocation","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(L,"receiveLocations","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(O,"fetchLocation","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),r.register(_,"fetchLocations","C:/Users/venom/Desktop/future_generation/front/src/actions/index.js"),s(e))}).call(this,n(8)(e))}});
//# sourceMappingURL=main.map