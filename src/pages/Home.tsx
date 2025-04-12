import React, { useEffect } from 'react'
import StarryBackground from '../components/StarryBackground'
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative group overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-xl" />
      <div className="relative p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300">
        <div className={`text-4xl mb-4 ${color}`}>{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        
        {/* Effet de glow subtil */}
        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300 rounded-xl" />
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
    <div className="min-h-screen relative overflow-hidden">
      <StarryBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent stl-neon-text">
            Propulsez votre entreprise
            <br />
            vers les étoiles
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto stl-fade-in" style={{ animationDelay: '0.3s' }}>
            Sites web sur mesure, SEO, campagnes Ads, et plus encore.
            <br />
            Votre succès digital commence ici.
          </p>

          <div className="flex flex-wrap justify-center gap-4 stl-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="hover:scale-105 hover:shadow-glow transition-all duration-300"
            >
              Démarrer votre projet
            </Button>
            <Button
              to="/portfolio"
              variant="glass"
              size="lg"
              className="hover:scale-105 transition-all duration-300"
            >
              Voir nos réalisations
            </Button>
          </div>

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
        <section className="py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Nos Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Des solutions sur mesure pour votre présence numérique
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Création Web"
                description="Sites web modernes et responsive, parfaitement adaptés à vos besoins"
                icon={<FaGlobe className="w-8 h-8" />}
                color="text-blue-400 group-hover:text-blue-300"
                delay={0}
              />
              <ServiceCard
                title="Design Graphique"
                description="Identité visuelle unique et supports marketing percutants"
                icon={<FaPencilAlt className="w-8 h-8" />}
                color="text-indigo-400 group-hover:text-indigo-300"
                delay={0.2}
              />
              <ServiceCard
                title="SEO"
                description="Optimisation pour les moteurs de recherche et visibilité en ligne"
                icon={<FaSearch className="w-8 h-8" />}
                color="text-violet-400 group-hover:text-violet-300"
                delay={0.4}
              />
              <ServiceCard
                title="Marketing Digital"
                description="Stratégies marketing efficaces pour atteindre vos objectifs"
                icon={<FaChartLine className="w-8 h-8" />}
                color="text-cyan-400 group-hover:text-cyan-300"
                delay={0.6}
              />
              <ServiceCard
                title="Réseaux Sociaux"
                description="Gestion professionnelle de vos réseaux sociaux"
                icon={<FaInstagram className="w-8 h-8" />}
                color="text-teal-400 group-hover:text-teal-300"
                delay={0.8}
              />
              <ServiceCard
                title="Support Technique"
                description="Assistance et maintenance continue de vos solutions"
                icon={<FaHeadset className="w-8 h-8" />}
                color="text-sky-400 group-hover:text-sky-300"
                delay={1}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="stl-glass rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 stl-neon-text">
                Prêt à décoller ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Nous contacter
                </Button>
                <Button to="/devis" variant="glass" size="lg">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
