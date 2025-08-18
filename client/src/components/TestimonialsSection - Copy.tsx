type TestimonialProps = {
  quote: string;
  initials: string;
  name: string;
  designation: string;
};

const Testimonial = ({ quote, initials, name, designation }: TestimonialProps) => (
  <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
    <div className="text-accent text-2xl mb-4">
      <i className="fas fa-quote-left"></i>
    </div>
    <p className="mb-6 italic">
      {quote}
    </p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold mr-4">
        {initials}
      </div>
      <div>
        <h4 className="font-heading font-semibold">{name}</h4>
        <p className="text-sm opacity-80">{designation}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      quote: "My four years at PIET were transformative. The faculty's guidance and industry-focused curriculum helped me secure a position at a top tech company right after graduation.",
      initials: "AR",
      name: "Aryan Sharma",
      designation: "B.Tech CSE, Batch of 2022"
    },
    {
      quote: "The practical approach to learning at PIET gave me hands-on experience with real-world engineering problems. The college's focus on innovation encouraged me to pursue my own startup.",
      initials: "PJ",
      name: "Priya Jain",
      designation: "B.Tech ECE, Batch of 2023"
    },
    {
      quote: "Beyond academics, PIET offered me numerous opportunities to develop leadership skills through various clubs and events. The supportive environment helped me grow both personally and professionally.",
      initials: "VK",
      name: "Vivek Kumar",
      designation: "B.Tech ME, Batch of 2021"
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Student Testimonials</h2>
          <p className="max-w-3xl mx-auto opacity-80">
            Hear what our students and alumni have to say about their experience at Poornima Institute of Engineering & Technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
