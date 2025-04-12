import { useEffect, useRef } from 'react'

interface AnimatedHeroProps {
  title: string
  subtitle: string
  buttons?: React.ReactNode
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ title, subtitle, buttons }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Créer les particules lumineuses
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random()
    }))

    // Animation
    const animate = () => {
      // Créer un dégradé radial pour le fond
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)') // Bleu clair
      gradient.addColorStop(0.5, 'rgba(30, 64, 175, 0.05)') // Bleu foncé
      gradient.addColorStop(1, 'transparent')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Animer les particules
      particles.forEach(particle => {
        // Mouvement
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.opacity = 0.3 + Math.sin(Date.now() * 0.003) * 0.2

        // Rebond sur les bords
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Dessiner la particule
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {subtitle}
        </p>
        {buttons && (
          <div className="flex justify-center gap-4">
            {buttons}
          </div>
        )}
      </div>
    </div>
  )
}

export default AnimatedHero
