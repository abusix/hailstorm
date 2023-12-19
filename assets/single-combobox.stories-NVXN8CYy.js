import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{R as a}from"./index-4g5l5LRQ.js";import{T as p}from"./tag-dSl8puB4.js";import{S as h,a as t}from"./form-field-K-guFtrN.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./keyboard-UncMrW7s.js";import"./focus-management-CoYP-xeJ.js";import"./use-flags-s9Mpzjmt.js";import"./use-is-mounted-G6L8cmoM.js";import"./label-yMdKfpct.js";import"./description-HUujvgXW.js";import"./use-text-value-pEWxbmSc.js";import"./hidden-JOfeCyVd.js";import"./bugs-DTVvle51.js";import"./use-disposables-nAkgq7bY.js";import"./use-owner-bymvWI7o.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./badge-n7NSCcWH.js";const M={title:"Input/SingleCombobox",component:h},c=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],y=()=>{const[l,i]=a.useState(""),[s,r]=a.useState(""),n=s===""?c:c.filter(e=>e.toLowerCase().includes(s.toLowerCase()));return o.jsxs(t.SingleCombobox,{value:l,onChange:e=>{r(""),i(e)},children:[o.jsx(h.Input,{id:"value",placeholder:"Select person...",onChange:e=>r(e.target.value)}),o.jsxs(t.SingleCombobox.Options,{children:[n.length===0?o.jsx(t.SingleCombobox.EmptyOption,{children:o.jsxs("p",{className:"truncate",children:["No persons found for ",o.jsx("em",{children:s})]})}):null,n.map(e=>o.jsx(t.SingleCombobox.Option,{value:e,children:o.jsx(p,{children:e})},e))]})]})},x=[{id:1,name:"Durward Reynolds",short:"Durward"},{id:2,name:"Kenton Towne",short:"Kenton"},{id:3,name:"Therese Wunsch",short:"Therese"},{id:4,name:"Benedict Kessler",short:"Benedict"},{id:5,name:"Katelyn Rohan",short:"Katelyn"}],P=()=>{const[l,i]=a.useState(),[s,r]=a.useState(""),n=s===""?x:x.filter(e=>e.name.toLowerCase().includes(s.toLowerCase()));return o.jsxs(t.SingleCombobox,{value:l,onChange:e=>{r(""),i(e)},children:[o.jsx(h.Input,{id:"value",placeholder:"Select person...",displayValue:e=>e.name,onChange:e=>r(e.target.value)}),o.jsx(t.SingleCombobox.Options,{children:n.map(e=>o.jsx(t.SingleCombobox.Option,{value:e,children:o.jsx(p,{children:e.short})},e.id))})]})},V=()=>{const[l,i]=a.useState(""),[s,r]=a.useState(""),n=s===""?c:c.filter(e=>e.toLowerCase().includes(s.toLowerCase()));return o.jsxs(t.SingleCombobox,{value:l,onChange:e=>{r(""),i(e)},children:[o.jsx(h.Input,{id:"value",placeholder:"Select person...",onChange:e=>r(e.target.value)}),o.jsxs(t.SingleCombobox.Options,{children:[s.length>0&&c.indexOf(s)===-1&&o.jsxs(t.SingleCombobox.CustomOption,{value:s,children:["Create tag: ",o.jsx(p,{children:s})]}),n.map(e=>o.jsx(t.SingleCombobox.Option,{value:e,children:o.jsx(p,{children:e})},e))]})]})},m={render:()=>o.jsx("div",{className:"w-72",children:o.jsx(y,{})})},d={render:()=>o.jsx("div",{className:"w-72",children:o.jsx(P,{})})},u={render:()=>o.jsx("div",{className:"w-72",children:o.jsx(V,{})})};var b,C,g;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SingleComboboxWithHooks />
        </div>
}`,...(g=(C=m.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var S,j,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SingleComboboxObjectValueWithHooks />
        </div>
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,f,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <SingleComboboxCustomValueWithHooks />
        </div>
}`,...(O=(f=u.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const U=["Default","ObjectValue","CustomValue"];export{u as CustomValue,m as Default,d as ObjectValue,U as __namedExportsOrder,M as default};