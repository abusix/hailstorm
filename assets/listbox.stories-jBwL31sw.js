import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{R as x}from"./index-4g5l5LRQ.js";import{F as t}from"./form-field-SjCPrP0I.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./zoom-to-fit-icon---bq2i_K.js";import"./class-names-J070TWId.js";import"./render-w54E0F54.js";import"./keyboard-o6QkQYrw.js";import"./focus-management-gzNHToo7.js";import"./disposables-x8EK1kJp.js";import"./owner-fKE-7Rwj.js";import"./use-flags-t0jpIEJ-.js";import"./use-is-mounted-2jl3pcgu.js";import"./label-4h3njXKv.js";import"./description-5F8ZuhcY.js";import"./use-text-value-q5k1B-6y.js";import"./hidden-qqzWvBMn.js";import"./bugs-DTVvle51.js";import"./use-disposables-9CA2w67p.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./use-owner-g5X0ZmiI.js";import"./badge-oLUvZuwe.js";import"./platform-xf9k1Dsu.js";import"./tag-IvA-YcUf.js";const J={title:"Input/Listbox",component:t.Listbox},u=[{id:1,name:"John Lennon",isDead:!0},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],h=()=>{const[i,n]=x.useState(null);return e.jsxs(t,{children:[e.jsxs(t.LabelGroup,{children:[e.jsx(t.Label,{htmlFor:"value",children:"Label"}),e.jsx(t.Description,{id:"value-description",children:"Description"})]}),e.jsxs(t.Listbox,{value:i,onChange:n,children:[e.jsx(t.Listbox.Button,{children:e.jsx(t.Listbox.Button.TextValue,{value:(i==null?void 0:i.name)??null,placeholder:"Select..."})}),e.jsx(t.Listbox.Options,{children:u.map(o=>e.jsx(t.Listbox.Option,{value:o,disabled:o.isDead,children:e.jsx(t.Listbox.Option.TextOption,{children:o.name})},o.id))})]})]})},j=()=>{const[i,n]=x.useState(null);return e.jsxs(t,{children:[e.jsxs(t.LabelGroup,{children:[e.jsx(t.Label,{htmlFor:"value",children:"Label"}),e.jsx(t.Description,{id:"value-description",children:"Description"})]}),e.jsxs(t.Listbox,{value:i,onChange:n,children:[e.jsx(t.Listbox.Button,{children:e.jsx(t.Listbox.Button.BadgeValue,{value:(i==null?void 0:i.name)??null,placeholder:"Select..."})}),e.jsx(t.Listbox.Options,{children:u.map(o=>e.jsx(t.Listbox.Option,{value:o,children:e.jsx(t.Listbox.Option.BadgeOption,{children:o.name})},o.id))})]})]})},s={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(h,{})})},r={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(j,{})})};var a,l,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <ListboxTextWithHooks />
        </div>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <ListboxBadgeWithHooks />
        </div>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["Default","Badge"];export{r as Badge,s as Default,q as __namedExportsOrder,J as default};
