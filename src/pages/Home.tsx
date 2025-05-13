import React, { useEffect } from 'react'
import Button from '../components/ui/Button'
import Timeline from '../components/Timeline'
import { motion } from 'framer-motion'
import { FaGlobe, FaPencilAlt, FaSearch, FaChartLine, FaInstagram, FaHeadset } from 'react-icons/fa'
import '../styles/ia-enhancements.css'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, delay }) => {
  return (
    <motion.div
      className="relative group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay || 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Fond avec effet glassmorphism */}
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-xl" />
      
      {/* Contenu de la carte */}
      <div className="relative p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 overflow-hidden">
        {/* Icône avec effet de lueur */}
        <motion.div 
          className={`text-4xl mb-4 ${color}`}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {icon}
        </motion.div>
        
        {/* Titre avec dégradé */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        {/* Bordure lumineuse au survol */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

const Home: React.FC = () => {
  useEffect(() => {
    // Ajout de la classe pour l'animation du titre
    const title = document.querySelector('.hero-title')
    if (title) {
      title.classList.add('stl-slide-up')
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden pt-40 pb-20">
      {/* Background Premium avec étoiles */}
      <div className="fixed inset-0 bg-primary z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-light via-primary to-primary-dark opacity-80" />
        
        {/* Effet d'étoiles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Petites étoiles */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={`star-small-${i}`}
              className="absolute rounded-full bg-white w-0.5 h-0.5 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7
              }}
            />
          ))}
          
          {/* Étoiles moyennes */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`star-medium-${i}`}
              className="absolute rounded-full bg-white w-1 h-1 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7
              }}
            />
          ))}
          
          {/* Grandes étoiles avec lueur */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={`star-large-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <div 
                className="rounded-full bg-white w-1.5 h-1.5 animate-pulse-slow"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.3)'
                }}
              />
            </div>
          ))}
          
          {/* Nébuleuse subtile */}
          <div 
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(61, 90, 254, 0.3) 0%, rgba(61, 90, 254, 0) 70%)',
              width: '40%',
              height: '40%',
              top: '30%',
              left: '20%',
              transform: 'rotate(-15deg)'
            }}
          />
          
          <div 
            className="absolute rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 213, 79, 0.3) 0%, rgba(255, 213, 79, 0) 70%)',
              width: '50%',
              height: '50%',
              top: '10%',
              right: '10%',
              transform: 'rotate(15deg)'
            }}
          />
        </div>
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

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wider">
              <motion.span 
                className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Propulsez votre entreprise
              </motion.span>
              <motion.span 
                className="block mt-2 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                vers les <span className="relative inline-block">
                  <motion.span 
                    className="bg-gradient-to-r from-secondary via-accent to-secondary-light bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 100%' }}
                  >
                    étoiles
                  </motion.span>
                  <motion.div 
                    className="absolute -inset-1 rounded-lg opacity-0"
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    style={{ background: 'radial-gradient(circle, rgba(255,213,79,0.4) 0%, rgba(255,213,79,0) 70%)' }}
                  />
                </span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="block mb-2">Sites web sur mesure, SEO, campagnes Ads, et plus encore.</span>
            <span className="block">Votre succès digital commence ici.</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              to="/devis"
              variant="primary"
              size="lg"
              className="btn-primary hover-lift hover-glow"
            >
              <span className="relative z-10">Démarrer votre projet</span>
            </Button>
            <Button
              to="/portfolio"
              variant="glass"
              size="lg"
              className="glass hover-lift"
            >
              <span className="relative z-10">Voir nos réalisations</span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="stl-scroll-indicator">
            <svg
              className="w-6 h-6 text-white animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        <Timeline />

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 title-gradient animate-pulse-3d tracking-wide">NOS SERVICES</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6 rounded-full"></div>
              <p className="subtitle max-w-2xl mx-auto tracking-wide text-lg">
                Des solutions sur mesure pour votre présence numérique
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Création Web"
                description="Sites web modernes et responsive, parfaitement adaptés à vos besoins"
                icon={<FaGlobe className="w-8 h-8" />}
                color="text-secondary group-hover:text-secondary-light"
                delay={0}
              />
              <ServiceCard
                title="Design Graphique"
                description="Identité visuelle unique et supports marketing percutants"
                icon={<FaPencilAlt className="w-8 h-8" />}
                color="text-secondary group-hover:text-secondary-light"
                delay={0.2}
              />
              <ServiceCard
                title="SEO"
                description="Optimisation pour les moteurs de recherche et visibilité en ligne"
                icon={<FaSearch className="w-8 h-8" />}
                color="text-accent group-hover:text-accent-light"
                delay={0.4}
              />
              <ServiceCard
                title="Marketing Digital"
                description="Stratégies marketing efficaces pour atteindre vos objectifs"
                icon={<FaChartLine className="w-8 h-8" />}
                color="text-secondary group-hover:text-secondary-light"
                delay={0.6}
              />
              <ServiceCard
                title="Réseaux Sociaux"
                description="Gestion professionnelle de vos réseaux sociaux"
                icon={<FaInstagram className="w-8 h-8" />}
                color="text-secondary-light group-hover:text-secondary"
                delay={0.8}
              />
              <ServiceCard
                title="Support Technique"
                description="Assistance et maintenance continue de vos solutions"
                icon={<FaHeadset className="w-8 h-8" />}
                color="text-accent-light group-hover:text-accent"
                delay={1}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="glass-dark rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-secondary/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Effet de particules léger */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-secondary/20"
                  style={{
                    top: `${20 * i}%`,
                    left: `${25 * i}%`,
                    width: "4px",
                    height: "4px"
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + i,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Bordure lumineuse */}
              <div className="absolute inset-0 border border-secondary/30 rounded-2xl opacity-50"></div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Prêt à décoller ?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Button 
                    to="/contact" 
                    variant="primary" 
                    size="lg"
                    className="btn-primary shadow-lg hover:shadow-secondary/40"
                  >
                    <span className="relative z-10">Nous contacter</span>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Button 
                    to="/devis" 
                    variant="glass" 
                    size="lg"
                    className="btn-outline border-secondary/50 hover:border-secondary"
                  >
                    <span className="relative z-10">Demander un devis</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
