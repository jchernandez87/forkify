var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=v.parcelRequire3a11;null==_&&((_=function(e){if(e in m)return m[e].exports;if(e in b){var t=b[e];delete b[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){b[e]=t},v.parcelRequire3a11=_);var w={},k={},E=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||k||Function("return this")();var S={},$={};// Detect IE8's incomplete defineProperty implementation
S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},O={};O=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype.call;j=O?L.bind(L):function(){return L.apply(L,arguments)};var x={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;n=M&&!x.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:x;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},I={},q={},D=Function.prototype,H=D.call,N=O&&D.bind.bind(H,H),A={},F=(q=O?N:function(e){return function(){return H.apply(e,arguments)}})({}.toString),C=q("".slice);A=function(e){return C(F(e),8,-1)};var R=Object,W=q("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
I=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?W(e,""):R(e)}:R;var B={},U={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
U=function(e){return null==e};var G=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(e){if(U(e))throw new G("Can't call method on "+e);return e},T=function(e){return I(B(e))};var z={},Y={},J={},Q={},V={},K="object"==typeof document&&document.all,X=(V={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Q=V.IS_HTMLDDA?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e};var Z=V.all;J=V.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Q(e)||e===Z}:function(e){return"object"==typeof e?null!==e:Q(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var er={};er=q({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=k.process,ec=k.Deno,eu=es&&es.versions||ec&&ec.version,el=eu&&eu.v8;el&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(i=el.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ea&&(!(i=ea.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ea.match(/Chrome\/(\d+)/))&&(o=+i[1]),eo=o;var ed=k.String;en=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ei=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ed(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return Q(t)&&er(t.prototype,ep(e))};var ef={},eh={},eg={},ev=String;eg=function(e){try{return ev(e)}catch(e){return"Object"}};var ey=TypeError;// `Assert: IsCallable(argument) is true`
eh=function(e){if(Q(e))return e;throw new ey(eg(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ef=function(e,t){var r=e[t];return U(r)?void 0:eh(r)};var em={},eb=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!J(n=j(r,e))||Q(r=e.valueOf)&&!J(n=j(r,e))||"string"!==t&&Q(r=e.toString)&&!J(n=j(r,e)))return n;throw new eb("Can't convert object to primitive value")};var e_={},ew={};ew=!1;var ek={},eE={},eS=Object.defineProperty;eE=function(e,t){try{eS(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var e$="__core-js_shared__";ek=k[e$]||eE(e$,{}),(e_=function(e,t){return ek[e]||(ek[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:ew?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ej={},eO={},eL=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eO=function(e){return eL(B(e))};var ex=q({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
ej=Object.hasOwn||function(e,t){return ex(eO(e),t)};var eM={},eP=0,eT=Math.random(),eI=q(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eI(++eP+eT,36)};var eq=k.Symbol,eD=e_("wks"),eH=en?eq.for||eq:eq&&eq.withoutSetter||eM,eN=TypeError,eA=(ej(eD,e="toPrimitive")||(eD[e]=ei&&ej(eq,e)?eq[e]:eH("Symbol."+e)),eD[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Y=function(e,t){if(!J(e)||ee(e))return e;var r,n=ef(e,eA);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!J(r)||ee(r))return r;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
z=function(e){var t=Y(e,"string");return ee(t)?t:t+""};var eF={},eC={},eR=k.document,eW=J(eR)&&J(eR.createElement);eC=function(e){return eW?eR.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eF=!S&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eB=Object.getOwnPropertyDescriptor;r=S?eB:function(e,t){if(e=T(e),t=z(t),eF)try{return eB(e,t)}catch(e){}if(ej(e,t))return P(!j(n,e,t),e[t])};var eU={},eG={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eG=S&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eY=String,eJ=TypeError;// `Assert: Type(argument) is Object`
ez=function(e){if(J(e))return e;throw new eJ(eY(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";a=S?eG?function(e,t,r){if(ez(e),t=z(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(ez(e),t=z(t),ez(r),eF)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=S?function(e,t,r){return a(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e9=Function.prototype,e3=S&&Object.getOwnPropertyDescriptor,e7=ej(e9,"name")&&(!S||S&&e3(e9,"name").configurable),e4={},e8=q(Function.toString);Q(ek.inspectSource)||(ek.inspectSource=function(e){return e8(e)}),e4=ek.inspectSource;var e6={},e5={},te=k.WeakMap;e5=Q(te)&&/native code/.test(String(te));var tt={},tr=e_("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e5||ek.state){var ts=ek.state||(ek.state=new ta);/* eslint-disable no-self-assign -- prototype methods protection */ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},c=function(e){return ts.get(e)||{}},u=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,s=function(e,t){if(ej(e,tc))throw new to(ti);return t.facade=e,eU(e,tc,t),t},c=function(e){return ej(e,tc)?e[tc]:{}},u=function(e){return ej(e,tc)}}var tu=(e6={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=c(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e6.get,td=String,tp=Object.defineProperty,tf=q("".slice),th=q("".replace),tg=q([].join),tv=S&&!$(function(){return 8!==tp(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tm=e2=function(e,t,r){"Symbol("===tf(td(t),0,7)&&(t="["+th(td(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ej(e,"name")||e7&&e.name!==t)&&(S?tp(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&ej(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&ej(r,"constructor")&&r.constructor?S&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return ej(n,"source")||(n.source=tg(ty,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tm(function(){return Q(this)&&tl(this).source||e4(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e2(r,o,n),n.global)i?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},t_={},tw={},tk={},tE={},tS={},t$=Math.ceil,tj=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tS=Math.trunc||function(e){var t=+e;return(t>0?tj:t$)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tE=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tS(t)};var tO=Math.max,tL=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tk=function(e,t){var r=tE(e);return r<0?tO(r+t,0):tL(r,t)};var tx={},tM={},tP=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tM=function(e){return e>0?tP(tE(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tx=function(e){return tM(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tT=function(e){return function(t,r,n){var i,o=T(t),a=tx(o),s=tk(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tI={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tT(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tT(!1)}.indexOf,tq=q([].push);tw=function(e,t){var r,n=T(e),i=0,o=[];for(r in n)!ej(tn,r)&&ej(n,r)&&tq(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)ej(n,r=t[i++])&&(~tI(o,r)||tq(o,r));return o};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tD)},d=Object.getOwnPropertySymbols;var tH=q([].concat);// all object keys, includes non-enumerable and symbols
t_=et("Reflect","ownKeys")||function(e){var t=l(ez(e));return d?tH(t,d(e)):t},tb=function(e,t,n){for(var i=t_(t),o=0;o<i.length;o++){var s=i[o];ej(e,s)||n&&ej(n,s)||a(e,s,r(t,s))}};var tN={},tA=/#|\.prototype\./,tF=function(e,t){var r=tR[tC(e)];return r===tB||r!==tW&&(Q(t)?$(t):!!t)},tC=tF.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tR=tF.data={},tW=tF.NATIVE="N",tB=tF.POLYFILL="P";tN=tF,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/w=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?k:l?k[c]||eE(c,{}):(k[c]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tN(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tb(a,o)}(e.sham||o&&o.sham)&&eU(a,"sham",!0),e1(n,i,a,e)}};var tU={},tG={},tz=Function.prototype,tY=tz.apply,tJ=tz.call;// eslint-disable-next-line es/no-reflect -- safe
tG="object"==typeof Reflect&&Reflect.apply||(O?tJ.bind(tY):function(){return tJ.apply(tY,arguments)});var tQ={},tV={},tK=(tV=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===A(e))return q(e)})(tV.bind);// optional / simple context binding
tQ=function(e,t){return eh(e),void 0===t?e:O?tK(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=et("document","documentElement");var tZ={};tZ=q([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw new t1("Not enough arguments");return e};var t2={};// eslint-disable-next-line redos/no-vulnerable -- safe
t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t9={};t9="process"===A(k.process);var t3=k.setImmediate,t7=k.clearImmediate,t4=k.process,t8=k.Dispatch,t6=k.Function,t5=k.MessageChannel,re=k.String,rt=0,rr={},rn="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=k.location});var ri=function(e){if(ej(rr,e)){var t=rr[e];delete rr[e],t()}},ro=function(e){return function(){ri(e)}},ra=function(e){ri(e.data)},rs=function(e){// old engines have not location.origin
k.postMessage(re(e),p.protocol+"//"+p.host)};t3&&t7||(t3=function(e){t0(arguments.length,1);var t=Q(e)?e:t6(e),r=tZ(arguments,1);return rr[++rt]=function(){tG(t,void 0,r)},f(rt),rt},t7=function(e){delete rr[e]},t9?f=function(e){t4.nextTick(ro(e))}:t8&&t8.now?f=function(e){t8.now(ro(e))}:t5&&!t2?(g=(h=new t5).port2,h.port1.onmessage=ra,f=tQ(g.postMessage,g)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&p&&"file:"!==p.protocol&&!$(rs)?(f=rs,k.addEventListener("message",ra,!1)):f=rn in eC("script")?function(e){tX.appendChild(eC("script"))[rn]=function(){tX.removeChild(this),ri(e)}}:function(e){setTimeout(ro(e),0)});var rc=(tU={set:t3,clear:t7}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rc},{clearImmediate:rc});var ru=tU.set,rl={},rd={};/* global Bun -- Deno case */rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=k.Function,rf=/MSIE .\./.test(ea)||rd&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl=function(e,t){var r=t?2:1;return rf?function(n,i/* , ...arguments */){var o=t0(arguments.length,1)>r,a=Q(n)?n:rp(n),s=o?tZ(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rh=k.setImmediate?rl(ru,!1):ru;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rh},{setImmediate:rh});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rg}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rg:Function("r","regeneratorRuntime = r")(rg)}const rv="https://forkify-api.herokuapp.com/api/v2/recipes/",ry="9db2946e-82d4-4772-b00a-8666e1772377",rm=async(e,t)=>{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e);try{let e=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),t=await e.json();if(!e.ok)throw Error(`${t.message} (${e.status})`);return t}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},r_=e=>{let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rw=async e=>{try{let t=await rm(`${rv}${e}?key=${ry}`);rb.recipe=r_(t),rb.bookmarks.some(t=>t.id===e)?rb.recipe.bookmarked=!0:rb.recipe.bookmarked=!1}catch(e){throw(//Temp err handling
console.error(`${e} 💥💥💥`),e)}},rk=async e=>{try{rb.search.query=e;let t=await rm(`${rv}?search=${e}&&key=${ry}`);rb.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rb.search.page=1}catch(e){throw console.error(`${e} 💥💥💥`),e}},rE=(e=rb.search.page)=>{rb.search.page=e;let t=(e-1)*rb.search.resultsPerPage,r=e*rb.search.resultsPerPage;return rb.search.results.slice(t,r)},rS=e=>{rb.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rb.recipe.servings}),rb.recipe.servings=e},r$=()=>{localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},rj=e=>{rb.bookmarks.push(e),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),r$()},rO=e=>{let t=rb.bookmarks.findIndex(t=>t.id===e);rb.bookmarks.splice(t,1),e===rb.recipe.id&&(rb.recipe.bookmarked=!1),r$()};(()=>{let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))})();const rL=async e=>{try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());// const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==t.length)throw Error("Wrong ingredient format, please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rm(`${rv}?key=${ry}`,r);rb.recipe=r_(n),rj(rb.recipe)}catch(e){throw e}};var rx={};rx=new URL(_("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rM{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/y(rx)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._erroMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rx)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/y(rx)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rP={};//FRACTY REDUCES THE FRACTION.
function rT(e,t,r,n,i){var o,a,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return o=d,a=l,s=r,1===o&&1===a?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rP=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join(""),s=a.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return rT(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,o,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=Math.pow(10,o),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,o));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rT(u,(c-1)*a,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,o,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};// import { Fraction } from 'fractional';
class rI extends rM{_parentElement=document.querySelector(".recipe");_erroMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
              <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${this._data.title}</span>
              </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rx)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rx)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/y(rx)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/y(rx)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/y(rx)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/y(rx)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rx)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${/*@__PURE__*/y(rx)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?/*@__PURE__*/y(rP)(e.quantity).toString():""}
        </div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rq=new rI;class rD{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var rH=new rD,rN=new class extends rM{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${/*@__PURE__*/y(rx)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class rA extends rM{_parentElement=document.querySelector(".results");_erroMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rN.render(e,!1)).join("")}}var rF=new rA;class rC extends rM{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generatePrevBtn(e){return`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${/*@__PURE__*/y(rx)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
    `}_generateNextBtn(e){return`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rx)}#icon-arrow-right"></use>
          </svg>
        </button>
      `}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`${this._generateNextBtn(e)};`:e===t&&t>1?`${this._generatePrevBtn(e)}`:e<t?`
        ${this._generatePrevBtn(e)}
        ${this._generateNextBtn(e)}
      `:""}}var rR=new rC;class rW extends rM{_parentElement=document.querySelector(".bookmarks__list");_erroMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHanlderRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rN.render(e,!1)).join("")}}var rB=new rW;class rU extends rM{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault();let r=[...new FormData(this._parentElement)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var rG=new rU;// if (module.hot) {
//   module.hot.accept();
// }
const rz=async()=>{try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rF.update(rE()),rB.update(rb.bookmarks),// 1) Loading recipe
await rw(e),rq.render(rb.recipe)}catch(e){rq.renderError()}},rY=async()=>{try{rF.renderSpinner();let e=rH.getQuery();if(!e)return;await rk(e),rF.render(rE()),rR.render(rb.search)}catch(e){console.log(e)}},rJ=async e=>{try{rG.renderSpinner(),await rL(e),console.log(rb.recipe),rq.render(rb.recipe),rG.renderMessage(),rB.render(rb.bookmarks),window.history.pushState(null,"",`#${rb.recipe.id}`),setTimeout(()=>{rG.toggleWindow()},2500)}catch(e){console.log("\uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5",e),rG.renderError(e.message)}};rB.addHanlderRender(()=>{rB.render(rb.bookmarks)}),rq.addHandlerRender(rz),rq.addHandlerUpdateServings(e=>{rS(e),rq.update(rb.recipe)}),rq.addHandlerAddBookmark(()=>{rb.recipe.bookmarked?rO(rb.recipe.id):rj(rb.recipe),rq.update(rb.recipe),rB.render(rb.bookmarks)}),rH.addHandlerSearch(rY),rR.addHandlerClick(e=>{rF.render(rE(e)),rR.render(rb.search)}),rG.addHandlerUpload(rJ);//# sourceMappingURL=index.f8fc2882.js.map

//# sourceMappingURL=index.f8fc2882.js.map
