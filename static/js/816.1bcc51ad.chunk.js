/*! For license information please see 816.1bcc51ad.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[816],{4816:function(t,e,n){n.a(t,(async function(t,c){try{n.r(e);var a=n(4165),r=n(5861),o=n(7762),i=n(1243),A=(n(2791),n(3114)),u=n(184),p="eRLOwH19Z%2FYOTC00zcefvpxvwseGUrgSsocmGQ0SiDLenLDTZtVZRYaMYwScpSNCHiQBLDrbYbFFDkyqu%2FdjcQ%3D%3D",s="https://apis.data.go.kr/B551011/KorService1",d=2e4,y=Object.values(A),l=function(t){return Math.floor(Math.random()*t.length)},f=function(t){var e,n=t.contentTypeId,c=t.cat1,a=t.cat2,r=t.cat3;return 3===c.length&&5===a.length&&9===r.length?e="".concat(s,"/areaBasedList1?serviceKey=").concat(p,"&pageNo=").concat(1,"&numOfRows=").concat(d,"&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=").concat(n,"&cat1=").concat(c,"&cat2=").concat(a,"&cat3=").concat(r,"&_type=json"):3===c.length&&5===a.length&&9!==r.length?e="".concat(s,"/areaBasedList1?serviceKey=").concat(p,"&pageNo=").concat(1,"&numOfRows=").concat(d,"&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=").concat(n,"&cat1=").concat(c,"&cat2=").concat(a,"&_type=json"):3===c.length&&5!==a.length&&9!==r.length?(console.log(1),e="".concat(s,"/areaBasedList1?serviceKey=").concat(p,"&pageNo=").concat(1,"&numOfRows=").concat(d,"&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=").concat(n,"&cat1=").concat(c,"&_type=json")):3!==c.length&&5!==a.length&&9!==r.length&&(console.log(3),e="".concat(s,"/areaBasedList1?serviceKey=").concat(p,"&pageNo=").concat(1,"&numOfRows=").concat(d,"&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=").concat(n,"&_type=json")),e}(function(t){var e,n=[],c=(0,o.Z)(t);try{for(c.s();!(e=c.n()).done;)for(var a=e.value,r=0,i=y;r<i.length;r++){var A=i[r];if(a.QNum===A.QNum){var u=l(A.AnsList[a.AnsIdx]);n.push({QNum:a.QNum,Ans:A.AnsList[a.AnsIdx][u]});break}}}catch(p){c.e(p)}finally{c.f()}return n}([{QNum:1,AnsIdx:0},{QNum:2,AnsIdx:0},{QNum:3,AnsIdx:0},{QNum:4,AnsIdx:0},{QNum:5,AnsIdx:1},{QNum:6,AnsIdx:0},{QNum:7,AnsIdx:0},{QNum:8,AnsIdx:0},{QNum:9,AnsIdx:0}])[1].Ans),h=function t(e){var n=e[l(e)];if(0!==n.firstimage.length)return n;t(e)},v=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(e){var n,c,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.get(e);case 3:return n=t.sent,c=n.data.response.body.items.item,r=h(c),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log("\uc5d0\ub7ec",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),T=await v(f);console.log(T);e.default=function(){return(0,u.jsx)("div",{children:"New"})},c()}catch(I){c(I)}}),1)},5861:function(t,e,n){function c(t,e,n,c,a,r,o){try{var i=t[r](o),A=i.value}catch(u){return void n(u)}i.done?e(A):Promise.resolve(A).then(c,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){c(o,a,r,i,A,"next",t)}function A(t){c(o,a,r,i,A,"throw",t)}i(void 0)}))}}n.d(e,{Z:function(){return a}})},4165:function(t,e,n){n.d(e,{Z:function(){return a}});var c=n(1002);function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",A=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(_){p=function(t,e,n){return t[e]=n}}function s(t,e,n,c){var a=e&&e.prototype instanceof l?e:l,o=Object.create(a.prototype),i=new E(c||[]);return r(o,"_invoke",{value:L(t,n,i)}),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var y={};function l(){}function f(){}function h(){}var v={};p(v,i,(function(){return this}));var T=Object.getPrototypeOf,I=T&&T(T(O([])));I&&I!==e&&n.call(I,i)&&(v=I);var g=h.prototype=l.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function a(r,o,i,A){var u=d(t[r],t,o);if("throw"!==u.type){var p=u.arg,s=p.value;return s&&"object"==(0,c.Z)(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){a("next",t,i,A)}),(function(t){a("throw",t,i,A)})):e.resolve(s).then((function(t){p.value=t,i(p)}),(function(t){return a("throw",t,i,A)}))}A(u.arg)}var o;r(this,"_invoke",{value:function(t,n){function c(){return new e((function(e,c){a(t,n,e,c)}))}return o=o?o.then(c,c):c()}})}function L(t,e,n){var c="suspendedStart";return function(a,r){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===a)throw r;return Q()}for(n.method=a,n.arg=r;;){var o=n.delegate;if(o){var i=b(o,n);if(i){if(i===y)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===c)throw c="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);c="executing";var A=d(t,e,n);if("normal"===A.type){if(c=n.done?"completed":"suspendedYield",A.arg===y)continue;return{value:A.arg,done:n.done}}"throw"===A.type&&(c="completed",n.method="throw",n.arg=A.arg)}}}function b(t,e){var n=e.method,c=t.iterator[n];if(void 0===c)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(c,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,y):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var c=-1,a=function e(){for(;++c<t.length;)if(n.call(t,c))return e.value=t[c],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:Q}}function Q(){return{value:void 0,done:!0}}return f.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=p(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,p(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(w.prototype),p(w.prototype,A,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,c,a,r){void 0===r&&(r=Promise);var o=new w(s(e,n,c,a),r);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},m(g),p(g,u,"Generator"),p(g,i,(function(){return this})),p(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var c in e)n.push(c);return n.reverse(),function t(){for(;n.length;){var c=n.pop();if(c in e)return t.value=c,t.done=!1,t}return t.done=!0,t}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function c(n,c){return o.type="throw",o.arg=t,e.next=n,c&&(e.method="next",e.arg=void 0),!!c}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],o=r.completion;if("root"===r.tryLoc)return c("end");if(r.tryLoc<=this.prev){var i=n.call(r,"catchLoc"),A=n.call(r,"finallyLoc");if(i&&A){if(this.prev<r.catchLoc)return c(r.catchLoc,!0);if(this.prev<r.finallyLoc)return c(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return c(r.catchLoc,!0)}else{if(!A)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return c(r.finallyLoc)}}}},abrupt:function(t,e){for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var c=n.completion;if("throw"===c.type){var a=c.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),y}},t}},3114:function(t){t.exports=JSON.parse('{"0":{"QNum":5,"AnsList":[[{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01010400"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01010700"}],[{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01010900"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011800"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011700"}],[{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011100"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011200"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011300"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011400"},{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01011600"}],[{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060100"},{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060200"},{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060300"},{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060500"},{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060600"}]]},"1":{"QNum":6,"AnsList":[[{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020200"},{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020300"},{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020400"},{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020500"},{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020600"},{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020800"}],[{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020100"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020200"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020300"}],[{"contentTypeId":"32","cat1":"B02","cat2":"B0201","cat3":"B02010100"}]]},"2":{"QNum":7,"AnsList":[[{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060500"}],[{"contentTypeId":"15","cat1":"A02","cat2":"A0208","cat3":""}],[{"contentTypeId":"15","cat1":"A02","cat2":"A0207","cat3":""}],[{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020100"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020200"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020300"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020700"}]]},"3":{"QNum":8,"AnsList":[[{"contentTypeId":"14","cat1":"A02","cat2":"A0206","cat3":"A02060100"}],[{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020300"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020400"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020500"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020600"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020700"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020800"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03020900"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021000"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021100"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021200"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021300"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021400"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021600"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021700"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03021800"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03022000"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03022100"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03022200"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03022300"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03022400"},{"contentTypeId":"28","cat1":"A03","cat2":"A0302","cat3":"A03022700"}],[{"contentTypeId":"28","cat1":"A03","cat2":"A0303","cat3":""},{"contentTypeId":"28","cat1":"A03","cat2":"A0304","cat3":""}],[{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010100"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010200"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010300"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010400"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010500"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010600"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010700"},{"contentTypeId":"38","cat1":"A04","cat2":"A0401","cat3":"A04010900"}]]},"4":{"QNum":9,"AnsList":[[{"contentTypeId":"12","cat1":"A02","cat2":"A0201","cat3":""}],[{"contentTypeId":"12","cat1":"A02","cat2":"A0205","cat3":"A02050200"},{"contentTypeId":"12","cat1":"A02","cat2":"A0205","cat3":"A02050600"}],[{"contentTypeId":"12","cat1":"A01","cat2":"A0102","cat3":""}],[{"contentTypeId":"12","cat1":"A01","cat2":"A0101","cat3":"A01010600"},{"contentTypeId":"32","cat1":"B02","cat2":"B0201","cat3":"B02010700"}]]},"5":{"QNum":10,"AnsList":[[{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020100"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020200"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020300"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020700"}],[{"contentTypeId":"32","cat1":"B02","cat2":"B0201","cat3":"B02011600"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020900"},{"contentTypeId":"12","cat1":"A02","cat2":"A0203","cat3":""}],[{"contentTypeId":"12","cat1":"A02","cat2":"A0203","cat3":""},{"contentTypeId":"12","cat1":"A02","cat2":"A0202","cat3":"A02020600"}],[{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020700"},{"contentTypeId":"39","cat1":"A05","cat2":"A0502","cat3":"A05020900"},{"contentTypeId":"12","cat1":"A02","cat2":"A0203","cat3":""}]]}}')}}]);
//# sourceMappingURL=816.1bcc51ad.chunk.js.map