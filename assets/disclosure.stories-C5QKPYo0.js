import{j as s}from"./jsx-runtime-C798UXYj.js";import{l as j}from"./zoom-to-fit-icon-DdsCB6de.js";import{c as h}from"./class-names-DnY5YZNL.js";import{R as f,C as P,j as C}from"./disclosure-D6QOZLzO.js";import"./index-0d5eMwbi.js";import"./use-resolve-button-type-HzzQKYtS.js";import"./keyboard-D0BTZntQ.js";import"./use-sync-refs-DhZgiOVe.js";import"./open-closed-FM4Rfwkx.js";import"./close-provider-CZp7Lqob.js";import"./bugs-DpEN4NTH.js";const v=({children:r,...n})=>s.jsx(f,{...n,children:r}),w=({children:r,...n})=>s.jsx(P,{className:"headline-300 flex w-full items-center justify-between border-b border-t border-b-neutral-300 border-t-transparent bg-neutral-50 py-3 pl-3 pr-5 text-left text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200",...n,children:({open:B})=>s.jsxs(s.Fragment,{children:[s.jsx("span",{children:r}),s.jsx(j,{className:h("h-3 w-3",B&&"rotate-180 transform")})]})}),e=({children:r,defaultOpen:n=!1})=>s.jsx(C,{defaultOpen:n,children:r});e.Button=w;e.Panel=v;try{e.displayName="Disclosure",e.__docgenInfo={description:"",displayName:"Disclosure",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"Disclosure",component:e,parameters:{options:{showPanel:!1}}},o={render:()=>s.jsx("div",{className:"w-96",children:s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]})})},t={render:()=>s.jsxs("div",{className:"w-96",children:[s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]})]})},l={render:()=>s.jsxs("div",{className:"w-96",children:[s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{defaultOpen:!0,children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]}),s.jsxs(e,{children:[s.jsx(e.Button,{children:"Disclosure Button"}),s.jsx(e.Panel,{children:"Disclosure Content"})]})]})};var c,u,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-96">
            <Disclosure>
                <Disclosure.Button>Disclosure Button</Disclosure.Button>
                <Disclosure.Panel>Disclosure Content</Disclosure.Panel>
            </Disclosure>
        </div>
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var a,D,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(D=t.parameters)==null?void 0:D.docs)==null?void 0:d.source}}};var p,m,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const F=["Default","Stacked","DefaultOpen"];export{o as Default,l as DefaultOpen,t as Stacked,F as __namedExportsOrder,q as default};
