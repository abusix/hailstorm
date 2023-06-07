/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormFieldGroup } from './form-field-group';
import { FormField } from './form-field';

const meta: Meta<typeof FormFieldGroup> = {
  title: 'Input / Combined Fields',
  component: FormFieldGroup,
};

export default meta;

type Story = StoryObj<typeof FormFieldGroup>;

const TextInputFields = ({ error = false, disabled = false }: { error?: boolean; disabled?: boolean }) => {
  return (
    <div className="flex flex-col gap-5">
      <FormField>
        <FormField.LabelGroup>
          <FormField.Label htmlFor="value">Textfields Only</FormField.Label>
          <FormField.Description id="value-description">A group with only textfields</FormField.Description>
        </FormField.LabelGroup>
        
        <FormField.Group>
          <FormField.TextInput
            id="value"
            value="I"
            placeholder="Placeholder"
            onChange={() => {}}
            ariaDescribedBy="value-description"
            error={error}
            disabled={disabled}
          />
          
          <FormField.TextInput
            id="value"
            value="Love"
            placeholder="Placeholder"
            onChange={() => {}}
            ariaDescribedBy="value-description"
            error={error}
            disabled={disabled}
          />
          
          <FormField.TextInput
            id="value"
            value="Abusix"
            placeholder="Placeholder"
            onChange={() => {}}
            ariaDescribedBy="value-description"
            error={error}
            disabled={disabled}
          />
        </FormField.Group>
      </FormField>
      
      <FormField>
        <FormField.LabelGroup>
          <FormField.Label htmlFor="value">Mixed Fields</FormField.Label>
          <FormField.Description id="value-description">A group with mixed fields (textfields and listboxes)</FormField.Description>
        </FormField.LabelGroup>
        
        <FormField.Group>
          <FormField.TextInput
            id="value"
            value="I"
            placeholder="Placeholder"
            onChange={() => {}}
            ariaDescribedBy="value-description"
            error={error}
            disabled={disabled}
          />
          
          <FormField.TextInput
            id="value"
            value="Love"
            placeholder="Placeholder"
            onChange={() => {}}
            ariaDescribedBy="value-description"
            error={error}
            disabled={disabled}
          />
          
          <FormField.TextInput
            id="value"
            value="Abusix"
            placeholder="Placeholder"
            onChange={() => {}}
            ariaDescribedBy="value-description"
            error={error}
            disabled={disabled}
          />
          
          <FormField.Listbox value="" onChange={() => {}}>
            <FormField.Listbox.Button>
              <FormField.Listbox.Button.TextValue value="" placeholder="Listbox" />
            </FormField.Listbox.Button>
            
            <div className="relative z-10">
              <FormField.Listbox.Options>
                <FormField.Listbox.Option value="Option 1">
                  <FormField.Listbox.Option.TextOption>Option 1</FormField.Listbox.Option.TextOption>
                </FormField.Listbox.Option>
                
                <FormField.Listbox.Option value="Option 2">
                  <FormField.Listbox.Option.TextOption>Option 2</FormField.Listbox.Option.TextOption>
                </FormField.Listbox.Option>
              </FormField.Listbox.Options>
            </div>
          </FormField.Listbox>
        </FormField.Group>
      </FormField>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <div className="w-120">
      <TextInputFields />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-120">
      <TextInputFields error />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-120">
      <TextInputFields disabled />
    </div>
  ),
};
