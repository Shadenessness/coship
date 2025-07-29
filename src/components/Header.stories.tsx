import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { BrowserRouter } from '@tanstack/react-router';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof Header> = {};
