import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Section from '../components/ui/Section'
import ContactForm from '../components/ContactForm'
import VideoDevisForm from '../components/forms/VideoDevisForm'
import WebAppProjectForm from '../components/forms/WebAppProjectForm'
import FloatingContactForm from '../components/forms/FloatingContactForm'
import StarryBackground from '../components/StarryBackground'
import { motion } from 'framer-motion'
import { FaVideo, FaGlobe, FaComments } from 'react-icons/fa'

const Devis = () => {
  const location = useLocation();
  const [formType, setFormType] = useState<'intro' | 'video' | 'web' | 'graphique' | 'marketing' | 'other'>('intro');
  
  // Récupérer les paramètres d'URL pour pré-sélectionner une formule
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    
    if (type) {
      switch(type) {
        case 'web':
          setFormType('web');
          break;
        case 'video':
          setFormType('video');
          break;
        case 'graphique':
          setFormType('graphique');
          break;
        case 'marketing':
          setFormType('marketing');
          break;
        default:
          break;
      }
    }
  }, [location]);
  
  // Fonction pour gérer la soumission des formulaires
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Ici vous pourriez ajouter la logique d'envoi du formulaire à votre backend
  };
  
  // Effet d'étoiles filantes
  const ShootingStars = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
            }}
            animate={{
              y: [0, 10, 0],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
    );
  };
  
  // Effet de réseau stellaire
  const StellarNetwork = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x1}%`}
                y2={`${y1}%`}
                animate={{ x2: `${x2}%`, y2: `${y2}%` }}
                transition={{ duration: 3, delay: i * 0.2 }}
                stroke="url(#grad1)"
                strokeWidth="0.5"
              />
            );
          })}
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="1"
              fill="#a78bfa"
              opacity="0"
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>
      </div>
    );
  };
  
  // Orbes de lumière
  const LightOrbs = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, rgba(59,130,246,0.05) 70%, rgba(0,0,0,0) 100%)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              scale: [1, Math.random() * 0.3 + 0.9, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-40 pb-20">
      <div className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      <ShootingStars />
      <StellarNetwork />
      <LightOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>
      
      <div className="relative z-10">
        <Section>
          {formType === 'intro' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-gradient-x tracking-wide">
                Vous avez un projet ou une idée ? Parlons-en.
              </h1>
              <p className="text-xl text-lavender-100 mb-12 tracking-wide">
                Nous vous répondrons avec attention et clarté, dans les plus brefs délais.
              </p>
              
              {/* Options de devis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: <FaVideo className="w-8 h-8" />,
                    title: "Projet Vidéo",
                    description: "Création de contenu vidéo, montage et production",
                    type: 'video'
                  },
                  {
                    icon: <FaGlobe className="w-8 h-8" />,
                    title: "Site Web / App",
                    description: "Développement web et applications sur mesure",
                    type: 'web'
                  },
                  {
                    icon: <FaComments className="w-8 h-8" />,
                    title: "Autres Projets",
                    description: "Contactez-nous pour tout autre type de projet",
                    type: 'other'
                  }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="p-6 rounded-xl backdrop-blur-sm border border-lavender-400/20 hover:border-lavender-400/40 transition-all duration-300 cursor-pointer group"
                    onClick={() => setFormType(option.type as any)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-amber-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{option.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors duration-300">{option.title}</h3>
                    <p className="text-lavender-100/80">{option.description}</p>
                    
                    {/* Effet de halo */}
                    <motion.div 
                      className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      style={{ 
                        background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, rgba(59,130,246,0.05) 50%, rgba(0,0,0,0) 100%)',
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {formType === 'video' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setFormType('intro')} 
                className="mb-8 text-lavender-100 hover:text-white flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
              
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-lavender-400/20 shadow-xl">
                <VideoDevisForm />
              </div>
            </motion.div>
          )}
          
          {formType === 'web' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setFormType('intro')} 
                className="mb-8 text-lavender-100 hover:text-white flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
              
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-lavender-400/20 shadow-xl">
                <WebAppProjectForm onSubmit={handleFormSubmit} />
              </div>
            </motion.div>
          )}
          
          {formType === 'graphique' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setFormType('intro')} 
                className="mb-8 text-lavender-100 hover:text-white flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
              
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-lavender-400/20 shadow-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">CRÉATION D'UN DEVIS SUR-MESURE : Design Graphique</h2>
                <p className="text-xl text-lavender-100 mb-12">Formulaire en cours de développement. Veuillez nous contacter directement.</p>
                <FloatingContactForm />
              </div>
            </motion.div>
          )}
          
          {formType === 'marketing' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setFormType('intro')} 
                className="mb-8 text-lavender-100 hover:text-white flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
              
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-lavender-400/20 shadow-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500 bg-clip-text text-transparent animate-gradient-x">CRÉATION D'UN DEVIS SUR-MESURE : Marketing Digital</h2>
                <p className="text-xl text-lavender-100 mb-12">Formulaire en cours de développement. Veuillez nous contacter directement.</p>
                <FloatingContactForm />
              </div>
            </motion.div>
          )}
          
          {formType === 'other' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => setFormType('intro')} 
                className="mb-8 text-lavender-100 hover:text-white flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
              
              <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-lavender-400/20 shadow-xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient-x">CRÉATION D'UN DEVIS SUR-MESURE : Autres Projets</h2>
                <p className="text-xl text-lavender-100 mb-12">Contactez-nous pour discuter de votre projet spécifique</p>
                <FloatingContactForm />
              </div>
            </motion.div>
          )}
        </Section>
      </div>
    </div>
  )
}

export default Devis
