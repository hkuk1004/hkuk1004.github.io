"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[527],{43907:(n,e,t)=>{t.d(e,{A:()=>c});var a,i=t(57528),l=(t(65043),t(5464)),o=t(70579);const s=l.Ay.button(a||(a=(0,i.A)(["\n  background: ",";\n  color: ",";\n  border: ",";\n  border-radius: 8px;\n  display: block;\n  width: 100%;\n  height: ",";\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  font-weight: 500;\n  font-size: 1em;\n  line-height: 1.25em;\n  letter-spacing: -0.07em;\n  text-align: center;\n\n  /* &:hover {\n    box-shadow: 0 80px 0 0 rgba(0, 0, 0, 0.25) inset,\n      0 -80px 0 0 rgba(0, 0, 0, 0.25) inset;\n  } */\n\n  &:active {\n    background: ",";\n\n  }\n"])),(n=>"basic"===n.type?"#6A8BFF":"#ffffff"),(n=>"basic"===n.type?"#ffffff":"#000000"),(n=>"basic"===n.type?"none":"1px solid #000000"),(n=>n.height),(n=>"basic"===n.type?"#021248":"#ffffff")),c=n=>{let{children:e,type:t,height:a,...i}=n;return(0,o.jsx)(s,{type:t,height:a,...i,children:e})}},9527:(n,e,t)=>{t.r(e),t.d(e,{default:()=>k});var a,i,l,o,s,c,d,r,p,f,h,g,x,b=t(57528),u=t(65043),m=t(73216),v=t(35475),w=(t(43907),t(5464)),I=t(86213),y=(t(93047),t(92412),t(85006)),A=t(30710),j=t(70579);const k=()=>{const n=(0,m.Zp)(),[e,t]=(0,v.ok)(),[a,i]=(0,u.useState)(""),[l,o]=(0,u.useState)(""),[s,c]=(0,u.useState)(null),[d,r]=(0,u.useState)(null),[p,f]=(0,u.useState)({}),[h,g]=(0,u.useState)(!0),x=e.get("id");(0,u.useEffect)((()=>{var n;null===(n=window.ReactNativeWebView)||void 0===n||n.postMessage(JSON.stringify(!0)),document.addEventListener("message",(n=>{try{const e=JSON.parse(n.data);e.loginData&&(i(e.loginData.id),o(e.loginData.jwt)),c(e.isApp),r(e.platform)}catch(e){console.log(e)}})),window.addEventListener("message",(n=>{try{const e=JSON.parse(n.data);e.loginData&&(i(e.loginData.id),o(e.loginData.jwt)),c(e.isApp),r(e.platform)}catch(e){console.log(e)}})),b()}),[]);const b=async()=>{g(!0),await(0,I.A)({method:"get",headers:{"Access-Control-Allow-Credentials":!0,"ngrok-skip-browser-warning":!0},url:"".concat("https://dltour.data-labs.co.kr/api","/balancegame/start?balanceGameId=").concat(x)}).then((n=>{f(n.data.balanceGame[0]),g(!1)})).catch((n=>{console.log(n)}))},w=async(e,t,i)=>{await(0,I.A)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/balancegame/saveResult1"),headers:{Authorization:l},data:{balanceGameId:e,balanceNameId:t}}).then((e=>{n("/balancegameselectresult",{state:{check:i,jwt:l,userId:a,isApp:s,platform:d,pathId:x,guest_name:e.data.guest_name}})})).catch((n=>{console.log(n)}))};return(0,j.jsx)(N,{children:h?(0,j.jsx)(O,{children:(0,j.jsx)(A.A,{color:"#25B1FA"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S,{children:(0,j.jsx)(z,{children:(0,j.jsx)(_,{children:null===p||void 0===p?void 0:p.title})})}),(0,j.jsxs)(C,{children:[(0,j.jsxs)(D,{onClick:()=>w(p.balanceGameId,p.balanceInfo[0].balanceNameId,[!0,!1]),children:[(0,j.jsx)(J,{src:null===p||void 0===p?void 0:p.balanceInfo[0].balanceImage}),(0,j.jsx)(E,{children:null===p||void 0===p?void 0:p.balanceInfo[0].balanceName})]}),(0,j.jsx)(F,{src:y}),(0,j.jsxs)(G,{onClick:()=>w(p.balanceGameId,p.balanceInfo[1].balanceNameId,[!1,!0]),children:[(0,j.jsx)(J,{src:null===p||void 0===p?void 0:p.balanceInfo[1].balanceImage}),(0,j.jsx)(E,{children:null===p||void 0===p?void 0:p.balanceInfo[1].balanceName})]})]})]})})},N=w.I4.div(a||(a=(0,b.A)(["\n  vertical-align: middle;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n"]))),S=w.I4.div(i||(i=(0,b.A)(["\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 12.5vh;\n"]))),z=w.I4.div(l||(l=(0,b.A)(["\n  display: flex;\n"]))),_=(w.I4.div(o||(o=(0,b.A)(["\n  display: flex;\n"]))),w.I4.p(s||(s=(0,b.A)(["\n  color: #ffffff;\n  font-size: 20px;\n  display: flex;\n  line-height: 30px;\n  font-weight: 500;\n"])))),C=w.I4.div(c||(c=(0,b.A)(["\n  display: flex;\n  height: 87.5vh;\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n"]))),D=w.I4.div(d||(d=(0,b.A)(["\n  height: 43.75vh;\n  display: flex;\n  width: 100%;\n  background-color: yellow;\n  position: relative;\n"]))),G=w.I4.div(r||(r=(0,b.A)(["\n  height: 43.75vh;\n  display: flex;\n  width: 100%;\n  position: relative;\n  background-color: green;\n"]))),F=(w.I4.span(p||(p=(0,b.A)(["\n  display: flex;\n  font-size: 72px;\n  position: absolute;\n  font-weight: 500;\n  /* line-height: 101.36px; */\n  color: #ffffff;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%); //\ud83d\udc9b \uc815\uc911\uc559 \ubc30\uce58\n"]))),w.I4.img(f||(f=(0,b.A)(["\n  display: flex;\n  position: absolute;\n  width: 190px;\n  height: 190px;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%); //\ud83d\udc9b \uc815\uc911\uc559 \ubc30\uce58\n  pointer-events: none;\n"])))),E=w.I4.button(h||(h=(0,b.A)(["\n  display: flex;\n  background-color: #25b1fa;\n  border-radius: 8px;\n  /* width: 124px; */\n  height: 30px;\n  color: #f5f5f5;\n  /* font-weight: 500; */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 8px 16px 8px 16px;\n  z-index: 100;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  /* text-align: center; */\n  align-items: center;\n  justify-content: center;\n  line-height: 24px;\n"]))),J=w.I4.img(g||(g=(0,b.A)(["\n  width: 100%;\n  height: 100%;\n"]))),O=w.I4.div(x||(x=(0,b.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n"])))},93047:(n,e,t)=>{n.exports=t.p+"static/media/test_img01.0a8f72731cce4cf024d4.png"},92412:(n,e,t)=>{n.exports=t.p+"static/media/test_img02.484ea11410c50047e7f6.png"},85006:(n,e,t)=>{n.exports=t.p+"static/media/versus_image.2ea599975ddc21ee272a.png"}}]);
//# sourceMappingURL=527.6151abc5.chunk.js.map