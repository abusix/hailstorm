import{j as e}from"./jsx-runtime-94f6e698.js";import{r as D}from"./index-8db94870.js";import{F as r}from"./form-field-e320f45b.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-51e20867.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./focus-management-d35c5d70.js";import"./use-flags-cf9437e9.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-text-value-1d5c8b57.js";import"./hidden-c4917ca2.js";import"./bugs-7a186658.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-d7546b2f.js";import"./tag-090442e4.js";const K={title:"Input/SearchInput",component:r.SearchInput},n=({error:i=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:i,disabled:b,readOnly:g,onClear:()=>{c("")}}),i?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{error:!0})})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{readOnly:!0,value:"Readonly text"})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{disabled:!0})})};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks />
        </div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks error />
        </div>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,v,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks readOnly value="Readonly text" />
        </div>
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,I,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks disabled />
        </div>
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const P=["Default","WithError","ReadOnly","Disabled"];export{s as Default,o as Disabled,t as ReadOnly,a as WithError,P as __namedExportsOrder,K as default};
//# sourceMappingURL=search-input.stories-21ffe96c.js.map
