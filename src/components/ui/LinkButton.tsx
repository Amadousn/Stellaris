import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ia-enhancements.css'

interface LinkButtonProps {
  to: string
  variant?: 'primary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 stl-hover-glow'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-secondary/50 hover:scale-105',
    outline: 'border-2 border-secondary text-white hover:bg-secondary/10 hover:scale-105',
    glass: 'stl-glass text-white hover:bg-white/10 hover:scale-105'
  }

  return (
    <Link
      to={to}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      <span className="absolute inset-0 rounded-lg overflow-hidden">
        <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
      </span>
    </Link>
  )
}

export default LinkButton
