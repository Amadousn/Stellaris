import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const VideoMarketing = () => {
  const services = [
    {
      title: 'Production Vidéo',
      description: 'Création de contenu vidéo professionnel',
      icon: '🎥',
      types: ['Corporate', 'Produit', 'Formation', 'Social Media'],
    },
    {
      title: 'YouTube Marketing',
      description: 'Optimisation et promotion sur YouTube',
      icon: '▶️',
      features: ['SEO YouTube', 'Publicités', 'Analytics'],
    },
    {
      title: 'Vidéos Social Media',
      description: 'Contenus adaptés aux réseaux sociaux',
      icon: '📱',
      formats: ['Stories', 'Reels', 'TikTok', 'Shorts'],
    },
    {
      title: 'Motion Design',
      description: 'Animations et effets visuels',
      icon: '✨',
      elements: ['Logo Animation', 'Infographies', 'Transitions'],
    },
  ]

  const benefits = [
    {
      title: 'Engagement Accru',
      description: 'Le format vidéo génère plus d\'engagement que tout autre contenu',
    },
    {
      title: 'Mémorisation',
      description: 'Message plus impactant et mieux retenu par votre audience',
    },
    {
      title: 'Conversion',
      description: 'Taux de conversion plus élevé grâce au format vidéo',
    },
    {
      title: 'SEO',
      description: 'Meilleur référencement grâce au contenu vidéo',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Référencement Vidéo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Captivez votre audience avec des contenus vidéo professionnels et optimisés
          </p>
          <Button size="lg">
            Découvrir nos services vidéo
          </Button>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services Vidéo
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
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {(service.types || service.features || service.formats || service.elements)?.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Réalisations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder pour les vidéos du portfolio */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-video bg-gray-800/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center text-4xl">
                ▶️
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="secondary" size="lg">
            Voir plus de projets
          </Button>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi la Vidéo ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Processus de Création
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scénarisation</h3>
                <p className="text-gray-400">
                  Élaboration du concept et du script
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Production</h3>
                <p className="text-gray-400">
                  Tournage ou création des éléments visuels
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Post-production</h3>
                <p className="text-gray-400">
                  Montage, animations et effets spéciaux
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
                <p className="text-gray-400">
                  SEO vidéo et distribution sur les plateformes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Equipment Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Équipement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <span className="text-4xl mb-4 block">📹</span>
            <h3 className="text-xl font-semibold mb-2">Caméras Pro</h3>
            <p className="text-gray-400">
              Matériel professionnel haute définition
            </p>
          </div>
          <div className="text-center p-6">
            <span className="text-4xl mb-4 block">🎚️</span>
            <h3 className="text-xl font-semibold mb-2">Audio Pro</h3>
            <p className="text-gray-400">
              Équipement audio haute qualité
            </p>
          </div>
          <div className="text-center p-6">
            <span className="text-4xl mb-4 block">💻</span>
            <h3 className="text-xl font-semibold mb-2">Post-production</h3>
            <p className="text-gray-400">
              Suite complète d'édition vidéo
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à créer du contenu vidéo impactant ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet vidéo et obtenir un devis personnalisé
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Demander un devis
            </Button>
            <Button variant="secondary" size="lg">
              Voir notre portfolio
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default VideoMarketing
