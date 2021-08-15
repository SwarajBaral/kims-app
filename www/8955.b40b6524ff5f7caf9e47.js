(self.webpackChunkcovin_kims_app=self.webpackChunkcovin_kims_app||[]).push([[8955],{8955:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ion_select:()=>d,ion_select_option:()=>f,ion_select_popover:()=>y});var n=i(2322),s=i(7505),o=i(1843),a=i(1558),r=i(4843);const l=(e,t)=>{if(1===e.nodeType)return(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(t=>t.value===e.value)},d=class{constructor(e){(0,n.r)(this,e),this.ionChange=(0,n.e)(this,"ionChange",7),this.ionCancel=(0,n.e)(this,"ionCancel",7),this.ionFocus=(0,n.e)(this,"ionFocus",7),this.ionBlur=(0,n.e)(this,"ionBlur",7),this.ionStyle=(0,n.e)(this,"ionStyle",7),this.inputId="ion-sel-"+m++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=e=>{this.setFocus(),this.open(e)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((e,t,i)=>{if("undefined"==typeof MutationObserver)return;const n=new MutationObserver(e=>{i(((e,t)=>{let i;e.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)i=l(e.addedNodes[t],"ion-select-option")||i})})(e))});return n.observe(e,{childList:!0,subtree:!0}),n})(this.el,0,async()=>{this.updateOverlayOptions()})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(e){if(this.disabled||this.isExpanded)return;const t=this.overlay=await this.createOverlay(e);return this.isExpanded=!0,t.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await t.present(),t}createOverlay(e){let t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,i);break;case"popover":const n=e.querySelector("ion-select-popover");n&&(n.options=this.createPopoverOptions(t,i));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(e,t){const i=e.map(e=>{const i=p(e),n=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" "),s=`${v} ${n}`;return{role:c(i,t,this.compareWith)?"selected":"",text:e.textContent,cssClass:s,handler:()=>{this.value=i}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(e,t,i){return e.map(e=>{const n=p(e),s=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" ");return{type:t,cssClass:`${v} ${s}`,label:e.textContent||"",value:n,checked:c(n,i,this.compareWith),disabled:e.disabled}})}createPopoverOptions(e,t){return e.map(e=>{const i=p(e),n=Array.from(e.classList).filter(e=>"hydrated"!==e).join(" ");return{text:e.textContent||"",cssClass:`${v} ${n}`,value:i,checked:c(i,t,this.compareWith),disabled:e.disabled,handler:()=>{this.value=i,this.close()}}})}async openPopover(e){const t=this.interfaceOptions,i=(0,s.b)(this),n=this.value,o=Object.assign(Object.assign({mode:i},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:n,options:this.createPopoverOptions(this.childOpts,n)}});return a.c.create(o)}async openActionSheet(){const e=(0,s.b)(this),t=this.interfaceOptions,i=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return a.b.create(i)}async openAlert(){const e=this.getLabel(),t=e?e.textContent:null,i=this.interfaceOptions,n=this.multiple?"checkbox":"radio",o=(0,s.b)(this),r=Object.assign(Object.assign({mode:o},i),{header:i.header?i.header:t,inputs:this.createAlertInputs(this.childOpts,n,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.value=e}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return a.a.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,o.h)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:g(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{disabled:e,el:t,inputId:i,isExpanded:a,name:l,placeholder:d,value:c}=this,p=(0,s.b)(this),{labelText:u,labelId:g}=(0,o.d)(t,i);(0,o.e)(!0,t,l,h(c),e);let b=!1,m=this.getText();""===m&&null!=d&&(m=d,b=!0);const v={"select-text":!0,"select-placeholder":b},f=b?"placeholder":"text",x=void 0!==u?""!==m?`${m}, ${u}`:u:m;return(0,n.h)(n.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":x,class:{[p]:!0,"in-item":(0,r.h)("ion-item",t),"select-disabled":e,"select-expanded":a}},(0,n.h)("div",{"aria-hidden":"true",class:v,part:f},m),(0,n.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,n.h)("div",{class:"select-icon-inner"})),(0,n.h)("label",{id:g},x),(0,n.h)("button",{type:"button",disabled:e,id:i,"aria-labelledby":g,"aria-haspopup":"listbox","aria-expanded":`${a}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:e=>this.focusEl=e}))}get el(){return(0,n.i)(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}},c=(e,t,i)=>void 0!==e&&(Array.isArray(e)?e.some(e=>u(e,t,i)):u(e,t,i)),p=e=>{const t=e.value;return void 0===t?e.textContent||"":t},h=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},u=(e,t,i)=>"function"==typeof i?i(e,t):"string"==typeof i?e[i]===t[i]:Array.isArray(t)?t.includes(e):e===t,g=(e,t,i)=>void 0===t?"":Array.isArray(t)?t.map(t=>b(e,t,i)).filter(e=>null!==e).join(", "):b(e,t,i)||"",b=(e,t,i)=>{const n=e.find(e=>u(p(e),t,i));return n?n.textContent:null};let m=0;const v="select-interface-option";d.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}"};const f=class{constructor(e){(0,n.r)(this,e),this.inputId="ion-selopt-"+x++,this.disabled=!1}render(){return(0,n.h)(n.H,{role:"option",id:this.inputId,class:(0,s.b)(this)})}get el(){return(0,n.i)(this)}};let x=0;f.style=":host{display:none}";const y=class{constructor(e){(0,n.r)(this,e),this.options=[]}onSelect(e){const t=this.options.find(t=>t.value===e.target.value);t&&(0,a.s)(t.handler)}render(){const e=this.options.find(e=>e.checked),t=e?e.value:void 0;return(0,n.h)(n.H,{class:(0,s.b)(this)},(0,n.h)("ion-list",null,void 0!==this.header&&(0,n.h)("ion-list-header",null,this.header),(void 0!==this.subHeader||void 0!==this.message)&&(0,n.h)("ion-item",null,(0,n.h)("ion-label",{class:"ion-text-wrap"},void 0!==this.subHeader&&(0,n.h)("h3",null,this.subHeader),void 0!==this.message&&(0,n.h)("p",null,this.message))),(0,n.h)("ion-radio-group",{value:t},this.options.map(e=>(0,n.h)("ion-item",{class:(0,r.g)(e.cssClass)},(0,n.h)("ion-label",null,e.text),(0,n.h)("ion-radio",{value:e.value,disabled:e.disabled}))))))}};y.style=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}]);