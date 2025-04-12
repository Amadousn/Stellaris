import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import '../../styles/ia-enhancements.css'

type ButtonBaseProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
}

type ButtonAsButtonProps = ButtonBaseProps & {
  to?: never
  type?: 'button' | 'submit' | 'reset'
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>

type ButtonAsLinkProps = ButtonBaseProps & {
  to: string
  type?: never
} & Omit<LinkProps, keyof ButtonBaseProps | 'to'>

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  to,
  type = 'button',
  disabled = false,
  isLoading = false,
  icon,
  ...props
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 stl-hover-glow'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-secondary/50 hover:scale-105',
    secondary: 'bg-accent hover:bg-accent/90 text-white',
    glass: 'stl-glass text-white hover:bg-white/10 hover:scale-105'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const loadingSpinner = (
    <svg
      className="animate-spin h-5 w-5 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`

  const buttonContent = (
    <>
      {isLoading && loadingSpinner}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
      <span className="absolute inset-0 rounded-lg overflow-hidden">
        <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
      </span>
    </>
  )

  if (to) {
    const linkProps = props as Omit<LinkProps, keyof ButtonBaseProps | 'to'>
    return (
      <Link
        to={to}
        className={allClasses}
        onClick={onClick}
        {...linkProps}
      >
        {buttonContent}
      </Link>
    )
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      {buttonContent}
    </button>
  )
}

export default Button
