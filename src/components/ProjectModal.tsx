import React, { useEffect } from 'react'
import Button from './ui/Button'
import '../styles/ia-enhancements.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay avec effet de flou */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl stl-glass rounded-xl overflow-hidden stl-fade-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 text-white hover:bg-gray-800 transition-colors duration-300 z-10"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-full">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold stl-neon-text">
              {project.title}
            </h2>

            <p className="text-gray-300">
              {project.description}
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-secondary">
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => window.open(project.link, '_blank')}
                size="lg"
                className="w-full"
              >
                Voir le projet en ligne
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
