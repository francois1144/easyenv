import{c as B,h as V,v as W,g as A,i as x,j as M,u as P,k as D,a as H}from"./QBtn.100e1f13.js";import{c as d,h as k,g as S,w as L,o as Q,b as T,W as U,a as j,X as I,r as C,U as $,s as K}from"./index.e2bf0a47.js";const _={dark:{type:Boolean,default:null}};function R(e,l){return d(()=>e.dark===null?l.dark.isActive:e.dark)}var X=B({name:"QList",props:{..._,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=S(),a=R(e,n.proxy.$q),r=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:r.value},V(l.default))}});const z={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Y=["beforeShow","show","beforeHide","hide"];function G({showing:e,canShow:l,hideOnRouteChange:n,handleShow:a,handleHide:r,processOnMount:b}){const g=S(),{props:i,emit:s,proxy:w}=g;let u;function f(t){e.value===!0?v(t):m(t)}function m(t){if(i.disable===!0||t!==void 0&&t.qAnchorHandled===!0||l!==void 0&&l(t)!==!0)return;const o=i["onUpdate:modelValue"]!==void 0;o===!0&&(s("update:modelValue",!0),u=t,T(()=>{u===t&&(u=void 0)})),(i.modelValue===null||o===!1)&&c(t)}function c(t){e.value!==!0&&(e.value=!0,s("beforeShow",t),a!==void 0?a(t):s("show",t))}function v(t){if(i.disable===!0)return;const o=i["onUpdate:modelValue"]!==void 0;o===!0&&(s("update:modelValue",!1),u=t,T(()=>{u===t&&(u=void 0)})),(i.modelValue===null||o===!1)&&h(t)}function h(t){e.value!==!1&&(e.value=!1,s("beforeHide",t),r!==void 0?r(t):s("hide",t))}function y(t){i.disable===!0&&t===!0?i["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):t===!0!==e.value&&(t===!0?c:h)(u)}L(()=>i.modelValue,y),n!==void 0&&W(g)===!0&&L(()=>w.$route.fullPath,()=>{n.value===!0&&e.value===!0&&v()}),b===!0&&Q(()=>{y(i.modelValue)});const p={show:m,hide:v,toggle:f};return Object.assign(w,p),p}const N=[null,document,document.body,document.scrollingElement,document.documentElement];function J(e,l){let n=A(l);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return N.includes(n)?window:n}function Z(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ee(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let q;function te(){if(q!==void 0)return q;const e=document.createElement("p"),l=document.createElement("div");x(e,{width:"100%",height:"200px"}),x(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const n=e.offsetWidth;l.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=l.clientWidth),l.remove(),q=n-a,q}function oe(e,l=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:l?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function le(){let e=null;const l=S();function n(){e!==null&&(clearTimeout(e),e=null)}return U(n),j(n),{removeTimeout:n,registerTimeout(a,r){n(),M(l)===!1&&(e=setTimeout(a,r))}}}function ne(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),I.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var ae=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:n.value},V(l.default))}}),ie=B({name:"QItem",props:{..._,...P,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:a}}=S(),r=R(e,a),{hasLink:b,linkAttrs:g,linkClass:i,linkTag:s,navigateOnClick:w}=D(),u=C(null),f=C(null),m=d(()=>e.clickable===!0||b.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&m.value===!0),v=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),h=d(()=>{if(e.insetLevel===void 0)return null;const o=a.lang.rtl===!0?"Right":"Left";return{["padding"+o]:16+e.insetLevel*56+"px"}});function y(o){c.value===!0&&(f.value!==null&&(o.qKeyEvent!==!0&&document.activeElement===u.value?f.value.focus():document.activeElement===f.value&&u.value.focus()),w(o))}function p(o){if(c.value===!0&&$(o,13)===!0){K(o),o.qKeyEvent=!0;const E=new MouseEvent("click",o);E.qKeyEvent=!0,u.value.dispatchEvent(E)}n("keyup",o)}function t(){const o=H(l.default,[]);return c.value===!0&&o.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:f})),o}return()=>{const o={ref:u,class:v.value,style:h.value,role:"listitem",onClick:y,onKeyup:p};return c.value===!0?(o.tabindex=e.tabindex||"0",Object.assign(o,g.value)):m.value===!0&&(o["aria-disabled"]="true"),k(s.value,o,t())}}});export{ae as Q,Z as a,_ as b,ne as c,Y as d,R as e,le as f,ee as g,oe as h,G as i,J as j,te as k,ie as l,X as m,z as u};
