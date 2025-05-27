import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import StarryBackground from '../components/StarryBackground';
import ContactFormEnhanced from '../components/forms/ContactFormEnhanced';

const Comptabilite = () => {
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Ici, vous pourriez envoyer les données à votre backend ou service d'emails
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Configuration des animations

  return (
    <div className="pt-24 pb-20 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      
      {/* Particules flottantes simplifiées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary-light/30"
            style={{
              top: `${20 * i}%`,
              left: `${15 * i}%`,
              width: "2px",
              height: "2px"
            }}
          />
        ))}
      </div>
      
      <Section>
        <motion.div 
          className="max-w-5xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 title-gradient animate-pulse-3d tracking-wider">
            Services de Comptabilité
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl subtitle mb-12 max-w-3xl mx-auto">
            Des solutions comptables adaptées à votre activité pour optimiser votre gestion financière et vous concentrer sur votre cœur de métier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <ServiceCard 
            title="Comptabilité Générale"
            description="Tenue complète de votre comptabilité, établissement des états financiers et déclarations fiscales."
            icon={<AccountingIcon />}
          />
          <ServiceCard 
            title="Conseil Fiscal"
            description="Optimisation fiscale, accompagnement lors des contrôles et veille réglementaire personnalisée."
            icon={<TaxIcon />}
          />
          <ServiceCard 
            title="Gestion de Paie"
            description="Établissement des bulletins de paie, déclarations sociales et suivi des obligations employeur."
            icon={<PayrollIcon />}
          />
          <ServiceCard 
            title="Création d'Entreprise"
            description="Accompagnement dans les démarches de création, choix du statut juridique et fiscal."
            icon={<StartupIcon />}
          />
          <ServiceCard 
            title="Tableaux de Bord"
            description="Mise en place d'indicateurs de performance et suivi de votre activité en temps réel."
            icon={<DashboardIcon />}
          />
          <ServiceCard 
            title="Comptabilité Digitale"
            description="Solutions cloud, dématérialisation des factures et automatisation des processus comptables."
            icon={<DigitalIcon />}
          />
        </div>

        <div 
          className="glass-dark p-10 rounded-xl border border-secondary/20 mb-20 relative overflow-hidden"
        >
          {/* Effet de particules réduit */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-secondary/10"
              style={{
                top: `${25 * i}%`,
                left: `${30 * i}%`,
                width: "4px",
                height: "4px"
              }}
            ></div>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6 title-gradient"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Notre Approche
              </motion.h2>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-secondary to-accent mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: '4rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.p 
                className="subtitle mb-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Chez Stellaris, nous considérons la comptabilité comme un outil stratégique pour votre développement, pas comme une simple obligation légale.
              </motion.p>
              <motion.p 
                className="subtitle mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Nous vous proposons :
              </motion.p>
              <motion.ul 
                className="space-y-3 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  "Un accompagnement personnalisé adapté à votre secteur d'activité",
                  "Des outils digitaux pour simplifier vos démarches comptables",
                  "Une équipe réactive et disponible pour répondre à vos questions",
                  "Des conseils proactifs pour optimiser votre fiscalité"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3 text-text-secondary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  >
                    <span className="text-secondary mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className="text-highlight font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Notre objectif : vous permettre de vous concentrer sur votre activité en toute sérénité.
              </motion.p>
            </div>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                {/* Effet de lueur */}
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl animate-pulse-slow"></div>
                <img 
                  src="/images/accounting-illustration.svg" 
                  alt="Illustration comptabilité" 
                  className="max-w-full h-auto relative z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=Comptabilité+Stellaris';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 opacity-70">
            <div className="w-full h-full bg-accent/30 rounded-full blur-xl"></div>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center title-gradient">
            Contactez Notre Équipe Comptable
          </h2>
          
          <div>
            <ContactFormEnhanced onSubmit={handleFormSubmit} borderColor="blue" />
          </div>
        </div>
      </Section>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div 
    className="glass-card p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
  >
    {/* Effet de particules simplifié */}
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-secondary/10"
        style={{
          top: `${30 * i}%`,
          left: `${40 * i}%`,
          width: "4px",
          height: "4px"
        }}
      />
    ))}
    
    <div className="text-secondary mb-5 flex justify-center group-hover:text-secondary-light transition-colors duration-300 relative z-10">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-white text-center relative z-10 group-hover:text-secondary-light transition-colors duration-300">{title}</h3>
    <p className="text-text-secondary text-center relative z-10 group-hover:text-text-primary transition-colors duration-300">{description}</p>
    
    {/* Bordure lumineuse simplifiée */}
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

// Icônes pour les services
const AccountingIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const TaxIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
  </svg>
);

const PayrollIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const StartupIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const DigitalIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export default Comptabilite;
