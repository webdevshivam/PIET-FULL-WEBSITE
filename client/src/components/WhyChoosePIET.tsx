import React from 'react';
import { motion } from 'framer-motion';

const WhyChoosePIET = () => {
  const features = [
    {
      icon: "fas fa-award",
      title: "NAAC 'A' Grade Accredited",
      description: "Recognized for academic excellence and quality education standards by the National Assessment and Accreditation Council.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fas fa-users-cog",
      title: "Industry-Experienced Faculty",
      description: "Learn from professors with extensive industry experience and advanced qualifications in their respective fields.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "fas fa-microscope",
      title: "State-of-the-Art Labs",
      description: "Access cutting-edge laboratories equipped with modern technology for hands-on learning and research.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "fas fa-building",
      title: "State-of-the-Art Infrastructure",
      description: "Modern campus facilities with advanced classrooms, auditoriums, libraries, and recreational spaces designed for optimal learning.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "fas fa-briefcase",
      title: "Excellent Placement Records",
      description: "Outstanding placement opportunities with top-tier companies and industry leaders, ensuring bright career prospects for students.",
      color: "from-indigo-500 to-purple-500"
    }
  
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: "fas fa-calendar-alt" },
    { number: "5000+", label: "Alumni Network", icon: "fas fa-user-graduate" },
    { number: "75%", label: "Placement Rate", icon: "fas fa-chart-line" },
    { number: "50+", label: "Industry Partners", icon: "fas fa-handshake" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary">PIET</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Poornima Institute of Engineering & Technology the preferred choice 
            for engineering excellence and holistic development.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-primary/20">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <i className="fas fa-arrow-right text-primary text-lg"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-xl mb-8 opacity-90">Join PIET and become part of our legacy of excellence in engineering education.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <i className="fas fa-file-alt mr-2"></i>
                  Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                  <i className="fas fa-info-circle mr-2"></i>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoosePIET;