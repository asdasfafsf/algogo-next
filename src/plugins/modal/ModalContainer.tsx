"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useModal from './useModal';

const MODAL_ID = 'modal-container';

export default function ModalContainer() {
  const modal = useModal();
  const [modalElement, setModalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 기존 요소가 있는지 확인
    let element = document.getElementById(MODAL_ID);
    
    if (!element) {
      // 새로운 모달 컨테이너 생성
      element = document.createElement('div');
      element.id = MODAL_ID;
      element.style.position = 'fixed';
      element.style.top = '0';
      element.style.left = '0';
      element.style.zIndex = '9999';
      element.style.pointerEvents = 'none';
      document.body.appendChild(element);
    }

    setModalElement(element);

    // 정리 함수: 컴포넌트 언마운트 시 모든 모달 닫기
    return () => {
      modal.clear();
    };
  }, [modal]);

  // 모달 요소가 준비되지 않았으면 null 반환
  if (!modalElement) {
    return null;
  }

  const toastModals = modal.list().filter((elem) => elem.Component !== null && elem.key?.startsWith('Toast-'));
  const regularModals = modal.list().filter((elem) => elem.Component !== null && !elem.key?.startsWith('Toast-'));

  return ReactDOM.createPortal(
    <>
      {/* 토스트 영역 */}
      <div className="fixed bottom-0 right-0 z-50 p-4 pointer-events-none">
        {toastModals.map((elem) => {
          const Component = elem.Component as React.ComponentType<any>;
          return (
            <Component
              key={elem.key} // 고유한 키 사용
              resolve={elem.resolve}
              reject={elem.reject}
              {...(elem?.props ?? {})}
            />
          );
        })}
      </div>

      {/* 일반 모달 영역 - 모달이 있을 때만 렌더링 */}
      {regularModals.length > 0 && (
        <div className="fixed inset-0 z-40 pointer-events-auto">
          {regularModals.map((elem) => {
            const Component = elem.Component as React.ComponentType<any>;
            return (
              <Component
                key={elem.key} // 고유한 키 사용
                resolve={elem.resolve}
                reject={elem.reject}
                {...(elem?.props ?? {})}
              />
            );
          })}
        </div>
      )}
    </>,
    modalElement
  );
}
