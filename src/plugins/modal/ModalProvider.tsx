"use client";

 
import React, { useState } from 'react';
import ModalController from './ModalController';
import ModalContext from './ModalContext';
import ModalContainer from './ModalContainer';

interface ModalProviderProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const flagState = useState(1);
  const [modalController] = useState(() => new ModalController(flagState));

  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
}
