import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../styles/forms.css';
import { FaDesktop, FaMobileAlt, FaShoppingCart, FaUserLock, FaDatabase, FaSearch, FaInfoCircle, FaPalette, FaCode, FaCalendarAlt } from 'react-icons/fa';

interface WebAppProjectFormProps {
  onSubmit: (formData: any) => void;
}

const WebAppProjectForm: React.FC<WebAppProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<{
    projectType: string;
    projectScope: string[];
    objective: string;
    targetAudience: string;
    features: string[];
    customFeatures: string;
    design: string;
    existingSite: string;
    contentReady: string;
    responsiveNeeds: string[];
    seoRequirements: string;
    timeline: string;
    budget: string;
    additionalInfo: string;
    complexity: 'simple' | 'standard' | 'complex';
  }>({
    projectType: '',
    projectScope: [],
    objective: '',
    targetAudience: '',
    features: [],
    customFeatures: '',
    design: '',
    existingSite: '',
    contentReady: '',
    responsiveNeeds: [],
    seoRequirements: '',
    timeline: '',
    budget: '',
    additionalInfo: '',
    complexity: 'standard'
  });
  
  // État pour contrôler quelles sections du formulaire sont affichées
  const [visibleSections, setVisibleSections] = useState<{
    basicInfo: boolean;
    features: boolean;
    design: boolean;
    technical: boolean;
    timeline: boolean;
  }>({
    basicInfo: true,
    features: true,
    design: true,
    technical: true,
    timeline: true
  });

  const [submitted, setSubmitted] = useState(false);
  
  // Mettre à jour les sections visibles en fonction du type de projet et de la complexité
  useEffect(() => {
    if (formData.projectType) {
      // Définir la complexité en fonction du type de projet
      let complexity: 'simple' | 'standard' | 'complex' = 'standard';
      
      if (formData.projectType === 'site-vitrine' || formData.projectType === 'blog') {
        complexity = 'simple';
      } else if (['e-commerce', 'application-web'].includes(formData.projectType)) {
        complexity = 'complex';
      } else if (formData.projectType === 'site-catalogue') {
        complexity = 'standard';
      }
      
      setFormData(prev => ({ ...prev, complexity }));
      
      // Ajuster les sections visibles en fonction de la complexité et du type de projet
      setVisibleSections({
        basicInfo: true, // Toujours visible
        features: complexity !== 'simple', // Masqué pour les sites vitrines simples et blogs
        design: true, // Toujours visible
        technical: complexity === 'complex', // Visible uniquement pour les projets complexes
        timeline: true // Toujours visible
      });
      
      // Réinitialiser certains champs en fonction du type de projet
      if (formData.projectType === 'site-vitrine') {
        // Pour un site vitrine, présélectionner certaines options
        setFormData(prev => ({
          ...prev,
          features: ['formulaire-contact'],
          responsiveNeeds: ['desktop', 'mobile']
        }));
      } else if (formData.projectType === 'blog') {
        // Pour un blog, présélectionner certaines options
        setFormData(prev => ({
          ...prev,
          features: ['blog', 'formulaire-contact'],
          responsiveNeeds: ['desktop', 'mobile']
        }));
      } else if (formData.projectType === 'e-commerce') {
        // Pour un e-commerce, présélectionner certaines options
        setFormData(prev => ({
          ...prev,
          features: ['e-commerce', 'espace-membre', 'formulaire-contact'],
          responsiveNeeds: ['desktop', 'tablette', 'mobile']
        }));
      }
    }
  }, [formData.projectType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [name]: [...(prev[name as keyof typeof prev] as string[]), value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
  };

  const projectTypes = [
    { value: 'site-vitrine', label: 'Site Vitrine', description: 'Site simple pour présenter votre entreprise ou activité' },
    { value: 'e-commerce', label: 'E-commerce', description: 'Boutique en ligne pour vendre vos produits' },
    { value: 'application-web', label: 'Application Web', description: 'Application interactive avec fonctionnalités avancées' },
    { value: 'site-catalogue', label: 'Site Catalogue', description: 'Présentation de vos produits sans vente en ligne' },
    { value: 'blog', label: 'Blog', description: 'Site axé sur la publication de contenu régulier' },
    { value: 'autre', label: 'Autre', description: 'Autre type de projet web' }
  ];

  const projectScopes = [
    { value: 'creation', label: 'Création complète', icon: <FaDesktop /> },
    { value: 'refonte', label: 'Refonte de site existant', icon: <FaDesktop /> },
    { value: 'amelioration', label: 'Amélioration/Ajout de fonctionnalités', icon: <FaDatabase /> }
  ];

  const featureOptions = [
    { value: 'formulaire-contact', label: 'Formulaire de contact', icon: <FaDesktop /> },
    { value: 'espace-membre', label: 'Espace membre/client', icon: <FaUserLock /> },
    { value: 'blog', label: 'Blog/Actualités', icon: <FaDesktop /> },
    { value: 'e-commerce', label: 'Fonctionnalités e-commerce', icon: <FaShoppingCart /> },
    { value: 'multilangue', label: 'Site multilingue', icon: <FaDesktop /> },
    { value: 'seo-avance', label: 'SEO avancé', icon: <FaSearch /> },
    { value: 'cms', label: 'Système de gestion de contenu (CMS)', icon: <FaDatabase /> },
    { value: 'api', label: 'Intégration d\'API', icon: <FaDatabase /> }
  ];

  const responsiveOptions = [
    { value: 'desktop', label: 'Desktop', icon: <FaDesktop /> },
    { value: 'tablette', label: 'Tablette', icon: <FaDesktop /> },
    { value: 'mobile', label: 'Mobile', icon: <FaMobileAlt /> }
  ];

  return (
    <div className="form-container">
      {!submitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          className="devis-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="form-title">CRÉATION D'UN DEVIS SUR-MESURE : Site Web / Application</h2>
          
          <div className="mb-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <div className="flex items-start">
              <FaInfoCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <p className="text-sm text-blue-100">
                Sélectionnez le type de projet qui correspond le mieux à vos besoins. 
                Pour un site vitrine simple, seules les questions essentielles vous seront posées.
              </p>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="projectType">
              Quel type de projet souhaitez-vous créer ?
            </label>
            <select 
              id="projectType" 
              name="projectType" 
              value={formData.projectType}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Sélectionnez un type de projet</option>
              {projectTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            
            {formData.projectType && (
              <div className="mt-2 text-sm text-indigo-200 bg-indigo-900/20 p-2 rounded border border-indigo-500/20">
                {projectTypes.find(t => t.value === formData.projectType)?.description}
              </div>
            )}
          </div>

          {/* Section Informations de base - toujours visible */}
          {visibleSections.basicInfo && (
            <div className="form-section">
              <h3 className="form-section-title"><FaInfoCircle className="inline-block mr-2" /> Informations de base</h3>
              
              <div className="form-group">
                <label>
                  Quelle est la nature de votre projet ?
                </label>
                <div className="checkbox-group">
                  {projectScopes.map(scope => (
                    <div key={scope.value} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={`scope-${scope.value}`} 
                        name="projectScope" 
                        value={scope.value}
                        checked={formData.projectScope.includes(scope.value)}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={`scope-${scope.value}`} className="checkbox-label">
                        <span className="checkbox-icon">{scope.icon}</span>
                        {scope.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="objective">
                  {formData.projectType === 'site-vitrine' ? 
                    'Quel est l\'objectif principal de votre site vitrine ?' :
                  formData.projectType === 'blog' ? 
                    'Quel est l\'objectif principal de votre blog ?' :
                  formData.projectType === 'e-commerce' ? 
                    'Quel est l\'objectif principal de votre boutique en ligne ?' :
                  formData.projectType === 'application-web' ? 
                    'Quel est l\'objectif principal de votre application web ?' :
                  formData.projectType === 'site-catalogue' ? 
                    'Quel est l\'objectif principal de votre site catalogue ?' :
                    'Quel est l\'objectif principal de votre site web ?'}
                  <span className="form-hint">
                    {formData.projectType === 'site-vitrine' ? 
                      '(Présenter votre entreprise, générer des leads, etc.)' :
                    formData.projectType === 'blog' ? 
                      '(Partager du contenu, créer une communauté, etc.)' :
                    formData.projectType === 'e-commerce' ? 
                      '(Vendre des produits, élargir votre clientèle, etc.)' :
                    formData.projectType === 'application-web' ? 
                      '(Automatiser des processus, offrir un service en ligne, etc.)' :
                    formData.projectType === 'site-catalogue' ? 
                      '(Présenter vos produits, générer des demandes, etc.)' :
                      '(Présenter votre entreprise, vendre des produits, générer des leads, etc.)'}
                  </span>
                </label>
                <textarea 
                  id="objective" 
                  name="objective" 
                  value={formData.objective}
                  onChange={handleChange}
                  className="form-input"
                  rows={formData.complexity === 'simple' ? 2 : 3}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="targetAudience">
                  {formData.complexity === 'simple' ? 
                    'Quelle est votre audience cible ?' :
                    'Décrivez précisément votre audience cible'}
                  <span className="form-hint">
                    {formData.projectType === 'e-commerce' ? 
                      '(Qui sont vos acheteurs potentiels ? Âge, intérêts, habitudes d\'achat, etc.)' :
                    formData.projectType === 'blog' ? 
                      '(Qui sont vos lecteurs ? Centres d\'intérêt, niveau de connaissance, etc.)' :
                      '(Professionnels, particuliers, tranche d\'âge, etc.)'}
                  </span>
                </label>
                {formData.complexity === 'simple' ? (
                  <input 
                    type="text" 
                    id="targetAudience" 
                    name="targetAudience" 
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                ) : (
                  <textarea 
                    id="targetAudience" 
                    name="targetAudience" 
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="form-input"
                    rows={2}
                    required
                  />
                )}
              </div>
            </div>
          )}

          {/* Section Fonctionnalités - visible pour les projets non simples */}
          {visibleSections.features && (
            <div className="form-section">
              <h3 className="form-section-title"><FaCode className="inline-block mr-2" /> Fonctionnalités souhaitées</h3>
              
              <div className="form-group">
                <label>
                  Quelles fonctionnalités souhaitez-vous intégrer ?
                </label>
                <div className="checkbox-group">
                  {featureOptions.map(feature => (
                    <div key={feature.value} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={`feature-${feature.value}`} 
                        name="features" 
                        value={feature.value}
                        checked={formData.features.includes(feature.value)}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={`feature-${feature.value}`} className="checkbox-label">
                        <span className="checkbox-icon">{feature.icon}</span>
                        {feature.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="customFeatures">
                  Autres fonctionnalités spécifiques ?
                  <span className="form-hint">(Décrivez toute fonctionnalité particulière non listée ci-dessus)</span>
                </label>
                <textarea 
                  id="customFeatures" 
                  name="customFeatures" 
                  value={formData.customFeatures}
                  onChange={handleChange}
                  className="form-input"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Section Design - toujours visible */}
          {visibleSections.design && (
            <div className="form-section">
              <h3 className="form-section-title"><FaPalette className="inline-block mr-2" /> Design et contenu</h3>
              
              <div className="form-group">
                <label htmlFor="design">
                  {formData.complexity === 'simple' ? 
                    'Avez-vous des préférences de design ?' :
                    'Décrivez vos préférences de design en détail'}
                  <span className="form-hint">
                    {formData.projectType === 'site-vitrine' ? 
                      '(Couleurs de votre marque, style sobre ou créatif, etc.)' :
                    formData.projectType === 'e-commerce' ? 
                      '(Sites e-commerce que vous aimez, ambiance souhaitée, etc.)' :
                    formData.projectType === 'blog' ? 
                      '(Blogs que vous appréciez, style d\'écriture, mise en page, etc.)' :
                      '(Style, couleurs, références de sites que vous aimez, etc.)'}
                  </span>
                </label>
                <textarea 
                  id="design" 
                  name="design" 
                  value={formData.design}
                  onChange={handleChange}
                  className="form-input"
                  rows={formData.complexity === 'simple' ? 2 : 3}
                />
              </div>

              <div className="form-group">
                <label>
                  Compatibilité souhaitée
                </label>
                <div className="checkbox-group">
                  {responsiveOptions.map(option => (
                    <div key={option.value} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={`responsive-${option.value}`} 
                        name="responsiveNeeds" 
                        value={option.value}
                        checked={formData.responsiveNeeds.includes(option.value)}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={`responsive-${option.value}`} className="checkbox-label">
                        <span className="checkbox-icon">{option.icon}</span>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section Technique - visible uniquement pour les projets complexes */}
          {visibleSections.technical && (
            <div className="form-section">
              <h3 className="form-section-title"><FaDatabase className="inline-block mr-2" /> Exigences techniques</h3>
              
              <div className="form-group">
                <label htmlFor="existingSite">
                  Avez-vous déjà un site web existant ?
                  <span className="form-hint">(Si oui, merci de préciser l'URL et ce que vous souhaitez conserver ou modifier)</span>
                </label>
                <textarea 
                  id="existingSite" 
                  name="existingSite" 
                  value={formData.existingSite}
                  onChange={handleChange}
                  className="form-input"
                  rows={2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contentReady">
                  Disposez-vous déjà du contenu pour votre site ?
                  <span className="form-hint">(Textes, images, logo, etc.)</span>
                </label>
                <input 
                  type="text" 
                  id="contentReady" 
                  name="contentReady" 
                  value={formData.contentReady}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="seoRequirements">
                  Avez-vous des besoins spécifiques en référencement (SEO) ?
                </label>
                <textarea 
                  id="seoRequirements" 
                  name="seoRequirements" 
                  value={formData.seoRequirements}
                  onChange={handleChange}
                  className="form-input"
                  rows={2}
                />
              </div>
            </div>
          )}

          {/* Section Calendrier et Budget - toujours visible */}
          {visibleSections.timeline && (
            <div className="form-section">
              <h3 className="form-section-title"><FaCalendarAlt className="inline-block mr-2" /> Calendrier et budget</h3>
              
              <div className="form-group">
                <label htmlFor="timeline">
                  Quel est votre calendrier pour ce projet ?
                  <span className="form-hint">(Date de lancement souhaitée, contraintes particulières, etc.)</span>
                </label>
                <input 
                  type="text" 
                  id="timeline" 
                  name="timeline" 
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget">
                  Avez-vous défini une enveloppe budgétaire pour ce projet ?
                  <span className="form-hint">(Ceci nous aide à adapter au mieux nos recommandations)</span>
                </label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="moins-1000">Moins de 1000€</option>
                  <option value="1000-3000">Entre 1000€ et 3000€</option>
                  <option value="3000-5000">Entre 3000€ et 5000€</option>
                  <option value="5000-10000">Entre 5000€ et 10000€</option>
                  <option value="plus-10000">Plus de 10000€</option>
                  <option value="non-defini">Je n'ai pas encore défini de budget</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">
                  Souhaitez-vous ajouter d'autres informations ou contraintes particulières ?
                </label>
                <textarea 
                  id="additionalInfo" 
                  name="additionalInfo" 
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="form-input"
                  rows={formData.complexity === 'simple' ? 2 : 4}
                />
              </div>
            </div>
          )}

          <motion.button 
            type="submit" 
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Soumettre ma demande de devis
          </motion.button>
        </motion.form>
      ) : (
        <motion.div 
          className="confirmation-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="confirmation-icon">
            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="confirmation-title">Merci pour ces précieuses informations.</h2>
          <p className="confirmation-text">Notre équipe va analyser votre demande et vous proposer un devis personnalisé dans les plus brefs délais.</p>
        </motion.div>
      )}
    </div>
  );
};

export default WebAppProjectForm;
