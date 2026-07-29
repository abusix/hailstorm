import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as o}from"./index-DRjF_FHU.js";import{T as a}from"./table-unvirtualized-Bpp0Q1pp.js";import{B as h}from"./button-D3iV7Fq3.js";import"./class-names-AhVFtEzo.js";import"./spinner-DQmhNHpC.js";const w={title:"Table / Unvirtualized",component:a};function U(){const r=[];for(let l=0;l<20;l++){const n={id:l.toString(),name:`${l.toString()} name`,description:`${l.toString()} description`,price:l};r.push(n)}return r}const i=()=>{const r=o.useMemo(()=>U(),[]);return e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Header.Row,{children:[e.jsx(a.Header.Cell,{className:"w-40",children:"Name"}),e.jsx(a.Header.Cell,{children:"Description"}),e.jsx(a.Header.Cell,{align:"right",children:"Price"})]})}),e.jsx(a.Body,{children:r.map(l=>e.jsxs(a.Body.Row,{children:[e.jsx(a.Body.Cell,{children:l.name}),e.jsx(a.Body.Cell,{children:l.description}),e.jsx(a.Body.Cell,{align:"right",children:e.jsxs("span",{className:"font-mono whitespace-nowrap",children:["$ ",l.price.toFixed(2)]})})]},l.id))})]})},t=()=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Header.Row,{children:[e.jsx(a.Header.Cell,{className:"w-40",children:"Name"}),e.jsx(a.Header.Cell,{children:"Description"}),e.jsx(a.Header.Cell,{align:"right",children:"Price"})]})}),e.jsx(a.Body,{children:e.jsx(a.Body.EmptyPlaceholder,{title:"Empty table",description:"You have not added any items yet.",colSpan:3,children:e.jsx(h,{variant:"secondary",onClick:()=>alert("clicked"),children:"Add New Item"})})})]}),d=()=>{const[r,l]=o.useState([]);return o.useEffect(()=>{const n=setTimeout(()=>{l(U())},4e3);return()=>{clearTimeout(n)}},[]),e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Header.Row,{children:[e.jsx(a.Header.Cell,{className:"w-40",children:"Name"}),e.jsx(a.Header.Cell,{children:"Description"}),e.jsx(a.Header.Cell,{align:"right",children:"Price"})]})}),e.jsx(a.Body,{children:r.length?r.map(n=>e.jsxs(a.Body.Row,{children:[e.jsx(a.Body.Cell,{children:n.name}),e.jsx(a.Body.Cell,{children:n.description}),e.jsx(a.Body.Cell,{align:"right",children:e.jsxs("span",{className:"font-mono whitespace-nowrap",children:["$ ",n.price.toFixed(2)]})})]},n.name)):e.jsx(a.Body.LoadingIndicator,{colSpan:3})})]})};var s,c,u;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
                            <span className="font-mono whitespace-nowrap">
                                $ {item.price.toFixed(2)}
                            </span>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>)}
            </TableUnvirtualized.Body>
        </TableUnvirtualized>;
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,T;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
                    <Button variant="secondary" onClick={() => alert("clicked")}>
                        Add New Item
                    </Button>
                </TableUnvirtualized.Body.EmptyPlaceholder>
            </TableUnvirtualized.Body>
        </TableUnvirtualized>;
}`,...(T=(p=t.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var b,v,z;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
                                <span className="font-mono whitespace-nowrap">
                                    $ {row.price.toFixed(2)}
                                </span>
                            </TableUnvirtualized.Body.Cell>
                        </TableUnvirtualized.Body.Row>) : <TableUnvirtualized.Body.LoadingIndicator colSpan={3} />}
            </TableUnvirtualized.Body>
        </TableUnvirtualized>;
}`,...(z=(v=d.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const g=["Default","EmptyTable","LoadingTable"];export{i as Default,t as EmptyTable,d as LoadingTable,g as __namedExportsOrder,w as default};
