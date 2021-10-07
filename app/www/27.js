(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_reorder, ion_reorder_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function() { return ReorderGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-63a97a32.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-27b3f981.js");
var reorderIosCss=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";var reorderMdCss=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";var Reorder=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,e)}e.prototype.onClick=function(e){var t=this.el.closest("ion-reorder-group");e.preventDefault();if(!t||!t.disabled){e.stopImmediatePropagation()}};e.prototype.render=function(){var e=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);var t=e==="ios"?"reorder-three-outline":"reorder-two-sharp";return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{class:e},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon",{name:t,lazy:false,class:"reorder-icon",part:"icon"})))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});return e}();Reorder.style={ios:reorderIosCss,md:reorderMdCss};var reorderGroupCss=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";var ReorderGroup=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this,e);this.ionItemReorder=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this,"ionItemReorder",7);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0;this.disabled=true}e.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.connectedCallback=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this,void 0,void 0,(function(){var e,t,r;var o=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this,(function(i){switch(i.label){case 0:e=this.el.closest("ion-content");if(!e)return[3,2];t=this;return[4,e.getScrollElement()];case 1:t.scrollEl=i.sent();i.label=2;case 2:r=this;return[4,Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm-es5/index-34cb2743.js"))];case 3:r.gesture=i.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:function(e){return o.canStart(e)},onStart:function(e){return o.onStart(e)},onMove:function(e){return o.onMove(e)},onEnd:function(){return o.onEnd()}});this.disabledChanged();return[2]}}))}))};e.prototype.disconnectedCallback=function(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.complete=function(e){return Promise.resolve(this.completeSync(e))};e.prototype.canStart=function(e){if(this.selectedItemEl||this.state!==0){return false}var t=e.event.target;var r=t.closest("ion-reorder");if(!r){return false}var o=findReorderItem(r,this.el);if(!o){return false}e.data=o;return true};e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data;var r=this.cachedHeights;r.length=0;var o=this.el;var i=o.children;if(!i||i.length===0){return}var n=0;for(var s=0;s<i.length;s++){var a=i[s];n+=a.offsetHeight;r.push(n);a.$ionIndex=s}var l=o.getBoundingClientRect();this.containerTop=l.top;this.containerBottom=l.bottom;if(this.scrollEl){var c=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=c.top+AUTO_SCROLL_MARGIN;this.scrollElBottom=c.bottom-AUTO_SCROLL_MARGIN}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=indexForItem(t);this.selectedItemHeight=t.offsetHeight;this.state=1;t.classList.add(ITEM_REORDER_SELECTED);Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_3__["a"])()};e.prototype.onMove=function(e){var t=this.selectedItemEl;if(!t){return}var r=this.autoscroll(e.currentY);var o=this.containerTop-r;var i=this.containerBottom-r;var n=Math.max(o,Math.min(e.currentY,i));var s=r+n-e.startY;var a=n-o;var l=this.itemIndexForTop(a);if(l!==this.lastToIndex){var c=indexForItem(t);this.lastToIndex=l;Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_3__["b"])();this.reorderMove(c,l)}t.style.transform="translateY("+s+"px)"};e.prototype.onEnd=function(){var e=this.selectedItemEl;this.state=2;if(!e){this.state=0;return}var t=this.lastToIndex;var r=indexForItem(e);if(t===r){this.completeSync()}else{this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)})}Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_3__["h"])()};e.prototype.completeSync=function(e){var t=this.selectedItemEl;if(t&&this.state===2){var r=this.el.children;var o=r.length;var i=this.lastToIndex;var n=indexForItem(t);if(i!==n&&(e===undefined||e===true)){var s=n<i?r[i+1]:r[i];this.el.insertBefore(t,s)}if(Array.isArray(e)){e=reorderArray(e,n,i)}for(var a=0;a<o;a++){r[a].style["transform"]=""}t.style.transition="";t.classList.remove(ITEM_REORDER_SELECTED);this.selectedItemEl=undefined;this.state=0}return e};e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights;var r=0;for(r=0;r<t.length;r++){if(t[r]>e){break}}return r};e.prototype.reorderMove=function(e,t){var r=this.selectedItemHeight;var o=this.el.children;for(var i=0;i<o.length;i++){var n=o[i].style;var s="";if(i>e&&i<=t){s="translateY("+-r+"px)"}else if(i<e&&i>=t){s="translateY("+r+"px)"}n["transform"]=s}};e.prototype.autoscroll=function(e){if(!this.scrollEl){return 0}var t=0;if(e<this.scrollElTop){t=-SCROLL_JUMP}else if(e>this.scrollElBottom){t=SCROLL_JUMP}if(t!==0){this.scrollEl.scrollBy(0,t)}return this.scrollEl.scrollTop-this.scrollElInitial};e.prototype.render=function(){var e;var t=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"],{class:(e={},e[t]=true,e["reorder-enabled"]=!this.disabled,e["reorder-list-active"]=this.state!==0,e)})};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}();var indexForItem=function(e){return e["$ionIndex"]};var findReorderItem=function(e,t){var r;while(e){r=e.parentElement;if(r===t){return e}e=r}return undefined};var AUTO_SCROLL_MARGIN=60;var SCROLL_JUMP=10;var ITEM_REORDER_SELECTED="reorder-selected";var reorderArray=function(e,t,r){var o=e[t];e.splice(t,1);e.splice(r,0,o);return e.slice()};ReorderGroup.style=reorderGroupCss;

/***/ })

}]);
//# sourceMappingURL=27.js.map