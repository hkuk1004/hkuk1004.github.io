(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[914],{3294:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var i,o,r,a,c,s,d,p,l,u,f,m,x,h,g,b,w,v,y,A,Z,j,k,C,P,S,E,O,I,N,R=e(168),F=e(4165),J=e(3433),T=e(5861),z=e(9439),U=e(2791),D=e(7689),B=e(1087),Q=e(1049),M=e(2998),K=e(5867),L=e(6067),V=e(184),Y=(e(2299),e(816)),W=K.ZP.div(i||(i=(0,R.Z)(["\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: #ffffffb7;\n    z-index: 999;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),H=(K.ZP.div(o||(o=(0,R.Z)(["\n    font: 1rem 'Noto Sans KR';\n    text-align: center;\n"]))),e.p+"static/media/Spinner1.8ac523c9aaae2a17fcc1.gif"),G=e(9624),X=e(1243),q=(e(8029),e(4692)),_=function(){var t=(0,D.TH)().state,n=(0,B.lr)(),i=(0,z.Z)(n,2),o=i[0],r=(i[1],(0,D.s0)()),a=(0,U.useState)(!1),c=(0,z.Z)(a,2),s=c[0],d=c[1],p=(0,U.useState)(""),l=(0,z.Z)(p,2),u=l[0],f=l[1],m=(0,U.useState)(""),x=(0,z.Z)(m,2),h=x[0],g=x[1],b=(0,U.useState)(""),w=(0,z.Z)(b,2),v=w[0],y=w[1],A=(0,U.useState)(""),Z=(0,z.Z)(A,2),j=Z[0],k=Z[1],C=(0,U.useState)(""),P=(0,z.Z)(C,2),S=P[0],E=P[1],O=(0,U.useState)(""),I=(0,z.Z)(O,2),N=I[0],R=I[1],K=(0,U.useState)(""),_=(0,z.Z)(K,2),jt=_[0],kt=_[1],Ct=(0,U.useState)(""),Pt=(0,z.Z)(Ct,2),St=Pt[0],Et=Pt[1],Ot=(0,U.useState)(""),It=(0,z.Z)(Ot,2),Nt=It[0],Rt=It[1],Ft=(0,U.useState)(""),Jt=(0,z.Z)(Ft,2),Tt=Jt[0],zt=Jt[1],Ut=(0,U.useState)([]),Dt=(0,z.Z)(Ut,2),Bt=Dt[0],Qt=Dt[1],Mt=(0,U.useState)(3),Kt=(0,z.Z)(Mt,2),Lt=Kt[0],Vt=Kt[1],Yt=(0,U.useState)(!1),Wt=(0,z.Z)(Yt,2),Ht=Wt[0],Gt=Wt[1],Xt=o.get("number"),qt=(0,U.useState)([]),_t=(0,z.Z)(qt,2),$t=_t[0],tn=_t[1],nn=(0,U.useState)(""),en=(0,z.Z)(nn,2),on=en[0],rn=en[1];console.log(t);var an=(0,U.useState)(!1),cn=(0,z.Z)(an,2);cn[0],cn[1];(0,U.useEffect)((function(){var n;null===(n=window.ReactNativeWebView)||void 0===n||n.postMessage(JSON.stringify("isApp"));var i=function(){var n=(0,T.Z)((0,F.Z)().mark((function n(){return(0,F.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,(0,X.Z)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/result"),headers:{Authorization:null===t||void 0===t?void 0:t.jwt},data:{id:null===t||void 0===t?void 0:t.userId}}).then((function(t){f(t.data.mbti.mbti),g(e(31)("./"+t.data.mbti.mbti+".png")),y(t.data.mbti.nickName),k(t.data.mbti.comment),E(t.data.mbti.goodCombi),R(e(31)("./"+t.data.mbti.goodCombi+".png")),kt(t.data.goodCombiName),Rt(t.data.mbti.badCombi),Et(e(31)("./"+t.data.mbti.badCombi+".png")),zt(t.data.badCombiName),Qt(t.data.recommandPlace);var n=(0,J.Z)(t.data.recommandPlace).map((function(t){return t.bookMark}));tn(n),d(!1)})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var t=(0,T.Z)((0,F.Z)().mark((function t(){return(0,F.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,(0,X.Z)({method:"get",url:"".concat("https://dltour.data-labs.co.kr/api","/result/display?id=").concat(Xt)}).then((function(t){f(t.data.mbti.mbti),g(e(31)("./"+t.data.mbti.mbti+".png")),y(t.data.mbti.nickName),k(t.data.mbti.comment),E(t.data.mbti.goodCombi),R(e(31)("./"+t.data.mbti.goodCombi+".png")),kt(t.data.goodCombiName),Rt(t.data.mbti.badCombi),Et(e(31)("./"+t.data.mbti.badCombi+".png")),zt(t.data.badCombiName),Qt(t.data.recommandPlace);var n=(0,J.Z)(t.data.recommandPlace).map((function(t){return t.bookMark}));tn(n),d(!1)})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Xt?o():i(),document.addEventListener("message",(function(t){var n=JSON.parse(t.data);rn(n.isApp)})),window.addEventListener("message",(function(t){var n=JSON.parse(t.data);rn(n.isApp)}));var r=document.createElement("script");return r.src="https://developers.kakao.com/sdk/js/kakao.js",r.async=!0,document.body.appendChild(r),function(){return document.body.removeChild(r)}}),[]);var sn=function(){var n=(0,T.Z)((0,F.Z)().mark((function n(){var e,i,o;return(0,F.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,J.Z)(Bt),i=e.filter((function(t,n){return 0!==n})),o=i.map((function(t){return t.contentid})),n.next=5,(0,X.Z)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/result/share"),headers:{Authorization:null===t||void 0===t?void 0:t.jwt},data:{userId:null===t||void 0===t?void 0:t.userId,contentIdArr:o}}).then((function(t){if("isApp"===on){var n,e={name:"resultApp",id:t.data.id};null===(n=window.ReactNativeWebView)||void 0===n||n.postMessage(JSON.stringify(e))}else if(t.data.isPass&&window.Kakao){var i=window.Kakao;i.isInitialized()||i.init("69c873f1cf4e580ab99c761390d9777e"),i.Link.sendDefault({objectType:"feed",content:{title:"MBTI \uc54c\uc544\ubcf4\ub7ec \uac00\uc2e4\ub798\uc694?",description:"\uac1c\uc778 MBTI\uc5d0 \ub9de\ub294 \uc5ec\ud589\uc9c0\ub97c \ucd94\ucc9c\ud574\ub4dc\ub824\uc694 ~!",imageUrl:"https://k.kakaocdn.net/dn/d5Yeg6/btsl4nf8NsB/2u8CPaRGvgWx4rIkFdeDk0/kakaolink40_original.png",imageWidth:800,imageHeight:400,link:{mobileWebUrl:"".concat("https://hkuk1004.github.io","/result?number=").concat(t.data.id),webUrl:"".concat("https://hkuk1004.github.io","/result?number=").concat(t.data.id)}},buttons:[{title:"\uacb0\uacfc \ud655\uc778\ud558\uae30",link:{mobileWebUrl:"".concat("https://hkuk1004.github.io","/result?number=").concat(t.data.id),webUrl:"".concat("https://hkuk1004.github.io","/result?number=").concat(t.data.id)}}]})}})).catch((function(t){console.log(t)}));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),dn=function(){r("/question",{state:{userId:null===t||void 0===t?void 0:t.userId,jwt:null===t||void 0===t?void 0:t.jwt}})},pn=function(){var n=(0,T.Z)((0,F.Z)().mark((function n(){return(0,F.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Gt(!0),n.next=3,(0,X.Z)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/result/reload"),headers:{Authorization:null===t||void 0===t?void 0:t.jwt},data:{id:null===t||void 0===t?void 0:t.userId}}).then((function(t){Qt(t.data);var n=(0,J.Z)(t.data).map((function(t){return t.bookMark}));tn(n),console.log(n),Gt(!1)})).catch((function(t){console.log(t)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ln=function(){var n=(0,T.Z)((0,F.Z)().mark((function n(e,i,o){var r;return(0,F.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.stopPropagation(),r=(0,J.Z)($t),!window.confirm(r[i]?"\ubd81\ub9c8\ud06c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":"\ubd81\ub9c8\ud06c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){n.next=7;break}return n.next=5,(0,X.Z)({method:"post",headers:{Authorization:null===t||void 0===t?void 0:t.jwt},url:"".concat("https://dltour.data-labs.co.kr/api","/save"),data:{contentid:o}}).then((function(t){t.data.boolean?(r[i]=!r[i],tn(r)):alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc5ec\ud589\ub300\ub85c App\uc744 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.")})).catch((function(t){alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc5ec\ud589\ub300\ub85c App\uc744 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.")}));case 5:n.next=8;break;case 7:return n.abrupt("return");case 8:case"end":return n.stop()}}),n)})));return function(t,e,i){return n.apply(this,arguments)}}();return(0,V.jsxs)(Q.Z,{children:[(0,V.jsx)(M.Z,{}),s?(0,V.jsx)("div",{style:{marginTop:150},children:(0,V.jsx)(W,{children:(0,V.jsx)("img",{src:H,alt:"Loading"})})}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(tt,{children:(0,V.jsx)($,{children:u})}),(0,V.jsx)(nt,{src:h,alt:"MBTI animal Image"}),(0,V.jsx)(et,{children:v}),(0,V.jsx)(it,{children:j}),(0,V.jsxs)(ot,{children:[u,"\uc5d0 \ub9de\ub294 \uc5ec\ud589\uc9c0\ub97c \uc800\uc7a5 ",(0,V.jsx)("br",{})," \uc5ec\ud589\uc744 \ub5a0\ub098\ubd10\uc694~"]}),Ht?(0,V.jsx)(W,{children:(0,V.jsx)("img",{src:H,alt:"Loading"})}):(0,V.jsx)(rt,{children:Bt.map((function(t,n){if(n<Lt)return console.log(t),(0,V.jsxs)(at,{onClick:function(){return n=t.contentid,e=t.contenttypeid,void r("/placedetail/".concat(n,"/").concat(e));var n,e},children:[(0,V.jsx)(ct,{children:null===t||void 0===t?void 0:t.describe}),(0,V.jsxs)(dt,{children:[(0,V.jsx)(pt,{src:null===t||void 0===t?void 0:t.firstimage2}),(0,V.jsx)(lt,{src:$t[n]?q:L,onClick:function(e){return ln(e,n,t.contentid)}})]}),(0,V.jsx)(st,{children:null===t||void 0===t?void 0:t.title})]},n)}))}),9!==Lt?(0,V.jsxs)(Y.Z,{type:"basic",height:"58px",onClick:function(){Vt(Bt.length)},style:{margin:"0.5em 0 2.5rem 0"},children:[(0,V.jsx)(G.Z,{type:"light",children:"\ucd94\ucc9c \uc5ec\ud589\uc9c0"})," ",(0,V.jsx)(G.Z,{type:"bold",children:"\ub354\ubcf4\uae30"})]}):(0,V.jsxs)(Y.Z,{type:"basic",height:"58px",onClick:function(){return pn()},style:{margin:"0.5em 0 2.5rem 0",display:Ht?"none":"initial"},children:[(0,V.jsx)(G.Z,{type:"light",children:"\ucd94\ucc9c \uc5ec\ud589\uc9c0"})," ",(0,V.jsx)(G.Z,{type:"bold",children:"\uc0c8\ub85c\uace0\uce68"})]}),(0,V.jsxs)(ut,{children:[(0,V.jsx)(ft,{children:(0,V.jsxs)(mt,{children:[(0,V.jsx)(xt,{children:"\uc798 \ub9de\ub294 \uad81\ud569"}),(0,V.jsx)(ht,{children:S}),(0,V.jsx)(wt,{src:N,alt:"GoodCompt"}),(0,V.jsx)(bt,{children:jt})]})}),(0,V.jsx)(ft,{children:(0,V.jsxs)(mt,{children:[(0,V.jsx)(xt,{children:"\uc548 \ub9de\ub294 \uad81\ud569"}),(0,V.jsx)(gt,{children:Nt}),(0,V.jsx)(wt,{src:St,alt:"BadCompt"}),(0,V.jsx)(bt,{children:Tt})]})})]}),(0,V.jsx)(vt,{children:Xt?(0,V.jsx)(Zt,{onClick:dn,children:"\ub098\ub3c4 \ud574\ubcfc\ub798!"}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(yt,{onClick:function(){return sn()},children:"\uacf5\uc720\ud558\uae30"}),(0,V.jsx)(At,{onClick:dn,children:"\ud760...\ub2e4\uc2dc \ud574\ubcfc\ub798"})]})})]})]})},$=K.ZP.span(r||(r=(0,R.Z)(["\n  color: #6a8bff;\n  font-weight: bold;\n\n  @media (max-width: 768px) {\n    font-size: 22px;\n  }\n"]))),tt=K.ZP.div(a||(a=(0,R.Z)(["\n  line-height: 100%;\n  margin: 1em 0 0 0;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    font-weight: lighter;\n    font-size: 22px;\n  }\n"]))),nt=K.ZP.img(c||(c=(0,R.Z)(["\n  width: 60%;\n  height: 60%;\n  margin: auto;\n  padding-top: 5%;\n  object-fit: contain;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    height: auto;\n    padding-top: 3%;\n  }\n"]))),et=(K.ZP.div(s||(s=(0,R.Z)(["\n  line-height: 100%;\n  margin: 0.5em 0 0 0;\n  text-align: center;\n  color: #6a8bff;\n\n  @media (max-width: 768px) {\n    font-size: 16px;\n  }\n"]))),K.ZP.div(d||(d=(0,R.Z)(["\n  font-weight: bold;\n  line-height: 100%;\n  text-align: center;\n  margin: 0.5em 0 0 0;\n\n  @media (max-width: 768px) {\n    font-size: 22px;\n  }\n"])))),it=K.ZP.div(p||(p=(0,R.Z)(["\n  line-height: 100%;\n  text-align: center;\n  margin: 1.25em 0 0 0;\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),ot=K.ZP.div(l||(l=(0,R.Z)(["\n  font-weight: bold;\n  text-align: center;\n  line-height: 100%;\n  font-size: 18px;\n  margin: 1.25em 0 1em 0;\n\n  @media (max-width: 768px) {\n    font-size: 22px;\n  }\n"]))),rt=K.ZP.div(u||(u=(0,R.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n\n  /* @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  } */\n"]))),at=(K.ZP.div(f||(f=(0,R.Z)(["\n  margin-bottom: 10px;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),K.ZP.div(m||(m=(0,R.Z)(["\n  position: relative;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  width: 32%;\n  cursor: pointer;\n"])))),ct=(K.ZP.img(x||(x=(0,R.Z)(["\n  position: absolute;\n  top: 30px;\n  right: 6px;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  z-index: 1;\n  filter: ",";\n"])),(function(t){return t.active?"none":"invert(100%)"})),K.ZP.div(h||(h=(0,R.Z)(["\n  width: 100px;\n  text-align: center;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-size: ",";\n  color: #6a8bff;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"])),(function(t){return t.fontSize}))),st=K.ZP.div(g||(g=(0,R.Z)(["\n  width: 100px;\n  text-align: center;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: bold;\n  height: 30px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  word-break: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"]))),dt=K.ZP.div(b||(b=(0,R.Z)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 8px;\n  position: relative;\n"]))),pt=K.ZP.img(w||(w=(0,R.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n"]))),lt=K.ZP.img(v||(v=(0,R.Z)(["\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  top: 6px;\n  right: 6px;\n"]))),ut=K.ZP.div(y||(y=(0,R.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: -10px;\n  padding-left: 22px;\n  padding-right: 22px;\n"]))),ft=K.ZP.div(A||(A=(0,R.Z)(["\n  flex-basis: 45%;\n  margin-bottom: 20px;\n"]))),mt=K.ZP.div(Z||(Z=(0,R.Z)(["\n  position: relative;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n"]))),xt=K.ZP.div(j||(j=(0,R.Z)(["\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-weight: bold;\n"]))),ht=K.ZP.div(k||(k=(0,R.Z)(["\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: #6a8bff;\n"]))),gt=K.ZP.div(C||(C=(0,R.Z)(["\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 10px;\n  font-weight: 500;\n  color: #ff6a6a;\n"]))),bt=K.ZP.div(P||(P=(0,R.Z)(["\n  text-align: center;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: -8px;\n"]))),wt=K.ZP.img(S||(S=(0,R.Z)(["\n  width: 100%;\n  height: auto;\n"]))),vt=K.ZP.div(E||(E=(0,R.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 100px;\n"]))),yt=K.ZP.button(O||(O=(0,R.Z)(["\n  width: 47.5%;\n  height: 58px;\n  cursor: pointer;\n  text-align: center;\n  background: #6a8bff;\n  color: #fff;\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 20px;\n"]))),At=K.ZP.button(I||(I=(0,R.Z)(["\n  width: 47.5%;\n  height: 58px;\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n  color: #000;\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  border: 1px solid #000;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n"]))),Zt=K.ZP.button(N||(N=(0,R.Z)(["\n  width: 100%;\n  height: 58px;\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n  color: #000;\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  border: 1px solid #000;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n"])))},6998:function(t,n,e){"use strict";var i=e(2458),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,n){var e,r,a,c,s,d,p=!1;n||(n={}),e=n.debug||!1;try{if(a=i(),c=document.createRange(),s=document.getSelection(),(d=document.createElement("span")).textContent=t,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(i){if(i.stopPropagation(),n.format)if(i.preventDefault(),"undefined"===typeof i.clipboardData){e&&console.warn("unable to use e.clipboardData"),e&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[n.format]||o.default;window.clipboardData.setData(r,t)}else i.clipboardData.clearData(),i.clipboardData.setData(n.format,t);n.onCopy&&(i.preventDefault(),n.onCopy(i.clipboardData))})),document.body.appendChild(d),c.selectNodeContents(d),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(l){e&&console.error("unable to copy using execCommand: ",l),e&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",t),n.onCopy&&n.onCopy(window.clipboardData),p=!0}catch(l){e&&console.error("unable to copy using clipboardData: ",l),e&&console.error("falling back to prompt"),r=function(t){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,t)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),d&&document.body.removeChild(d),a()}return p}},568:function(t,n,e){"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var o=c(e(2791)),r=c(e(6998)),a=["text","onCopy","options","children"];function c(t){return t&&t.__esModule?t:{default:t}}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){h(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function l(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,n){return u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},u(t,n)}function f(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=x(t);if(n){var r=x(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return function(t,n){if(n&&("object"===i(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,e)}}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&u(t,n)}(s,t);var n,e,i,c=f(s);function s(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s);for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return h(m(t=c.call.apply(c,[this].concat(e))),"onClick",(function(n){var e=t.props,i=e.text,a=e.onCopy,c=e.children,s=e.options,d=o.default.Children.only(c),p=(0,r.default)(i,s);a&&a(i,p),d&&d.props&&"function"===typeof d.props.onClick&&d.props.onClick(n)})),t}return n=s,(e=[{key:"render",value:function(){var t=this.props,n=(t.text,t.onCopy,t.options,t.children),e=p(t,a),i=o.default.Children.only(n);return o.default.cloneElement(i,d(d({},e),{},{onClick:this.onClick}))}}])&&l(n.prototype,e),i&&l(n,i),Object.defineProperty(n,"prototype",{writable:!1}),s}(o.default.PureComponent);n.CopyToClipboard=g,h(g,"defaultProps",{onCopy:void 0,options:void 0})},8029:function(t,n,e){"use strict";var i=e(568).CopyToClipboard;i.CopyToClipboard=i,t.exports=i},2458:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var n=document.activeElement,e=[],i=0;i<t.rangeCount;i++)e.push(t.getRangeAt(i));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||e.forEach((function(n){t.addRange(n)})),n&&n.focus()}}},31:function(t,n,e){var i={"./ENFJ.png":2189,"./ENFP.png":9076,"./ENTJ.png":4868,"./ENTP.png":5104,"./ESFJ.png":9010,"./ESFP.png":1555,"./ESTJ.png":1240,"./ESTP.png":993,"./INFJ.png":1231,"./INFP.png":7304,"./INTJ.png":634,"./INTP.png":5127,"./ISFJ.png":1587,"./ISFP.png":3123,"./ISTJ.png":6056,"./ISTP.png":6287};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id=31},6067:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHxSURBVHgB7Zk9LwRBGMf/RARRIIgGe4hCotGpfAHCJ9BovSQ0FHLxAeSCaCSaqzQSpUZEpdEoCAkh4hKEEIVovDyT3Y3ZvRc7e7c7O8nzS/7JZXfmmfnldvf2ZgCGYZgQVEGNXsoipQbx8k7JUG4REceUH005gALVUKMT+uhRaVzOJbVH+US01FPGEQP3+Ls0mhA9HdJ4NyodVS9FY2Ax02Ax02Ax02Ax02Ax02Ax02Ax02Ax02Ax04hrfbCRMkd5oWQpH0gYYRdzNqV+Gwr9Qi/mqBJGLI38xc90wL6JFSsk5WY+QP9Eis3CK3JBufQdm/qnRuLERuEVEJMSy+PdlDPp+DdlrESdRIkNwX7que3uKJZ0Xnx+lM6LnZTBIrUSIya2mXJSm2dKqkA7If8ktcsVaZcIMcsZ3D3/RhkuUWsE9rclT9zytdEuZlGu4L2vJgLUm6R8SX3E/dcsndcqVks5hVdqGsFZ8vU9cWoKtInVwd4nkye2DHVWfDX2nePaxLK+CWUQnlVfrXVoElvzTWQL5SE2+nd8NbehQUzOESrzT6GBclhkjNjFziltqBztyH/Cxi4m3v26UXla4f1NjFVMDJRCdPTDfnNxx7tGhLjX/wNlANHTR3l1xtxFhHRRFmC/E8aFRZmhtIBhGCZqfgH80A6jWA8LvgAAAABJRU5ErkJggg=="},4692:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMNSURBVHgB7dg7axRRFMDxc3Z2ZicBEa20zRew0EawEYMJccnORElhFZEU8dVYKSqJ+PgCImKZRiFNRAQhKayslIDxsezOLCsBwSRqlAjJJnOPdwUhiM8zrxtyfsUyzNxi+c/lztwBEEIIIYTIFUICuqZou9Va32MpKIDpOoqz1W78ADHFDtc1udJnYWFCH3bCJoCIH5WKhgLPfQgxxJ4hxYJ1FTZJtDYi2omFwgWIKVa4vc/IJoJdsNkQ7IaYzF+TDCXhmCQck4RjknBMEo5JwjFJOCYJxyThmCQck4RjknBMEo5JwjFJOCYJxyThmCQck4RjknBMEo5JwjFJOCYJxyThmCQck4RjknBMEo5JwjFJOCYJxyThmCQck4RjknBMxoZDoAkEfACGMjMcwbTrOidaankIAZ6CgYwLp0PNkrN6/EUPfm36O5aiyPb17AvBMKaFazpkHwn6ti38OBEO4LyyqUcnnQeDmBRu3lL2wZcezv18IehzQ7DW9+s17x0YwpBwuEgAvVUfm78bUS93NIpAZX3YAgOYEG5JhxsKKs7M3wa+/j4Gy3odXIac5R5OL/wj9Urx0b+Or1fsqQjhPOQs13BIcLpWKd2H/xT2O3dB0TXIUW7hSNFYzXNuA1PdL10mohuQk7zC3Qn80ijEFLScK/qhcgtykHk4vaaN1yvOCCRhEKOg3z6n5+89yFim4Qjpsb3qDEOSEGlNOaf0HXkCGcoy3ExnyTn2ahATfw9r+rgUrdiejteAjGQVrqkiu7e9/4SUNAbxsxVFhzCjeFmEm2tvpdp7TkhZ1e/QN0gd1ofvIWUph8OFKFLdf9pKJS3w3VCBOqD3tV8gRSmGw0XLAq8x4NYgY2HFDYjgKKS4r00rHKHC4WrZzu0jZN2zpxUVkn2Cb5BKOCJ1puYXJyFnoVccV0SXfnFpHWKKFe75PlzTL7RvN54joNHAc9lbqaSFXuk6Krq58Zz+ujIHMcWfcWt0Uv/W9Z/5pCOOBZXSGBim5pcutvfG+oGxrKu9UUhnQQghhBBCbEnfAL9N4zOk2cW9AAAAAElFTkSuQmCC"},2189:function(t,n,e){"use strict";t.exports=e.p+"static/media/ENFJ.feb34fd62f897e4141b1.png"},9076:function(t,n,e){"use strict";t.exports=e.p+"static/media/ENFP.b66b3c0ceedbd3d44f7d.png"},4868:function(t,n,e){"use strict";t.exports=e.p+"static/media/ENTJ.3adfbc8571bb2f1a26dd.png"},5104:function(t,n,e){"use strict";t.exports=e.p+"static/media/ENTP.d8a218982858eba0ea87.png"},9010:function(t,n,e){"use strict";t.exports=e.p+"static/media/ESFJ.1e7b23182ab393af5d24.png"},1555:function(t,n,e){"use strict";t.exports=e.p+"static/media/ESFP.6b1c5f914c62d888bc05.png"},1240:function(t,n,e){"use strict";t.exports=e.p+"static/media/ESTJ.ee6404ed431b0ddedd78.png"},993:function(t,n,e){"use strict";t.exports=e.p+"static/media/ESTP.26a766c419996779c822.png"},1231:function(t,n,e){"use strict";t.exports=e.p+"static/media/INFJ.989c9fd823deefaa6b26.png"},7304:function(t,n,e){"use strict";t.exports=e.p+"static/media/INFP.3ecd6d4d792d73a6d1f8.png"},634:function(t,n,e){"use strict";t.exports=e.p+"static/media/INTJ.811976162e33d19970e9.png"},5127:function(t,n,e){"use strict";t.exports=e.p+"static/media/INTP.dce6d20e0d693f668419.png"},1587:function(t,n,e){"use strict";t.exports=e.p+"static/media/ISFJ.7ea5fd8181c6a81f5cdc.png"},3123:function(t,n,e){"use strict";t.exports=e.p+"static/media/ISFP.bcbc9ce4bf32e6bfcc10.png"},6056:function(t,n,e){"use strict";t.exports=e.p+"static/media/ISTJ.d34c90668535ee29da45.png"},6287:function(t,n,e){"use strict";t.exports=e.p+"static/media/ISTP.4741d0888352e5dc3160.png"}}]);
//# sourceMappingURL=914.1db48bbb.chunk.js.map