import { Link } from 'wouter';

type PlacementStatProps = {
  number: string;
  label: string;
};

const PlacementStat = ({ number, label }: PlacementStatProps) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
    <span className="text-secondary font-bold text-4xl mb-2">{number}</span>
    <span className="text-neutral-600 text-center">{label}</span>
  </div>
);

type RecruitersProps = {
  name: string;
  logo: string;
  category: string;
};

const Recruiter = ({ name, logo }: RecruitersProps) => (
  <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-center h-24 hover:shadow-md transition-shadow">
    <img src={logo} alt={`${name} logo`} className="w-12 h-12 object-contain mb-1" />
    <span className="font-medium text-xs text-neutral-600 text-center">{name}</span>
  </div>
);

export default function PlacementSection() {
  const stats: PlacementStatProps[] = [
    { number: "75%", label: "Placement Rate" },
    { number: "150+", label: "Recruiting Companies" },
    { number: "₹18L", label: "Highest Package" },
    { number: "₹5.6L", label: "Average Package" }
  ];

  const recruiters: RecruitersProps[] = [
    { name: "Amazon", logo: "/images/cmp/amazon.jpg", category: "E-commerce" },
    { name: "Auriga IT", logo: "/images/cmp/aurigait.jpg", category: "Technology" },
    { name: "Cactus Global", logo: "/images/cmp/cactusglobal.jpg", category: "Technology" },
    { name: "Capgemini", logo: "/images/cmp/capgemini.jpg", category: "Consulting" },
    { name: "Celebal", logo: "/images/cmp/celebal.jpg", category: "Technology" },
    { name: "Cimpress", logo: "/images/cmp/cimpress.jpg", category: "Technology" },
    { name: "ElasticRun", logo: "/images/cmp/elasticrun.jpg", category: "Technology" },
    { name: "FreeCharge", logo: "/images/cmp/freecharge.jpg", category: "Fintech" },
    { name: "Infosys", logo: "/images/cmp/infosys.jpg", category: "IT Services" },
    { name: "Jio Platform", logo: "/images/cmp/jioplatform.jpg", category: "Telecom" },
    { name: "Locus", logo: "/images/cmp/locus.jpg", category: "Technology" },
    { name: "Nirvana", logo: "/images/cmp/nirvana.jpg", category: "Technology" },
    { name: "Optum", logo: "/images/cmp/optum.jpg", category: "Healthcare" },
    { name: "RTCamp", logo: "/images/cmp/rtcamp.jpg", category: "Technology" },
    { name: "Sierra Cloud", logo: "/images/cmp/sierracloud.jpg", category: "Cloud Services" },
    { name: "Synopsys", logo: "/images/cmp/synopsys.jpg", category: "Technology" },
    { name: "Tekion", logo: "/images/cmp/tekion.jpg", category: "Automotive Tech" },
    { name: "Xebia", logo: "/images/cmp/xebia.jpg", category: "Technology" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Placement Highlights</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our dedicated Training & Placement Cell ensures students are well-prepared for industry requirements and connects them with top recruiters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-neutral-100 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <PlacementStat key={index} {...stat} />
                ))}
              </div>
              
              <h3 className="font-heading font-bold text-xl mb-4 text-primary">Top Recruiters</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {recruiters.map((recruiter, index) => (
                  <Recruiter key={index} {...recruiter} />
                ))}
              </div>
            </div>
            
            <Link href="/placements">
              <a className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                Placement Records <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Campus Placements" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 p-6">
              <h3 className="text-white font-heading font-bold text-xl mb-2">Campus Recruitment Program</h3>
              <p className="text-white text-sm">Our annual recruitment drive connects students with top companies from various industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
