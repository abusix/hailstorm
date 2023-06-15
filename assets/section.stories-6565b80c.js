import{a as n,j as i}from"./jsx-runtime-a888423b.js";import{B as h}from"./button-f1d89c7a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-dbcba743.js";import"./spinner-9c4e0e15.js";const c=({children:t})=>n("p",{className:"paragraph-200 text-neutral-800",children:t});try{c.displayName="SectionDescription",c.__docgenInfo={description:"",displayName:"SectionDescription",props:{}}}catch{}const a=({children:t})=>n("div",{className:"relative rounded border border-neutral-300 bg-neutral-0 p-5",children:t});try{a.displayName="SectionPanel",a.__docgenInfo={description:"",displayName:"SectionPanel",props:{}}}catch{}const l=({children:t})=>n("h4",{className:"headline-500 text-neutral-900",children:t});try{l.displayName="SectionTitle",l.__docgenInfo={description:"",displayName:"SectionTitle",props:{}}}catch{}const p=({children:t})=>n("div",{className:"flex flex-col gap-2",children:t});try{p.displayName="SectionTitleGroup",p.__docgenInfo={description:"",displayName:"SectionTitleGroup",props:{}}}catch{}const e=({children:t})=>n("section",{className:"flex flex-col gap-2",children:t});e.TitleGroup=p;e.Title=l;e.Description=c;e.Panel=a;try{e.displayName="Section",e.__docgenInfo={description:"",displayName:"Section",props:{}}}catch{}const P={title:"Section",component:e},r={render:()=>i(e,{children:[i(e.TitleGroup,{children:[n(e.Title,{children:"Section Title"}),n(e.Description,{children:"Description"})]}),n(e.Panel,{children:"Place panel contet here"})]})},o={render:()=>i(e,{children:[i(e.TitleGroup,{children:[n(e.Title,{children:"Section Header"}),i("div",{className:"mb-4 flex w-full justify-between gap-4",children:[n(e.Description,{children:"Description"}),n(h,{type:"primary",onClick:()=>alert("clicked"),children:"Button"})]})]}),n(e.Panel,{children:"Place panel content here"})]})};var s,d,S;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Section>
            <Section.TitleGroup>
                <Section.Title>Section Title</Section.Title>
                <Section.Description>Description</Section.Description>
            </Section.TitleGroup>
            <Section.Panel>Place panel contet here</Section.Panel>
        </Section>
}`,...(S=(d=r.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var _,m,u;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Section>
            <Section.TitleGroup>
                <Section.Title>Section Header</Section.Title>
                <div className="mb-4 flex w-full justify-between gap-4">
                    <Section.Description>Description</Section.Description>
                    <Button type="primary" onClick={() => alert("clicked")}>
                        Button
                    </Button>
                </div>
            </Section.TitleGroup>
            <Section.Panel>Place panel content here</Section.Panel>
        </Section>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const x=["Default","SectionWithAction"];export{r as Default,o as SectionWithAction,x as __namedExportsOrder,P as default};
//# sourceMappingURL=section.stories-6565b80c.js.map
