/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FormField } from "../form-field";
import { Badge } from "../../badge/badge";
import { Tag } from "../../tag/tag";

const meta: Meta<typeof FormField.MultiCombobox> = {
    title: "Input/MultiCombobox",
    component: FormField.MultiCombobox,
};

export default meta;

type Story = StoryObj<typeof FormField.MultiCombobox>;

const people = [
    "Durward Reynolds",
    "Kenton Towne",
    "Therese Wunsch",
    "Benedict Kessler",
    "Katelyn Rohan",
];

const MultiComboboxWithHooks = () => {
    const [selectedPersons, setSelectedPersons] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.MultiCombobox
                value={selectedPersons}
                onChange={(value) => setSelectedPersons(value)}
            >
                <FormField.MultiCombobox.Input
                    id="value"
                    displayValue={query}
                    placeholder="Select person..."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <FormField.MultiCombobox.Options>
                    {filteredPeople.length === 0 ? (
                        <FormField.MultiCombobox.EmptyOption>
                            <p className="truncate">
                                No persons found for <em>{query}</em>
                            </p>
                        </FormField.MultiCombobox.EmptyOption>
                    ) : null}
                    {filteredPeople.map((person) => (
                        <FormField.MultiCombobox.Option key={person} value={person}>
                            {person}
                        </FormField.MultiCombobox.Option>
                    ))}
                </FormField.MultiCombobox.Options>
                {selectedPersons.length > 0 ? (
                    <FormField.MultiCombobox.Results>
                        <FormField.MultiCombobox.Results.Label>
                            Selected values:
                        </FormField.MultiCombobox.Results.Label>
                        <FormField.MultiCombobox.Results.Text>
                            {selectedPersons.map((person) => person).join(", ")}
                        </FormField.MultiCombobox.Results.Text>
                    </FormField.MultiCombobox.Results>
                ) : null}
            </FormField.MultiCombobox>
        </FormField>
    );
};

const MultiComboboxBadgeWithHooks = () => {
    const [selectedPersons, setSelectedPersons] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.MultiCombobox
                value={selectedPersons}
                onChange={(value) => setSelectedPersons(value)}
            >
                <FormField.MultiCombobox.Input
                    id="value"
                    displayValue={query}
                    placeholder="Select person..."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <FormField.MultiCombobox.Options>
                    {filteredPeople.length === 0 ? (
                        <FormField.MultiCombobox.EmptyOption>
                            <p className="truncate">
                                No persons found for <em>{query}</em>
                            </p>
                        </FormField.MultiCombobox.EmptyOption>
                    ) : null}
                    {filteredPeople.map((person) => (
                        <FormField.MultiCombobox.Option key={person} value={person}>
                            <Badge>{person}</Badge>
                        </FormField.MultiCombobox.Option>
                    ))}
                </FormField.MultiCombobox.Options>
                {selectedPersons.length > 0 ? (
                    <FormField.MultiCombobox.Results>
                        <FormField.MultiCombobox.Results.Label>
                            Selected values:
                        </FormField.MultiCombobox.Results.Label>
                        <FormField.MultiCombobox.Results.Badges>
                            {selectedPersons.map((person) => {
                                return <Badge key={person}>{person}</Badge>;
                            })}
                        </FormField.MultiCombobox.Results.Badges>
                    </FormField.MultiCombobox.Results>
                ) : null}
            </FormField.MultiCombobox>
        </FormField>
    );
};

export const Badges: Story = {
    render: () => (
        <div className="w-72">
            <MultiComboboxBadgeWithHooks />
        </div>
    ),
};

const MultiComboboxTagWithHooks = () => {
    const [selectedPersons, setSelectedPersons] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.MultiCombobox
                value={selectedPersons}
                onChange={(value) => setSelectedPersons(value)}
            >
                <FormField.MultiCombobox.Input
                    id="value"
                    displayValue={query}
                    placeholder="Select person..."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <FormField.MultiCombobox.Options>
                    {filteredPeople.length === 0 ? (
                        <FormField.MultiCombobox.EmptyOption>
                            <p className="truncate">
                                No persons found for <em>{query}</em>
                            </p>
                        </FormField.MultiCombobox.EmptyOption>
                    ) : null}
                    {filteredPeople.map((person) => (
                        <FormField.MultiCombobox.Option key={person} value={person}>
                            <Tag>{person}</Tag>
                        </FormField.MultiCombobox.Option>
                    ))}
                </FormField.MultiCombobox.Options>
                {selectedPersons.length > 0 ? (
                    <FormField.MultiCombobox.Results>
                        <FormField.MultiCombobox.Results.Label>
                            Selected values:
                        </FormField.MultiCombobox.Results.Label>
                        <FormField.MultiCombobox.Results.Tags>
                            {selectedPersons.map((person) => {
                                return (
                                    <Tag
                                        key={person}
                                        onClick={() => {
                                            setSelectedPersons(
                                                selectedPersons.filter((p) => p !== person)
                                            );
                                        }}
                                    >
                                        {person}
                                    </Tag>
                                );
                            })}
                        </FormField.MultiCombobox.Results.Tags>
                    </FormField.MultiCombobox.Results>
                ) : null}
            </FormField.MultiCombobox>
        </FormField>
    );
};

const MultiComboboxCustomValueWithHooks = () => {
    const [selectedPersons, setSelectedPersons] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState("");

    const filteredPeople =
        query === ""
            ? people
            : people.filter((person) => {
                  return person.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.MultiCombobox
                value={selectedPersons}
                onChange={(value) => setSelectedPersons(value)}
            >
                <FormField.MultiCombobox.Input
                    id="value"
                    displayValue={query}
                    placeholder="Select person..."
                    onChange={(event) => setQuery(event.target.value)}
                />
                <FormField.MultiCombobox.Options>
                    {query.length > 0 && people.indexOf(query) === -1 && (
                        <FormField.MultiCombobox.CustomOption value={query}>
                            Create tag: <Tag>{query}</Tag>
                        </FormField.MultiCombobox.CustomOption>
                    )}
                    {filteredPeople.map((person) => (
                        <FormField.MultiCombobox.Option key={person} value={person}>
                            <Tag>{person}</Tag>
                        </FormField.MultiCombobox.Option>
                    ))}
                </FormField.MultiCombobox.Options>
                {selectedPersons.length > 0 ? (
                    <FormField.MultiCombobox.Results>
                        <FormField.MultiCombobox.Results.Label>
                            Selected values:
                        </FormField.MultiCombobox.Results.Label>
                        <FormField.MultiCombobox.Results.Tags>
                            {selectedPersons.map((person) => {
                                return (
                                    <Tag
                                        key={person}
                                        onClick={() => {
                                            setSelectedPersons(
                                                selectedPersons.filter((p) => p !== person)
                                            );
                                        }}
                                    >
                                        {person}
                                    </Tag>
                                );
                            })}
                        </FormField.MultiCombobox.Results.Tags>
                    </FormField.MultiCombobox.Results>
                ) : null}
            </FormField.MultiCombobox>
        </FormField>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <MultiComboboxWithHooks />
        </div>
    ),
};

export const Tags: Story = {
    render: () => (
        <div className="w-72">
            <MultiComboboxTagWithHooks />
        </div>
    ),
};

export const CustomValue: Story = {
    render: () => (
        <div className="w-72">
            <MultiComboboxCustomValueWithHooks />
        </div>
    ),
};
