
'use client';

import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

interface RecruiterProps {
  name: string;
  logo: string;
  category: string;
}

const recruiters: RecruiterProps[] = [
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
  { name: "Xebia", logo: "/images/cmp/xebia.jpg", category: "Technology" },
];

const RecruiterCard = ({ recruiter, index }: { recruiter: RecruiterProps; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative">
        <LazyImage
          src={recruiter.logo}
          alt={`${recruiter.name} logo`}
          className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">
          {recruiter.name}
        </h4>
        <p className="text-sm text-gray-500 font-medium">{recruiter.category}</p>
      </div>
    </div>
  </motion.div>
);

export default function TopRecruitersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-0 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <i className="fas fa-handshake text-primary text-2xl mr-3"></i>
            <span className="text-primary font-semibold">Industry Partners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            Our Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Recruiters</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We partner with leading companies across various industries to provide our students with 
            exceptional career opportunities and industry exposure.
          </p>
          
          {/* Animated divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "100+", label: "Partner Companies", icon: "fas fa-building" },
            { number: "75%", label: "Placement Rate", icon: "fas fa-chart-line" },
            { number: "₹18L", label: "Highest Package", icon: "fas fa-trophy" },
            { number: "₹5.6L", label: "Average Package", icon: "fas fa-coins" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 shadow-lg">
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Recruiters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {recruiters.slice(0, 12).map((recruiter, index) => (
            <RecruiterCard key={index} recruiter={recruiter} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>View All Placement Records</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}
