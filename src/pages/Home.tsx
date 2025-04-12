import React, { useEffect } from 'react'
import StarryBackground from '../components/StarryBackground'
import Button from '../components/ui/Button'
import '../styles/ia-enhancements.css'

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

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 stl-neon-text">
              Nos Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌐',
                  title: 'Sites Web',
                  description: 'Sites vitrines et e-commerce sur mesure avec un design moderne et responsive.'
                },
                {
                  icon: '📱',
                  title: 'Applications',
                  description: 'Applications web et mobiles performantes pour digitaliser votre activité.'
                },
                {
                  icon: '🎨',
                  title: 'Design',
                  description: 'Identité visuelle unique et cohérente pour renforcer votre image de marque.'
                },
                {
                  icon: '📈',
                  title: 'SEO',
                  description: 'Optimisation pour les moteurs de recherche et stratégie de contenu.'
                },
                {
                  icon: '💡',
                  title: 'Marketing',
                  description: 'Campagnes publicitaires ciblées sur les réseaux sociaux et Google Ads.'
                },
                {
                  icon: '🛠️',
                  title: 'Maintenance',
                  description: 'Support technique et mises à jour régulières de votre site web.'
                }
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="stl-glass p-6 rounded-xl stl-fade-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
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
