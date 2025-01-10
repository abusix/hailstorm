import{j as e}from"./jsx-runtime-C798UXYj.js";import{R as K}from"./index-0d5eMwbi.js";import{c as t}from"./class-names-DnY5YZNL.js";import{F as i}from"./form-field-C7xVtKqU.js";import"./zoom-to-fit-icon-DdsCB6de.js";import"./use-resolve-button-type-HzzQKYtS.js";import"./keyboard-D0BTZntQ.js";import"./use-sync-refs-DhZgiOVe.js";import"./form-fields-HWr4pxRQ.js";import"./index-BoyHNU0R.js";import"./hidden-DfUyyskI.js";import"./description-CaDbXm72.js";import"./label-fWs8-lsP.js";import"./bugs-DpEN4NTH.js";import"./focus-management-CKkqTXfi.js";import"./use-text-value-D3ZnWpLS.js";import"./floating-Bhi-vCn9.js";import"./use-inert-others-D4nVU6H_.js";import"./portal-BQQr4JoD.js";import"./use-server-handoff-complete-UouYGEcd.js";import"./open-closed-FM4Rfwkx.js";import"./badge-Da1HxQE-.js";import"./index-BgfbgFhO.js";import"./use-event-listener-EaZKqAMH.js";import"./active-element-history-DjNnwGR_.js";import"./tag-C9CGXtt3.js";const s=({children:a,className:o,colSpan:r,...V})=>e.jsx("thead",{className:t(o),...V,children:e.jsx("tr",{children:e.jsx("th",{className:"headline-400 rounded-t-md border border-neutral-300 bg-neutral-50 px-2.5 py-4 text-left text-neutral-900",colSpan:r,children:a})})});try{s.displayName="TableKeyValuePairHeader",s.__docgenInfo={description:"",displayName:"TableKeyValuePairHeader",props:{colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}}}}}catch{}const y=({children:a,className:o,...r})=>e.jsx("tr",{className:t("h-12 [&:last-child_>_td:first-child]:rounded-bl-md [&:last-child_>_td:first-child]:border-l [&:last-child_>_td:first-child]:border-neutral-300 [&:last-child_>_td:last-child]:rounded-br-md",o),...r,children:a});try{y.displayName="TableKeyValuePairBodyRow",y.__docgenInfo={description:"",displayName:"TableKeyValuePairBodyRow",props:{}}}catch{}const u=({children:a,className:o,...r})=>e.jsx("td",{className:t("border-b border-r border-neutral-300 bg-neutral-0 px-2.5 text-neutral-900",o),...r,children:a});try{u.displayName="TableKeyValuePairBodyValueCell",u.__docgenInfo={description:"",displayName:"TableKeyValuePairBodyValueCell",props:{}}}catch{}const c=({children:a,className:o,...r})=>e.jsx("td",{className:t("headline-400 border-b border-r border-neutral-300 bg-neutral-0 px-2.5 text-neutral-900 first:border-l",o),...r,children:a});try{c.displayName="TableKeyValuePairBodyKeyCell",c.__docgenInfo={description:"",displayName:"TableKeyValuePairBodyKeyCell",props:{}}}catch{}const d=({children:a,...o})=>e.jsx("tbody",{...o,children:a});d.Row=y;d.Key=c;d.Value=u;try{d.displayName="TableKeyValuePairBody",d.__docgenInfo={description:"",displayName:"TableKeyValuePairBody",props:{}}}catch{}const l=({children:a,className:o,...r})=>e.jsx("table",{className:t("w-full table-fixed border-separate border-spacing-0 text-sm",o),...r,children:a});l.Header=s;l.Body=d;try{l.displayName="TableKeyValuePair",l.__docgenInfo={description:"",displayName:"TableKeyValuePair",props:{}}}catch{}const G={title:"Table / Key-Value Pairs",component:l},h=[{id:1,name:"John Lennon",isDead:!0},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],B=()=>{const[a,o]=K.useState(null);return e.jsx(i,{children:e.jsxs(i.Listbox,{value:a,onChange:o,children:[e.jsx(i.Listbox.Button,{children:e.jsx(i.Listbox.Button.TextValue,{value:(a==null?void 0:a.name)??null,placeholder:"Select..."})}),e.jsx(i.Listbox.Options,{children:h.map(r=>e.jsx(i.Listbox.Option,{value:r,disabled:r.isDead,children:e.jsx(i.Listbox.Option.TextOption,{children:r.name})},r.id))})]})})},n=()=>e.jsx("div",{className:"min-h-[30rem]",children:e.jsxs(l,{children:[e.jsx(l.Header,{colSpan:4,children:"Details"}),e.jsxs(l.Body,{children:[e.jsxs(l.Body.Row,{children:[e.jsx(l.Body.Key,{children:"First Name"}),e.jsx(l.Body.Value,{children:"John"}),e.jsx(l.Body.Key,{children:"Age"}),e.jsx(l.Body.Value,{children:"John"})]}),e.jsxs(l.Body.Row,{children:[e.jsx(l.Body.Key,{children:"Last Name"}),e.jsx(l.Body.Value,{children:"Doe"}),e.jsx(l.Body.Key,{children:"Birth"}),e.jsx(l.Body.Value,{children:"01.01.1970"})]}),e.jsxs(l.Body.Row,{children:[e.jsx(l.Body.Key,{children:"Status"}),e.jsx(l.Body.Value,{children:e.jsx(B,{})}),e.jsx(l.Body.Value,{colSpan:2,children:e.jsx("a",{href:"https://abusix.com",className:"inline-link",children:"Open Comments"})})]})]})]})});var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div className="min-h-[30rem]">
            <TableKeyValuePair>
                <TableKeyValuePair.Header colSpan={4}>Details</TableKeyValuePair.Header>

                <TableKeyValuePair.Body>
                    <TableKeyValuePair.Body.Row>
                        <TableKeyValuePair.Body.Key>First Name</TableKeyValuePair.Body.Key>
                        <TableKeyValuePair.Body.Value>John</TableKeyValuePair.Body.Value>

                        <TableKeyValuePair.Body.Key>Age</TableKeyValuePair.Body.Key>
                        <TableKeyValuePair.Body.Value>John</TableKeyValuePair.Body.Value>
                    </TableKeyValuePair.Body.Row>

                    <TableKeyValuePair.Body.Row>
                        <TableKeyValuePair.Body.Key>Last Name</TableKeyValuePair.Body.Key>
                        <TableKeyValuePair.Body.Value>Doe</TableKeyValuePair.Body.Value>

                        <TableKeyValuePair.Body.Key>Birth</TableKeyValuePair.Body.Key>
                        <TableKeyValuePair.Body.Value>01.01.1970</TableKeyValuePair.Body.Value>
                    </TableKeyValuePair.Body.Row>

                    <TableKeyValuePair.Body.Row>
                        <TableKeyValuePair.Body.Key>Status</TableKeyValuePair.Body.Key>
                        <TableKeyValuePair.Body.Value>
                            <ExampleListbox />
                        </TableKeyValuePair.Body.Value>

                        <TableKeyValuePair.Body.Value colSpan={2}>
                            <a href="https://abusix.com" className="inline-link">
                                Open Comments
                            </a>
                        </TableKeyValuePair.Body.Value>
                    </TableKeyValuePair.Body.Row>
                </TableKeyValuePair.Body>
            </TableKeyValuePair>
        </div>;
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,G as default};
