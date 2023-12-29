import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{R as a}from"./index-4g5l5LRQ.js";import{T as p}from"./tag-dSl8puB4.js";import{S as h,a as s}from"./form-field--mlL9IC0.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./render-Tie-ixVq.js";import"./keyboard-WH7JXezp.js";import"./focus-management-lgiZx2S6.js";import"./use-flags-NOy0DCKX.js";import"./use-is-mounted-3PXUVGWh.js";import"./label-B5aT1uE9.js";import"./description-pJu2sNYX.js";import"./use-text-value--LUMr9FF.js";import"./hidden-T1ZmySp8.js";import"./bugs-DTVvle51.js";import"./use-disposables-w3ythNQc.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-9qTOIf0P.js";import"./use-owner-ZZcOua7r.js";import"./badge-n7NSCcWH.js";import"./platform-f9uPmT82.js";const Y={title:"Input/SingleCombobox",component:h},c=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],y=()=>{const[i,l]=a.useState(""),[t,r]=a.useState(""),n=t===""?c:c.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return o.jsxs(s.SingleCombobox,{value:i,onChange:e=>{r(""),l(e)},children:[o.jsx(h.Input,{id:"value",placeholder:"Select person...",onChange:e=>r(e.target.value)}),o.jsxs(s.SingleCombobox.Options,{children:[n.length===0?o.jsx(s.SingleCombobox.EmptyOption,{children:o.jsxs("p",{className:"truncate",children:["No persons found for ",o.jsx("em",{children:t})]})}):null,n.map(e=>o.jsx(s.SingleCombobox.Option,{value:e,children:o.jsx(p,{children:e})},e))]})]})},x=[{id:1,name:"Durward Reynolds",short:"Durward"},{id:2,name:"Kenton Towne",short:"Kenton"},{id:3,name:"Therese Wunsch",short:"Therese"},{id:4,name:"Benedict Kessler",short:"Benedict"},{id:5,name:"Katelyn Rohan",short:"Katelyn"}],P=()=>{const[i,l]=a.useState(),[t,r]=a.useState(""),n=t===""?x:x.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()));return o.jsxs(s.SingleCombobox,{value:i,onChange:e=>{r(""),l(e)},children:[o.jsx(h.Input,{id:"value",placeholder:"Select person...",displayValue:e=>e.name,onChange:e=>r(e.target.value)}),o.jsx(s.SingleCombobox.Options,{children:n.map(e=>o.jsx(s.SingleCombobox.Option,{value:e,children:o.jsx(p,{children:e.short})},e.id))})]})},V=()=>{const[i,l]=a.useState(""),[t,r]=a.useState(""),n=t===""?c:c.filter(e=>e.toLowerCase().includes(t.toLowerCase()));return o.jsxs(s.SingleCombobox,{value:i,onChange:e=>{r(""),l(e)},children:[o.jsx(h.Input,{id:"value",placeholder:"Select person...",onChange:e=>r(e.target.value)}),o.jsxs(s.SingleCombobox.Options,{children:[t.length>0&&c.indexOf(t)===-1&&o.jsxs(s.SingleCombobox.CustomOption,{value:t,children:["Create tag: ",o.jsx(p,{children:t})]}),n.map(e=>o.jsx(s.SingleCombobox.Option,{value:e,children:o.jsx(p,{children:e})},e))]})]})},m={render:()=>o.jsx("div",{className:"w-72",children:o.jsx(y,{})})},d={render:()=>o.jsx("div",{className:"w-72",children:o.jsx(P,{})})},u={render:()=>o.jsx("div",{className:"w-72",children:o.jsx(V,{})})};var b,C,g;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(O=(f=u.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};const Z=["Default","ObjectValue","CustomValue"];export{u as CustomValue,m as Default,d as ObjectValue,Z as __namedExportsOrder,Y as default};
