
import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample categories
const categories = [
  "All",
  "Investing",
  "Market Analysis",
  "Financial Tips",
  "DMAT Accounts",
  "Stock Market",
];

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with DMAT Accounts in Nepal",
    excerpt: "A comprehensive guide to opening and managing your DMAT account in Nepal.",
    category: "DMAT Accounts",
    date: "May 15, 2023",
    author: "Aarav Sharma",
  },
  {
    id: 2,
    title: "Understanding Market Trends in Nepal's Stock Exchange",
    excerpt: "An analysis of current market trends and predictions for the coming months.",
    category: "Market Analysis",
    date: "June 2, 2023",
    author: "Bijay Poudel",
  },
  {
    id: 3,
    title: "Top 5 Investment Strategies for Beginners",
    excerpt: "Simple but effective investment strategies that anyone can implement.",
    category: "Investing",
    date: "June 10, 2023",
    author: "Nisha Thapa",
  },
  {
    id: 4,
    title: "How to Read Financial Statements",
    excerpt: "Learn to interpret company financial statements for better investment decisions.",
    category: "Financial Tips",
    date: "June 18, 2023",
    author: "Sarita Gurung",
  },
  {
    id: 5,
    title: "Risk Management in Stock Market Investing",
    excerpt: "Techniques to manage and mitigate risks when investing in stocks.",
    category: "Stock Market",
    date: "July 3, 2023",
    author: "Aarav Sharma",
  },
  {
    id: 6,
    title: "Fundamental vs Technical Analysis: Which is Better?",
    excerpt: "A comparison of the two major stock analysis methodologies.",
    category: "Market Analysis",
    date: "July 12, 2023",
    author: "Bijay Poudel",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Blog Header */}
      <Section className="pt-10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">SmartCommunity Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover insights, guides, and analysis on financial literacy and investing in Nepal.
            </p>
          </div>
        </Container>
      </Section>

      {/* Search and Filter */}
      <Section className="py-8">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background text-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center bg-secondary/50 rounded-md p-1">
              <Filter className="h-5 w-5 text-muted-foreground mx-2" />
              <div className="flex overflow-x-auto no-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
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
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg border border-border bg-card overflow-hidden shadow-subtle hover:shadow-elevation transition-all duration-300 hover-scale"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-muted">
                    {/* Placeholder for blog images */}
                    <div className="flex items-center justify-center h-full bg-secondary">
                      <span className="text-muted-foreground">Blog Image {post.id}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {post.author}</span>
                      <Link to={`/blog/${post.id}`} className="text-primary font-medium inline-flex items-center hover:underline">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No articles found. Try another search or category.</p>
              </div>
            )}
          </div>

          {/* Pagination - Placeholder for future implementation */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-10">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-border bg-background text-sm font-medium text-foreground"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-border bg-primary text-sm font-medium text-primary-foreground"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-border bg-background text-sm font-medium text-foreground hover:bg-secondary"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-border bg-background text-sm font-medium text-foreground"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Articles</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive financial insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-input bg-background text-foreground"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Blog;
