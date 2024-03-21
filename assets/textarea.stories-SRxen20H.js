import{j as r}from"./jsx-runtime-DtaoT6pD.js";import{r as g}from"./index-OjgoNOWw.js";import{F as e}from"./form-field-AdYr7HJv.js";import"./zoom-to-fit-icon-65magoHv.js";import"./class-names-xhKKfcKT.js";import"./render--CnTCjM4.js";import"./keyboard-ypJuuhig.js";import"./focus-management-3l6xl84w.js";import"./disposables-x8EK1kJp.js";import"./owner-k5blU4nj.js";import"./use-flags-FD8DIccc.js";import"./use-is-mounted-sHLtXe0b.js";import"./label-i0FK8Lz6.js";import"./description-Cx4STRI4.js";import"./use-text-value-5FULYfhL.js";import"./hidden-io_QVhfh.js";import"./bugs-DTVvle51.js";import"./use-disposables-zYA53INM.js";import"./open-closed-QZcf9p9x.js";import"./use-resolve-button-type-CvYxBXG6.js";import"./use-owner-is5PDNtX.js";import"./badge-fPVn3-DO.js";import"./platform-SfVjinHA.js";import"./tag-KJKMb2LC.js";const A={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks />
        </div>
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks error />
        </div>
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextareaWithHooks disabled />
        </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["Default","WithError","Disabled"];export{s as Default,o as Disabled,a as WithError,J as __namedExportsOrder,A as default};
