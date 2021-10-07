(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2.entry.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2.entry.js ***!
  \******************************************************************************/
/*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function() { return InfiniteScrollContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-63a97a32.js");
/* harmony import */ var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-9e3fe806.js */ "./node_modules/@ionic/core/dist/esm-es5/index-9e3fe806.js");
var infiniteScrollCss="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var InfiniteScroll=function(){function i(i){var n=this;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,i);this.ionInfinite=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionInfinite",7);this.thrPx=0;this.thrPc=0;this.didFire=false;this.isBusy=false;this.isLoading=false;this.threshold="15%";this.disabled=false;this.position="bottom";this.onScroll=function(){var i=n.scrollEl;if(!i||!n.canStart()){return 1}var t=n.el.offsetHeight;if(t===0){return 2}var e=i.scrollTop;var r=i.scrollHeight;var o=i.offsetHeight;var s=n.thrPc!==0?o*n.thrPc:n.thrPx;var l=n.position==="bottom"?r-t-e-s-o:e-t-s;if(l<0){if(!n.didFire){n.isLoading=true;n.didFire=true;n.ionInfinite.emit();return 3}}else{n.didFire=false}return 4}}i.prototype.thresholdChanged=function(){var i=this.threshold;if(i.lastIndexOf("%")>-1){this.thrPx=0;this.thrPc=parseFloat(i)/100}else{this.thrPx=parseFloat(i);this.thrPc=0}};i.prototype.disabledChanged=function(){var i=this.disabled;if(i){this.isLoading=false;this.isBusy=false}this.enableScrollEvents(!i)};i.prototype.connectedCallback=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var i,n;var t=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(e){switch(e.label){case 0:i=this.el.closest("ion-content");if(!i){console.error("<ion-infinite-scroll> must be used inside an <ion-content>");return[2]}n=this;return[4,i.getScrollElement()];case 1:n.scrollEl=e.sent();this.thresholdChanged();this.disabledChanged();if(this.position==="top"){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])((function(){if(t.scrollEl){t.scrollEl.scrollTop=t.scrollEl.scrollHeight-t.scrollEl.clientHeight}}))}return[2]}}))}))};i.prototype.disconnectedCallback=function(){this.enableScrollEvents(false);this.scrollEl=undefined};i.prototype.complete=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var i,n;var t=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(e){i=this.scrollEl;if(!this.isLoading||!i){return[2]}this.isLoading=false;if(this.position==="top"){this.isBusy=true;n=i.scrollHeight-i.scrollTop;requestAnimationFrame((function(){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["f"])((function(){var e=i.scrollHeight;var r=e-n;requestAnimationFrame((function(){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])((function(){i.scrollTop=r;t.isBusy=false}))}))}))}))}return[2]}))}))};i.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading};i.prototype.enableScrollEvents=function(i){if(this.scrollEl){if(i){this.scrollEl.addEventListener("scroll",this.onScroll)}else{this.scrollEl.removeEventListener("scroll",this.onScroll)}}};i.prototype.render=function(){var i;var n=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);var t=this.disabled;return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{class:(i={},i[n]=true,i["infinite-scroll-loading"]=this.isLoading,i["infinite-scroll-enabled"]=!t,i)})};Object.defineProperty(i.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});Object.defineProperty(i,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return i}();InfiniteScroll.style=infiniteScrollCss;var infiniteScrollContentIosCss="ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";var infiniteScrollContentMdCss="ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";var InfiniteScrollContent=function(){function i(i){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,i)}i.prototype.componentDidLoad=function(){if(this.loadingSpinner===undefined){var i=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);this.loadingSpinner=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].get("infiniteLoadingSpinner",_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].get("spinner",i==="ios"?"lines":"crescent"))}};i.prototype.render=function(){var i;var n=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{class:(i={},i[n]=true,i["infinite-scroll-content-"+n]=true,i)},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"infinite-loading"},this.loadingSpinner&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"infinite-loading-spinner"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"infinite-loading-text",innerHTML:Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.loadingText)})))};return i}();InfiniteScrollContent.style={ios:infiniteScrollContentIosCss,md:infiniteScrollContentMdCss};

/***/ })

}]);
//# sourceMappingURL=14.js.map