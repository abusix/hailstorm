import React from "react";
import type { Meta } from "@storybook/react";
import { TableKeyValuePair } from "./table-key-value-pair";
import { FormField } from "../form-field";

const meta: Meta<typeof TableKeyValuePair> = {
    title: "Table / Key-Value Pairs",
    component: TableKeyValuePair,
};

export default meta;

interface Person {
    id: number;
    name: string;
    isDead?: boolean;
}

const people: Person[] = [
    { id: 1, name: "John Lennon", isDead: true },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
];

const ExampleListbox = () => {
    const [selectedPerson, setSelectedPerson] = React.useState<null | Person>(null);

    return (
        <FormField>
            <FormField.Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <FormField.Listbox.Button>
                    <FormField.Listbox.Button.TextValue
                        value={selectedPerson?.name ?? null}
                        placeholder="Select..."
                    />
                </FormField.Listbox.Button>

                <FormField.Listbox.Options>
                    {people.map((person) => (
                        <FormField.Listbox.Option
                            value={person}
                            key={person.id}
                            disabled={person.isDead}
                        >
                            <FormField.Listbox.Option.TextOption>
                                {person.name}
                            </FormField.Listbox.Option.TextOption>
                        </FormField.Listbox.Option>
                    ))}
                </FormField.Listbox.Options>
            </FormField.Listbox>
        </FormField>
    );
};

export const Default = () => {
    return (
        <div className="min-h-120">
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
        </div>
    );
};
