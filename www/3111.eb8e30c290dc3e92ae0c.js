(self.webpackChunkcovin_staff_app=self.webpackChunkcovin_staff_app||[]).push([[3111],{3111:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>w,keyboardDidOpen:()=>b,keyboardDidResize:()=>g,resetKeyboardAssist:()=>r,setKeyboardClose:()=>c,setKeyboardOpen:()=>f,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),b()||g(e)?f(e):w(e)&&c(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>f(e,t)),e.addEventListener("keyboardDidHide",()=>c(e))},f=(e,t)=>{l(e,t),n=!0},c=e=>{y(e),n=!1},b=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,g=e=>n&&!w(e),w=e=>n&&d.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);