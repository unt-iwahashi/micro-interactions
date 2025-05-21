import { Meta, StoryObj } from '@storybook/react';
import { Button01 as ButtonComponent } from '@/components/button/Button01';

const meta = {
  title: 'Example/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonComponent>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Button01: Story = {
  args: {},
};
