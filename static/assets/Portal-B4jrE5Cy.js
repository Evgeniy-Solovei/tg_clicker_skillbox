import{h as f,d as u}from"./index-B803nQuE.js";var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var o={}.hasOwnProperty;function n(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=a(t,c(e)))}return t}function c(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)o.call(t,e)&&t[e]&&(r=a(r,e));return r}function a(t,r){return r?t?t+" "+r:t+r:t}s.exports?(n.default=n,s.exports=n):window.classNames=n})()})(i);var p=i.exports;const m=f(p);function d(s){const{children:o,element:n=document.body}=s;return u.createPortal(o,n)}export{d as P,m as c};
