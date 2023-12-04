import{j as r}from"./jsx-runtime-94f6e698.js";import{r as D}from"./index-8db94870.js";import{F as e}from"./form-field-fee3b7f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-acda7f0b.js";import"./class-names-9cb99c69.js";import"./keyboard-21395176.js";import"./focus-management-0b66a118.js";import"./disposables-253897a2.js";import"./owner-b1a1dac1.js";import"./use-flags-60d882df.js";import"./label-931945c5.js";import"./description-a328e87c.js";import"./use-text-value-786875d7.js";import"./hidden-98df968b.js";import"./bugs-8e007c11.js";import"./use-disposables-4086b7a6.js";import"./open-closed-e73c4555.js";import"./use-resolve-button-type-2af9297b.js";import"./use-outside-click-cd4630be.js";import"./badge-d7546b2f.js";import"./tag-fae1e6b9.js";const U={title:"Input/SearchInput",component:e.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{error:!0})})},t={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{disabled:!0})})};var d,p,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks />
        </div>
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const X=["Default","WithError","ReadOnly","Disabled"];export{s as Default,o as Disabled,t as ReadOnly,a as WithError,X as __namedExportsOrder,U as default};
//# sourceMappingURL=search-input.stories-dd170ca0.js.map
