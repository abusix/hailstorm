import{j as s}from"./jsx-runtime-DtaoT6pD.js";import{l as f}from"./zoom-to-fit-icon-65magoHv.js";import{c as h}from"./class-names-xhKKfcKT.js";import{v as u}from"./disclosure-hi91LyUv.js";import"./index-OjgoNOWw.js";import"./render--CnTCjM4.js";import"./keyboard-ypJuuhig.js";import"./bugs-DTVvle51.js";import"./open-closed-QZcf9p9x.js";import"./use-resolve-button-type-CvYxBXG6.js";import"./owner-k5blU4nj.js";const j=({children:o,...n})=>s.jsx(u.Panel,{...n,children:o}),C=({children:o,...n})=>s.jsx(u.Button,{className:"headline-300 flex w-full items-center justify-between border-b border-t border-b-neutral-300 border-t-transparent bg-neutral-50 py-3 pl-3 pr-5 text-left text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200",...n,children:({open:P})=>s.jsxs(s.Fragment,{children:[s.jsx("span",{children:o}),s.jsx(f,{className:h("h-3 w-3",P&&"rotate-180 transform")})]})}),e=({children:o,defaultOpen:n=!1})=>s.jsx(u,{defaultOpen:n,children:o});e.Button=C;e.Panel=j;e.__docgenInfo={description:"",methods:[{name:"Button",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: DisclosureButtonProps",optional:!1,type:{name:"DisclosureButtonProps",alias:"DisclosureButtonProps"}}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ children, ...props }: DisclosurePanelProps",optional:!1,type:{name:"DisclosurePanelProps",alias:"DisclosurePanelProps"}}],returns:null}],displayName:"Disclosure",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"Disclosure",component:e,parameters:{options:{showPanel:!1}}},r={render:()=>s.jsx("div",{className:"w-96",children:s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]})})},t={render:()=>s.jsxs("div",{className:"w-96",children:[s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]})]})},l={render:()=>s.jsxs("div",{className:"w-96",children:[s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{defaultOpen:!0,children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]})]})};var c,i,a;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
        </div>
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var D,d,p;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
        </div>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,B,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
            <Disclosure defaultOpen>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
        </div>
}`,...(x=(B=l.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const E=["Default","Stacked","DefaultOpen"];export{r as Default,l as DefaultOpen,t as Stacked,E as __namedExportsOrder,q as default};
