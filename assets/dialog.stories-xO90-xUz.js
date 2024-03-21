import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as l}from"./index-OjgoNOWw.js";import{g as _,h as u}from"./storybook-utils-94J-CLQK.js";import{I as q}from"./icon-button-4gxnxrGR.js";import{c as y}from"./class-names-xhKKfcKT.js";import{j as M,k as A}from"./zoom-to-fit-icon-65magoHv.js";import{t as g}from"./transition-FMZahZh2.js";import{_ as d}from"./dialog-XDklIeLN.js";import{B as x}from"./button-ufHQn21l.js";import{F as a}from"./form-field-AdYr7HJv.js";import{T as F}from"./toggle-S7kCR6pX.js";import{A as W}from"./alert-RV1XQKHJ.js";import"./render--CnTCjM4.js";import"./open-closed-QZcf9p9x.js";import"./use-is-mounted-sHLtXe0b.js";import"./disposables-x8EK1kJp.js";import"./use-disposables-zYA53INM.js";import"./use-flags-FD8DIccc.js";import"./keyboard-ypJuuhig.js";import"./bugs-DTVvle51.js";import"./hidden-io_QVhfh.js";import"./focus-management-3l6xl84w.js";import"./owner-k5blU4nj.js";import"./use-root-containers-FaFnNgX4.js";import"./use-owner-is5PDNtX.js";import"./index-mQqIOHEI.js";import"./platform-SfVjinHA.js";import"./description-Cx4STRI4.js";import"./spinner-wMFQnwL5.js";import"./label-i0FK8Lz6.js";import"./use-text-value-5FULYfhL.js";import"./use-resolve-button-type-CvYxBXG6.js";import"./badge-fPVn3-DO.js";import"./tag-KJKMb2LC.js";const p=({isShown:t,children:s,className:r,isCloseable:n=!0,footer:o,footerPosition:i="end",onClose:v,title:V,hasBackground:H=!0,position:b="center"})=>{const f=(O=!1)=>{n&&v&&v(O)};return e.jsx(g,{show:t,as:l.Fragment,children:e.jsxs(d,{as:"div",onClose:f,children:[H?e.jsx(g.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 z-40 bg-modal-background","aria-hidden":"true",onClick:()=>f(!0)})}):null,e.jsx("div",{className:y("fixed inset-0 z-50 flex overflow-y-auto p-8",b==="bottom-right"&&"items-end justify-end",b==="center"&&"items-center justify-center"),children:e.jsx(g.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:e.jsxs(d.Panel,{className:y("flex w-[736px] transform flex-col overflow-y-auto rounded-md bg-neutral-0 shadow-lg transition-all",!o&&"pb-8",r),children:[e.jsxs("div",{className:"relative mx-10 mt-10",children:[e.jsx(d.Title,{className:"mb-6 pr-12 text-lg font-semibold text-neutral-900",children:V}),n&&e.jsx(q,{className:"absolute right-0 top-0",Icon:M,type:"minimal",onClick:()=>f(!1)}),e.jsx(d.Description,{as:"div",children:s})]}),!!o&&e.jsx("div",{id:"dialog-footer",className:y("sticky bottom-0 left-0 flex flex-row gap-2 bg-neutral-0 px-10 pb-8 pt-8",i==="end"?"justify-end":"justify-start"),children:o})]})})})]})})};p.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isShown:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(submitted: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"submitted"}],return:{name:"void"}}},description:""},isCloseable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"}]},description:""},footerPosition:{required:!1,tsType:{name:"union",raw:'"end" | "start"',elements:[{name:"literal",value:'"end"'},{name:"literal",value:'"start"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hasBackground:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:'"center" | "bottom-right"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}}}};const w=()=>{},G=()=>e.jsx("span",{children:"test footer 🍭"}),L=({onClose:t})=>e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"secondary",onClick:()=>t==null?void 0:t(!1),children:"Cancel"}),e.jsx(x,{variant:"primary",LeftIcon:A,onClick:()=>t==null?void 0:t(!0),children:"Confirm"})]}),j={undefined:void 0,SpanFooter:e.jsx(G,{}),buttons:e.jsx(L,{})},E={options:Object.keys(j),mapping:j},ke={title:"Dialog",component:p,parameters:{..._("Modal showing on top of the screen"),inlineStories:!1},args:{title:"Dialog Title",children:"Dialog Description",isShown:!1,footer:void 0},argTypes:{isShown:u,onClose:u,footer:E},render:({children:t,...s})=>{const[r,n]=l.useState(!1),o=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:o,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(p,{...s,isShown:r,onClose:o,children:t})]})}},h={},m={argTypes:{footer:u},render:({children:t,...s})=>{const[r,n]=l.useState(!1),o=()=>n(i=>!i);return e.jsxs("div",{className:"body-font",children:[e.jsx("button",{type:"button",onClick:o,className:"bg-neutral-100 px-4 py-2 shadow",children:"show Modal"}),e.jsx(p,{...s,footer:e.jsx(L,{onClose:()=>n(!1)}),isShown:r,onClose:o,children:t})]})}},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(F.Switch,{checked:!0,ariaLabel:"test",onChange:w}),e.jsx("p",{className:"py-10",children:"Paragraph Content"}),e.jsxs(a,{children:[e.jsxs(a.LabelGroup,{children:[e.jsx(a.Label,{htmlFor:"value",children:"Label"}),e.jsx(a.Description,{id:"value-description",children:"Description"})]}),e.jsxs(a.RadioInput,{id:"value",value:"value_1",onChange:w,children:[e.jsx(a.RadioInput.Option,{value:"value_1",children:"Value 1"}),e.jsx(a.RadioInput.Option,{value:"value_2",children:"Value 2"}),e.jsx(a.RadioInput.Option,{value:"value_3",disabled:!0,children:"Value 3"})]})]}),e.jsx("p",{className:"py-5",children:`
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
                    `}),e.jsx("span",{children:"litipsum.com"}),e.jsx(W,{title:"Some important information",intent:"info"}),e.jsx(F.Switch,{checked:!1,ariaLabel:"test",onChange:w})]})},argTypes:{children:u}};var k,T,S;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(S=(T=h.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var N,C,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,D,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const Te=["Default","WithFooterButtons","WithLongContent"];export{h as Default,m as WithFooterButtons,c as WithLongContent,Te as __namedExportsOrder,ke as default};
