import { Link } from 'wouter';
import { useState, useEffect } from 'react';

type QuickLinkProps = {
  icon: string;
  title: string;
  href: string;
};

type NewsItem = {
  _id: string;
  title: string;
  description: string;
  importance: string;
  link: string;
  publishDate: string;
};

const QuickLink = ({ icon, title, href }: QuickLinkProps) => (
  <Link href={href}>
    <a className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md border border-neutral-200 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-white/20">
        <i className={`${icon} text-3xl text-primary group-hover:text-white`}></i>
      </div>
      <span className="font-heading font-semibold text-center">{title}</span>
    </a>
  </Link>
);

// News marquee component
const NewsMarquee = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://piet-admin-1.onrender.com/api/news');
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to default news if API fails
        setNewsItems([
          {
            _id: '1',
            title: "Admissions Open 2025-26",
            description: "Online applications are now open for all undergraduate and postgraduate programs",
            link: "/admissions",
            importance: "high",
            publishDate: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center mb-4">
          <i className="fas fa-bullhorn text-accent mr-3 animate-pulse"></i>
          <h3 className="font-bold text-xl">Latest Updates</h3>
        </div>
        <div className="relative h-64 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {/* Main spinner */}
            <div className="relative">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/30 border-t-white"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border-2 border-white/20"></div>
            </div>

            {/* Loading text with typing effect */}
            <div className="text-center">
              <p className="text-white/90 text-sm animate-pulse">Fetching latest news...</p>
              <div className="flex justify-center space-x-1 mt-2">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>

            {/* Skeleton loading cards */}
            <div className="w-full space-y-3 mt-4">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-sm rounded-md p-4 border border-white/20 animate-pulse">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-6 bg-white/20 rounded w-16"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/20 rounded w-full"></div>
                    <div className="h-3 bg-white/20 rounded w-5/6"></div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="h-3 bg-white/20 rounded w-24"></div>
                    <div className="h-3 bg-white/20 rounded w-20"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center mb-4">
        <i className="fas fa-bullhorn text-accent mr-3"></i>
        <h3 className="font-bold text-xl">Latest Updates</h3>
      </div>
      <div className="relative h-64 overflow-hidden">
        <div className="animate-marquee-vertical space-y-4">
          {newsItems.concat(newsItems).map((item, index) => (
            <div key={`${item._id}-${index}`} className="bg-white/10 backdrop-blur-sm rounded-md p-4 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                {item.importance === 'high' && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    <i className="fas fa-exclamation-triangle mr-1"></i>
                    High
                  </span>
                )}
              </div>
              <p className="text-sm text-white/90 mb-3 line-clamp-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">
                  {new Date(item.publishDate).toLocaleDateString()}
                </span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light text-sm font-medium flex items-center transition-colors"
                >
                  Read More <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function QuickLinks() {
  const links: QuickLinkProps[] = [
    {
      icon: "fas fa-graduation-cap",
      title: "Admissions",
      href: "/admissions"
    },
    {
      icon: "fas fa-book-open",
      title: "Programs",
      href: "/programs"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Events",
      href: "/events"
    },
    {
      icon: "fas fa-briefcase",
      title: "Placements",
      href: "/placements"
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-primary-light/20 to-secondary-light/20"></div>

      <div className="container mx-auto px-4 lg:px-0 pt-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold text-primary">Quick Access</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-3"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - News marquee (bigger) */}
          <div className="lg:col-span-1">
            <NewsMarquee />
          </div>

          {/* Right side - Quick links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {links.map((link, index) => (
                <QuickLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}