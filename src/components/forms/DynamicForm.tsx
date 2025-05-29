import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FormProvider, useFormContext } from '../../context/FormContext';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import SuccessMessage from './SuccessMessage';
import Button from '../ui/Button';
import '../../styles/ia-enhancements.css';

interface DynamicFormProps {
  initialService?: string;
  initialRequestType?: 'quote' | 'contact' | 'support';
  source?: string;
}

const DynamicFormContent: React.FC = () => {
  const { 
    formData, 
    prevStep, 
    isSubmitting, 
    submitStatus,
    setSubmitStatus,
    resetForm
  } = useFormContext();

  // Rendu des étapes du formulaire
  const renderStep = () => {
    switch (formData.currentStep) {
      case 0:
        return <FormStep1 />;
      case 1:
        return <FormStep2 />;
      case 2:
        return <FormStep3 />;
      default:
        return <FormStep1 />;
    }
  };

  // Réinitialiser le formulaire après un succès
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        resetForm();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus, resetForm]);

  // Animation pour les transitions entre étapes
  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {submitStatus === 'success' ? (
        <SuccessMessage />
      ) : (
        <>
          {/* Indicateur d'étape */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[0, 1, 2].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      step < formData.currentStep
                        ? 'bg-green-500 text-white'
                        : step === formData.currentStep
                        ? 'bg-secondary text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {step < formData.currentStep ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span>{step + 1}</span>
                    )}
                  </div>
                  <span className="text-sm mt-2 text-gray-400">
                    {step === 0 ? 'Informations' : step === 1 ? 'Détails' : 'Finalisation'}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-secondary transition-all duration-500"
                style={{ width: `${(formData.currentStep / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Contenu du formulaire */}
          <AnimatePresence mode="wait">
            <motion.div
              key={formData.currentStep}
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="stl-glass p-8 rounded-2xl"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {formData.currentStep > 0 && (
            <div className="mt-6 flex justify-between">
              <Button 
                variant="glass" 
                onClick={prevStep}
                disabled={isSubmitting}
              >
                Retour
              </Button>
            </div>
          )}

          {/* Message d'erreur */}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
              Une erreur est survenue. Veuillez réessayer plus tard.
            </div>
          )}
        </>
      )}
    </div>
  );
};

const DynamicForm: React.FC<DynamicFormProps> = ({ 
  initialService = '', 
  initialRequestType = '', 
  source = ''
}) => {
  const location = useLocation();
  
  // Extraire les paramètres de l'URL si présents
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    const typeParam = params.get('type');
    
    if (serviceParam) {
      initialService = serviceParam;
    }
    
    if (typeParam) {
      initialRequestType = typeParam as 'quote' | 'contact' | 'support';
    }
  }, [location]);

  return (
    <FormProvider 
      initialData={{ 
        service: initialService, 
        requestType: initialRequestType as any, 
        source: source || location.pathname 
      }}
    >
      <DynamicFormContent />
    </FormProvider>
  );
};

export default DynamicForm;
