import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useState } from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'UI Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>다이얼로그 제목</DialogTitle>
          <DialogDescription>
            이것은 기본 다이얼로그입니다. 여기에 내용을 작성할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">프로필 편집</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
          <DialogDescription>
            여기서 프로필 정보를 수정할 수 있습니다. 완료되면 저장을 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              이름
            </label>
            <Input
              id="name"
              defaultValue="홍길동"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              사용자명
            </label>
            <Input
              id="username"
              defaultValue="@gildong"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const ConfirmDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">계정 삭제</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>정말로 계정을 삭제하시겠습니까?</DialogTitle>
          <DialogDescription>
            이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button variant="destructive">삭제</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LargeContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>긴 내용 다이얼로그</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>이용약관</DialogTitle>
          <DialogDescription>
            다음 이용약관을 자세히 읽어보시기 바랍니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4 text-sm">
          <h3 className="font-semibold">제1조 (목적)</h3>
          <p>
            이 약관은 AlgoGo(이하 "회사"라 함)가 제공하는 온라인 알고리즘 학습 서비스(이하 "서비스"라 함)의 이용에 관한 조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          
          <h3 className="font-semibold">제2조 (정의)</h3>
          <p>
            1. "서비스"라 함은 회사가 제공하는 알고리즘 문제 해결, 학습 자료 제공, 커뮤니티 등의 서비스를 의미합니다.
          </p>
          <p>
            2. "회원"이라 함은 이 약관에 따라 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 의미합니다.
          </p>
          
          <h3 className="font-semibold">제3조 (약관의 효력 및 변경)</h3>
          <p>
            1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력을 발생합니다.
          </p>
          <p>
            2. 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
          </p>
          
          <h3 className="font-semibold">제4조 (서비스의 제공 및 변경)</h3>
          <p>
            1. 회사는 다음과 같은 업무를 수행합니다.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>알고리즘 문제 및 해설 제공</li>
            <li>학습 진도 관리 서비스</li>
            <li>온라인 커뮤니티 서비스</li>
            <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
          </ul>
          
          <h3 className="font-semibold">제5조 (서비스 이용시간)</h3>
          <p>
            1. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.
          </p>
          <p>
            2. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">닫기</Button>
          </DialogClose>
          <Button>동의</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>닫기 버튼 없는 다이얼로그</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>중요한 알림</DialogTitle>
          <DialogDescription>
            이 다이얼로그는 우상단 X 버튼이 없습니다. 하단 버튼으로만 닫을 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const CustomWidth: Story = {
  render: () => (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">작은 다이얼로그</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[300px]">
          <DialogHeader>
            <DialogTitle>작은 다이얼로그</DialogTitle>
            <DialogDescription>
              최대 너비가 300px로 제한된 다이얼로그입니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>확인</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">큰 다이얼로그</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>큰 다이얼로그</DialogTitle>
            <DialogDescription>
              최대 너비가 800px로 설정된 다이얼로그입니다. 더 많은 내용을 담을 수 있습니다.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>
              이 다이얼로그는 더 넓은 공간을 제공하여 복잡한 폼이나 긴 내용을 표시할 때 유용합니다.
              여러 컬럼으로 구성된 레이아웃도 가능합니다.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button>확인</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
}

export const InteractiveDialog: Story = {
  render: () => {
    const [name, setName] = useState('홍길동')
    const [email, setEmail] = useState('hong@example.com')
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>상호작용 다이얼로그</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>사용자 정보 수정</DialogTitle>
            <DialogDescription>
              아래 정보를 수정하고 저장 버튼을 클릭하세요.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                이름
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right">
                이메일
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={() => alert(`저장됨: ${name}, ${email}`)}>
                저장
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}