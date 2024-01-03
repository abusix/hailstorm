import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{F as j,a as r}from"./form-field-N2JkZp0C.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./class-names-J070TWId.js";import"./render-Tie-ixVq.js";import"./keyboard-WH7JXezp.js";import"./focus-management-lgiZx2S6.js";import"./use-flags-NOy0DCKX.js";import"./use-is-mounted-3PXUVGWh.js";import"./label-B5aT1uE9.js";import"./description-pJu2sNYX.js";import"./use-text-value--LUMr9FF.js";import"./hidden-T1ZmySp8.js";import"./bugs-DTVvle51.js";import"./use-disposables-w3ythNQc.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-9qTOIf0P.js";import"./use-owner-ZZcOua7r.js";import"./badge-mhkbsMtk.js";import"./platform-f9uPmT82.js";import"./tag-dSl8puB4.js";const R={title:"Input / Combined Fields",component:j},l=({error:i=!1,disabled:s=!1})=>e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Textfields Only"}),e.jsx(r.Description,{id:"value-description",children:"A group with only textfields"})]}),e.jsxs(r.Group,{children:[e.jsx(r.TextInput,{id:"value",value:"I",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Love",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Abusix",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s})]})]}),e.jsxs(r,{children:[e.jsxs(r.LabelGroup,{children:[e.jsx(r.Label,{htmlFor:"value",children:"Mixed Fields"}),e.jsx(r.Description,{id:"value-description",children:"A group with mixed fields (textfields and listboxes)"})]}),e.jsxs(r.Group,{children:[e.jsx(r.TextInput,{id:"value",value:"I",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Love",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsx(r.TextInput,{id:"value",value:"Abusix",placeholder:"Placeholder",onChange:()=>{},ariaDescribedBy:"value-description",error:i,disabled:s}),e.jsxs(r.Listbox,{value:"",onChange:()=>{},children:[e.jsx(r.Listbox.Button,{children:e.jsx(r.Listbox.Button.TextValue,{value:"",placeholder:"Listbox"})}),e.jsx("div",{className:"relative z-10",children:e.jsxs(r.Listbox.Options,{children:[e.jsx(r.Listbox.Option,{value:"Option 1",children:e.jsx(r.Listbox.Option.TextOption,{children:"Option 1"})}),e.jsx(r.Listbox.Option,{value:"Option 2",children:e.jsx(r.Listbox.Option.TextOption,{children:"Option 2"})})]})})]})]})]})]}),t={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{})})},o={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{error:!0})})},a={render:()=>e.jsx("div",{className:"w-120",children:e.jsx(l,{disabled:!0})})};var n,d,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const V=["Default","WithError","Disabled"];export{t as Default,a as Disabled,o as WithError,V as __namedExportsOrder,R as default};