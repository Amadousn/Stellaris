import React from 'react';
import { useFormContext } from '../../context/FormContext';
import Button from '../ui/Button';

const FormStep2: React.FC = () => {
  const { formData, updateFormData, nextStep } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleRequirementToggle = (requirement: string) => {
    updateFormData({
      requirements: formData.requirements.includes(requirement)
        ? formData.requirements.filter(r => r !== requirement)
        : [...formData.requirements, requirement]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  // Options pour le budget (pour les devis)
  const budgetRanges = [
    { value: 'less-5k', label: 'Moins de 5k€' },
    { value: '5k-10k', label: '5k€ - 10k€' },
    { value: '10k-20k', label: '10k€ - 20k€' },
    { value: '20k-50k', label: '20k€ - 50k€' },
    { value: 'more-50k', label: 'Plus de 50k€' }
  ];

  // Options pour le délai (pour les devis)
  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (< 1 mois)' },
    { value: 'standard', label: 'Standard (1-3 mois)' },
    { value: 'flexible', label: 'Flexible (3-6 mois)' },
    { value: 'long-term', label: 'Long terme (6+ mois)' }
  ];

  // Options pour les types de projets web
  const webProjectTypes = [
    { value: 'website', label: 'Site vitrine' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'web-app', label: 'Application web' },
    { value: 'mobile-app', label: 'Application mobile' },
    { value: 'redesign', label: 'Refonte de site' }
  ];

  // Options pour les types de projets design
  const designProjectTypes = [
    { value: 'logo', label: 'Logo et identité visuelle' },
    { value: 'print', label: 'Supports imprimés' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'illustration', label: 'Illustrations' }
  ];

  // Options pour les types de projets SEO
  const seoProjectTypes = [
    { value: 'audit', label: 'Audit SEO' },
    { value: 'optimization', label: 'Optimisation on-page' },
    { value: 'content', label: 'Stratégie de contenu' },
    { value: 'local-seo', label: 'SEO local' }
  ];

  // Fonctionnalités courantes pour les sites web
  const webFeatures = [
    'Responsive design',
    'Formulaire de contact',
    'Blog/Actualités',
    'Intégration réseaux sociaux',
    'Système de réservation',
    'Espace membre',
    'Paiement en ligne',
    'Multilangue',
    'Optimisation SEO'
  ];

  // Rendu conditionnel en fonction du type de demande et du service
  const renderFormFields = () => {
    // Demande de devis
    if (formData.requestType === 'quote') {
      return (
        <>
          {/* Budget */}
          <div className="mb-6">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
              Budget estimé
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              style={{ backgroundColor: 'rgba(30, 35, 60, 0.9)' }}
            >
              <option value="" style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>Sélectionnez une fourchette</option>
              {budgetRanges.map(range => (
                <option key={range.value} value={range.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{range.label}</option>
              ))}
            </select>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
              Délai souhaité
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              style={{ backgroundColor: 'rgba(30, 35, 60, 0.9)' }}
            >
              <option value="" style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>Sélectionnez un délai</option>
              {timelineOptions.map(option => (
                <option key={option.value} value={option.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Type de projet spécifique au service */}
          <div className="mb-6">
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
              Type de projet
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
              style={{ backgroundColor: 'rgba(30, 35, 60, 0.9)' }}
            >
              <option value="" style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>Sélectionnez un type de projet</option>
              {formData.service === 'web' && webProjectTypes.map(type => (
                <option key={type.value} value={type.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{type.label}</option>
              ))}
              {formData.service === 'design' && designProjectTypes.map(type => (
                <option key={type.value} value={type.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{type.label}</option>
              ))}
              {formData.service === 'seo' && seoProjectTypes.map(type => (
                <option key={type.value} value={type.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{type.label}</option>
              ))}
            </select>
          </div>

          {/* Fonctionnalités requises (pour les projets web) */}
          {formData.service === 'web' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Fonctionnalités souhaitées
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {webFeatures.map(feature => (
                  <label
                    key={feature}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      formData.requirements.includes(feature)
                        ? 'border-secondary bg-secondary/20'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={formData.requirements.includes(feature)}
                      onChange={() => handleRequirementToggle(feature)}
                    />
                    <span className="text-sm text-white">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </>
      );
    }
    
    // Question générale ou support
    return (
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 resize-none"
          placeholder={
            formData.requestType === 'support'
              ? "Décrivez votre problème technique en détail..."
              : "Posez votre question ou décrivez votre besoin..."
          }
        />
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-white">
        {formData.requestType === 'quote' 
          ? 'Détails de votre projet' 
          : formData.requestType === 'support'
          ? 'Décrivez votre problème'
          : 'Votre message'}
      </h2>
      
      {renderFormFields()}

      {/* Bouton de soumission */}
      <div className="flex justify-end">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg"
        >
          Continuer
        </Button>
      </div>
    </form>
  );
};

export default FormStep2;
