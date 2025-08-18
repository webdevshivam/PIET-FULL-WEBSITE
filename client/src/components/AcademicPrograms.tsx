import { Link } from "wouter";
import { useEffect } from "react";

type ProgramProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const Program = ({ icon, title, description, href }: ProgramProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl hover:border-primary transition-all duration-300 group hover:-translate-y-2">
    <div className="h-48 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10"></div>
      <div className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-8 -left-8"></div>
      <lord-icon
        src={icon}
        trigger="hover"
        style={{ width: "80px", height: "80px" }}
        colors="primary:#ffffff,secondary:#ffffff"
        className="z-10 transform group-hover:scale-110 transition-transform duration-300"
      ></lord-icon>
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 mb-5">{description}</p>
      <Link href={href}>
        <a className="text-secondary hover:text-secondary-dark font-semibold flex items-center group-hover:translate-x-1 transition-transform">
          Learn More{" "}
          <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
        </a>
      </Link>
    </div>
  </div>
);

export default function AcademicPrograms() {
  useEffect(() => {
    // Load Lordicon script if not already loaded
    if (!document.querySelector('script[src*="lordicon"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.lordicon.com/bhenfmcm.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const programs: ProgramProps[] = [
    {
      icon: "https://cdn.lordicon.com/fhtaantg.json",
      title: "Computer Engineering",
      description:
        "Comprehensive computer engineering program covering hardware-software integration, system design, programming, and modern computing technologies.",
      href: "/programs/computer-engineering",
    },

    {
      icon: "https://cdn.lordicon.com/kbtmbyzy.json",
      title: "Artificial Intelligence & Data Science",
      description:
        "Interdisciplinary program combining AI techniques with data science methodologies for intelligent data analysis and automated systems.",
      href: "/programs/ai-data-science",
    },
    
    {
      icon: "https://cdn.lordicon.com/wcjauznf.json",
      title: "Computer Science & Engineering (Artificial Intelligence)",
      description:
        "Advanced computer science program with specialized focus on artificial intelligence, machine learning algorithms, neural networks, and intelligent system design.",
      href: "/programs/cse-ai",
    },
   {
      icon: "https://cdn.lordicon.com/qhviklyi.json",
      title: "Computer Science & Engineering (Data Science)",
      description:
        "Computer engineering with emphasis on data analytics, big data processing, statistical modeling, and data-driven decision making.",
      href: "/programs/ce-data-science",
    },
    

    {
      icon: "https://cdn.lordicon.com/slkvcfos.json",
      title: "Computer Science & Engineering (IoT)",
      description:
        "Specialized program focusing on Internet of Things technologies, connected devices, smart systems, and embedded computing solutions.",
      href: "/programs/ce-iot",
    },
    
    
    {
      icon: "https://cdn.lordicon.com/tqywkdcz.json",
      title: "Electronics and Communication Engineering",
      description:
        "Focus on electronic circuits, communication systems, signal processing, wireless technologies, and modern telecommunication networks.",
      href: "/programs/ece",
    },
    {
      icon: "https://cdn.lordicon.com/gqdnbnwt.json",
      title: "Electrical Engineering",
      description:
        "Study of electrical systems, power generation, renewable energy, control systems, and electrical machine design and analysis.",
      href: "/programs/electrical",
    },
     {
      icon: "https://cdn.lordicon.com/nocovwne.json",
      title: "Computer Science & Engineering (Indian Language)",
      description:
        "Computer engineering program designed to promote indigenous language computing, localization technologies, and regional software development.",
      href: "/programs/ce-indian-lang",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50"></div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Academic Programs
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg">
            Explore our diverse range of undergraduate and postgraduate programs
            designed to prepare students for successful careers in engineering
            and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="animate-scaleUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Program {...program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
