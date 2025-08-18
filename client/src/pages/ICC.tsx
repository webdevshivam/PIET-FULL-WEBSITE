
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ProfileMessageSection from '../components/ProfileMessageSection';

const ICC: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Innovation', href: '#' },
    { label: 'ICC', href: '/icc' }
  ];

  const iccMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chairperson - ICC",
      image: "/images/faculty/default-faculty.jpg",
      qualification: "Ph.D. in Computer Science",
      experience: "15+ years in Innovation & Technology",
      specialization: "Technology Innovation, Research Management"
    },
    {
      name: "Prof. Rajesh Kumar",
      position: "Innovation Coordinator",
      image: "/images/faculty/default-faculty.jpg",
      qualification: "M.Tech in Electronics",
      experience: "12+ years in R&D",
      specialization: "Product Development, Patent Filing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadCrumb 
        title="ICC"
        breadcrumbs={breadcrumbItems}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Innovation & Creativity Cell (ICC)
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Fostering innovation, creativity, and entrepreneurial spirit among students and faculty 
            through various initiatives, workshops, and collaborative projects.
          </p>
        </div>

        {/* About ICC Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">About ICC</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                The Innovation & Creativity Cell (ICC) at PIET serves as a catalyst for 
                innovative thinking and creative problem-solving. Our mission is to nurture 
                an ecosystem that encourages students and faculty to think beyond conventional 
                boundaries and develop solutions for real-world challenges.
              </p>
              <p className="text-gray-700 mb-4">
                ICC provides a platform for interdisciplinary collaboration, research 
                mentorship, and industry partnerships that translate innovative ideas 
                into practical applications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Key Objectives</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                  <span>Promote innovative thinking and creative problem-solving</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                  <span>Support student-led innovation projects and startups</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                  <span>Facilitate industry-academia collaboration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                  <span>Organize workshops, seminars, and innovation challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">ICC Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <i className="fas fa-lightbulb text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Innovation Workshops</h3>
              <p className="text-gray-600">
                Regular workshops on design thinking, ideation, and innovation methodologies
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <i className="fas fa-rocket text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Startup Incubation</h3>
              <p className="text-gray-600">
                Support and mentorship for student entrepreneurs and startup initiatives
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <i className="fas fa-handshake text-4xl text-secondary mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Industry Partnerships</h3>
              <p className="text-gray-600">
                Collaborative projects with industry partners for practical innovation
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">ICC Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {iccMembers.map((member, index) => (
              <ProfileMessageSection
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                qualification={member.qualification}
                experience={member.experience}
                specialization={member.specialization}
                message=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICC;
