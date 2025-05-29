import emailjs from '@emailjs/browser';

// Constantes pour EmailJS
const SERVICE_ID = 'YOUR_SERVICE_ID'; // À remplacer par votre ID de service EmailJS
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // À remplacer par votre ID de template EmailJS
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // À remplacer par votre clé publique EmailJS

// Interface pour les données du formulaire
interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  requestType: string;
  service: string;
  budget?: string;
  projectType?: string;
  timeline?: string;
  requirements?: string[];
  source?: string;
}

/**
 * Envoie les données du formulaire via EmailJS
 * @param formData Données du formulaire à envoyer
 * @returns Promise avec le résultat de l'envoi
 */
export const sendFormData = async (formData: FormData): Promise<any> => {
  try {
    // Préparation des données pour EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Non renseigné',
      company: formData.company || 'Non renseigné',
      message: formData.message || 'Aucun message',
      request_type: getRequestTypeLabel(formData.requestType),
      service: getServiceLabel(formData.service),
      budget: formData.budget ? getBudgetLabel(formData.budget) : 'Non renseigné',
      project_type: formData.projectType ? getProjectTypeLabel(formData.projectType) : 'Non renseigné',
      timeline: formData.timeline ? getTimelineLabel(formData.timeline) : 'Non renseigné',
      requirements: formData.requirements?.join(', ') || 'Aucune',
      source: formData.source || 'Direct',
      to_name: 'Stellaris', // Nom du destinataire
      reply_to: formData.email,
    };

    // Envoi via EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email envoyé avec succès:', response);
    return response;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};

// Fonctions d'aide pour obtenir les libellés
const getRequestTypeLabel = (type: string): string => {
  const types: Record<string, string> = {
    'quote': 'Demande de devis',
    'contact': 'Question générale',
    'support': 'Support technique'
  };
  return types[type] || type;
};

const getServiceLabel = (service: string): string => {
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

const getBudgetLabel = (budget: string): string => {
  const budgets: Record<string, string> = {
    'less-5k': 'Moins de 5k€',
    '5k-10k': '5k€ - 10k€',
    '10k-20k': '10k€ - 20k€',
    '20k-50k': '20k€ - 50k€',
    'more-50k': 'Plus de 50k€'
  };
  return budgets[budget] || budget;
};

const getTimelineLabel = (timeline: string): string => {
  const timelines: Record<string, string> = {
    'urgent': 'Urgent (< 1 mois)',
    'standard': 'Standard (1-3 mois)',
    'flexible': 'Flexible (3-6 mois)',
    'long-term': 'Long terme (6+ mois)'
  };
  return timelines[timeline] || timeline;
};

const getProjectTypeLabel = (type: string): string => {
  const allTypes: Record<string, string> = {
    // Types de projets web
    'website': 'Site vitrine',
    'e-commerce': 'E-commerce',
    'web-app': 'Application web',
    'mobile-app': 'Application mobile',
    'redesign': 'Refonte de site',
    
    // Types de projets design
    'logo': 'Logo et identité visuelle',
    'print': 'Supports imprimés',
    'ui-ux': 'UI/UX Design',
    'illustration': 'Illustrations',
    
    // Types de projets SEO
    'audit': 'Audit SEO',
    'optimization': 'Optimisation on-page',
    'content': 'Stratégie de contenu',
    'local-seo': 'SEO local'
  };
  
  return allTypes[type] || type;
};
