import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as u}from"./button-D3iV7Fq3.js";import"./index-DRjF_FHU.js";import"./class-names-AhVFtEzo.js";import"./spinner-DQmhNHpC.js";const o=({children:n})=>e.jsx("p",{className:"paragraph-200 text-neutral-800",children:n});try{o.displayName="SectionDescription",o.__docgenInfo={description:"",displayName:"SectionDescription",props:{}}}catch{}const c=({children:n})=>e.jsx("div",{className:"bg-neutral-0 relative rounded-sm border border-neutral-300 p-5",children:n});try{c.displayName="SectionPanel",c.__docgenInfo={description:"",displayName:"SectionPanel",props:{}}}catch{}const a=({children:n})=>e.jsx("h4",{className:"headline-500 text-neutral-900",children:n});try{a.displayName="SectionTitle",a.__docgenInfo={description:"",displayName:"SectionTitle",props:{}}}catch{}const s=({children:n})=>e.jsx("div",{className:"flex flex-col gap-2",children:n});try{s.displayName="SectionTitleGroup",s.__docgenInfo={description:"",displayName:"SectionTitleGroup",props:{}}}catch{}const t=({children:n})=>e.jsx("section",{className:"flex flex-col gap-2",children:n});t.TitleGroup=s;t.Title=a;t.Description=o;t.Panel=c;try{t.displayName="Section",t.__docgenInfo={description:"",displayName:"Section",props:{}}}catch{}const f={title:"Section",component:t},i={render:()=>e.jsxs(t,{children:[e.jsxs(t.TitleGroup,{children:[e.jsx(t.Title,{children:"Section Title"}),e.jsx(t.Description,{children:"Description"})]}),e.jsx(t.Panel,{children:"Place panel contet here"})]})},r={render:()=>e.jsxs(t,{children:[e.jsxs(t.TitleGroup,{children:[e.jsx(t.Title,{children:"Section Header"}),e.jsxs("div",{className:"mb-4 flex w-full justify-between gap-4",children:[e.jsx(t.Description,{children:"Description"}),e.jsx(u,{variant:"primary",onClick:()=>alert("clicked"),children:"Button"})]})]}),e.jsx(t.Panel,{children:"Place panel content here"})]})};var l,p,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Section>
            <Section.TitleGroup>
                <Section.Title>Section Title</Section.Title>
                <Section.Description>Description</Section.Description>
            </Section.TitleGroup>
            <Section.Panel>Place panel contet here</Section.Panel>
        </Section>
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var S,_,m;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(m=(_=r.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const g=["Default","SectionWithAction"];export{i as Default,r as SectionWithAction,g as __namedExportsOrder,f as default};
