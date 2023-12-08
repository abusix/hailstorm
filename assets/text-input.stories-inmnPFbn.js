import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as k}from"./index-4g5l5LRQ.js";import{a as r}from"./form-field-CSuCvMB_.js";import{g as H}from"./zoom-to-fit-icon-OF_-LHoW.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./keyboard-UncMrW7s.js";import"./focus-management-CoYP-xeJ.js";import"./use-flags-s9Mpzjmt.js";import"./use-is-mounted-G6L8cmoM.js";import"./label-yMdKfpct.js";import"./description-HUujvgXW.js";import"./use-text-value-pEWxbmSc.js";import"./hidden-JOfeCyVd.js";import"./bugs-DTVvle51.js";import"./use-disposables-nAkgq7bY.js";import"./use-owner-bymvWI7o.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./badge-mhkbsMtk.js";import"./tag--TAisK7h.js";const $={title:"Input/TextInput",component:r.TextInput},s=({error:c=!1,disabled:T=!1,hasLeftIcon:b=!1,readOnly:L=!1,value:S})=>{const[y,D]=k.useState(S);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:y,onChange:E=>D(E.target.value),ariaDescribedBy:"value-description",error:c,disabled:T,LeftIcon:b?H:void 0,readOnly:L}),c?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{hasLeftIcon:!0})})},n={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{readOnly:!0,value:"Readonly text"})})},i={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{disabled:!0})})};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks error />
        </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,v,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks hasLeftIcon />
        </div>
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,f,g;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks readOnly value="Readonly text" />
        </div>
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,N,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const ee=["Default","WithError","WithLeftIcon","ReadOnly","Disabled"];export{t as Default,i as Disabled,n as ReadOnly,a as WithError,o as WithLeftIcon,ee as __namedExportsOrder,$ as default};
