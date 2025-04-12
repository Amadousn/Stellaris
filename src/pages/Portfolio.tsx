import { useState, useEffect } from 'react'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import PortfolioImage from '../components/PortfolioImage'
import ImageLoader from '../components/ImageLoader'
import LoadingScreen from '../components/LoadingScreen'
import '../styles/animations.css'

// Types pour les projets
interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
  client: string
  year: number
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Réinitialiser le scroll quand la catégorie change
    window.scrollTo(0, 0)
  }, [activeCategory])

  // Données des projets avec les chemins d'images mis à jour
  const projects: Project[] = [
    {
      id: 1,
      title: 'Refonte Identité Visuelle',
      description: 'Création d\'une nouvelle identité de marque moderne et impactante',
      category: 'branding',
      image: '/portfolio/branding/brand1.jpg',
      client: 'TechCorp',
      year: 2024,
    },
    {
      id: 2,
      title: 'Campagne Marketing Digital',
      description: 'Série de visuels pour les réseaux sociaux',
      category: 'digital',
      image: '/portfolio/digital/digital1.jpg',
      client: 'EcoStart',
      year: 2024,
    },
    {
      id: 3,
      title: 'Packaging Produit',
      description: 'Design d\'emballage pour une gamme de produits bio',
      category: 'print',
      image: '/portfolio/print/print1.jpg',
      client: 'NatureBio',
      year: 2023,
    },
    {
      id: 4,
      title: 'Logo et Charte Graphique',
      description: 'Développement complet de l\'identité visuelle',
      category: 'branding',
      image: '/portfolio/branding/brand2.jpg',
      client: 'SportFit',
      year: 2024,
    },
    {
      id: 5,
      title: 'Posts Instagram',
      description: 'Création de templates pour les réseaux sociaux',
      category: 'digital',
      image: '/portfolio/digital/digital2.jpg',
      client: 'BeautyLab',
      year: 2024,
    },
    {
      id: 6,
      title: 'Brochure Commerciale',
      description: 'Design et mise en page d\'une brochure de 24 pages',
      category: 'print',
      image: '/portfolio/print/print2.jpg',
      client: 'ConsultPro',
      year: 2023,
    },
  ]

  const categories = [
    { id: 'all', name: 'Tous les Projets' },
    { id: 'branding', name: 'Identité de Marque' },
    { id: 'digital', name: 'Marketing Digital' },
    { id: 'print', name: 'Print & Packaging' },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  if (isLoading) {
    return (
      <>
        <LoadingScreen progress={loadingProgress} />
        <ImageLoader
          onProgress={setLoadingProgress}
          onComplete={() => setIsLoading(false)}
        />
      </>
    )
  }

  return (
    <div className="pt-24">
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Notre Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Découvrez nos réalisations en design graphique et identité visuelle
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-secondary text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de projets avec animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              }}
            >
              {/* Image avec gestion du chargement */}
              <PortfolioImage
                src={project.image}
                alt={project.title}
                className="aspect-[4/3]"
              />

              {/* Overlay avec les informations */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Vous avez un projet en tête ?
          </h2>
          <Button size="lg" to="/devis">
            Demander un devis
          </Button>
        </div>
      </Section>
    </div>
  )
}

export default Portfolio
