(()=>{"use strict";var e={617:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),c=n(667),l=n.n(c),s=new URL(n(294),n.b),p=a()(r());p.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Sail&display=swap);"]);var d=l()(s);p.push([e.id,"@font-face {\n    font-family: 'JetBrains Mono';\n    src: url("+d+") format('woff2');\n    font-weight: 600;\n    font-style: normal;\n}\n\n.sail {\n    font-family: 'Sail', cursive;\n\n}\n\n.jetbrains {\n    font-family: 'JetBrains Mono', monospace;\n    color: black;\n}",""]);const u=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=o.base?l[0]+o.base:l[0],p=i[s]||0,d="".concat(s," ").concat(p);i[s]=p+1;var u=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=o(e,r),s=0;s<i.length;s++){var p=n(i[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},294:(e,t,n)=>{e.exports=n.p+"c3cffe4a89516250a539.woff2"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(e,t){for(const n in t)e.style.setProperty(n,t[n])}function t(e){console.log(e)}const o=n.p+"1217df9845ac8cbcdae2.jpg",r=n.p+"abda60187b2bde03161c.svg",i={margin:"10px",width:"30%","aspect-ratio":"1 / 1","max-width":"200px",flex:"0 1 auto",display:"flex","flex-flow":"column nowrap","align-items":"center",margin:"50px"},a={"max-width":"200px"},c={"background-color":"white",color:"bloack","border-radius":"50px",padding:"0 10px","text-align":"center","font-family":"Sail","font-size":"32px",width:"90%",border:"3px solid"};var l=n(379),s=n.n(l),p=n(795),d=n.n(p),u=n(569),f=n.n(u),h=n(565),m=n.n(h),g=n(216),x=n.n(g),b=n(589),v=n.n(b),y=n(617),w={};w.styleTagTransform=v(),w.setAttributes=m(),w.insert=f().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=x(),s()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const C=n.p+"ea44e27c23730bd0b28e.png",E={width:"30%","max-width":"350px",margin:"20px","aspect-ratio":"4 / 3",flex:"0 1 auto",display:"flex","flex-wrap":"wrap","background-color":"#aaa",position:"relative","box-shadow":"-2px 2px 2px 0px rgba(0,0,0,.6)"},k={"background-color":"white",width:"100%",height:"100%","box-shadow":"-2px 2px 2px 0px rgba(0,0,0,.4)"},S={"background-color":"black",width:"90%",height:"78%",margin:"5%"},X={width:"258px",height:"68px","background-image":`url(${C})`,display:"flex","justify-content":"center","align-items":"center",color:"white","font-family":"Sail","font-size":"30px",position:"absolute",bottom:"-15%"};function j(t){const{url:n,tilt:o,name:r}=t,i=document.createElement("div");e(i,E);const a=document.createElement("div");i.appendChild(a),a.style.setProperty("transform",`rotate(${3*o}deg)`),e(a,k);const c=document.createElement("img");e(c,S),c.src=n,a.appendChild(c);const l=document.createElement("div");e(l,X),l.textContent=r||"Burguer Name";const s=o<0?"right":"left";return l.style.setProperty(`${s}`,"-20%"),i.appendChild(l),i}const M=n.p+"46b63871d00c940f460b.jpg",T=n.p+"c65a02c4a7a4929dd5af.jpg",B=n.p+"fb5e2bd605f096e939ab.jpg",D=n.p+"294110d6b4ff7d85577e.jpg",$={margin:"100px auto",width:"95%",height:"80vh",display:"flex","flex-flow":"column nowrap","justify-content":"space-evenly"},P={display:"flex","align-items":"center","justify-content":"space-evenly",width:"100%",height:"50%"};function A(){const t=document.createElement("div");e(t,$);const n=document.createElement("div");e(n,P),n.appendChild(j({url:M,tilt:-1,name:"High Tides",description:"Some text right here."})),n.appendChild(function(){const t=document.createElement("div");e(t,i);const n=document.createElement("img");n.src=r,e(n,a),t.appendChild(n);const o=document.createElement("h1");return n.appendChild(o),e(o,c),o.textContent="Burger's Bay",t.appendChild(o),t}()),n.appendChild(j({url:T,tilt:1,name:"Depth's Bellow",description:"Some text right here."})),t.appendChild(n);const o=document.createElement("div");return e(o,P),o.appendChild(j({url:B,tilt:-1,name:"Fresh Seas",description:"Some text right here."})),o.appendChild(j({url:D,tilt:1,name:"Sailor's Loved",description:"Some text right here."})),t.appendChild(o),t}const L={position:"relative"},I={position:"absolute",left:"-64px",top:"10px",width:"48px"},z={"font-family":"Sail","font-size":"32px"},J={"font-family":"Jetbrains Mono","background-color":"#141414",color:"white","font-size":"24px",padding:"4px"};function N(t){const{url:n,name:o,text:r}=t,i=document.createElement("div");e(i,L);const a=document.createElement("img");a.src=n,e(a,I),i.appendChild(a);const c=document.createElement("h3");c.textContent=o,e(c,z),i.appendChild(c);const l=document.createElement("p");return l.textContent=r,e(l,J),i.appendChild(l),i}const F=n.p+"7f16f168558f418828ef.svg",H=n.p+"6100caff9b9fb71cc67d.svg",Z={"background-color":"white",border:"5px solid","border-radius":"35px",margin:"20vh auto",width:"470px",height:"580px",display:"flex","flex-flow":"column nowrap","justify-content":"space-evenly","align-items":"center",padding:"20px"},_={height:"fit-content",border:"4px solid black","border-radius":"35px","background-color":"white",padding:"10px 20px",flex:"1 1 auto"},O={"margin-bottom":"10px","font-family":"Sail"},R={"font-size":"20px","font-weight":"400","text-align":"justify","font-family":"Jetbrains Mono"};function U(t){const{title:n,items:o,localStyling:r}=t,i=document.createElement("div");e(i,_),e(i,r);const a=document.createElement("h3");e(a,O),a.textContent=n,i.appendChild(a);for(const t in o){const n=document.createElement("p");e(n,R),n.textContent=`${t} ------ ${o[t]}`,i.appendChild(n)}return i}const q={width:"90%",height:"80vh",margin:"10vh auto",display:"flex","flex-flow":"column wrap",gap:"10px"},Q={title:"Burguers",items:{"High Tides":"10","Depth's Bellow":"10","Sailor's Loved":"10","Fresh Seas":"10","Burger 1":"10","Burger 2":"10","Burger 3":"10"},localStyling:{height:"90%",width:"50%"}},W={title:"Drinks",items:{"Drink 1":"10","Drink 2":"10","Drink 3":"10"},localStyling:{height:"40%",width:"50%"}},G={title:"Deserts",items:{"Desert 1":"10","Desert 2":"10","Desert 3":"10"},localStyling:{height:"40%",width:"50%"}},K={position:"fixed","background-color":"black","background-image":`url(${o})`,width:"100vw",height:"100vh"};e(document.body,K);const V={current:A()},Y=document.querySelector("#content");Y.appendChild(V.current),e(Y,{"max-width":"1400px",margin:"0 auto"});const ee=document.createElement("header");e(ee,{position:"fixed",top:"0",left:"0",width:"100vw",height:"60px","background-color":"#141414",display:"flex","justify-content":"center",gap:"10px","border-bottom":"1px solid white"}),Y.appendChild(ee);const te={border:"2px solid white","border-bottom":"none","border-radius":"15px 15px 0 0",display:"flex","align-items":"center","justify-content":"center",padding:"10px","font-size":"24px",width:"130px","text-transform":"uppercase","font-family":"Jetbrains Mono","margin-top":"5px"},ne={"background-color":"#141414",color:"white"},oe={"background-color":"white",color:"#141414"},re=["menu","home","contact"],ie=[];for(const t of re){const n=document.createElement("button");n.textContent=t,e(n,te),e(n,ne),"home"===t&&e(n,oe),ie.push(ee.appendChild(n))}function ae(n){if(!V.current)return;const o=n.target;switch(ie.forEach((t=>e(t,ne))),e(o,oe),Y.removeChild(V.current),o.textContent){case"home":V.current=A(),Y.appendChild(V.current);break;case"menu":V.current=function(){const t=document.createElement("h1");return e(t,q),t.appendChild(U(Q)),t.appendChild(U(W)),t.appendChild(U(G)),t}(),t(V.current),Y.appendChild(V.current);break;case"contact":V.current=function(){const t=document.createElement("h1");return e(t,Z),t.appendChild(N({url:F,name:"WhatsApp",text:"(XX) XXXXX-XXXX"})),t.appendChild(N({url:H,name:"Telephone",text:"(XX) XXXX-XXXX"})),t}(),t(V.current),Y.appendChild(V.current)}}for(const e of ie)e.addEventListener("click",ae);const ce=document.createElement("div");e(ce,{"background-color":"#141414",height:"30px",width:"100vw",position:"fixed",bottom:"0",left:"0",color:"white",display:"flex","justify-content":"center","align-items":"center"}),ce.innerHTML='<p>Made by <a target="_blank" href="https://github.com/al-ptk">Alan Patrick</a></p>',Y.appendChild(ce)})()})();