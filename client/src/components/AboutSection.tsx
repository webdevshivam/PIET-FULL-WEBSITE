import { Link } from "wouter";
import LazyImage from "./LazyImage";


type StatProps = {
  number: string;
  label: string;
};

const Stat = ({ number, label }: StatProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-neutral-200 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1">
    <span className="text-primary font-bold text-4xl mb-2">{number}</span>
    <span className="text-neutral-700 text-center font-medium">{label}</span>
  </div>
);

export default function AboutSection() {
  const stats: StatProps[] = [
    { number: "15+", label: "Years of Excellence" },
    { number: "90+", label: "Faculty Members" },
    { number: "1800+", label: "Students" },
    { number: "75%", label: "Placement Rate" },
  ];

  return (
    <section className="py-20 bg-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
                About Poornima Institute
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
            </div>

            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
              Poornima Institute of Engineering & Technology (PIET) was
              established in 2007 with the goal of providing quality technical
              education and creating skilled professionals. Located in Jaipur,
              Rajasthan, PIET has state-of-the-art infrastructure and is
              affiliated with Rajasthan Technical University.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed text-lg">
              Our institute is known for its excellence in academics, research,
              and placements. We focus on holistic development of students
              through various co-curricular and extracurricular activities
              alongside rigorous academic programs.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary rounded-lg shadow-md hover-lift"
            >
              Discover More About Us <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="relative animate-slideInRight">


            <LazyImage
              src={'https://res.cloudinary.com/ddygzamv4/image/upload/v1747648404/gp8krjucihqxre0zs3jl.jpg'}
              alt={'NAAC Accreditation'}
              className="rounded-xl shadow-xl w-full h-auto z-10 relative"
            />

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10 opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-lg -z-10 opacity-70"></div>

            {/* Photo caption */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-primary font-medium">
                Accredited with Grade 'A' by NAAC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* vision and missoin */}


    </section>
  );
}
