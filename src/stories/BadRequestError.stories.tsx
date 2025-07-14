import type { Meta, StoryObj } from '@storybook/react';
import { BadRequestError } from '@/components/error/BadRequestError';

const meta = {
  title: 'Components/Error/BadRequestError',
  component: BadRequestError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BadRequestError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "입력하신 검색 조건이 올바르지 않습니다. 다시 확인해주세요.",
  },
};

export const WithRetry: Story = {
  args: {
    message: "요청하신 내용을 처리할 수 없습니다. 입력값을 확인해주세요.",
    onRetry: () => alert('재시도 클릭'),
  },
};

export const NoHomeButton: Story = {
  args: {
    message: "잘못된 접근입니다. 올바른 경로로 접근해주세요.",
    showHomeButton: false,
  },
};