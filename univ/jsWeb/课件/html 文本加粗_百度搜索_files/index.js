!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).clickstream=e()}(this,(function(){"use strict";var t=function(t){return"object"==typeof t?null!==t:"function"==typeof t},e=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},n=function(t){try{return!!t()}catch(t){return!0}},r=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}));function i(t,e){return t(e={exports:{}},e.exports),e.exports}var o=i((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),a=o.document,c=t(a)&&t(a.createElement),s=function(t){return c?a.createElement(t):{}},l=!r&&!n((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})),u=Object.defineProperty,f={f:r?Object.defineProperty:function(n,r,i){if(e(n),r=function(e,n){if(!t(e))return e;var r,i;if(n&&"function"==typeof(r=e.toString)&&!t(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!t(i=r.call(e)))return i;if(!n&&"function"==typeof(r=e.toString)&&!t(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}(r,!0),e(i),l)try{return u(n,r,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(n[r]=i.value),n}},p=f.f,h=Function.prototype,v=/^\s*function ([^ (]*)/,d="name";d in h||r&&p(h,d,{configurable:!0,get:function(){try{return(""+this).match(v)[1]}catch(t){return""}}});var g=i((function(t){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)})),m=(g.version,function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}),y=r?function(t,e,n){return f.f(t,e,m(1,n))}:function(t,e,n){return t[e]=n,t},b={}.hasOwnProperty,_=function(t,e){return b.call(t,e)},w=0,k=Math.random(),P=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++w+k).toString(36))},x=i((function(t){var e="__core-js_shared__",n=o[e]||(o[e]={});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:g.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),S=x("native-function-to-string",Function.toString),E=i((function(t){var e=P("src"),n="toString",r=(""+S).split(n);g.inspectSource=function(t){return S.call(t)},(t.exports=function(t,n,i,a){var c="function"==typeof i;c&&(_(i,"name")||y(i,"name",n)),t[n]!==i&&(c&&(_(i,e)||y(i,e,t[n]?""+t[n]:r.join(String(n)))),t===o?t[n]=i:a?t[n]?t[n]=i:y(t,n,i):(delete t[n],y(t,n,i)))})(Function.prototype,n,(function(){return"function"==typeof this&&this[e]||S.call(this)}))})),I=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},O=function(t,e,n){if(I(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},j=function(t,e,n){var r,i,a,c,s=t&j.F,l=t&j.G,u=t&j.S,f=t&j.P,p=t&j.B,h=l?o:u?o[e]||(o[e]={}):(o[e]||{}).prototype,v=l?g:g[e]||(g[e]={}),d=v.prototype||(v.prototype={});for(r in l&&(n=e),n)a=((i=!s&&h&&void 0!==h[r])?h:n)[r],c=p&&i?O(a,o):f&&"function"==typeof a?O(Function.call,a):a,h&&E(h,r,a,t&j.U),v[r]!=a&&y(v,r,c),f&&d[r]!=a&&(d[r]=a)};o.core=g,j.F=1,j.G=2,j.S=4,j.P=8,j.B=16,j.W=32,j.U=64,j.R=128;var T,D,C,A,R,W,M,L,F,G=j,V={}.toString,U=function(t){return V.call(t).slice(8,-1)},B=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==U(t)?t.split(""):Object(t)},N=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},q=function(t){return Object(N(t))},H=Math.ceil,$=Math.floor,z=function(t){return isNaN(t=+t)?0:(t>0?$:H)(t)},J=Math.min,K=function(t){return t>0?J(z(t),9007199254740991):0},Q=Array.isArray||function(t){return"Array"==U(t)},X=i((function(t){var e=x("wks"),n=o.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:P)("Symbol."+t))}).store=e})),Y=X("species"),Z=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))},tt=(C=1==(T=0),A=2==T,R=3==T,W=4==T,M=6==T,L=5==T||M,F=D||function(e,n){return new(function(e){var n;return Q(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Q(n.prototype)||(n=void 0),t(n)&&null===(n=n[Y])&&(n=void 0)),void 0===n?Array:n}(e))(n)},function(t,e,n){for(var r,i,o=q(t),a=B(o),c=O(e,n,3),s=K(a.length),l=0,u=C?F(t,s):A?F(t,0):void 0;s>l;l++)if((L||l in a)&&(i=c(r=a[l],l,o),T))if(C)u[l]=i;else if(i)switch(T){case 3:return!0;case 5:return r;case 6:return l;case 2:u.push(r)}else if(W)return!1;return M?-1:R||W?W:u}),et=Z([].forEach,!0);function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t,e,n){return e&&it(t.prototype,e),n&&it(t,n),t}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(n),!0).forEach((function(e){at(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}G(G.P+G.F*!et,"Array",{forEach:function(t){return tt(this,t,arguments[1])}});var lt=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)},ut=[].slice,ft={},pt=function(t,e,n){if(!(e in ft)){for(var r=[],i=0;i<e;i++)r[i]="a["+i+"]";ft[e]=Function("F,a","return new F("+r.join(",")+")")}return ft[e](t,n)},ht=Function.bind||function(e){var n=I(this),r=ut.call(arguments,1),i=function(){var t=r.concat(ut.call(arguments));return this instanceof i?pt(n,t.length,t):lt(n,t,e)};return t(n.prototype)&&(i.prototype=n.prototype),i};G(G.P,"Function",{bind:ht});var vt,dt,gt,mt=X("toStringTag"),yt="Arguments"==U(function(){return arguments}()),bt=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),mt))?n:yt?U(e):"Object"==(r=U(e))&&"function"==typeof e.callee?"Arguments":r},_t=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}},wt={},kt=X("iterator"),Pt=Array.prototype,xt=function(t){return void 0!==t&&(wt.Array===t||Pt[kt]===t)},St=X("iterator"),Et=g.getIteratorMethod=function(t){if(null!=t)return t[St]||t["@@iterator"]||wt[bt(t)]},It=i((function(t){var n={},r={},i=t.exports=function(t,i,o,a,c){var s,l,u,f,p=c?function(){return t}:Et(t),h=O(o,a,i?2:1),v=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(xt(p)){for(s=K(t.length);s>v;v++)if((f=i?h(e(l=t[v])[0],l[1]):h(t[v]))===n||f===r)return f}else for(u=p.call(t);!(l=u.next()).done;)if((f=_t(u,h,l.value,i))===n||f===r)return f};i.BREAK=n,i.RETURN=r})),Ot=X("species"),jt=function(t,n){var r,i=e(t).constructor;return void 0===i||null==(r=e(i)[Ot])?n:I(r)},Tt=o.document,Dt=Tt&&Tt.documentElement,Ct=o.process,At=o.setImmediate,Rt=o.clearImmediate,Wt=o.MessageChannel,Mt=o.Dispatch,Lt=0,Ft={},Gt="onreadystatechange",Vt=function(){var t=+this;if(Ft.hasOwnProperty(t)){var e=Ft[t];delete Ft[t],e()}},Ut=function(t){Vt.call(t.data)};At&&Rt||(At=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Ft[++Lt]=function(){lt("function"==typeof t?t:Function(t),e)},vt(Lt),Lt},Rt=function(t){delete Ft[t]},"process"==U(Ct)?vt=function(t){Ct.nextTick(O(Vt,t,1))}:Mt&&Mt.now?vt=function(t){Mt.now(O(Vt,t,1))}:Wt?(gt=(dt=new Wt).port2,dt.port1.onmessage=Ut,vt=O(gt.postMessage,gt,1)):o.addEventListener&&"function"==typeof postMessage&&!o.importScripts?(vt=function(t){o.postMessage(t+"","*")},o.addEventListener("message",Ut,!1)):vt=Gt in s("script")?function(t){Dt.appendChild(s("script")).onreadystatechange=function(){Dt.removeChild(this),Vt.call(t)}}:function(t){setTimeout(O(Vt,t,1),0)});var Bt={set:At,clear:Rt},Nt=Bt.set,qt=o.MutationObserver||o.WebKitMutationObserver,Ht=o.process,$t=o.Promise,zt="process"==U(Ht);function Jt(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=I(e),this.reject=I(n)}var Kt={f:function(t){return new Jt(t)}},Qt=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},Xt=o.navigator,Yt=Xt&&Xt.userAgent||"",Zt=f.f,te=X("toStringTag"),ee=function(t,e,n){t&&!_(t=n?t:t.prototype,te)&&Zt(t,te,{configurable:!0,value:e})},ne=X("species"),re=X("iterator"),ie=!1;try{var oe=[7][re]();oe.return=function(){ie=!0},Array.from(oe,(function(){throw 2}))}catch(t){}var ae,ce,se,le,ue,fe=Bt.set,pe=function(){var t,e,n,r=function(){var r,i;for(zt&&(r=Ht.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(zt)n=function(){Ht.nextTick(r)};else if(!qt||o.navigator&&o.navigator.standalone)if($t&&$t.resolve){var i=$t.resolve(void 0);n=function(){i.then(r)}}else n=function(){Nt.call(o,r)};else{var a=!0,c=document.createTextNode("");new qt(r).observe(c,{characterData:!0}),n=function(){c.data=a=!a}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}(),he="Promise",ve=o.TypeError,de=o.process,ge=de&&de.versions,me=ge&&ge.v8||"",ye=o.Promise,be="process"==bt(de),_e=function(){},we=ce=Kt.f,ke=!!function(){try{var t=ye.resolve(1),e=(t.constructor={})[X("species")]=function(t){t(_e,_e)};return(be||"function"==typeof PromiseRejectionEvent)&&t.then(_e)instanceof e&&0!==me.indexOf("6.6")&&-1===Yt.indexOf("Chrome/66")}catch(t){}}(),Pe=function(e){var n;return!(!t(e)||"function"!=typeof(n=e.then))&&n},xe=function(t,e){if(!t._n){t._n=!0;var n=t._c;pe((function(){for(var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,c=i?e.ok:e.fail,s=e.resolve,l=e.reject,u=e.domain;try{c?(i||(2==t._h&&Ie(t),t._h=1),!0===c?n=r:(u&&u.enter(),n=c(r),u&&(u.exit(),a=!0)),n===e.promise?l(ve("Promise-chain cycle")):(o=Pe(n))?o.call(n,s,l):s(n)):l(r)}catch(t){u&&!a&&u.exit(),l(t)}};n.length>o;)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&Se(t)}))}},Se=function(t){fe.call(o,(function(){var e,n,r,i=t._v,a=Ee(t);if(a&&(e=Qt((function(){be?de.emit("unhandledRejection",i,t):(n=o.onunhandledrejection)?n({promise:t,reason:i}):(r=o.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=be||Ee(t)?2:1),t._a=void 0,a&&e.e)throw e.v}))},Ee=function(t){return 1!==t._h&&0===(t._a||t._c).length},Ie=function(t){fe.call(o,(function(){var e;be?de.emit("rejectionHandled",t):(e=o.onrejectionhandled)&&e({promise:t,reason:t._v})}))},Oe=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),xe(e,!0))},je=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw ve("Promise can't be resolved itself");(e=Pe(t))?pe((function(){var r={_w:n,_d:!1};try{e.call(t,O(je,r,1),O(Oe,r,1))}catch(t){Oe.call(r,t)}})):(n._v=t,n._s=1,xe(n,!1))}catch(t){Oe.call({_w:n,_d:!1},t)}}};ke||(ye=function(t){!function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")}(this,ye,he,"_h"),I(t),ae.call(this);try{t(O(je,this,1),O(Oe,this,1))}catch(t){Oe.call(this,t)}},(ae=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,e,n){for(var r in e)E(t,r,e[r],n);return t}(ye.prototype,{then:function(t,e){var n=we(jt(this,ye));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=be?de.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&xe(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),se=function(){var t=new ae;this.promise=t,this.resolve=O(je,t,1),this.reject=O(Oe,t,1)},Kt.f=we=function(t){return t===ye||t===le?new se(t):ce(t)}),G(G.G+G.W+G.F*!ke,{Promise:ye}),ee(ye,he),ue=o[he],r&&ue&&!ue[ne]&&f.f(ue,ne,{configurable:!0,get:function(){return this}}),le=g.Promise,G(G.S+G.F*!ke,he,{reject:function(t){var e=we(this);return(0,e.reject)(t),e.promise}}),G(G.S+G.F*!ke,he,{resolve:function(n){return function(n,r){if(e(n),t(r)&&r.constructor===n)return r;var i=Kt.f(n);return(0,i.resolve)(r),i.promise}(this,n)}}),G(G.S+G.F*!(ke&&function(t,e){if(!e&&!ie)return!1;var n=!1;try{var r=[7],i=r[re]();i.next=function(){return{done:n=!0}},r[re]=function(){return i},t(r)}catch(t){}return n}((function(t){ye.all(t).catch(_e)}))),he,{all:function(t){var e=this,n=we(e),r=n.resolve,i=n.reject,o=Qt((function(){var n=[],o=0,a=1;It(t,!1,(function(t){var c=o++,s=!1;n.push(void 0),a++,e.resolve(t).then((function(t){s||(s=!0,n[c]=t,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=we(e),r=n.reject,i=Qt((function(){It(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}});var Te={};Te[X("toStringTag")]="z",Te+""!="[object z]"&&E(Object.prototype,"toString",(function(){return"[object "+bt(this)+"]"}),!0);var De=function(t){return B(N(t))},Ce=Math.max,Ae=Math.min,Re=function(t){return function(e,n,r){var i,o=De(e),a=K(o.length),c=function(t,e){return(t=z(t))<0?Ce(t+e,0):Ae(t,e)}(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},We=Re(!1),Me=[].indexOf,Le=!!Me&&1/[1].indexOf(1,-0)<0;G(G.P+G.F*(Le||!Z(Me)),"Array",{indexOf:function(t){return Le?Me.apply(this,arguments)||0:We(this,t,arguments[1])}});var Fe=function(){function t(e){rt(this,t),this.maxReconnect=3,this.curReconnect=0,this.openData={},this.config=e.websocket,this.ws=null,this.lockReconnect=!1,this.reTimeId,this.openCallback=null,this.closeCallback=null,this.resolveAuto=null,this.heartCheck={timeout:this.config.heartInterval,timeoutId:null,serverTimeoutId:null,current:this,start:function(){var t=this;this.timeoutId&&clearTimeout(this.timeoutId),this.serverTimeoutId&&clearTimeout(this.serverTimeoutId),this.timeoutId=setTimeout((function(){1===t.current.ws.readyState&&t.current.ws.send("heartCheck"),t.serverTimeoutId=setTimeout((function(){t.current.ws.close()}),t.timeout)}),this.timeout)}}}return ot(t,[{key:"reconnect",value:function(){var t=this;this.lockReconnect||this.curReconnect>=this.maxReconnect||(this.curReconnect++,this.closeCallback&&this.closeCallback(),this.lockReconnect=!0,this.reTimeId&&clearTimeout(this.reTimeId),this.reTimeId=setTimeout((function(){t.initWebsocket(t.openData),t.lockReconnect=!1}),this.config.reconnectInterval))}},{key:"initWebsocket",value:function(t,e,n,r,i){var o=this;this.openData=t,e&&(this.openCallback=e),n&&(this.closeCallback=n),r&&(this.resolveAuto=r);var a=this.config.url;this.ws=new WebSocket(a),this.ws.onerror=function(){o.closeCallback(),i&&console.warn("websocket服务出错了"),o.reconnect()},this.ws.onclose=function(){o.closeCallback(),i&&console.warn("websocket服务关闭了"),o.reconnect()},this.ws.onopen=function(){o.openCallback(),o.logWsConfig(t,i),o.heartCheck.start()},this.ws.onmessage=function(t){o.heartCheck.start();var e=t.data&&JSON.parse(t.data).data;e&&e.length>0&&o.resolveAuto(e)}}},{key:"logWebsocket",value:function(t,e){this.ws&&1===this.ws.readyState?this.ws.send(t):e&&console.warn("ws未连接，无法发送数据")}},{key:"logWsConfig",value:function(t,e){this.logWebsocket(t,e)}}]),t}();function Ge(t){if((t=t||{}).url){var e="jsonp_"+Math.ceil(1e4*Math.random()),n=document.getElementsByTagName("head")[0];t.data.callback=e;var r=function(t){var e=[];for(var n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}(t.data),i=document.createElement("script"),o=null;n.appendChild(i),window[e]=function(n){o&&clearTimeout(o),window[e]=null,t.success&&t.success(n)},i.src=t.url+"?"+r,t.time&&(o=setTimeout((function(){window[e]=null,n.removeChild(i),t.error&&t.error({message:"超时"})}),t.time))}else console.warn("jsonp参数不合法")}function Ve(t,e,n){t.getconfig?Ge({url:"https://cstm.baidu.com/log/getconf",data:t,success:function(t){n&&n(t.data||[])},error:function(t){console.log("获取自动打点流配置失败",t)}}):function(t){var e=window.page||{},n="httplog_"+(new Date).getTime(),r=e[n]=new Image;r.onload=r.onerror=function(){e[n]=null},r.src=t,r=null}(e+"?params="+encodeURIComponent(t))}var Ue=X("unscopables"),Be=Array.prototype;null==Be[Ue]&&y(Be,Ue,{});var Ne=function(t){Be[Ue][t]=!0},qe=function(t,e){return{value:e,done:!!t}},He=x("keys"),$e=function(t){return He[t]||(He[t]=P(t))},ze=Re(!1),Je=$e("IE_PROTO"),Ke="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Qe=Object.keys||function(t){return function(t,e){var n,r=De(t),i=0,o=[];for(n in r)n!=Je&&_(r,n)&&o.push(n);for(;e.length>i;)_(r,n=e[i++])&&(~ze(o,n)||o.push(n));return o}(t,Ke)},Xe=r?Object.defineProperties:function(t,n){e(t);for(var r,i=Qe(n),o=i.length,a=0;o>a;)f.f(t,r=i[a++],n[r]);return t},Ye=$e("IE_PROTO"),Ze=function(){},tn=function(){var t,e=s("iframe"),n=Ke.length;for(e.style.display="none",Dt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),tn=t.F;n--;)delete tn.prototype[Ke[n]];return tn()},en=Object.create||function(t,n){var r;return null!==t?(Ze.prototype=e(t),r=new Ze,Ze.prototype=null,r[Ye]=t):r=tn(),void 0===n?r:Xe(r,n)},nn={};y(nn,X("iterator"),(function(){return this}));var rn=function(t,e,n){t.prototype=en(nn,{next:m(1,n)}),ee(t,e+" Iterator")},on=$e("IE_PROTO"),an=Object.prototype,cn=Object.getPrototypeOf||function(t){return t=q(t),_(t,on)?t[on]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?an:null},sn=X("iterator"),ln=!([].keys&&"next"in[].keys()),un="keys",fn="values",pn=function(){return this},hn=function(t,e,n,r,i,o,a){rn(n,e,r);var c,s,l,u=function(t){if(!ln&&t in v)return v[t];switch(t){case un:case fn:return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",p=i==fn,h=!1,v=t.prototype,d=v[sn]||v["@@iterator"]||i&&v[i],g=d||u(i),m=i?p?u("entries"):g:void 0,b="Array"==e&&v.entries||d;if(b&&(l=cn(b.call(new t)))!==Object.prototype&&l.next&&(ee(l,f,!0),"function"!=typeof l[sn]&&y(l,sn,pn)),p&&d&&d.name!==fn&&(h=!0,g=function(){return d.call(this)}),(ln||h||!v[sn])&&y(v,sn,g),wt[e]=g,wt[f]=pn,i)if(c={values:p?g:u(fn),keys:o?g:u(un),entries:m},a)for(s in c)s in v||E(v,s,c[s]);else G(G.P+G.F*(ln||h),e,c);return c}(Array,"Array",(function(t,e){this._t=De(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,qe(1)):qe(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values");wt.Arguments=wt.Array,Ne("keys"),Ne("values"),Ne("entries");for(var vn=X("iterator"),dn=X("toStringTag"),gn=wt.Array,mn={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},yn=Qe(mn),bn=0;bn<yn.length;bn++){var _n,wn=yn[bn],kn=mn[wn],Pn=o[wn],xn=Pn&&Pn.prototype;if(xn&&(xn[vn]||y(xn,vn,gn),xn[dn]||y(xn,dn,wn),wt[wn]=gn,kn))for(_n in hn)xn[_n]||E(xn,_n,hn[_n],!0)}function Sn(t){var e;if("string"==typeof t||"number"==typeof t||"boolean"==typeof t||"function"==typeof t||void 0===t||null==t)e=t;else if(Array.isArray(t)){e=[];for(var n=0;n<t.length;n++)e[n]=Sn(t[n])}else if("object"===nt(t))for(var r in e={},t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=Sn(t[r]));else e=t;return e}G(G.S,"Array",{isArray:Q});var En=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n};r&&"g"!=/./g.flags&&f.f(RegExp.prototype,"flags",{configurable:!0,get:En});var In="toString",On=/./.toString,jn=function(t){E(RegExp.prototype,In,t,!0)};n((function(){return"/a/b"!=On.call({source:"a",flags:"b"})}))?jn((function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?En.call(t):void 0)})):On.name!=In&&jn((function(){return On.call(this)}));var Tn=Date.prototype,Dn="Invalid Date",Cn="toString",An=Tn.toString,Rn=Tn.getTime;function Wn(t){return"[object Object]"===Object.prototype.toString.call(t)}function Mn(t){for(var e in t)Array.isArray(t[e])||Wn(t[e])?t[e]=Mn(t[e]):t[e]=String(t[e]);return JSON.stringify(t)}new Date(NaN)+""!=Dn&&E(Tn,Cn,(function(){var t=Rn.call(this);return t==t?An.call(this):Dn}));var Ln,Fn,Gn=["appname","timestamp","sv","av","channel","fr","trace","sample","page_id"],Vn=function(){function t(){rt(this,t),this.baseParam={sv:"v1.0.1",av:"1.0.0"}}return ot(t,[{key:"getBaseParam",value:function(){return this.baseParam}},{key:"setBaseParam",value:function(t,e){if(Wn(t))for(var n in t)Gn.indexOf(n)>-1&&(this.baseParam[n]=t[n]);else e&&console.warn("设置基础字段参数不是object")}}]),t}(),Un=X("match"),Bn=function(t){return function(e,n){var r,i,o=String(N(e)),a=z(n),c=o.length;return a<0||a>=c?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===c||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}}(!0),Nn=function(t,e,n){return e+(n?Bn(t,e).length:1)},qn=RegExp.prototype.exec,Hn=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==bt(t))throw new TypeError("RegExp#exec called on incompatible receiver");return qn.call(t,e)},$n=RegExp.prototype.exec,zn=String.prototype.replace,Jn=$n,Kn=(Ln=/a/,Fn=/b*/g,$n.call(Ln,"a"),$n.call(Fn,"a"),0!==Ln.lastIndex||0!==Fn.lastIndex),Qn=void 0!==/()??/.exec("")[1];(Kn||Qn)&&(Jn=function(t){var e,n,r,i,o=this;return Qn&&(n=new RegExp("^"+o.source+"$(?!\\s)",En.call(o))),Kn&&(e=o.lastIndex),r=$n.call(o,t),Kn&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),Qn&&r&&r.length>1&&zn.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var Xn=Jn;G({target:"RegExp",proto:!0,forced:Xn!==/./.exec},{exec:Xn});var Yn=X("species"),Zn=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),tr=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),er=function(t,e,r){var i=X(t),o=!n((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=o?!n((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[Yn]=function(){return n}),n[i](""),!e})):void 0;if(!o||!a||"replace"===t&&!Zn||"split"===t&&!tr){var c=/./[i],s=r(N,i,""[t],(function(t,e,n,r,i){return e.exec===Xn?o&&!i?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),l=s[0],u=s[1];E(String.prototype,t,l),y(RegExp.prototype,i,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)})}},nr=Math.min,rr=[].push,ir=4294967295,or=!n((function(){RegExp(ir,"y")}));er("split",2,(function(n,r,i,o){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r,o,a=String(this);if(void 0===e&&0===n)return[];if(!t(r=e)||!(void 0!==(o=r[Un])?o:"RegExp"==U(r)))return i.call(a,e,n);for(var c,s,l,u=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=void 0===n?ir:n>>>0,v=new RegExp(e.source,f+"g");(c=Xn.call(v,a))&&!((s=v.lastIndex)>p&&(u.push(a.slice(p,c.index)),c.length>1&&c.index<a.length&&rr.apply(u,c.slice(1)),l=c[0].length,p=s,u.length>=h));)v.lastIndex===c.index&&v.lastIndex++;return p===a.length?!l&&v.test("")||u.push(""):u.push(a.slice(p)),u.length>h?u.slice(0,h):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(t,e){var i=n(this),o=null==t?void 0:t[r];return void 0!==o?o.call(t,i,e):a.call(String(i),t,e)},function(t,n){var r=o(a,t,this,n,a!==i);if(r.done)return r.value;var c=e(t),s=String(this),l=jt(c,RegExp),u=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(or?"y":"g"),p=new l(or?c:"^(?:"+c.source+")",f),h=void 0===n?ir:n>>>0;if(0===h)return[];if(0===s.length)return null===Hn(p,s)?[s]:[];for(var v=0,d=0,g=[];d<s.length;){p.lastIndex=or?d:0;var m,y=Hn(p,or?s:s.slice(d));if(null===y||(m=nr(K(p.lastIndex+(or?0:d)),s.length))===v)d=Nn(s,d,u);else{if(g.push(s.slice(v,d)),g.length===h)return g;for(var b=1;b<=y.length-1;b++)if(g.push(y[b]),g.length===h)return g;d=v=m}}return g.push(s.slice(v)),g}]}));var ar={web:["url","referer","ua","baiduid","device","sid","cuid","uk","network"],xcx:["device","swan_id","app_version","app_key","scene","baiduid","session_id","cuid","uk","sid","network","os_version","host_app","host_version","sdk_version","url","referer","screen","device_mfr","device_md"]},cr=function(){function t(){rt(this,t),this.platform="web",this.platParam={}}return ot(t,[{key:"setInitPlatParam",value:function(t){var e=this;(this.platParam.url=window.location.href,this.platParam.referer=document.referrer,this.platParam.ua=navigator.userAgent,document.cookie)&&document.cookie.split("; ").forEach((function(n){var r=n.split("=");"BAIDUID"===r[0]?e.platParam.baiduid=r[1]:"pc"===t&&"H_PS_PSSID"===r[0]||"h5"===t&&"H_WISE_SIDS"===r[0]?e.platParam.sid=r[1]:"BAIDUCUID"===r[0]&&(e.platParam.cuid=r[1])}))}},{key:"getPlatform",value:function(){return this.platform}},{key:"getPlatParam",value:function(){return this.platParam}},{key:"setPlatParam",value:function(t,e){if(""!==this.platform)if(Wn(t))for(var n in this.setInitPlatParam(t.device),t)ar[this.platform].indexOf(n)>-1&&(this.platParam[n]=t[n]);else e&&console.warn("设置平台字段参数不是object");else e&&console.warn("设置平台字段参数之前，请先设置平台。")}}]),t}();function sr(t,e,n){if(!Wn(t))return n&&console.warn("检测必填字段的数据不是object"),!1;for(var r=0;r<e.length;r++)if(void 0===t[e[r]])return n&&console.warn("必填字段",e,"缺少字段"+e[r]),!1;return!0}var lr={viewPage:{default:{atype:"view",stype:"page"},required:["page"],keys:["page","page_param","series","ignore","has_video"]},viewEl:{default:{atype:"view",stype:"element"},required:["page"],keys:["page","page_param","element","element_param","element_type","element_id","position_top","position_left","list","list_param","index","list2","list2_param","list2_index","list3","list3_param","list3_index","series","is_video","video_id"],ename:"element"},viewElDraw:{default:{atype:"view",stype:"element-draw"},required:["page"],keys:["page","page_param","element","element_param","element_type","element_id","position_top","position_left","list","list_param","index","list2","list2_param","list2_index","list3","list3_param","list3_index","series","is_video","video_id"],ename:"element"},actClick:{default:{atype:"act",stype:"click"},required:["page"],keys:["page","page_param","element","element_param","element_type","element_id","position_top","position_left","list","list_param","index","list2","list2_param","list2_index","list3","list3_param","list3_index","series","nav","nav_target","clk_type","times"],ename:"element"},actVideo:{default:{atype:"act",stype:"video"},required:["video_action"],keys:["page","page_param","video_name","video_id","video_param","video_action","video_position","duration","video_position_p","play_times","series"],ename:"video_action"},actScroll:{default:{atype:"act",stype:"scroll"},required:["page"],keys:["page","page_param","scroll_top","scroll_left","scroll_top_p","scroll_left_p","page_height","page_width","scroll_top_max","scroll_left_max","scroll_top_max_p","scroll_left_max_p","direction","series"]},actEvent:{default:{atype:"act",stype:"event"},required:["act_type"],keys:["page","page_param","element","element_param","act_type","act_param","series"],ename:"act_type"},timingPage:{default:{atype:"timing",stype:"page"},required:["page_id","page","time_duration"],keys:["page_id","page","page_param","time_duration","time_all","time_piece","tick"]},timingVideo:{default:{atype:"timing",stype:"video"},required:["time_duration"],keys:["page","page_param","video_name","video_id","video_param","video_position","duration","video_position_p","play_times","time_duration","time_single","time_piece","tick"]},eventError:{default:{atype:"event",stype:"error"},required:[],keys:["page","page_param","event_level","event_file","event_line","event_msg"]}};function ur(t){var e=t.baseParam,n=t.pt,r=t.ptInfo,i=t.isDebug,o={setconfig:1,common:st(st({},e),{},{platform:n,ptInfo:r})};return i&&(console.log("logConfig"),console.log(o)),Mn(Sn(o))}function fr(t,e,n,r){if("getconfig"===n)return r?{getconfig:Mn(Sn(e.getconfig))}:Mn(Sn(e));var i=t.baseParam,o=t.pt,a=t.ptInfo,c=t.isDebug;if(!n||!lr[n])return c&&console.warn("发送的type不对，当前type是"+n),"noType";if(!sr(e,lr[n].required,c))return c&&console.warn("发送"+n+"类型的必填信息不全"),"noRequired";var s=Sn(e),l={},u={},f={},p={},h={},v={},d={};s.ruleId&&(d.rule_id=s.ruleId,delete s.ruleId);var g={};for(var m in s)lr[n].keys.indexOf(m)>-1?(l[m]=s[m],delete s[m]):"ext"===m?(u=s[m],delete s[m]):0===m.indexOf("f_")?(f[m]=s[m],delete s[m]):0===m.indexOf("c_")?(p[m]=s[m],delete s[m]):Gn.indexOf(m)>-1?(h[m]=s[m],delete s[m]):ar[o].indexOf(m)>-1?(v[m]=s[m],delete s[m]):(g[m]=s[m],delete s[m]);if(lr[n].ename&&(l.ename=l[lr[n].ename]),r){var y=st({setconfig:0,common:st(st(st({},i),{},{timestamp:(new Date).getTime()},h),{},{platform:o,ptInfo:st(st({},a),v)}),action:st(st({},lr[n].default),{},{actionInfo:l,ext:u,commonExt:f,customExt:p,customUser:g})},d);return c&&(console.log("logHttp"),console.log(y)),Mn(Sn(y))}var b=st({setconfig:0,common:st(st({timestamp:(new Date).getTime()},h),{},{ptInfo:v}),action:st(st({},lr[n].default),{},{actionInfo:l,ext:u,commonExt:f,customExt:p,customUser:g})},d);return c&&(console.log("logWebsocket"),console.log(b)),Mn(Sn(b))}var pr=function(){function t(){rt(this,t),this.globalParam={debug:!1,http:{url:"https://cstm.baidu.com/log/common/v.gif"},websocket:{url:"wss://cstm.baidu.com/log/index",reconnectInterval:2e3,heartInterval:3e3,binaryType:"blob"}}}return ot(t,[{key:"getGlobalParam",value:function(){return this.globalParam}},{key:"setGlobalParam",value:function(t,e){if(Wn(t)){for(var n in t)if(void 0!==this.globalParam[n])if(Wn(this.globalParam[n])&&Wn(t[n]))for(var r in t[n])this.globalParam[n][r]?this.globalParam[n][r]=t[n][r]:e&&console.warn("设置全局参数中，"+n+"中的"+r+"不是全局参数");else this.globalParam[n]=t[n]}else e&&console.warn("设置全局参数不是object")}}]),t}(),hr=["appname","device"],vr=function(){function t(e){rt(this,t),this.globalParam=new pr,this.baseParam=new Vn,this.platParam=new cr,this.isWsInit=!1,this.isWsIniting=!1,this.noSendData=[],this.canSocket=!1,this.isWsSupport=!(!window.WebSocket||!window.WebSocket.prototype.send),this.webWocket=new Fe(this.globalParam.getGlobalParam()),this.init(e)}return ot(t,[{key:"isDebug",value:function(){var t=this.globalParam.getGlobalParam().debug;return window.location.href.indexOf("debug=1")>-1&&(t=!0),t}},{key:"init",value:function(t){void 0!==t&&(sr(t,hr,this.isDebug())?(this.globalParam.setGlobalParam(t,this.isDebug()),this.baseParam.setBaseParam(t,this.isDebug()),this.platParam.setPlatParam(t,this.isDebug()),this.isInit=!0):this.isDebug()&&console.warn("初始化必填参数不全"))}},{key:"setConfig",value:function(t){this.globalParam.setGlobalParam(t,this.isDebug()),this.baseParam.setBaseParam(t,this.isDebug()),this.platParam.setPlatParam(t,this.isDebug()),this.logConfig()}},{key:"initWs",value:function(t){var e=this,n=this.isDebug();return new Promise((function(r,i){e.isWsIniting=!0,e.webWocket.initWebsocket(t,(function(){o.canSocket=!0,r()}),(function(){o.canSocket=!1,i()}),null,n);var o=e}))}},{key:"log",value:function(t,e){var n=this;if(this.isInit)if(Wn(t)){var r=this.baseParam.getBaseParam(),i=this.platParam.getPlatform(),o=this.platParam.getPlatParam(),a=this.isDebug(),c={baseParam:r,pt:i,ptInfo:o,isDebug:a},s=this.globalParam.getGlobalParam().http.url;this.isWsSupport?this.isWsInit||this.isWsIniting?this.isWsIniting?this.noSendData.push({data:t,type:e}):this.canSocket?this.webWocket.logWebsocket(fr(c,t,e),a):Ve(fr(c,t,e,!0),s,null):this.initWs(ur(c)).then((function(){n.isWsInit=!0,n.isWsIniting=!1,n.webWocket.logWebsocket(fr(c,t,e),a),n.noSendData.length>0&&(n.noSendData.forEach((function(t){n.webWocket.logWebsocket(fr(c,t.data,t.type),a)})),n.noSendData=[])})).catch((function(){n.isWsInit=!0,n.isWsIniting=!1,Ve(fr(t,e,!0),s,null),n.noSendData.length>0&&(n.noSendData.forEach((function(t){Ve(fr(c,t.data,t.type,!0),s,null)})),n.noSendData=[])})):Ve(fr(c,t,e,!0),s,null)}else this.isDebug()&&console.warn("传入打点参数不是object");else this.isDebug()&&console.warn("发送具体打点之前，请先初始化")}},{key:"logConfig",value:function(){if(this.isWsSupport&&this.isWsInit&&this.canSocket){var t=this.baseParam.getBaseParam(),e=this.platParam.getPlatform(),n=this.platParam.getPlatParam(),r=this.isDebug(),i={baseParam:t,pt:e,ptInfo:n,isDebug:r};this.webWocket.logWsConfig(ur(i),r)}}}]),t}(),dr=Math.max,gr=Math.min,mr=Math.floor,yr=/\$([$&`']|\d\d?|<[^>]*>)/g,br=/\$([$&`']|\d\d?)/g;function _r(t){var e="";if(t&&t.stack){e=t.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,9).join("@").replace(/\?[^:]+/gi,"");var n=t.toString();e.indexOf(n)<0&&(e=n+"@"+e)}return encodeURIComponent(e)}er("replace",2,(function(t,n,r,i){return[function(e,i){var o=t(this),a=null==e?void 0:e[n];return void 0!==a?a.call(e,o,i):r.call(String(o),e,i)},function(t,n){var a=i(r,t,this,n);if(a.done)return a.value;var c=e(t),s=String(this),l="function"==typeof n;l||(n=String(n));var u=c.global;if(u){var f=c.unicode;c.lastIndex=0}for(var p=[];;){var h=Hn(c,s);if(null===h)break;if(p.push(h),!u)break;""===String(h[0])&&(c.lastIndex=Nn(s,K(c.lastIndex),f))}for(var v,d="",g=0,m=0;m<p.length;m++){h=p[m];for(var y=String(h[0]),b=dr(gr(z(h.index),s.length),0),_=[],w=1;w<h.length;w++)_.push(void 0===(v=h[w])?v:String(v));var k=h.groups;if(l){var P=[y].concat(_,b,s);void 0!==k&&P.push(k);var x=String(n.apply(void 0,P))}else x=o(y,s,b,_,k,n);b>=g&&(d+=s.slice(g,b)+x,g=b+y.length)}return d+s.slice(g)}];function o(t,e,n,i,o,a){var c=n+t.length,s=i.length,l=br;return void 0!==o&&(o=q(o),l=yr),r.call(a,l,(function(r,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":l=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>s){var f=mr(u/10);return 0===f?r:f<=s?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):r}l=i[u-1]}return void 0===l?"":l}))}}));var wr=new(function(){function t(e){var n;rt(this,t),this.log=new vr(e),this.logGlobalParam={},e&&!1!==e.error&&(n=this.logEventError.bind(this),window.onerror=function(t,e,r,i,o){n({ruleId:122,msg:encodeURIComponent(t),line:r,col:i,stack:_r(o)})})}return ot(t,[{key:"init",value:function(t){this.log.init(t)}},{key:"setConfig",value:function(t){this.log.setConfig(t)}},{key:"setLogGlobalParam",value:function(t){this.logGlobalParam=t}},{key:"logEntry",value:function(t,e){this.log.log(st(st({},this.logGlobalParam),t),e)}},{key:"logViewPage",value:function(t){this.logEntry(t,"viewPage")}},{key:"logViewEl",value:function(t){this.logEntry(t,"viewEl")}},{key:"logViewElDraw",value:function(t){this.logEntry(t,"viewElDraw")}},{key:"logActClick",value:function(t){this.logEntry(t,"actClick")}},{key:"logActVideo",value:function(t){this.logEntry(t,"actVideo")}},{key:"logActScroll",value:function(t){this.logEntry(t,"actScroll")}},{key:"logActEvent",value:function(t){this.logEntry(t,"actEvent")}},{key:"logTimingPage",value:function(t){this.logEntry(t,"timingPage")}},{key:"logTimingVideo",value:function(t){this.logEntry(t,"timingVideo")}},{key:"logEventError",value:function(t){this.logEntry(t,"eventError")}}]),t}()),kr=window.clickstream;return kr.init&&wr.init(kr.init),kr.config&&wr.setConfig(kr.config),kr.logGlobalParam&&wr.setLogGlobalParam(kr.logGlobalParam),kr.data&&kr.data.length>0&&kr.data.forEach((function(t){wr[t.callee.name](t[0])})),wr}));
