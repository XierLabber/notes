define("molecules/app/hint-float-ball-right/result_9ab6ddb",["san","tslib","@searchfe/inject-js","@baidu/www-api"],function(n,o,r,i){return s={0:function(t,e,n){var n=[e,n(1)],n=function(t,s){"use strict";function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function l(t){return typeof t}:function l(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o,r=0;return{s:o=function o(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(s)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function f(t,e){var n,o={},r=d(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;c(o,i)}}catch(s){r.e(s)}finally{r.f()}var a=t.initData;t.initData=a?function(){return c({},a.call(this),{$style:o})}:function(){return o}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(t,e,n){var o,r=d(function(t){var e=[t];"function"==typeof t&&(e.push(t.prototype),t.prototype.constructor&&e.push(t.prototype.constructor.prototype));return e}(t));try{for(r.s();!(o=r.n()).done;){var i=o.value;e&&("string"==typeof e?i.template=e:e instanceof Array?i.aPack=e:i.aNode=e),n.length&&f(i,n)}}catch(a){r.e(a)}finally{r.f()}return"object"===l(t)?(0,s.defineComponent)(t):t}}.apply(e,n);n===undefined||(t.exports=n)},1:function(t,e){t.exports=n},11:function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(2),i=n(1),a=n(5),s=n(6),c=n(75),r=(o=i.Component,r.__extends(l,o),l.initData=function(){return{mcpData:"",posData:"",qrcodeShow:!1,style:"row",isShow:!1,source:"",qrShowSec:"5",expires:864e5}},l.prototype.getData=function(){var e=this;c.Ajax.post("https://ug.baidu.com/mcp/pc/pcsearch",JSON.stringify({invoke_info:{pos_1:[{}],pos_2:[{}],pos_3:[{}]}}),{success:function(t){0===t.errno&&"ok"===t.errmsg&&t.data&&t.data.action_rule&&(e.data.set("mcpData",t.data.action_rule),t=e.data.get().posNum,e.switchPosData(t))}})},l.prototype.switchPosData=function(t){var e=this.data.get("mcpData");if(e&&t&&0<e[t].length){this.data.set("posData",e[t][0]);var n=this.data.get(),o=n.posData,r=n.posNum;if(0===o.action_flag)return!1;n=o.expires;if(n&&this.data.set("expires",1e3*n),!this.frontBack(r))return!1;this.data.set("isShow",!0),this.data.set("qrcodeShow",!0),e[t][0].style&&this.data.set("style",e[t][0].style),this.data.set("qrShowSec",e[t][0].qr_show_sec);t=this.data.get(),e=t.qrShowSec,t=t.mcpFrom;return this.log.send({fm:this.fmValue,rsv_fltrb_src:t,rsv_fltrb_action:"show"}),this.qrcodeOut(e),o}return""},l.prototype.btnClick=function(t){this.log.send({fm:this.fmValue,rsv_fltrb_src:t,rsv_fltrb_action:"close"}),this.data.set("isShow",!1)},l.prototype.frontBack=function(t){var e=null;try{e=localStorage.getItem(t)}catch(r){console.error("Error",r)}var n=(new Date).getTime(),o=this.data.get().posData.expires;if(e){if(Number(n)-Number(e)>1e3*(o||86400)){try{localStorage.setItem(t,String(n))}catch(r){console.error("Error",r)}return!0}return!1}try{localStorage.setItem(t,String(n))}catch(r){console.error("Error",r)}return!0},l.prototype.onMouseOver=function(t){this.log.send({fm:this.fmValue,rsv_fltrb_src:t,rsv_fltrb_action:"show_in"}),this.data.set("qrcodeShow",!0)},l.prototype.onMouseOut=function(t){this.log.send({fm:this.fmValue,rsv_fltrb_src:t,rsv_fltrb_action:"show_out"}),this.data.set("qrcodeShow",!1)},l.prototype.qrcodeOut=function(t){var e=this;setTimeout(function(){e.data.set("qrcodeShow",!1)},1e3*+t)},l.prototype.created=function(){this.getData()},r.__decorate([a.injectable,r.__metadata("design:paramtypes",[s.SanOption,s.Log])],l));function l(t,e){t=o.call(this,t)||this;return t.fmValue="inlo",t.log=e,t}e["default"]=r},2:function(t,e){t.exports=o},3:function(t,e,n){e=function(){"use strict";t.exports=function(n){var c=[];return c.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){t=function(t){t=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(t," */")}(o),e=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")});return[n].concat(e).concat([t]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},c.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var s=[].concat(t[a]);n&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),c.push(s))}},c}}.apply(e,[]);e===undefined||(t.exports=e)},32:function(t,e,n){"use strict";n.r(e),e["default"]=n.p+"/static/molecules/app/hint-float-ball-right/img/close_7bc47f9.png"},39:function(t,e){t.exports=' <div> <div s-if="isShow" id="hint-float-ball-right" class="{{$style[\'hint-float-ball-right\']}}"> <div class="{{$style[\'activity-enter\']}}"> <div class="{{$style[\'activity-enter-area\']}}" style="background-image: url({{posData.ball_img}})" on-mouseover="onMouseOver(mcpFrom)" on-mouseout="onMouseOut(mcpFrom)"></div> <div class="close {{$style[\'hint-float-ball-closebtn\']}}" on-click="btnClick(mcpFrom)"></div> <div class="{{$style[\'activity-text\']}}">{{posData.ball_desc}}</div> </div> <div s-if="qrcodeShow" class="{{$style[\'qrcode-area\']}}"> <div s-if="style === \'row\'" class="{{$style[\'qrcode-row\']}}"> <div class="{{$style[\'qrcode-obox\']}}"> <div class="{{$style[\'qrcode-box\']}}"> <div class="{{$style[\'qrcode-content\']}}" style="background-image: url({{posData.qr_img}})"></div> </div> <div class="{{$style[\'qrcode-text\']}}"> <div class="c-line-clamp1 {{$style[\'qrcode-title\']}}"> {{ posData.qr_title }} </div> <div class="c-line-clamp1 {{$style[\'qrcode-desc\']}}"> {{ posData.qr_desc }} </div> </div> </div> </div> <div s-else class="{{$style[\'qrcode-col\']}}"> <div class="{{$style[\'qrcode-box\']}}"> <div class="{{$style[\'qrcode-content\']}}" style="background-image: url({{posData.qr_img}})"></div> </div> <div class="{{$style[\'qrcode-text\']}}"> <div class="c-line-clamp1 {{$style[\'qrcode-title\']}}"> {{ posData.qr_title }} </div> <div class="c-line-clamp1 {{$style[\'qrcode-desc\']}}"> {{ posData.qr_desc }} </div> </div> </div> </div> </div> </div> '},4:function(t,e,n){"use strict";function c(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],i={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(i):n.push(o[a]={id:a,parts:[i]})}return n}n.r(e),n.d(e,"default",function(){return r});n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},o=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,a=0,d=!1,s=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function r(a,t,e,n){d=!!n.runAsProduction||e,u=n||{};var s=c(a,t);return h(s),function(t){for(var e=[],n=0;n<s.length;n++){var o=s[n];(r=l[o.id]).refs--,e.push(r)}t?h(s=c(a,t)):s=[];for(var r,n=0;n<e.length;n++)if(0===(r=e[n]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete l[r.id]}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(b(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(b(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var t,e=document.createElement("style"),n=u.attributes||{};for(t in e.type="text/css",n)n.hasOwnProperty(t)&&e.setAttribute(t,n[t]);return o.appendChild(e),e}function b(e){var t,n,o,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(d)return s;r.parentNode.removeChild(r)}return o=p?(t=a++,r=i=i||v(),n=m.bind(null,r,t,!1),m.bind(null,r,t,!0)):(r=v(),n=function(t,e){var n=e.css,o=e.media,r=e.sourceMap;o&&t.setAttribute("media",o);u.ssrId&&t.setAttribute(f,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),function(){r.parentNode.removeChild(r)}),n(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||n(e=t):o()}}var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function m(t,e,n,o){n=n?"":o.css;t.styleSheet?t.styleSheet.cssText=y(e,n):(o=document.createTextNode(n),(n=t.childNodes)[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o))}},5:function(t,e){t.exports=r},6:function(t,e){t.exports=i},7:function(t,e,n){e=function(){"use strict";t.exports=function(t,e){return e=e||{},"string"!=typeof(t=t&&t.__esModule?t["default"]:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}.apply(e,[]);e===undefined||(t.exports=e)},72:function(t,e,n){"use strict";n.r(e);var o,r=n(0),i=n.n(r),r=(n(73),n(39)),a=n.n(r),s=n(11),r=n.n(s);for(o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,function(){return s[t]})}(o);e["default"]=i()(r.a,a.a,[])},73:function(t,e,n){var o=n(74);(o="string"==typeof o?[[t.i,o,""]]:o).locals&&(t.exports=o.locals);(0,n(4)["default"])("19af4086",o,!0,{attributes:{"data-for":"result"},runAsProduction:!0})},74:function(t,e,n){var o=n(3),r=n(7),n=n(32);e=o(!1);r=r(n);e.push([t.i,".hint-float-ball-right_35qVn {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n  position: fixed;\n  right: 24px;\n  bottom: 64px;\n  font-size: 14px;\n  z-index: 1000;\n}\n.activity-enter_3KGmI {\n  position: relative;\n  float: right\\0;\n}\n.activity-enter-area_1DNYN {\n  width: 96px;\n  height: 96px;\n  margin-left: 8px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.hint-float-ball-closebtn_2V4jN {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  background-image: url("+r+');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.activity-text_D3ilj {\n  position: absolute;\n  bottom: 12px;\n  color: #ffe5ca;\n  font-size: 16px;\n  font-family: PingFangSC-Medium;\n  line-height: 16px;\n  text-align: center;\n  width: 96px;\n  margin-left: 8px;\n}\n.ball-desc_2fz6C {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.qrcode-area_3ttcf {\n  margin-right: 8px;\n  float: right\\0;\n}\n.qrcode-col_3MBJk {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 103px;\n  height: 128px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.qrcode-col_3MBJk:after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 102px;\n  bottom: 20px;\n  border-top: solid 10px transparent;\n  border-left: solid 10px #ffffff;\n  /* 白色小三角形 */\n  border-bottom: solid 10px transparent;\n}\n.qrcode-col_3MBJk .qrcode-box_3svoY {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 12px 8px;\n}\n.qrcode-col_3MBJk .qrcode-content_t_13k {\n  width: 64px;\n  height: 64px;\n  margin: 4px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.qrcode-col_3MBJk .qrcode-title_3gmBA,\n.qrcode-col_3MBJk .qrcode-desc_al226 {\n  padding: 0 9px;\n  font-size: 13px;\n  line-height: 15px;\n  color: #222222;\n  margin-bottom: 8px;\n}\n.qrcode-row_1t-Zs {\n  display: flex;\n  justify-content: center;\n  width: 296px;\n  height: 102px;\n  position: relative;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.qrcode-row_1t-Zs:after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n  right: -9px;\n  bottom: 20px;\n  border-top: solid 10px transparent;\n  border-left: solid 10px #ffffff;\n  /* 白色小三角形 */\n  border-bottom: solid 10px transparent;\n}\n.qrcode-row_1t-Zs .qrcode-obox_TLjKl {\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.qrcode-row_1t-Zs .qrcode-box_3svoY {\n  float: right;\n}\n.qrcode-row_1t-Zs .qrcode-content_t_13k {\n  width: 70px;\n  height: 70px;\n  margin-left: 20px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.qrcode-row_1t-Zs .qrcode-text_2QPZ1 {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.qrcode-row_1t-Zs .qrcode-title_3gmBA {\n  font-family: Helvetica;\n  font-size: 20px;\n  color: #222222;\n  line-height: 20px;\n  margin-bottom: 6px;\n}\n.qrcode-row_1t-Zs .qrcode-desc_al226 {\n  font-family: MicrosoftYaHei;\n  font-size: 14px;\n  color: #f73131;\n  letter-spacing: 0;\n  line-height: 16px;\n}\n',""]),e.locals={"hint-float-ball-right":"hint-float-ball-right_35qVn",hintFloatBallRight:"hint-float-ball-right_35qVn","activity-enter":"activity-enter_3KGmI",activityEnter:"activity-enter_3KGmI","activity-enter-area":"activity-enter-area_1DNYN",activityEnterArea:"activity-enter-area_1DNYN","hint-float-ball-closebtn":"hint-float-ball-closebtn_2V4jN",hintFloatBallClosebtn:"hint-float-ball-closebtn_2V4jN","activity-text":"activity-text_D3ilj",activityText:"activity-text_D3ilj","ball-desc":"ball-desc_2fz6C",ballDesc:"ball-desc_2fz6C","qrcode-area":"qrcode-area_3ttcf",qrcodeArea:"qrcode-area_3ttcf","qrcode-col":"qrcode-col_3MBJk",qrcodeCol:"qrcode-col_3MBJk","qrcode-box":"qrcode-box_3svoY",qrcodeBox:"qrcode-box_3svoY","qrcode-content":"qrcode-content_t_13k",qrcodeContent:"qrcode-content_t_13k","qrcode-title":"qrcode-title_3gmBA",qrcodeTitle:"qrcode-title_3gmBA","qrcode-desc":"qrcode-desc_al226",qrcodeDesc:"qrcode-desc_al226","qrcode-row":"qrcode-row_1t-Zs",qrcodeRow:"qrcode-row_1t-Zs","qrcode-obox":"qrcode-obox_TLjKl",qrcodeObox:"qrcode-obox_TLjKl","qrcode-text":"qrcode-text_2QPZ1",qrcodeText:"qrcode-text_2QPZ1"},t.exports=e},75:function(t,e,n){"use strict";e.__esModule=!0,e.Ajax=void 0;var o=n(2);e.Ajax={post:function(t,e,n){var o,r=(o=null,window.XMLHttpRequest?o=new XMLHttpRequest:window.ActiveXObject&&(o=new ActiveXObject("Microsoft.XMLHTTP")),o);if(!r)return this.jsonp(t,e);r.open("POST",t),r.withCredentials=!0,r.setRequestHeader("Content-Type","application/json"),r.onreadystatechange=function(){var t;4===r.readyState&&(200<=r.status&&r.status<300||304===r.status?n.success&&(t=r.responseText?JSON.parse(r.responseText):{},n.success(t)):n.error&&n.error(r.status))},r.send(e)},jsonp:function(t,e){var i="jsonp_"+(new Date).getTime(),e=function(t,e){var n,o=[];for(n in e)o.push(n+"="+e[n]);return t+"?"+o.join("&")}(t,o.__assign(o.__assign({},e),{cb:i})),a=document.createElement("script");return a.src=e,new Promise(function(o,r){window[i]=function(t){var e,n;document.body.removeChild(a),delete window[i],e=o,n=r,(t=t).errno||!t?n(t.errno):e(t.data&&t.data[0])},document.body.appendChild(a)})}}}},c={},a.m=s,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="https://pss.bdstatic.com/r/www/cache",a(a.s=72);function a(t){if(c[t])return c[t].exports;var e=c[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}var s,c});