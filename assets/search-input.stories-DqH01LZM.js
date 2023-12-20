import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as D}from"./index-4g5l5LRQ.js";import{a as r}from"./form-field-DsAGRRPw.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./class-names-J070TWId.js";import"./keyboard-UncMrW7s.js";import"./focus-management-CoYP-xeJ.js";import"./use-flags-s9Mpzjmt.js";import"./use-is-mounted-G6L8cmoM.js";import"./label-yMdKfpct.js";import"./description-HUujvgXW.js";import"./use-text-value-pEWxbmSc.js";import"./hidden-JOfeCyVd.js";import"./bugs-DTVvle51.js";import"./use-disposables-nAkgq7bY.js";import"./use-owner-bymvWI7o.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./badge-mhkbsMtk.js";import"./tag-dSl8puB4.js";const Q={title:"Input/SearchInput",component:r.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{error:!0})})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(i,{disabled:!0})})};var d,p,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const T=["Default","WithError","ReadOnly","Disabled"];export{s as Default,o as Disabled,t as ReadOnly,a as WithError,T as __namedExportsOrder,Q as default};
