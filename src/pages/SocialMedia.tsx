import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const SocialMedia = () => {
  const services = [
    {
      title: 'Gestion de Réseaux Sociaux',
      description: 'Animation quotidienne de vos réseaux sociaux',
      icon: '📱',
      platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'],
    },
    {
      title: 'Création de Contenu',
      description: 'Production de contenus engageants et adaptés',
      icon: '🎨',
      types: ['Posts', 'Stories', 'Reels', 'Vidéos', 'Visuels'],
    },
    {
      title: 'Community Management',
      description: 'Interaction avec votre communauté',
      icon: '💬',
      features: ['Modération', 'Réponses', 'Engagement', 'Veille'],
    },
    {
      title: 'Stratégie Social Media',
      description: 'Planification et analyse de votre présence sociale',
      icon: '📊',
      elements: ['Audit', 'Planning', 'KPIs', 'Reporting'],
    },
  ]

  const benefits = [
    {
      title: 'Visibilité Accrue',
      description: 'Développez votre présence sur les réseaux sociaux',
    },
    {
      title: 'Engagement Communautaire',
      description: 'Créez une communauté active autour de votre marque',
    },
    {
      title: 'Image de Marque',
      description: 'Renforcez votre identité et votre crédibilité',
    },
    {
      title: 'Trafic Qualifié',
      description: 'Dirigez des visiteurs ciblés vers votre site',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Référencement Social
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Développez votre présence sur les réseaux sociaux et engagez votre communauté
          </p>
          <Button size="lg">
            Découvrir nos services
          </Button>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services Social Media
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
                {(service.platforms || service.types || service.features || service.elements)?.map((item) => (
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

      {/* Platforms Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Plateformes Sociales
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'YouTube'].map((platform) => (
            <div
              key={platform}
              className="aspect-square bg-gray-800/50 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-2xl font-semibold text-secondary">{platform}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Avantages du Social Media
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
          Notre Approche
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Audit & Stratégie</h3>
                <p className="text-gray-400">
                  Analyse de votre présence actuelle et définition des objectifs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Création de Contenu</h3>
                <p className="text-gray-400">
                  Production de contenus engageants et adaptés à chaque plateforme
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Publication & Animation</h3>
                <p className="text-gray-400">
                  Gestion quotidienne de vos réseaux et interaction avec votre communauté
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyse & Optimisation</h3>
                <p className="text-gray-400">
                  Suivi des performances et ajustement de la stratégie
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
            Prêt à développer votre présence sociale ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit de vos réseaux sociaux et découvrez comment nous pouvons vous aider
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Demander un audit gratuit
            </Button>
            <Button variant="outline" size="lg">
              Nos offres
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default SocialMedia
