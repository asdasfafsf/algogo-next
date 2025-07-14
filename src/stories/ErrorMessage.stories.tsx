import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from '@/components/error/ErrorMessage';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'Components/Error/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '오류가 발생했습니다',
    message: '요청을 처리하는 중에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: '주의가 필요합니다',
    message: '일부 데이터가 최신 상태가 아닐 수 있습니다.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: '정보',
    message: '현재 시스템 점검 중입니다. 일부 기능이 제한될 수 있습니다.',
  },
};

export const WithAction: Story = {
  args: {
    title: '연결 오류',
    message: '서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.',
    action: (
      <div className="flex gap-2">
        <Button variant="outline">다시 시도</Button>
        <Button>새로고침</Button>
      </div>
    ),
  },
};