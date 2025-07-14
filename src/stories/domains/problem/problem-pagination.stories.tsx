import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProblemPagination } from '@/domains/problem'

const meta: Meta<typeof ProblemPagination> = {
  title: 'Domains/Problem/ProblemPagination',
  component: ProblemPagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['header', 'inline', 'bottom'],
    },
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
    totalItems: {
      control: { type: 'number', min: 0 },
    },
    itemsPerPage: {
      control: 'radio',
      options: [20, 50, 100],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    totalCount: 2847,
    pageSize: 20,
    pageNo: 3,
  },
}

export const LargeDataset: Story = {
  args: {
    totalCount: 10000,
    pageSize: 50,
    pageNo: 25,
  },
}

export const FirstPage: Story = {
  args: {
    totalCount: 3492,
    pageSize: 20,
    pageNo: 1,
  },
}

export const LastPage: Story = {
  args: {
    totalCount: 100,
    pageSize: 20,
    pageNo: 5,
  },
}