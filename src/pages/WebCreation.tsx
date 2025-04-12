import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const WebCreation = () => {
  const features = [
    {
      title: 'Sites Vitrines',
      description: 'Présentez votre entreprise avec élégance et professionnalisme',
      icon: '🏢',
    },
    {
      title: 'E-commerce',
      description: 'Vendez vos produits en ligne avec une boutique optimisée',
      icon: '🛍️',
    },
    {
      title: 'Sites Catalogues',
      description: 'Exposez vos produits et services de manière attractive',
      icon: '📱',
    },
    {
      title: 'Sites Sur-mesure',
      description: 'Solutions personnalisées adaptées à vos besoins spécifiques',
      icon: '⚙️',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Création de Sites Internet
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Des sites web modernes, responsifs et optimisés pour convertir vos visiteurs en clients
          </p>
          <Button size="lg">
            Demander un devis
          </Button>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Processus
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyse des Besoins</h3>
                <p className="text-gray-400">
                  Nous étudions vos objectifs et définissons ensemble la meilleure stratégie pour votre site web.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design & Maquettes</h3>
                <p className="text-gray-400">
                  Création de maquettes personnalisées respectant votre identité visuelle.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Développement</h3>
                <p className="text-gray-400">
                  Intégration et développement avec les dernières technologies web.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tests & Mise en Ligne</h3>
                <p className="text-gray-400">
                  Tests approfondis et déploiement sécurisé de votre site web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à lancer votre projet web ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Demander un devis
            </Button>
            <Button variant="secondary" size="lg">
              En savoir plus
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default WebCreation
