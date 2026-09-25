'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ToastItem {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  trialModalOpen: boolean;
  selectedTrialCourseId: string | null;
  openTrialModal: (courseId?: string) => void;
  closeTrialModal: () => void;

  whatsappModalOpen: boolean;
  openWhatsAppModal: () => void;
  closeWhatsAppModal: () => void;

  certModalOpen: boolean;
  selectedCertId: string | null;
  openCertModal: (certId: string) => void;
  closeCertModal: () => void;

  toasts: ToastItem[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedTrialCourseId, setSelectedTrialCourseId] = useState<string | null>(null);

  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const openTrialModal = (courseId?: string) => {
    setSelectedTrialCourseId(courseId || null);
    setTrialModalOpen(true);
  };

  const closeTrialModal = () => {
    setTrialModalOpen(false);
  };

  const openWhatsAppModal = () => setWhatsappModalOpen(true);
  const closeWhatsAppModal = () => setWhatsappModalOpen(false);

  const openCertModal = (certId: string) => {
    setSelectedCertId(certId);
    setCertModalOpen(true);
  };

  const closeCertModal = () => {
    setCertModalOpen(false);
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        trialModalOpen,
        selectedTrialCourseId,
        openTrialModal,
        closeTrialModal,
        whatsappModalOpen,
        openWhatsAppModal,
        closeWhatsAppModal,
        certModalOpen,
        selectedCertId,
        openCertModal,
        closeCertModal,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
