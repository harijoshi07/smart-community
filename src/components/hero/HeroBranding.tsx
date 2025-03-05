
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroBrandingProps {
  className?: string;
}

const HeroBranding = ({ className }: HeroBrandingProps) => {
  return (
    <div className={cn("absolute top-20 right-10 w-64 h-64 -z-5 opacity-30 md:opacity-60 animate-float", className)}>
      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="128" cy="128" r="126" stroke="#3B82F6" strokeWidth="4" strokeDasharray="12 8" />
        <circle cx="128" cy="128" r="96" fill="url(#hero_paint0_linear)" fillOpacity="0.15" />
        <path
          d="M96 84C96 79.5817 99.5817 76 104 76H152C156.418 76 160 79.5817 160 84V112C160 116.418 156.418 120 152 120H104C99.5817 120 96 116.418 96 112V84Z"
          fill="#3B82F6"
          fillOpacity="0.3"
        />
        <path
          d="M96 144C96 139.582 99.5817 136 104 136H152C156.418 136 160 139.582 160 144V172C160 176.418 156.418 180 152 180H104C99.5817 180 96 176.418 96 172V144Z"
          fill="#3B82F6"
          fillOpacity="0.3"
        />
        <path
          d="M60 116C60 111.582 63.5817 108 68 108H88C92.4183 108 96 111.582 96 116V140C96 144.418 92.4183 148 88 148H68C63.5817 148 60 144.418 60 140V116Z"
          fill="#3B82F6"
          fillOpacity="0.3"
        />
        <path
          d="M168 108C168 103.582 171.582 100 176 100H188C192.418 100 196 103.582 196 108V148C196 152.418 192.418 156 188 156H176C171.582 156 168 152.418 168 148V108Z"
          fill="#3B82F6"
          fillOpacity="0.3"
        />
        <defs>
          <linearGradient
            id="hero_paint0_linear"
            x1="64"
            y1="64"
            x2="196"
            y2="196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBranding;
