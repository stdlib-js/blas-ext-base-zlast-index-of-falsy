"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var n=t(function(b,v){
var o=require('@stdlib/blas-ext-base-zindex-of-falsy/dist').ndarray;function c(r,e,a,u){var i;return r<=0?-1:(u+=(r-1)*a,a*=-1,i=o(r,e,a,u),i<0?i:r-1-i)}v.exports=c
});var q=t(function(g,l){
var O=require('@stdlib/strided-base-stride2offset/dist'),p=n();function z(r,e,a){return p(r,e,a,O(r,a))}l.exports=z
});var f=t(function(h,d){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),I=n();F(y,"ndarray",I);d.exports=y
});var j=require("path").join,m=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=f(),s,x=m(j(__dirname,"./native.js"));R(x)?s=_:s=x;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
