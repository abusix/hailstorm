import{j as e}from"./jsx-runtime-B57y5fZt.js";import{r as V}from"./index-ebcBgdYO.js";import{F as r}from"./form-field-DmlEAbq9.js";import{g as _}from"./zoom-to-fit-icon-DLvbqD3B.js";import"./class-names-B8CnD4Xb.js";import"./render-BBULYOlI.js";import"./keyboard-6YZ08te-.js";import"./focus-management-CO_y2GRp.js";import"./disposables-C2E3IOeh.js";import"./owner-Di-Chxds.js";import"./use-flags-CXYxB9RW.js";import"./use-is-mounted-V11-xH6f.js";import"./label-DM5sTrnd.js";import"./description-BuX7rO1I.js";import"./use-text-value-DoNDUPYh.js";import"./hidden-BiaaAo9r.js";import"./bugs-DpEN4NTH.js";import"./use-disposables-BYdaWtl0.js";import"./open-closed-C7VEErGe.js";import"./use-resolve-button-type-BadQLjH2.js";import"./use-owner-CYYYWs7j.js";import"./badge-HpyxBAFY.js";import"./platform-CkjJx1Ap.js";import"./tag-BUaKHE7W.js";const ce={title:"Input/TextInput",component:r.TextInput},s=({error:d=!1,disabled:k=!1,hasLeftIcon:y=!1,readOnly:D=!1,value:E,optional:H})=>{const[O,R]=V.useState(E);return e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",optional:H,children:"Label"}),e.jsx(r.Description,{id:"value-description",children:"Description"})]}),e.jsx(r.TextInput,{id:"value",value:O,onChange:F=>R(F.target.value),ariaDescribedBy:"value-description",error:d,disabled:k,LeftIcon:y?_:void 0,readOnly:D}),d?e.jsx(r.ErrorMessage,{children:"Error message."}):null]})},t={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{})})},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{error:!0})})},o={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{hasLeftIcon:!0})})},n={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{readOnly:!0,value:"Readonly text"})})},i={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{disabled:!0})})},c={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(s,{optional:!0})})};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks />
        </div>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,x,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks error />
        </div>
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,j,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks hasLeftIcon />
        </div>
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var f,g,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks readOnly value="Readonly text" />
        </div>
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var N,W,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks disabled />
        </div>
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var S,b,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <TextInputWithHooks optional />
        </div>
}`,...(L=(b=c.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const de=["Default","WithError","WithLeftIcon","ReadOnly","Disabled","Optional"];export{t as Default,i as Disabled,c as Optional,n as ReadOnly,a as WithError,o as WithLeftIcon,de as __namedExportsOrder,ce as default};
