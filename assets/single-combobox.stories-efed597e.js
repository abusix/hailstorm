import{a as o,j as n}from"./jsx-runtime-a888423b.js";import{R as d}from"./index-8db94870.js";import{T as p}from"./tag-d1a81691.js";import{S as h,F as r}from"./form-field-d7dc3d75.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-2bb0c168.js";import"./zoom-to-fit-icon-f9dbb4bf.js";import"./keyboard-f3ae5531.js";import"./focus-management-8ba95dc1.js";import"./use-flags-a352ae60.js";import"./label-ff7b7ebb.js";import"./description-63431522.js";import"./use-tracked-pointer-b0b2487f.js";import"./hidden-05078d32.js";import"./bugs-6ad166a8.js";import"./open-closed-818d3463.js";import"./use-resolve-button-type-3a664423.js";import"./badge-0f9b3744.js";const Q={title:"Input/SingleCombobox",component:h},l=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],f=()=>{const[s,u]=d.useState(""),[t,a]=d.useState(""),i=t===""?l:l.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return n(r.SingleCombobox,{value:s,onChange:e=>{a(""),u(e)},children:[o(h.Input,{id:"value",displayValue:s,placeholder:"Select person...",onChange:e=>a(e.target.value)}),n(r.SingleCombobox.Options,{children:[i.length===0?o(r.SingleCombobox.EmptyOption,{children:n("p",{className:"truncate",children:["No persons found for ",o("em",{children:t})]})}):null,i.map(e=>o(r.SingleCombobox.Option,{value:e,children:o(p,{children:e})},e))]})]})},w=()=>{const[s,u]=d.useState(""),[t,a]=d.useState(""),i=t===""?l:l.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return n(r.SingleCombobox,{value:s,onChange:e=>{a(""),u(e)},children:[o(h.Input,{id:"value",displayValue:s,placeholder:"Select person...",onChange:e=>a(e.target.value)}),n(r.SingleCombobox.Options,{children:[t.length>0&&l.indexOf(t)===-1&&n(r.SingleCombobox.CustomOption,{value:t,children:["Create tag: ",o(p,{children:t})]}),i.map(e=>o(r.SingleCombobox.Option,{value:e,children:o(p,{children:e})},e))]})]})},m={render:()=>o("div",{className:"w-72",children:o(f,{})})},c={render:()=>o("div",{className:"w-72",children:o(w,{})})};var b,C,g;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <SingleComboboxWithHooks />
    </div>
}`,...(g=(C=m.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var S,x,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <SingleComboboxCustomValueWithHooks />
    </div>
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const _=["Default","CustomValue"];export{c as CustomValue,m as Default,_ as __namedExportsOrder,Q as default};
//# sourceMappingURL=single-combobox.stories-efed597e.js.map
