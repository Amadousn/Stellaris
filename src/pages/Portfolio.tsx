import React, { useState } from 'react'
import Button from '../components/ui/Button'
import '../styles/ia-enhancements.css'

type Project = {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
  client: string
  year: string
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Sites Web' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'app', name: 'Applications' },
    { id: 'design', name: 'Design' }
  ]

  const projects: Project[] = [
    {
      id: 'eco-store',
      title: 'Eco Store',
      description: 'Boutique en ligne de produits écologiques avec un design moderne et une expérience utilisateur optimisée.',
      image: '/portfolio/eco-store.jpg',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://eco-store.com',
      client: 'Green Living Ltd',
      year: '2024'
    },
    {
      id: 'tech-blog',
      title: 'Tech Blog',
      description: 'Blog technologique avec un système de gestion de contenu personnalisé et une interface intuitive.',
      image: '/portfolio/tech-blog.jpg',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
      link: 'https://tech-blog.com',
      client: 'TechCorp',
      year: '2024'
    },
    {
      id: 'fitness-app',
      title: 'Fitness App',
      description: 'Application mobile de suivi fitness avec des fonctionnalités de coaching personnalisé.',
      image: '/portfolio/fitness-app.jpg',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      link: 'https://fitness-app.com',
      client: 'FitLife Inc',
      year: '2023'
    },
    {
      id: 'restaurant-site',
      title: 'Le Gourmet',
      description: 'Site vitrine pour un restaurant gastronomique avec réservation en ligne et menu interactif.',
      image: '/portfolio/restaurant.jpg',
      category: 'web',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Stripe'],
      link: 'https://le-gourmet.fr',
      client: 'Le Gourmet Restaurant',
      year: '2023'
    },
    {
      id: 'art-gallery',
      title: 'Digital Art Gallery',
      description: 'Galerie d\'art numérique avec vente d\'œuvres NFT et expérience immersive.',
      image: '/portfolio/art-gallery.jpg',
      category: 'design',
      technologies: ['Three.js', 'Web3.js', 'React', 'Solidity'],
      link: 'https://digital-art-gallery.io',
      client: 'ArtSpace',
      year: '2023'
    },
    {
      id: 'fashion-store',
      title: 'Mode Élégante',
      description: 'Boutique en ligne de mode haut de gamme avec personnalisation produit.',
      image: '/portfolio/fashion-store.jpg',
      category: 'ecommerce',
      technologies: ['Shopify', 'React', 'Node.js', 'AWS'],
      link: 'https://mode-elegante.fr',
      client: 'Mode Élégante Paris',
      year: '2023'
    }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>

      <main className="relative z-10 py-20">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent stl-neon-text">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Découvrez nos projets les plus récents et comment nous aidons nos clients à réussir dans le monde digital
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white'
                    : 'stl-glass text-gray-400 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="stl-glass rounded-xl overflow-hidden stl-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    🖼️
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary/20 text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="text-sm text-gray-400 mb-4">
                    <div>Client: {project.client}</div>
                    <div>Année: {project.year}</div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="glass" size="sm">
                      Voir le projet
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto stl-glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 stl-neon-text">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Démarrer votre projet
              </Button>
              <Button to="/pricing" variant="glass" size="lg">
                Voir nos tarifs
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="stl-glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projets réalisés</div>
            </div>
            <div className="stl-glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Clients satisfaits</div>
            </div>
            <div className="stl-glass p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-white mb-2">12</div>
              <div className="text-gray-400">Prix remportés</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Portfolio
