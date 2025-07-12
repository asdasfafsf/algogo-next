"use client";


import useModal from "@/plugins/modal/useModal";
import AlertModal from "@/components/modals/AlertModal";
import { MainLayout } from "@/components/layout/main";

export default function Home() {
  const modal = useModal();

  const handleClick = () => {
    console.log('handleClick');
    modal.push('Alert', AlertModal as any, { content: '기본 알림입니다.' });
  };

  return (
    <MainLayout>
      <div>
        <h1>Home</h1>
      </div>
    </MainLayout>
  );
}
