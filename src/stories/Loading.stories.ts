import { Meta, StoryObj } from '@storybook/react';
import { Loading01 as LoadingComponent } from '@/components/loading/Loading01';

const meta = {
  title: 'Example/Loading',
  component: LoadingComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoadingComponent>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Loading01: Story = {
  args: {},
};
