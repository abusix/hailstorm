import{j as e,a as r,F}from"./jsx-runtime-91a467a5.js";import{r as s}from"./index-8db94870.js";import{B as b}from"./button-3e44cdaa.js";import{I as V}from"./icon-button-52736ca9.js";import{c as p}from"./class-names-9cb99c69.js";import{i as j,j as D}from"./zoom-to-fit-icon-b8f307a9.js";import{$ as f,_ as i}from"./transition-e050fb10.js";import{g as B,h as x}from"./storybook-utils-5525ffdc.js";import"./_commonjsHelpers-042e6b4d.js";import"./spinner-fbacb391.js";import"./keyboard-5e933fe8.js";import"./bugs-7a186658.js";import"./hidden-c4917ca2.js";import"./focus-management-d35c5d70.js";import"./open-closed-535072ce.js";import"./use-flags-cf9437e9.js";import"./use-owner-470a7b02.js";import"./index-8ce4a492.js";import"./description-e80611a4.js";const d=({isShown:n,children:c,className:m,isCloseable:t=!0,footer:a,footerPosition:u="end",onClose:h,height:y,width:g,title:_,hasBackground:k=!0,position:v="center"})=>{const o=(q=!1)=>{t&&h&&h(q)};return e(f,{show:n,as:s.Fragment,children:r(i,{as:"div",onClose:o,children:[k?e(f.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-modal-background","aria-hidden":"true",onClick:()=>o(!0)})}):null,e("div",{className:p("fixed inset-0 flex overflow-y-auto p-8",v==="bottom-right"&&"items-end justify-end",v==="center"&&"items-center justify-center"),children:e(f.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:r(i.Panel,{className:p("flex transform flex-col overflow-y-auto rounded-md bg-neutral-0 shadow-lg transition-all",y?`h-[${y}px]`:"max-h-full",g?`w-[${g}px]`:"w-[592px]",m),children:[r("div",{className:"relative mx-10 mt-10",children:[e(i.Title,{className:"mb-6 pr-12 text-lg font-semibold text-neutral-900",children:_}),t&&e(V,{className:"absolute right-0 top-0",Icon:j,type:"minimal",onClick:()=>o(!1)}),e(i.Description,{as:"div",children:c})]}),e("div",{id:"dialog-footer",className:p("sticky bottom-0 left-0 flex flex-row gap-2 bg-neutral-0 px-10 pb-8 pt-8",u==="end"?"justify-end":"justify-start"),children:a===void 0?r(F,{children:[e(b,{type:"secondary",onClick:()=>o(!1),disabled:!t,children:"Cancel"}),e(b,{type:"primary",LeftIcon:D,onClick:()=>o(!0),disabled:t,children:"Confirm"})]}):a})]})})})]})})};try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{isShown:{defaultValue:null,description:"",name:"isShown",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((submitted: boolean) => void)"}},isCloseable:{defaultValue:{value:"true"},description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},footerPosition:{defaultValue:{value:"end"},description:"",name:"footerPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},hasBackground:{defaultValue:{value:"true"},description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom-right"'}]}}}}}catch{}const I=()=>e("span",{children:"test footer 🍭"}),w={undefined:void 0,SpanFooter:e(I,{})},T={options:Object.keys(w),mapping:w},ee={title:"Dialog",component:d,parameters:{...B("Modal showing on top of the screen"),inlineStories:!1},args:{title:"Dialog Title",children:"Dialog Description",isShown:!1,footer:void 0},argTypes:{isShown:x,onClose:x,footer:T},render:({children:n,...c})=>{const[m,t]=s.useState(!1),a=()=>t(u=>!u);return r("div",{className:"body-font",children:[e("button",{type:"button",onClick:a,className:"bg-neutral-100 py-2 px-4 shadow",children:"show Modal"}),e(d,{...c,isShown:m,onClose:a,children:n})]})}},l={};var C,N,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const te=["Base"];export{l as Base,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=dialog.stories-aacebe27.js.map
