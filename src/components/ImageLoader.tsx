import { useEffect } from 'react'
import { portfolioImages } from '../data/portfolioImages'

interface ImageLoaderProps {
  onProgress?: (progress: number) => void
  onComplete?: () => void
}

const ImageLoader = ({ onProgress, onComplete }: ImageLoaderProps) => {
  useEffect(() => {
    let mounted = true
    const totalImages = portfolioImages.length

    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    }

    const loadImages = async () => {
      let loadedCount = 0
      for (const image of portfolioImages) {
        if (!mounted) break

        try {
          await preloadImage(image.src)
          if (mounted) {
            loadedCount++
            const progress = (loadedCount / totalImages) * 100
            onProgress?.(progress)
            if (loadedCount === totalImages) {
              onComplete?.()
            }
          }
        } catch (error) {
          console.error(`Erreur lors du chargement de l'image ${image.src}:`, error)
        }
      }
    }

    loadImages()

    return () => {
      mounted = false
    }
  }, [onProgress, onComplete])

  return null
}

export default ImageLoader
