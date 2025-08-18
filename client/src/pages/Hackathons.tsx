import React from "react";
import { motion } from "framer-motion";
import { AccessibilityFeatures } from "../components/AccessibilityFeatures";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Cta from "../components/Cta";

interface HackathonEvent {
  sno: string;
  title: string;
  type: string;
  sponsoringBody: string;
  date: string;
  reportLink: string;
  description?: string;
  participants?: string;
  highlights?: string[];
}

const HackathonCard = ({ event }: { event: HackathonEvent }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
  >
    <div className="relative h-48 bg-gradient-to-r from-primary to-primary-light flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-10 -right-10"></div>
      <div className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-8 -left-8"></div>
      <div className="z-10 text-center text-white">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-code text-3xl text-white"></i>
        </div>
        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          {event.type}
        </span>
      </div>
    </div>

    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
          #{event.sno}
        </span>
        <span className="text-sm text-gray-500">{event.date}</span>
      </div>

      <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
        {event.title}
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <i className="fas fa-handshake text-primary mr-3 w-4"></i>
          <span>
            <strong>Sponsored by:</strong> {event.sponsoringBody}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <i className="fas fa-calendar text-primary mr-3 w-4"></i>
          <span>
            <strong>Date:</strong> {event.date}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <i className="fas fa-globe text-primary mr-3 w-4"></i>
          <span>
            <strong>Level:</strong> {event.type}
          </span>
        </div>
      </div>

      {event.highlights && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary mb-3">Key Highlights:</h4>
          <ul className="space-y-2">
            {event.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <i className="fas fa-users text-primary"></i>
          <span>Students & Faculty</span>
        </div>
        <a
          href={event.reportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <i className="fas fa-file-pdf mr-2"></i>
          View Report
        </a>
      </div>
    </div>
  </motion.div>
);

const StatsCard = ({
  icon,
  number,
  label,
  gradient,
}: {
  icon: string;
  number: string;
  label: string;
  gradient: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative text-center ${gradient} text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group`}
  >
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="mb-4">
        <i className={`${icon} text-5xl mb-3 drop-shadow-lg`}></i>
      </div>
      <div className="text-4xl font-bold mb-2 tracking-tight">{number}</div>
      <div className="text-sm opacity-90 uppercase tracking-wide font-medium">
        {label}
      </div>
    </div>
  </motion.div>
);

const Hackathons = () => {
  const hackathonEvents: HackathonEvent[] = [
    {
      sno: "01",
      title: "Toycathon 2021 Node Center for Digital Edition",
      type: "National",
      sponsoringBody: "AICTE",
      date: "22-24 June 2021",
      reportLink:
        "https://drive.google.com/file/d/1vhu4azQmpdFFNujQiuBVgNQWmMvp0Jw5/view?usp=sharing",
      highlights: [
        "Digital toy innovation and design",
        "AICTE sponsored national competition",
        "Focus on educational and creative toys",
        "Industry expert mentorship sessions",
      ],
    },
    {
      sno: "02",
      title: "RTU Poornima Hackathon 2021",
      type: "National",
      sponsoringBody: "TEQIP III",
      date: "23-24 March 2021",
      reportLink:
        "https://drive.google.com/file/d/1GidJ_Edz7fI2dwIcIp7DoJ_qI5YvHJY7/view?usp=sharing",
      highlights: [
        "Technical Education Quality Improvement",
        "48-hour intensive coding marathon",
        "Real-world problem solving focus",
        "Industry-academia collaboration",
      ],
    },
    {
      sno: "03",
      title: "Poornima Hackathon-2023",
      type: "National",
      sponsoringBody: "ISTE",
      date: "March 03, 2023 - March 04, 2023",
      reportLink:
        "https://drive.google.com/file/d/1zrhCUZH19D6-6x56F0f5BB0YjdV-O3ox/view?usp=sharing",
      highlights: [
        "ISTE sponsored technical event",
        "Innovation in engineering solutions",
        "Student-led project development",
        "Interdisciplinary collaboration",
      ],
    },
    {
      sno: "04",
      title: "A Hackathon in LNM Institute of Information Technology",
      type: "National",
      sponsoringBody: "LNM Institute of Information Technology",
      date: "January 27, 2023 - January 29, 2023",
      reportLink:
        "https://drive.google.com/file/d/1uCs6P-fxkNd9yL_VTKJzblN58Djl3hoP/view?usp=sharing",
      highlights: [
        "3-day intensive hackathon",
        "Information technology focus",
        "Inter-institutional collaboration",
        "Advanced computing solutions",
      ],
    },
    {
      sno: "05",
      title: "Smart India Hackathon-2023",
      type: "National",
      sponsoringBody: "Poornima Institute of Engineering and Technology",
      date: "19-20 December, 2023",
      reportLink:
        "https://drive.google.com/file/d/1_yC3xAK5_Pv0BRQRptVKUshQ-QDusu4-/view?usp=sharing",
      highlights: [
        "Government of India initiative",
        "Smart solutions for national challenges",
        "Multi-domain problem statements",
        "Industry mentorship and guidance",
      ],
    },
    {
      sno: "06",
      title: "PIET Hackathon-2023",
      type: "National",
      sponsoringBody: "AICTE IDEA LAB",
      date: "22-23 September, 2023",
      reportLink:
        "https://drive.google.com/file/d/1RQ8ZTkkpRueb5KsV-Oj3kruYvzuNJVVx/view?usp=sharing",
      highlights: [
        "AICTE IDEA Lab sponsored event",
        "Innovation and entrepreneurship focus",
        "Startup incubation opportunities",
        "Technology commercialization",
      ],
    },
  ];

  const stats = [
    {
      icon: "fas fa-code",
      number: "6+",
      label: "Hackathons Organized",
      gradient: "bg-gradient-to-br from-primary to-primary-dark",
    },
    {
      icon: "fas fa-users",
      number: "500+",
      label: "Participants",
      gradient: "bg-gradient-to-br from-primary to-primary-dark",
    },
    {
      icon: "fas fa-trophy",
      number: "100+",
      label: "Projects Developed",
      gradient: "bg-gradient-to-br from-primary to-primary-dark",
    },
    {
      icon: "fas fa-lightbulb",
      number: "50+",
      label: "Innovative Solutions",
      gradient: "bg-gradient-to-br from-primary to-primary-dark",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AccessibilityFeatures />
      <Header />

      <BreadCrumb
        title="HACKATHONS"
        description="Fostering innovation through competitive programming and problem-solving events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/student-life" },
          { label: "Hackathons", isCurrent: true },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary-light to-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            >
              INNOVATION THROUGH CODE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed"
            >
              Discover our flagship hackathons where creativity meets technology
              to solve real-world challenges
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-calendar mr-2"></i>
                Upcoming Events
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-trophy mr-2"></i>
                Past Winners
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 uppercase tracking-tight">
              HACKATHONS ORGANIZED
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our hackathons bring together brilliant minds to tackle
              challenging problems, foster innovation, and create solutions that
              make a real impact in society and technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {hackathonEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <HackathonCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              HACKATHON SUMMARY
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary to-primary-light text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    S.No.
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Title of Hackathon
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    National/International
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Sponsoring Body
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Date of Hackathon
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Link to Report
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {hackathonEvents.map((event, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {event.sno}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      {event.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {event.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      {event.sponsoringBody}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {event.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={event.reportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark font-medium hover:underline transition-colors"
                      >
                        <i className="fas fa-file-pdf mr-2"></i>
                        View PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              READY TO INNOVATE?
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Join our upcoming hackathons and be part of the innovation
              revolution. Connect with like-minded developers, learn from
              industry experts, and create solutions that matter.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: "fas fa-code",
                  title: "CODE",
                  desc: "Develop cutting-edge solutions",
                  delay: 0.1,
                },
                {
                  icon: "fas fa-users",
                  title: "COLLABORATE",
                  desc: "Work with talented teams",
                  delay: 0.2,
                },
                {
                  icon: "fas fa-rocket",
                  title: "LAUNCH",
                  desc: "Turn ideas into reality",
                  delay: 0.3,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary-light/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`${item.icon} text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default Hackathons;
