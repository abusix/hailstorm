import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as k}from"./index-4g5l5LRQ.js";import{F as r}from"./form-field-Q_thcnvA.js";import{g as H}from"./zoom-to-fit-icon---bq2i_K.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./render-w54E0F54.js";import"./keyboard-o6QkQYrw.js";import"./focus-management-gzNHToo7.js";import"./disposables-x8EK1kJp.js";import"./owner-fKE-7Rwj.js";import"./use-flags-t0jpIEJ-.js";import"./use-is-mounted-2jl3pcgu.js";import"./label-4h3njXKv.js";import"./description-5F8ZuhcY.js";import"./use-text-value-q5k1B-6y.js";import"./hidden-qqzWvBMn.js";import"./bugs-DTVvle51.js";import"./use-disposables-9CA2w67p.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./use-owner-g5X0ZmiI.js";import"./badge-gQ8zLs50.js";import"./platform-xf9k1Dsu.js";import"./tag-IvA-YcUf.js";const ae={title:"Input/TextInput",component:r.TextInput},s=({error:c=!1,disabled:T=!1,hasLeftIcon:b=!1,readOnly:L=!1,value:S})=>{const[y,D]=k.useState(S);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:y,onChange:E=>D(E.target.value),ariaDescribedBy:"value-description",error:c,disabled:T,LeftIcon:b?H:void 0,readOnly:L}),c?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{hasLeftIcon:!0})})},i={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{readOnly:!0,value:"Readonly text"})})},n={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{disabled:!0})})};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,f,g;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks readOnly value="Readonly text" />
        </div>
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,N,W;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(W=(N=n.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const oe=["Default","WithError","WithLeftIcon","ReadOnly","Disabled"];export{t as Default,n as Disabled,i as ReadOnly,a as WithError,o as WithLeftIcon,oe as __namedExportsOrder,ae as default};
