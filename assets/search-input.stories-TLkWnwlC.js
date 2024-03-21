import{j as r}from"./jsx-runtime-DtaoT6pD.js";import{r as D}from"./index-OjgoNOWw.js";import{F as e}from"./form-field-AdYr7HJv.js";import"./zoom-to-fit-icon-65magoHv.js";import"./class-names-xhKKfcKT.js";import"./render--CnTCjM4.js";import"./keyboard-ypJuuhig.js";import"./focus-management-3l6xl84w.js";import"./disposables-x8EK1kJp.js";import"./owner-k5blU4nj.js";import"./use-flags-FD8DIccc.js";import"./use-is-mounted-sHLtXe0b.js";import"./label-i0FK8Lz6.js";import"./description-Cx4STRI4.js";import"./use-text-value-5FULYfhL.js";import"./hidden-io_QVhfh.js";import"./bugs-DTVvle51.js";import"./use-disposables-zYA53INM.js";import"./open-closed-QZcf9p9x.js";import"./use-resolve-button-type-CvYxBXG6.js";import"./use-owner-is5PDNtX.js";import"./badge-fPVn3-DO.js";import"./platform-SfVjinHA.js";import"./tag-KJKMb2LC.js";const Y={title:"Input/SearchInput",component:e.SearchInput},i=({error:n=!1,disabled:b=!1,readOnly:g=!1,value:w})=>{const[N,c]=D.useState(w);return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.SearchInput,{id:"value",value:N,onChange:y=>c(y.target.value),ariaDescribedBy:"value-description",error:n,disabled:b,readOnly:g,onClear:()=>{c("")}}),n?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{error:!0})})},t={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{readOnly:!0,value:"Readonly text"})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(i,{disabled:!0})})};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
