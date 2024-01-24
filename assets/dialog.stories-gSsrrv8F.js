import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{g as R,h as p}from"./storybook-utils-94J-CLQK.js";import{I as M}from"./icon-button-3DEpvMDo.js";import{c as y}from"./class-names-J070TWId.js";import{j as q,k as A}from"./zoom-to-fit-icon---bq2i_K.js";import{t as g}from"./transition-QBeGMtNr.js";import{_ as h}from"./dialog-4umSQeex.js";import{B as x}from"./button-jKqpHvyS.js";import{a}from"./form-field-nGpVbQrD.js";import{T as j}from"./toggle-huM1MEWr.js";import{A as W}from"./alert-Ds63m3qh.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./render-w54E0F54.js";import"./open-closed--zB8LTaK.js";import"./use-is-mounted-2jl3pcgu.js";import"./disposables-x8EK1kJp.js";import"./use-disposables-9CA2w67p.js";import"./use-flags-t0jpIEJ-.js";import"./keyboard-o6QkQYrw.js";import"./bugs-DTVvle51.js";import"./hidden-qqzWvBMn.js";import"./focus-management-gzNHToo7.js";import"./owner-fKE-7Rwj.js";import"./use-root-containers-9RN3yO0Y.js";import"./use-owner-g5X0ZmiI.js";import"./index-jmm5gWkb.js";import"./platform-xf9k1Dsu.js";import"./description-5F8ZuhcY.js";import"./spinner-E2xQXJan.js";import"./label-4h3njXKv.js";import"./use-text-value-q5k1B-6y.js";import"./use-resolve-button-type-_yXBvNtz.js";import"./badge-oLUvZuwe.js";import"./tag-IvA-YcUf.js";const d=({isShown:o,children:s,className:r,isCloseable:n=!0,footer:t,footerPosition:i="end",onClose:v,title:L,hasBackground:H=!0,position:b="center"})=>{const f=(O=!1)=>{n&&v&&v(O)};return e.jsx(g,{show:o,as:l.Fragment,children:e.jsxs(h,{as:"div",onClose:f,children:[H?e.jsx(g.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 z-40 bg-modal-background","aria-hidden":"true",onClick:()=>f(!0)})}):null,e.jsx("div",{className:y("fixed inset-0 z-50 flex overflow-y-auto p-8",b==="bottom-right"&&"items-end justify-end",b==="center"&&"items-center justify-center"),children:e.jsx(g.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:e.jsxs(h.Panel,{className:y("flex w-[736px] transform flex-col overflow-y-auto rounded-md bg-neutral-0 shadow-lg transition-all",!t&&"pb-8",r),children:[e.jsxs("div",{className:"relative mx-10 mt-10",children:[e.jsx(h.Title,{className:"mb-6 pr-12 text-lg font-semibold text-neutral-900",children:L}),n&&e.jsx(M,{className:"absolute right-0 top-0",Icon:q,type:"minimal",onClick:()=>f(!1)}),e.jsx(h.Description,{as:"div",children:s})]}),!!t&&e.jsx("div",{id:"dialog-footer",className:y("sticky bottom-0 left-0 flex flex-row gap-2 bg-neutral-0 px-10 pb-8 pt-8",i==="end"?"justify-end":"justify-start"),children:t})]})})})]})})};try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{isShown:{defaultValue:null,description:"",name:"isShown",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((submitted: boolean) => void)"}},isCloseable:{defaultValue:{value:"true"},description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},footerPosition:{defaultValue:{value:"end"},description:"",name:"footerPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},hasBackground:{defaultValue:{value:"true"},description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom-right"'}]}}}}}catch{}const w=()=>{},G=()=>e.jsx("span",{children:"test footer 🍭"}),_=({onClose:o})=>e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"secondary",onClick:()=>o==null?void 0:o(!1),children:"Cancel"}),e.jsx(x,{variant:"primary",LeftIcon:A,onClick:()=>o==null?void 0:o(!0),children:"Confirm"})]}),F={undefined:void 0,SpanFooter:e.jsx(G,{}),buttons:e.jsx(_,{})},E={options:Object.keys(F),mapping:F},Se={title:"Dialog",component:d,parameters:{...R("Modal showing on top of the screen"),inlineStories:!1},args:{title:"Dialog Title",children:"Dialog Description",isShown:!1,footer:void 0},argTypes:{isShown:p,onClose:p,footer:E},render:({children:o,...s})=>{const[r,n]=l.useState(!1),t=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:t,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(d,{...s,isShown:r,onClose:t,children:o})]})}},m={},u={argTypes:{footer:p},render:({children:o,...s})=>{const[r,n]=l.useState(!1),t=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:t,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(d,{...s,footer:e.jsx(_,{onClose:()=>n(!1)}),isShown:r,onClose:t,children:o})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(j.Switch,{checked:!0,ariaLabel:"test",onChange:w}),e.jsx("p",{className:"py-10",children:"Paragraph Content"}),e.jsxs(a,{children:[e.jsxs(a.LabelGroup,{children:[e.jsx(a.Label,{htmlFor:"value",children:"Label"}),e.jsx(a.Description,{id:"value-description",children:"Description"})]}),e.jsxs(a.RadioInput,{id:"value",value:"value_1",onChange:w,children:[e.jsx(a.RadioInput.Option,{value:"value_1",children:"Value 1"}),e.jsx(a.RadioInput.Option,{value:"value_2",children:"Value 2"}),e.jsx(a.RadioInput.Option,{value:"value_3",disabled:!0,children:"Value 3"})]})]}),e.jsx("p",{className:"py-5",children:`
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
                    `}),e.jsx("span",{children:"litipsum.com"}),e.jsx(W,{title:"Some important information",intent:"info"}),e.jsx(j.Switch,{checked:!1,ariaLabel:"test",onChange:w})]})},argTypes:{children:p}};var k,S,C;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,N,T;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var D,V,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <>
                <Toggle.Switch checked ariaLabel="test" onChange={noop} />
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
                <Toggle.Switch checked={false} ariaLabel="test" onChange={noop} />
            </>
  },
  argTypes: {
    children: hiddenArgControl
  }
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const Ce=["Default","WithFooterButtons","WithLongContent"];export{m as Default,u as WithFooterButtons,c as WithLongContent,Ce as __namedExportsOrder,Se as default};
