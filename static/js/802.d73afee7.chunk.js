"use strict";(self.webpackChunktour_mbti=self.webpackChunktour_mbti||[]).push([[802],{4291:function(n,e,i){i.r(e),i.d(e,{default:function(){return L}});var t,a,o,r,d,l,s,p,f,c,u,x,h=i(168),m=i(3433),g=i(9439),v=i(2791),w=i(5867),y=i.p+"static/media/marker.f0f4c4815deee63e7805.png",z=i(184),Z=w.zo.div(t||(t=(0,h.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  flex-direction: column;\n"]))),L=(w.zo.div(a||(a=(0,h.Z)(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n"]))),w.zo.div(o||(o=(0,h.Z)(["\n  display: flex;\n  width: 100%;\n  height: 120px;\n  padding: 10px 20px;\n  flex-direction: row;\n  background-color: #fff;\n  border-top: 1px solid #d9d9d9;\n"]))),w.zo.img(r||(r=(0,h.Z)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 8px;\n  margin-right: 10px;\n"]))),w.zo.div(d||(d=(0,h.Z)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),w.zo.div(l||(l=(0,h.Z)(["\n  display: flex;\n  width: 100%;\n  height: 45px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),w.zo.div(s||(s=(0,h.Z)(["\n  display: flex;\n  width: 100%;\n  height: 42px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),w.zo.div(p||(p=(0,h.Z)(["\n  display: flex;\n  height: 26px;\n  flex: 1;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 26.06px;\n  color: #000;\n  align-items: center;\n"]))),w.zo.div(f||(f=(0,h.Z)(["\n  display: flex;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 17.38px;\n  color: #25b1fa;\n"]))),w.zo.img(c||(c=(0,h.Z)(["\n  width: 18px;\n  height: 18px;\n  margin-left: 10px;\n  margin-right: 6px;\n"]))),w.zo.div(u||(u=(0,h.Z)(["\n  display: flex;\n  flex: 1;\n"]))),w.zo.div(x||(x=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 55px;\n  height: 30px;\n  border: 1px solid #25b1fa;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 17.38px;\n  color: #25b1fa;\n  cursor: pointer;\n"]))),function(){var n=(0,v.useState)([]),e=(0,g.Z)(n,2),i=e[0],t=e[1],a=(0,v.useState)([]),o=(0,g.Z)(a,2),r=o[0],d=o[1],l=window.naver,s=(0,v.useState)([]),p=(0,g.Z)(s,2),f=p[0],c=p[1],u=(0,v.useRef)([]),x=(0,v.useState)([]),h=(0,g.Z)(x,2),w=h[0],L=h[1],b=(0,v.useState)("\uc9c0\uc5ed \uc804\uccb4"),S=(0,g.Z)(b,2),k=S[0],j=S[1],E=(0,v.useState)(!1),M=(0,g.Z)(E,2),N=M[0],C=M[1],J=function(n){window.ReactNativeWebView.postMessage(JSON.stringify(n))};return(0,v.useEffect)((function(){J("didMount"),document.addEventListener("message",(function(n){var e=JSON.parse(n.data);t(e.dataList);var i=(0,m.Z)(e.dataList).map((function(n){return{lat:n.mapy,lng:n.mapx}}));d(i),L(null===e||void 0===e?void 0:e.region),j(null===e||void 0===e?void 0:e.regionSelect)})),window.addEventListener("message",(function(n){var e=JSON.parse(n.data);t(e.dataList);var i=(0,m.Z)(e.dataList).map((function(n){return{lat:n.mapy,lng:n.mapx}}));d(i),L(null===e||void 0===e?void 0:e.region),j(null===e||void 0===e?void 0:e.regionSelect)}))}),[]),(0,v.useEffect)((function(){var n=new l.maps.Map("map",{center:new l.maps.LatLng(36.5,127.6),zoomControl:!1,zoom:6});c(n),C(!0)}),[]),(0,v.useEffect)((function(){u.current[0]&&(u.current.forEach((function(n){n.setMap(null)})),u.current.splice(0));for(var n=0;n<r.length;n++){var e=new l.maps.Marker({position:new l.maps.LatLng(r[n].lat,r[n].lng),map:f,icon:{url:y,size:new l.maps.Size(50,52),scaledSize:new l.maps.Size(50,52),origin:new l.maps.Point(0,0),anchor:new l.maps.Point(25,26)}});u.current.push(e)}for(var t=function(n){return function(){var e={placeInfo:i[n],index:n};J(e)}},a=0;a<u.current.length;a+=1)l.maps.Event.addListener(u.current[a],"click",t(a));if(k){if("\uc9c0\uc5ed \uc804\uccb4"!==k){var o,d,s=w.filter((function(n){return n.region===k})),p=new l.maps.LatLng(null===(o=s[0])||void 0===o?void 0:o.mapy,null===(d=s[0])||void 0===d?void 0:d.mapx);f.morph(p,8)}else if(N){var c=new l.maps.LatLng(36.5,127.6);f.morph(c,6)}}else{var x,h,m=new l.maps.LatLng(null===(x=i[0])||void 0===x?void 0:x.mapy,null===(h=i[0])||void 0===h?void 0:h.mapx);f.morph(m,11)}}),[i]),(0,z.jsx)(Z,{children:(0,z.jsx)("div",{id:"map",style:{width:"100%",display:"flex",flex:1}})})})}}]);
//# sourceMappingURL=802.d73afee7.chunk.js.map