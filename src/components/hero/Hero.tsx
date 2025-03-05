
import React from 'react';
import { cn } from '@/lib/utils';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBranding from './HeroBranding';
import Logo from '../ui/Logo';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={cn('pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative', className)}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <HeroBranding className="hidden md:block" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in mb-6">
            <Logo className="mx-auto transform scale-150 mb-8" />
          </div>

          <div className="inline-block animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent text-accent-foreground ring-1 ring-inset ring-accent-foreground/10 mb-6">
              Financial Education for Everyone
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in text-balance" style={{ animationDelay: '0.2s' }}>
            <span>LEARN, </span>
            <span className="text-primary">EARN</span>
            <span> & </span>
            <span className="text-primary">GROW</span>
            <span> together</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in text-balance" style={{ animationDelay: '0.4s' }}>
            Aware & Educate all DMAT account holders in Nepal about financial literacy, 
            investing & trading in the capital market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/about">
              <Button size="lg">
                Learn More
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="outline" size="lg">
                Read Our Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
