import{j as m}from"./jsx-runtime-vNq4Oc-g.js";import{R as s}from"./index-4g5l5LRQ.js";import{T as c}from"./toggle-h9ke8DYg.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./keyboard-UncMrW7s.js";import"./bugs-DTVvle51.js";import"./label-yMdKfpct.js";import"./description-HUujvgXW.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./hidden-JOfeCyVd.js";import"./use-disposables-nAkgq7bY.js";const R={title:"Toggle",component:c},l=({checked:e,disabled:p})=>{const[r,t]=s.useState(!1);return s.useEffect(()=>{t(e)},[e]),m.jsx(c,{checked:r,disabled:p,onChange:()=>t(!r),ariaLabel:"Enable notifications"})},o={render:e=>m.jsx(l,{...e}),args:{checked:!1,disabled:!1}};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ToggleWithHook {...args} />,
  args: {
    checked: false,
    disabled: false
  }
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,R as default};
