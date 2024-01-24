import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{T as a}from"./toggle-huM1MEWr.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./class-names-J070TWId.js";import"./render-w54E0F54.js";import"./keyboard-o6QkQYrw.js";import"./bugs-DTVvle51.js";import"./label-4h3njXKv.js";import"./description-5F8ZuhcY.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./hidden-qqzWvBMn.js";import"./use-disposables-9CA2w67p.js";import"./disposables-x8EK1kJp.js";const{useArgs:m}=__STORYBOOK_MODULE_CLIENT_API__,w={title:"Toggle",component:a},n={render:e=>{const[{checked:o},t]=m(),c=()=>t({checked:!o});return r.jsxs(a,{children:[r.jsx(a.Switch,{checked:e.checked,disabled:e.disabled,onChange:c,ariaLabel:"Enable notifications"}),r.jsx(a.Label,{children:"notifications"})]})},args:{checked:!1,disabled:!1}},s={render:e=>{const[{checked:o},t]=m(),c=()=>t({checked:!o});return r.jsx(a.Switch,{checked:e.checked,disabled:e.disabled,onChange:c,ariaLabel:"Enable notifications"})},args:{...n.args}};var d,i,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const D=["Default","WithoutLabel"];export{n as Default,s as WithoutLabel,D as __namedExportsOrder,w as default};
