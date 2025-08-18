import { Link } from 'wouter';

export type NewsItemProps = {
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
};

export const NewsItem = ({ image, date, category, title, description, link }: NewsItemProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-neutral-600">{date}</span>
        <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">{category}</span>
      </div>
      <h3 className="font-heading font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link href={link}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center group-hover:translate-x-1 transition-transform">
          Read More <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
        </a>
      </Link>
    </div>
  </div>
);