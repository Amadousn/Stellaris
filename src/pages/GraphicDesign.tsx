import React from 'react'
import LinkButton from '../components/ui/LinkButton'
import '../styles/ia-enhancements.css'

const GraphicDesign: React.FC = () => {
  const services = [
    {
      title: 'Identité Visuelle',
      description: 'Création de logos, chartes graphiques et identités de marque',
      icon: '🎨',
    },
    {
      title: 'Supports Marketing',
      description: 'Conception de flyers, brochures, cartes de visite et affiches',
      icon: '📄',
    },
    {
      title: 'Design Web',
      description: 'Création de bannières, visuels pour réseaux sociaux et newsletters',
      icon: '💻',
    },
    {
      title: 'Illustration',
      description: 'Illustrations personnalisées, icônes et infographies',
      icon: '✏️',
    },
  ]

  const process = [
    {
      title: 'Brief & Analyse',
      description: 'Compréhension de vos besoins et objectifs',
    },
    {
      title: 'Recherche & Concepts',
      description: 'Exploration créative et proposition de concepts',
    },
    {
      title: 'Design & Itération',
      description: 'Création et affinement des designs',
    },
    {
      title: 'Finalisation',
      description: 'Livraison des fichiers dans tous les formats nécessaires',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="stl-glass rounded-2xl p-8 md:p-12 backdrop-blur-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent stl-neon-text">
                Création Graphique Professionnelle
              </h1>
              <p className="text-xl text-gray-300 mb-8 stl-fade-in">
                Donnez vie à votre identité visuelle avec nos services de design graphique sur mesure
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <LinkButton to="/devis" size="lg">
                  Demander un devis
                </LinkButton>
                <LinkButton to="/portfolio" variant="outline" size="lg">
                  Voir nos réalisations
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Services Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="stl-glass rounded-xl p-6 stl-fade-in"
              >
                <div className="h-12 w-12 mb-4 text-secondary">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 stl-neon-text">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Notre Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-800/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center text-4xl">
                  🎨
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <LinkButton to="/portfolio" variant="outline" size="lg">
              Voir plus de projets
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Notre Processus Créatif
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Outils
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma'].map((tool) => (
              <div
                key={tool}
                className="px-6 py-3 bg-gray-800/50 rounded-full text-secondary hover:bg-gray-800 transition-colors duration-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="stl-glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 stl-neon-text">
              Prêt à donner vie à vos idées ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet de design graphique
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton to="/contact" size="lg">
                Nous contacter
              </LinkButton>
              <LinkButton to="/portfolio" variant="outline" size="lg">
                Voir le portfolio
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GraphicDesign
