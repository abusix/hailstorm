import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as l}from"./index-DX35FyXq.js";import{g as O,h as c}from"./storybook-utils-C5xEhci0.js";import{w as R}from"./description-YAtjMrPw.js";import{P as M,$ as q,j as A}from"./dialog-AYPEzhJh.js";import{X as W,I as v}from"./transition-B31nJbQ_.js";import{j as G,k as P}from"./zoom-to-fit-icon-DAkWptYj.js";import{c as f}from"./class-names-B8CnD4Xb.js";import{I as E}from"./icon-button-Dd6WYPac.js";import{B as b}from"./button-0AZshuym.js";import{F as a}from"./form-field-BMowxwl9.js";import{T as x}from"./toggle-x7QpK8qU.js";import{A as z}from"./alert-CQIcEKfh.js";import"./use-sync-refs-DTQ85WuU.js";import"./keyboard-CMPngVPH.js";import"./use-event-listener-BqmHHRJY.js";import"./portal-DK2bHMyK.js";import"./focus-management-2QVwgUsp.js";import"./index-CrrVXmAv.js";import"./use-server-handoff-complete-czgFdGyU.js";import"./use-inert-others-CKkByFCa.js";import"./use-tab-direction-Da1JsWWj.js";import"./hidden-BRuiewI3.js";import"./close-provider-Cb2w3_dY.js";import"./open-closed-CW48b85x.js";import"./use-is-mounted-l-WgHzsW.js";import"./active-element-history-DvWOOdXd.js";import"./spinner-DVLNtNYV.js";import"./use-resolve-button-type-DPkGNm3y.js";import"./form-fields-xMSnkdfg.js";import"./label-Bl9aPnpE.js";import"./bugs-DpEN4NTH.js";import"./use-text-value-DdH_QLwy.js";import"./floating-JN-7RHnQ.js";import"./badge-DoimoE0G.js";import"./index-DMIvZpgf.js";import"./tag-Bojis5F1.js";const d=({isShown:o,children:s,className:r,isCloseable:n=!0,footer:t,footerPosition:i="end",onClose:g,title:_,hasBackground:L=!0,position:w="center"})=>{const p=(H=!1)=>{n&&g&&g(H)};return e.jsx(W,{show:o,as:l.Fragment,children:e.jsxs(M,{as:"div",onClose:p,children:[L?e.jsx(v,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 z-40 bg-modal-background","aria-hidden":"true",onClick:()=>p(!0)})}):null,e.jsx("div",{className:f("fixed inset-0 z-50 flex overflow-y-auto p-8",w==="bottom-right"&&"items-end justify-end",w==="center"&&"items-center justify-center"),children:e.jsx(v,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:e.jsxs(q,{className:f("flex w-[736px] transform flex-col overflow-y-auto rounded-md bg-neutral-0 shadow-lg transition-all",!t&&"pb-8",r),children:[e.jsxs("div",{className:"relative mx-10 mt-10",children:[e.jsx(A,{className:"mb-6 pr-12 text-lg font-semibold text-neutral-900",children:_}),n&&e.jsx(E,{className:"absolute right-0 top-0",Icon:G,type:"minimal",onClick:()=>p(!1)}),e.jsx(R,{as:"div",children:s})]}),!!t&&e.jsx("div",{id:"dialog-footer",className:f("sticky bottom-0 left-0 flex flex-row gap-2 bg-neutral-0 px-10 pb-8 pt-8",i==="end"?"justify-end":"justify-start"),children:t})]})})})]})})};try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{isShown:{defaultValue:null,description:"",name:"isShown",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((submitted: boolean) => void)"}},isCloseable:{defaultValue:{value:"true"},description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},footerPosition:{defaultValue:{value:"end"},description:"",name:"footerPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},hasBackground:{defaultValue:{value:"true"},description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom-right"'}]}}}}}catch{}const y=()=>{},Q=()=>e.jsx("span",{children:"test footer 🍭"}),B=({onClose:o})=>e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"secondary",onClick:()=>o==null?void 0:o(!1),children:"Cancel"}),e.jsx(b,{variant:"primary",LeftIcon:P,onClick:()=>o==null?void 0:o(!0),children:"Confirm"})]}),j={undefined:void 0,SpanFooter:e.jsx(Q,{}),buttons:e.jsx(B,{})},X={options:Object.keys(j),mapping:j},Ve={title:"Dialog",component:d,parameters:{...O("Modal showing on top of the screen"),inlineStories:!1},args:{title:"Dialog Title",children:"Dialog Description",isShown:!1,footer:void 0},argTypes:{isShown:c,onClose:c,footer:X},render:({children:o,...s})=>{const[r,n]=l.useState(!1),t=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:t,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(d,{...s,isShown:r,onClose:t,children:o})]})}},h={},m={argTypes:{footer:c},render:({children:o,...s})=>{const[r,n]=l.useState(!1),t=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:t,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(d,{...s,footer:e.jsx(B,{onClose:()=>n(!1)}),isShown:r,onClose:t,children:o})]})}},u={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(x.Switch,{checked:!0,ariaLabel:"test",onChange:y}),e.jsx("p",{className:"py-10",children:"Paragraph Content"}),e.jsxs(a,{children:[e.jsxs(a.LabelGroup,{children:[e.jsx(a.Label,{htmlFor:"value",children:"Label"}),e.jsx(a.Description,{id:"value-description",children:"Description"})]}),e.jsxs(a.RadioInput,{id:"value",value:"value_1",onChange:y,children:[e.jsx(a.RadioInput.Option,{value:"value_1",children:"Value 1"}),e.jsx(a.RadioInput.Option,{value:"value_2",children:"Value 2"}),e.jsx(a.RadioInput.Option,{value:"value_3",disabled:!0,children:"Value 3"})]})]}),e.jsx("p",{className:"py-5",children:`
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
                    `}),e.jsx("span",{children:"litipsum.com"}),e.jsx(z,{title:"Some important information",intent:"info"}),e.jsx(x.Switch,{checked:!1,ariaLabel:"test",onChange:y})]})},argTypes:{children:c}};var F,k,S;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var I,C,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(C=m.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var T,D,V;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(D=u.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const Be=["Default","WithFooterButtons","WithLongContent"];export{h as Default,m as WithFooterButtons,u as WithLongContent,Be as __namedExportsOrder,Ve as default};
