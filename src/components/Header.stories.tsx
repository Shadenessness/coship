import Header from './Header'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    decorators: [(Story) => <Story />],
}

export default meta

export const Default: StoryObj<typeof Header> = {}
