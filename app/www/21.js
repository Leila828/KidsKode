(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-nav_2.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-nav_2.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_nav, ion_nav_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_nav_link", function() { return NavLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-63a97a32.js");
/* harmony import */ var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-eea9a7a9.js");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-dd7e4b7b.js");
/* harmony import */ var _index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-931440b1.js */ "./node_modules/@ionic/core/dist/esm-es5/index-931440b1.js");
/* harmony import */ var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-4392cd63.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-4392cd63.js");
var VIEW_STATE_NEW=1;var VIEW_STATE_ATTACHED=2;var VIEW_STATE_DESTROYED=3;var ViewController=function(){function e(e,t){this.component=e;this.params=t;this.state=VIEW_STATE_NEW}e.prototype.init=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var t,n;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(i){switch(i.label){case 0:this.state=VIEW_STATE_ATTACHED;if(!!this.element)return[3,2];t=this.component;n=this;return[4,Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)];case 1:n.element=i.sent();i.label=2;case 2:return[2]}}))}))};e.prototype._destroy=function(){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this.state!==VIEW_STATE_DESTROYED,"view state must be ATTACHED");var e=this.element;if(e){if(this.delegate){this.delegate.removeViewFromDom(e.parentElement,e)}else{e.remove()}}this.nav=undefined;this.state=VIEW_STATE_DESTROYED};return e}();var matches=function(e,t,n){if(!e){return false}if(e.component!==t){return false}var i=e.params;if(i===n){return true}if(!i&&!n){return true}if(!i||!n){return false}var r=Object.keys(i);var o=Object.keys(n);if(r.length!==o.length){return false}for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u]){return false}}return true};var convertToView=function(e,t){if(!e){return null}if(e instanceof ViewController){return e}return new ViewController(e,t)};var convertToViews=function(e){return e.map((function(e){if(e instanceof ViewController){return e}if("component"in e){return convertToView(e.component,e.componentProps===null?undefined:e.componentProps)}return convertToView(e,undefined)})).filter((function(e){return e!==null}))};var navCss=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var Nav=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,e);this.ionNavWillLoad=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionNavWillLoad",7);this.ionNavWillChange=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionNavWillChange",3);this.ionNavDidChange=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionNavDidChange",3);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true}e.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.enable(this.swipeGesture===true)}};e.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};e.prototype.componentWillLoad=function(){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]");if(this.swipeGesture===undefined){var e=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);this.swipeGesture=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()};e.prototype.componentDidLoad=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(t){switch(t.label){case 0:this.rootChanged();e=this;return[4,__webpack_require__.e(/*! import() | swipe-back-fae97365-js */ "swipe-back-fae97365-js").then(__webpack_require__.bind(null, /*! ./swipe-back-fae97365.js */ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-fae97365.js"))];case 1:e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}}))}))};e.prototype.disconnectedCallback=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["l"])(n.element,_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["d"]);n._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=this.views.length=0;this.destroyed=true};e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)};e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)};e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)};e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)};e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};if(typeof e==="object"&&e.component){i.removeView=e;i.removeStart=1}else if(typeof e==="number"){i.removeStart=e+1}return this.queueTrns(i,n)};e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)};e.prototype.removeIndex=function(e,t,n,i){if(t===void 0){t=1}return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)};e.prototype.setRoot=function(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)};e.prototype.setPages=function(e,t,n){if(t==null){t={}}if(t.animated!==true){t.animated=false}return this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)};e.prototype.setRouteId=function(e,t,n,i){var r=this;var o=this.getActiveSync();if(matches(o,e,t)){return Promise.resolve({changed:false,element:o.element})}var s;var a=new Promise((function(e){return s=e}));var u;var c={updateURL:false,viewIsReady:function(e){var t;var n=new Promise((function(e){return t=e}));s({changed:true,element:e,markVisible:function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(r,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(e){switch(e.label){case 0:t();return[4,u];case 1:e.sent();return[2]}}))}))}});return n}};if(n==="root"){u=this.setRoot(e,t,c)}else{var f=this.views.find((function(n){return matches(n,e,t)}));if(f){u=this.popTo(f,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:i}))}else if(n==="forward"){u=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:i}))}else if(n==="back"){u=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:true,animationBuilder:i}))}}return a};e.prototype.getRouteId=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(t){e=this.getActiveSync();return[2,e?{id:e.element.tagName,params:e.params,element:e.element}:undefined]}))}))};e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())};e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])};e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))};e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))};e.prototype.getLength=function(){return this.views.length};e.prototype.getActiveSync=function(){return this.views[this.views.length-1]};e.prototype.canGoBackSync=function(e){if(e===void 0){e=this.getActiveSync()}return!!(e&&this.getPreviousSync(e))};e.prototype.getPreviousSync=function(e){if(e===void 0){e=this.getActiveSync()}if(!e){return undefined}var t=this.views;var n=t.indexOf(e);return n>0?t[n-1]:undefined};e.prototype.queueTrns=function(e,t){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var n,i,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(o){switch(o.label){case 0:if(this.isTransitioning&&e.opts!=null&&e.opts.skipIfBusy){return[2,Promise.resolve(false)]}n=new Promise((function(t,n){e.resolve=t;e.reject=n}));e.done=t;if(!(e.opts&&e.opts.updateURL!==false&&this.useRouter))return[3,2];i=document.querySelector("ion-router");if(!i)return[3,2];return[4,i.canTransition()];case 1:r=o.sent();if(r===false){return[2,Promise.resolve(false)]}else if(typeof r==="string"){i.push(r,e.opts.direction||"back");return[2,Promise.resolve(false)]}o.label=2;case 2:if(e.insertViews&&e.insertViews.length===0){e.insertViews=undefined}this.transInstr.push(e);this.nextTrns();return[2,n]}}))}))};e.prototype.success=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done){t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction)}t.resolve(e.hasCompleted);if(t.opts.updateURL!==false&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i=e.direction==="back"?"back":"forward";n.navChanged(i)}}};e.prototype.failed=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0;this.fireError(e,t)};e.prototype.fireError=function(e,t){if(t.done){t.done(false,false,e)}if(t.reject&&!this.destroyed){t.reject(e)}else{t.resolve(false)}};e.prototype.nextTrns=function(){if(this.isTransitioning){return false}var e=this.transInstr.shift();if(!e){return false}this.runTransition(e);return true};e.prototype.runTransition=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var t,n,i,r,o,s,a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(u){switch(u.label){case 0:u.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(e);t=this.getActiveSync();n=this.getEnteringView(e,t);if(!t&&!n){throw new Error("no views in the stack to be removed")}if(!(n&&n.state===VIEW_STATE_NEW))return[3,2];return[4,n.init(this.el)];case 1:u.sent();u.label=2;case 2:this.postViewInit(n,t,e);i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;if(i&&e.opts&&t){r=e.opts.direction==="back";if(r){e.opts.animationBuilder=e.opts.animationBuilder||n&&n.animationBuilder}t.animationBuilder=e.opts.animationBuilder}if(!i)return[3,4];return[4,this.transition(n,t,e)];case 3:s=u.sent();return[3,5];case 4:s={hasCompleted:true,requiresTransition:false};u.label=5;case 5:o=s;this.success(o,e);this.ionNavDidChange.emit();return[3,7];case 6:a=u.sent();this.failed(a,e);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}}))}))};e.prototype.prepareTI=function(e){var t=this.views.length;e.opts=e.opts||{};if(e.opts.delegate===undefined){e.opts.delegate=this.delegate}if(e.removeView!==undefined){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(e.removeStart!==undefined,"removeView needs removeStart");Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(e.removeCount!==undefined,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0){throw new Error("removeView was not found")}e.removeStart+=n}if(e.removeStart!==undefined){if(e.removeStart<0){e.removeStart=t-1}if(e.removeCount<0){e.removeCount=t-e.removeStart}e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t}if(e.insertViews){if(e.insertStart<0||e.insertStart>t){e.insertStart=t}e.enteringRequiresTransition=e.insertStart===t}var i=e.insertViews;if(!i){return}Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(i.length>0,"length can not be zero");var r=convertToViews(i);if(r.length===0){throw new Error("invalid views to insert")}for(var o=0,s=r;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var u=a.nav;if(u&&u!==this){throw new Error("inserted view was already inserted")}if(a.state===VIEW_STATE_DESTROYED){throw new Error("inserted view was already destroyed")}}e.insertViews=r};e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(n!==undefined){return n[n.length-1]}var i=e.removeStart;if(i!==undefined){var r=this.views;var o=i+e.removeCount;for(var s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t){return a}}}return undefined};e.prototype.postViewInit=function(e,t,n){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(t||e,"Both leavingView and enteringView are null");Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(n.resolve,"resolve must be valid");Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(n.reject,"reject must be valid");var i=n.opts;var r=n.insertViews;var o=n.removeStart;var s=n.removeCount;var a;if(o!==undefined&&s!==undefined){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(o>=0,"removeStart can not be negative");Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(s>=0,"removeCount can not be negative");a=[];for(var u=0;u<s;u++){var c=this.views[u+o];if(c&&c!==e&&c!==t){a.push(c)}}i.direction=i.direction||"back"}var f=this.views.length+(r!==undefined?r.length:0)-(s!==undefined?s:0);Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(f>=0,"final balance can not be negative");if(f===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(r){var l=n.insertStart;for(var h=0,v=r;h<v.length;h++){var c=v[h];this.insertViewAt(c,l);l++}if(n.enteringRequiresTransition){i.direction=i.direction||"forward"}}if(a&&a.length>0){for(var d=0,p=a;d<p.length;d++){var c=p[d];Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["l"])(c.element,_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["b"]);Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["l"])(c.element,_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["c"]);Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["l"])(c.element,_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["d"])}for(var m=0,g=a;m<g.length;m++){var c=g[m];this.destroyView(c)}}};e.prototype.transition=function(e,t,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var i,r,o,s,a,u,c;var f=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(l){switch(l.label){case 0:i=n.opts;r=i.progressAnimation?function(e){return f.sbAni=e}:undefined;o=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);s=e.element;a=t&&t.element;u=Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].get("navAnimation"),progressCallback:r,animated:this.animated&&_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("animated",true),enteringEl:s,leavingEl:a},i);return[4,Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["t"])(u)];case 1:c=l.sent().hasCompleted;return[2,this.transitionFinish(c,e,t,i)]}}))}))};e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;if(r){this.cleanup(r)}return{hasCompleted:e,requiresTransition:true,enteringView:t,leavingView:n,direction:i.direction}};e.prototype.insertViewAt=function(e,t){var n=this.views;var i=n.indexOf(e);if(i>-1){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(e.nav===this,"view is not part of the nav");n.splice(t,0,n.splice(i,1)[0])}else{Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(!e.nav,"nav is used");e.nav=this;n.splice(t,0,e)}};e.prototype.removeView=function(e){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(e.state===VIEW_STATE_ATTACHED||e.state===VIEW_STATE_DESTROYED,"view state should be loaded or destroyed");var t=this.views;var n=t.indexOf(e);Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["l"])(n>-1,"view must be part of the stack");if(n>=0){t.splice(n,1)}};e.prototype.destroyView=function(e){e._destroy();this.removeView(e)};e.prototype.cleanup=function(e){if(this.destroyed){return}var t=this.views;var n=t.indexOf(e);for(var i=t.length-1;i>=0;i--){var r=t[i];var o=r.element;if(o){if(i>n){Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["l"])(o,_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["d"]);this.destroyView(r)}else if(i<n){Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_5__["s"])(o,true)}}}};e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()};e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:true}},undefined)};e.prototype.onMove=function(e){if(this.sbAni){this.sbAni.progressStep(e)}};e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((function(){i.animationEnabled=true}),{oneTimeCallback:true});var r=e?-.001:.001;if(!e){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");r+=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__["g"])([0,0],[1,0],[.68,.28],[1,1],t)[0]}else{r+=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_3__["g"])([0,0],[.32,.72],[0,1],[1,1],t)[0]}this.sbAni.progressEnd(e?1:0,r,n)}};e.prototype.render=function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:false,configurable:true});return e}();Nav.style=navCss;var navLink=function(e,t,n,i,r){var o=e.closest("ion-nav");if(o){if(t==="forward"){if(n!==undefined){return o.push(n,i,{skipIfBusy:true,animationBuilder:r})}}else if(t==="root"){if(n!==undefined){return o.setRoot(n,i,{skipIfBusy:true,animationBuilder:r})}}else if(t==="back"){return o.pop({skipIfBusy:true,animationBuilder:r})}}return Promise.resolve(false)};var NavLink=function(){function e(e){var t=this;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,e);this.routerDirection="forward";this.onClick=function(){return navLink(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}e.prototype.render=function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});return e}();

/***/ })

}]);
//# sourceMappingURL=21.js.map