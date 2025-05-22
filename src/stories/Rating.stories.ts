import { Meta, StoryObj } from '@storybook/react';
import { Rating01 as RatingComponent } from '@/components/rating/Rating01';

const meta = {
  title: 'Example/Rating',
  component: RatingComponent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RatingComponent>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Rating01: Story = {
  args: {},
};
