import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{l as j}from"./zoom-to-fit-icon---bq2i_K.js";import{c as P}from"./class-names-J070TWId.js";import{v as c}from"./disclosure-fSdhbgpM.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./render-w54E0F54.js";import"./keyboard-o6QkQYrw.js";import"./bugs-DTVvle51.js";import"./open-closed--zB8LTaK.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./owner-fKE-7Rwj.js";const f=({children:r,...n})=>e.jsx(c.Panel,{...n,children:r}),C=({children:r,...n})=>e.jsx(c.Button,{className:"headline-300 flex h-10 w-full items-center justify-between border-b border-neutral-300 bg-neutral-50 py-1 pl-3 pr-5 text-left text-neutral-900",...n,children:({open:h})=>e.jsxs(e.Fragment,{children:[r,e.jsx(j,{className:P("h-3 w-3",h&&"rotate-180 transform")})]})}),s=({children:r,defaultOpen:n=!1})=>e.jsx(c,{defaultOpen:n,children:r});s.Button=C;s.Panel=f;try{s.displayName="Disclosure",s.__docgenInfo={description:"",displayName:"Disclosure",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"Disclosure",component:s,parameters:{options:{showPanel:!1}}},o={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})})},t={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})]})},l={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})]})};var u,i,a;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
        </div>
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var D,d,m;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,B,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(B=l.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const F=["Default","Stacked","DefaultOpen"];export{o as Default,l as DefaultOpen,t as Stacked,F as __namedExportsOrder,q as default};
