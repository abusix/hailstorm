import{j as e}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{g as M,h as p}from"./storybook-utils-5525ffdc.js";import{I as A}from"./icon-button-6c5b4ff9.js";import{c as y}from"./class-names-9cb99c69.js";import{j as W,k as G}from"./zoom-to-fit-icon-51e20867.js";import{$ as g,_ as h}from"./transition-e050fb10.js";import{B as j}from"./button-6a6c6402.js";import{F as a}from"./form-field-67828a29.js";import{T as k}from"./toggle-416ca6ae.js";import{A as E}from"./alert-c5b9ec8f.js";import"./_commonjsHelpers-042e6b4d.js";import"./keyboard-5e933fe8.js";import"./bugs-7a186658.js";import"./hidden-c4917ca2.js";import"./focus-management-d35c5d70.js";import"./open-closed-535072ce.js";import"./use-flags-cf9437e9.js";import"./use-owner-470a7b02.js";import"./index-8ce4a492.js";import"./description-e80611a4.js";import"./spinner-59a2feb3.js";import"./label-03e90ffb.js";import"./use-text-value-1d5c8b57.js";import"./use-resolve-button-type-68f089c3.js";import"./badge-e8b648e9.js";import"./tag-090442e4.js";const d=({isShown:o,children:s,className:r,isCloseable:n=!0,footer:t,footerPosition:i="end",onClose:v,height:b,width:x,title:O,hasBackground:R=!0,position:F="center"})=>{const f=(q=!1)=>{n&&v&&v(q)};return e.jsx(g,{show:o,as:l.Fragment,children:e.jsxs(h,{as:"div",onClose:f,children:[R?e.jsx(g.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-modal-background","aria-hidden":"true",onClick:()=>f(!0)})}):null,e.jsx("div",{className:y("fixed inset-0 flex overflow-y-auto p-8",F==="bottom-right"&&"items-end justify-end",F==="center"&&"items-center justify-center"),children:e.jsx(g.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:e.jsxs(h.Panel,{className:y("flex transform flex-col overflow-y-auto rounded-md bg-neutral-0 shadow-lg transition-all",b?`h-[${b}px]`:"max-h-full",x?`w-[${x}px]`:"w-[592px]",!t&&"pb-8",r),children:[e.jsxs("div",{className:"relative mx-10 mt-10",children:[e.jsx(h.Title,{className:"mb-6 pr-12 text-lg font-semibold text-neutral-900",children:O}),n&&e.jsx(A,{className:"absolute right-0 top-0",Icon:W,type:"minimal",onClick:()=>f(!1)}),e.jsx(h.Description,{as:"div",children:s})]}),!!t&&e.jsx("div",{id:"dialog-footer",className:y("sticky bottom-0 left-0 flex flex-row gap-2 bg-neutral-0 px-10 pb-8 pt-8",i==="end"?"justify-end":"justify-start"),children:t})]})})})]})})};try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{isShown:{defaultValue:null,description:"",name:"isShown",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((submitted: boolean) => void)"}},isCloseable:{defaultValue:{value:"true"},description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},footerPosition:{defaultValue:{value:"end"},description:"",name:"footerPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},hasBackground:{defaultValue:{value:"true"},description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom-right"'}]}}}}}catch{}const w=()=>{},P=()=>e.jsx("span",{children:"test footer 🍭"}),H=({onClose:o})=>e.jsxs(e.Fragment,{children:[e.jsx(j,{variant:"secondary",onClick:()=>o==null?void 0:o(!1),children:"Cancel"}),e.jsx(j,{variant:"primary",LeftIcon:G,onClick:()=>o==null?void 0:o(!0),children:"Confirm"})]}),C={undefined:void 0,SpanFooter:e.jsx(P,{}),buttons:e.jsx(H,{})},$={options:Object.keys(C),mapping:C},ve={title:"Dialog",component:d,parameters:{...M("Modal showing on top of the screen"),inlineStories:!1},args:{title:"Dialog Title",children:"Dialog Description",isShown:!1,footer:void 0},argTypes:{isShown:p,onClose:p,footer:$},render:({children:o,...s})=>{const[r,n]=l.useState(!1),t=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:t,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(d,{...s,isShown:r,onClose:t,children:o})]})}},u={},m={argTypes:{footer:p},render:({children:o,...s})=>{const[r,n]=l.useState(!1),t=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:t,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(d,{...s,footer:e.jsx(H,{onClose:()=>n(!1)}),isShown:r,onClose:t,children:o})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(k,{checked:!0,ariaLabel:"test",onChange:w}),e.jsx("p",{className:"py-10",children:"Paragraph Content"}),e.jsxs(a,{children:[e.jsxs(a.LabelGroup,{children:[e.jsx(a.Label,{htmlFor:"value",children:"Label"}),e.jsx(a.Description,{id:"value-description",children:"Description"})]}),e.jsxs(a.RadioInput,{id:"value",value:"value_1",onChange:w,children:[e.jsx(a.RadioInput.Option,{value:"value_1",children:"Value 1"}),e.jsx(a.RadioInput.Option,{value:"value_2",children:"Value 2"}),e.jsx(a.RadioInput.Option,{value:"value_3",disabled:!0,children:"Value 3"})]})]}),e.jsx("p",{className:"py-5",children:`
                    "Oh, hush, hush, my child!" said Van Helsing. "God does not purchase souls in
                    this wise; and the Devil, though he may purchase, does not keep faith. But God
                    is merciful and just, and knows your pain and your devotion to that dear Madam
                    Mina. Think you, how her pain would be doubled, did she but hear your wild
                    words. Do not fear any of us, we are all devoted to this cause, and to-day shall
                    see the end. The time is coming for action; to-day this Vampire is limit to the
                    powers of man, and till sunset he may not change. It will take him time to
                    arrive here--see, it is twenty minutes past one--and there are yet some times
                    before he can hither come, be he never so quick. What we must hope for is that
                    my Lord Arthur and Quincey arrive first."
                    `}),e.jsx("p",{className:"py-10",children:`
                    "He will be here before long now," said Van Helsing, who had been consulting his
                    pocket-book. "Nota bene, in Madam's telegram he went south from Carfax, that
                    means he went to cross the river, and he could only do so at slack of tide,
                    which should be something before one o'clock. That he went south has a meaning
                    for us. He is as yet only suspicious; and he went from Carfax first to the place
                    where he would suspect interference least. You must have been at Bermondsey only
                    a short time before him. That he is not here already shows that he went to Mile
                    End next. This took him some time; for he would then have to be carried over the
                    river in some way. Believe me, my friends, we shall not have long to wait now.
                    We should have ready some plan of attack, so that we may throw away no chance.
                    Hush, there is no time now. Have all your arms! Be ready!" He held up a warning
                    hand as he spoke, for we all could hear a key softly inserted in the lock of the
                    hall door.
                    `}),e.jsx("span",{children:"litipsum.com"}),e.jsx(E,{title:"Some important information",intent:"info"}),e.jsx(k,{checked:!1,ariaLabel:"test",onChange:w})]})},argTypes:{children:p}};var I,S,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var T,V,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    footer: hiddenArgControl
  },
  render: ({
    children,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShown, setIsShown] = useState(false);
    const toggleBtn = () => setIsShown(val => !val);
    return <div className="body-font">
                <button type="button" onClick={toggleBtn} className="bg-neutral-100 px-4 py-2 shadow">
                    show Modal
                </button>

                <Dialog {...args} footer={<IconFooters onClose={() => setIsShown(false)} />} isShown={isShown} onClose={toggleBtn}>
                    {children}
                </Dialog>
            </div>;
  }
}`,...(D=(V=m.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var B,_,L;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>
                <Toggle checked ariaLabel="test" onChange={noop} />
                <p className="py-10">Paragraph Content</p>
                <FormField>
                    <FormField.LabelGroup>
                        <FormField.Label htmlFor="value">Label</FormField.Label>
                        <FormField.Description id="value-description">
                            Description
                        </FormField.Description>
                    </FormField.LabelGroup>
                    <FormField.RadioInput id="value" value="value_1" onChange={noop}>
                        <FormField.RadioInput.Option value="value_1">
                            Value 1
                        </FormField.RadioInput.Option>
                        <FormField.RadioInput.Option value="value_2">
                            Value 2
                        </FormField.RadioInput.Option>
                        <FormField.RadioInput.Option value="value_3" disabled>
                            Value 3
                        </FormField.RadioInput.Option>
                    </FormField.RadioInput>
                </FormField>
                <p className="py-5">
                    {\`
                    "Oh, hush, hush, my child!" said Van Helsing. "God does not purchase souls in
                    this wise; and the Devil, though he may purchase, does not keep faith. But God
                    is merciful and just, and knows your pain and your devotion to that dear Madam
                    Mina. Think you, how her pain would be doubled, did she but hear your wild
                    words. Do not fear any of us, we are all devoted to this cause, and to-day shall
                    see the end. The time is coming for action; to-day this Vampire is limit to the
                    powers of man, and till sunset he may not change. It will take him time to
                    arrive here--see, it is twenty minutes past one--and there are yet some times
                    before he can hither come, be he never so quick. What we must hope for is that
                    my Lord Arthur and Quincey arrive first."
                    \`}
                </p>

                <p className="py-10">
                    {\`
                    "He will be here before long now," said Van Helsing, who had been consulting his
                    pocket-book. "Nota bene, in Madam's telegram he went south from Carfax, that
                    means he went to cross the river, and he could only do so at slack of tide,
                    which should be something before one o'clock. That he went south has a meaning
                    for us. He is as yet only suspicious; and he went from Carfax first to the place
                    where he would suspect interference least. You must have been at Bermondsey only
                    a short time before him. That he is not here already shows that he went to Mile
                    End next. This took him some time; for he would then have to be carried over the
                    river in some way. Believe me, my friends, we shall not have long to wait now.
                    We should have ready some plan of attack, so that we may throw away no chance.
                    Hush, there is no time now. Have all your arms! Be ready!" He held up a warning
                    hand as he spoke, for we all could hear a key softly inserted in the lock of the
                    hall door.
                    \`}
                </p>
                <span>litipsum.com</span>
                <Alert title="Some important information" intent="info" />
                <Toggle checked={false} ariaLabel="test" onChange={noop} />
            </>
  },
  argTypes: {
    children: hiddenArgControl
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const be=["Default","WithFooterButtons","WithLongContent"];export{u as Default,m as WithFooterButtons,c as WithLongContent,be as __namedExportsOrder,ve as default};
//# sourceMappingURL=dialog.stories-1213b104.js.map
