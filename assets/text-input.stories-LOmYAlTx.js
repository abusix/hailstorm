import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as V}from"./index-DRjF_FHU.js";import{F as r}from"./form-field-CcLN5yJt.js";import{g as _}from"./zoom-to-fit-icon-BI_77R5n.js";import"./class-names-uFcjhHb5.js";import"./use-resolve-button-type-anS-OQ-j.js";import"./keyboard-BXsyG9-6.js";import"./use-sync-refs-4PSbzubZ.js";import"./form-fields-B4NF69zT.js";import"./index-Bgj8Hic8.js";import"./hidden-BTT1K2UY.js";import"./description-ZkavqmAj.js";import"./label-mZgg-6rf.js";import"./bugs-DpEN4NTH.js";import"./focus-management-CtIqEZ7d.js";import"./use-text-value-JNJ6Y_Ev.js";import"./portal-B37XtxD-.js";import"./use-server-handoff-complete-D6bOsrEP.js";import"./floating-ByVDprMS.js";import"./use-inert-others-Dv-IK1tz.js";import"./open-closed-yLnem6BE.js";import"./badge-Cwg-25o4.js";import"./index-BwrluLaz.js";import"./use-event-listener-BepRZUYA.js";import"./active-element-history-BK4c3ksb.js";import"./tag-DUp8hLh8.js";const pe={title:"Input/TextInput",component:r.TextInput},s=({error:d=!1,disabled:k=!1,hasLeftIcon:y=!1,readOnly:D=!1,value:E,optional:H})=>{const[O,R]=V.useState(E);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",optional:H,children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:O,onChange:F=>R(F.target.value),ariaDescribedBy:"value-description",error:d,disabled:k,LeftIcon:y?_:void 0,readOnly:D}),d?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{hasLeftIcon:!0})})},n={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{readOnly:!0,value:"Readonly text"})})},i={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{disabled:!0})})},c={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{optional:!0})})};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,x,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks error />
        </div>
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,j,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks hasLeftIcon />
        </div>
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var f,g,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks readOnly value="Readonly text" />
        </div>
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var N,W,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var S,b,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks optional />
        </div>
}`,...(L=(b=c.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const me=["Default","WithError","WithLeftIcon","ReadOnly","Disabled","Optional"];export{t as Default,i as Disabled,c as Optional,n as ReadOnly,a as WithError,o as WithLeftIcon,me as __namedExportsOrder,pe as default};
