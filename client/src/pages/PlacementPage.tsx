import React from "react";
import { motion } from "framer-motion";
import { AccessibilityFeatures } from "../components/AccessibilityFeatures";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import TopRecruitersSection from "../components/TopRecruitersSection";
import {
  Building2,
  TrendingUp,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// Placement Statistics Component
const PlacementStats = () => {
  const stats = [
    {
      number: "95%",
      label: "Placement Rate",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      number: "250+",
      label: "Companies Visited",
      icon: Building2,
      color: "text-blue-500",
    },
    {
      number: "₹25L",
      label: "Highest Package",
      icon: Award,
      color: "text-yellow-500",
    },
    {
      number: "₹6.8L",
      label: "Average Package",
      icon: Users,
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Placement Highlights
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Training & Placement Cell ensures excellent career opportunities
            for our students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-gray-100 rounded-full mb-4`}
              >
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Placement Process Component
const PlacementProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Pre-Placement Preparation",
      description:
        "Resume building, soft skills training, and technical preparation sessions",
      icon: "fas fa-clipboard-list",
    },
    {
      step: "02",
      title: "Company Registration",
      description:
        "Companies register through our placement portal and schedule recruitment drives",
      icon: "fas fa-building",
    },
    {
      step: "03",
      title: "Selection Process",
      description:
        "Written tests, technical interviews, HR rounds, and group discussions",
      icon: "fas fa-users",
    },
    {
      step: "04",
      title: "Final Selection",
      description:
        "Offer letters, salary negotiations, and joining formalities",
      icon: "fas fa-trophy",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Placement Process
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures smooth recruitment process for both
            students and companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="mb-4">
                  <i className={`${step.icon} text-primary text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Training Programs Component
const TrainingPrograms = () => {
  const programs = [
    {
      title: "Technical Skills Development",
      description:
        "Programming languages, software tools, and industry-specific technologies",
      icon: "fas fa-code",
      color: "bg-blue-500",
    },
    {
      title: "Soft Skills Training",
      description:
        "Communication, leadership, teamwork, and presentation skills",
      icon: "fas fa-comments",
      color: "bg-green-500",
    },
    {
      title: "Interview Preparation",
      description:
        "Mock interviews, group discussions, and personality development",
      icon: "fas fa-user-tie",
      color: "bg-purple-500",
    },
    {
      title: "Industry Exposure",
      description: "Industrial visits, guest lectures, and internship programs",
      icon: "fas fa-industry",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Training Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs to enhance student employability and
            career readiness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`${program.color} text-white p-3 rounded-lg`}>
                  <i className={`${program.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Placement Records Component
const PlacementRecords = () => {
  const yearlyData = [
    {
      year: "2023-24",
      placed: 485,
      companies: 150,
      highest: "₹25,00,000",
      average: "₹6,80,000",
    },
    {
      year: "2022-23",
      placed: 465,
      companies: 142,
      highest: "₹22,50,000",
      average: "₹6,50,000",
    },
    {
      year: "2021-22",
      placed: 445,
      companies: 138,
      highest: "₹20,00,000",
      average: "₹6,20,000",
    },
    {
      year: "2020-21",
      placed: 425,
      companies: 135,
      highest: "₹18,00,000",
      average: "₹5,80,000",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Placement Records
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Year-wise placement statistics showcasing our consistent track
            record
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Academic Year
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  Students Placed
                </th>
                <th className="px-6 py-4 text-left font-semibold">Companies</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Highest Package
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  Average Package
                </th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map((data, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 font-semibold text-primary">
                    {data.year}
                  </td>
                  <td className="px-6 py-4">{data.placed}</td>
                  <td className="px-6 py-4">{data.companies}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    {data.highest}
                  </td>
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    {data.average}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Placement Team Component
const PlacementTeam = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Training & Placement Cell
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated team works tirelessly to bridge the gap between
            academia and industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Placement Team"
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Responsibilities
              </h3>
              <ul className="space-y-3">
                {[
                  "Industry-Institute Interface and Career Guidance",
                  "Organizing Pre-Placement Training Programs",
                  "Coordinating Campus Recruitment Drives",
                  "Maintaining Industry Relations and Alumni Network",
                  "Student Career Counseling and Mentoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full p-1 mt-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold text-primary mb-3">
                Contact Information
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">+91-141-2713208</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">placement@poornima.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">
                    ISI-2, RIICO Institutional Area, Sitapura, Jaipur
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Our Team Component
const OurTeamSection = () => {
  const teamMembers = [
    {
      sno: 1,
      name: "Dr. Anil Kumar",
      designation: "HoD (Computer Science & Engineering)",
    },
    {
      sno: 2,
      name: "Dr. Buddesh Kanwar",
      designation: "HoD (Artificial Intelligence & Data Science)",
    },
    { sno: 3, name: "Dr. Sama Jain", designation: "HoD (Applied Sciences)" },
    { sno: 4, name: "Dr. Payal Bansal", designation: "HoD (IOT)" },
    { sno: 5, name: "Mr. Mukul Nama", designation: "HoD (Civil)" },
    { sno: 6, name: "Dr. Shurti Thapar", designation: "Tutor (CS)" },
    { sno: 7, name: "Mr. Punit Kumawat", designation: "Tutor (AI & DS)" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated placement team working to ensure the best career
            opportunities for our students
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">S.No.</th>
                <th className="px-6 py-4 text-left font-semibold">Name</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Designation
                </th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 font-semibold text-primary">
                    {member.sno}
                  </td>
                  <td className="px-6 py-4 font-medium">{member.name}</td>
                  <td className="px-6 py-4">{member.designation}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Placement Record Downloads Component
const PlacementRecordDownloads = () => {
  const placementRecords = [
    {
      sno: 1,
      year: "Placed Students List 2023-24",
      downloadLink:
        "https://drive.google.com/file/d/1ZRDbTjoUSja6ilRSXuoZ5hntKgdEdcrX/view?usp=sharing",
    },
    {
      sno: 2,
      year: "Placed Students List 2022-23",
      downloadLink:
        "https://drive.google.com/file/d/1GA8NwEbed8WZzG9uQavmGM6J_idG0kgn/view?usp=sharing",
    },
    {
      sno: 3,
      year: "Placed Students List 2021-22",
      downloadLink:
        "https://drive.google.com/file/d/1w2crEgaUCJmwaCyX4MkSiQnR_E-Ea86A/view?usp=sharing",
    },
    {
      sno: 4,
      year: "Placed Students List 2020-21",
      downloadLink:
        "https://drive.google.com/file/d/1NuoNgm8eEnoDZnTeTftZMEIi2mGJMHgk/view?usp=sharing",
    },
    {
      sno: 5,
      year: "Placed Students List 2019-20",
      downloadLink:
        "https://drive.google.com/file/d/1pEmux4U7X2wKg4vY7ql0s5F86vpq2D55/view?usp=sharing",
    },
    {
      sno: 6,
      year: "Placed Students List 2018-19",
      downloadLink:
        "https://drive.google.com/file/d/1V1eubJymlRpKHJoBexl9TYs_hW0epsfs/view?usp=sharing",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Placement Records
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Download detailed placement records and statistics from previous
            years
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">S. No.</th>
                <th className="px-6 py-4 text-left font-semibold">Year</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Download Link
                </th>
              </tr>
            </thead>
            <tbody>
              {placementRecords.map((record, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 font-semibold text-primary">
                    {record.sno}
                  </td>
                  <td className="px-6 py-4 font-medium">{record.year}</td>
                  <td className="px-6 py-4">
                    <a
                      href={record.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition inline-flex items-center gap-2"
                    >
                      <i className="fas fa-download"></i>
                      Download
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Important Links Component
const ImportantLinksSection = () => {
  const importantLinks = [
    {
      sno: 1,
      title: "Training and Placement & Higher Studies Policy",
      link: "https://drive.google.com/file/d/1dvab4a4e4CZtmL2mL182c3yhdB0PmdxW/view?usp=sharing",
    },
    {
      sno: 2,
      title: "Policy for Beyond Classroom And Value Added Courses",
      link: "https://drive.google.com/file/d/1zmUHG3EAj_QwA1vB3PMjXdqIU5d1dL1z/view?usp=sharing",
    },
    {
      sno: 3,
      title: "Academia-Industry Interaction Policy",
      link: "https://drive.google.com/file/d/1N7Uet006dOKi8qNSZUmAHDGM1qQXTRZG/view?usp=sharing",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Important Links
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access important policies and documents related to training and
            placement
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">S. No.</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Important Links
                </th>
              </tr>
            </thead>
            <tbody>
              {importantLinks.map((link, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 font-semibold text-primary">
                    {link.sno}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-medium hover:underline transition-colors inline-flex items-center gap-2"
                    >
                      <i className="fas fa-external-link-alt text-sm"></i>
                      {link.title}
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Recruitment Guidelines Component
const RecruitmentGuidelines = () => {
  const guidelines = [
    {
      title: "For Companies",
      items: [
        "Register through our placement portal",
        "Submit job description and requirements",
        "Provide company profile and selection process details",
        "Schedule recruitment timeline in advance",
      ],
      icon: "fas fa-building",
      color: "bg-blue-500",
    },
    {
      title: "For Students",
      items: [
        "Maintain minimum CGPA of 6.0",
        "Complete all academic requirements",
        "Attend pre-placement training sessions",
        "Register for placement through college portal",
      ],
      icon: "fas fa-graduation-cap",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Recruitment Guidelines
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Important guidelines for companies and students participating in our
            placement process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guidelines.map((guideline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`${guideline.color} text-white p-3 rounded-lg mr-4`}
                >
                  <i className={`${guideline.icon} text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {guideline.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="bg-primary text-white rounded-full p-1 mt-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlacementPage = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb
        title="Training & Placement"
        description="Discover excellent career opportunities and industry connections at PIET"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/" },
          { label: "Training & Placement", isCurrent: true },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Launch Your <span className="text-yellow-300">Career</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join the ranks of successful PIET alumni working at leading
              companies worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Placement Brochure
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
                Company Registration
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <PlacementStats />
      <PlacementProcess />
      <TrainingPrograms />
      <PlacementRecords />
      <TopRecruitersSection />
      <PlacementTeam />
      <OurTeamSection />
      <PlacementRecordDownloads />
      <ImportantLinksSection />
      <RecruitmentGuidelines />

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Recruit Our Talent?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with PIET to find skilled and dedicated professionals for
              your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                <Calendar className="inline-block w-5 h-5 mr-2" />
                Schedule Campus Drive
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
                <Mail className="inline-block w-5 h-5 mr-2" />
                Contact Placement Cell
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;
