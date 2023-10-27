import{j as m}from"./jsx-runtime-94f6e698.js";import{R as s}from"./index-8db94870.js";import{T as c}from"./toggle-416ca6ae.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./keyboard-5e933fe8.js";import"./bugs-7a186658.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-resolve-button-type-68f089c3.js";import"./hidden-c4917ca2.js";const C={title:"Toggle",component:c},l=({checked:e,disabled:p})=>{const[r,t]=s.useState(!1);return s.useEffect(()=>{t(e)},[e]),m.jsx(c,{checked:r,disabled:p,onChange:()=>t(!r),ariaLabel:"Enable notifications"})},o={render:e=>m.jsx(l,{...e}),args:{checked:!1,disabled:!1}};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ToggleWithHook {...args} />,
  args: {
    checked: false,
    disabled: false
  }
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,C as default};
//# sourceMappingURL=toggle.stories-f0a2b1a4.js.map
