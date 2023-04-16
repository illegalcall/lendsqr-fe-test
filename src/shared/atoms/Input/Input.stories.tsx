// Card.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <Input label="First Name" placeholder="Write your name" />,
};

export const Error: Story = {
  render: () => (
    <Input label="Email" value={'wrong@email.com'} error="Wrong email" />
  ),
};

export const NoLabel: Story = {
  render: () => <Input placeholder="Write your name" />,
};
