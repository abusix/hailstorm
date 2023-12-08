import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{F as j,a as r}from"./form-field-CSuCvMB_.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-OF_-LHoW.js";import"./class-names-J070TWId.js";import"./keyboard-UncMrW7s.js";import"./focus-management-CoYP-xeJ.js";import"./use-flags-s9Mpzjmt.js";import"./use-is-mounted-G6L8cmoM.js";import"./label-yMdKfpct.js";import"./description-HUujvgXW.js";import"./use-text-value-pEWxbmSc.js";import"./hidden-JOfeCyVd.js";import"./bugs-DTVvle51.js";import"./use-disposables-nAkgq7bY.js";import"./use-owner-bymvWI7o.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./badge-mhkbsMtk.js";import"./tag--TAisK7h.js";const _={title:"Input / Combined Fields",component:j},l=({error:i=!1,disabled:s=!1})=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Textfields Only"}),e.jsx(r.Description,{id:"value-description",children:"A group with only textfields"})]}),e.jsxs(r.Group,{children:[e.jsx(r.TextInput,{id:"value",value:"I",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Love",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Abusix",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s})]})]}),e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Mixed Fields"}),e.jsx(r.Description,{id:"value-description",children:"A group with mixed fields (textfields and listboxes)"})]}),e.jsxs(r.Group,{children:[e.jsx(r.TextInput,{id:"value",value:"I",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Love",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Abusix",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsxs(r.Listbox,{value:"",onChange:()=>{},children:[e.jsx(r.Listbox.Button,{children:e.jsx(r.Listbox.Button.TextValue,{value:"",placeholder:"Listbox"})}),e.jsx("div",{className:"relative z-10",children:e.jsxs(r.Listbox.Options,{children:[e.jsx(r.Listbox.Option,{value:"Option 1",children:e.jsx(r.Listbox.Option.TextOption,{children:"Option 1"})}),e.jsx(r.Listbox.Option,{value:"Option 2",children:e.jsx(r.Listbox.Option.TextOption,{children:"Option 2"})})]})})]})]})]})]}),t={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{})})},o={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{error:!0})})},a={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{disabled:!0})})};var n,d,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-120">
            <TextInputFields />
        </div>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,x,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-120">
            <TextInputFields error />
        </div>
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var m,h,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-120">
            <TextInputFields disabled />
        </div>
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const z=["Default","WithError","Disabled"];export{t as Default,a as Disabled,o as WithError,z as __namedExportsOrder,_ as default};
