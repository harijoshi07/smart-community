
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
  delay?: number;
  as?: React.ElementType;
}

const Section = ({
  children,
  className,
  id,
  animate = true,
  delay = 0,
  as: Component = 'section',
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate, delay]);

  return (
    <Component
      ref={sectionRef}
      id={id}
      className={cn(
        'py-16 md:py-24',
        animate && 'animate-on-scroll',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Section;
