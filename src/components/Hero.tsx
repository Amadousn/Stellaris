import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import StarryBackground from './StarryBackground'
import '../styles/ia-enhancements.css'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animation du titre lettre par lettre
    if (titleRef.current) {
      const text = titleRef.current.textContent || ''
      titleRef.current.textContent = ''
      titleRef.current.style.opacity = '1'
      
      gsap.to(titleRef.current, {
        duration: 1,
        text: {
          value: text,
          delimiter: ''
        },
        ease: 'power2.out'
      })
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
      }, '+=0.5')
    }

    if (buttonsRef.current) {
      tl.from(buttonsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }, '-=0.5')
    }

    // Observer pour les effets de scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const fadeElements = document.querySelectorAll('.stl-fade-in')
    fadeElements.forEach((el) => observer.observe(el))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden stl-animated-bg">
      <StarryBackground />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40 backdrop-blur-sm z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="stl-glass rounded-2xl p-8 md:p-12 backdrop-blur-lg">
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 stl-neon-text opacity-0"
          >
            Propulsez Votre Présence Digitale
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto stl-fade-in"
          >
            Solutions web innovantes et marketing digital sur mesure pour votre succès
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/services"
              className="stl-hover-glow px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Découvrir nos services
            </Link>
            <Link
              to="/devis"
              className="stl-hover-glow px-8 py-4 border-2 border-blue-400 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:border-purple-400"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
