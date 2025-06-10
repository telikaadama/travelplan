import"styles.css";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))y(f);new MutationObserver(f=>{for(const E of f)if(E.type==="childList")for(const v of E.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&y(v)}).observe(document,{childList:!0,subtree:!0});function l(f){const E={};return f.integrity&&(E.integrity=f.integrity),f.referrerPolicy&&(E.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?E.credentials="include":f.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function y(f){if(f.ep)return;f.ep=!0;const E=l(f);fetch(f.href,E)}})();function ir(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var fe={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var nr=fe.exports,Tn;function or(){return Tn||(Tn=1,function(h,c){(function(l,y){y(c)})(nr,function(l){var y="1.9.4";function f(t){var e,i,n,o;for(i=1,n=arguments.length;i<n;i++){o=arguments[i];for(e in o)t[e]=o[e]}return t}var E=Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}();function v(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var n=i.call(arguments,2);return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}}var A=0;function _(t){return"_leaflet_id"in t||(t._leaflet_id=++A),t._leaflet_id}function H(t,e,i){var n,o,r,a;return a=function(){n=!1,o&&(r.apply(i,o),o=!1)},r=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(a,e),n=!0)},r}function F(t,e,i){var n=e[1],o=e[0],r=n-o;return t===n&&i?t:((t-o)%r+r)%r+o}function S(){return!1}function w(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function C(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function b(t){return C(t).split(/\s+/)}function g(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?E(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function M(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")}var k=/\{ *([\w_ -]+) *\}/g;function N(t,e){return t.replace(k,function(i,n){var o=e[n];if(o===void 0)throw new Error("No value provided for variable "+i);return typeof o=="function"&&(o=o(e)),o})}var G=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function J(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var tt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function st(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var T=0;function m(t){var e=+new Date,i=Math.max(0,16-(e-T));return T=e+i,window.setTimeout(t,i)}var p=window.requestAnimationFrame||st("RequestAnimationFrame")||m,x=window.cancelAnimationFrame||st("CancelAnimationFrame")||st("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function I(t,e,i){if(i&&p===m)t.call(e);else return p.call(window,v(t,e))}function R(t){t&&x.call(window,t)}var Y={__proto__:null,extend:f,create:E,bind:v,get lastId(){return A},stamp:_,throttle:H,wrapNum:F,falseFn:S,formatNum:w,trim:C,splitWords:b,setOptions:g,getParamString:M,template:N,isArray:G,indexOf:J,emptyImageUrl:tt,requestFn:p,cancelFn:x,requestAnimFrame:I,cancelAnimFrame:R};function rt(){}rt.extend=function(t){var e=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=E(i);n.constructor=e,e.prototype=n;for(var o in this)Object.prototype.hasOwnProperty.call(this,o)&&o!=="prototype"&&o!=="__super__"&&(e[o]=this[o]);return t.statics&&f(e,t.statics),t.includes&&(It(t.includes),f.apply(null,[n].concat(t.includes))),f(n,t),delete n.statics,delete n.includes,n.options&&(n.options=i.options?E(i.options):{},f(n.options,t.options)),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var r=0,a=n._initHooks.length;r<a;r++)n._initHooks[r].call(this)}},e},rt.include=function(t){var e=this.prototype.options;return f(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},rt.mergeOptions=function(t){return f(this.prototype.options,t),this},rt.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function It(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=G(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var lt={on:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e);else{t=b(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var n in t)this._off(n,t[n],e);else{t=b(t);for(var o=arguments.length===1,r=0,a=t.length;r<a;r++)o?this._off(t[r]):this._off(t[r],e,i)}return this},_on:function(t,e,i,n){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var o={fn:e,ctx:i};n&&(o.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(o)}},_off:function(t,e,i){var n,o,r;if(this._events&&(n=this._events[t],!!n)){if(arguments.length===1){if(this._firingCount)for(o=0,r=n.length;o<r;o++)n[o].fn=S;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var a=this._listens(t,e,i);if(a!==!1){var s=n[a];this._firingCount&&(s.fn=S,this._events[t]=n=n.slice()),n.splice(a,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var n=f({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var r=0,a=o.length;r<a;r++){var s=o[r],u=s.fn;s.once&&this.off(t,u,s.ctx),u.call(s.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e,i,n){typeof t!="string"&&console.warn('"string" type argument expected');var o=e;typeof e!="function"&&(n=!!e,o=void 0,i=void 0);var r=this._events&&this._events[t];if(r&&r.length&&this._listens(t,o,i)!==!1)return!0;if(n){for(var a in this._eventParents)if(this._eventParents[a].listens(t,e,i,n))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var n=this._events[t]||[];if(!e)return!!n.length;i===this&&(i=void 0);for(var o=0,r=n.length;o<r;o++)if(n[o].fn===e&&n[o].ctx===i)return o;return!1},once:function(t,e,i){if(typeof t=="object")for(var n in t)this._on(n,t[n],e,!0);else{t=b(t);for(var o=0,r=t.length;o<r;o++)this._on(t[o],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[_(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[_(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,f({layer:t.target,propagatedFrom:t.target},t),!0)}};lt.addEventListener=lt.on,lt.removeEventListener=lt.clearAllEventListeners=lt.off,lt.addOneTimeEventListener=lt.once,lt.fireEvent=lt.fire,lt.hasEventListeners=lt.listens;var Ot=rt.extend(lt);function B(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var Ct=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(Z(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(Z(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ct(this.x),this.y=Ct(this.y),this},distanceTo:function(t){t=Z(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=Z(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=Z(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+w(this.x)+", "+w(this.y)+")"}};function Z(t,e,i){return t instanceof B?t:G(t)?new B(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,e,i)}function X(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}X.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof B||typeof t[0]=="number"||"x"in t)e=i=Z(t);else if(t=ct(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return Z((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return Z(this.min.x,this.max.y)},getTopRight:function(){return Z(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof B?t=Z(t):t=ct(t),t instanceof X?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=ct(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>=e.x&&n.x<=i.x,a=o.y>=e.y&&n.y<=i.y;return r&&a},overlaps:function(t){t=ct(t);var e=this.min,i=this.max,n=t.min,o=t.max,r=o.x>e.x&&n.x<i.x,a=o.y>e.y&&n.y<i.y;return r&&a},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,n=Math.abs(e.x-i.x)*t,o=Math.abs(e.y-i.y)*t;return ct(Z(e.x-n,e.y-o),Z(i.x+n,i.y+o))},equals:function(t){return t?(t=ct(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function ct(t,e){return!t||t instanceof X?t:new X(t,e)}function dt(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;n<o;n++)this.extend(i[n])}dt.prototype={extend:function(t){var e=this._southWest,i=this._northEast,n,o;if(t instanceof V)n=t,o=t;else if(t instanceof dt){if(n=t._southWest,o=t._northEast,!n||!o)return this}else return t?this.extend(W(t)||it(t)):this;return!e&&!i?(this._southWest=new V(n.lat,n.lng),this._northEast=new V(o.lat,o.lng)):(e.lat=Math.min(n.lat,e.lat),e.lng=Math.min(n.lng,e.lng),i.lat=Math.max(o.lat,i.lat),i.lng=Math.max(o.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,o=Math.abs(e.lng-i.lng)*t;return new dt(new V(e.lat-n,e.lng-o),new V(i.lat+n,i.lng+o))},getCenter:function(){return new V((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new V(this.getNorth(),this.getWest())},getSouthEast:function(){return new V(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof V||"lat"in t?t=W(t):t=it(t);var e=this._southWest,i=this._northEast,n,o;return t instanceof dt?(n=t.getSouthWest(),o=t.getNorthEast()):n=o=t,n.lat>=e.lat&&o.lat<=i.lat&&n.lng>=e.lng&&o.lng<=i.lng},intersects:function(t){t=it(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>=e.lat&&n.lat<=i.lat,a=o.lng>=e.lng&&n.lng<=i.lng;return r&&a},overlaps:function(t){t=it(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),r=o.lat>e.lat&&n.lat<i.lat,a=o.lng>e.lng&&n.lng<i.lng;return r&&a},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=it(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function it(t,e){return t instanceof dt?t:new dt(t,e)}function V(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}V.prototype={equals:function(t,e){if(!t)return!1;t=W(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+w(this.lat,t)+", "+w(this.lng,t)+")"},distanceTo:function(t){return Mt.distance(this,W(t))},wrap:function(){return Mt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return it([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new V(this.lat,this.lng,this.alt)}};function W(t,e,i){return t instanceof V?t:G(t)&&typeof t[0]!="object"?t.length===3?new V(t[0],t[1],t[2]):t.length===2?new V(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new V(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new V(t,e,i)}var Lt={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),o=this.transformation.transform(e.max,i);return new X(n,o)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?F(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?F(t.lat,this.wrapLat,!0):t.lat,n=t.alt;return new V(i,e,n)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),n=e.lat-i.lat,o=e.lng-i.lng;if(n===0&&o===0)return t;var r=t.getSouthWest(),a=t.getNorthEast(),s=new V(r.lat-n,r.lng-o),u=new V(a.lat-n,a.lng-o);return new dt(s,u)}},Mt=f({},Lt,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,r=Math.sin((e.lat-t.lat)*i/2),a=Math.sin((e.lng-t.lng)*i/2),s=r*r+Math.cos(n)*Math.cos(o)*a*a,u=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*u}}),fi=6378137,Oe={R:fi,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),o=Math.sin(n*e);return new B(this.R*t.lng*e,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var e=180/Math.PI;return new V((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=fi*Math.PI;return new X([-t,-t],[t,t])}()};function Ae(t,e,i,n){if(G(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=n}Ae.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new B((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function Yt(t,e,i,n){return new Ae(t,e,i,n)}var Be=f({},Mt,{code:"EPSG:3857",projection:Oe,transformation:function(){var t=.5/(Math.PI*Oe.R);return Yt(t,.5,-t,.5)}()}),zn=f({},Be,{code:"EPSG:900913"});function mi(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function pi(t,e){var i="",n,o,r,a,s,u;for(n=0,r=t.length;n<r;n++){for(s=t[n],o=0,a=s.length;o<a;o++)u=s[o],i+=(o?"L":"M")+u.x+" "+u.y;i+=e?z.svg?"z":"x":""}return i||"M0 0"}var Ze=document.documentElement.style,me="ActiveXObject"in window,In=me&&!document.addEventListener,_i="msLaunchUri"in navigator&&!("documentMode"in document),De=yt("webkit"),gi=yt("android"),vi=yt("android 2")||yt("android 3"),On=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),An=gi&&yt("Google")&&On<537&&!("AudioNode"in window),Ne=!!window.opera,yi=!_i&&yt("chrome"),bi=yt("gecko")&&!De&&!Ne&&!me,Bn=!yi&&yt("safari"),xi=yt("phantom"),wi="OTransition"in Ze,Zn=navigator.platform.indexOf("Win")===0,Li=me&&"transition"in Ze,Re="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!vi,Ti="MozPerspective"in Ze,Dn=!window.L_DISABLE_3D&&(Li||Re||Ti)&&!wi&&!xi,Xt=typeof orientation<"u"||yt("mobile"),Nn=Xt&&De,Rn=Xt&&Re,Pi=!window.PointerEvent&&window.MSPointerEvent,ki=!!(window.PointerEvent||Pi),Si="ontouchstart"in window||!!window.TouchEvent,qn=!window.L_NO_TOUCH&&(Si||ki),Hn=Xt&&Ne,Fn=Xt&&bi,$n=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Wn=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",S,e),window.removeEventListener("testPassiveEventSupport",S,e)}catch{}return t}(),Un=function(){return!!document.createElement("canvas").getContext}(),qe=!!(document.createElementNS&&mi("svg").createSVGRect),jn=!!qe&&function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Gn=!qe&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}}(),Vn=navigator.platform.indexOf("Mac")===0,Jn=navigator.platform.indexOf("Linux")===0;function yt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var z={ie:me,ielt9:In,edge:_i,webkit:De,android:gi,android23:vi,androidStock:An,opera:Ne,chrome:yi,gecko:bi,safari:Bn,phantom:xi,opera12:wi,win:Zn,ie3d:Li,webkit3d:Re,gecko3d:Ti,any3d:Dn,mobile:Xt,mobileWebkit:Nn,mobileWebkit3d:Rn,msPointer:Pi,pointer:ki,touch:qn,touchNative:Si,mobileOpera:Hn,mobileGecko:Fn,retina:$n,passiveEvents:Wn,canvas:Un,svg:qe,vml:Gn,inlineSvg:jn,mac:Vn,linux:Jn},Ci=z.msPointer?"MSPointerDown":"pointerdown",Mi=z.msPointer?"MSPointerMove":"pointermove",Ei=z.msPointer?"MSPointerUp":"pointerup",zi=z.msPointer?"MSPointerCancel":"pointercancel",He={touchstart:Ci,touchmove:Mi,touchend:Ei,touchcancel:zi},Ii={touchstart:eo,touchmove:pe,touchend:pe,touchcancel:pe},Ft={},Oi=!1;function Kn(t,e,i){return e==="touchstart"&&to(),Ii[e]?(i=Ii[e].bind(this,i),t.addEventListener(He[e],i,!1),i):(console.warn("wrong event specified:",e),S)}function Yn(t,e,i){if(!He[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(He[e],i,!1)}function Xn(t){Ft[t.pointerId]=t}function Qn(t){Ft[t.pointerId]&&(Ft[t.pointerId]=t)}function Ai(t){delete Ft[t.pointerId]}function to(){Oi||(document.addEventListener(Ci,Xn,!0),document.addEventListener(Mi,Qn,!0),document.addEventListener(Ei,Ai,!0),document.addEventListener(zi,Ai,!0),Oi=!0)}function pe(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Ft)e.touches.push(Ft[i]);e.changedTouches=[e],t(e)}}function eo(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&ht(e),pe(t,e)}function io(t){var e={},i,n;for(n in t)i=t[n],e[n]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var no=200;function oo(t,e){t.addEventListener("dblclick",e);var i=0,n;function o(r){if(r.detail!==1){n=r.detail;return}if(!(r.pointerType==="mouse"||r.sourceCapabilities&&!r.sourceCapabilities.firesTouchEvents)){var a=Ri(r);if(!(a.some(function(u){return u instanceof HTMLLabelElement&&u.attributes.for})&&!a.some(function(u){return u instanceof HTMLInputElement||u instanceof HTMLSelectElement}))){var s=Date.now();s-i<=no?(n++,n===2&&e(io(r))):n=1,i=s}}}return t.addEventListener("click",o),{dblclick:e,simDblclick:o}}function ro(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var Fe=ve(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Qt=ve(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Bi=Qt==="webkitTransition"||Qt==="OTransition"?Qt+"End":"transitionend";function Zi(t){return typeof t=="string"?document.getElementById(t):t}function te(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);i=n?n[e]:null}return i==="auto"?null:i}function j(t,e,i){var n=document.createElement(t);return n.className=e||"",i&&i.appendChild(n),n}function Q(t){var e=t.parentNode;e&&e.removeChild(t)}function _e(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function $t(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Wt(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function $e(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=ge(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function q(t,e){if(t.classList!==void 0)for(var i=b(e),n=0,o=i.length;n<o;n++)t.classList.add(i[n]);else if(!$e(t,e)){var r=ge(t);We(t,(r?r+" ":"")+e)}}function et(t,e){t.classList!==void 0?t.classList.remove(e):We(t,C((" "+ge(t)+" ").replace(" "+e+" "," ")))}function We(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function ge(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function mt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&ao(t,e)}function ao(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}function ve(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function At(t,e,i){var n=e||new B(0,0);t.style[Fe]=(z.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")}function nt(t,e){t._leaflet_pos=e,z.any3d?At(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function Bt(t){return t._leaflet_pos||new B(0,0)}var ee,ie,Ue;if("onselectstart"in document)ee=function(){D(window,"selectstart",ht)},ie=function(){K(window,"selectstart",ht)};else{var ne=ve(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ee=function(){if(ne){var t=document.documentElement.style;Ue=t[ne],t[ne]="none"}},ie=function(){ne&&(document.documentElement.style[ne]=Ue,Ue=void 0)}}function je(){D(window,"dragstart",ht)}function Ge(){K(window,"dragstart",ht)}var ye,Ve;function Je(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(be(),ye=t,Ve=t.style.outlineStyle,t.style.outlineStyle="none",D(window,"keydown",be))}function be(){ye&&(ye.style.outlineStyle=Ve,ye=void 0,Ve=void 0,K(window,"keydown",be))}function Di(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Ke(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var so={__proto__:null,TRANSFORM:Fe,TRANSITION:Qt,TRANSITION_END:Bi,get:Zi,getStyle:te,create:j,remove:Q,empty:_e,toFront:$t,toBack:Wt,hasClass:$e,addClass:q,removeClass:et,setClass:We,getClass:ge,setOpacity:mt,testProp:ve,setTransform:At,setPosition:nt,getPosition:Bt,get disableTextSelection(){return ee},get enableTextSelection(){return ie},disableImageDrag:je,enableImageDrag:Ge,preventOutline:Je,restoreOutline:be,getSizedParentNode:Di,getScale:Ke};function D(t,e,i,n){if(e&&typeof e=="object")for(var o in e)Xe(t,o,e[o],i);else{e=b(e);for(var r=0,a=e.length;r<a;r++)Xe(t,e[r],i,n)}return this}var bt="_leaflet_events";function K(t,e,i,n){if(arguments.length===1)Ni(t),delete t[bt];else if(e&&typeof e=="object")for(var o in e)Qe(t,o,e[o],i);else if(e=b(e),arguments.length===2)Ni(t,function(s){return J(e,s)!==-1});else for(var r=0,a=e.length;r<a;r++)Qe(t,e[r],i,n);return this}function Ni(t,e){for(var i in t[bt]){var n=i.split(/\d/)[0];(!e||e(n))&&Qe(t,n,null,null,i)}}var Ye={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Xe(t,e,i,n){var o=e+_(i)+(n?"_"+_(n):"");if(t[bt]&&t[bt][o])return this;var r=function(s){return i.call(n||t,s||window.event)},a=r;!z.touchNative&&z.pointer&&e.indexOf("touch")===0?r=Kn(t,e,r):z.touch&&e==="dblclick"?r=oo(t,r):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Ye[e]||e,r,z.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(r=function(s){s=s||window.event,ei(t,s)&&a(s)},t.addEventListener(Ye[e],r,!1)):t.addEventListener(e,a,!1):t.attachEvent("on"+e,r),t[bt]=t[bt]||{},t[bt][o]=r}function Qe(t,e,i,n,o){o=o||e+_(i)+(n?"_"+_(n):"");var r=t[bt]&&t[bt][o];if(!r)return this;!z.touchNative&&z.pointer&&e.indexOf("touch")===0?Yn(t,e,r):z.touch&&e==="dblclick"?ro(t,r):"removeEventListener"in t?t.removeEventListener(Ye[e]||e,r,!1):t.detachEvent("on"+e,r),t[bt][o]=null}function Zt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function ti(t){return Xe(t,"wheel",Zt),this}function oe(t){return D(t,"mousedown touchstart dblclick contextmenu",Zt),t._leaflet_disable_click=!0,this}function ht(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Dt(t){return ht(t),Zt(t),this}function Ri(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function qi(t,e){if(!e)return new B(t.clientX,t.clientY);var i=Ke(e),n=i.boundingClientRect;return new B((t.clientX-n.left)/i.x-e.clientLeft,(t.clientY-n.top)/i.y-e.clientTop)}var lo=z.linux&&z.chrome?window.devicePixelRatio:z.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Hi(t){return z.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/lo:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function ei(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var ho={__proto__:null,on:D,off:K,stopPropagation:Zt,disableScrollPropagation:ti,disableClickPropagation:oe,preventDefault:ht,stop:Dt,getPropagationPath:Ri,getMousePosition:qi,getWheelDelta:Hi,isExternalTarget:ei,addListener:D,removeListener:K},Fi=Ot.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Bt(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=I(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),nt(this._el,i),this.fire("step")},_complete:function(){R(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),U=Ot.extend({options:{crs:Be,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=g(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=v(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(W(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Qt&&z.any3d&&!z.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),D(this._proxy,Bi,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(W(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=f({animate:i.animate},i.zoom),i.pan=f({animate:i.animate,duration:i.duration},i.pan));var n=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(n)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),o=this.getSize().divideBy(2),r=t instanceof B?t:this.latLngToContainerPoint(t),a=r.subtract(o).multiplyBy(1-1/n),s=this.containerPointToLatLng(o.add(a));return this.setView(s,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():it(t);var i=Z(e.paddingTopLeft||e.padding||[0,0]),n=Z(e.paddingBottomRight||e.padding||[0,0]),o=this.getBoundsZoom(t,!1,i.add(n));if(o=typeof e.maxZoom=="number"?Math.min(e.maxZoom,o):o,o===1/0)return{center:t.getCenter(),zoom:o};var r=n.subtract(i).divideBy(2),a=this.project(t.getSouthWest(),o),s=this.project(t.getNorthEast(),o),u=this.unproject(a.add(s).divideBy(2).add(r),o);return{center:u,zoom:o}},fitBounds:function(t,e){if(t=it(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=Z(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Fi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){q(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!z.any3d)return this.setView(t,e,i);this._stop();var n=this.project(this.getCenter()),o=this.project(t),r=this.getSize(),a=this._zoom;t=W(t),e=e===void 0?a:e;var s=Math.max(r.x,r.y),u=s*this.getZoomScale(a,e),d=o.distanceTo(n)||1,P=1.42,O=P*P;function $(ot){var Ie=ot?-1:1,Xo=ot?u:s,Qo=u*u-s*s+Ie*O*O*d*d,tr=2*Xo*O*d,di=Qo/tr,Ln=Math.sqrt(di*di+1)-di,er=Ln<1e-9?-18:Math.log(Ln);return er}function ut(ot){return(Math.exp(ot)-Math.exp(-ot))/2}function at(ot){return(Math.exp(ot)+Math.exp(-ot))/2}function _t(ot){return ut(ot)/at(ot)}var ft=$(0);function Kt(ot){return s*(at(ft)/at(ft+P*ot))}function Vo(ot){return s*(at(ft)*_t(ft+P*ot)-ut(ft))/O}function Jo(ot){return 1-Math.pow(1-ot,1.5)}var Ko=Date.now(),xn=($(1)-ft)/P,Yo=i.duration?1e3*i.duration:1e3*xn*.8;function wn(){var ot=(Date.now()-Ko)/Yo,Ie=Jo(ot)*xn;ot<=1?(this._flyToFrame=I(wn,this),this._move(this.unproject(n.add(o.subtract(n).multiplyBy(Vo(Ie)/d)),a),this.getScaleZoom(s/Kt(Ie),a),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),wn.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=it(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),n=this._limitCenter(i,this._zoom,it(t));return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=Z(e.paddingTopLeft||e.padding||[0,0]),n=Z(e.paddingBottomRight||e.padding||[0,0]),o=this.project(this.getCenter()),r=this.project(t),a=this.getPixelBounds(),s=ct([a.min.add(i),a.max.subtract(n)]),u=s.getSize();if(!s.contains(r)){this._enforcingBounds=!0;var d=r.subtract(s.getCenter()),P=s.extend(r).getSize().subtract(u);o.x+=d.x<0?-P.x:P.x,o.y+=d.y<0?-P.y:P.y,this.panTo(this.unproject(o),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=f({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),o=i.divideBy(2).round(),r=n.subtract(o);return!r.x&&!r.y?this:(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(v(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=f({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=v(this._handleGeolocationResponse,this),i=v(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,n=new V(e,i),o=n.toBounds(t.coords.accuracy*2),r=this._locateOptions;if(r.setView){var a=this.getBoundsZoom(o);this.setView(n,r.maxZoom?Math.min(a,r.maxZoom):a)}var s={latlng:n,bounds:o,timestamp:t.timestamp};for(var u in t.coords)typeof t.coords[u]=="number"&&(s[u]=t.coords[u]);this.fire("locationfound",s)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Q(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(R(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)Q(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=j("div",i,e||this._mapPane);return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new dt(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=it(t),i=Z(i||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),r=this.getMaxZoom(),a=t.getNorthWest(),s=t.getSouthEast(),u=this.getSize().subtract(i),d=ct(this.project(s,n),this.project(a,n)).getSize(),P=z.any3d?this.options.zoomSnap:1,O=u.x/d.x,$=u.y/d.y,ut=e?Math.max(O,$):Math.min(O,$);return n=this.getScaleZoom(ut,n),P&&(n=Math.round(n/(P/100))*(P/100),n=e?Math.ceil(n/P)*P:Math.floor(n/P)*P),Math.max(o,Math.min(r,n))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new X(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var n=i.zoom(t*i.scale(e));return isNaN(n)?1/0:n},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(W(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(Z(t),e)},layerPointToLatLng:function(t){var e=Z(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(W(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(it(t))},distance:function(t,e){return this.options.crs.distance(W(t),W(e))},containerPointToLayerPoint:function(t){return Z(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return Z(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(Z(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},mouseEventToContainerPoint:function(t){return qi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Zi(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");D(e,"scroll",this._onScroll,this),this._containerId=_(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&z.any3d,q(t,"leaflet-container"+(z.touch?" leaflet-touch":"")+(z.retina?" leaflet-retina":"")+(z.ielt9?" leaflet-oldie":"")+(z.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=te(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),nt(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(q(t.markerPane,"leaflet-zoom-hide"),q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){nt(this._mapPane,new B(0,0));var n=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var o=this._zoom!==e;this._moveStart(o,i)._move(t,e)._moveEnd(o),this.fire("viewreset"),n&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,n){e===void 0&&(e=this._zoom);var o=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),n?i&&i.pinch&&this.fire("zoom",i):((o||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return R(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){nt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[_(this._container)]=this;var e=t?K:D;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),z.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){R(this._resizeRequest),this._resizeRequest=I(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],n,o=e==="mouseout"||e==="mouseover",r=t.target||t.srcElement,a=!1;r;){if(n=this._targets[_(r)],n&&(e==="click"||e==="preclick")&&this._draggableMoved(n)){a=!0;break}if(n&&n.listens(e,!0)&&(o&&!ei(r,t)||(i.push(n),o))||r===this._container)break;r=r.parentNode}return!i.length&&!a&&!o&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Je(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var n=f({},t);n.type="preclick",this._fireDOMEvent(n,n.type,i)}var o=this._findEventTargets(t,e);if(i){for(var r=[],a=0;a<i.length;a++)i[a].listens(e,!0)&&r.push(i[a]);o=r.concat(o)}if(o.length){e==="contextmenu"&&ht(t);var s=o[0],u={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var d=s.getLatLng&&(!s._radius||s._radius<=10);u.containerPoint=d?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),u.layerPoint=this.containerPointToLayerPoint(u.containerPoint),u.latlng=d?s.getLatLng():this.layerPointToLatLng(u.layerPoint)}for(a=0;a<o.length;a++)if(o[a].fire(e,u,!0),u.originalEvent._stopped||o[a].options.bubblingMouseEvents===!1&&J(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return Bt(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,e,i){var n=this._getNewPixelOrigin(i,e);return ct([this.project(t.getSouthWest(),e)._subtract(n),this.project(t.getNorthWest(),e)._subtract(n),this.project(t.getSouthEast(),e)._subtract(n),this.project(t.getNorthEast(),e)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),o=this.getSize().divideBy(2),r=new X(n.subtract(o),n.add(o)),a=this._getBoundsOffset(r,i,e);return Math.abs(a.x)<=1&&Math.abs(a.y)<=1?t:this.unproject(n.add(a),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new X(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=ct(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),o=n.min.subtract(t.min),r=n.max.subtract(t.max),a=this._rebound(o.x,-r.x),s=this._rebound(o.y,-r.y);return new B(a,s)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=z.any3d?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){et(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=j("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=Fe,n=this._proxy.style[i];At(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Q(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();At(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n);return i.animate!==!0&&!this.getSize().contains(o)?!1:(I(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(v(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&et(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function uo(t,e){return new U(t,e)}var gt=rt.extend({options:{position:"topright"},initialize:function(t){g(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return q(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Q(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),re=function(t){return new gt(t)};U.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=j("div",e+"control-container",this._container);function n(o,r){var a=e+o+" "+e+r;t[o+r]=j("div",a,i)}n("top","left"),n("top","right"),n("bottom","left"),n("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)Q(this._controlCorners[t]);Q(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var $i=gt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,n){return i<n?-1:n<i?1:0}},initialize:function(t,e,i){g(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return gt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(_(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):et(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return et(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=j("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),oe(e),ti(e);var n=this._section=j("section",t+"-list");i&&(this._map.on("click",this.collapse,this),D(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var o=this._layersLink=j("a",t+"-toggle",e);o.href="#",o.title="Layers",o.setAttribute("role","button"),D(o,{keydown:function(r){r.keyCode===13&&this._expandSafely()},click:function(r){ht(r),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=j("div",t+"-base",n),this._separator=j("div",t+"-separator",n),this._overlaysList=j("div",t+"-overlays",n),e.appendChild(n)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&_(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(v(function(n,o){return this.options.sortFunction(n.layer,o.layer,n.name,o.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_e(this._baseLayersList),_e(this._overlaysList),this._layerControlInputs=[];var t,e,i,n,o=0;for(i=0;i<this._layers.length;i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(_(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=i,n.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),n;t.overlay?(n=document.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=i):n=this._createRadioElement("leaflet-base-layers_"+_(this),i),this._layerControlInputs.push(n),n.layerId=_(t.layer),D(n,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var r=document.createElement("span");e.appendChild(r),r.appendChild(n),r.appendChild(o);var a=t.overlay?this._overlaysList:this._baseLayersList;return a.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,n=[],o=[];this._handlingClick=!0;for(var r=t.length-1;r>=0;r--)e=t[r],i=this._getLayer(e.layerId).layer,e.checked?n.push(i):e.checked||o.push(i);for(r=0;r<o.length;r++)this._map.hasLayer(o[r])&&this._map.removeLayer(o[r]);for(r=0;r<n.length;r++)this._map.hasLayer(n[r])||this._map.addLayer(n[r]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,n=this._map.getZoom(),o=t.length-1;o>=0;o--)e=t[o],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&n<i.options.minZoom||i.options.maxZoom!==void 0&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,D(t,"click",ht),this.expand();var e=this;setTimeout(function(){K(t,"click",ht),e._preventClick=!1})}}),co=function(t,e,i){return new $i(t,e,i)},ii=gt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=j("div",e+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,o){var r=j("a",i,n);return r.innerHTML=t,r.href="#",r.title=e,r.setAttribute("role","button"),r.setAttribute("aria-label",e),oe(r),D(r,"click",Dt),D(r,"click",o,this),D(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";et(this._zoomInButton,e),et(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(q(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(q(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});U.mergeOptions({zoomControl:!0}),U.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ii,this.addControl(this.zoomControl))});var fo=function(t){return new ii(t)},Wi=gt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=j("div",e),n=this.options;return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=j("div",e,i)),t.imperial&&(this._iScale=j("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,n,o;e>5280?(i=e/5280,n=this._getRoundNum(i),this._updateScale(this._iScale,n+" mi",n/i)):(o=this._getRoundNum(e),this._updateScale(this._iScale,o+" ft",o/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),mo=function(t){return new Wi(t)},po='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ni=gt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(z.inlineSvg?po+" ":"")+"Leaflet</a>"},initialize:function(t){g(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=j("div","leaflet-control-attribution"),oe(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});U.mergeOptions({attributionControl:!0}),U.addInitHook(function(){this.options.attributionControl&&new ni().addTo(this)});var _o=function(t){return new ni(t)};gt.Layers=$i,gt.Zoom=ii,gt.Scale=Wi,gt.Attribution=ni,re.layers=co,re.zoom=fo,re.scale=mo,re.attribution=_o;var xt=rt.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});xt.addTo=function(t,e){return t.addHandler(e,this),this};var go={Events:lt},Ui=z.touch?"touchstart mousedown":"mousedown",Et=Ot.extend({options:{clickTolerance:3},initialize:function(t,e,i,n){g(this,n),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(D(this._dragStartTarget,Ui,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Et._dragging===this&&this.finishDrag(!0),K(this._dragStartTarget,Ui,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!$e(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Et._dragging===this&&this.finishDrag();return}if(!(Et._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Et._dragging=this,this._preventOutline&&Je(this._element),je(),ee(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=Di(this._element);this._startPoint=new B(e.clientX,e.clientY),this._startPos=Bt(this._element),this._parentScale=Ke(i);var n=t.type==="mousedown";D(document,n?"mousemove":"touchmove",this._onMove,this),D(document,n?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new B(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,ht(t),this._moved||(this.fire("dragstart"),this._moved=!0,q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),nt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){et(document.body,"leaflet-dragging"),this._lastTarget&&(et(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),K(document,"mousemove touchmove",this._onMove,this),K(document,"mouseup touchend touchcancel",this._onUp,this),Ge(),ie();var e=this._moved&&this._moving;this._moving=!1,Et._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function ji(t,e,i){var n,o=[1,4,2,8],r,a,s,u,d,P,O,$;for(r=0,P=t.length;r<P;r++)t[r]._code=Nt(t[r],e);for(s=0;s<4;s++){for(O=o[s],n=[],r=0,P=t.length,a=P-1;r<P;a=r++)u=t[r],d=t[a],u._code&O?d._code&O||($=xe(d,u,O,e,i),$._code=Nt($,e),n.push($)):(d._code&O&&($=xe(d,u,O,e,i),$._code=Nt($,e),n.push($)),n.push(u));t=n}return t}function Gi(t,e){var i,n,o,r,a,s,u,d,P;if(!t||t.length===0)throw new Error("latlngs not passed");pt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var O=W([0,0]),$=it(t),ut=$.getNorthWest().distanceTo($.getSouthWest())*$.getNorthEast().distanceTo($.getNorthWest());ut<1700&&(O=oi(t));var at=t.length,_t=[];for(i=0;i<at;i++){var ft=W(t[i]);_t.push(e.project(W([ft.lat-O.lat,ft.lng-O.lng])))}for(s=u=d=0,i=0,n=at-1;i<at;n=i++)o=_t[i],r=_t[n],a=o.y*r.x-r.y*o.x,u+=(o.x+r.x)*a,d+=(o.y+r.y)*a,s+=a*3;s===0?P=_t[0]:P=[u/s,d/s];var Kt=e.unproject(Z(P));return W([Kt.lat+O.lat,Kt.lng+O.lng])}function oi(t){for(var e=0,i=0,n=0,o=0;o<t.length;o++){var r=W(t[o]);e+=r.lat,i+=r.lng,n++}return W([e/n,i/n])}var vo={__proto__:null,clipPolygon:ji,polygonCenter:Gi,centroid:oi};function Vi(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=xo(t,i),t=bo(t,i),t}function Ji(t,e,i){return Math.sqrt(ae(t,e,i,!0))}function yo(t,e,i){return ae(t,e,i)}function bo(t,e){var i=t.length,n=typeof Uint8Array<"u"?Uint8Array:Array,o=new n(i);o[0]=o[i-1]=1,ri(t,o,e,0,i-1);var r,a=[];for(r=0;r<i;r++)o[r]&&a.push(t[r]);return a}function ri(t,e,i,n,o){var r=0,a,s,u;for(s=n+1;s<=o-1;s++)u=ae(t[s],t[n],t[o],!0),u>r&&(a=s,r=u);r>i&&(e[a]=1,ri(t,e,i,n,a),ri(t,e,i,a,o))}function xo(t,e){for(var i=[t[0]],n=1,o=0,r=t.length;n<r;n++)wo(t[n],t[o])>e&&(i.push(t[n]),o=n);return o<r-1&&i.push(t[r-1]),i}var Ki;function Yi(t,e,i,n,o){var r=n?Ki:Nt(t,i),a=Nt(e,i),s,u,d;for(Ki=a;;){if(!(r|a))return[t,e];if(r&a)return!1;s=r||a,u=xe(t,e,s,i,o),d=Nt(u,i),s===r?(t=u,r=d):(e=u,a=d)}}function xe(t,e,i,n,o){var r=e.x-t.x,a=e.y-t.y,s=n.min,u=n.max,d,P;return i&8?(d=t.x+r*(u.y-t.y)/a,P=u.y):i&4?(d=t.x+r*(s.y-t.y)/a,P=s.y):i&2?(d=u.x,P=t.y+a*(u.x-t.x)/r):i&1&&(d=s.x,P=t.y+a*(s.x-t.x)/r),new B(d,P,o)}function Nt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function wo(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n}function ae(t,e,i,n){var o=e.x,r=e.y,a=i.x-o,s=i.y-r,u=a*a+s*s,d;return u>0&&(d=((t.x-o)*a+(t.y-r)*s)/u,d>1?(o=i.x,r=i.y):d>0&&(o+=a*d,r+=s*d)),a=t.x-o,s=t.y-r,n?a*a+s*s:new B(o,r)}function pt(t){return!G(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function Xi(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pt(t)}function Qi(t,e){var i,n,o,r,a,s,u,d;if(!t||t.length===0)throw new Error("latlngs not passed");pt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var P=W([0,0]),O=it(t),$=O.getNorthWest().distanceTo(O.getSouthWest())*O.getNorthEast().distanceTo(O.getNorthWest());$<1700&&(P=oi(t));var ut=t.length,at=[];for(i=0;i<ut;i++){var _t=W(t[i]);at.push(e.project(W([_t.lat-P.lat,_t.lng-P.lng])))}for(i=0,n=0;i<ut-1;i++)n+=at[i].distanceTo(at[i+1])/2;if(n===0)d=at[0];else for(i=0,r=0;i<ut-1;i++)if(a=at[i],s=at[i+1],o=a.distanceTo(s),r+=o,r>n){u=(r-n)/o,d=[s.x-u*(s.x-a.x),s.y-u*(s.y-a.y)];break}var ft=e.unproject(Z(d));return W([ft.lat+P.lat,ft.lng+P.lng])}var Lo={__proto__:null,simplify:Vi,pointToSegmentDistance:Ji,closestPointOnSegment:yo,clipSegment:Yi,_getEdgeIntersection:xe,_getBitCode:Nt,_sqClosestPointOnSegment:ae,isFlat:pt,_flat:Xi,polylineCenter:Qi},ai={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new V(t.y,t.x)},bounds:new X([-180,-90],[180,90])},si={R:6378137,R_MINOR:6356752314245179e-9,bounds:new X([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,o=this.R_MINOR/i,r=Math.sqrt(1-o*o),a=r*Math.sin(n),s=Math.tan(Math.PI/4-n/2)/Math.pow((1-a)/(1+a),r/2);return n=-i*Math.log(Math.max(s,1e-10)),new B(t.lng*e*i,n)},unproject:function(t){for(var e=180/Math.PI,i=this.R,n=this.R_MINOR/i,o=Math.sqrt(1-n*n),r=Math.exp(-t.y/i),a=Math.PI/2-2*Math.atan(r),s=0,u=.1,d;s<15&&Math.abs(u)>1e-7;s++)d=o*Math.sin(a),d=Math.pow((1-d)/(1+d),o/2),u=Math.PI/2-2*Math.atan(r*d)-a,a+=u;return new V(a*e,t.x*e/i)}},To={__proto__:null,LonLat:ai,Mercator:si,SphericalMercator:Oe},Po=f({},Mt,{code:"EPSG:3395",projection:si,transformation:function(){var t=.5/(Math.PI*si.R);return Yt(t,.5,-t,.5)}()}),tn=f({},Mt,{code:"EPSG:4326",projection:ai,transformation:Yt(1/180,1,-1/180,.5)}),ko=f({},Lt,{projection:ai,transformation:Yt(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat;return Math.sqrt(i*i+n*n)},infinite:!0});Lt.Earth=Mt,Lt.EPSG3395=Po,Lt.EPSG3857=Be,Lt.EPSG900913=zn,Lt.EPSG4326=tn,Lt.Simple=ko;var vt=Ot.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[_(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[_(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});U.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=_(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=_(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return _(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?G(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[_(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=_(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=o.minZoom===void 0?t:Math.min(t,o.minZoom),e=o.maxZoom===void 0?e:Math.max(e,o.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ut=vt.extend({initialize:function(t,e){g(this,e),this._layers={};var i,n;if(t)for(i=0,n=t.length;i<n;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers)n=this._layers[i],n[t]&&n[t].apply(n,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return _(t)}}),So=function(t,e){return new Ut(t,e)},Tt=Ut.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ut.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ut.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new dt;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Co=function(t,e){return new Tt(t,e)},jt=rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){g(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(n,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"];typeof n=="number"&&(n=[n,n]);var o=Z(n),r=Z(e==="shadow"&&i.shadowAnchor||i.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return z.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Mo(t){return new jt(t)}var se=jt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof se.imagePath!="string"&&(se.imagePath=this._detectIconPath()),(this.options.imagePath||se.imagePath)+jt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,n,o){var r=n.exec(i);return r&&r[o]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=j("div","leaflet-default-icon-path",document.body),e=te(t,"background-image")||te(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),en=xt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Et(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&et(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,r=Bt(e._icon),a=i.getPixelBounds(),s=i.getPixelOrigin(),u=ct(a.min._subtract(s).add(o),a.max._subtract(s).subtract(o));if(!u.contains(r)){var d=Z((Math.max(u.max.x,r.x)-u.max.x)/(a.max.x-u.max.x)-(Math.min(u.min.x,r.x)-u.min.x)/(a.min.x-u.min.x),(Math.max(u.max.y,r.y)-u.max.y)/(a.max.y-u.max.y)-(Math.min(u.min.y,r.y)-u.min.y)/(a.min.y-u.min.y)).multiplyBy(n);i.panBy(d,{animate:!1}),this._draggable._newPos._add(d),this._draggable._startPos._add(d),nt(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=I(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(R(this._panRequest),this._panRequest=I(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,n=Bt(e._icon),o=e._map.layerPointToLatLng(n);i&&nt(i,n),e._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){R(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),we=vt.extend({options:{icon:new se,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){g(this,e),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1;i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),q(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&D(i,"focus",this._panOnFocus,this);var o=t.icon.createShadow(this._shadow),r=!1;o!==this._shadow&&(this._removeShadow(),r=!0),o&&(q(o,e),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&r&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&K(this._icon,"focus",this._panOnFocus,this),Q(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Q(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&nt(this._icon,t),this._shadow&&nt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),en)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new en(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&mt(this._icon,t),this._shadow&&mt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?Z(e.iconSize):Z(0,0),n=e.iconAnchor?Z(e.iconAnchor):Z(0,0);t.panInside(this._latlng,{paddingTopLeft:n,paddingBottomRight:i.subtract(n)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Eo(t,e){return new we(t,e)}var zt=vt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return g(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Le=zt.extend({options:{fill:!0,radius:10},initialize:function(t,e){g(this,e),this._latlng=W(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=W(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return zt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i];this._pxBounds=new X(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function zo(t,e){return new Le(t,e)}var li=Le.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=f({},i,{radius:e})),g(this,e),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new dt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:zt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs;if(n.distance===Mt.distance){var o=Math.PI/180,r=this._mRadius/Mt.R/o,a=i.project([e+r,t]),s=i.project([e-r,t]),u=a.add(s).divideBy(2),d=i.unproject(u).lat,P=Math.acos((Math.cos(r*o)-Math.sin(e*o)*Math.sin(d*o))/(Math.cos(e*o)*Math.cos(d*o)))/o;(isNaN(P)||P===0)&&(P=r/Math.cos(Math.PI/180*e)),this._point=u.subtract(i.getPixelOrigin()),this._radius=isNaN(P)?0:u.x-i.project([d,t-P]).x,this._radiusY=u.y-a.y}else{var O=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(O).x}this._updateBounds()}});function Io(t,e,i){return new li(t,e,i)}var Pt=zt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){g(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,n=ae,o,r,a=0,s=this._parts.length;a<s;a++)for(var u=this._parts[a],d=1,P=u.length;d<P;d++){o=u[d-1],r=u[d];var O=n(t,o,r,!0);O<e&&(e=O,i=n(t,o,r))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Qi(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=W(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new dt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return pt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=pt(t),n=0,o=t.length;n<o;n++)i?(e[n]=W(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n]);return e},_project:function(){var t=new X;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new B(t,t);this._rawPxBounds&&(this._pxBounds=new X([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var n=t[0]instanceof V,o=t.length,r,a;if(n){for(a=[],r=0;r<o;r++)a[r]=this._map.latLngToLayerPoint(t[r]),i.extend(a[r]);e.push(a)}else for(r=0;r<o;r++)this._projectLatlngs(t[r],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,n,o,r,a,s,u;for(i=0,o=0,r=this._rings.length;i<r;i++)for(u=this._rings[i],n=0,a=u.length;n<a-1;n++)s=Yi(u[n],u[n+1],t,n,!0),s&&(e[o]=e[o]||[],e[o].push(s[0]),(s[1]!==u[n+1]||n===a-2)&&(e[o].push(s[1]),o++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length;i<n;i++)t[i]=Vi(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,n,o,r,a,s,u=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,r=this._parts.length;i<r;i++)for(s=this._parts[i],n=0,a=s.length,o=a-1;n<a;o=n++)if(!(!e&&n===0)&&Ji(t,s[o],s[n])<=u)return!0;return!1}});function Oo(t,e){return new Pt(t,e)}Pt._flat=Xi;var Gt=Pt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Gi(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=Pt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof V&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Pt.prototype._setLatLngs.call(this,t),pt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new B(e,e);if(t=new X(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var n=0,o=this._rings.length,r;n<o;n++)r=ji(this._rings[n],t,!0),r.length&&this._parts.push(r)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,n,o,r,a,s,u,d;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(r=0,u=this._parts.length;r<u;r++)for(i=this._parts[r],a=0,d=i.length,s=d-1;a<d;s=a++)n=i[a],o=i[s],n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(e=!e);return e||Pt.prototype._containsPoint.call(this,t,!0)}});function Ao(t,e){return new Gt(t,e)}var kt=Tt.extend({initialize:function(t,e){g(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=G(t)?t:t.features,i,n,o;if(e){for(i=0,n=e.length;i<n;i++)o=e[i],(o.geometries||o.geometry||o.features||o.coordinates)&&this.addData(o);return this}var r=this.options;if(r.filter&&!r.filter(t))return this;var a=Te(t,r);return a?(a.feature=Se(t),a.defaultOptions=a.options,this.resetStyle(a),r.onEachFeature&&r.onEachFeature(t,a),this.addLayer(a)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=f({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Te(t,e){var i=t.type==="Feature"?t.geometry:t,n=i?i.coordinates:null,o=[],r=e&&e.pointToLayer,a=e&&e.coordsToLatLng||hi,s,u,d,P;if(!n&&!i)return null;switch(i.type){case"Point":return s=a(n),nn(r,t,s,e);case"MultiPoint":for(d=0,P=n.length;d<P;d++)s=a(n[d]),o.push(nn(r,t,s,e));return new Tt(o);case"LineString":case"MultiLineString":return u=Pe(n,i.type==="LineString"?0:1,a),new Pt(u,e);case"Polygon":case"MultiPolygon":return u=Pe(n,i.type==="Polygon"?1:2,a),new Gt(u,e);case"GeometryCollection":for(d=0,P=i.geometries.length;d<P;d++){var O=Te({geometry:i.geometries[d],type:"Feature",properties:t.properties},e);O&&o.push(O)}return new Tt(o);case"FeatureCollection":for(d=0,P=i.features.length;d<P;d++){var $=Te(i.features[d],e);$&&o.push($)}return new Tt(o);default:throw new Error("Invalid GeoJSON object.")}}function nn(t,e,i,n){return t?t(e,i):new we(i,n&&n.markersInheritOptions&&n)}function hi(t){return new V(t[1],t[0],t[2])}function Pe(t,e,i){for(var n=[],o=0,r=t.length,a;o<r;o++)a=e?Pe(t[o],e-1,i):(i||hi)(t[o]),n.push(a);return n}function ui(t,e){return t=W(t),t.alt!==void 0?[w(t.lng,e),w(t.lat,e),w(t.alt,e)]:[w(t.lng,e),w(t.lat,e)]}function ke(t,e,i,n){for(var o=[],r=0,a=t.length;r<a;r++)o.push(e?ke(t[r],pt(t[r])?0:e-1,i,n):ui(t[r],n));return!e&&i&&o.length>0&&o.push(o[0].slice()),o}function Vt(t,e){return t.feature?f({},t.feature,{geometry:e}):Se(e)}function Se(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var ci={toGeoJSON:function(t){return Vt(this,{type:"Point",coordinates:ui(this.getLatLng(),t)})}};we.include(ci),li.include(ci),Le.include(ci),Pt.include({toGeoJSON:function(t){var e=!pt(this._latlngs),i=ke(this._latlngs,e?1:0,!1,t);return Vt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Gt.include({toGeoJSON:function(t){var e=!pt(this._latlngs),i=e&&!pt(this._latlngs[0]),n=ke(this._latlngs,i?2:e?1:0,!0,t);return e||(n=[n]),Vt(this,{type:(i?"Multi":"")+"Polygon",coordinates:n})}}),Ut.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Vt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",n=[];return this.eachLayer(function(o){if(o.toGeoJSON){var r=o.toGeoJSON(t);if(i)n.push(r.geometry);else{var a=Se(r);a.type==="FeatureCollection"?n.push.apply(n,a.features):n.push(a)}}}),i?Vt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});function on(t,e){return new kt(t,e)}var Bo=on,Ce=vt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=it(e),g(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Q(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&$t(this._image),this},bringToBack:function(){return this._map&&Wt(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=it(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:j("img");if(q(e,"leaflet-image-layer"),this._zoomAnimated&&q(e,"leaflet-zoom-animated"),this.options.className&&q(e,this.options.className),e.onselectstart=S,e.onmousemove=S,e.onload=v(this.fire,this,"load"),e.onerror=v(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;At(this._image,i,e)},_reset:function(){var t=this._image,e=new X(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();nt(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){mt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Zo=function(t,e,i){return new Ce(t,e,i)},rn=Ce.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:j("video");if(q(e,"leaflet-image-layer"),this._zoomAnimated&&q(e,"leaflet-zoom-animated"),this.options.className&&q(e,this.options.className),e.onselectstart=S,e.onmousemove=S,e.onloadeddata=v(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),n=[],o=0;o<i.length;o++)n.push(i[o].src);this._url=i.length>0?n:[e.src];return}G(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var r=0;r<this._url.length;r++){var a=j("source");a.src=this._url[r],e.appendChild(a)}}});function Do(t,e,i){return new rn(t,e,i)}var an=Ce.extend({_initImage:function(){var t=this._image=this._url;q(t,"leaflet-image-layer"),this._zoomAnimated&&q(t,"leaflet-zoom-animated"),this.options.className&&q(t,this.options.className),t.onselectstart=S,t.onmousemove=S}});function No(t,e,i){return new an(t,e,i)}var wt=vt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof V||G(t))?(this._latlng=W(t),g(this,e)):(g(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&mt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&mt(this._container,1),this.bringToFront(),this.options.interactive&&(q(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(mt(this._container,0),this._removeTimeout=setTimeout(v(Q,void 0,this._container),200)):Q(this._container),this.options.interactive&&(et(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&$t(this._container),this},bringToBack:function(){return this._map&&Wt(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Tt){e=null;var i=this._source._layers;for(var n in i)if(i[n]._map){e=i[n];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=Z(this.options.offset),i=this._getAnchor();this._zoomAnimated?nt(this._container,t.add(i)):e=e.add(t).add(i);var n=this._containerBottom=-e.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}});U.include({_initOverlay:function(t,e,i,n){var o=e;return o instanceof t||(o=new t(n).setContent(e)),i&&o.setLatLng(i),o}}),vt.include({_initOverlay:function(t,e,i,n){var o=i;return o instanceof t?(g(o,n),o._source=this):(o=e&&!n?e:new t(n,this),o.setContent(i)),o}});var Me=wt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,wt.prototype.openOn.call(this,t)},onAdd:function(t){wt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof zt||this._source.on("preclick",Zt))},onRemove:function(t){wt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof zt||this._source.off("preclick",Zt))},getEvents:function(){var t=wt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=j("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=j("div",t+"-content-wrapper",e);if(this._contentNode=j("div",t+"-content",i),oe(e),ti(this._contentNode),D(e,"contextmenu",Zt),this._tipContainer=j("div",t+"-tip-container",e),this._tip=j("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=j("a",t+"-close-button",e);n.setAttribute("role","button"),n.setAttribute("aria-label","Close popup"),n.href="#close",n.innerHTML='<span aria-hidden="true">&#215;</span>',D(n,"click",function(o){ht(o),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,o=this.options.maxHeight,r="leaflet-popup-scrolled";o&&n>o?(e.height=o+"px",q(t,r)):et(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();nt(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(te(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,o=new B(this._containerLeft,-i-this._containerBottom);o._add(Bt(this._container));var r=t.layerPointToContainerPoint(o),a=Z(this.options.autoPanPadding),s=Z(this.options.autoPanPaddingTopLeft||a),u=Z(this.options.autoPanPaddingBottomRight||a),d=t.getSize(),P=0,O=0;r.x+n+u.x>d.x&&(P=r.x+n-d.x+u.x),r.x-P-s.x<0&&(P=r.x-s.x),r.y+i+u.y>d.y&&(O=r.y+i-d.y+u.y),r.y-O-s.y<0&&(O=r.y-s.y),(P||O)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([P,O]))}},_getAnchor:function(){return Z(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ro=function(t,e){return new Me(t,e)};U.mergeOptions({closePopupOnClick:!0}),U.include({openPopup:function(t,e,i){return this._initOverlay(Me,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),vt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(Me,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Tt||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Dt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof zt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Ee=wt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){wt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){wt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=wt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=j("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+_(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,n=this._map,o=this._container,r=n.latLngToContainerPoint(n.getCenter()),a=n.layerPointToContainerPoint(t),s=this.options.direction,u=o.offsetWidth,d=o.offsetHeight,P=Z(this.options.offset),O=this._getAnchor();s==="top"?(e=u/2,i=d):s==="bottom"?(e=u/2,i=0):s==="center"?(e=u/2,i=d/2):s==="right"?(e=0,i=d/2):s==="left"?(e=u,i=d/2):a.x<r.x?(s="right",e=0,i=d/2):(s="left",e=u+(P.x+O.x)*2,i=d/2),t=t.subtract(Z(e,i,!0)).add(P).add(O),et(o,"leaflet-tooltip-right"),et(o,"leaflet-tooltip-left"),et(o,"leaflet-tooltip-top"),et(o,"leaflet-tooltip-bottom"),q(o,"leaflet-tooltip-"+s),nt(o,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&mt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return Z(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),qo=function(t,e){return new Ee(t,e)};U.include({openTooltip:function(t,e,i){return this._initOverlay(Ee,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),vt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ee,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Tt||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&(D(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),D(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,n;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),n=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(n)),this._tooltip.setLatLng(e)}});var sn=jt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(_e(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var n=Z(i.bgPos);e.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Ho(t){return new sn(t)}jt.Default=se;var le=vt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:z.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){g(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),Q(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&($t(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Wt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=H(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),n=0,o=e.length,r;n<o;n++)r=e[n].style.zIndex,e[n]!==this._container&&r&&(i=t(i,+r));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!z.ielt9){mt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var n in this._tiles){var o=this._tiles[n];if(!(!o.current||!o.loaded)){var r=Math.min(1,(t-o.loaded)/200);mt(o.el,r),r<1?e=!0:(o.active?i=!0:this._onOpaqueTile(o),o.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(R(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this))}},_onOpaqueTile:S,_initContainer:function(){this._container||(this._container=j("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(Q(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var n=this._levels[t],o=this._map;return n||(n=this._levels[t]={},n.el=j("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=e,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),S(n.el.offsetWidth),this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:S,_onRemoveLevel:S,_onCreateLevel:S,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)Q(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,n){var o=Math.floor(t/2),r=Math.floor(e/2),a=i-1,s=new B(+o,+r);s.z=+a;var u=this._tileCoordsToKey(s),d=this._tiles[u];return d&&d.active?(d.retain=!0,!0):(d&&d.loaded&&(d.retain=!0),a>n?this._retainParent(o,r,a,n):!1)},_retainChildren:function(t,e,i,n){for(var o=2*t;o<2*t+2;o++)for(var r=2*e;r<2*e+2;r++){var a=new B(o,r);a.z=i+1;var s=this._tileCoordsToKey(a),u=this._tiles[s];if(u&&u.active){u.retain=!0;continue}else u&&u.loaded&&(u.retain=!0);i+1<n&&this._retainChildren(o,r,i+1,n)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,n){var o=Math.round(e);this.options.maxZoom!==void 0&&o>this.options.maxZoom||this.options.minZoom!==void 0&&o<this.options.minZoom?o=void 0:o=this._clampZoom(o);var r=this.options.updateWhenZooming&&o!==this._tileZoom;(!n||r)&&(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),o!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round();z.any3d?At(t.el,o,n):nt(t.el,o)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),o=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(n*2);return new X(o.subtract(r),o.add(r))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),r=o.getCenter(),a=[],s=this.options.keepBuffer,u=new X(o.getBottomLeft().subtract([s,-s]),o.getTopRight().add([s,-s]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var d in this._tiles){var P=this._tiles[d].coords;(P.z!==this._tileZoom||!u.contains(new B(P.x,P.y)))&&(this._tiles[d].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var O=o.min.y;O<=o.max.y;O++)for(var $=o.min.x;$<=o.max.x;$++){var ut=new B($,O);if(ut.z=this._tileZoom,!!this._isValidTile(ut)){var at=this._tiles[this._tileCoordsToKey(ut)];at?at.current=!0:a.push(ut)}}if(a.sort(function(ft,Kt){return ft.distanceTo(r)-Kt.distanceTo(r)}),a.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var _t=document.createDocumentFragment();for($=0;$<a.length;$++)this._addTile(a[$],_t);this._level.el.appendChild(_t)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return it(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),o=n.add(i),r=e.unproject(n,t.z),a=e.unproject(o,t.z);return[r,a]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new dt(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new B(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(Q(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){q(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=S,t.onmousemove=S,z.ielt9&&this.options.opacity<1&&mt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),v(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&I(v(this._tileReady,this,t,null,o)),nt(o,i),this._tiles[n]={el:o,coords:t,current:!0},e.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var n=this._tileCoordsToKey(t);i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(mt(i.el,0),R(this._fadeFrame),this._fadeFrame=I(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(q(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),z.ielt9||!this._map._fadeAnimated?I(this._pruneTiles,this):setTimeout(v(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new B(this._wrapX?F(t.x,this._wrapX):t.x,this._wrapY?F(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new X(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Fo(t){return new le(t)}var Jt=le.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=g(this,e),e.detectRetina&&z.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return D(i,"load",v(this._tileOnLoad,this,e,i)),D(i,"error",v(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:z.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return N(this._url,f(e,this.options))},_tileOnLoad:function(t,e){z.ielt9?setTimeout(v(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl;n&&e.getAttribute("src")!==n&&(e.src=n),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,n=this.options.zoomOffset;return i&&(t=e-t),t+n},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=S,e.onerror=S,!e.complete)){e.src=tt;var i=this._tiles[t].coords;Q(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",tt),le.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===tt))return le.prototype._tileReady.call(this,t,e,i)}});function ln(t,e){return new Jt(t,e)}var hn=Jt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=f({},this.defaultWmsParams);for(var n in e)n in this.options||(i[n]=e[n]);e=g(this,e);var o=e.detectRetina&&z.retina?2:1,r=this.getTileSize();i.width=r.x*o,i.height=r.y*o,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Jt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,n=ct(i.project(e[0]),i.project(e[1])),o=n.min,r=n.max,a=(this._wmsVersion>=1.3&&this._crs===tn?[o.y,o.x,r.y,r.x]:[o.x,o.y,r.x,r.y]).join(","),s=Jt.prototype.getTileUrl.call(this,t);return s+M(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+a},setParams:function(t,e){return f(this.wmsParams,t),e||this.redraw(),this}});function $o(t,e){return new hn(t,e)}Jt.WMS=hn,ln.wms=$o;var St=vt.extend({options:{padding:.1},initialize:function(t){g(this,t),_(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=this._map.getSize().multiplyBy(.5+this.options.padding),o=this._map.project(this._center,e),r=n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t,e));z.any3d?At(this._container,r,i):nt(this._container,r)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new X(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),un=St.extend({options:{tolerance:0},getEvents:function(){var t=St.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){St.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");D(t,"mousemove",this._onMouseMove,this),D(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),D(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){R(this._redrawRequest),delete this._ctx,Q(this._container),K(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){St.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),n=z.retina?2:1;nt(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",z.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){St.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[_(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,n=e.prev;i?i.prev=n:this._drawLast=n,n?n.next=i:this._drawFirst=i,delete t._order,delete this._layers[_(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],n,o;for(o=0;o<e.length;o++){if(n=Number(e[o]),isNaN(n))return;i.push(n)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||I(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new X,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,n,o,r,a=t._parts,s=a.length,u=this._ctx;if(s){for(u.beginPath(),i=0;i<s;i++){for(n=0,o=a[i].length;n<o;n++)r=a[i][n],u[n?"lineTo":"moveTo"](r.x,r.y);e&&u.closePath()}this._fillStroke(u,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;o!==1&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,Math.PI*2,!1),o!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(n=i);this._fireEvent(n?[n]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(et(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,n,o=this._drawFirst;o;o=o.next)i=o.layer,i.options.interactive&&i._containsPoint(e)&&(n=i);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(q(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(v(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(i)i.prev=n;else return;n?n.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,n=e.prev;if(n)n.next=i;else return;i?i.prev=n:n&&(this._drawLast=n),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function cn(t){return z.canvas?new un(t):null}var he=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Wo={_initContainer:function(){this._container=j("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(St.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=he("shape");q(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=he("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[_(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;Q(e),t.removeInteractiveTarget(e),delete this._layers[_(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(e||(e=t._stroke=he("stroke")),o.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=G(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(o.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=he("fill")),o.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(o.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){$t(t._container)},_bringToBack:function(t){Wt(t._container)}},ze=z.vml?he:mi,ue=St.extend({_initContainer:function(){this._container=ze("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ze("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Q(this._container),K(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){St.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),nt(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=ze("path");t.options.className&&q(e,t.options.className),t.options.interactive&&q(e,"leaflet-interactive"),this._updateStyle(t),this._layers[_(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){Q(t._path),t.removeInteractiveTarget(t._path),delete this._layers[_(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,pi(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),n=Math.max(Math.round(t._radiusY),1)||i,o="a"+i+","+n+" 0 1,0 ",r=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+i*2+",0 "+o+-i*2+",0 ";this._setPath(t,r)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){$t(t._path)},_bringToBack:function(t){Wt(t._path)}});z.vml&&ue.include(Wo);function dn(t){return z.svg||z.vml?new ue(t):null}U.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&cn(t)||dn(t)}});var fn=Gt.extend({initialize:function(t,e){Gt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=it(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Uo(t,e){return new fn(t,e)}ue.create=ze,ue.pointsToPath=pi,kt.geometryToLayer=Te,kt.coordsToLatLng=hi,kt.coordsToLatLngs=Pe,kt.latLngToCoords=ui,kt.latLngsToCoords=ke,kt.getFeature=Vt,kt.asFeature=Se,U.mergeOptions({boxZoom:!0});var mn=xt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){D(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){K(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Q(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ee(),je(),this._startPoint=this._map.mouseEventToContainerPoint(t),D(document,{contextmenu:Dt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=j("div","leaflet-zoom-box",this._container),q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new X(this._point,this._startPoint),i=e.getSize();nt(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(Q(this._box),et(this._container,"leaflet-crosshair")),ie(),Ge(),K(document,{contextmenu:Dt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(v(this._resetState,this),0);var e=new dt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});U.addInitHook("addHandler","boxZoom",mn),U.mergeOptions({doubleClickZoom:!0});var pn=xt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n;e.options.doubleClickZoom==="center"?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}});U.addInitHook("addHandler","doubleClickZoom",pn),U.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var _n=xt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Et(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){et(this._map._container,"leaflet-grab"),et(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=it(this._map.options.maxBounds);this._offsetLimit=ct(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,r=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(r+i)?o:r;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),n)e.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,a=i.easeLinearity,s=o.multiplyBy(a/r),u=s.distanceTo([0,0]),d=Math.min(i.inertiaMaxSpeed,u),P=s.multiplyBy(d/u),O=d/(i.inertiaDeceleration*a),$=P.multiplyBy(-O/2).round();!$.x&&!$.y?e.fire("moveend"):($=e._limitOffset($,e.options.maxBounds),I(function(){e.panBy($,{duration:O,easeLinearity:a,noMoveStart:!0,animate:!0})}))}}});U.addInitHook("addHandler","dragging",_n),U.mergeOptions({keyboard:!0,keyboardPanDelta:80});var gn=xt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),D(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),K(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,n=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(n,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++)e[i.left[n]]=[-1*t,0];for(n=0,o=i.right.length;n<o;n++)e[i.right[n]]=[t,0];for(n=0,o=i.down.length;n<o;n++)e[i.down[n]]=[0,t];for(n=0,o=i.up.length;n<o;n++)e[i.up[n]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++)e[i.zoomIn[n]]=t;for(n=0,o=i.zoomOut.length;n<o;n++)e[i.zoomOut[n]]=-t},_addHooks:function(){D(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){K(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,n;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(n=this._panKeys[e],t.shiftKey&&(n=Z(n).multiplyBy(3)),i.options.maxBounds&&(n=i._limitOffset(Z(n),i.options.maxBounds)),i.options.worldCopyJump){var o=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));i.panTo(o)}else i.panBy(n)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Dt(t)}}});U.addInitHook("addHandler","keyboard",gn),U.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var vn=xt.extend({addHooks:function(){D(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){K(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Hi(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(v(this._performZoom,this),n),Dt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(this._map.options.wheelPxPerZoomLevel*4),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,r=i?Math.ceil(o/i)*i:o,a=t._limitZoom(e+(this._delta>0?r:-r))-e;this._delta=0,this._startTime=null,a&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+a):t.setZoomAround(this._lastMousePos,e+a))}});U.addInitHook("addHandler","scrollWheelZoom",vn);var jo=600;U.mergeOptions({tapHold:z.touchNative&&z.safari&&z.mobile,tapTolerance:15});var yn=xt.extend({addHooks:function(){D(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){K(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new B(e.clientX,e.clientY),this._holdTimeout=setTimeout(v(function(){this._cancel(),this._isTapValid()&&(D(document,"touchend",ht),D(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),jo),D(document,"touchend touchcancel contextmenu",this._cancel,this),D(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){K(document,"touchend",ht),K(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),K(document,"touchend touchcancel contextmenu",this._cancel,this),K(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new B(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});U.addInitHook("addHandler","tapHold",yn),U.mergeOptions({touchZoom:z.touch,bounceAtZoomLimits:!0});var bn=xt.extend({addHooks:function(){q(this._map._container,"leaflet-touch-zoom"),D(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){et(this._map._container,"leaflet-touch-zoom"),K(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(n)._divideBy(2))),this._startDist=i.distanceTo(n),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),D(document,"touchmove",this._onTouchMove,this),D(document,"touchend touchcancel",this._onTouchEnd,this),ht(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),o=i.distanceTo(n)/this._startDist;if(this._zoom=e.getScaleZoom(o,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&o<1||this._zoom>e.getMaxZoom()&&o>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,o===1)return}else{var r=i._add(n)._divideBy(2)._subtract(this._centerPoint);if(o===1&&r.x===0&&r.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),R(this._animRequest);var a=v(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=I(a,this,!0),ht(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,R(this._animRequest),K(document,"touchmove",this._onTouchMove,this),K(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});U.addInitHook("addHandler","touchZoom",bn),U.BoxZoom=mn,U.DoubleClickZoom=pn,U.Drag=_n,U.Keyboard=gn,U.ScrollWheelZoom=vn,U.TapHold=yn,U.TouchZoom=bn,l.Bounds=X,l.Browser=z,l.CRS=Lt,l.Canvas=un,l.Circle=li,l.CircleMarker=Le,l.Class=rt,l.Control=gt,l.DivIcon=sn,l.DivOverlay=wt,l.DomEvent=ho,l.DomUtil=so,l.Draggable=Et,l.Evented=Ot,l.FeatureGroup=Tt,l.GeoJSON=kt,l.GridLayer=le,l.Handler=xt,l.Icon=jt,l.ImageOverlay=Ce,l.LatLng=V,l.LatLngBounds=dt,l.Layer=vt,l.LayerGroup=Ut,l.LineUtil=Lo,l.Map=U,l.Marker=we,l.Mixin=go,l.Path=zt,l.Point=B,l.PolyUtil=vo,l.Polygon=Gt,l.Polyline=Pt,l.Popup=Me,l.PosAnimation=Fi,l.Projection=To,l.Rectangle=fn,l.Renderer=St,l.SVG=ue,l.SVGOverlay=an,l.TileLayer=Jt,l.Tooltip=Ee,l.Transformation=Ae,l.Util=Y,l.VideoOverlay=rn,l.bind=v,l.bounds=ct,l.canvas=cn,l.circle=Io,l.circleMarker=zo,l.control=re,l.divIcon=Ho,l.extend=f,l.featureGroup=Co,l.geoJSON=on,l.geoJson=Bo,l.gridLayer=Fo,l.icon=Mo,l.imageOverlay=Zo,l.latLng=W,l.latLngBounds=it,l.layerGroup=So,l.map=uo,l.marker=Eo,l.point=Z,l.polygon=Ao,l.polyline=Oo,l.popup=Ro,l.rectangle=Uo,l.setOptions=g,l.stamp=_,l.svg=dn,l.svgOverlay=No,l.tileLayer=ln,l.tooltip=qo,l.transformation=Yt,l.version=y,l.videoOverlay=Do;var Go=window.L;l.noConflict=function(){return window.L=Go,this},window.L=l})}(fe,fe.exports)),fe.exports}var rr=or();const ar=ir(rr);function Rt(){const h=document.createElement("header");if(h.className="app-header",h.innerHTML=`
        <div class="logo-container">
            <div class="logo">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#fbfdff" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    <path fill="#fbfdff" d="M19 12h-2v-1h-1v1h-1v1h1v1h1v-1h2v-1z"/>
                </svg>
            </div>
            <h1>Travel Planner </h1>
        </div>
        <nav class="nav-links">
            <a href="#/" class="nav-home"><i class="fas fa-home"></i> Home</a>
            <a href="#/trips" class="nav-mytrips"><i class="fas fa-map-marked-alt"></i> My Trips</a>
            <a href="#/weather" class="nav-weather"><i class="fas fa-cloud-sun"></i> Weather</a>
            <a href="#/flights" class="nav-flights"><i class="fas fa-plane"></i> Flights</a>
            <a href="#/events" class="nav-events"><i class="fas fa-calendar-alt"></i> Events</a>
            <button class="login-btn"><i class="fas fa-user"></i> Sign In</button>
             <a href="#/settings" class="nav-settings"><i class="fas fa-cog"></i> Settings</a>
        </nav>
        <button class="mobile-menu-btn" aria-label="Open menu"><i class="fas fa-bars"></i></button>
    `,setTimeout(()=>{const c=h.querySelector(".nav-links"),l=h.querySelector(".mobile-menu-btn");l.addEventListener("click",()=>{c.classList.toggle("nav-open"),l.classList.toggle("active")}),c.querySelectorAll("a,button").forEach(f=>{f.addEventListener("click",()=>{c.classList.remove("nav-open"),l.classList.remove("active")})});const y=h.querySelector(".login-btn");y&&y.addEventListener("click",()=>{window.location.hash="#/superuser"})},0),!document.getElementById("header-burger-css")){const c=document.createElement("style");c.id="header-burger-css",c.textContent=`
        .app-header {
            background: rgb(51, 9, 240);
            color: #fff;
            padding: 1rem 0.5rem;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            position: relative;
            z-index: 1000;
        }
        .logo-container {
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }
        .logo svg {
            display: block;
        }
        .nav-links {
            display: flex;
            gap: 1.2rem;
            align-items: center;
            transition: max-height 0.3s;
        }
        .nav-links a, .nav-links button {
            color: #fff;
            background: none;
            border: none;
            font-size: 1rem;
            text-decoration: none;
            cursor: pointer;
            padding: 0.5rem 0.8rem;
            border-radius: 6px;
            transition: background 0.2s, color 0.2s;
            outline: none;
        }
        .nav-links a:hover, .nav-links button:hover,
        .nav-links a:focus, .nav-links button:focus {
            background: #1565c0;
            color: #bbdefb;
        }
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.7rem;
            margin-left: auto;
            cursor: pointer;
            transition: color 0.2s;
        }
        @media (max-width: 900px) {
            .logo-container h1 {
                font-size: 1.2rem;
            }
            .nav-links a, .nav-links button {
                font-size: 0.98rem;
                padding: 0.5rem 0.6rem;
            }
        }
        @media (max-width: 700px) {
            .app-header {
                position: relative;
            }
            .logo-container {
                justify-content: space-between;
            }
            .nav-links {
                flex-direction: column;
                align-items: stretch;
                background: #1976d2;
                position: absolute;
                top: 60px;
                left: 0;
                right: 0;
                max-height: 0;
                overflow: hidden;
                overflow-y: auto;
                width: 100%;
                z-index: 100;
                box-shadow: 0 2px 8px rgba(66,133,244,0.13);
                padding-bottom: 0;
                transition: max-height 0.3s, padding-bottom 0.3s;
                visibility: hidden;
                opacity: 0;
            }
            .nav-links.nav-open {
                max-height: 600px;
                padding-bottom: 1rem;
                visibility: visible;
                opacity: 1;
            }
            .nav-links a, .nav-links button {
                width: 100%;
                text-align: left;
                padding: 1rem 1.2rem;
                font-size: 1.1rem;
                border-radius: 0;
                border-bottom: 1px solid #2156a0;
            }
            .nav-links a:last-child, .nav-links button:last-child {
                border-bottom: none;
            }
            .mobile-menu-btn {
                display: block;
            }
        }
        `,document.head.appendChild(c)}return h}function sr(){const h=document.createElement("section");h.className="welcome-section",h.innerHTML=`
        <div class="welcome-content">
            <h2>Welcome to Wanderlog Lite!</h2>
            <p>
                Plan your next adventure with ease. Search destinations, build your itinerary, 
                compare prices, track your budget, and discover local events—all in one place.
            </p>
            <button class="cta-button">Start Planning Now</button>
        </div>
        <div class="animation-layer"></div>
    `;const c=document.createElement("style");return c.textContent=`
        .welcome-section {
            position: relative;
            height: 100vh;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            color: #fff;
            text-align: center;
            padding: 0 20px;
            background: url('src/images/R.jpeg') center center/cover no-repeat;
        }
        
        .welcome-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            background: rgba(0,0,0,0.55); /* semi-transparent dark background */
            border-radius: 18px;
            padding: 2rem 2.5rem;
            margin: 0 auto;
            color: #fff; /* ensure text is white */
            box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        }

        .welcome-section h2,
        .welcome-section p {
            color: #fff; /* force white text */
            text-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }
        
        .welcome-section h2 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 20px;
            animation: fadeInUp 1s ease-out;
        }
        
        .welcome-section p {
            font-size: clamp(1rem, 2vw, 1.2rem);
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out 0.3s forwards;
            opacity: 0;
        }
        
        .cta-button {
            padding: 12px 30px;
            background:rgb(102, 21, 252);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: fadeInUp 1s ease-out 0.6s forwards;
            opacity: 0;
        }
        
        .cta-button:hover {
            background:rgb(51, 28, 255);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        .animation-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg,rgba(8, 194, 123, 0.3),rgba(246, 245, 248, 0.3));
            z-index: 1;
            pointer-events: none;
        }
        
        .animation-layer::before, .animation-layer::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            animation: float 15s infinite linear;
        }
        
        .animation-layer::before {
            width: 300px;
            height: 300px;
            top: -50px;
            left: -50px;
            animation-delay: 0s;
        }
        
        .animation-layer::after {
            width: 200px;
            height: 200px;
            bottom: -30px;
            right: -30px;
            animation-delay: 0.5s;
        }
        
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(50px, 50px) rotate(90deg);
            }
            50% {
                transform: translate(100px, 0) rotate(180deg);
            }
            75% {
                transform: translate(50px, -50px) rotate(270deg);
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .welcome-section {
                height: 80vh;
            }
            
            .animation-layer::before {
                width: 200px;
                height: 200px;
            }
            
            .animation-layer::after {
                width: 150px;
                height: 150px;
            }
        }
    `,document.head.appendChild(c),h.querySelector(".cta-button").addEventListener("click",()=>{window.location.hash="#/trips"}),h}document.addEventListener("DOMContentLoaded",()=>{Pn()});function Pn(){const h=document.getElementById("map");if(!h)return;h._leaflet_id&&(h._leaflet_id=null,h.innerHTML="");const c=L.map(h).setView([51.505,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(c);const l=document.getElementById("zoom-in"),y=document.getElementById("zoom-out"),f=document.getElementById("current-location");l&&l.addEventListener("click",()=>c.zoomIn()),y&&y.addEventListener("click",()=>c.zoomOut()),f&&f.addEventListener("click",()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(E=>{c.flyTo([E.coords.latitude,E.coords.longitude],13)}):alert("Geolocation is not supported by this browser.")})}function lr({itineraries:h=[],maxBudget:c=1e3}={}){const l=document.createElement("div");l.className="itinerary-destination-flex";const y=document.createElement("section");y.className="itinerary-builder-section",y.innerHTML=`
        <h2>
            <img src="https://img.icons8.com/color/48/itinerary.png" alt="Itinerary Icon" style="vertical-align:middle;width:32px;height:32px;margin-right:0.5rem;">
            Itinerary Builder
        </h2>
        <div class="itinerary-actions">
            <input type="text" id="search-stop" placeholder="Search stops..." />
            <input type="number" id="max-budget-input" min="0" step="0.01" value="${c}" style="width:120px;" title="Set Max Budget" />
            <span style="font-size:0.95em;color:#1976d2;">Max Budget</span>
            <button id="export-csv-btn" title="Export as CSV">
                <img src="https://img.icons8.com/fluency/24/export-csv.png" alt="Export" style="vertical-align:middle;width:20px;height:20px;">
                Export CSV
            </button>
        </div>
        <form id="itinerary-form" autocomplete="off" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input type="text" placeholder="Add stop" id="itinerary-input" required />
            <input type="date" id="itinerary-date" required />
            <input type="text" placeholder="Notes (optional)" id="itinerary-notes" maxlength="60" />
            <input type="number" placeholder="Budget ($)" id="itinerary-budget" min="0" step="0.01" />
            <button id="itinerary-add-btn" type="submit">
                <img src="https://img.icons8.com/fluency/24/plus-math.png" alt="Add" style="vertical-align:middle;width:20px;height:20px;">
                Add
            </button>
        </form>
        <div id="budget-progress-container">
            <label for="budget-progress">Budget Usage:</label>
            <progress id="budget-progress" value="0" max="${c}"></progress>
            <span id="budget-progress-label"></span>
        </div>
        <ul id="itinerary-list"></ul>
        <div id="itinerary-summary"></div>
        <button id="itinerary-clear-btn" style="margin-top:1rem;">
            <img src="https://img.icons8.com/color/24/000000/delete-forever.png" alt="Clear" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Clear All
        </button>
    `;let f=JSON.parse(localStorage.getItem("userItinerary")||"[]"),E="",v=c;function A(){const F=y.querySelector("#itinerary-list");F.innerHTML="";let S=0,w=0,C=null,b=null;const g=f.filter(N=>N.name.toLowerCase().includes(E));g.forEach((N,G)=>{const J=document.createElement("li");if(J.className="itinerary-item",J.innerHTML=`
                <div class="itinerary-destination">
                    <img src="https://img.icons8.com/color/20/marker.png" alt="Stop" style="vertical-align:middle;width:16px;height:16px;margin-right:0.2rem;">
                    ${N.name}
                </div>
                <div class="itinerary-dates">${N.date}</div>
                <div class="itinerary-notes">${N.notes?"📝 "+N.notes:""}</div>
                <div class="itinerary-budget">${N.budget?"💰 $"+Number(N.budget).toFixed(2):""}</div>
                <button class="edit-stop" title="Edit">&#9998;</button>
                <button class="delete-stop" title="Delete">&times;</button>
            `,J.querySelector(".edit-stop").onclick=()=>{y.querySelector("#itinerary-input").value=N.name,y.querySelector("#itinerary-date").value=N.date,y.querySelector("#itinerary-notes").value=N.notes||"",y.querySelector("#itinerary-budget").value=N.budget||"",f.splice(G,1),A()},J.querySelector(".delete-stop").onclick=()=>{f.splice(G,1),_()},F.appendChild(J),S+=Number(N.budget)||0,N.date){const tt=new Date(N.date);(!C||tt<C)&&(C=tt),(!b||tt>b)&&(b=tt)}}),C&&b&&(w=Math.floor((b-C)/(1e3*60*60*24))+1),y.querySelector("#itinerary-summary").innerHTML=`
            <strong>Total Stops:</strong> ${g.length} &nbsp; | &nbsp; 
            <strong>Total Budget:</strong> $${S.toFixed(2)} &nbsp; | &nbsp;
            <strong>Trip Duration:</strong> ${w>0?w+" days":"N/A"}
        `;const M=y.querySelector("#budget-progress"),k=y.querySelector("#budget-progress-label");M.value=S,M.max=v,k.textContent=` $${S.toFixed(2)} / $${Number(v).toFixed(2)}`,S>v?(M.classList.add("over-budget"),k.style.color="red"):(M.classList.remove("over-budget"),k.style.color="")}function _(){localStorage.setItem("userItinerary",JSON.stringify(f)),A()}if(y.querySelector("#itinerary-form").onsubmit=F=>{F.preventDefault();const S=y.querySelector("#itinerary-input"),w=y.querySelector("#itinerary-date"),C=y.querySelector("#itinerary-notes"),b=y.querySelector("#itinerary-budget");S.value.trim()&&w.value&&(f.push({name:S.value.trim(),date:w.value,notes:C.value.trim(),budget:b.value}),S.value="",w.value="",C.value="",b.value="",_())},y.querySelector("#itinerary-clear-btn").onclick=()=>{confirm("Clear all itinerary stops?")&&(f=[],_())},y.querySelector("#search-stop").oninput=F=>{E=F.target.value.trim().toLowerCase(),A()},y.querySelector("#max-budget-input").oninput=F=>{const S=Number(F.target.value);v=S>0?S:1,y.querySelector("#budget-progress").max=v,A()},y.querySelector("#export-csv-btn").onclick=()=>{if(!f.length)return alert("No stops to export!");const F=[["Name","Date","Notes","Budget"],...f.map(b=>[`"${b.name.replace(/"/g,'""')}"`,b.date,`"${(b.notes||"").replace(/"/g,'""')}"`,b.budget])].map(b=>b.join(",")).join(`
`),S=new Blob([F],{type:"text/csv"}),w=URL.createObjectURL(S),C=document.createElement("a");C.href=w,C.download="itinerary.csv",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(w)},A(),Array.isArray(h)&&h.length){const F=document.createElement("ul");F.className="itinerary-list",h.forEach(S=>{var C;const w=document.createElement("li");w.className="itinerary-item",w.innerHTML=`
                <div class="itinerary-destination">${S.destination}</div>
                <div class="itinerary-dates">${S.startDate} to ${S.endDate}</div>
                <div class="itinerary-activities">Activities: ${((C=S.activities)==null?void 0:C.join(", "))||"None"}</div>
                <div class="itinerary-budget">Budget: $${S.budget||"N/A"}</div>
            `,F.appendChild(w)}),y.appendChild(F)}const H=document.createElement("img");if(H.src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",H.alt="Traveler",H.className="itinerary-human-image",l.appendChild(y),l.appendChild(H),!document.getElementById("itinerary-builder-css")){const F=document.createElement("style");F.id="itinerary-builder-css",F.textContent=`
        .itinerary-destination-flex {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
            max-width: 1100px;
            margin: 2rem auto;
            background: linear-gradient(90deg, #e3f2fd 0%, #fff 100%);
            border-radius: 18px;
            box-shadow: 0 4px 24px rgba(66,133,244,0.10);
            padding: 2rem 1rem;
        }
        .itinerary-builder-section {
            flex: 1 1 0%;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(66,133,244,0.08);
            padding: 2rem 1.5rem;
            min-width: 0;
            transition: box-shadow 0.2s;
        }
        .itinerary-builder-section:hover {
            box-shadow: 0 6px 24px rgba(66,133,244,0.13);
        }
        .itinerary-actions {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            align-items: center;
        }
        #search-stop {
            flex: 1;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: 1px solid #90caf9;
            font-size: 1rem;
            outline: none;
            transition: border 0.2s;
        }
        #search-stop:focus {
            border: 1.5px solid #1976d2;
        }
        #max-budget-input {
            border-radius: 8px;
            border: 1px solid #90caf9;
            padding: 0.5rem 0.8rem;
            font-size: 1rem;
            margin-left: 0.5rem;
            margin-right: 0.2rem;
        }
        #max-budget-input:focus {
            border: 1.5px solid #1976d2;
            outline: none;
        }
        #export-csv-btn {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: background 0.2s;
        }
        #export-csv-btn:hover {
            background: #1565c0;
        }
        #itinerary-form input, #itinerary-form button {
            border-radius: 8px;
            border: 1px solid #90caf9;
            padding: 0.5rem 0.8rem;
            font-size: 1rem;
            margin-bottom: 0.3rem;
        }
        #itinerary-form input:focus {
            border: 1.5px solid #1976d2;
            outline: none;
        }
        #itinerary-add-btn {
            background: #43a047;
            color: #fff;
            border: none;
            transition: background 0.2s;
        }
        #itinerary-add-btn:hover {
            background: #388e3c;
        }
        #itinerary-clear-btn {
            background: #e53935;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.5rem 1.2rem;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: background 0.2s;
        }
        #itinerary-clear-btn:hover {
            background: #b71c1c;
        }
        .itinerary-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: #f5fafd;
            border-radius: 8px;
            padding: 0.7rem 1rem;
            margin-bottom: 0.5rem;
            box-shadow: 0 1px 4px rgba(66,133,244,0.04);
        }
        .itinerary-item .edit-stop, .itinerary-item .delete-stop {
            background: none;
            border: none;
            font-size: 1.1rem;
            cursor: pointer;
            color: #1976d2;
            margin-left: 0.2rem;
            transition: color 0.2s;
        }
        .itinerary-item .delete-stop {
            color: #e53935;
        }
        .itinerary-item .edit-stop:hover {
            color: #388e3c;
        }
        .itinerary-item .delete-stop:hover {
            color: #b71c1c;
        }
        #budget-progress-container {
            margin: 1rem 0 1.2rem 0;
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }
        #budget-progress {
            width: 180px;
            height: 18px;
            accent-color: #1976d2;
            border-radius: 8px;
            background: #e3f2fd;
        }
        #budget-progress.over-budget {
            accent-color: #e53935;
        }
        .itinerary-human-image {
            flex: 0 0 220px;
            width: 220px;
            height: 320px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(66,133,244,0.09);
            margin-bottom: 1rem;
            align-self: flex-start;
        }
        @media (max-width: 900px) {
            .itinerary-destination-flex {
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
                padding: 1rem 0.5rem;
            }
            .itinerary-human-image {
                width: 90vw;
                max-width: 350px;
                height: 200px;
                margin: 0 auto 1rem auto;
            }
        }
        @media (max-width: 600px) {
            .itinerary-builder-section {
                padding: 1rem;
            }
            .itinerary-human-image {
                width: 100vw;
                max-width: 100%;
                height: 120px;
            }
            .itinerary-destination-flex {
                padding: 0.5rem;
            }
            #budget-progress {
                width: 100px;
            }
        }
        `,document.head.appendChild(F)}return l}function hr(){const h=document.createElement("section");h.innerHTML=`
        <h2>
            <img src="https://img.icons8.com/color/48/000000/budget.png" alt="Budget Icon" style="vertical-align:middle;width:32px;height:32px;margin-right:0.5rem;">
            Budget Tracker
        </h2>
        <form id="budget-form" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input type="number" placeholder="Amount" id="budget-input" required min="0" step="0.01" />
            <input type="text" placeholder="Description" id="budget-desc" maxlength="40" />
            <select id="budget-category">
                <option value="General">General</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Lodging">Lodging</option>
                <option value="Activity">Activity</option>
                <option value="Other">Other</option>
            </select>
            <button id="budget-add-btn" type="submit">
                <img src="https://img.icons8.com/fluency/24/plus-math.png" alt="Add" style="vertical-align:middle;width:20px;height:20px;">
                Add
            </button>
        </form>
        <ul id="budget-list"></ul>
        <div id="budget-total">
            <img src="https://img.icons8.com/fluency/24/money-bag.png" alt="Total" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Total: $0
        </div>
        <button id="budget-clear-btn" style="margin-top:1rem;">
            <img src="https://img.icons8.com/color/24/000000/delete-forever.png" alt="Clear" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Clear All
        </button>
    `;let c=JSON.parse(localStorage.getItem("budgetItems")||"[]"),l=0;function y(){const E=h.querySelector("#budget-list");E.innerHTML="",l=0,c.forEach((v,A)=>{const _=document.createElement("li");_.className="budget-item",_.innerHTML=`
                <span class="budget-amount">
                    <img src="https://img.icons8.com/fluency/20/money.png" alt="Amount" style="vertical-align:middle;width:16px;height:16px;margin-right:0.2rem;">
                    $${v.amount.toFixed(2)}
                </span>
                <span class="budget-desc">${v.desc?v.desc:""}</span>
                <span class="budget-category">
                    <img src="https://img.icons8.com/ios-filled/16/tags.png" alt="Category" style="vertical-align:middle;width:14px;height:14px;margin-right:0.1rem;">
                    ${v.category}
                </span>
                <button class="budget-delete" title="Delete" style="margin-left:0.5rem;">
                    <img src="https://img.icons8.com/color/20/000000/delete-sign.png" alt="Delete" style="vertical-align:middle;width:16px;height:16px;">
                </button>
            `,_.querySelector(".budget-delete").onclick=()=>{c.splice(A,1),f()},E.appendChild(_),l+=v.amount}),h.querySelector("#budget-total").innerHTML=`
            <img src="https://img.icons8.com/fluency/24/money-bag.png" alt="Total" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Total: $${l.toFixed(2)}
        `}function f(){localStorage.setItem("budgetItems",JSON.stringify(c)),y()}return h.querySelector("#budget-form").onsubmit=E=>{E.preventDefault();const v=h.querySelector("#budget-input"),A=h.querySelector("#budget-desc"),_=h.querySelector("#budget-category"),H=parseFloat(v.value);!isNaN(H)&&H>0&&(c.push({amount:H,desc:A.value.trim(),category:_.value}),v.value="",A.value="",_.value="General",f())},h.querySelector("#budget-clear-btn").onclick=()=>{confirm("Clear all budget items?")&&(c=[],f())},y(),h}function ur(){const h=document.createElement("section");if(h.className="price-comparison-section",h.innerHTML=`
        <h2>Price Comparison</h2>
        <form class="compare-form">
            <input type="text" name="from" placeholder="From (City or Airport)" required />
            <input type="text" name="to" placeholder="To (City or Airport)" required />
            <input type="date" name="depart" required />
            <input type="date" name="return" />
            <select name="service">
                <option value="flight">Flight</option>
                <option value="hotel">Hotel</option>
                <option value="car">Car Rental</option>
            </select>
            <button type="submit" id="compare-prices-btn">Compare Prices</button>
        </form>
        <div id="price-results"></div>
    `,!document.getElementById("price-comparison-css")){const c=document.createElement("style");c.id="price-comparison-css",c.textContent=`
        .price-comparison-section {
            max-width: 600px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 1.5rem;
        }
        .compare-form {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .compare-form input,
        .compare-form select {
            flex: 1 1 140px;
            min-width: 120px;
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .compare-form button {
            flex: 1 1 120px;
            min-width: 100px;
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .compare-form button:hover {
            background: #1565c0;
        }
        #price-results {
            background: #f7f9fa;
            border-radius: 8px;
            padding: 1rem;
            min-height: 40px;
            font-size: 1.05rem;
        }
        @media (max-width: 700px) {
            .price-comparison-section {
                padding: 1rem;
            }
            .compare-form {
                flex-direction: column;
                gap: 0.7rem;
            }
        }
        `,document.head.appendChild(c)}return h.querySelector(".compare-form").onsubmit=c=>{c.preventDefault();const l=c.target,y=l.from.value.trim(),f=l.to.value.trim(),E=l.depart.value,v=l.return.value,A=l.service.value,_=h.querySelector("#price-results");_.textContent="Searching...",setTimeout(()=>{let H;A==="flight"?(H=`$${(150+Math.random()*300).toFixed(0)}`,_.innerHTML=`<b>Flight</b> from <b>${y}</b> to <b>${f}</b> on <b>${E}</b>: <span style="color:#1976d2">${H}</span>`):A==="hotel"?(H=`$${(70+Math.random()*120).toFixed(0)}/night`,_.innerHTML=`<b>Hotel</b> in <b>${f}</b> from <b>${E}</b>${v?` to <b>${v}</b>`:""}: <span style="color:#1976d2">${H}</span>`):A==="car"&&(H=`$${(30+Math.random()*50).toFixed(0)}/day`,_.innerHTML=`<b>Car Rental</b> in <b>${f}</b> from <b>${E}</b>${v?` to <b>${v}</b>`:""}: <span style="color:#1976d2">${H}</span>`)},900)},h}function kn(){const h=document.createElement("div");h.className="flights-weather-container";const c=document.createElement("div");c.className="flights-page",c.innerHTML=`
        <h2 style="color:#1976d2;margin-top:2rem;">Flights</h2>
        <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80"
             alt="Flights Banner"
             style="width:100%;max-height:160px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;">
        <form id="flight-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input id="flight-from" type="text" placeholder="From (City or Airport)" autocomplete="off"
                style="flex:1;min-width:140px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <input id="flight-to" type="text" placeholder="To (City or Airport)" autocomplete="off"
                style="flex:1;min-width:140px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <button type="button" id="swap-btn" title="Swap" style="padding:0.5rem 0.7rem;border-radius:6px;background:#e3eafc;color:#1976d2;border:none;cursor:pointer;font-weight:bold;">&#8646;</button>
            <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#1976d2;color:#fff;border:none;cursor:pointer;">Show Route</button>
            <button type="button" id="clear-btn" style="padding:0.5rem 1rem;border-radius:6px;background:#eee;color:#333;border:none;cursor:pointer;">Clear</button>
        </form>
        <div id="flight-map" style="width:100%;height:320px;border-radius:12px;overflow:hidden;margin-bottom:1.5rem;"></div>
        <div id="flight-info" style="margin-top:1rem;"></div>
        <div id="recent-searches" style="margin-top:1.5rem;"></div>
    `;const l=document.createElement("div");if(l.className="weather-page",l.innerHTML=`
        <h2 style="color:#388e3c;margin-top:2rem;">Weather</h2>
        <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
             alt="Weather Banner"
             style="width:100%;max-height:160px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;">
        <form id="weather-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input id="weather-city" type="text" placeholder="City" autocomplete="off"
                style="flex:1;min-width:140px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#388e3c;color:#fff;border:none;cursor:pointer;">Show Weather</button>
        </form>
        <div id="weather-info" style="margin-top:1rem;min-height:60px;"></div>
    `,h.appendChild(c),h.appendChild(l),!document.getElementById("flights-weather-css")){const m=document.createElement("style");m.id="flights-weather-css",m.textContent=`
        .flights-weather-container {
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: flex-start;
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
        }
        .flights-page, .weather-page {
            flex: 1 1 350px;
            min-width: 0;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem 1.5rem;
            margin: 2rem 0;
        }
        .weather-page {
            max-width: 400px;
        }
        @media (max-width: 900px) {
            .flights-weather-container {
                flex-direction: column;
                gap: 1.5rem;
                align-items: stretch;
            }
            .flights-page, .weather-page {
                margin: 1rem 0;
                max-width: 100%;
            }
        }
        @media (max-width: 600px) {
            .flights-page, .weather-page {
                padding: 1rem 0.5rem;
            }
            #flight-form, #weather-form {
                flex-direction: column;
                gap: 0.7rem;
            }
            #flight-map {
                height: 200px;
            }
        }
        `,document.head.appendChild(m)}l.querySelector("#weather-form").addEventListener("submit",async m=>{m.preventDefault();const p=l.querySelector("#weather-city").value.trim(),x=l.querySelector("#weather-info");if(!p){x.innerHTML='<span style="color:#d32f2f;">Please enter a city.</span>';return}x.innerHTML="Loading...";try{const R=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(p)}&count=1&language=en&format=json`)).json();if(!R.results||!R.results[0]){x.innerHTML='<span style="color:#d32f2f;">City not found.</span>';return}const{latitude:Y,longitude:rt,name:It,country:lt}=R.results[0],B=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Y}&longitude=${rt}&current_weather=true`)).json();if(!B.current_weather){x.innerHTML='<span style="color:#d32f2f;">Weather data unavailable.</span>';return}const Ct=B.current_weather;x.innerHTML=`
                <div>
                    <strong>${It}, ${lt}</strong><br>
                    <strong>Temperature:</strong> ${Ct.temperature}&deg;C<br>
                    <strong>Wind:</strong> ${Ct.windspeed} km/h<br>
                    <strong>Weather:</strong> ${Ct.weathercode===0?"Clear":"See Open-Meteo docs"}
                </div>
            `}catch{x.innerHTML='<span style="color:#d32f2f;">Error fetching weather.</span>'}});let y=!1,f,E,v,A,_=JSON.parse(localStorage.getItem("recentFlights")||"[]");function H(m){if(y)return m();const p=document.createElement("link");p.rel="stylesheet",p.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",document.head.appendChild(p);const x=document.createElement("script");x.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",x.onload=()=>{y=!0,m()},document.body.appendChild(x)}function F(){f&&f.remove(),f=L.map("flight-map").setView([20,0],2),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(f)}async function S(m){const x=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(m)}&count=1&language=en&format=json`)).json();return x.results&&x.results[0]?x.results[0]:null}function w(m,p){E&&f.removeLayer(E),v&&f.removeLayer(v),A&&f.removeLayer(A),v=L.marker([m.latitude,m.longitude]).addTo(f).bindPopup(`<b>${m.name}</b>`).openPopup(),A=L.marker([p.latitude,p.longitude]).addTo(f).bindPopup(`<b>${p.name}</b>`),E=L.polyline([[m.latitude,m.longitude],[p.latitude,p.longitude]],{color:"blue",weight:4,dashArray:"8 8"}).addTo(f),f.fitBounds(E.getBounds(),{padding:[30,30]})}function C(m,p,x,I){const Y=(x-m)*Math.PI/180,rt=(I-p)*Math.PI/180,It=Math.sin(Y/2)*Math.sin(Y/2)+Math.cos(m*Math.PI/180)*Math.cos(x*Math.PI/180)*Math.sin(rt/2)*Math.sin(rt/2);return 6371*(2*Math.atan2(Math.sqrt(It),Math.sqrt(1-It)))}function b(){const m=c.querySelector("#recent-searches");if(!_.length){m.innerHTML="";return}m.innerHTML=`<strong>Recent Searches:</strong>
            <ul>
                ${_.map((p,x)=>`<li data-idx="${x}">${p.from} &rarr; ${p.to}</li>`).join("")}
            </ul>`,m.querySelectorAll("li").forEach(p=>{p.onclick=()=>{const x=p.getAttribute("data-idx"),I=_[x];c.querySelector("#flight-from").value=I.from,c.querySelector("#flight-to").value=I.to}})}c.querySelector("#swap-btn").onclick=()=>{const m=c.querySelector("#flight-from"),p=c.querySelector("#flight-to");[m.value,p.value]=[p.value,m.value]},c.querySelector("#clear-btn").onclick=()=>{c.querySelector("#flight-from").value="",c.querySelector("#flight-to").value="",c.querySelector("#flight-info").innerHTML="",f&&(E&&f.removeLayer(E),v&&f.removeLayer(v),A&&f.removeLayer(A))};function g(m){const p=m/850,x=Math.round(p*60+30),I=Math.floor(x/60),R=x%60;return I?`${I}h ${R}m`:`${R} min`}c.querySelector("#flight-form").addEventListener("submit",async m=>{m.preventDefault();const p=c.querySelector("#flight-from").value.trim(),x=c.querySelector("#flight-to").value.trim(),I=c.querySelector("#flight-info");if(!p||!x){I.innerHTML='<span style="color:#d32f2f;">Please enter both origin and destination.</span>';return}I.innerHTML="Searching...",H(async()=>{f||F();const R=await S(p),Y=await S(x);if(!R||!Y){I.innerHTML='<span style="color:#d32f2f;">Location not found. Try a different city or airport.</span>';return}w(R,Y);const rt=C(R.latitude,R.longitude,Y.latitude,Y.longitude);I.innerHTML=`
                <div>
                    <strong>Route:</strong> ${R.name} (${R.country}) &rarr; ${Y.name} (${Y.country})<br>
                    <strong>Distance:</strong> ${rt.toFixed(1)} km<br>
                    <strong>Est. Duration:</strong> ${g(rt)}
                </div>
            `,_.unshift({from:p,to:x}),_=_.slice(0,3),localStorage.setItem("recentFlights",JSON.stringify(_)),b()})}),b();let M=!0;const k=document.createElement("button");k.textContent="°F",k.title="Switch to Fahrenheit",k.style.cssText="margin-left:0.7em;padding:0.3em 0.8em;border-radius:6px;background:#e3eafc;color:#388e3c;border:none;cursor:pointer;",l.querySelector("form").appendChild(k),k.onclick=m=>{m.preventDefault(),M=!M,k.textContent=M?"°F":"°C",k.title=M?"Switch to Fahrenheit":"Switch to Celsius";const p=l.querySelector("#weather-info");if(p.dataset.weather){const x=JSON.parse(p.dataset.weather);T(x,p)}};function N(m){return[0].includes(m)?"☀️":[1,2,3].includes(m)?"⛅":[45,48].includes(m)?"🌫️":[51,53,55,56,57,61,63,65,66,67,80,81,82].includes(m)?"🌧️":[71,73,75,77,85,86].includes(m)?"❄️":[95,96,99].includes(m)?"⛈️":""}function G(m){return{0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Depositing rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",56:"Freezing drizzle",57:"Dense freezing drizzle",61:"Slight rain",63:"Rain",65:"Heavy rain",66:"Freezing rain",67:"Heavy freezing rain",71:"Slight snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Rain showers",81:"Heavy rain showers",82:"Violent rain showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm w/ hail",99:"Thunderstorm w/ heavy hail"}[m]||"Unknown"}let J=JSON.parse(localStorage.getItem("favoriteWeather")||"[]");const tt=document.createElement("button");tt.textContent="★",tt.title="Add to favorites",tt.style.cssText="margin-left:0.7em;padding:0.3em 0.8em;border-radius:6px;background:#fffbe6;color:#ffb300;border:none;cursor:pointer;",l.querySelector("form").appendChild(tt),tt.onclick=m=>{m.preventDefault();const p=l.querySelector("#weather-city").value.trim();p&&!J.includes(p)&&(J.unshift(p),J=J.slice(0,5),localStorage.setItem("favoriteWeather",JSON.stringify(J)),st())};function st(){let m=l.querySelector("#favorite-weather");if(m||(m=document.createElement("div"),m.id="favorite-weather",m.style.marginTop="1.2rem",l.appendChild(m)),!J.length){m.innerHTML="";return}m.innerHTML=`<strong>Favorite Locations:</strong>
            <ul style="margin:0.5em 0 0 0;padding:0;">
                ${J.map((p,x)=>`<li style="display:flex;align-items:center;gap:0.5em;margin-bottom:0.2em;">
                    <span class="fav-city" style="cursor:pointer;color:#388e3c;text-decoration:underline;">${p}</span>
                    <button data-remove="${x}" style="color:#d32f2f;background:none;border:none;cursor:pointer;">✕</button>
                </li>`).join("")}
            </ul>`,m.querySelectorAll(".fav-city").forEach((p,x)=>{p.onclick=()=>{l.querySelector("#weather-city").value=J[x]}}),m.querySelectorAll("button[data-remove]").forEach(p=>{p.onclick=()=>{const x=+p.getAttribute("data-remove");J.splice(x,1),localStorage.setItem("favoriteWeather",JSON.stringify(J)),st()}})}st();function T(m,p){let x=m.temperature,I="°C";M||(x=x*9/5+32,I="°F"),p.innerHTML=`
            <div>
                <span style="font-size:2rem;">${N(m.weathercode)}</span><br>
                <strong>Temperature:</strong> ${x.toFixed(1)}${I}<br>
                <strong>Wind:</strong> ${m.windspeed} km/h<br>
                <strong>Weather:</strong> ${G(m.weathercode)}
            </div>
        `,p.dataset.weather=JSON.stringify(m)}if(l.querySelector("#weather-form").addEventListener("submit",async m=>{m.preventDefault();const p=l.querySelector("#weather-city").value.trim(),x=l.querySelector("#weather-info");if(!p){x.innerHTML='<span style="color:#d32f2f;">Please enter a city.</span>';return}x.innerHTML="Loading...";try{const R=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(p)}&count=1&language=en&format=json`)).json();if(!R.results||!R.results[0]){x.innerHTML='<span style="color:#d32f2f;">City not found.</span>';return}const{latitude:Y,longitude:rt,name:It,country:lt}=R.results[0],B=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${Y}&longitude=${rt}&current_weather=true`)).json();if(!B.current_weather){x.innerHTML='<span style="color:#d32f2f;">Weather data unavailable.</span>';return}const Ct=B.current_weather;T(Ct,x)}catch{x.innerHTML='<span style="color:#d32f2f;">Error fetching weather.</span>'}}),!document.getElementById("weather-future-css")){const m=document.createElement("style");m.id="weather-future-css",m.textContent=`
        @media (max-width: 600px) {
            .weather-page form {
                flex-wrap: wrap;
            }
            .weather-page form button {
                margin-top: 0.5em;
                width: 100%;
            }
            #favorite-weather ul {
                padding-left: 0;
            }
            #favorite-weather li {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        `,document.head.appendChild(m)}return h}function Sn(){const h=document.createElement("div");if(h.className="events-page",h.innerHTML=`
    <h2 style="color:#1976d2;margin-top:2rem;">Events</h2>
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
         alt="Events Banner" 
         style="width:100%;max-height:180px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;">
    <form id="event-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
        <input id="event-location" type="text" placeholder="Enter city or country..." autocomplete="off"
            style="flex:1;min-width:180px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
        <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#1976d2;color:#fff;border:none;cursor:pointer;">Find Events</button>
        <button type="button" id="clear-events" style="padding:0.5rem 1rem;border-radius:6px;background:#eee;color:#333;border:none;cursor:pointer;">Clear</button>
    </form>
    <div id="event-autocomplete" class="event-autocomplete-list" style="display:none;"></div>
    <div id="event-controls" style="margin-bottom:1rem;display:flex;gap:0.7em;align-items:center;flex-wrap:wrap;"></div>
    <div id="event-list" style="margin-top:1.5rem;"></div>
    <div id="favorite-events" style="margin-top:1.5rem;"></div>
`,!document.getElementById("events-css")){const w=document.createElement("style");w.id="events-css",w.textContent=`
        .events-page {
            max-width: 600px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem 1.5rem;
        }
        #event-list {
            min-height: 80px;
            font-size: 1.1rem;
        }
        .event-card {
            background: #f7f9fa;
            border-radius: 8px;
            box-shadow: 0 1px 8px rgba(66,133,244,0.08);
            padding: 1rem 1.2rem;
            margin-bottom: 1rem;
            transition: box-shadow 0.2s, transform 0.2s;
            display: flex;
            flex-direction: column;
            gap: 0.3em;
        }
        .event-card:hover {
            box-shadow: 0 4px 16px rgba(66,133,244,0.13);
            transform: translateY(-2px) scale(1.02);
        }
        .event-title {
            font-size: 1.15rem;
            font-weight: 600;
            color: #1976d2;
            margin-bottom: 0.3rem;
        }
        .event-date {
            color: #555;
            font-size: 0.98rem;
            margin-bottom: 0.2rem;
        }
        .event-location {
            color: #888;
            font-size: 0.95rem;
        }
        .event-actions {
            margin-top: 0.5em;
            display: flex;
            gap: 0.7em;
            flex-wrap: wrap;
        }
        .event-actions button {
            padding: 0.3em 0.8em;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            background: #e3eafc;
            color: #1976d2;
            font-size: 0.97em;
        }
        .event-actions button.fav {
            background: #fffbe6;
            color: #ffb300;
        }
        .event-actions button.share {
            background: #e0f7fa;
            color: #00838f;
        }
        .event-autocomplete-list {
            position: absolute;
            left: 0;
            right: 0;
            background: #fff;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            max-height: 180px;
            overflow-y: auto;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            margin-top: -1.2em;
        }
        .event-autocomplete-list div {
            padding: 0.5rem 1rem;
            cursor: pointer;
        }
        .event-autocomplete-list div:hover {
            background: #e3eafc;
        }
        #favorite-events ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        #favorite-events li {
            padding: 0.4rem 0.7rem;
            border-radius: 6px;
            margin-bottom: 0.3rem;
            background: #f5f7fa;
            cursor: pointer;
            font-size: 0.98em;
            display: flex;
            align-items: center;
            gap: 0.5em;
        }
        #favorite-events li button {
            color: #d32f2f;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1em;
        }
        .event-list-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
        }
        @media (max-width: 600px) {
            .events-page {
                padding: 1rem 0.5rem;
            }
            #event-form {
                flex-direction: column;
                gap: 0.7rem;
            }
            .event-card {
                padding: 0.7rem 0.5rem;
            }
            .event-list-grid {
                grid-template-columns: 1fr;
            }
        }
        `,document.head.appendChild(w)}let c=JSON.parse(localStorage.getItem("favoriteEvents")||"[]"),l=!1,y=[];const f=h.querySelector("#event-controls");f.innerHTML=`
        <label for="sort-events" style="font-size:0.98em;">Sort by:</label>
        <select id="sort-events" style="padding:0.3em 0.7em;border-radius:6px;border:1px solid #cfd8dc;">
            <option value="date">Date</option>
            <option value="title">Title</option>
        </select>
        <button id="toggle-view" style="padding:0.3em 0.8em;border-radius:6px;background:#e3eafc;color:#1976d2;border:none;cursor:pointer;">Grid/List</button>
        <label for="from-date" style="font-size:0.98em;margin-left:1em;">From:</label>
        <input type="date" id="from-date" style="padding:0.2em 0.5em;border-radius:6px;border:1px solid #cfd8dc;">
        <label for="to-date" style="font-size:0.98em;">To:</label>
        <input type="date" id="to-date" style="padding:0.2em 0.5em;border-radius:6px;border:1px solid #cfd8dc;">
        <button id="filter-date" style="padding:0.3em 0.8em;border-radius:6px;background:#e3eafc;color:#1976d2;border:none;cursor:pointer;">Filter</button>
    `;const E=h.querySelector("#event-location"),v=h.querySelector("#event-autocomplete");E.addEventListener("input",()=>{const w=E.value.trim().toLowerCase();if(!w){v.style.display="none";return}const b=[...new Set(y.map(g=>{var M;return((M=g.location)==null?void 0:M.split(",")[0])||""}))].filter(Boolean).filter(g=>g.toLowerCase().startsWith(w));if(!b.length){v.style.display="none";return}v.innerHTML=b.map(g=>`<div>${g}</div>`).join(""),v.style.display="block",v.querySelectorAll("div").forEach((g,M)=>{g.onclick=()=>{E.value=b[M],v.style.display="none"}})}),document.addEventListener("click",w=>{h.contains(w.target)||(v.style.display="none")});function A(){const w=h.querySelector("#favorite-events");if(!c.length){w.innerHTML="";return}w.innerHTML=`<strong>Favorite Events:</strong>
            <ul>
                ${c.map((C,b)=>`<li>
                    <span class="fav-title" style="flex:1;">${C.title} (${C.location})</span>
                    <button data-remove="${b}" title="Remove">✕</button>
                </li>`).join("")}
            </ul>`,w.querySelectorAll("button[data-remove]").forEach(C=>{C.onclick=()=>{const b=+C.getAttribute("data-remove");c.splice(b,1),localStorage.setItem("favoriteEvents",JSON.stringify(c)),A()}}),w.querySelectorAll(".fav-title").forEach((C,b)=>{C.onclick=()=>{_([c[b]])}})}function _(w){const C=h.querySelector("#event-list");if(!w.length){C.innerHTML='<span style="color:#d32f2f;">No events found for this location.</span>',C.className="";return}C.className=l?"event-list-grid":"",C.innerHTML=w.map((b,g)=>`
        <div class="event-card">
            <img src="https://img.icons8.com/color/96/000000/calendar--v1.png" 
                 alt="Event" style="width:48px;height:48px;border-radius:8px;margin-bottom:0.5em;align-self:flex-start;">
            <div class="event-title">${b.title}</div>
            <div class="event-date">${b.date?`<i class="fas fa-calendar-alt"></i> ${b.date}`:""}</div>
            <div class="event-location">${b.location?`<i class="fas fa-map-marker-alt"></i> ${b.location}`:""}</div>
            <div class="event-desc">${b.description||""}</div>
            <div class="event-actions">
                <button class="fav" data-idx="${g}" title="Add to favorites">★</button>
                <button class="share" data-idx="${g}" title="Copy event info">Copy</button>
                ${b.url?`<a href="${b.url}" target="_blank" style="text-decoration:none;"><button type="button" class="share" style="background:#d1ffd6;color:#388e3c;">Visit</button></a>`:""}
            </div>
        </div>
    `).join(""),C.querySelectorAll("button.fav").forEach(b=>{b.onclick=()=>{const g=+b.getAttribute("data-idx"),M=w[g];c.some(k=>k.title===M.title&&k.date===M.date)||(c.unshift(M),c=c.slice(0,5),localStorage.setItem("favoriteEvents",JSON.stringify(c)),A())}}),C.querySelectorAll("button.share").forEach(b=>{b.onclick=()=>{const g=+b.getAttribute("data-idx"),M=w[g],k=`${M.title} - ${M.date||""}
${M.location||""}
${M.description||""}`;navigator.clipboard.writeText(k),b.textContent="Copied!",setTimeout(()=>b.textContent="Copy",1200)}})}function H(){let w=[...y];const C=h.querySelector("#from-date").value,b=h.querySelector("#to-date").value;C&&(w=w.filter(k=>k.date>=C)),b&&(w=w.filter(k=>k.date<=b));const g=E.value.trim().toLowerCase();g&&(w=w.filter(k=>(k.location||"").toLowerCase().includes(g)||(k.title||"").toLowerCase().includes(g)));const M=h.querySelector("#sort-events").value;return M==="date"?w.sort((k,N)=>(k.date||"").localeCompare(N.date||"")):M==="title"&&w.sort((k,N)=>(k.title||"").localeCompare(N.title||"")),w}h.querySelector("#sort-events").onchange=()=>{_(H())},h.querySelector("#toggle-view").onclick=()=>{l=!l,_(H())},h.querySelector("#filter-date").onclick=()=>{_(H())},h.querySelector("#clear-events").onclick=()=>{E.value="",h.querySelector("#from-date").value="",h.querySelector("#to-date").value="",_(H())};async function F(w){const b=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=8dAqA1A4AqGvQK7QkA1AqGvQK7QkA1AqG&size=10&keyword=${encodeURIComponent(w)}`;try{const M=await(await fetch(b)).json();if(M._embedded&&M._embedded.events)return M._embedded.events.map(k=>{var N,G,J,tt,st,T,m;return{title:k.name,date:((G=(N=k.dates)==null?void 0:N.start)==null?void 0:G.localDate)||"",location:(T=(st=(tt=(J=k._embedded)==null?void 0:J.venues)==null?void 0:tt[0])==null?void 0:st.city)!=null&&T.name?`${k._embedded.venues[0].city.name}, ${((m=k._embedded.venues[0].country)==null?void 0:m.name)||""}`:"",description:k.info||k.pleaseNote||"",url:k.url}})}catch{}return[]}h.querySelector("#event-form").addEventListener("submit",async w=>{w.preventDefault();const C=E.value.trim();if(!C){y=S,_(H());return}h.querySelector("#event-list").innerHTML="Loading events...";const b=await F(C);y=b.length?b:S,_(H())});const S=[{title:"City Food Festival",date:"2025-06-15",location:"New York, USA",description:"Taste the best food from around the world."},{title:"Summer Music Concert",date:"2025-07-02",location:"London, UK",description:"Live performances by top artists."},{title:"Art & Culture Expo",date:"2025-08-10",location:"Paris, France",description:"Explore art and culture exhibits."}];return y=S,_(H()),A(),h}function cr(){const h=document.createElement("div");if(h.className="weather-page",h.innerHTML=`
        <h2 style="color:#1976d2;margin-top:2rem;">Weather</h2>
        <form id="weather-form" style="margin-bottom:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input id="weather-location" type="text" placeholder="Enter city or country..." autocomplete="off"
                style="flex:1;min-width:180px;padding:0.5rem;border-radius:6px;border:1px solid #cfd8dc;">
            <button type="submit" style="padding:0.5rem 1rem;border-radius:6px;background:#1976d2;color:#fff;border:none;cursor:pointer;">Get Weather</button>
        </form>
        <ul id="weather-autocomplete" class="weather-autocomplete-list" style="display:none;"></ul>
        <div id="weather-result" style="margin-top:1.5rem;"></div>
        <div id="recent-weather" style="margin-top:1.5rem;"></div>
        <button id="toggle-theme" style="margin-top:1.5rem;padding:0.4rem 1rem;border-radius:6px;background:#eee;color:#333;border:none;cursor:pointer;">🌙 Dark Mode</button>
    `,!document.getElementById("weather-css")){const g=document.createElement("style");g.id="weather-css",g.textContent=`
        .weather-page {
            max-width: 500px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 2rem 1.5rem;
            position: relative;
        }
        #weather-result {
            min-height: 80px;
            font-size: 1.1rem;
        }
        .weather-autocomplete-list {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            left: 0;
            right: 0;
            background: #fff;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            max-height: 180px;
            overflow-y: auto;
            z-index: 10;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            animation: fadeIn 0.2s;
        }
        .weather-autocomplete-list li {
            padding: 0.5rem 1rem;
            cursor: pointer;
        }
        .weather-autocomplete-list li:hover {
            background: #e3eafc;
        }
        #recent-weather ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        #recent-weather li {
            padding: 0.4rem 0.7rem;
            border-radius: 6px;
            margin-bottom: 0.3rem;
            background: #f5f7fa;
            cursor: pointer;
            font-size: 0.98em;
        }
        #recent-weather li:hover {
            background: #e3eafc;
        }
        .dark-mode {
            background: #23272f !important;
            color: #f5f7fa !important;
        }
        .dark-mode input, .dark-mode button, .dark-mode .weather-autocomplete-list, .dark-mode #weather-result, .dark-mode #recent-weather li {
            background: #23272f !important;
            color: #f5f7fa !important;
            border-color: #444 !important;
        }
        .dark-mode .weather-autocomplete-list li:hover,
        .dark-mode #recent-weather li:hover {
            background: #333d4b !important;
        }
        @media (max-width: 600px) {
            .weather-page {
                padding: 1rem 0.5rem;
            }
            #weather-form {
                flex-direction: column;
                gap: 0.7rem;
            }
        }
        @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
        }
        `,document.head.appendChild(g)}const c=h.querySelector("#weather-location"),l=h.querySelector("#weather-autocomplete");let y=[],f=[];async function E(){const g=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population");return g.ok?(await g.json()).map(k=>k.name.common).sort((k,N)=>k.localeCompare(N)):[]}async function v(){return["New York","London","Tokyo","Paris","Sydney","Berlin","Moscow","Beijing","Rio de Janeiro","Cape Town","Toronto","Dubai","Singapore","Los Angeles","Rome","Istanbul","Bangkok","Delhi","Mexico City","Madrid"]}E().then(g=>{y=g}),v().then(g=>{f=g});function A(g){if(l.innerHTML="",!g.length){l.style.display="none";return}g.forEach(M=>{const k=document.createElement("li");k.textContent=M,k.addEventListener("mousedown",()=>{c.value=M,l.style.display="none"}),l.appendChild(k)}),l.style.display="block"}c.addEventListener("input",()=>{const g=c.value.trim().toLowerCase();if(!g){A([...f,...y].slice(0,10));return}const M=[...f,...y].filter(k=>k.toLowerCase().startsWith(g)).slice(0,10);A(M)}),c.addEventListener("focus",()=>{c.value.trim()||A([...f,...y].slice(0,10))}),document.addEventListener("click",g=>{h.contains(g.target)||(l.style.display="none")});let _=JSON.parse(localStorage.getItem("recentWeather")||"[]");function H(){const g=h.querySelector("#recent-weather");if(!_.length){g.innerHTML="";return}g.innerHTML=`<strong>Recent Searches:</strong>
            <ul>
                ${_.map((M,k)=>`<li data-idx="${k}">${M}</li>`).join("")}
            </ul>`,g.querySelectorAll("li").forEach(M=>{M.onclick=()=>{c.value=M.textContent,c.dispatchEvent(new Event("input"))}})}H(),h.querySelector("#weather-form").addEventListener("submit",async g=>{g.preventDefault();const M=c.value.trim(),k=h.querySelector("#weather-result");if(!M){k.innerHTML='<span style="color:#d32f2f;">Please enter a location.</span>';return}k.innerHTML="Loading weather...";try{const G=await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(M)}&count=1&language=en&format=json`)).json();if(!G.results||!G.results[0]){k.innerHTML='<span style="color:#d32f2f;">Location not found.</span>';return}const{latitude:J,longitude:tt,name:st,country:T}=G.results[0],p=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${J}&longitude=${tt}&current_weather=true`)).json();if(!p.current_weather){k.innerHTML='<span style="color:#d32f2f;">Weather data not available.</span>';return}const x=p.current_weather;k.innerHTML=`
                <div style="margin-top:1rem;">
                    <strong style="font-size:1.2rem;">${st}${T?", "+T:""}</strong><br>
                    <span style="font-size:2.2rem;font-weight:700;">${x.temperature}&deg;C</span>
                    <span style="font-size:1.1rem;">${F(x.weathercode)} ${S(x.weathercode)}</span><br>
                    <span>Wind: ${x.windspeed} km/h</span>
                </div>
            `,_.includes(M)||(_.unshift(M),_=_.slice(0,5),localStorage.setItem("recentWeather",JSON.stringify(_)),H())}catch{k.innerHTML='<span style="color:#d32f2f;">Error fetching weather data.</span>'}});function F(g){return[0].includes(g)?"☀️":[1,2,3].includes(g)?"⛅":[45,48].includes(g)?"🌫️":[51,53,55,56,57,61,63,65,66,67,80,81,82].includes(g)?"🌧️":[71,73,75,77,85,86].includes(g)?"❄️":[95,96,99].includes(g)?"⛈️":""}function S(g){return{0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Depositing rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",56:"Freezing drizzle",57:"Dense freezing drizzle",61:"Slight rain",63:"Rain",65:"Heavy rain",66:"Freezing rain",67:"Heavy freezing rain",71:"Slight snow",73:"Snow",75:"Heavy snow",77:"Snow grains",80:"Rain showers",81:"Heavy rain showers",82:"Violent rain showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm w/ hail",99:"Thunderstorm w/ heavy hail"}[g]||"Unknown"}const w=h.querySelector("#toggle-theme");let C=!1;w.onclick=()=>{C=!C,C?(h.classList.add("dark-mode"),w.textContent="☀️ Light Mode"):(h.classList.remove("dark-mode"),w.textContent="🌙 Dark Mode")};let b=-1;return c.addEventListener("keydown",g=>{const M=l.querySelectorAll("li");M.length&&(g.key==="ArrowDown"?(b=(b+1)%M.length,M.forEach((k,N)=>k.style.background=N===b?"#e3eafc":""),g.preventDefault()):g.key==="ArrowUp"?(b=(b-1+M.length)%M.length,M.forEach((k,N)=>k.style.background=N===b?"#e3eafc":""),g.preventDefault()):g.key==="Enter"&&b>=0&&(c.value=M[b].textContent,l.style.display="none",b=-1,g.preventDefault()))}),c.addEventListener("blur",()=>{b=-1}),h}function dr(){const h=document.createElement("section");if(h.className="shareable-link-section",h.innerHTML=`
        <h2>Shareable Link</h2>
        <div class="shareable-link-row">
            <button id="generate-link-btn">Generate Link</button>
            <input type="text" id="share-link" readonly />
            <button id="copy-link-btn" title="Copy to clipboard">📋</button>
            <button id="qr-link-btn" title="Show QR Code">🔗</button>
            <button id="email-link-btn" title="Email Link">✉️</button>
            <button id="reset-link-btn" title="Reset Link">♻️</button>
        </div>
        <div class="shareable-link-info">
            <small>
                Generate a unique link to share your trip plan with friends or collaborators.<br>
                <span id="shareable-link-status"></span>
            </small>
        </div>
        <div id="qr-code-container" style="display:none; margin-top:1rem;"></div>
        <div class="shareable-link-tips">
            <strong>Tips:</strong>
            <ul>
                <li>Share your link via email, chat, or social media.</li>
                <li>Use the QR code for quick mobile access.</li>
                <li>Links expire after 7 days for security.</li>
                <li>You can reset and generate a new link anytime.</li>
            </ul>
        </div>
        <div class="shareable-link-advanced">
            <details>
                <summary>Advanced Options</summary>
                <label>
                    <input type="checkbox" id="set-expiry" />
                    Set custom expiry (24h)
                </label>
            </details>
        </div>
    `,h.querySelector("#generate-link-btn").onclick=()=>{const c=h.querySelector("#set-expiry").checked?"&exp=24h":"",l=window.location.href.split("#")[0]+"?share="+Math.random().toString(36).substr(2,8)+c;h.querySelector("#share-link").value=l,h.querySelector("#shareable-link-status").textContent="Link generated!",h.querySelector("#qr-code-container").style.display="none"},h.querySelector("#copy-link-btn").onclick=()=>{const c=h.querySelector("#share-link");c.value?(c.select(),document.execCommand("copy"),h.querySelector("#shareable-link-status").textContent="Copied to clipboard!"):h.querySelector("#shareable-link-status").textContent="Generate a link first."},h.querySelector("#qr-link-btn").onclick=()=>{const c=h.querySelector("#share-link"),l=h.querySelector("#qr-code-container");c.value?(l.innerHTML=`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(c.value)}" alt="QR Code" />`,l.style.display="block",h.querySelector("#shareable-link-status").textContent="QR code generated!"):h.querySelector("#shareable-link-status").textContent="Generate a link first."},h.querySelector("#email-link-btn").onclick=()=>{const c=h.querySelector("#share-link");c.value?(window.location.href=`mailto:?subject=My Trip Plan&body=Here is my trip plan: ${encodeURIComponent(c.value)}`,h.querySelector("#shareable-link-status").textContent="Email client opened!"):h.querySelector("#shareable-link-status").textContent="Generate a link first."},h.querySelector("#reset-link-btn").onclick=()=>{h.querySelector("#share-link").value="",h.querySelector("#shareable-link-status").textContent="Link reset.",h.querySelector("#qr-code-container").style.display="none"},!document.getElementById("shareable-link-css")){const c=document.createElement("style");c.id="shareable-link-css",c.textContent=`
        .shareable-link-section {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            padding: 1.5rem;
            max-width: 600px;
            margin: 2rem auto;
        }
        .shareable-link-row {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        .shareable-link-row input[type="text"] {
            flex: 1 1 0;
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
            background: #f7f9fa;
        }
        .shareable-link-row button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.6rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .shareable-link-row button[title] {
            padding: 0.6rem 0.8rem;
            font-size: 1.2rem;
        }
        .shareable-link-row button#qr-link-btn {
            background: #ffb300;
            color: #222;
        }
        .shareable-link-row button#qr-link-btn:hover {
            background: #ffa000;
        }
        .shareable-link-row button#email-link-btn {
            background: #43a047;
        }
        .shareable-link-row button#email-link-btn:hover {
            background: #388e3c;
        }
        .shareable-link-row button#reset-link-btn {
            background: #e53935;
        }
        .shareable-link-row button#reset-link-btn:hover {
            background: #b71c1c;
        }
        .shareable-link-row button:hover {
            background: #1565c0;
        }
        .shareable-link-info {
            margin-top: 0.7rem;
            color: #607d8b;
        }
        .shareable-link-info small {
            font-size: 0.95rem;
        }
        #shareable-link-status {
            color: #388e3c;
            font-weight: bold;
            margin-left: 0.5rem;
        }
        #qr-code-container img {
            border-radius: 8px;
            border: 1px solid #eee;
        }
        .shareable-link-tips {
            margin-top: 1.2rem;
            background: #f7f9fa;
            border-radius: 8px;
            padding: 0.7rem 1rem;
            color: #333;
            font-size: 0.98rem;
        }
        .shareable-link-tips ul {
            margin: 0.5rem 0 0 1.2rem;
            padding: 0;
        }
        .shareable-link-tips li {
            margin-bottom: 0.2rem;
        }
        .shareable-link-advanced {
            margin-top: 1rem;
            font-size: 0.97rem;
        }
        .shareable-link-advanced details {
            background: #f1f8e9;
            border-radius: 6px;
            padding: 0.5rem 1rem;
        }
        @media (max-width: 600px) {
            .shareable-link-section {
                padding: 1rem;
            }
            .shareable-link-row {
                flex-direction: column;
                gap: 0.7rem;
                align-items: stretch;
            }
        }
        `,document.head.appendChild(c)}return h}function fr(){const h=document.createElement("div");h.className="settings-container",h.innerHTML=`
        <h2>Settings</h2>
        <form class="settings-form">
            <label>
                <span>Map Theme:</span>
                <select name="mapTheme">
                    <option value="default">Default</option>
                    <option value="dark">Dark</option>
                    <option value="satellite">Satellite</option>
                </select>
            </label>
            <label>
                <span>Show Weather Info:</span>
                <input type="checkbox" name="showWeather" checked />
            </label>
            <label>
                <span>Default Map Zoom:</span>
                <input type="number" name="defaultZoom" min="1" max="20" value="13" />
            </label>
            <label>
                <span>Enable Notifications:</span>
                <input type="checkbox" name="notifications" />
            </label>
            <label>
                <span>Language:</span>
                <select name="language">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>
            </label>
            <button type="submit">Save Settings</button>
        </form>
    `;const c=h.querySelector(".settings-form"),l=c.elements.mapTheme,y=c.elements.showWeather,f=c.elements.defaultZoom,E=c.elements.notifications,v=c.elements.language,A=JSON.parse(localStorage.getItem("wanderlogSettings")||"{}");A.mapTheme&&(l.value=A.mapTheme),typeof A.showWeather=="boolean"&&(y.checked=A.showWeather),A.defaultZoom&&(f.value=A.defaultZoom),typeof A.notifications=="boolean"&&(E.checked=A.notifications),A.language&&(v.value=A.language),c.onsubmit=F=>{F.preventDefault();const S=_();localStorage.setItem("wanderlogSettings",JSON.stringify(S)),H(S.mapTheme),window.updateMapTheme&&window.updateMapTheme(S.mapTheme),window.updateMapZoom&&window.updateMapZoom(S.defaultZoom),window.dispatchEvent(new CustomEvent("settingsChanged",{detail:S})),alert("Settings saved and applied!")};function _(){return{mapTheme:l.value,showWeather:y.checked,defaultZoom:Number(f.value),notifications:E.checked,language:v.value}}function H(F){document.body.classList.remove("theme-default","theme-dark","theme-satellite"),document.body.classList.add(`theme-${F}`)}return H(l.value),h}function qt(){const h=document.createElement("footer");if(h.className="app-footer",h.innerHTML=`
        <div class="footer-content">
            <span>&copy; ${new Date().getFullYear()} Wanderlog Lite Developed By: Bundu Kallon, Freetown Sierra Leone</span>
            <nav class="footer-links">
                <a href="#/">Home</a>
                <a href="#/trips">My Trips</a>
                <a href="#/settings">Settings</a>
            </nav>
            <div class="footer-social">
                <a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://youtube.com/" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="https://t.me/" target="_blank" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
                <a href="https://pinterest.com/" target="_blank" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
                <a href="mailto:support@wanderloglite.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    `,!document.getElementById("footer-css")){const c=document.createElement("style");c.id="footer-css",c.textContent=`
        .app-footer {
            width: 100%;
            background: #1976d2;
            color: #fff;
            padding: 1.2rem 0 1rem 0;
            margin-top: 2rem;
            animation: fadeInUp 0.7s;
        }
        .footer-content {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 1rem;
        }
        .footer-links {
            display: flex;
            gap: 1.2rem;
        }
        .footer-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
        }
        .footer-links a:hover {
            color: #bbdefb;
        }
        .footer-social {
            display: flex;
            gap: 0.8rem;
        }
        .footer-social a {
            color: #fff;
            font-size: 1.3rem;
            transition: color 0.2s, transform 0.2s;
        }
        .footer-social a:hover {
            color: #bbdefb;
            transform: scale(1.15);
        }
        @media (max-width: 700px) {
            .footer-content {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
                font-size: 0.98rem;
            }
            .footer-links {
                gap: 0.8rem;
            }
            .footer-social {
                margin-top: 0.5rem;
            }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
        }
        `,document.head.appendChild(c)}return h}function mr({onLogin:h}={}){const c=document.createElement("div");if(c.className="superuser-login-container",c.innerHTML=`
        <form class="superuser-login-form" autocomplete="off">
            <h2>Super User Login</h2>
            <input type="text" id="superuser-username" placeholder="Username" required />
            <input type="password" id="superuser-password" placeholder="Password" required />
            <button type="submit">Login</button>
            <div class="superuser-login-error" id="superuser-login-error"></div>
        </form>
    `,!document.getElementById("superuser-login-css")){const f=document.createElement("style");f.id="superuser-login-css",f.textContent=`
        .superuser-login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            background: #f7f9fa;
        }
        .superuser-login-form {
            background: #fff;
            padding: 2rem 2.5rem;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-width: 350px;
        }
        .superuser-login-form h2 {
            margin-bottom: 0.5rem;
            color: #1a237e;
            text-align: center;
        }
        .superuser-login-form input {
            padding: 0.75rem 1rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .superuser-login-form button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .superuser-login-form button:hover {
            background: #1565c0;
        }
        .superuser-login-error {
            color: #d32f2f;
            font-size: 0.95rem;
            min-height: 1.2em;
            text-align: center;
        }
        @media (max-width: 500px) {
            .superuser-login-form {
                padding: 1rem;
                max-width: 95vw;
            }
        }
        `,document.head.appendChild(f)}const l=c.querySelector(".superuser-login-form"),y=c.querySelector("#superuser-login-error");return l.onsubmit=f=>{f.preventDefault();const E=l.querySelector("#superuser-username").value.trim(),v=l.querySelector("#superuser-password").value;E==="admin"&&v==="supersecret"?(y.textContent="",typeof h=="function"&&h({username:E})):y.textContent="Invalid credentials. Please try again."},c}async function ce(){return await new Promise(c=>setTimeout(c,400)),JSON.parse(localStorage.getItem("myTrips")||"[]")}async function de(h){localStorage.setItem("myTrips",JSON.stringify(h))}async function pr(h){await new Promise(l=>setTimeout(l,300));const c=["Sunny","Cloudy","Rainy","Windy","Snowy"];return c[Math.floor(Math.random()*c.length)]}async function _r(){try{const h=await fetch("https://restcountries.com/v3.1/all");if(!h.ok)throw new Error("Failed to fetch countries");return(await h.json()).map(l=>l.name.common).sort()}catch{return["United States","Canada","Mexico","United Kingdom","France","Germany","Italy","Spain","Australia","Japan"]}}function Cn({trips:h=[],onSelectTrip:c,onDeleteTrip:l}={}){const y=document.createElement("div");if(y.className="my-trips-container",!document.getElementById("mytrips-responsive-css")){const T=document.createElement("style");T.id="mytrips-responsive-css",T.textContent=`
        .my-trips-container {
            max-width: 900px;
            margin: 2rem auto;
            padding: 1.5rem;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
        }
        .add-trip-form, .trips-list, .trip-summary {
            width: 100%;
        }
        .add-trip-form {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            background: #f7f9fa;
            padding: 1rem;
            border-radius: 8px;
        }
        .add-trip-form input,
        .add-trip-form textarea {
            flex: 1 1 180px;
            min-width: 120px;
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .add-trip-form button {
            flex: 1 1 100px;
            min-width: 100px;
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .add-trip-form button:hover {
            background: #1565c0;
        }
        .trip-summary {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-bottom: 2rem;
            justify-content: space-between;
        }
        .trip-summary-card {
            flex: 1 1 200px;
            background: #f5f7fa;
            border-radius: 8px;
            padding: 1rem 1.5rem;
            box-shadow: 0 1px 6px rgba(66,133,244,0.06);
            min-width: 180px;
            text-align: center;
        }
        .trips-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .trip-item {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background: #f9fafb;
            border-radius: 8px;
            margin-bottom: 1rem;
            padding: 1rem;
            box-shadow: 0 1px 4px rgba(66,133,244,0.04);
        }
        .trip-info {
            flex: 2 1 250px;
            min-width: 180px;
        }
        .trip-info h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
            color: #1976d2;
        }
        .trip-budget, .trip-weather {
            margin-top: 0.25rem;
            font-size: 0.98rem;
            color: #333;
        }
        .trip-actions {
            display: flex;
            gap: 0.5rem;
            flex: 1 1 120px;
            justify-content: flex-end;
        }
        .trip-actions button {
            background: #e3eafc;
            border: none;
            border-radius: 6px;
            padding: 0.5rem 0.7rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .trip-actions button:hover {
            background: #bbdefb;
        }
        .empty-trips {
            text-align: center;
            color: #888;
            padding: 2rem 0;
            font-size: 1.1rem;
        }
        .empty-trips i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
        }
        .trip-modal {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .trip-modal[style*="display: none"] {
            display: none !important;
        }
        .modal-content {
            background: #fff;
            border-radius: 10px;
            padding: 2rem 1.5rem;
            min-width: 280px;
            max-width: 95vw;
            box-shadow: 0 2px 16px rgba(0,0,0,0.13);
            position: relative;
        }
        .modal-content h2 {
            margin-top: 0;
        }
        .close-modal, .close-edit-modal {
            position: absolute;
            top: 1rem;
            right: 1.2rem;
            font-size: 1.5rem;
            color: #888;
            cursor: pointer;
        }
        .edit-trip-form {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .edit-trip-form input,
        .edit-trip-form textarea {
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .edit-trip-form button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .edit-trip-form button:hover {
            background: #1565c0;
        }
        @media (max-width: 900px) {
            .my-trips-container {
                padding: 1rem;
            }
            .trip-summary {
                gap: 1rem;
            }
        }
        @media (max-width: 700px) {
            .trip-summary {
                flex-direction: column;
                gap: 1rem;
            }
            .trip-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }
            .trip-actions {
                width: 100%;
                justify-content: flex-start;
            }
        }
        @media (max-width: 500px) {
            .my-trips-container {
                padding: 0.5rem;
            }
            .trip-summary-card {
                padding: 0.75rem;
            }
            .modal-content {
                padding: 1rem 0.5rem;
            }
        }
        `,document.head.appendChild(T)}const f=document.createElement("h2");f.textContent="My Trips",y.appendChild(f);const E=document.createElement("div");E.className="trip-summary",y.appendChild(E);const v=document.createElement("form");v.className="add-trip-form",v.innerHTML=`
        <input type="text" name="name" placeholder="Destination" required />
        <input type="date" name="startDate" required />
        <input type="date" name="endDate" required />
        <input type="number" name="budget" placeholder="Budget ($)" min="0" />
        <textarea name="notes" placeholder="Notes"></textarea>
        <button type="submit"><i class="fas fa-plus"></i> Add Trip</button>
    `,y.appendChild(v);const A=v.querySelector('input[name="name"]'),_=document.createElement("ul");_.className="destination-autocomplete-list",_.style.display="none",_.style.position="absolute",_.style.zIndex="10",_.style.background="#fff",_.style.border="1px solid #cfd8dc",_.style.borderRadius="6px",_.style.maxHeight="180px",_.style.overflowY="auto",_.style.marginTop="2.2rem",_.style.width="100%",_.style.boxShadow="0 2px 8px rgba(66,133,244,0.07)",v.style.position="relative",v.appendChild(_);let H=[];_r().then(T=>{H=T}),A.addEventListener("focus",()=>{A.value.trim()||F(H)}),A.addEventListener("input",()=>{const T=A.value.trim().toLowerCase();if(!T){F(H);return}const m=H.filter(p=>p.toLowerCase().startsWith(T)).slice(0,8);F(m)}),document.addEventListener("click",T=>{v.contains(T.target)||(_.style.display="none")});function F(T){if(_.innerHTML="",!T.length){_.style.display="none";return}T.forEach(m=>{const p=document.createElement("li");p.textContent=m,p.style.padding="0.5rem 1rem",p.style.cursor="pointer",p.addEventListener("mousedown",()=>{A.value=m,_.style.display="none"}),_.appendChild(p)}),_.style.display="block"}const S=document.createElement("div");y.appendChild(S);const w=document.createElement("div");w.className="trip-modal",w.style.display="none",w.innerHTML=`
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body"></div>
        </div>
    `,document.body.appendChild(w),w.querySelector(".close-modal").onclick=()=>{w.style.display="none"};const C=document.createElement("div");C.className="trip-modal",C.style.display="none",C.innerHTML=`
        <div class="modal-content">
            <span class="close-edit-modal">&times;</span>
            <div class="edit-modal-body"></div>
        </div>
    `,document.body.appendChild(C),C.querySelector(".close-edit-modal").onclick=()=>{C.style.display="none"};function b(T){const m=T.length,p=T.reduce((I,R)=>I+(parseFloat(R.budget)||0),0),x=T.filter(I=>new Date(I.startDate)>new Date).length;return{totalTrips:m,totalBudget:p,upcoming:x}}function g(T){E.innerHTML="";const{totalTrips:m,totalBudget:p,upcoming:x}=b(T);E.innerHTML=`
            <div class="trip-summary-card">
                <div><i class="fas fa-suitcase-rolling"></i></div>
                <div><strong>${m}</strong></div>
                <div>Total Trips</div>
            </div>
            <div class="trip-summary-card">
                <div><i class="fas fa-calendar-alt"></i></div>
                <div><strong>${x}</strong></div>
                <div>Upcoming</div>
            </div>
            <div class="trip-summary-card">
                <div><i class="fas fa-dollar-sign"></i></div>
                <div><strong>$${p.toLocaleString()}</strong></div>
                <div>Total Budget</div>
            </div>
        `}function M(T){const m=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),p=URL.createObjectURL(m),x=document.createElement("a");x.href=p,x.download="my_trips.json",x.click(),URL.revokeObjectURL(p)}function k(T){const m=document.createElement("input");m.type="file",m.accept=".json,application/json",m.onchange=async p=>{const x=p.target.files[0];if(!x)return;const I=await x.text();try{const R=JSON.parse(I);if(Array.isArray(R)){let Y=await ce();Y=Y.concat(R),await de(Y),T()}}catch{alert("Invalid file format.")}},m.click()}const N=document.createElement("div");if(N.className="trips-actions-bar",N.innerHTML=`
        <button class="export-trips-btn"><i class="fas fa-file-export"></i> Export Trips</button>
        <button class="import-trips-btn"><i class="fas fa-file-import"></i> Import Trips</button>
    `,y.insertBefore(N,v),N.querySelector(".export-trips-btn").onclick=async()=>{const T=await ce();M(T)},N.querySelector(".import-trips-btn").onclick=()=>{k(G)},!document.getElementById("trips-actions-bar-css")){const T=document.createElement("style");T.id="trips-actions-bar-css",T.textContent=`
        .trips-actions-bar {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            justify-content: flex-end;
            flex-wrap: wrap;
            animation: fadeIn 0.7s;
        }
        .trips-actions-bar button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.7rem 1.2rem;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            transition: background 0.2s, transform 0.2s;
            animation: popIn 0.6s;
        }
        .trips-actions-bar button:hover {
            background: #1565c0;
            transform: translateY(-2px) scale(1.04);
        }
        @media (max-width: 600px) {
            .trips-actions-bar {
                flex-direction: column;
                align-items: stretch;
                gap: 0.7rem;
            }
            .trips-actions-bar button {
                width: 100%;
                justify-content: center;
            }
        }
        @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
        }
        @keyframes popIn {
            from { opacity: 0; transform: scale(0.9);}
            to { opacity: 1; transform: scale(1);}
        }
        `,document.head.appendChild(T)}async function G(){S.innerHTML="";let T=await ce();if(g(T),!T.length){const p=document.createElement("div");p.className="empty-trips",p.innerHTML='<i class="fas fa-suitcase-rolling"></i><p>No trips planned yet.</p>',S.appendChild(p);return}const m=document.createElement("ul");m.className="trips-list",T.forEach((p,x)=>{const I=document.createElement("li");I.className="trip-item";const R=`<img src="${gr(p.name)}" 
                alt="Trip" style="width:56px;height:56px;border-radius:8px;margin-right:1.2em;object-fit:cover;background:#e3eafc;">`;I.innerHTML=`
                ${R}
                <div class="trip-info">
                    <h3>${p.name}</h3>
                    <span>${p.startDate||""} to ${p.endDate||""}</span>
                    ${p.budget?`<div class="trip-budget">Budget: $${p.budget}</div>`:""}
                    ${p.weather?`<div class="trip-weather">Weather: ${p.weather}</div>`:""}
                </div>
                <div class="trip-actions">
                    <button class="select-trip" title="View"><i class="fas fa-eye"></i></button>
                    <button class="edit-trip" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="delete-trip" title="Delete"><i class="fas fa-trash"></i></button>
                    <button class="fetch-weather" title="Update Weather"><i class="fas fa-cloud-sun"></i></button>
                </div>
            `,I.querySelector(".select-trip").addEventListener("click",()=>{c&&c(p),J(p)}),I.querySelector(".edit-trip").addEventListener("click",()=>{tt(p,x)}),I.querySelector(".delete-trip").addEventListener("click",async()=>{l&&l(p),T.splice(x,1),await de(T),G()}),I.querySelector(".fetch-weather").addEventListener("click",async()=>{const Y=await pr(p.name);p.weather=Y,await de(T),G()}),m.appendChild(I)}),S.appendChild(m)}v.onsubmit=async T=>{T.preventDefault();const m=new FormData(v),p={name:m.get("name"),startDate:m.get("startDate"),endDate:m.get("endDate"),budget:m.get("budget"),notes:m.get("notes")};let x=await ce();x.push(p),await de(x),v.reset(),G()};function J(T){w.querySelector(".modal-body").innerHTML=`
            <h2>${T.name}</h2>
            <p><strong>Dates:</strong> ${T.startDate} to ${T.endDate}</p>
            ${T.activities?`<p><strong>Activities:</strong> ${T.activities.join(", ")}</p>`:""}
            ${T.budget?`<p><strong>Budget:</strong> $${T.budget}</p>`:""}
            ${T.weather?`<p><strong>Weather:</strong> ${T.weather}</p>`:""}
            ${T.notes?`<p><strong>Notes:</strong> ${T.notes}</p>`:""}
            ${T.accommodation?`<p><strong>Accommodation:</strong> ${T.accommodation}</p>`:""}
        `,w.style.display="block"}function tt(T,m){C.querySelector(".edit-modal-body").innerHTML=`
            <h2>Edit Trip</h2>
            <form class="edit-trip-form">
                <input type="text" name="name" value="${T.name}" required />
                <input type="date" name="startDate" value="${T.startDate}" required />
                <input type="date" name="endDate" value="${T.endDate}" required />
                <input type="number" name="budget" value="${T.budget||""}" placeholder="Budget ($)" min="0" />
                <textarea name="notes" placeholder="Notes">${T.notes||""}</textarea>
                <button type="submit"><i class="fas fa-save"></i> Save</button>
            </form>
        `,C.style.display="block";const p=C.querySelector(".edit-trip-form");p.onsubmit=async x=>{x.preventDefault();const I=new FormData(p),R={...T,name:I.get("name"),startDate:I.get("startDate"),endDate:I.get("endDate"),budget:I.get("budget"),notes:I.get("notes")};let Y=await ce();Y[m]=R,await de(Y),C.style.display="none",G()}}const st=document.createElement("img");return st.src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",st.alt="Trips Banner",st.style="width:100%;max-height:180px;object-fit:cover;border-radius:10px;margin-bottom:1.2rem;",y.insertBefore(st,y.firstChild),G(),y}function gr(h=""){const c=h.toLowerCase();return c.includes("beach")?"https://img.icons8.com/color/96/000000/beach--v2.png":c.includes("mountain")?"https://img.icons8.com/color/96/000000/mountain.png":c.includes("city")?"https://img.icons8.com/color/96/000000/city.png":c.includes("desert")?"https://img.icons8.com/color/96/000000/desert.png":c.includes("forest")?"https://img.icons8.com/color/96/000000/forest.png":c.includes("island")?"https://img.icons8.com/color/96/000000/island-on-water.png":"https://img.icons8.com/color/96/000000/travel.png"}function vr(){const h=document.createElement("div");h.className="price-budget-flex";const c=ur(),l=hr();if(c.style.flex="1 1 0",l.style.flex="1 1 0",h.appendChild(c),h.appendChild(l),!document.getElementById("price-budget-flex-css")){const y=document.createElement("style");y.id="price-budget-flex-css",y.textContent=`
        .price-budget-flex {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
            justify-content: center;
            max-width: 1200px;
            margin: 2rem auto;
        }
        @media (max-width: 900px) {
            .price-budget-flex {
                flex-direction: column;
                gap: 1.5rem;
            }
        }
        `,document.head.appendChild(y)}return h}function Ht(...h){const c=document.getElementById("root");c.innerHTML="",h.forEach(l=>{l&&c.appendChild(l)})}function yr(){Ht(Rt(),sr(),lr(),Cn(),vr(),kn(),Pn(),Sn(),dr(),qt()),setTimeout(()=>{const h=document.getElementById("map");h&&!h._leaflet_id&&ar.map("map").setView([0,0],2)},0)}function Mn(){const h=window.location.hash;h==="#/weather"?Ht(Rt(),cr(),qt()):h==="#/flights"?Ht(Rt(),kn(),qt()):h==="#/events"?Ht(Rt(),Sn(),qt()):h==="#/superuser"?Ht(Rt(),mr(),qt()):h==="#/trips"?Ht(Rt(),Cn({}),qt()):h==="#/settings"?Ht(Rt(),fr(),qt()):yr()}window.addEventListener("hashchange",Mn);document.addEventListener("DOMContentLoaded",Mn);const En=document.createElement("style");En.textContent=`
#map {
    width: 100%;
    height: 400px;
    min-height: 300px;
    border-radius: 12px;
    margin: 2rem 0 2rem 0;
    box-shadow: 0 2px 8px rgba(66,133,244,0.07);
    z-index: 1;
}
.map-controls {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    justify-content: flex-end;
}
`;document.head.appendChild(En);
//# sourceMappingURL=index-BuspS__7.js.map
