(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84db87b4"],{"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));e("d3b7");function n(t,r,e,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(a,o){var i=t.apply(r,e);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}},"5c3d":function(t,r,e){"use strict";var n=e("a6d3"),a=e.n(n);a.a},6790:function(t,r,e){"use strict";var n=e("9f4a"),a=e.n(n);a.a},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(P){s=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var a=r&&r.prototype instanceof y?r:y,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=k(t,e,i),o}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(F([])));x&&x!==e&&n.call(x,o)&&(w=x);var _=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(s.arg)}var a;function o(t,n){function o(){return new r((function(r,a){e(t,n,r,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function k(t,r,e){var n=f;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return G()}e.method=a,e.arg=o;while(1){var i=e.delegate;if(i){var c=O(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var s=l(t,r,e);if("normal"===s.type){if(n=e.done?p:h,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=p,e.method="throw",e.arg=s.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function C(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){while(++a<t.length)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}return g.prototype=_.constructor=m,m.constructor=g,g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,a,o){void 0===o&&(o=Promise);var i=new E(u(r,e,n,a),o);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),s(_,c,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return c.type="throw",c.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;C(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},"9f4a":function(t,r,e){},a6d3:function(t,r,e){},ab7f:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("Navbar",{staticClass:"bg-primary"}),e("Sidebar"),e("Banner",{attrs:{data:t.data}}),e("Detail",{attrs:{data:t.data}}),e("Footer")],1)},a=[],o=(e("96cf"),e("1da1")),i=e("d178"),c=e("5ea5"),s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("section",{staticClass:"banner text-primary"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"700","data-aos-offset":"0"}},[e("h1",[t._v(" "+t._s(t.data.name)+" ")]),e("h2",{staticClass:"mt-8 uppercase"},[t._v(t._s(t.data.position))])])]),e("div",{staticClass:"img-section",style:{"background-image":"url('http://api.badranayalaw.credeva.id/uploads/picture/"+t.data.picture+"')"}})])},u=[],l={props:["data"]},f=l,h=(e("5c3d"),e("2877")),d=Object(h["a"])(f,s,u,!1,null,"6a4eaaf2",null),p=d.exports,v=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"bg-gray-200 py-32 text-primary"},[e("div",{staticClass:"container"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-4 gap-8"},[e("div",{staticClass:"md:col-span-2 lg:col-span-3"},[e("p",{staticClass:"mt-10 text-2xl"},[t._v(" "+t._s(t.data.detail)+" ")])]),e("div",{staticClass:"font-sans md:col-span-2 lg:col-span-1"},[e("h1",{staticClass:"uppercase"},[t._v(t._s(t.data.name))]),e("p",[t._v(" "+t._s(t.data.position)+" ")]),e("p",[t._v(" "+t._s(t.data.email)+" ")]),e("p",{staticClass:"mt-8"},[e("a",{staticClass:"btn btn-home btn-lg",attrs:{href:t.data.linkedin,target:"_blank"}},[t._v(" connect on linkedin ")])])])])])])},y=[],g={props:["data"]},m=g,w=(e("6790"),Object(h["a"])(m,v,y,!1,null,"1b54a4d3",null)),b=w.exports,x=e("fd2d"),_=e("e0bc"),L={components:{Footer:x["a"],Detail:b,Banner:p,Sidebar:c["a"],Navbar:i["a"]},props:["id"],data:function(){return{data:{}}},methods:{getData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["a"].get("team/"+this.id).then((function(t){r.data=t.data.data[0]}));case 2:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}()},created:function(){this.getData()}},E=L,k=Object(h["a"])(E,n,a,!1,null,null,null);r["default"]=k.exports}}]);
//# sourceMappingURL=chunk-84db87b4.0063652e.js.map