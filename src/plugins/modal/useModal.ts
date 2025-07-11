"use client";

import { useContext } from 'react';
import ModalContext from './ModalContext';
import type ModalController from './ModalController';

export default function useModal(): ModalController {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      'useModal must be used within a ModalProvider. ' +
      'Make sure to wrap your app with <ModalProvider>.'
    );
  }

  return context;
}
