import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as a}from"./index-4g5l5LRQ.js";import{a as o}from"./form-field--mlL9IC0.js";import{B as C}from"./badge-n7NSCcWH.js";import{T as d}from"./tag-dSl8puB4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon-DzEAF_QU.js";import"./class-names-J070TWId.js";import"./render-Tie-ixVq.js";import"./keyboard-WH7JXezp.js";import"./focus-management-lgiZx2S6.js";import"./use-flags-NOy0DCKX.js";import"./use-is-mounted-3PXUVGWh.js";import"./label-B5aT1uE9.js";import"./description-pJu2sNYX.js";import"./use-text-value--LUMr9FF.js";import"./hidden-T1ZmySp8.js";import"./bugs-DTVvle51.js";import"./use-disposables-w3ythNQc.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-9qTOIf0P.js";import"./use-owner-ZZcOua7r.js";import"./platform-f9uPmT82.js";const ie={title:"Input/MultiCombobox",component:o.MultiCombobox},c=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],k=()=>{const[l,n]=a.useState([]),[t,u]=a.useState(""),r=t===""?c:c.filter(s=>s.toLowerCase().includes(t.toLowerCase()));return e.jsxs(o,{children:[e.jsxs(o.LabelGroup,{children:[e.jsx(o.Label,{htmlFor:"value",children:"Label"}),e.jsx(o.Description,{id:"value-description",children:"Description"})]}),e.jsxs(o.MultiCombobox,{value:l,onChange:s=>n(s),children:[e.jsx(o.MultiCombobox.Input,{id:"value",displayValue:t,placeholder:"Select person...",onChange:s=>u(s.target.value)}),e.jsxs(o.MultiCombobox.Options,{children:[r.length===0?e.jsx(o.MultiCombobox.EmptyOption,{children:e.jsxs("p",{className:"truncate",children:["No persons found for ",e.jsx("em",{children:t})]})}):null,r.map(s=>e.jsx(o.MultiCombobox.Option,{value:s,children:s},s))]}),l.length>0?e.jsxs(o.MultiCombobox.Results,{children:[e.jsx(o.MultiCombobox.Results.Label,{children:"Selected values:"}),e.jsx(o.MultiCombobox.Results.Text,{children:l.map(s=>s).join(", ")})]}):null]})]})},V=()=>{const[l,n]=a.useState([]),[t,u]=a.useState(""),r=t===""?c:c.filter(s=>s.toLowerCase().includes(t.toLowerCase()));return e.jsxs(o,{children:[e.jsxs(o.LabelGroup,{children:[e.jsx(o.Label,{htmlFor:"value",children:"Label"}),e.jsx(o.Description,{id:"value-description",children:"Description"})]}),e.jsxs(o.MultiCombobox,{value:l,onChange:s=>n(s),children:[e.jsx(o.MultiCombobox.Input,{id:"value",displayValue:t,placeholder:"Select person...",onChange:s=>u(s.target.value)}),e.jsxs(o.MultiCombobox.Options,{children:[r.length===0?e.jsx(o.MultiCombobox.EmptyOption,{children:e.jsxs("p",{className:"truncate",children:["No persons found for ",e.jsx("em",{children:t})]})}):null,r.map(s=>e.jsx(o.MultiCombobox.Option,{value:s,children:e.jsx(C,{children:s})},s))]}),l.length>0?e.jsxs(o.MultiCombobox.Results,{children:[e.jsx(o.MultiCombobox.Results.Label,{children:"Selected values:"}),e.jsx(o.MultiCombobox.Results.Badges,{children:l.map(s=>e.jsx(C,{children:s},s))})]}):null]})]})},m={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(V,{})})},W=()=>{const[l,n]=a.useState([]),[t,u]=a.useState(""),r=t===""?c:c.filter(s=>s.toLowerCase().includes(t.toLowerCase()));return e.jsxs(o,{children:[e.jsxs(o.LabelGroup,{children:[e.jsx(o.Label,{htmlFor:"value",children:"Label"}),e.jsx(o.Description,{id:"value-description",children:"Description"})]}),e.jsxs(o.MultiCombobox,{value:l,onChange:s=>n(s),children:[e.jsx(o.MultiCombobox.Input,{id:"value",displayValue:t,placeholder:"Select person...",onChange:s=>u(s.target.value)}),e.jsxs(o.MultiCombobox.Options,{children:[r.length===0?e.jsx(o.MultiCombobox.EmptyOption,{children:e.jsxs("p",{className:"truncate",children:["No persons found for ",e.jsx("em",{children:t})]})}):null,r.map(s=>e.jsx(o.MultiCombobox.Option,{value:s,children:e.jsx(d,{children:s})},s))]}),l.length>0?e.jsxs(o.MultiCombobox.Results,{children:[e.jsx(o.MultiCombobox.Results.Label,{children:"Selected values:"}),e.jsx(o.MultiCombobox.Results.Tags,{children:l.map(s=>e.jsx(d,{onClick:()=>{n(l.filter(h=>h!==s))},children:s},s))})]}):null]})]})},B=()=>{const[l,n]=a.useState([]),[t,u]=a.useState(""),[r,s]=a.useState(c),h=i=>{const j=i.filter(T=>r.indexOf(T)===-1);u(""),s([...j,...r]),n(i)},D=t===""?r:r.filter(i=>i.toLowerCase().includes(t.toLowerCase()));return e.jsxs(o,{children:[e.jsxs(o.LabelGroup,{children:[e.jsx(o.Label,{htmlFor:"value",children:"Label"}),e.jsx(o.Description,{id:"value-description",children:"Description"})]}),e.jsxs(o.MultiCombobox,{value:l,onChange:h,children:[e.jsx(o.MultiCombobox.Input,{id:"value",displayValue:t,placeholder:"Select person...",onChange:i=>u(i.target.value)}),e.jsxs(o.MultiCombobox.Options,{children:[t.length>0&&r.indexOf(t)===-1&&e.jsxs(o.MultiCombobox.CustomOption,{value:t,children:["Create tag: ",e.jsx(d,{children:t})]}),D.map(i=>e.jsx(o.MultiCombobox.Option,{value:i,children:e.jsx(d,{children:i})},i))]}),l.length>0?e.jsxs(o.MultiCombobox.Results,{children:[e.jsx(o.MultiCombobox.Results.Label,{children:"Selected values:"}),e.jsx(o.MultiCombobox.Results.Tags,{children:l.map(i=>e.jsx(d,{onClick:()=>{n(l.filter(j=>j!==i))},children:i},i))})]}):null]})]})},x={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(k,{})})},p={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(W,{})})},b={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(B,{})})};var M,v,g;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <MultiComboboxBadgeWithHooks />
        </div>
}`,...(g=(v=m.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,S,L;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <MultiComboboxWithHooks />
        </div>
}`,...(L=(S=x.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var y,w,R;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <MultiComboboxTagWithHooks />
        </div>
}`,...(R=(w=p.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var O,N,P;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <MultiComboboxCustomValueWithHooks />
        </div>
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const ne=["Badges","Default","Tags","CustomValue"];export{m as Badges,b as CustomValue,x as Default,p as Tags,ne as __namedExportsOrder,ie as default};
