import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import Button from '../ui/Button';
import { sendFormData } from '../../services/emailService';

const FormStep3: React.FC = () => {
  const { 
    formData, 
    updateFormData, 
    setIsSubmitting, 
    setSubmitStatus,
    isSubmitting 
  } = useFormContext();

  const [fileAttached, setFileAttached] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileAttached(true);
      setFileName(e.target.files[0].name);
    } else {
      setFileAttached(false);
      setFileName('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Envoi des données via EmailJS
      await sendFormData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        requestType: formData.requestType,
        service: formData.service,
        budget: formData.budget,
        projectType: formData.projectType,
        timeline: formData.timeline,
        requirements: formData.requirements,
        source: formData.source
      });
      
      console.log('Données du formulaire soumises:', formData);
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour formater les données du formulaire pour l'affichage du récapitulatif
  const formatSummaryData = () => {
    const summaryData = [
      { label: 'Nom', value: formData.name },
      { label: 'Email', value: formData.email },
      { label: 'Téléphone', value: formData.phone || 'Non renseigné' },
      { label: 'Entreprise', value: formData.company || 'Non renseignée' },
      { label: 'Type de demande', value: getRequestTypeLabel(formData.requestType) },
      { label: 'Service', value: getServiceLabel(formData.service) }
    ];

    // Ajout des champs spécifiques aux devis
    if (formData.requestType === 'quote') {
      summaryData.push(
        { label: 'Budget', value: getBudgetLabel(formData.budget) || 'Non renseigné' },
        { label: 'Délai', value: getTimelineLabel(formData.timeline) || 'Non renseigné' },
        { label: 'Type de projet', value: getProjectTypeLabel(formData.projectType) || 'Non renseigné' }
      );

      if (formData.requirements.length > 0) {
        summaryData.push({
          label: 'Fonctionnalités',
          value: formData.requirements.join(', ')
        });
      }
    } else {
      // Pour les demandes de contact ou support
      if (formData.message) {
        summaryData.push({ label: 'Message', value: formData.message });
      }
    }

    return summaryData;
  };

  // Fonctions d'aide pour obtenir les libellés
  const getRequestTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'quote': 'Demande de devis',
      'contact': 'Question générale',
      'support': 'Support technique'
    };
    return types[type] || type;
  };

  const getServiceLabel = (service: string) => {
    const services: Record<string, string> = {
      'web': 'Création Web',
      'design': 'Design Graphique',
      'seo': 'SEO',
      'ads': 'Publicité en ligne',
      'social': 'Réseaux Sociaux',
      'video': 'Vidéo Marketing',
      'accounting': 'Comptabilité',
      'other': 'Autre'
    };
    return services[service] || service;
  };

  const getBudgetLabel = (budget: string) => {
    const budgets: Record<string, string> = {
      'less-5k': 'Moins de 5k€',
      '5k-10k': '5k€ - 10k€',
      '10k-20k': '10k€ - 20k€',
      '20k-50k': '20k€ - 50k€',
      'more-50k': 'Plus de 50k€'
    };
    return budgets[budget] || budget;
  };

  const getTimelineLabel = (timeline: string) => {
    const timelines: Record<string, string> = {
      'urgent': 'Urgent (< 1 mois)',
      'standard': 'Standard (1-3 mois)',
      'flexible': 'Flexible (3-6 mois)',
      'long-term': 'Long terme (6+ mois)'
    };
    return timelines[timeline] || timeline;
  };

  const getProjectTypeLabel = (type: string) => {
    const webTypes: Record<string, string> = {
      'website': 'Site vitrine',
      'e-commerce': 'E-commerce',
      'web-app': 'Application web',
      'mobile-app': 'Application mobile',
      'redesign': 'Refonte de site'
    };
    
    const designTypes: Record<string, string> = {
      'logo': 'Logo et identité visuelle',
      'print': 'Supports imprimés',
      'ui-ux': 'UI/UX Design',
      'illustration': 'Illustrations'
    };
    
    const seoTypes: Record<string, string> = {
      'audit': 'Audit SEO',
      'optimization': 'Optimisation on-page',
      'content': 'Stratégie de contenu',
      'local-seo': 'SEO local'
    };
    
    if (formData.service === 'web') return webTypes[type] || type;
    if (formData.service === 'design') return designTypes[type] || type;
    if (formData.service === 'seo') return seoTypes[type] || type;
    
    return type;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-white">Finalisation de votre demande</h2>
      
      {/* Récapitulatif des informations */}
      <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-medium text-white mb-4">Récapitulatif</h3>
        <div className="space-y-3">
          {formatSummaryData().map((item, index) => (
            <div key={index} className="flex">
              <span className="text-gray-400 w-1/3">{item.label}:</span>
              <span className="text-white flex-1">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Informations complémentaires */}
      <div className="mb-6">
        <label htmlFor="additionalMessage" className="block text-sm font-medium text-gray-300 mb-2">
          Informations complémentaires
        </label>
        <textarea
          id="additionalMessage"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 resize-none"
          placeholder="Ajoutez des détails supplémentaires si nécessaire..."
        />
      </div>

      {/* Upload de fichier */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Joindre un fichier (optionnel)
        </label>
        <div className="flex items-center">
          <label className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg border border-dashed border-white/30 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors duration-300">
            <input
              type="file"
              className="sr-only"
              onChange={handleFileChange}
            />
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-gray-300">
              {fileAttached ? fileName : "Cliquez pour ajouter un fichier"}
            </span>
          </label>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Formats acceptés: PDF, JPG, PNG, DOC, DOCX (max 10MB)
        </p>
      </div>

      {/* Consentement RGPD */}
      <div className="mb-8">
        <label className="flex items-start">
          <input
            type="checkbox"
            required
            className="mt-1 mr-3"
          />
          <span className="text-sm text-gray-300">
            J'accepte que mes données soient traitées conformément à la politique de confidentialité de Stellaris. 
            Nous ne partagerons jamais vos informations avec des tiers sans votre consentement. *
          </span>
        </label>
      </div>

      {/* Bouton de soumission */}
      <div className="flex justify-end">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {formData.requestType === 'quote' 
            ? 'Envoyer ma demande de devis' 
            : formData.requestType === 'support'
            ? 'Envoyer ma demande de support'
            : 'Envoyer mon message'}
        </Button>
      </div>
    </form>
  );
};

export default FormStep3;
