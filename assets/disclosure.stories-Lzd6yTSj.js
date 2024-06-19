import{j as e}from"./jsx-runtime-DvLKfCe6.js";import{l as h}from"./zoom-to-fit-icon-D5bxa5rH.js";import{c as f}from"./class-names-J070TWId.js";import{v as c}from"./disclosure-bilLE81Q.js";import"./index-aXz8NaAs.js";import"./render-THca3tYe.js";import"./keyboard-NjAwe_S6.js";import"./bugs-DTVvle51.js";import"./open-closed-arTWCtx2.js";import"./use-resolve-button-type-Iz3xK6-2.js";import"./owner-zdel76gv.js";const P=({children:r,...n})=>e.jsx(c.Panel,{...n,children:r}),C=({children:r,...n})=>e.jsx(c.Button,{className:"headline-300 flex w-full items-center justify-between border-b border-t border-b-neutral-300 border-t-transparent bg-neutral-50 py-3 pl-3 pr-5 text-left text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200",...n,children:({open:j})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{children:r}),e.jsx(h,{className:f("h-3 w-3",j&&"rotate-180 transform")})]})}),s=({children:r,defaultOpen:n=!1})=>e.jsx(c,{defaultOpen:n,children:r});s.Button=C;s.Panel=P;try{s.displayName="Disclosure",s.__docgenInfo={description:"",displayName:"Disclosure",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Disclosure",component:s,parameters:{options:{showPanel:!1}}},o={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})})},t={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})]})},l={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})]})};var u,i,a;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
        </div>
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var D,d,p;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(x=(B=l.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const q=["Default","Stacked","DefaultOpen"];export{o as Default,l as DefaultOpen,t as Stacked,q as __namedExportsOrder,I as default};
