import{a as t,j as r}from"./jsx-runtime-a888423b.js";import{R as h}from"./index-8db94870.js";import{F as e}from"./form-field-d7dc3d75.js";import"./_commonjsHelpers-042e6b4d.js";import"./zoom-to-fit-icon-f9dbb4bf.js";import"./class-names-2bb0c168.js";import"./keyboard-f3ae5531.js";import"./focus-management-8ba95dc1.js";import"./use-flags-a352ae60.js";import"./label-ff7b7ebb.js";import"./description-63431522.js";import"./use-tracked-pointer-b0b2487f.js";import"./hidden-05078d32.js";import"./bugs-6ad166a8.js";import"./open-closed-818d3463.js";import"./use-resolve-button-type-3a664423.js";import"./badge-0f9b3744.js";import"./tag-d1a81691.js";const C={title:"Input/Listbox",component:e.Listbox},x=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],b=()=>{const[i,s]=h.useState(null);return r(e,{children:[r(e.LabelGroup,{children:[t(e.Label,{htmlFor:"value",children:"Label"}),t(e.Description,{id:"value-description",children:"Description"})]}),r(e.Listbox,{value:i,onChange:s,children:[t(e.Listbox.Button,{children:t(e.Listbox.Button.TextValue,{value:(i==null?void 0:i.name)??null,placeholder:"Select..."})}),t(e.Listbox.Options,{children:x.map(o=>t(e.Listbox.Option,{value:o,children:t(e.Listbox.Option.TextOption,{children:o.name})},o.id))})]})]})},L=()=>{const[i,s]=h.useState(null);return r(e,{children:[r(e.LabelGroup,{children:[t(e.Label,{htmlFor:"value",children:"Label"}),t(e.Description,{id:"value-description",children:"Description"})]}),r(e.Listbox,{value:i,onChange:s,children:[t(e.Listbox.Button,{children:t(e.Listbox.Button.BadgeValue,{value:(i==null?void 0:i.name)??null,placeholder:"Select..."})}),t(e.Listbox.Options,{children:x.map(o=>t(e.Listbox.Option,{value:o,children:t(e.Listbox.Option.BadgeOption,{children:o.name})},o.id))})]})]})},n={render:()=>t("div",{className:"w-72",children:t(b,{})})},a={render:()=>t("div",{className:"w-72",children:t(L,{})})};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <ListboxTextWithHooks />
    </div>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <ListboxBadgeWithHooks />
    </div>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const G=["Default","Badge"];export{a as Badge,n as Default,G as __namedExportsOrder,C as default};
//# sourceMappingURL=listbox.stories-67b44ac4.js.map
