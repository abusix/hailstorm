import{j as e}from"./jsx-runtime-94f6e698.js";import{r as k}from"./index-8db94870.js";import{F as r}from"./form-field-e320f45b.js";import{i as H}from"./zoom-to-fit-icon-51e20867.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./focus-management-d35c5d70.js";import"./use-flags-cf9437e9.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-text-value-1d5c8b57.js";import"./hidden-c4917ca2.js";import"./bugs-7a186658.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-d7546b2f.js";import"./tag-090442e4.js";const Y={title:"Input/TextInput",component:r.TextInput},s=({error:c=!1,disabled:T=!1,hasLeftIcon:b=!1,readOnly:L=!1,value:S})=>{const[y,D]=k.useState(S);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:y,onChange:E=>D(E.target.value),ariaDescribedBy:"value-description",error:c,disabled:T,LeftIcon:b?H:void 0,readOnly:L}),c?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{hasLeftIcon:!0})})},n={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{readOnly:!0,value:"Readonly text"})})},i={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{disabled:!0})})};var d,l,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const Z=["Default","WithError","WithLeftIcon","ReadOnly","Disabled"];export{t as Default,i as Disabled,n as ReadOnly,a as WithError,o as WithLeftIcon,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=text-input.stories-0ff9599f.js.map
