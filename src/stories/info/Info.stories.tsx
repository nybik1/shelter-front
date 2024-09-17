import type { Meta, StoryObj } from '@storybook/react';
import Info from './Info';

const meta = {
  title: 'Info',
  component: Info,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Some title',
    text: 'Some description text',
  },
};
