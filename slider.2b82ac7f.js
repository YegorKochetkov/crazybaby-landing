parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xStd":[function(require,module,exports) {
"use strict";function t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.auto,o=void 0!==n&&n,i=e.touchEvents,r=void 0!==i&&i;if(window.matchMedia("(max-width: 767px)").matches){var c=t.querySelector(".slider__slide"),l=c.offsetHeight+"px";c.style.setProperty("min-height",l)}var s,d,u=t.querySelectorAll(".slider__item"),a=t.querySelector(".button--next"),h=t.querySelector(".button--prev"),v=t.querySelector(".slider-controls__total-items"),m=t.querySelector(".slider-controls__item"),y=0,S=[u[y],u[y+1]];function _(e){y>u.length-1?(S=[u[y=0],u[y+1]],m.textContent="0"+(y/2+1).toString()):y<0?(y=u.length-2,S=[u[y],u[y+1]],m.textContent="0"+(y/2+1).toString()):S=e,t.querySelectorAll(".slider__item--display").forEach(function(t){return t.classList.remove("slider__item--display")}),S.forEach(function(t){return t.classList.add("slider__item--display")})}function f(){S=[u[y+=2],u[y+1]],m.textContent="0"+(y/2+1).toString(),_(S)}function g(){S=[u[y-=2],u[y+1]],m.textContent="0"+(y/2+1).toString(),_(S)}v.textContent="0"+(u.length/2).toString(),a&&h&&(a.addEventListener("click",f),h.addEventListener("click",g)),r&&(s=0,d=function e(n){var o=n.changedTouches[0].clientX-s;o<0?f():o>0&&g(),t.removeEventListener("touchend",e)},t.addEventListener("touchstart",function(e){s=e.changedTouches[0].clientX,t.addEventListener("touchend",d)})),o&&window.matchMedia("(max-width: 767px)").matches&&setInterval(f,2e3)}t(document.querySelector(".slider--1"),{touchEvents:!0,auto:!1}),t(document.querySelector(".slider--2"),{touchEvents:!0,auto:!0});
},{}]},{},["xStd"], null)
//# sourceMappingURL=slider.2b82ac7f.js.map