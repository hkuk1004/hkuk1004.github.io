"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[935],{43907:(n,e,t)=>{t.d(e,{A:()=>r});var i,a=t(57528),s=(t(65043),t(5464)),o=t(70579);const l=s.Ay.button(i||(i=(0,a.A)(["\n  background: ",";\n  color: ",";\n  border: ",";\n  border-radius: 8px;\n  display: block;\n  width: 100%;\n  height: ",";\n  box-shadow: 0px 0px 10px rgba(0, 28, 145, 0.2);\n  font-weight: 500;\n  font-size: 1em;\n  line-height: 1.25em;\n  letter-spacing: -0.07em;\n  text-align: center;\n\n  /* &:hover {\n    box-shadow: 0 80px 0 0 rgba(0, 0, 0, 0.25) inset,\n      0 -80px 0 0 rgba(0, 0, 0, 0.25) inset;\n  } */\n\n  &:active {\n    background: ",";\n\n  }\n"])),(n=>"basic"===n.type?"#6A8BFF":"#ffffff"),(n=>"basic"===n.type?"#ffffff":"#000000"),(n=>"basic"===n.type?"none":"1px solid #000000"),(n=>n.height),(n=>"basic"===n.type?"#021248":"#ffffff")),r=n=>{let{children:e,type:t,height:i,...a}=n;return(0,o.jsx)(l,{type:t,height:i,...a,children:e})}},25935:(n,e,t)=>{t.r(e),t.d(e,{default:()=>k});var i,a,s,o,l,r,c,d,p,f,h,u,g,x=t(57528),m=t(65043),v=t(73216),b=t(35475),w=(t(43907),t(5464)),I=t(86213),y=(t(93047),t(92412),t(85006)),A=t(30710),j=t(70579);const k=()=>{const n=(0,v.Zp)(),[e,t]=(0,b.ok)(),[i,a]=(0,m.useState)(""),[s,o]=(0,m.useState)(""),[l,r]=(0,m.useState)(null),[c,d]=(0,m.useState)(null),[p,f]=(0,m.useState)({}),[h,u]=(0,m.useState)(!0),g=e.get("id");(0,m.useEffect)((()=>{var n;null===(n=window.ReactNativeWebView)||void 0===n||n.postMessage(JSON.stringify(!0)),document.addEventListener("message",(n=>{try{const e=JSON.parse(n.data);e.loginData&&(a(e.loginData.id),o(e.loginData.jwt)),r(e.isApp),d(e.platform)}catch(e){console.log(e)}})),window.addEventListener("message",(n=>{try{const e=JSON.parse(n.data);e.loginData&&(a(e.loginData.id),o(e.loginData.jwt)),r(e.isApp),d(e.platform)}catch(e){console.log(e)}})),x()}),[]);const x=async()=>{u(!0),await(0,I.A)({method:"get",headers:{"Access-Control-Allow-Credentials":!0,"ngrok-skip-browser-warning":!0},url:"".concat("https://dltour.data-labs.co.kr/api","/insuranceGame/start?insuranceGameId=").concat(g)}).then((n=>{f(n.data.insuranceGame[0]),u(!1)})).catch((n=>{console.log(n)}))},w=async(e,t,a)=>{await(0,I.A)({method:"post",url:"".concat("https://dltour.data-labs.co.kr/api","/insuranceGame/saveResult"),headers:{Authorization:s},data:{insuranceGameId:e,insuranceNameId:t}}).then((e=>{n("/insurancegameselectresult",{state:{check:a,jwt:s,userId:i,isApp:l,platform:c,pathId:g,guest_name:e.data.guest_name}})})).catch((n=>{console.log(n)}))};return(0,j.jsx)(S,{children:h?(0,j.jsx)(O,{children:(0,j.jsx)(A.A,{color:"#25B1FA"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(z,{children:(0,j.jsx)(N,{children:(0,j.jsx)(G,{children:null===p||void 0===p?void 0:p.title})})}),(0,j.jsxs)(_,{children:[(0,j.jsxs)(C,{onClick:()=>w(p.insuranceGameId,p.insuranceInfo[0].insuranceNameId,[!0,!1]),children:[(0,j.jsx)(J,{src:null===p||void 0===p?void 0:p.insuranceInfo[0].insuranceImage}),(0,j.jsx)(E,{children:null===p||void 0===p?void 0:p.insuranceInfo[0].insurance})]}),(0,j.jsx)(F,{src:y}),(0,j.jsxs)(D,{onClick:()=>w(p.insuranceGameId,p.insuranceInfo[1].insuranceNameId,[!1,!0]),children:[(0,j.jsx)(J,{src:null===p||void 0===p?void 0:p.insuranceInfo[1].insuranceImage}),(0,j.jsx)(E,{children:null===p||void 0===p?void 0:p.insuranceInfo[1].insuranceName})]})]})]})})},S=w.I4.div(i||(i=(0,x.A)(["\n  vertical-align: middle;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n"]))),z=w.I4.div(a||(a=(0,x.A)(["\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 12.5vh;\n"]))),N=w.I4.div(s||(s=(0,x.A)(["\n  display: flex;\n"]))),G=(w.I4.div(o||(o=(0,x.A)(["\n  display: flex;\n"]))),w.I4.p(l||(l=(0,x.A)(["\n  color: #ffffff;\n  font-size: 20px;\n  display: flex;\n  line-height: 30px;\n  font-weight: 500;\n"])))),_=w.I4.div(r||(r=(0,x.A)(["\n  display: flex;\n  height: 87.5vh;\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n"]))),C=w.I4.div(c||(c=(0,x.A)(["\n  height: 43.75vh;\n  display: flex;\n  width: 100%;\n  background-color: yellow;\n  position: relative;\n"]))),D=w.I4.div(d||(d=(0,x.A)(["\n  height: 43.75vh;\n  display: flex;\n  width: 100%;\n  position: relative;\n  background-color: green;\n"]))),F=(w.I4.span(p||(p=(0,x.A)(["\n  display: flex;\n  font-size: 72px;\n  position: absolute;\n  font-weight: 500;\n  /* line-height: 101.36px; */\n  color: #ffffff;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%); //\ud83d\udc9b \uc815\uc911\uc559 \ubc30\uce58\n"]))),w.I4.img(f||(f=(0,x.A)(["\n  display: flex;\n  position: absolute;\n  width: 190px;\n  height: 190px;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%); //\ud83d\udc9b \uc815\uc911\uc559 \ubc30\uce58\n  pointer-events: none;\n"])))),E=w.I4.button(h||(h=(0,x.A)(["\n  display: flex;\n  background-color: #25b1fa;\n  border-radius: 8px;\n  /* width: 124px; */\n  height: 30px;\n  color: #f5f5f5;\n  /* font-weight: 500; */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  padding: 8px 16px 8px 16px;\n  z-index: 100;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  /* text-align: center; */\n  align-items: center;\n  justify-content: center;\n  line-height: 24px;\n"]))),J=w.I4.img(u||(u=(0,x.A)(["\n  width: 100%;\n  height: 100%;\n"]))),O=w.I4.div(g||(g=(0,x.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n"])))},93047:(n,e,t)=>{n.exports=t.p+"static/media/test_img01.0a8f72731cce4cf024d4.png"},92412:(n,e,t)=>{n.exports=t.p+"static/media/test_img02.484ea11410c50047e7f6.png"},85006:(n,e,t)=>{n.exports=t.p+"static/media/versus_image.2ea599975ddc21ee272a.png"}}]);
//# sourceMappingURL=935.6987bf66.chunk.js.map