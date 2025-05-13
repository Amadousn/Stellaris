import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';
import '../../styles/ia-enhancements.css';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 stl-hover-glow overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-secondary/50 hover:scale-105 border border-secondary/20',
        secondary: 'bg-gradient-to-br from-accent to-accent/80 text-white shadow-md hover:shadow-accent/30 hover:scale-105 border border-accent/20',
        glass: 'stl-glass text-white hover:bg-white/10 hover:scale-105 border border-white/10 backdrop-blur-sm',
        outline: 'bg-transparent border border-secondary/50 text-secondary hover:border-secondary hover:text-white hover:bg-secondary/10 hover:scale-105',
        minimal: 'bg-transparent text-white hover:text-secondary hover:scale-105 hover:bg-white/5'
      },
      size: {
        xs: 'px-3 py-1.5 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  to?: never;
}

interface ButtonAsLinkProps extends Omit<ButtonBaseProps, keyof LinkProps>, LinkProps {
  to: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = ({
  children,
  variant,
  size,
  className,
  disabled,
  isLoading,
  icon,
  to,
  type,
  ...props
}: ButtonProps) => {
  const allClasses = cn(buttonVariants({ variant, size }), className);

  // Spinner de chargement amélioré
  const loadingSpinner = (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  // Effet de particules pour les boutons premium
  const particleEffect = variant === 'primary' || variant === 'secondary' ? (
    <>
      <span className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <span className="absolute top-0 left-[5%] w-1 h-1 rounded-full bg-white animate-float-slow"></span>
        <span className="absolute top-[40%] left-[80%] w-1 h-1 rounded-full bg-white animate-float-slow-reverse"></span>
      </span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></span>
    </>
  ) : null;

  const buttonContent = (
    <>
      {particleEffect}
      {isLoading && loadingSpinner}
      {icon && !isLoading && (
        <span className="mr-2">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    const { type: _, ...linkProps } = props as Omit<LinkProps, 'to'>;
    return (
      <Link
        className={allClasses}
        to={to}
        {...linkProps}
      >
        {buttonContent}
      </Link>
    );
  }

  const buttonType = type || 'button';
  return (
    <button
      type={buttonType as 'button' | 'submit' | 'reset'}
      className={allClasses}
      disabled={disabled || isLoading}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
