import React, { useEffect, useMemo, useState } from 'react';
import type { Meta } from '@storybook/react';
import { TableUnvirtualized } from './table-unvirtualized';
import { Button } from '../button/button';

const meta: Meta<typeof TableUnvirtualized> = {
    title: 'Table / Unvirtualized',
    component: TableUnvirtualized,
};

interface ExampleData {
    id: string;
    name: string;
    description: string;
    price: number;
}

export default meta;

function createExampleData(): ExampleData[] {
    const data: ExampleData[] = [];

    for (let i = 0; i < 20; i++) {
        const element: ExampleData = {
            id: i.toString(),
            name: `${i.toString()} name`,
            description: `${i.toString()} description`,
            price: i,
        };
        data.push(element);
    }
    return data;
}

export const Default = () => {
    const exampleData = useMemo(() => createExampleData(), []);

    return (
        <TableUnvirtualized>
            <TableUnvirtualized.Header>
                <TableUnvirtualized.Header.Row>
                    <TableUnvirtualized.Header.Cell className="w-40">Name</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell>Description</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell align="right">Price</TableUnvirtualized.Header.Cell>
                </TableUnvirtualized.Header.Row>
            </TableUnvirtualized.Header>

            <TableUnvirtualized.Body>
                {exampleData.map((item) => (
                    <TableUnvirtualized.Body.Row key={item.id}>
                        <TableUnvirtualized.Body.Cell>{item.name}</TableUnvirtualized.Body.Cell>

                        <TableUnvirtualized.Body.Cell>{item.description}</TableUnvirtualized.Body.Cell>

                        <TableUnvirtualized.Body.Cell align="right">
                            <span className="whitespace-nowrap font-mono">$ {item.price.toFixed(2)}</span>
                        </TableUnvirtualized.Body.Cell>
                    </TableUnvirtualized.Body.Row>
                ))}
            </TableUnvirtualized.Body>
        </TableUnvirtualized>
    );
};

export const EmptyTable = () => {
    return (
        <TableUnvirtualized>
            <TableUnvirtualized.Header>
                <TableUnvirtualized.Header.Row>
                    <TableUnvirtualized.Header.Cell className="w-40">Name</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell>Description</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell align="right">Price</TableUnvirtualized.Header.Cell>
                </TableUnvirtualized.Header.Row>
            </TableUnvirtualized.Header>

            <TableUnvirtualized.Body>
                <TableUnvirtualized.Body.EmptyPlaceholder
                    title="Empty table"
                    description="You have not added any items yet."
                    colSpan={3}
                >
                    <Button type="secondary" onClick={() => alert('clicked')}>
                        Add New Item
                    </Button>
                </TableUnvirtualized.Body.EmptyPlaceholder>
            </TableUnvirtualized.Body>
        </TableUnvirtualized>
    );
};

export const LoadingTable = () => {
    const [data, setData] = useState<ExampleData[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(createExampleData());
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <TableUnvirtualized>
            <TableUnvirtualized.Header>
                <TableUnvirtualized.Header.Row>
                    <TableUnvirtualized.Header.Cell className="w-40">Name</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell>Description</TableUnvirtualized.Header.Cell>

                    <TableUnvirtualized.Header.Cell align="right">Price</TableUnvirtualized.Header.Cell>
                </TableUnvirtualized.Header.Row>
            </TableUnvirtualized.Header>

            <TableUnvirtualized.Body>
                {data.length ? (
                    data.map((row) => (
                        <TableUnvirtualized.Body.Row key={row.name}>
                            <TableUnvirtualized.Body.Cell>{row.name}</TableUnvirtualized.Body.Cell>
                            <TableUnvirtualized.Body.Cell>{row.description}</TableUnvirtualized.Body.Cell>
                            <TableUnvirtualized.Body.Cell align="right">
                                <span className="whitespace-nowrap font-mono">$ {row.price.toFixed(2)}</span>
                            </TableUnvirtualized.Body.Cell>
                        </TableUnvirtualized.Body.Row>
                    ))
                ) : (
                    <TableUnvirtualized.Body.LoadingIndicator colSpan={3} />
                )}
            </TableUnvirtualized.Body>
        </TableUnvirtualized>
    );
};
