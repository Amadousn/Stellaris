import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const PaidAds = () => {
  const services = [
    {
      title: 'Google Ads',
      description: 'Campagnes publicitaires ciblées sur le réseau Google',
      icon: '🎯',
      features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads'],
    },
    {
      title: 'Meta Ads',
      description: 'Publicités sur Facebook et Instagram',
      icon: '📱',
      features: ['Feed Ads', 'Stories Ads', 'Reels Ads', 'Messenger Ads'],
    },
    {
      title: 'LinkedIn Ads',
      description: 'Campagnes B2B ciblées',
      icon: '💼',
      features: ['Sponsored Content', 'Message Ads', 'Dynamic Ads'],
    },
    {
      title: 'Remarketing',
      description: 'Reciblage des visiteurs intéressés',
      icon: '🔄',
      features: ['Display Remarketing', 'Dynamic Remarketing', 'Customer Lists'],
    },
  ]

  const benefits = [
    {
      title: 'Résultats Rapides',
      description: 'Visibilité immédiate et premiers résultats dès le lancement',
    },
    {
      title: 'Ciblage Précis',
      description: 'Atteignez exactement votre audience cible',
    },
    {
      title: 'Budget Contrôlé',
      description: 'Maîtrisez vos coûts avec un budget défini',
    },
    {
      title: 'ROI Mesurable',
      description: 'Suivez précisément le retour sur investissement',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary to-primary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Référencement Sponsorisé
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Des campagnes publicitaires performantes pour atteindre rapidement vos objectifs
          </p>
          <Button size="lg">
            Audit Gratuit de vos Campagnes
          </Button>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Solutions Publicitaires
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
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <span className="text-secondary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Avantages du Référencement Sponsorisé
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
                <h3 className="text-xl font-semibold mb-2">Analyse & Stratégie</h3>
                <p className="text-gray-400">
                  Étude de votre marché et définition des objectifs publicitaires
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Configuration</h3>
                <p className="text-gray-400">
                  Mise en place des campagnes et des systèmes de tracking
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Optimisation</h3>
                <p className="text-gray-400">
                  Suivi quotidien et optimisation continue des performances
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reporting</h3>
                <p className="text-gray-400">
                  Rapports détaillés et recommandations d'amélioration
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
            Prêt à lancer vos campagnes publicitaires ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit de vos campagnes existantes ou pour démarrer de nouvelles campagnes
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

export default PaidAds
