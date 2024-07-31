import{j as r}from"./jsx-runtime-B57y5fZt.js";import{r as g}from"./index-ebcBgdYO.js";import{F as e}from"./form-field-BNOWf988.js";import"./zoom-to-fit-icon-DLvbqD3B.js";import"./class-names-B8CnD4Xb.js";import"./render-BBULYOlI.js";import"./keyboard-6YZ08te-.js";import"./focus-management-CO_y2GRp.js";import"./disposables-C2E3IOeh.js";import"./owner-Di-Chxds.js";import"./use-flags-CXYxB9RW.js";import"./use-is-mounted-V11-xH6f.js";import"./label-DM5sTrnd.js";import"./description-BuX7rO1I.js";import"./use-text-value-DoNDUPYh.js";import"./hidden-BiaaAo9r.js";import"./bugs-DpEN4NTH.js";import"./use-disposables-BYdaWtl0.js";import"./open-closed-C7VEErGe.js";import"./use-resolve-button-type-BadQLjH2.js";import"./use-owner-CYYYWs7j.js";import"./badge-Bpu_07Lu.js";import"./platform-CkjJx1Ap.js";import"./tag-BUaKHE7W.js";const A={title:"Input/Textarea",component:e.Textarea},t=({error:i=!1,disabled:v=!1})=>{const[j,b]=g.useState("");return r.jsxs(e,{children:[r.jsxs(e.LabelGroup,{children:[r.jsx(e.Label,{htmlFor:"value",children:"Label"}),r.jsx(e.Description,{id:"value-description",children:"Description"})]}),r.jsx(e.Textarea,{id:"value",value:j,placeholder:"Placeholder",onChange:f=>b(f.target.value),ariaDescribedBy:"value-description",error:i,disabled:v}),i?r.jsx(e.ErrorMessage,{children:"Error message."}):null]})},s={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{})})},a={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{error:!0})})},o={render:()=>r.jsx("div",{className:"w-72",children:r.jsx(t,{disabled:!0})})};var m,d,n;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
