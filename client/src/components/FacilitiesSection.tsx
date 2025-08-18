import { Link } from "wouter";
import LazyImage from "./LazyImage";

type FacilityProps = {
  image: string;
  title: string;
  description: string;
};

const Facility = ({ image, title, description }: FacilityProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <LazyImage src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl mb-2 text-primary">
        {title}
      </h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  </div>
);

export default function FacilitiesSection() {
  const facilities: FacilityProps[] = [
    {
      image: "/images/fc/Labs.jpg",
      title: "Advanced Laboratories",
      description: "Modern labs equipped with cutting-edge technology for hands-on training in all engineering disciplines.",
    },
    {
      image: "/images/fc/Events.jpg",
      title: "Events",
      description: "Vibrant cultural and social events that foster creativity, leadership, and all-round student development.",
    },
    {
      image: "/images/fc/PIET Campus (1).webp",
      title: "Infrastructure",
      description: "Smart classrooms and excellent infrastructure offering a productive and comfortable learning environment.",
    },
    {
      image: "/images/fc/Sports.jpg",
      title: "Sports",
      description: "Dedicated sports facilities that promote physical fitness, teamwork, and a healthy lifestyle among students.",
    },
    {
      image: "/images/fc/Technovation.jpg",
      title: "Technical Events",
      description: "Competitions and exhibitions that boost innovation, coding, and technical excellence across disciplines.",
    },
    {
      image: "/images/fc/Workshops.jpg",
      title: "Workshops",
      description: "Interactive sessions and hands-on workshops to enhance practical knowledge and industry-relevant skills.",
    },
  ];


  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Campus Facilities
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Our campus offers state-of-the-art facilities designed to enhance
            the learning experience and provide students with everything they
            need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Facility key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
