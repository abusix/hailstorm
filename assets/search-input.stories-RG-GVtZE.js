import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as D}from"./index-4g5l5LRQ.js";import{F as e}from"./form-field-3B1d8l52.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon---bq2i_K.js";import"./class-names-J070TWId.js";import"./render-w54E0F54.js";import"./keyboard-o6QkQYrw.js";import"./focus-management-gzNHToo7.js";import"./disposables-x8EK1kJp.js";import"./owner-fKE-7Rwj.js";import"./use-flags-t0jpIEJ-.js";import"./use-is-mounted-2jl3pcgu.js";import"./label-4h3njXKv.js";import"./description-5F8ZuhcY.js";import"./use-text-value-q5k1B-6y.js";import"./hidden-qqzWvBMn.js";import"./bugs-DTVvle51.js";import"./use-disposables-9CA2w67p.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./use-owner-g5X0ZmiI.js";import"./badge-oLUvZuwe.js";import"./platform-xf9k1Dsu.js";import"./tag-IvA-YcUf.js";const Z={title:"Input/SearchInput",component:e.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{error:!0})})},t={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{disabled:!0})})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const $=["Default","WithError","ReadOnly","Disabled"];export{s as Default,o as Disabled,t as ReadOnly,a as WithError,$ as __namedExportsOrder,Z as default};
