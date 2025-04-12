import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const Seo = () => {
  const features = [
    {
      title: 'Audit SEO',
      description: 'Analyse complète de votre site et de son positionnement actuel',
      icon: '🔍',
    },
    {
      title: 'Optimisation On-Page',
      description: 'Optimisation technique et structurelle de votre site',
      icon: '⚡',
    },
    {
      title: 'Création de Contenu',
      description: 'Rédaction de contenus optimisés pour les moteurs de recherche',
      icon: '✍️',
    },
    {
      title: 'Netlinking',
      description: 'Stratégie de liens externes pour renforcer votre autorité',
      icon: '🔗',
    },
  ]

  const benefits = [
    {
      title: 'Visibilité Accrue',
      description: 'Meilleur positionnement dans les résultats de recherche',
    },
    {
      title: 'Trafic Qualifié',
      description: 'Attirez des visiteurs réellement intéressés par vos services',
    },
    {
      title: 'ROI Mesurable',
      description: 'Suivez précisément les résultats de votre stratégie SEO',
    },
    {
      title: 'Présence Durable',
      description: 'Construisez une présence en ligne pérenne',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Référencement Naturel (SEO)
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients qualifiés
          </p>
          <Button size="lg">
            Audit SEO Gratuit
          </Button>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services SEO
        </h2>
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

      {/* Benefits Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Avantages du SEO
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

      {/* Methodology Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Méthodologie
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Audit Initial</h3>
                <p className="text-gray-400">
                  Analyse approfondie de votre site et de votre positionnement actuel
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stratégie Personnalisée</h3>
                <p className="text-gray-400">
                  Élaboration d'un plan d'action adapté à vos objectifs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Optimisation Continue</h3>
                <p className="text-gray-400">
                  Mise en œuvre des actions et ajustements réguliers
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suivi et Reporting</h3>
                <p className="text-gray-400">
                  Rapports détaillés et suivi des performances
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
            Prêt à améliorer votre visibilité en ligne ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un audit SEO gratuit et découvrir comment nous pouvons vous aider
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Demander un audit gratuit
            </Button>
            <Button variant="secondary" size="lg">
              Nos tarifs
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Seo
