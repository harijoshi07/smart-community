
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Button from './Button';
import { cn } from '@/lib/utils';

interface ButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  external?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className,
  fullWidth,
  icon,
  external,
  ...props
}) => {
  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm': variant === 'primary',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
      'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground': variant === 'outline',
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
      'text-primary underline-offset-4 hover:underline': variant === 'link',
      'text-xs px-3 py-1.5': size === 'sm',
      'text-sm px-4 py-2': size === 'md',
      'text-base px-6 py-3': size === 'lg',
      'w-full': fullWidth
    },
    className
  );

  if (external) {
    return (
      <a 
        href={to.toString()} 
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={buttonClasses}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};

export default ButtonLink;
