import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const GraphicDesign = () => {
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
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Création Graphique
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Des designs uniques et impactants pour renforcer votre image de marque
          </p>
          <Button size="lg" to="/portfolio">
            Découvrir nos créations
          </Button>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder pour les images du portfolio */}
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
          <Button variant="outline" size="lg" to="/portfolio">
            Voir plus de projets
          </Button>
        </div>
      </Section>

      {/* Process Section */}
      <Section>
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
      </Section>

      {/* Tools Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
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
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un projet de design en tête ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" to="/devis">
              Demander un devis
            </Button>
            <Button variant="outline" size="lg" to="/portfolio">
              Voir le portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default GraphicDesign
