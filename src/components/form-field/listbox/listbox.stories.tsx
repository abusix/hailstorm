/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FormField } from "../form-field";

const meta: Meta<typeof FormField.Listbox> = {
    title: "Input/Listbox",
    component: FormField.Listbox,
};

export default meta;

type Story = StoryObj<typeof FormField.Listbox>;

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

const ListboxTextWithHooks = () => {
    const [selectedPerson, setSelectedPerson] = React.useState<null | Person>(null);

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
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

const ListboxBadgeWithHooks = () => {
    const [selectedPerson, setSelectedPerson] = React.useState<null | Person>(null);

    return (
        <FormField>
            <FormField.LabelGroup>
                <FormField.Label htmlFor="value">Label</FormField.Label>
                <FormField.Description id="value-description">Description</FormField.Description>
            </FormField.LabelGroup>
            <FormField.Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <FormField.Listbox.Button>
                    <FormField.Listbox.Button.BadgeValue
                        value={selectedPerson?.name ?? null}
                        placeholder="Select..."
                    />
                </FormField.Listbox.Button>
                <FormField.Listbox.Options>
                    {people.map((person) => (
                        <FormField.Listbox.Option value={person} key={person.id}>
                            <FormField.Listbox.Option.BadgeOption>
                                {person.name}
                            </FormField.Listbox.Option.BadgeOption>
                        </FormField.Listbox.Option>
                    ))}
                </FormField.Listbox.Options>
            </FormField.Listbox>
        </FormField>
    );
};

export const Default: Story = {
    render: () => (
        <div className="w-72">
            <ListboxTextWithHooks />
        </div>
    ),
};

export const Badge: Story = {
    render: () => (
        <div className="w-72">
            <ListboxBadgeWithHooks />
        </div>
    ),
};
