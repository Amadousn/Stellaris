import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    if (heroRef.current) {
      tl.fromTo(
        heroRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        }
      )
    }
  }, [])

  const services = [
    {
      title: 'Création Site Internet',
      description: 'Sites web modernes et responsifs adaptés à vos besoins',
      path: '/creation-site-internet',
      icon: '🌐',
    },
    {
      title: 'Référencement Naturel',
      description: 'Optimisation SEO pour une meilleure visibilité en ligne',
      path: '/referencement-naturel',
      icon: '📈',
    },
    {
      title: 'Création Graphique',
      description: 'Design graphique professionnel pour votre identité visuelle',
      path: '/creation-graphique',
      icon: '🎨',
    },
    {
      title: 'Référencement Sponsorisé',
      description: 'Campagnes publicitaires ciblées et efficaces',
      path: '/referencement-sponsorise',
      icon: '🎯',
    },
    {
      title: 'Référencement Social',
      description: 'Gestion et optimisation de vos réseaux sociaux',
      path: '/referencement-social',
      icon: '📱',
    },
    {
      title: 'Référencement Vidéo',
      description: 'Création et optimisation de contenu vidéo',
      path: '/referencement-video',
      icon: '🎥',
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary to-primary/50"
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Solutions Marketing Digital Innovantes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Développez votre présence en ligne avec nos services de marketing digital sur mesure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Découvrir nos services
            </Button>
            <Button variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section id="services">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-secondary/20 to-accent/20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à développer votre présence en ligne ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos projets et objectifs
          </p>
          <Button size="lg">
            Demander un devis gratuit
          </Button>
        </div>
      </Section>
    </div>
  )
}

export default Home
