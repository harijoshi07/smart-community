
import React from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { Briefcase, Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <Section className="pt-10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">About SmartCommunity</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to transform financial literacy in Nepal through education, 
              community, and accessible resources.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-lg bg-accent/20 border border-border">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To aware and educate all DMAT account holders in Nepal about financial literacy, 
                investing & trading in the capital market. We strive to make complex financial 
                concepts accessible to everyone, regardless of their background.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-primary/5 border border-border">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                A financially literate Nepal where every citizen is equipped with the knowledge 
                and tools to make informed investment decisions, leading to greater financial 
                security and economic growth for all.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-secondary/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at SmartCommunity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Briefcase className="h-8 w-8 text-primary" />}
              title="Integrity"
              description="We provide honest, transparent financial education without conflicts of interest."
            />
            <ValueCard 
              icon={<Award className="h-8 w-8 text-primary" />}
              title="Excellence"
              description="We strive for the highest quality in all our educational resources and activities."
            />
            <ValueCard 
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Community"
              description="We foster a supportive environment where knowledge is freely shared."
            />
            <ValueCard 
              icon={<Target className="h-8 w-8 text-primary" />}
              title="Empowerment"
              description="We equip individuals with the tools to take control of their financial future."
            />
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals behind SmartCommunity who are dedicated to improving financial literacy in Nepal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Aarav Sharma', role: 'Founder & Financial Educator' },
              { name: 'Nisha Thapa', role: 'Investment Specialist' },
              { name: 'Bijay Poudel', role: 'Market Analyst' },
              { name: 'Sarita Gurung', role: 'Community Manager' }
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full bg-muted mb-4 overflow-hidden">
                  {/* Placeholder for team member photos */}
                  <div className="flex items-center justify-center h-full bg-secondary">
                    <span className="text-muted-foreground text-sm">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Journey Section */}
      <Section className="bg-accent/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
              <p className="text-muted-foreground mb-4">
                SmartCommunity was founded in 2021 with a simple goal: to make financial literacy accessible to everyone in Nepal.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as informal meetups among friends quickly grew into a structured platform 
                for financial education. Today, we reach thousands of Nepalis through our workshops, 
                online resources, and community events.
              </p>
              <p className="text-muted-foreground">
                Our journey continues as we expand our reach and develop new ways to educate and 
                empower DMAT account holders across Nepal.
              </p>
            </div>
            <div className="space-y-4">
              <Milestone year="2021" title="Foundation" description="SmartCommunity was established with first meetup of 12 members." />
              <Milestone year="2022" title="First Workshop" description="Conducted our first public workshop on DMAT accounts with 50+ attendees." />
              <Milestone year="2022" title="Online Platform" description="Launched our website and online resources to reach a wider audience." />
              <Milestone year="2023" title="Community Growth" description="Expanded to 1000+ active community members across Nepal." />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-background rounded-lg p-6 shadow-subtle text-center">
    <div className="inline-flex items-center justify-center rounded-full p-3 bg-accent mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Milestone = ({ year, title, description }: { year: string, title: string, description: string }) => (
  <div className="flex space-x-4 p-4 rounded-lg bg-background shadow-subtle">
    <div className="font-bold text-lg text-primary min-w-16">{year}</div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default About;
