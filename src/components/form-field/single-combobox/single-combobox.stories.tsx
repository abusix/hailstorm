import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { Tag } from "../../tag/tag";
import { FormField } from "../form-field";
import { SingleCombobox } from "./single-combobox";

const meta: Meta<typeof SingleCombobox> = {
    title: "Input/SingleCombobox",
    component: SingleCombobox,
};

export default meta;
type Story = StoryObj<typeof SingleCombobox>;

const people = [
    "Durward Reynolds",
    "Kenton Towne",
    "Therese Wunsch",
    "Benedict Kessler",
    "Katelyn Rohan",
];

const SingleComboboxWithHooks = () => {
    const [selectedPerson, setSelectedPerson] = React.useState<string>("");
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField.SingleCombobox
            value={selectedPerson}
            onChange={(value) => {
                setQuery("");
                setSelectedPerson(value);
            }}
        >
            <SingleCombobox.Input
                id="value"
                placeholder="Select person..."
                onChange={(event) => setQuery(event.target.value)}
            />
            <FormField.SingleCombobox.Options>
                {filteredPeople.length === 0 ? (
                    <FormField.SingleCombobox.EmptyOption>
                        <p className="truncate">
                            No persons found for <em>{query}</em>
                        </p>
                    </FormField.SingleCombobox.EmptyOption>
                ) : null}
                {filteredPeople.map((person) => (
                    <FormField.SingleCombobox.Option key={person} value={person}>
                        <Tag>{person}</Tag>
                    </FormField.SingleCombobox.Option>
                ))}
            </FormField.SingleCombobox.Options>
        </FormField.SingleCombobox>
    );
};

interface Person {
    id: number;
    name: string;
    short: string;
}

const peopleObjects: Person[] = [
    { id: 1, name: "Durward Reynolds", short: "Durward" },
    { id: 2, name: "Kenton Towne", short: "Kenton" },
    { id: 3, name: "Therese Wunsch", short: "Therese" },
    { id: 4, name: "Benedict Kessler", short: "Benedict" },
    { id: 5, name: "Katelyn Rohan", short: "Katelyn" },
];

const SingleComboboxObjectValueWithHooks = () => {
    const [selectedPerson, setSelectedPerson] = React.useState<Person>();
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? peopleObjects
            : peopleObjects.filter((person) => {
                  return person.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField.SingleCombobox
            value={selectedPerson}
            onChange={(value) => {
                setQuery("");
                setSelectedPerson(value);
            }}
        >
            <SingleCombobox.Input
                id="value"
                placeholder="Select person..."
                displayValue={(person: Person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
            />
            <FormField.SingleCombobox.Options>
                {filteredPeople.map((person) => (
                    <FormField.SingleCombobox.Option key={person.id} value={person}>
                        <Tag>{person.short}</Tag>
                    </FormField.SingleCombobox.Option>
                ))}
            </FormField.SingleCombobox.Options>
        </FormField.SingleCombobox>
    );
};

const SingleComboboxCustomValueWithHooks = () => {
    const [selectedPerson, setSelectedPerson] = React.useState<string>("");
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField.SingleCombobox
            value={selectedPerson}
            onChange={(value) => {
                setQuery("");
                setSelectedPerson(value);
            }}
        >
            <SingleCombobox.Input
                id="value"
                placeholder="Select person..."
                onChange={(event) => setQuery(event.target.value)}
            />
            <FormField.SingleCombobox.Options>
                {query.length > 0 && people.indexOf(query) === -1 && (
                    <FormField.SingleCombobox.CustomOption value={query}>
                        Create tag: <Tag>{query}</Tag>
                    </FormField.SingleCombobox.CustomOption>
                )}

                {filteredPeople.map((person) => (
                    <FormField.SingleCombobox.Option key={person} value={person}>
                        <Tag>{person}</Tag>
                    </FormField.SingleCombobox.Option>
                ))}
            </FormField.SingleCombobox.Options>
        </FormField.SingleCombobox>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <SingleComboboxWithHooks />
        </div>
    ),
};

export const ObjectValue: Story = {
    render: () => (
        <div className="w-72">
            <SingleComboboxObjectValueWithHooks />
        </div>
    ),
};

export const CustomValue: Story = {
    render: () => (
        <div className="w-72">
            <SingleComboboxCustomValueWithHooks />
        </div>
    ),
};
