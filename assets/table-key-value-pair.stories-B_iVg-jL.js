import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as K}from"./index-DRjF_FHU.js";import{c as t}from"./class-names-uFcjhHb5.js";import{F as i}from"./form-field-BPNwpm05.js";import"./zoom-to-fit-icon-BI_77R5n.js";import"./use-resolve-button-type-anS-OQ-j.js";import"./keyboard-BXsyG9-6.js";import"./use-sync-refs-4PSbzubZ.js";import"./form-fields-B4NF69zT.js";import"./index-Bgj8Hic8.js";import"./hidden-BTT1K2UY.js";import"./description-ZkavqmAj.js";import"./label-mZgg-6rf.js";import"./bugs-DpEN4NTH.js";import"./focus-management-CtIqEZ7d.js";import"./use-text-value-JNJ6Y_Ev.js";import"./portal-B37XtxD-.js";import"./use-server-handoff-complete-D6bOsrEP.js";import"./floating-ByVDprMS.js";import"./use-inert-others-Dv-IK1tz.js";import"./open-closed-yLnem6BE.js";import"./badge-Cwg-25o4.js";import"./index-BwrluLaz.js";import"./use-event-listener-BepRZUYA.js";import"./active-element-history-BK4c3ksb.js";import"./tag-DUp8hLh8.js";const s=({children:a,className:o,colSpan:r,...V})=>e.jsx("thead",{className:t(o),...V,children:e.jsx("tr",{children:e.jsx("th",{className:"headline-400 rounded-t-md border border-neutral-300 bg-neutral-50 px-2.5 py-4 text-left text-neutral-900",colSpan:r,children:a})})});try{s.displayName="TableKeyValuePairHeader",s.__docgenInfo={description:"",displayName:"TableKeyValuePairHeader",props:{colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}}}}}catch{}const y=({children:a,className:o,...r})=>e.jsx("tr",{className:t("h-12 [&:last-child_>_td:first-child]:rounded-bl-md [&:last-child_>_td:first-child]:border-l [&:last-child_>_td:first-child]:border-neutral-300 [&:last-child_>_td:last-child]:rounded-br-md",o),...r,children:a});try{y.displayName="TableKeyValuePairBodyRow",y.__docgenInfo={description:"",displayName:"TableKeyValuePairBodyRow",props:{}}}catch{}const u=({children:a,className:o,...r})=>e.jsx("td",{className:t("border-b border-r border-neutral-300 bg-neutral-0 px-2.5 text-neutral-900",o),...r,children:a});try{u.displayName="TableKeyValuePairBodyValueCell",u.__docgenInfo={description:"",displayName:"TableKeyValuePairBodyValueCell",props:{}}}catch{}const c=({children:a,className:o,...r})=>e.jsx("td",{className:t("headline-400 border-b border-r border-neutral-300 bg-neutral-0 px-2.5 text-neutral-900 first:border-l",o),...r,children:a});try{c.displayName="TableKeyValuePairBodyKeyCell",c.__docgenInfo={description:"",displayName:"TableKeyValuePairBodyKeyCell",props:{}}}catch{}const d=({children:a,...o})=>e.jsx("tbody",{...o,children:a});d.Row=y;d.Key=c;d.Value=u;try{d.displayName="TableKeyValuePairBody",d.__docgenInfo={description:"",displayName:"TableKeyValuePairBody",props:{}}}catch{}const l=({children:a,className:o,...r})=>e.jsx("table",{className:t("w-full table-fixed border-separate border-spacing-0 text-sm",o),...r,children:a});l.Header=s;l.Body=d;try{l.displayName="TableKeyValuePair",l.__docgenInfo={description:"",displayName:"TableKeyValuePair",props:{}}}catch{}const G={title:"Table / Key-Value Pairs",component:l},h=[{id:1,name:"John Lennon",isDead:!0},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],B=()=>{const[a,o]=K.useState(null);return e.jsx(i,{children:e.jsxs(i.Listbox,{value:a,onChange:o,children:[e.jsx(i.Listbox.Button,{children:e.jsx(i.Listbox.Button.TextValue,{value:(a==null?void 0:a.name)??null,placeholder:"Select..."})}),e.jsx(i.Listbox.Options,{children:h.map(r=>e.jsx(i.Listbox.Option,{value:r,disabled:r.isDead,children:e.jsx(i.Listbox.Option.TextOption,{children:r.name})},r.id))})]})})},n=()=>e.jsx("div",{className:"min-h-[30rem]",children:e.jsxs(l,{children:[e.jsx(l.Header,{colSpan:4,children:"Details"}),e.jsxs(l.Body,{children:[e.jsxs(l.Body.Row,{children:[e.jsx(l.Body.Key,{children:"First Name"}),e.jsx(l.Body.Value,{children:"John"}),e.jsx(l.Body.Key,{children:"Age"}),e.jsx(l.Body.Value,{children:"John"})]}),e.jsxs(l.Body.Row,{children:[e.jsx(l.Body.Key,{children:"Last Name"}),e.jsx(l.Body.Value,{children:"Doe"}),e.jsx(l.Body.Key,{children:"Birth"}),e.jsx(l.Body.Value,{children:"01.01.1970"})]}),e.jsxs(l.Body.Row,{children:[e.jsx(l.Body.Key,{children:"Status"}),e.jsx(l.Body.Value,{children:e.jsx(B,{})}),e.jsx(l.Body.Value,{colSpan:2,children:e.jsx("a",{href:"https://abusix.com",className:"inline-link",children:"Open Comments"})})]})]})]})});var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
