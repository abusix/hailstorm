import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as g}from"./index-4g5l5LRQ.js";import{F as e}from"./form-field-uLuQDlws.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon---bq2i_K.js";import"./class-names-J070TWId.js";import"./render-w54E0F54.js";import"./keyboard-o6QkQYrw.js";import"./focus-management-gzNHToo7.js";import"./disposables-x8EK1kJp.js";import"./owner-fKE-7Rwj.js";import"./use-flags-t0jpIEJ-.js";import"./use-is-mounted-2jl3pcgu.js";import"./label-4h3njXKv.js";import"./description-5F8ZuhcY.js";import"./use-text-value-q5k1B-6y.js";import"./hidden-qqzWvBMn.js";import"./bugs-DTVvle51.js";import"./use-disposables-9CA2w67p.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./use-owner-g5X0ZmiI.js";import"./badge-oLUvZuwe.js";import"./platform-xf9k1Dsu.js";import"./tag-IvA-YcUf.js";const J={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks />
        </div>
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks error />
        </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks disabled />
        </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const K=["Default","WithError","Disabled"];export{s as Default,o as Disabled,a as WithError,K as __namedExportsOrder,J as default};
