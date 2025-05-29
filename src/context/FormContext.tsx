import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types pour les données du formulaire
export interface FormData {
  // Données communes
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  
  // Type de demande
  requestType: 'quote' | 'contact' | 'support' | '';
  
  // Service concerné
  service: string;
  
  // Données spécifiques aux devis
  budget: string;
  projectType: string;
  timeline: string;
  requirements: string[];
  
  // Source de la demande (d'où vient l'utilisateur)
  source: string;
  
  // Étape actuelle du formulaire
  currentStep: number;
}

// État initial du formulaire
const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  requestType: '',
  service: '',
  budget: '',
  projectType: '',
  timeline: '',
  requirements: [],
  source: '',
  currentStep: 0
};

// Création du contexte
interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  submitStatus: 'idle' | 'success' | 'error';
  setSubmitStatus: (status: 'idle' | 'success' | 'error') => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

// Provider du contexte
interface FormProviderProps {
  children: ReactNode;
  initialData?: Partial<FormData>;
}

export const FormProvider: React.FC<FormProviderProps> = ({ 
  children, 
  initialData = {} 
}) => {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    ...initialData
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Mettre à jour les données du formulaire
  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // Réinitialiser le formulaire
  const resetForm = () => {
    setFormData(initialFormData);
    setSubmitStatus('idle');
  };

  // Navigation entre les étapes
  const nextStep = () => {
    setFormData(prev => ({ ...prev, currentStep: prev.currentStep + 1 }));
  };

  const prevStep = () => {
    setFormData(prev => ({ ...prev, currentStep: Math.max(0, prev.currentStep - 1) }));
  };

  const goToStep = (step: number) => {
    setFormData(prev => ({ ...prev, currentStep: step }));
  };

  const value = {
    formData,
    updateFormData,
    resetForm,
    nextStep,
    prevStep,
    goToStep,
    isSubmitting,
    setIsSubmitting,
    submitStatus,
    setSubmitStatus
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
