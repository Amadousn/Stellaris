import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  to?: string
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300'
  
  const variants = {
    primary: 'bg-secondary hover:bg-secondary/90 text-white',
    secondary: 'bg-accent hover:bg-accent/90 text-white',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
