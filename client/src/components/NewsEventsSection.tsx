import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { NewsItem, NewsItemProps } from '@/components/NewsItem';

type EventItemProps = {
  image: string;
  date: string;
  time: string;
  title: string;
  location: string;
  link: string;
};

const EventItem = ({ image, date, time, title, location, link }: EventItemProps) => (
  <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-sm font-medium text-secondary block">{date}</span>
          <span className="text-xs text-neutral-500">{time}</span>
        </div>
        <div className="bg-accent text-primary font-bold text-xs px-2 py-1 rounded">Event</div>
      </div>
      <h3 className="font-heading font-bold text-xl mb-2 text-primary">{title}</h3>
      <p className="text-neutral-600 mb-4 flex items-center">
        <i className="fas fa-map-marker-alt mr-2 text-neutral-500"></i> {location}
      </p>
      <Link href={link}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center">
          Register Now <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </Link>
    </div>
  </div>
);

type NoticeItemProps = {
  date: string;
  title: string;
  description: string;
  link: string;
  isImportant?: boolean;
};

const NoticeItem = ({ date, title, description, link, isImportant = false }: NoticeItemProps) => (
  <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm text-neutral-500">{date}</span>
      {isImportant && (
        <span className="bg-secondary text-white text-xs px-2 py-1 rounded">Important</span>
      )}
    </div>
    <h3 className="font-heading font-bold text-xl mb-2 text-primary">{title}</h3>
    <p className="text-neutral-600 mb-4">{description}</p>
    <Link href={link}>
      <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center">
        View Details <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </Link>
  </div>
);

// News Marquee Component
const NewsMarquee = () => {
  const headlines = [
    "Admissions open for 2025-26 academic year - Apply Now!",
    "PIET Ranks in Top 100 Engineering Colleges according to NIRF",
    "Campus Recruitment Drive by TCS scheduled for May 22, 2025",
    "New Research Grant of ₹1.5 crore awarded for sustainable energy solutions",
    "National Conference on IoT & AI on June 10, 2025"
  ];

  return (
    <div className="bg-primary py-2 text-white overflow-hidden mb-8 shadow-md">
      <div className="flex items-center">
        <div className="bg-secondary text-white font-bold px-4 py-1 flex items-center mr-4 whitespace-nowrap">
          <i className="fas fa-bullhorn mr-2"></i> LATEST NEWS
        </div>
        <div className="marquee-container overflow-hidden relative flex-1">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {headlines.map((headline, index) => (
              <div key={index} className="flex items-center mr-16">
                <span className="bg-accent rounded-full w-2 h-2 mr-2"></span>
                <span>{headline}</span>
              </div>
            ))}
            {headlines.map((headline, index) => (
              <div key={`repeat-${index}`} className="flex items-center mr-16">
                <span className="bg-accent rounded-full w-2 h-2 mr-2"></span>
                <span>{headline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NewsEventsSection() {
  const [activeTab, setActiveTab] = useState<'news' | 'events' | 'notices'>('news');

  const newsItems: NewsItemProps[] = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
      date: "May 10, 2025",
      category: "Achievement",
      title: "PIET Ranks in Top 100 Engineering Colleges",
      description: "Poornima Institute of Engineering & Technology secures a position in the top 100 engineering colleges according to NIRF rankings 2025.",
      link: "/news/1"
    },
    {
      image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
      date: "April 28, 2025",
      category: "Research",
      title: "PIET Receives Major Research Grant",
      description: "Our institution has been awarded a ₹1.5 crore research grant for sustainable energy solutions by the Department of Science & Technology.",
      link: "/news/2"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
      date: "April 15, 2025",
      category: "Partnership",
      title: "New Industry Partnership Announced",
      description: "PIET signs MoU with leading tech company to provide internship and placement opportunities for students.",
      link: "/news/3"
    }
  ];

  const eventItems: EventItemProps[] = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      title: "Annual Technical Symposium 2025",
      location: "Main Auditorium, PIET Campus",
      link: "/events/1"
    },
    {
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
      date: "May 22, 2025",
      time: "9:00 AM - 1:00 PM",
      title: "Campus Recruitment Drive - TCS",
      location: "Placement Cell, Admin Block",
      link: "/events/2"
    },
    {
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
      date: "May 18, 2025",
      time: "2:00 PM - 5:00 PM",
      title: "Workshop on AI & Machine Learning",
      location: "CSE Department, Block C",
      link: "/events/3"
    }
  ];

  const noticeItems: NoticeItemProps[] = [
    {
      date: "May 12, 2025",
      title: "End Semester Examination Schedule",
      description: "The end semester examinations for all programs will commence from June 10, 2025. The detailed schedule is now available.",
      link: "/notices/1",
      isImportant: true
    },
    {
      date: "May 8, 2025",
      title: "Fee Payment Deadline for Next Semester",
      description: "Students are advised to pay their fees for the upcoming semester by June 15, 2025. Late fee will be applicable thereafter.",
      link: "/notices/2",
      isImportant: true
    },
    {
      date: "May 5, 2025",
      title: "Summer Internship Opportunities",
      description: "Multiple companies are offering summer internships for pre-final year students. Register with the placement cell by May 20.",
      link: "/notices/3"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        {/* News Marquee */}
        <NewsMarquee />

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">News & Events</h2>
            <div className="w-24 h-1 bg-secondary"></div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-2">
              <button
                className={`px-6 py-2 font-medium rounded-md focus:outline-none transition-colors shadow-sm hover:shadow ${
                  activeTab === 'news' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveTab('news')}
                aria-pressed={activeTab === 'news'}
              >
                <i className="fas fa-newspaper mr-2"></i>News
              </button>
              <button
                className={`px-6 py-2 font-medium rounded-md focus:outline-none transition-colors shadow-sm hover:shadow ${
                  activeTab === 'events' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveTab('events')}
                aria-pressed={activeTab === 'events'}
              >
                <i className="fas fa-calendar-alt mr-2"></i>Events
              </button>
              <button
                className={`px-6 py-2 font-medium rounded-md focus:outline-none transition-colors shadow-sm hover:shadow ${
                  activeTab === 'notices' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveTab('notices')}
                aria-pressed={activeTab === 'notices'}
              >
                <i className="fas fa-bell mr-2"></i>Notices
              </button>
            </div>
          </div>
        </div>

        {/* News Tab Content */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${activeTab === 'news' ? 'block' : 'hidden'}`} role="tabpanel" aria-labelledby="news-tab">
          {newsItems.map((item, index) => (
            <div className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
              <NewsItem {...item} />
            </div>
          ))}
        </div>

        {/* Events Tab Content */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${activeTab === 'events' ? 'block' : 'hidden'}`} role="tabpanel" aria-labelledby="events-tab">
          {eventItems.map((item, index) => (
            <div className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
              <EventItem key={index} {...item} />
            </div>
          ))}
        </div>

        {/* Notices Tab Content */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${activeTab === 'notices' ? 'block' : 'hidden'}`} role="tabpanel" aria-labelledby="notices-tab">
          {noticeItems.map((item, index) => (
            <div className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
              <NoticeItem key={index} {...item} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={activeTab === 'news' ? '/news' : activeTab === 'events' ? '/events' : '/notices'}>
            <a className="btn-primary rounded-lg shadow-md hover-lift group">
              View All {activeTab === 'news' ? 'News' : activeTab === 'events' ? 'Events' : 'Notices'}
              <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
