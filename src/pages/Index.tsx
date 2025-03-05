
import React from 'react';
import Hero from '@/components/hero/Hero';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import FeatureCard from '@/components/features/FeatureCard';
import { BookOpen, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Features Section */}
      <Section id="features">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community provides a range of resources to help you build financial literacy
              and make informed investment decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6 text-primary" />}
              title="Educational Resources"
              description="Access comprehensive guides, articles, and tutorials on financial literacy."
            />
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
              title="Market Insights"
              description="Stay updated with the latest trends and analysis of Nepal's capital market."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Community Support"
              description="Join a growing community of investors sharing knowledge and experiences."
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-primary" />}
              title="Regular Workshops"
              description="Participate in our workshops and webinars led by industry experts."
            />
          </div>
        </Container>
      </Section>
      
      {/* About Section Preview */}
      <Section className="bg-accent/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that financial literacy is a fundamental right. Our mission is to empower 
                every Nepali investor with the knowledge and tools they need to make informed financial decisions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through education, community building, and practical resources, we aim to transform 
                the financial landscape of Nepal, one investor at a time.
              </p>
              <Link to="/about">
                <Button>
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-elevation">
              <div className="aspect-w-16 aspect-h-9 bg-muted animate-pulse">
                {/* Placeholder for an image - in production, replace with actual image */}
                <div className="flex items-center justify-center h-full bg-secondary">
                  <span className="text-muted-foreground">Community Image</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Blog Section Preview */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles and guides on financial literacy and investing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden shadow-subtle hover:shadow-elevation transition-all duration-300 hover-scale">
                <div className="aspect-w-16 aspect-h-9 bg-muted">
                  {/* Placeholder for blog images */}
                  <div className="flex items-center justify-center h-full bg-secondary">
                    <span className="text-muted-foreground">Blog Image {i}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {i === 1 ? 'Investing' : i === 2 ? 'Market Analysis' : 'Financial Tips'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {`${new Date().toLocaleDateString()}`}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {i === 1 
                      ? 'Getting Started with DMAT Accounts' 
                      : i === 2 
                        ? 'Understanding Market Trends in Nepal' 
                        : 'Top 5 Investment Strategies for Beginners'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {i === 1 
                      ? 'A comprehensive guide to opening and managing your DMAT account in Nepal.' 
                      : i === 2 
                        ? 'An analysis of current market trends and predictions for the coming months.' 
                        : 'Simple but effective investment strategies that anyone can implement.'}
                  </p>
                  <Link to="/blog" className="text-primary font-medium inline-flex items-center hover:underline">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Financial Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community today and take the first step towards financial literacy and successful investing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">
                  Join Our Community
                </Button>
              </Link>
              <Link to="/activities">
                <Button variant="outline" size="lg">
                  Explore Our Activities
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Index;
