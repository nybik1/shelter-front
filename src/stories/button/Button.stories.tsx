import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'medium',
    label: 'Button',
    buttonType: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    label: 'Button',
    buttonType: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    size: 'medium',
    label: 'Button',
    buttonType: 'ghost',
  },
};
