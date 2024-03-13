import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{c as l}from"./class-names-J070TWId.js";import{S as u}from"./slot-S7AGX8n_.js";import{aD as p}from"./zoom-to-fit-icon-UPpVBno8.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const i=({isActive:a,asChild:c,...m})=>{const d=c?u:"a";return e.jsx(d,{className:l("headline-500 text-neutral-800",!a&&"cursor-pointer underline-offset-2 hover:underline",a&&"text-black"),...m})};try{i.displayName="BreadcrumbNavigationItem",i.__docgenInfo={description:"",displayName:"BreadcrumbNavigationItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const v=()=>e.jsx(p,{className:"h-3 w-3 text-neutral-800"}),r=({children:a})=>e.jsx("nav",{className:"flex flex-row items-center gap-1",children:a});r.Item=i;r.Arrow=v;try{r.displayName="BreadcrumbNavigation",r.__docgenInfo={description:"",displayName:"BreadcrumbNavigation",props:{}}}catch{}const x={title:"Breadcrumb Navigation",component:r,args:{}},t={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Arrow,{}),e.jsx(r.Item,{href:"/",children:"Library"}),e.jsx(r.Arrow,{}),e.jsx(r.Item,{asChild:!0,isActive:!0,children:e.jsx("a",{href:"/",children:"Book"})})]})})};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="p-4">
            <BreadcrumbNavigation>
                <BreadcrumbNavigation.Item href="/">Home</BreadcrumbNavigation.Item>

                <BreadcrumbNavigation.Arrow />

                <BreadcrumbNavigation.Item href="/">Library</BreadcrumbNavigation.Item>

                <BreadcrumbNavigation.Arrow />

                <BreadcrumbNavigation.Item asChild isActive>
                    <a href="/">Book</a>
                </BreadcrumbNavigation.Item>
            </BreadcrumbNavigation>
        </div>
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const _=["Base"];export{t as Base,_ as __namedExportsOrder,x as default};
