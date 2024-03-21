import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{a as j,F as r}from"./form-field-AdYr7HJv.js";import"./index-OjgoNOWw.js";import"./zoom-to-fit-icon-65magoHv.js";import"./class-names-xhKKfcKT.js";import"./render--CnTCjM4.js";import"./keyboard-ypJuuhig.js";import"./focus-management-3l6xl84w.js";import"./disposables-x8EK1kJp.js";import"./owner-k5blU4nj.js";import"./use-flags-FD8DIccc.js";import"./use-is-mounted-sHLtXe0b.js";import"./label-i0FK8Lz6.js";import"./description-Cx4STRI4.js";import"./use-text-value-5FULYfhL.js";import"./hidden-io_QVhfh.js";import"./bugs-DTVvle51.js";import"./use-disposables-zYA53INM.js";import"./open-closed-QZcf9p9x.js";import"./use-resolve-button-type-CvYxBXG6.js";import"./use-owner-is5PDNtX.js";import"./badge-fPVn3-DO.js";import"./platform-SfVjinHA.js";import"./tag-KJKMb2LC.js";const V={title:"Input / Combined Fields",component:j},l=({error:i=!1,disabled:s=!1})=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Textfields Only"}),e.jsx(r.Description,{id:"value-description",children:"A group with only textfields"})]}),e.jsxs(r.Group,{children:[e.jsx(r.TextInput,{id:"value",value:"I",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Love",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Abusix",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s})]})]}),e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Mixed Fields"}),e.jsx(r.Description,{id:"value-description",children:"A group with mixed fields (textfields and listboxes)"})]}),e.jsxs(r.Group,{children:[e.jsx(r.TextInput,{id:"value",value:"I",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Love",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Abusix",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsxs(r.Listbox,{value:"",onChange:()=>{},children:[e.jsx(r.Listbox.Button,{children:e.jsx(r.Listbox.Button.TextValue,{value:"",placeholder:"Listbox"})}),e.jsx("div",{className:"relative z-10",children:e.jsxs(r.Listbox.Options,{children:[e.jsx(r.Listbox.Option,{value:"Option 1",children:e.jsx(r.Listbox.Option.TextOption,{children:"Option 1"})}),e.jsx(r.Listbox.Option,{value:"Option 2",children:e.jsx(r.Listbox.Option.TextOption,{children:"Option 2"})})]})})]})]})]})]}),t={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{})})},o={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{error:!0})})},a={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{disabled:!0})})};var n,d,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-120">
            <TextInputFields />
        </div>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-120">
            <TextInputFields error />
        </div>
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,h,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-120">
            <TextInputFields disabled />
        </div>
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const k=["Default","WithError","Disabled"];export{t as Default,a as Disabled,o as WithError,k as __namedExportsOrder,V as default};
