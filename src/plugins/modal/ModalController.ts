/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';

// 개선된 타입 정의
interface ModalInfo<T = any> {
  key: string;
  Component: React.FC<ModalProps<T>> | null;
  props: unknown;
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
  timestamp: number; // 고유 키 생성을 위한 타임스탬프
}

interface ModalProps<T = any> {
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
}

export default class ModalController {
  private flagState: [number, Dispatch<SetStateAction<number>>];
  private modalInfos: ModalInfo[] = [];
  private keyCounter: number = 0; // 고유 키 생성용 카운터

  constructor(flagState: [number, Dispatch<SetStateAction<number>>]) {
    this.flagState = flagState;
  }

  private flush() {
    const setFlag = this.flagState[1];
    setFlag((prev) => prev + 1);
  }

  // 고유한 키 생성
  private generateUniqueKey(baseKey: string): string {
    return `${baseKey}-${Date.now()}-${++this.keyCounter}`;
  }

  list() {
    return this.modalInfos;
  }

  remove(key: string) {
    const target = this.modalInfos.find((elem) => elem.key === key);
    if (target) {
      this.flush();
      target.resolve(true);
    }
    this.modalInfos = this.modalInfos.filter((elem) => elem.key !== key);
  }

  top() {
    return this.modalInfos[this.modalInfos.length - 1];
  }

  private handlePromises<T>(key: string, resolver: (value: T) => void, value: T) {
    resolver(value);
    this.modalInfos = this.modalInfos.filter((elem) => key !== elem.key);
    this.flush();
  }

  clear() {
    while (this.modalInfos.length) {
      this.pop();
    }
    this.flush();
  }

  pop() {
    const topModal = this.top();
    if (topModal) {
      topModal.reject('Modal closed');
      this.modalInfos.pop();
      this.flush();
    }
  }

  async push<T = any>(
    baseKey: string, 
    Component: React.FC<ModalProps<T>> | null, 
    props: unknown = {}
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const uniqueKey = this.generateUniqueKey(baseKey);
      const timestamp = Date.now();
      
      this.modalInfos.push({
        key: uniqueKey,
        Component,
        props,
        resolve: (value: T) => this.handlePromises(uniqueKey, resolve, value),
        reject: (reason?: any) => this.handlePromises(uniqueKey, reject, reason),
        timestamp,
      });
      this.flush();
    });
  }
}
