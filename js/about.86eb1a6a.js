(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"14ca":function(t,e,r){"use strict";var n=r("ccef"),a=r.n(n);a.a},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,s,"next",t)}function s(t){n(o,a,i,c,s,"throw",t)}c(void 0)}))}}},"44c6":function(t,e,r){},"51fa":function(t,e,r){},"67c2":function(t,e,r){"use strict";var n=r("9988"),a=r.n(n);a.a},"8fec":function(t,e,r){"use strict";var n=r("51fa"),a=r.n(n);a.a},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(G){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,i=Object.create(a.prototype),o=new S(n||[]);return i._invoke=C(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,i)&&(w=x);var _=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,i,o,c){var s=u(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function C(t,e,r){var n=h;return function(a,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw i;return A()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var c=k(o,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:e,done:!0}}return g.prototype=_.constructor=m,m.constructor=g,g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[o]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new L(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(_),s(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},9988:function(t,e,r){},b2da:function(t,e,r){"use strict";var n=r("44c6"),a=r.n(n);a.a},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("Sidebar"),r("Banner"),r("Spotlight"),r("Careers"),r("Highlight"),r("Footer")],1)},a=[],i=r("d178"),o=r("5ea5"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner"},[n("div",{staticClass:"banner-content"},[n("div",{staticClass:"w-full text-center mb-20 md:mb-0"},[n("div",{staticClass:"banner-title w-full xl:w-2/3 mx-auto",class:{"opacity-0":t.transparent}},[n("img",{staticClass:"mx-auto",attrs:{src:r("1ae4"),alt:"logo",width:"100"}}),n("h1",{staticClass:"uppercase text-4xl lg:text-6xl"},[t._v("Badranaya Partnership")]),n("h1",[t._v("Attorneys at law & legal consultant")]),n("span",[t._v(" COMPETENT & TRUSTED ")])]),n("div",{staticClass:"banner-desc bg-primary hidden md:block"},[n("p",{staticClass:"container w-full xl:w-2/3",class:{"opacity-0":t.transparent}},[t._v(" As your trusted Attorneys and Legal Consultants, Badranaya Partnership brings you its most competent and confident legal services in Indonesia. Established in 2016 by two alumnus from the Gadjah Mada University - Faculty of Law and Universite Paris I Pantheon - Sorbonne Law School, Badranaya Partnership has grown to become one of Indonesia's rising law firms with diverse and highly credentialed range of practices. ")])])])])])},s=[],l={data:function(){return{transparent:!1}},methods:{handleScroll:function(){window.scrollY>200?this.transparent=!0:this.transparent=!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},u=l,h=(r("8fec"),r("2877")),f=Object(h["a"])(u,c,s,!1,null,"392506d9",null),d=f.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-gray-200 text-primary text-center"},[r("div",{staticClass:"container py-32"},[r("p",{staticClass:"text-2xl mb-8 w-full xl:w-1/2 block mx-auto",attrs:{"data-aos":"fade-up"}},[t._v(" We provide legal services in major legal fields in which focuses in our main Practice Groups - Corporate, Litigation & Dispute Resolution, and Projects. Each Practice Group regularly works with one another as a team to provide the comprehensive and integrated legal advice and assistance to our clients all over the world, seeking insightful solutions to legal challenges, business operations, dispute resolutions, and settlements. ")]),r("button",{staticClass:"btn btn-home btn-lg"},[t._v(" about us ")])])])}],y={data:function(){return{video:!1}}},g=y,m=(r("67c2"),Object(h["a"])(g,p,v,!1,null,"4248a09c",null)),w=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"featured"},[r("h1",[t._v("CAREERS")]),t._m(0),r("button",{staticClass:"btn btn-home btn-lg mt-10 white",on:{click:function(e){return t.$router.push({name:"careers"})}}},[t._v("learn more")])])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" Badranaya Partnership recruits the best talent available, and is always looking to find and "),r("br"),t._v(" retain lawyers and graduates with the skills, values, confidence and capabilities required to deliver professional and service excellence. ")])}],_={},E=_,L=(r("b2da"),Object(h["a"])(E,b,x,!1,null,"25bbd35e",null)),C=L.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-gray-200 text-primary"},[r("div",{staticClass:"container py-20"},[r("div",{staticClass:"text-center uppercase font-bold"},[t._v(" expertise highlights ")]),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10"},t._l(t.data,(function(e,n){return r("div",{key:e.id,staticClass:"cursor-pointer",attrs:{"data-aos":"fade-up","data-aos-delay":200*n},on:{click:function(r){return t.$router.push({name:"detail-expertise",params:{id:e.id}})}}},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"content-img",style:{"background-image":"url('http://api.badranayalaw.credeva.id/uploads/picture/"+e.image+"')"}})]),r("div",{staticClass:"title"},[t._v(" "+t._s(e.judul)+" ")])])})),0),r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-home btn-lg",on:{click:function(e){return t.$router.push({name:"expertise"})}}},[t._v(" see all ")])])])])},j=[],O=(r("fb6a"),r("96cf"),r("1da1")),S=r("e0bc"),P={data:function(){return{data:[]}},methods:{getData:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S["a"].get("service").then((function(t){e.data=t.data.data.slice(0,4)}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},A=P,G=(r("14ca"),Object(h["a"])(A,k,j,!1,null,"f3cd8d06",null)),N=G.exports,$=r("fd2d"),F={components:{Footer:$["a"],Highlight:N,Careers:C,Spotlight:w,Banner:d,Sidebar:o["a"],Navbar:i["a"]}},R=F,T=Object(h["a"])(R,n,a,!1,null,null,null);e["default"]=T.exports},ccef:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),c=r("50c4"),s=r("fc6a"),l=r("8418"),u=r("b622"),h=r("1dde"),f=r("ae40"),d=h("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),y=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!d||!p},{slice:function(t,e){var r,n,u,h=s(this),f=c(h.length),d=o(t,f),p=o(void 0===e?f:e,f);if(i(h)&&(r=h.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return y.call(h,d,p);for(n=new(void 0===r?Array:r)(g(p-d,0)),u=0;d<p;d++,u++)d in h&&l(n,u,h[d]);return n.length=u,n}})}}]);
//# sourceMappingURL=about.86eb1a6a.js.map