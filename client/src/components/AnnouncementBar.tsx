import { Link } from 'wouter';

export default function AnnouncementBar() {
  return (
    <div className="bg-secondary py-3 shadow-md relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full -translate-x-8 -translate-y-8"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <span className="bg-white text-secondary font-bold px-3 py-1 rounded-md mr-4 shadow-sm">NEW</span>
          <p className="font-medium text-white">Admissions open for 2025-26 academic year. Apply before June 30 for early bird discounts.</p>
        </div>
        <Link href="/admissions">
          <a className="hidden md:block text-white font-semibold group transition-all duration-300 hover:scale-105">
            Learn More <i className="fas fa-arrow-right ml-1 group-hover:ml-2 transition-all"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}
