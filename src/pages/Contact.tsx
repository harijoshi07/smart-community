
import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
          variant: "default",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Contact Header */}
      <Section className="pt-10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions or want to join our community? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ContactCard 
              icon={<Mail className="h-6 w-6 text-primary" />}
              title="Email Us"
              details={["info@smartcommunity.np", "support@smartcommunity.np"]}
              action="Email Now"
              href="mailto:info@smartcommunity.np"
            />
            <ContactCard 
              icon={<Phone className="h-6 w-6 text-primary" />}
              title="Call Us"
              details={["+977 01-1234567", "+977 9801234567"]}
              action="Call Now"
              href="tel:+97701234567"
            />
            <ContactCard 
              icon={<MapPin className="h-6 w-6 text-primary" />}
              title="Visit Us"
              details={["Durbar Marg", "Kathmandu, Nepal"]}
              action="Get Directions"
              href="https://maps.google.com"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-primary/10 text-center">
                  <div className="inline-flex items-center justify-center p-2 bg-primary/20 rounded-full mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-4">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)} 
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.subject ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground`}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.message ? 'border-destructive' : 'border-input'
                      } bg-background text-foreground`}
                      placeholder="Please provide details about your inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <FAQ 
                  question="How can I join SmartCommunity?"
                  answer="You can join our community by attending one of our events, subscribing to our newsletter, or reaching out to us through this contact form. Membership is free and open to anyone interested in financial literacy."
                />
                <FAQ 
                  question="Are your events free to attend?"
                  answer="Most of our introductory workshops and webinars are free. Some specialized workshops and seminars may have a small fee to cover costs. All event details, including any fees, are clearly mentioned on the event page."
                />
                <FAQ 
                  question="I'm completely new to investing. Is SmartCommunity suitable for me?"
                  answer="Absolutely! Our community welcomes members at all levels of financial knowledge. We have resources specifically designed for beginners, and our events often include introductory sessions."
                />
                <FAQ 
                  question="Can I volunteer or contribute to SmartCommunity?"
                  answer="We always welcome volunteers and contributors who are passionate about financial literacy. Whether you have expertise to share or simply want to help organize events, please contact us through this form."
                />
                <FAQ 
                  question="Do you offer one-on-one financial advising?"
                  answer="SmartCommunity is focused on education rather than individual financial advice. However, we can connect you with certified financial advisors in our network if you need personalized guidance."
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Community Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Online Community</h2>
            <p className="text-muted-foreground mb-8">
              Connect with us on social media to stay updated on events, read financial tips, and interact with our community members.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <SocialButton icon="Facebook" href="https://facebook.com" />
              <SocialButton icon="Twitter" href="https://twitter.com" />
              <SocialButton icon="Instagram" href="https://instagram.com" />
              <SocialButton icon="LinkedIn" href="https://linkedin.com" />
              <SocialButton icon="YouTube" href="https://youtube.com" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  action: string;
  href: string;
}

const ContactCard = ({ icon, title, details, action, href }: ContactCardProps) => (
  <div className="bg-card border border-border/40 rounded-lg p-6 text-center shadow-subtle hover:shadow-elevation transition-all duration-300 hover-scale">
    <div className="flex justify-center mb-4">
      <div className="p-3 rounded-full bg-accent">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="space-y-1 mb-4">
      {details.map((detail, i) => (
        <p key={i} className="text-muted-foreground">{detail}</p>
      ))}
    </div>
    <a 
      href={href} 
      className="text-primary font-medium hover:underline inline-flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {action}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => (
  <div className="border-b border-border/40 pb-4">
    <h3 className="text-lg font-medium mb-2 flex items-start">
      <span className="bg-accent p-1 rounded text-accent-foreground mr-2">Q</span>
      {question}
    </h3>
    <p className="text-muted-foreground pl-8">{answer}</p>
  </div>
);

interface SocialButtonProps {
  icon: string;
  href: string;
}

const SocialButton = ({ icon, href }: SocialButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-background border border-border shadow-subtle rounded-md hover:bg-accent transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Contact;
