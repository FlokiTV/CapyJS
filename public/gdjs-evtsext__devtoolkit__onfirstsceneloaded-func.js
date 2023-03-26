
if (typeof gdjs.evtsExt__DevToolkit__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__onFirstSceneLoaded = {};

gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.userFunc0x8a4b30 = function(runtimeScene, eventsFunctionContext) {
"use strict";
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).GameStats=e()}(this,(function(){"use strict";function t(t,e,r,i,n,a,o){try{var s=t[a](o),h=s.value}catch(t){return void r(t)}s.done?e(h):Promise.resolve(h).then(i,n)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,r){return(a=n()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var a=new(Function.bind.apply(t,n));return r&&i(a,r.prototype),a}).apply(null,arguments)}function o(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=s(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,h=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){h=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(h)throw a}}}}var c=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var e=function(t){var e,r=Object.prototype,i=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function l(t,e,r,i){var n=e&&e.prototype instanceof d?e:d,a=Object.create(n.prototype),o=new G(i||[]);return a._invoke=function(t,e,r){var i=f;return function(n,a){if(i===m)throw new Error("Generator is already running");if(i===p){if("throw"===n)throw a;return A()}for(r.method=n,r.arg=a;;){var o=r.delegate;if(o){var s=L(o,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var h=c(t,e,r);if("normal"===h.type){if(i=r.done?p:u,h.arg===y)continue;return{value:h.arg,done:r.done}}"throw"===h.type&&(i=p,r.method="throw",r.arg=h.arg)}}}(t,r,o),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",u="suspendedYield",m="executing",p="completed",y={};function d(){}function v(){}function g(){}var b={};b[a]=function(){return this};var O=Object.getPrototypeOf,T=O&&O(O(R([])));T&&T!==r&&i.call(T,a)&&(b=T);var x=g.prototype=d.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(n,a,o,s){var h=c(t[n],t,a);if("throw"!==h.type){var l=h.arg,f=l.value;return f&&"object"==typeof f&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(f).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(h.arg)}var n;this._invoke=function(t,i){function a(){return new e((function(e,n){r(t,i,e,n)}))}return n=n?n.then(a,a):a()}}function L(t,r){var i=t.iterator[r.method];if(i===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var n=c(i,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,y;var a=n.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function R(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(i.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,v.displayName=h(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,i,n,a){void 0===a&&(a=Promise);var o=new w(l(e,r,i,n),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(x),h(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},t.values=R,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(i,n){return s.type="throw",s.arg=t,r.next=i,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var h=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(h&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(h){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:R(t),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})),f=function(){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,i);var r={autoPlace:!0,targetFPS:60,redrawInterval:50,maximumHistory:100,scale:1,memoryUpdateInterval:1e3,memoryMaxHistory:600,FONT_FAMILY:"Arial",COLOR_FPS_BAR:"#34cfa2",COLOR_FPS_AVG:"#FFF",COLOR_TEXT_LABEL:"#FFF",COLOR_TEXT_TO_LOW:"#eee207",COLOR_TEXT_BAD:"#d34646",COLOR_TEXT_TARGET:"#d249dd",COLOR_BG:"#333333"};this.config=Object.assign(r,t),this.dom,this.canvas,this.ctx,this.currentTime,this.prevTime,this.shown=!0,this.lastMSAverage,this.lastMemoryMeasure=-Number.POSITIVE_INFINITY,this.labels={},this.labelColors={ms:this.config.COLOR_FPS_BAR,memory:this.config.COLOR_FPS_BAR},this.labelOrder=[],this.graphYOffset=0,this.extensions={},this.config.baseCanvasWidth=100*this.config.scale,this.config.baseCanvasHeight=150*this.config.scale,this.msGraph={width:this.config.baseCanvasWidth,height:.4*this.config.baseCanvasHeight,drawY:.16*this.config.baseCanvasHeight,barWidth:this.config.baseCanvasWidth/this.config.maximumHistory},this.memoryGraph={width:this.config.baseCanvasWidth,height:.2*this.config.baseCanvasHeight,drawY:.76*this.config.baseCanvasHeight,barWidth:this.config.baseCanvasWidth/this.config.memoryMaxHistory},this.init()}var n,s,h,f,m;return n=i,(s=[{key:"init",value:function(){this.canvas=document.createElement("canvas"),this.canvas.width=this.config.baseCanvasWidth,this.canvas.height=this.config.baseCanvasHeight,this.canvas.style.cssText="width:".concat(this.config.baseCanvasWidth*this.config.scale,"px;height:").concat(this.config.baseCanvasHeight*this.config.scale,"px;background-color:").concat(this.config.COLOR_BG),this.ctx=this.canvas.getContext("2d"),this.dom=document.createElement("div"),this.dom.appendChild(this.canvas),this.dom.setAttribute("data","gamestats"),this.dom.style.cssText="position:fixed;left:0;top:0;display: flex;flex-direction: column;gap: 5px;",this.config.autoPlace&&document.body.appendChild(this.dom),performance&&performance.memory&&(this.labels.memory=[]),this.update=this.update.bind(this),this.update()}},{key:"begin",value:function(t,e){if(["ms","fps","memory"].includes(t))throw"jsgraphy: label ".concat(t," is reserved");t||(t="ms"),"ms"===t&&this.currentTime&&(this.prevTime=this.currentTime),"ms"===t||this.labelColors[t]||(this.labelColors[t]=e||this.stringToColor(t),this.labelOrder.push(t)),this.labels[t]||(this.labels[t]=[]);var r=this.labels[t];if(r.push(performance.now()),r.length>this.config.maximumHistory&&r.shift(),"ms"===t&&(this.currentTime=performance.now(),this.prevTime)){this.labels.fps||(this.labels.fps=[]);var i=this.labels.fps;i.push(this.currentTime-this.prevTime),i.length>this.config.maximumHistory&&i.shift()}}},{key:"show",value:function(t){this.shown=t,this.dom.style.display=t?"flex":"none"}},{key:"end",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ms",e=this.labels[t];if(e){var r=e[e.length-1];e[e.length-1]=performance.now()-r}if("ms"===t)for(var i in this.extensions)this.extensions[i].endFrame()}},{key:"update",value:function(){if(this.shown&&this.draw(),performance&&performance.memory&&performance.now()-this.lastMemoryMeasure>this.config.memoryUpdateInterval){var t=this.labels.memory;t.push(performance.memory.usedJSHeapSize/u),t.length>this.config.memoryMaxHistory&&t.shift(),this.lastMemoryMeasure=performance.now()}for(var e in this.canvas&&this.canvas.parentNode&&setTimeout(this.update,this.config.redrawInterval),this.extensions)this.extensions[e].update()}},{key:"draw",value:function(){if(this.prevTime){var t=this.ctx,e=t.getImageData(1,0,t.canvas.width-this.msGraph.barWidth,t.canvas.height);t.putImageData(e,0,0),t.clearRect(t.canvas.width-this.msGraph.barWidth,0,this.msGraph.barWidth,t.canvas.height),t.clearRect(0,0,t.canvas.width,.16*t.canvas.height),performance.memory&&t.clearRect(0,.6*t.canvas.height,t.canvas.width,.16*t.canvas.height),this.drawGraph("ms",1e3/this.config.targetFPS),this.drawFPS(),this.graphYOffset=0;var r,i=l(this.labelOrder);try{for(i.s();!(r=i.n()).done;){var n=r.value;this.drawGraph(n,this.previousMaxMS,!0)}}catch(t){i.e(t)}finally{i.f()}this.drawLines(),performance&&performance.memory&&this.drawMemory()}}},{key:"drawLines",value:function(){var t=this.config,e=this.ctx,r=1e3/t.targetFPS,i=this.previousAverageMS,n=this.previousMaxMS;e.fillStyle=t.COLOR_FPS_AVG,i>1.66*r?e.fillStyle=t.COLOR_TEXT_BAD:i>1.33*r&&(e.fillStyle=t.COLOR_TEXT_TO_LOW);var a=i/n*this.msGraph.height,o=this.msGraph.drawY+this.msGraph.height-a;e.fillRect(this.msGraph.width-this.msGraph.barWidth,o,this.msGraph.barWidth,this.msGraph.barWidth),e.fillStyle=t.COLOR_TEXT_TARGET;var s=r/n*this.msGraph.height,h=this.msGraph.drawY+this.msGraph.height-s;e.fillRect(this.msGraph.width-this.msGraph.barWidth,h,this.msGraph.barWidth,this.msGraph.barWidth)}},{key:"drawGraph",value:function(t,e,r){var i=this.labels[t],n=this.getMMA(i),a=n.max,o=n.average;a=Math.max(1.5*o,a),e&&(a=Math.max(e,a));var s=this.config,h=this.ctx,l=i[i.length-1],c=0;r&&this.graphYOffset&&(c+=this.graphYOffset);var f=s.maximumHistory*this.msGraph.barWidth-this.msGraph.barWidth,u=this.msGraph.drawY,m=this.msGraph.barWidth,p=l/a*this.msGraph.height;u+=this.msGraph.height-p-c,h.globalAlpha=.5,h.fillStyle=this.labelColors[t],h.fillRect(f,u,m,p),h.globalAlpha=1,h.fillRect(f,u,m,m),r&&(this.graphYOffset=(this.graphYOffset||0)+p),"ms"===t&&(this.previousAverageMS=o,this.previousMaxMS=a)}},{key:"drawFPS",value:function(){var t=this.ctx,e=this.config,r=this.labels.fps;if(r){var i=this.getMMA(r),n=i.min,a=i.max,o=i.average,s=Math.round(1e3/o),h=Math.round(1e3/n),l=Math.round(1e3/a),c=this.labels.ms,f=c[c.length-1].toFixed(1),u=Math.round(1e3/r[r.length-1]),m=.01*e.baseCanvasHeight;t.textAlign="left";var p=.09*e.baseCanvasWidth;t.font="".concat(p,"px ").concat(e.FONT_FAMILY),t.textBaseline="top",t.fillStyle=e.COLOR_TEXT_LABEL,t.fillText("avg min max",m,m),p=.12*e.baseCanvasWidth,u<.33*e.targetFPS?t.fillStyle=e.COLOR_TEXT_BAD:u<.66*e.targetFPS&&(t.fillStyle=e.COLOR_TEXT_TO_LOW),t.font="".concat(p,"px ").concat(e.FONT_FAMILY),t.textAlign="right",t.fillText("".concat(u," fps"),e.baseCanvasWidth-m,m),p=.1*e.baseCanvasWidth,t.font="".concat(p,"px ").concat(e.FONT_FAMILY);var y=.12*e.baseCanvasWidth;t.fillText("".concat(f,"ms"),e.baseCanvasWidth-m,y+m),p=.09*e.baseCanvasWidth,t.font="".concat(p,"px ").concat(e.FONT_FAMILY);var d=.175*e.baseCanvasWidth,v=.1*e.baseCanvasWidth,g=.33*e.targetFPS,b=.66*e.targetFPS;t.fillStyle=e.COLOR_FPS_BAR,s<g?t.fillStyle=e.COLOR_TEXT_BAD:s<b&&(t.fillStyle=e.COLOR_TEXT_TO_LOW),t.fillText("".concat(s),d-m,v+m),t.fillStyle=e.COLOR_FPS_BAR,l<g?t.fillStyle=e.COLOR_TEXT_BAD:l<b&&(t.fillStyle=e.COLOR_TEXT_TO_LOW),t.fillText("".concat(l),2.1*d-2*m,v+m),t.fillStyle=e.COLOR_FPS_BAR,h<g?t.fillStyle=e.COLOR_TEXT_BAD:h<b&&(t.fillStyle=e.COLOR_TEXT_TO_LOW),t.fillText("".concat(h),3.3*d-3*m,v+m)}}},{key:"drawMemory",value:function(){var t=this.config,e=this.ctx,r=.01*t.baseCanvasHeight,i=.6*t.baseCanvasHeight;e.textAlign="left";var n=.09*t.baseCanvasWidth;e.font="".concat(n,"px ").concat(t.FONT_FAMILY),e.textBaseline="top",e.fillStyle=t.COLOR_TEXT_LABEL,e.fillText("reserved",r,i+r),e.fillStyle=t.COLOR_TEXT_TARGET,e.textAlign="right";var a=(performance.memory.jsHeapSizeLimit/u).toFixed(1);e.fillText("".concat(a,"MB"),t.baseCanvasWidth-r,i+r),e.textAlign="left",e.fillStyle=t.COLOR_TEXT_LABEL,e.fillText("allocated",r,1.12*i+r),e.textAlign="right";var o=(performance.memory.usedJSHeapSize/u).toFixed(1);e.fillStyle=t.COLOR_FPS_BAR,o>.9*a?e.fillStyle=t.COLOR_TEXT_BAD:o>.66*a&&(e.fillStyle=t.COLOR_TEXT_TO_LOW),e.fillText("".concat(o,"MB"),t.baseCanvasWidth-r,1.12*i+r);var s=performance.memory.jsHeapSizeLimit/u,h=this.labels.memory,l=h[h.length-1],c=this.memoryGraph.width-6*this.memoryGraph.barWidth,f=this.memoryGraph.drawY,m=6*this.memoryGraph.barWidth,p=l/s*this.memoryGraph.height;f+=this.memoryGraph.height-p,e.globalAlpha=.5,e.fillStyle=this.labelColors.memory,e.fillRect(c,f,m,p),e.globalAlpha=1,e.fillRect(c,f,m,m);var y=this.getMMA(this.labels.memory).average;e.fillStyle=t.COLOR_FPS_AVG,y>.9*s?e.fillStyle=t.COLOR_TEXT_BAD:y>.66*s&&(e.fillStyle=t.COLOR_TEXT_TO_LOW);var d=y/s*this.memoryGraph.height,v=this.memoryGraph.drawY+this.memoryGraph.height-d;e.fillRect(this.memoryGraph.width-6*this.memoryGraph.barWidth,v,6*this.memoryGraph.barWidth,6*this.memoryGraph.barWidth),e.fillStyle=t.COLOR_TEXT_TARGET;var g=this.memoryGraph.height,b=this.memoryGraph.drawY+this.memoryGraph.height-g;e.fillRect(this.memoryGraph.width-6*this.memoryGraph.barWidth,b,6*this.memoryGraph.barWidth,6*this.memoryGraph.barWidth)}},{key:"getMMA",value:function(t){var e,r=Number.POSITIVE_INFINITY,i=-Number.POSITIVE_INFINITY,n=0,a=l(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;o<r&&(r=o),o>i&&(i=o),n+=o}}catch(t){a.e(t)}finally{a.f()}return{min:r,max:i,average:n/=t.length}}},{key:"stringToColor",value:function(t){for(var e=0,r=0;r<t.length;r++)e=t.charCodeAt(r)+((e<<5)-e);var i=(16777215&e).toString(16).toUpperCase();return"#".concat("00000".substring(0,6-i.length)).concat(i)}},{key:"enableExtension",value:(f=c.mark((function t(e,r){var i,n;return c.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.extensions[e]){t.next=2;break}return t.abrupt("return",null);case 2:return t.prev=2,t.next=5,import("./gamestats-".concat(e,".module.js"));case 5:i=t.sent,n=a(i.default,[this].concat(o(r))),this.extensions[e]=n,t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(2),console.log(t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,this,[[2,10]])})),m=function(){var e=this,r=arguments;return new Promise((function(i,n){var a=f.apply(e,r);function o(e){t(a,i,n,o,s,"next",e)}function s(e){t(a,i,n,o,s,"throw",e)}o(void 0)}))},function(t,e){return m.apply(this,arguments)})}])&&r(n.prototype,s),h&&r(n,h),i}(),u=1048576;return f}));

gdjs._GameStats = new GameStats();

document.body.appendChild( gdjs._GameStats.dom );


};
gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.userFunc0x8a4b30(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.userFunc0x75edd8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._vstats = {
    isLoad: false,
    app: {}, //vue app
    getApp: () => document.querySelector("#_vapp"),
    panel: (title, val) =>{ //return html panel
        let p = document.createElement('p')
        p.innerHTML = `<div data-id='${title}'>${title} <span>{{ ${val} }}</span></div>`
        return p
    }
}

const addScript = ( src, callback ) => {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  s.onload=callback;
  document.body.appendChild( s );
}

let gs = document.querySelector('[data="gamestats"]')
let app = document.createElement('div')
let style = document.createElement('style')
style.type = 'text/css';
style.appendChild(document.createTextNode(`
    #_vapp{
        font-family: sans-serif;
        font-size: 10px;
        padding: 2px;
        background: rgb(51, 51, 51);
        color: #fff
    }
    #_vapp p{
        margin:0;
        padding:0
    }
    #_vapp div span{
        float:right
    }
    #_vapp pre{
        font-size: 10px;
        background: #0000004a;
        margin: 0;
        margin-top: 2px;
        padding: 2px;
    }
    #_vapp input{
        width:96px;
        height: 8px;
        font-size: 10px;
        background:transparent;
        border:none;
        border-bottom:1px solid #565656;
        color: #fff;
        outline: none;
    }
    #_vapp button{
        padding: 0 3px;
        float: right;
        height: 12px;
        border: none;
        margin: 0;
        font-size: 8px;
    }
`))

app.id = "_vapp"
app.appendChild(gdjs._vstats.panel('time','now'))
app.appendChild(gdjs._vstats.panel('instances','instances'))
app.appendChild(gdjs._vstats.panel('sprites','sprites'))
app.appendChild(gdjs._vstats.panel('particles','particles'))
gs.appendChild(style)
gs.appendChild(app)


app.innerHTML += `
    <template v-for="(item, key) in list">
        <p>
            <div :style="item.value === '' ? 'margin-top:3px;border-top:1px solid #565656' : 'padding-left:2px' ">
            {{ key }} <span>{{ item.value }}</span>
            </div>
        </p>
    </template>
    <pre>
<template v-for="log in logs">{{ log.log }}\n</template>
    </pre>
    <input placeholder="$>" v-model="command" v-on:keyup.enter="pushCommand">
    <br>
    <button onclick="location.reload()">reload</button>
`

addScript('https://cdn.jsdelivr.net/npm/vue@2', ()=>{
    gdjs._Vue = Vue
    gdjs._vstats.app = new gdjs._Vue({
        el: '#_vapp',
        data(){
            return {
                start: 0,
                now: 0,
                command:'',
                commands:[],
                commandList:{},
                logs:[],
                list:{},
                instances: runtimeScene._allInstancesList.length,
                sprites: 0,
                particles: 0
            }
        },
        mounted(){
            gdjs._vstats.isLoad = true
            this.start = new Date().getTime()
        },
        methods:{
            pushCommand(){
                if(!this.commandList[this.command]){
                    this.pushLog({
                        cmd: this.command,
                        log: "cmd not found"
                    })
                }else{
                    this.commands.push(this.command)
                }
                this.command = ""
            },
            runCommand(cmd, log){
                this.commands.shift()
                this.pushLog({
                    cmd: this.command,
                    log: log
                })
            },
            hasCommand(cmd, log){
                this.registerCommand(cmd)
                if(!this.commands.length) return false
                let has = this.commands[0] == cmd
                if(has) this.runCommand(cmd, log)
                return has
            },
            registerCommand(cmd){
                if(!this.commandList[cmd])
                    this.commandList[cmd] = {
                        cmd: cmd
                    }
            },
            pushLog(obj){
                if(this.logs.length > 4) this.logs.shift()
                this.logs.push(obj)
            },
            update(){
                this.now = this.msToTime(new Date().getTime()-this.start)
                this.updateList()
                this.instances = runtimeScene._allInstancesList.length
                let sprites = 0
                let particles = 0
                runtimeScene._allInstancesList.forEach(o =>{
                    if(o.constructor.name == 'SpriteRuntimeObject') sprites++
                    if(o.constructor.name == 'ParticleEmitterObject'){
                        particles = particles + parseInt(o._renderer.emitter.particleCount)
                    }
                })
                this.sprites = sprites
                this.particles = particles
                this.$forceUpdate() // grant update (free if particles = 0 | why??? need discorver 🕵️‍♀️ )
            },
            updateList(){
                Object.keys(this.list)
                    .forEach( o =>{
                        if(this.list[o].key)
                            this.list[o].value = runtimeScene._variables.get(this.list[o].key).getValue()
                    })
            },
            msToTime(duration) {
                let milliseconds = Math.floor((duration % 1000) / 100),
                    seconds      = Math.floor((duration / 1000) % 60),
                    minutes      = Math.floor((duration / (1000 * 60)) % 60),
                    hours        = Math.floor((duration / (1000 * 60 * 60)) % 24);

                hours   = (hours < 10) ? "0" + hours : hours;
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;

                return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
            }
        }
    })
})

document.querySelector('canvas').addEventListener('click', ()=>{
    document.querySelector('canvas').focus()
})
};
gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{

{ //Subevents
gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.userFunc0x75edd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__DevToolkit__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
