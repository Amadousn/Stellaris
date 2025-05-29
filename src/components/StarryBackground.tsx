import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  pulse: number;
  color: string;
  tail?: { x: number; y: number; length: number; };
}

// Fonction pour détecter si l'appareil est mobile
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
}

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  
  // Vérifier si l'appareil est mobile au chargement du composant
  useEffect(() => {
    setIsMobile(isMobileDevice())
    
    // Mettre à jour lors du redimensionnement de la fenêtre
    const handleResize = () => {
      setIsMobile(isMobileDevice())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Star properties - réduire le nombre d'éléments sur mobile
    const stars: Star[] = []
    const numStars = isMobile ? 100 : 300
    const shootingStars: Star[] = []
    const numShootingStars = isMobile ? 1 : 5
    const nebulae: {x: number; y: number; radius: number; color: string; opacity: number}[] = []
    const numNebulae = isMobile ? 1 : 3
    
    // Colors
    const starColors = [
      '#FFFFFF', // White
      '#E6E6FA', // Lavender
      '#ADD8E6', // Light Blue
      '#87CEEB', // Sky Blue
      '#B0E0E6', // Powder Blue
      '#F0F8FF', // Alice Blue
    ]

    const nebulaColors = [
      'rgba(138, 43, 226, 0.05)', // Blue Violet
      'rgba(75, 0, 130, 0.05)',  // Indigo
      'rgba(65, 105, 225, 0.05)', // Royal Blue
      'rgba(106, 90, 205, 0.05)', // Slate Blue
      'rgba(147, 112, 219, 0.05)', // Medium Purple
    ]

    // Initialize stars - réduire la taille et l'effet de pulsation sur mobile
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isMobile ? (0.2 + Math.random() * 1) : (0.2 + Math.random() * 2),
        speed: isMobile ? (0.02 + Math.random() * 0.1) : (0.05 + Math.random() * 0.2),
        opacity: 0.2 + Math.random() * 0.8,
        pulse: isMobile ? 0.001 : (0.005 + Math.random() * 0.01),
        color: starColors[Math.floor(Math.random() * starColors.length)]
      })
    }
    
    // Initialize shooting stars
    for (let i = 0; i < numShootingStars; i++) {
      createShootingStar(shootingStars, canvas)
    }
    
    // Initialize nebulae
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 200,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
        opacity: 0.1 + Math.random() * 0.2
      })
    }
    
    function createShootingStar(shootingStars: Star[], canvas: HTMLCanvasElement) {
      const speed = 5 + Math.random() * 15
      const size = 1 + Math.random() * 2
      
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        speed: speed,
        opacity: 0.8 + Math.random() * 0.2,
        pulse: 0,
        color: '#FFFFFF',
        tail: {
          x: 0,
          y: 0,
          length: 50 + Math.random() * 100
        }
      })
    }

    // Animation
    let animationFrameId: number
    let time = 0
    
    const animate = () => {
      // Réduire la vitesse d'animation sur mobile
      time += isMobile ? 0.002 : 0.005
      // Utiliser un fond différent selon le thème
      const bgColor = theme === 'dark' 
        ? 'rgba(11, 16, 38, 0.2)' // Fond bleu foncé pour le mode sombre (nuit)
        : 'rgba(0, 0, 0, 0.2)' // Fond noir pour le mode clair (jour)
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw nebulae
      nebulae.forEach(nebula => {
        const grd = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        )
        grd.addColorStop(0, nebula.color.replace('0.05', '0.2'))
        // Utiliser une couleur de fond différente selon le thème
        const endColor = theme === 'dark' 
          ? 'rgba(11, 16, 38, 0)' // Transparent vers bleu foncé pour le mode sombre (nuit)
          : 'rgba(0, 0, 0, 0)' // Transparent vers noir pour le mode clair (jour)
        grd.addColorStop(1, endColor)
        
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw stars
      stars.forEach(star => {
        // Move stars
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
        
        // Pulsating effect
        star.opacity += Math.sin(time * 5) * star.pulse
        star.opacity = Math.max(0.2, Math.min(1, star.opacity))

        // Draw star
        ctx.fillStyle = star.color.replace('1)', star.opacity + ')')
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add glow effect to larger stars - désactiver l'effet de flou sur mobile
        if (star.size > 1.5 && !isMobile) {
          ctx.shadowBlur = 15
          ctx.shadowColor = star.color
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })
      
      // Update and draw shooting stars
      for (let i = 0; i < shootingStars.length; i++) {
        const star = shootingStars[i]
        
        // Move shooting star avec un angle fixe de 45 degrés (Math.PI / 4)
        star.x += Math.cos(Math.PI / 4) * star.speed
        star.y += Math.sin(Math.PI / 4) * star.speed
        
        // Check if out of bounds
        if (star.x > canvas.width || star.y > canvas.height) {
          // Reset shooting star
          shootingStars.splice(i, 1)
          createShootingStar(shootingStars, canvas)
          continue
        }
        
        // Draw shooting star
        if (star.tail) {
          // Draw tail avec le même angle fixe de 45 degrés
          const tailX = star.x - Math.cos(Math.PI / 4) * star.tail.length
          const tailY = star.y - Math.sin(Math.PI / 4) * star.tail.length
          
          const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY)
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = star.size
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()
        }
        
        // Draw star
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

export default StarryBackground
