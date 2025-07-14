import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from '@/components/error/ErrorPage';

const meta = {
  title: 'Components/Error/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadRequest: Story = {
  args: {
    statusCode: 400,
  },
};

export const NotFound: Story = {
  args: {
    statusCode: 404,
  },
};

export const ServerError: Story = {
  args: {
    statusCode: 500,
  },
};

export const CustomMessage: Story = {
  args: {
    statusCode: 400,
    title: "검색 조건 오류",
    message: "입력하신 검색 조건이 올바르지 않습니다. 다시 확인 후 검색해주세요.",
    onRetry: () => alert('재시도 클릭'),
  },
};

export const MinimalActions: Story = {
  args: {
    statusCode: 400,
    showBackButton: false,
    showHomeButton: false,
    onRetry: () => alert('재시도 클릭'),
  },
};