import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{B as h}from"./button-ufHQn21l.js";import"./index-OjgoNOWw.js";import"./class-names-xhKKfcKT.js";import"./spinner-wMFQnwL5.js";const d=({children:n})=>e.jsx("p",{className:"paragraph-200 text-neutral-800",children:n});d.__docgenInfo={description:"",methods:[],displayName:"SectionDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const m=({children:n})=>e.jsx("div",{className:"relative rounded border border-neutral-300 bg-neutral-0 p-5",children:n});m.__docgenInfo={description:`@deprecated Use the dedicated Panel component
Delete me on version 3`,methods:[],displayName:"SectionPanel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u=({children:n})=>e.jsx("h4",{className:"headline-500 text-neutral-900",children:n});u.__docgenInfo={description:"",methods:[],displayName:"SectionTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S=({children:n})=>e.jsx("div",{className:"flex flex-col gap-2",children:n});S.__docgenInfo={description:"",methods:[],displayName:"SectionTitleGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const t=({children:n})=>e.jsx("section",{className:"flex flex-col gap-2",children:n});t.TitleGroup=S;t.Title=u;t.Description=d;t.Panel=m;t.__docgenInfo={description:"",methods:[{name:"TitleGroup",docblock:null,modifiers:["static"],params:[{name:"{ children }: SectionTitleGroupProps",optional:!1,type:{name:"SectionTitleGroupProps",alias:"SectionTitleGroupProps"}}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children }: SectionTitleProps",optional:!1,type:{name:"SectionTitleProps",alias:"SectionTitleProps"}}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:"{ children }: DescriptionProps",optional:!1,type:{name:"DescriptionProps",alias:"DescriptionProps"}}],returns:null},{name:"Panel",docblock:"@deprecated Use the dedicated Panel component",modifiers:["static"],params:[{name:"{ children }: SectionPanelProps",optional:!1,type:{name:"SectionPanelProps",alias:"SectionPanelProps"}}],returns:null,description:null}],displayName:"Section",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const j={title:"Section",component:t},i={render:()=>e.jsxs(t,{children:[e.jsxs(t.TitleGroup,{children:[e.jsx(t.Title,{children:"Section Title"}),e.jsx(t.Description,{children:"Description"})]}),e.jsx(t.Panel,{children:"Place panel contet here"})]})},o={render:()=>e.jsxs(t,{children:[e.jsxs(t.TitleGroup,{children:[e.jsx(t.Title,{children:"Section Header"}),e.jsxs("div",{className:"mb-4 flex w-full justify-between gap-4",children:[e.jsx(t.Description,{children:"Description"}),e.jsx(h,{variant:"primary",onClick:()=>alert("clicked"),children:"Button"})]})]}),e.jsx(t.Panel,{children:"Place panel content here"})]})};var r,c,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <Section>
            <Section.TitleGroup>
                <Section.Title>Section Title</Section.Title>
                <Section.Description>Description</Section.Description>
            </Section.TitleGroup>
            <Section.Panel>Place panel contet here</Section.Panel>
        </Section>
}`,...(a=(c=i.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Section>
            <Section.TitleGroup>
                <Section.Title>Section Header</Section.Title>
                <div className="mb-4 flex w-full justify-between gap-4">
                    <Section.Description>Description</Section.Description>
                    <Button variant="primary" onClick={() => alert("clicked")}>
                        Button
                    </Button>
                </div>
            </Section.TitleGroup>
            <Section.Panel>Place panel content here</Section.Panel>
        </Section>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const R=["Default","SectionWithAction"];export{i as Default,o as SectionWithAction,R as __namedExportsOrder,j as default};
