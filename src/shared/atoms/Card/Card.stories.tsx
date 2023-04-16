// Card.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <Card>Hello</Card>,
};
