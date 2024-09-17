import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';
// TODO: FIX ICON USAGE

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO:CHECK HOW TO CREATE A STORY FOR INPUT COMPONENT
export const Medium: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Input
        {...args}
        name={'testMediumInput'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Placeholder"
      />
    );
  },
  args: {
    value: '',
    label: 'Label',
    onChange: action('onChange'),
  },
};

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState('Default value');

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    name: 'testLargeInput',
    label: 'Label',
    value: '',
    onChange: () => {},
    placeholder: 'Placeholder',
    inputSize: 'large',
  },
};
