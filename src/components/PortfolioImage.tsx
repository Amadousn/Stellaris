import { useState } from 'react'

interface PortfolioImageProps {
  src: string
  alt: string
  className?: string
}

const PortfolioImage = ({ src, alt, className = '' }: PortfolioImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Image de fond avec effet de flou pendant le chargement */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 animate-pulse" />
      )}
      
      {/* Fallback en cas d'erreur */}
      {error ? (
        <div className="aspect-[4/3] bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center text-4xl">
          🎨
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}

export default PortfolioImage
