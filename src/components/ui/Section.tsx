import { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  animate?: boolean
}

const Section = ({ children, className = '', id, animate = true }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (animate && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      )
    }
  }, [animate])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

export default Section
