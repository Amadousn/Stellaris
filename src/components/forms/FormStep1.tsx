import React from 'react';
import { useFormContext } from '../../context/FormContext';
import Button from '../ui/Button';

const FormStep1: React.FC = () => {
  const { formData, updateFormData, nextStep } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  // Options pour le type de demande
  const requestTypes = [
    { value: 'quote', label: 'Demande de devis' },
    { value: 'contact', label: 'Question générale' },
    { value: 'support', label: 'Support technique' }
  ];

  // Options pour les services
  const serviceOptions = [
    { value: 'web', label: 'Création Web' },
    { value: 'design', label: 'Design Graphique' },
    { value: 'seo', label: 'SEO' },
    { value: 'ads', label: 'Publicité en ligne' },
    { value: 'social', label: 'Réseaux Sociaux' },
    { value: 'video', label: 'Vidéo Marketing' },
    { value: 'accounting', label: 'Comptabilité' },
    { value: 'other', label: 'Autre' }
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-white">Commençons par les bases</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            placeholder="Jean Dupont"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            placeholder="jean@exemple.fr"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            placeholder="06 12 34 56 78"
          />
        </div>

        {/* Entreprise */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>

      {/* Type de demande */}
      <div className="mb-6">
        <label htmlFor="requestType" className="block text-sm font-medium text-gray-300 mb-2">
          Type de demande *
        </label>
        <select
          id="requestType"
          name="requestType"
          required
          value={formData.requestType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
          style={{ backgroundColor: 'rgba(30, 35, 60, 0.9)' }}
        >
          <option value="" style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>Sélectionnez le type de demande</option>
          {requestTypes.map(type => (
            <option key={type.value} value={type.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{type.label}</option>
          ))}
        </select>
      </div>

      {/* Service concerné */}
      <div className="mb-8">
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          Service concerné *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
          style={{ backgroundColor: 'rgba(30, 35, 60, 0.9)' }}
        >
          <option value="" style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>Sélectionnez un service</option>
          {serviceOptions.map(service => (
            <option key={service.value} value={service.value} style={{ backgroundColor: 'rgba(30, 35, 60, 0.95)', color: 'white', padding: '10px' }}>{service.label}</option>
          ))}
        </select>
      </div>

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

export default FormStep1;
