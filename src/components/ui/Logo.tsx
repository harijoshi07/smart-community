
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

const Logo = ({ className, variant = 'default' }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle 
          cx="18" 
          cy="18" 
          r="16" 
          fill="url(#paint0_linear)" 
          stroke={variant === 'white' ? "white" : "#3B82F6"} 
          strokeWidth="2" 
        />
        <path
          d="M21.5 10.5C21.5 10.5 24.5 13.5 24.5 18C24.5 22.5 21.5 25.5 21.5 25.5M14.5 10.5C14.5 10.5 11.5 13.5 11.5 18C11.5 22.5 14.5 25.5 14.5 25.5M11 15H25M11 21H25"
          stroke={variant === 'white' ? "white" : "#FFFFFF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="8"
            y1="8"
            x2="28"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="font-medium text-lg">
        <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80", variant === 'white' && "text-white from-white to-white")}>
          Smart
        </span>
        <span className={variant === 'white' ? "text-white" : "text-foreground"}>
          Community
        </span>
      </div>
    </div>
  );
};

export default Logo;
