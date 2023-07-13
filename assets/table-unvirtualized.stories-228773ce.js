import{a as n,j as a}from"./jsx-runtime-91a467a5.js";import{r as c}from"./index-8db94870.js";import{T as e}from"./table-unvirtualized-e69c4df9.js";import{B as y}from"./button-3e44cdaa.js";import"./_commonjsHelpers-042e6b4d.js";import"./class-names-9cb99c69.js";import"./spinner-fbacb391.js";const f={title:"Table / Unvirtualized",component:e};function h(){const i=[];for(let l=0;l<20;l++){const r={id:l.toString(),name:`${l.toString()} name`,description:`${l.toString()} description`,price:l};i.push(r)}return i}const t=()=>{const i=c.useMemo(()=>h(),[]);return n(e,{children:[a(e.Header,{children:n(e.Header.Row,{children:[a(e.Header.Cell,{className:"w-40",children:"Name"}),a(e.Header.Cell,{children:"Description"}),a(e.Header.Cell,{align:"right",children:"Price"})]})}),a(e.Body,{children:i.map(l=>n(e.Body.Row,{children:[a(e.Body.Cell,{children:l.name}),a(e.Body.Cell,{children:l.description}),a(e.Body.Cell,{align:"right",children:n("span",{className:"whitespace-nowrap font-mono",children:["$ ",l.price.toFixed(2)]})})]},l.id))})]})},d=()=>n(e,{children:[a(e.Header,{children:n(e.Header.Row,{children:[a(e.Header.Cell,{className:"w-40",children:"Name"}),a(e.Header.Cell,{children:"Description"}),a(e.Header.Cell,{align:"right",children:"Price"})]})}),a(e.Body,{children:a(e.Body.EmptyPlaceholder,{title:"Empty table",description:"You have not added any items yet.",colSpan:3,children:a(y,{type:"secondary",onClick:()=>alert("clicked"),children:"Add New Item"})})})]}),o=()=>{const[i,l]=c.useState([]);return c.useEffect(()=>{const r=setTimeout(()=>{l(h())},4e3);return()=>{clearTimeout(r)}},[]),n(e,{children:[a(e.Header,{children:n(e.Header.Row,{children:[a(e.Header.Cell,{className:"w-40",children:"Name"}),a(e.Header.Cell,{children:"Description"}),a(e.Header.Cell,{align:"right",children:"Price"})]})}),a(e.Body,{children:i.length?i.map(r=>n(e.Body.Row,{children:[a(e.Body.Cell,{children:r.name}),a(e.Body.Cell,{children:r.description}),a(e.Body.Cell,{align:"right",children:n("span",{className:"whitespace-nowrap font-mono",children:["$ ",r.price.toFixed(2)]})})]},r.name)):a(e.Body.LoadingIndicator,{colSpan:3})})]})};var s,u,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const exampleData = useMemo(() => createExampleData(), []);
  return <TableUnvirtualized>
            <TableUnvirtualized.Header>
                <TableUnvirtualized.Header.Row>
                    <TableUnvirtualized.Header.Cell className="w-40">
                        Name
                    </TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell>Description</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell align="right">
                        Price
                    </TableUnvirtualized.Header.Cell>
                </TableUnvirtualized.Header.Row>
            </TableUnvirtualized.Header>

            <TableUnvirtualized.Body>
                {exampleData.map(item => <TableUnvirtualized.Body.Row key={item.id}>
                        <TableUnvirtualized.Body.Cell>{item.name}</TableUnvirtualized.Body.Cell>

                        <TableUnvirtualized.Body.Cell>
                            {item.description}
                        </TableUnvirtualized.Body.Cell>

                        <TableUnvirtualized.Body.Cell align="right">
                            <span className="whitespace-nowrap font-mono">
                                $ {item.price.toFixed(2)}
                            </span>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>)}
            </TableUnvirtualized.Body>
        </TableUnvirtualized>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,T,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <TableUnvirtualized>
            <TableUnvirtualized.Header>
                <TableUnvirtualized.Header.Row>
                    <TableUnvirtualized.Header.Cell className="w-40">
                        Name
                    </TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell>Description</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell align="right">
                        Price
                    </TableUnvirtualized.Header.Cell>
                </TableUnvirtualized.Header.Row>
            </TableUnvirtualized.Header>

            <TableUnvirtualized.Body>
                <TableUnvirtualized.Body.EmptyPlaceholder title="Empty table" description="You have not added any items yet." colSpan={3}>
                    <Button type="secondary" onClick={() => alert("clicked")}>
                        Add New Item
                    </Button>
                </TableUnvirtualized.Body.EmptyPlaceholder>
            </TableUnvirtualized.Body>
        </TableUnvirtualized>;
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var v,z,U;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [data, setData] = useState<ExampleData[]>([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData(createExampleData());
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <TableUnvirtualized>
            <TableUnvirtualized.Header>
                <TableUnvirtualized.Header.Row>
                    <TableUnvirtualized.Header.Cell className="w-40">
                        Name
                    </TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell>Description</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell align="right">
                        Price
                    </TableUnvirtualized.Header.Cell>
                </TableUnvirtualized.Header.Row>
            </TableUnvirtualized.Header>

            <TableUnvirtualized.Body>
                {data.length ? data.map(row => <TableUnvirtualized.Body.Row key={row.name}>
                            <TableUnvirtualized.Body.Cell>{row.name}</TableUnvirtualized.Body.Cell>
                            <TableUnvirtualized.Body.Cell>
                                {row.description}
                            </TableUnvirtualized.Body.Cell>
                            <TableUnvirtualized.Body.Cell align="right">
                                <span className="whitespace-nowrap font-mono">
                                    $ {row.price.toFixed(2)}
                                </span>
                            </TableUnvirtualized.Body.Cell>
                        </TableUnvirtualized.Body.Row>) : <TableUnvirtualized.Body.LoadingIndicator colSpan={3} />}
            </TableUnvirtualized.Body>
        </TableUnvirtualized>;
}`,...(U=(z=o.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const x=["Default","EmptyTable","LoadingTable"];export{t as Default,d as EmptyTable,o as LoadingTable,x as __namedExportsOrder,f as default};
//# sourceMappingURL=table-unvirtualized.stories-228773ce.js.map
