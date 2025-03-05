
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      'p-6 rounded-lg border border-border/40 bg-card shadow-subtle hover:shadow-elevation transition-all duration-300 hover-scale',
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-full bg-accent w-fit mb-5">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
