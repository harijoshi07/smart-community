
import React from 'react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-foreground font-semibold text-xl inline-block mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Smart
              </span>
              Community
            </Link>
            <p className="text-muted-foreground max-w-md">
              Educating and empowering DMAT account holders in Nepal about financial literacy, 
              investing & trading in the capital market.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            </div>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/activities">Activities</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Kathmandu, Nepal</li>
              <li>info@smartcommunity.np</li>
              <li>+977 01-1234567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SmartCommunity. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="/privacy" small>Privacy Policy</FooterLink>
              <FooterLink href="/terms" small>Terms of Service</FooterLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-secondary-foreground/5 hover:bg-secondary-foreground/10 
      transition-colors duration-200 text-foreground/80 hover:text-foreground"
    aria-label={label}
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}

const FooterLink = ({ href, children, small = false }: FooterLinkProps) => (
  <li>
    <Link 
      to={href}
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors",
        small ? "text-xs" : "text-sm"
      )}
    >
      {children}
    </Link>
  </li>
);

export default Footer;
