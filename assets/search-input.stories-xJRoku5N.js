import{j as r}from"./jsx-runtime-B57y5fZt.js";import{r as D}from"./index-ebcBgdYO.js";import{F as e}from"./form-field-DmlEAbq9.js";import"./zoom-to-fit-icon-DLvbqD3B.js";import"./class-names-B8CnD4Xb.js";import"./render-BBULYOlI.js";import"./keyboard-6YZ08te-.js";import"./focus-management-CO_y2GRp.js";import"./disposables-C2E3IOeh.js";import"./owner-Di-Chxds.js";import"./use-flags-CXYxB9RW.js";import"./use-is-mounted-V11-xH6f.js";import"./label-DM5sTrnd.js";import"./description-BuX7rO1I.js";import"./use-text-value-DoNDUPYh.js";import"./hidden-BiaaAo9r.js";import"./bugs-DpEN4NTH.js";import"./use-disposables-BYdaWtl0.js";import"./open-closed-C7VEErGe.js";import"./use-resolve-button-type-BadQLjH2.js";import"./use-owner-CYYYWs7j.js";import"./badge-HpyxBAFY.js";import"./platform-CkjJx1Ap.js";import"./tag-BUaKHE7W.js";const Y={title:"Input/SearchInput",component:e.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{error:!0})})},t={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{disabled:!0})})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
