import{j as r}from"./jsx-runtime-DvLKfCe6.js";import{r as D}from"./index-aXz8NaAs.js";import{F as e}from"./form-field-6eUfOaJj.js";import"./zoom-to-fit-icon-D5bxa5rH.js";import"./class-names-J070TWId.js";import"./render-THca3tYe.js";import"./keyboard-NjAwe_S6.js";import"./focus-management-9lqV-5sA.js";import"./disposables-x8EK1kJp.js";import"./owner-zdel76gv.js";import"./use-flags-F5kSKS15.js";import"./use-is-mounted-JxO49gTk.js";import"./label-tTJj5301.js";import"./description-rwhSs07y.js";import"./use-text-value-K_DgwPe6.js";import"./hidden-G4mt23Ky.js";import"./bugs-DTVvle51.js";import"./use-disposables-qU89AwEH.js";import"./open-closed-arTWCtx2.js";import"./use-resolve-button-type-Iz3xK6-2.js";import"./use-owner-6in2YdcT.js";import"./badge-fqfuhG_-.js";import"./platform-mHIZTaYY.js";import"./tag-KADc8xh0.js";const Y={title:"Input/SearchInput",component:e.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{error:!0})})},t={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{disabled:!0})})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SearchInputWithHooks />
        </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const Z=["Default","WithError","ReadOnly","Disabled"];export{s as Default,o as Disabled,t as ReadOnly,a as WithError,Z as __namedExportsOrder,Y as default};
