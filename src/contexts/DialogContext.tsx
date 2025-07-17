"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

// 다이얼로그 결과 타입 정의
type DialogResult = string | boolean | null | undefined | void

interface DialogItem {
  id: number
  component: React.ReactNode
  resolve: (result?: DialogResult) => void
}

interface DialogContextType {
  showDialog: (component: React.ReactNode) => Promise<DialogResult>
  closeDialog: (id: number, result?: DialogResult) => void
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

export function DialogProvider({ children }: { children: ReactNode }) {
  const [dialogs, setDialogs] = useState<DialogItem[]>([])
  
  const closeDialog = useCallback((id: number, result?: DialogResult) => {
    setDialogs(prev => {
      const dialog = prev.find(d => d.id === id)
      if (dialog) {
        dialog.resolve(result)
      }
      return prev.filter(d => d.id !== id)
    })
  }, [])
  
  const showDialog = useCallback((component: React.ReactNode): Promise<DialogResult> => {
    return new Promise<DialogResult>((resolve) => {
      const id = Date.now() + Math.random() // 더 안전한 ID 생성
      
      setDialogs(prev => [...prev, {
        id,
        component,
        resolve
      }])
    })
  }, [])
  
  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      {children}
      {dialogs.map(dialog => (
        <React.Fragment key={dialog.id}>
          {React.cloneElement(dialog.component as React.ReactElement, {
            dialogId: dialog.id,
            onDialogClose: (result?: DialogResult) => closeDialog(dialog.id, result)
          })}
        </React.Fragment>
      ))}
    </DialogContext.Provider>
  )
}

export function useDialogContext() {
  const context = useContext(DialogContext)
  if (context === undefined) {
    throw new Error('useDialogContext must be used within a DialogProvider')
  }
  return context
}