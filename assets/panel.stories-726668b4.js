import{j as e}from"./jsx-runtime-94f6e698.js";import{c as g}from"./class-names-9cb99c69.js";import{B as s}from"./button-6a6c6402.js";import{g as h}from"./storybook-utils-5525ffdc.js";import{T as f}from"./toggle-416ca6ae.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./spinner-59a2feb3.js";import"./keyboard-5e933fe8.js";import"./bugs-7a186658.js";import"./label-03e90ffb.js";import"./description-e80611a4.js";import"./use-resolve-button-type-68f089c3.js";import"./hidden-c4917ca2.js";const a=({children:n,className:u})=>e.jsx("div",{className:g("rounded border border-neutral-300 bg-neutral-0 p-5",u),children:n});try{a.displayName="Panel",a.__docgenInfo={description:"",displayName:"Panel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Panel",parameters:{...h("Simple container used to group and organize elements in the UI."),backgrounds:{default:"light"}},component:a,args:{className:"",children:"Panel with text content"}},r={},o=()=>{},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"primary",onClick:o,children:"Button A"}),e.jsx(f,{checked:!0,ariaLabel:"test",onChange:o}),e.jsx(s,{variant:"secondary",onClick:o,children:"Button B"}),e.jsx("p",{children:" Paragraph content"})]})}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
                <Button variant="primary" onClick={noop}>
                    Button A
                </Button>
                <Toggle checked ariaLabel="test" onChange={noop} />
                <Button variant="secondary" onClick={noop}>
                    Button B
                </Button>
                <p> Paragraph content</p>
            </>
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const E=["Default","WithComponents"];export{r as Default,t as WithComponents,E as __namedExportsOrder,A as default};
//# sourceMappingURL=panel.stories-726668b4.js.map
