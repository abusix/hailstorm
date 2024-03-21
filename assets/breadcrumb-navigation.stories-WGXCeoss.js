import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{c as u}from"./class-names-xhKKfcKT.js";import{S as p}from"./slot-M22fKMB5.js";import{aD as N}from"./zoom-to-fit-icon-65magoHv.js";import"./index-OjgoNOWw.js";const s=({isActive:a,asChild:c,...d})=>{const l=c?p:"a";return e.jsx(l,{className:u("headline-500 text-neutral-800",!a&&"cursor-pointer underline-offset-2 hover:underline",a&&"text-black"),...d})};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbNavigationItem",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const m=()=>e.jsx(N,{className:"h-3 w-3 text-neutral-800"});m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbNavigationArrow"};const r=({children:a})=>e.jsx("nav",{className:"flex flex-row items-center gap-1",children:a});r.Item=s;r.Arrow=m;r.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
    isActive,
    asChild,
    ...props
}`,optional:!1,type:null}],returns:null},{name:"Arrow",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"BreadcrumbNavigation",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B={title:"Breadcrumb Navigation",component:r,args:{}},t={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Arrow,{}),e.jsx(r.Item,{href:"/",children:"Library"}),e.jsx(r.Arrow,{}),e.jsx(r.Item,{asChild:!0,isActive:!0,children:e.jsx("a",{href:"/",children:"Book"})})]})})};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["Base"];export{t as Base,x as __namedExportsOrder,B as default};
