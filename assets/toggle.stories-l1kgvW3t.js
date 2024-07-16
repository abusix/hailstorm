import{j as r}from"./jsx-runtime-B57y5fZt.js";import{T as a}from"./toggle-Dw-zG7px.js";import"./index-ebcBgdYO.js";import"./class-names-B8CnD4Xb.js";import"./render-BBULYOlI.js";import"./keyboard-6YZ08te-.js";import"./bugs-DpEN4NTH.js";import"./label-DM5sTrnd.js";import"./description-BuX7rO1I.js";import"./use-resolve-button-type-BadQLjH2.js";import"./hidden-BiaaAo9r.js";import"./use-disposables-BYdaWtl0.js";import"./disposables-C2E3IOeh.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Toggle",component:a},n={render:e=>{const[{checked:o},t]=u(),c=()=>t({checked:!o});return r.jsxs(a,{children:[r.jsx(a.Switch,{checked:e.checked,disabled:e.disabled,onChange:c,ariaLabel:"Enable notifications"}),r.jsx(a.Label,{children:"notifications"})]})},args:{checked:!1,disabled:!1}},s={render:e=>{const[{checked:o},t]=u(),c=()=>t({checked:!o});return r.jsx(a.Switch,{checked:e.checked,disabled:e.disabled,onChange:c,ariaLabel:"Enable notifications"})},args:{...n.args}};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleOnChange = () => updateArgs({
      checked: !checked
    });
    return <Toggle>
                <Toggle.Switch checked={args.checked} disabled={args.disabled} onChange={handleOnChange} ariaLabel="Enable notifications" />
                <Toggle.Label>notifications</Toggle.Label>
            </Toggle>;
  },
  args: {
    checked: false,
    disabled: false
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var h,g,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleOnChange = () => updateArgs({
      checked: !checked
    });
    return <Toggle.Switch checked={args.checked} disabled={args.disabled} onChange={handleOnChange} ariaLabel="Enable notifications" />;
  },
  args: {
    ...Default.args
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const w=["Default","WithoutLabel"];export{n as Default,s as WithoutLabel,w as __namedExportsOrder,j as default};
