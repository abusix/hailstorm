import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{l as h}from"./zoom-to-fit-icon-DAkWptYj.js";import{c as f}from"./class-names-B8CnD4Xb.js";import{W as B,C as P}from"./disclosure-CNe5jSYy.js";import"./index-DX35FyXq.js";import"./use-resolve-button-type-DPkGNm3y.js";import"./keyboard-CMPngVPH.js";import"./use-sync-refs-DTQ85WuU.js";import"./open-closed-CW48b85x.js";import"./close-provider-Cb2w3_dY.js";import"./bugs-DpEN4NTH.js";const C=({children:r,...n})=>e.jsx(B.Panel,{...n,children:r}),v=({children:r,...n})=>e.jsx(P,{className:"headline-300 flex w-full items-center justify-between border-b border-t border-b-neutral-300 border-t-transparent bg-neutral-50 py-3 pl-3 pr-5 text-left text-neutral-900 focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-primary-200",...n,children:({open:j})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{children:r}),e.jsx(h,{className:f("h-3 w-3",j&&"rotate-180 transform")})]})}),s=({children:r,defaultOpen:n=!1})=>e.jsx(B,{defaultOpen:n,children:r});s.Button=v;s.Panel=C;try{s.displayName="Disclosure",s.__docgenInfo={description:"",displayName:"Disclosure",props:{defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"Disclosure",component:s,parameters:{options:{showPanel:!1}}},o={render:()=>e.jsx("div",{className:"w-96",children:e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})})},t={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})]})},l={render:()=>e.jsxs("div",{className:"w-96",children:[e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{defaultOpen:!0,children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]}),e.jsxs(s,{children:[e.jsx(s.Button,{children:"Disclosure Button"}),e.jsx(s.Panel,{children:"Disclosure Content"})]})]})};var c,u,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const q=["Default","Stacked","DefaultOpen"];export{o as Default,l as DefaultOpen,t as Stacked,q as __namedExportsOrder,W as default};