import React from "react";
import { Link } from "wouter";

const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-16 mt-5">
      <div className="container mx-auto px-4 lg:px-0 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Start Your Engineering Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join Poornima Institute of Engineering & Technology and become part of
          our legacy of excellence in technical education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admission-fees"
            className="inline-block px-8 py-3 bg-white text-primary hover:bg-neutral-100 transition-colors rounded-lg font-semibold shadow-lg"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors rounded-lg font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
