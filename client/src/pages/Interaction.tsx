
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';

const Interaction: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Innovation', href: '#' },
    { label: 'Interaction', href: '/interaction' }
  ];

  const interactionPrograms = [
    {
      title: "Industry-Academia Interface",
      description: "Regular interaction sessions between industry experts and academic community",
      icon: "fas fa-industry"
    },
    {
      title: "Student-Faculty Collaboration",
      description: "Platform for collaborative research and project development",
      icon: "fas fa-users"
    },
    {
      title: "Alumni Engagement",
      description: "Connect current students with successful alumni for mentorship and guidance",
      icon: "fas fa-graduation-cap"
    },
    {
      title: "Community Outreach",
      description: "Programs to engage with local community for social impact projects",
      icon: "fas fa-heart"
    }
  ];

  const upcomingEvents = [
    {
      title: "Tech Talk Series",
      date: "Every Friday",
      time: "4:00 PM - 5:00 PM",
      speaker: "Industry Experts",
      venue: "Main Auditorium"
    },
    {
      title: "Innovation Showcase",
      date: "15th February 2024",
      time: "10:00 AM - 4:00 PM",
      speaker: "Student Projects",
      venue: "Innovation Lab"
    },
    {
      title: "Alumni Meet & Greet",
      date: "28th February 2024",
      time: "2:00 PM - 6:00 PM",
      speaker: "Distinguished Alumni",
      venue: "Conference Hall"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Interaction & Collaboration Hub
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Building bridges between academia, industry, and community through meaningful 
            interactions, collaborative projects, and knowledge exchange initiatives.
          </p>
        </div>

        {/* About Interaction Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">About Interaction Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Our Interaction & Collaboration Hub serves as a dynamic platform that 
                facilitates meaningful connections between various stakeholders in the 
                educational ecosystem. We believe that collaborative learning and 
                cross-pollination of ideas lead to innovation and excellence.
              </p>
              <p className="text-gray-700 mb-4">
                Through structured programs, informal meetups, and collaborative projects, 
                we create opportunities for students, faculty, industry professionals, 
                alumni, and community members to interact, learn, and grow together.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Key Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-secondary mr-3 mt-1"></i>
                  <span>Enhanced learning through diverse perspectives</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-secondary mr-3 mt-1"></i>
                  <span>Industry exposure and real-world insights</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-secondary mr-3 mt-1"></i>
                  <span>Networking opportunities for career growth</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-secondary mr-3 mt-1"></i>
                  <span>Collaborative research and innovation projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interaction Programs */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Interaction Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interactionPrograms.map((program, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <i className={`${program.icon} text-3xl text-secondary mr-4 mt-1`}></i>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Upcoming Interaction Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-secondary pl-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-1">
                      <i className="fas fa-user mr-2"></i>
                      {event.speaker}
                    </p>
                    <p className="text-gray-600">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {event.venue}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-lg font-semibold text-secondary">{event.date}</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">For Students</h3>
              <p className="text-gray-700 mb-4">
                Join our interaction programs to enhance your learning experience, 
                build professional networks, and gain industry insights.
              </p>
              <button className="btn-primary">
                <i className="fas fa-user-plus mr-2"></i>
                Register for Programs
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">For Industry/Alumni</h3>
              <p className="text-gray-700 mb-4">
                Share your expertise, mentor students, and collaborate on innovative 
                projects that create real-world impact.
              </p>
              <button className="btn-secondary">
                <i className="fas fa-handshake mr-2"></i>
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
