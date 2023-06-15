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
                displayValue={selectedPerson}
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
                displayValue={selectedPerson}
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

export const CustomValue: Story = {
    render: () => (
        <div className="w-72">
            <SingleComboboxCustomValueWithHooks />
        </div>
    ),
};
