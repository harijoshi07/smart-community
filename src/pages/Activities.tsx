import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Calendar, Clock, MapPin, Users, Filter, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample events
const events = [
  {
    id: 1,
    title: "Introduction to DMAT Accounts Workshop",
    description: "A beginner-friendly workshop covering the basics of DMAT accounts, why they're important, and how to open one.",
    date: "2023-08-15",
    time: "10:00 AM - 12:00 PM",
    location: "Hotel Himalaya, Kathmandu",
    category: "Workshop",
    capacity: 50,
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Stock Market Analysis Seminar",
    description: "Learn how to analyze stocks, understand market indicators, and make informed investment decisions.",
    date: "2023-09-02",
    time: "2:00 PM - 5:00 PM",
    location: "Nepal Investment Bank, Durbar Marg",
    category: "Seminar",
    capacity: 100,
    registrationOpen: true,
  },
  {
    id: 3,
    title: "Financial Literacy Webinar",
    description: "An online session covering personal finance, budgeting, and investment basics for Nepali households.",
    date: "2023-09-10",
    time: "7:00 PM - 8:30 PM",
    location: "Online (Zoom)",
    category: "Webinar",
    capacity: 200,
    registrationOpen: true,
  },
  {
    id: 4,
    title: "Investor Meetup",
    description: "A networking event for investors to share experiences, strategies, and opportunities in Nepal's capital market.",
    date: "2023-09-25",
    time: "4:00 PM - 7:00 PM",
    location: "Aloft Hotel, Thamel",
    category: "Networking",
    capacity: 75,
    registrationOpen: false,
  },
  {
    id: 5,
    title: "Advanced Trading Strategies Workshop",
    description: "For experienced investors, this workshop will cover advanced trading techniques, portfolio management, and risk assessment.",
    date: "2023-10-05",
    time: "10:00 AM - 4:00 PM",
    location: "Hotel Annapurna, Kathmandu",
    category: "Workshop",
    capacity: 40,
    registrationOpen: true,
  },
];

// Filter categories based on available events
const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events based on selected category
  const filteredEvents = events.filter(
    event => selectedCategory === "All" || event.category === selectedCategory
  );

  // Sort events by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="min-h-screen pt-24">
      {/* Activities Header */}
      <Section className="pt-10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Upcoming Activities</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our workshops, seminars, and events to enhance your financial knowledge and connect with other investors.
            </p>
          </div>
        </Container>
      </Section>

      {/* Event Filters */}
      <Section className="py-8">
        <Container>
          <div className="flex items-center gap-2 bg-secondary/50 rounded-md p-2 overflow-x-auto no-scrollbar mb-8">
            <Filter className="h-5 w-5 text-muted-foreground mx-2 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-accent"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Event (first upcoming) */}
          {sortedEvents.length > 0 && (
            <div className="mb-10">
              <div className="rounded-lg overflow-hidden border border-border shadow-elevation">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-accent/30 p-8 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
                    <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-4">
                      Featured Event
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{sortedEvents[0].title}</h2>
                    <p className="text-muted-foreground mb-6">{sortedEvents[0].description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {new Date(sortedEvents[0].date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {sortedEvents[0].time}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {sortedEvents[0].location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        Capacity: {sortedEvents[0].capacity} attendees
                      </div>
                    </div>
                    <Button 
                      disabled={!sortedEvents[0].registrationOpen}
                      className="w-full sm:w-auto"
                    >
                      {sortedEvents[0].registrationOpen ? "Register Now" : "Registration Closed"}
                    </Button>
                  </div>
                  <div className="lg:col-span-2 min-h-64 bg-muted">
                    {/* Event image placeholder */}
                    <div className="flex items-center justify-center h-full bg-secondary">
                      <span className="text-muted-foreground">
                        {sortedEvents[0].category} Image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedEvents.slice(1).map((event) => (
              <div 
                key={event.id}
                className="rounded-lg border border-border bg-card overflow-hidden shadow-subtle hover:shadow-elevation transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-accent rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                    {!event.registrationOpen && (
                      <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-xs font-medium flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" /> Registration Closed
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  <Button 
                    disabled={!event.registrationOpen}
                    className="w-full sm:w-auto"
                  >
                    {event.registrationOpen ? "Register Now" : "Registration Closed"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {sortedEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No events found in this category. Please check back later or select another category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Host an Event Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Have Financial Expertise to Share?</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for financial experts to lead workshops, webinars, and seminars. 
                If you have knowledge to share, we'd love to collaborate with you on a SmartCommunity event.
              </p>
              <Link to="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-elevation">
              <div className="aspect-w-16 aspect-h-9 bg-muted">
                {/* Placeholder for host image */}
                <div className="flex items-center justify-center h-full bg-secondary">
                  <span className="text-muted-foreground">Host an Event</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Activities;
