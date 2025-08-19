import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import BreadCrumb from '../components/BreadCrumb';
import LazyImage from '../components/LazyImage';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ProfileMessageSection from '../components/ProfileMessageSection';

const IIC: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Innovation', href: '#' },
    { label: 'IIC', isCurrent: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <BreadCrumb
        title="Institution's Innovation Council (IIC)"
        description="Fostering innovation and entrepreneurship at PIET"
        breadcrumbs={breadcrumbItems}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">About IIC</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Institution's Innovation Council (IIC) at Poornima Institute of Engineering & Technology 
                  is established to systematically foster the culture of innovation amongst students and faculty. 
                  IIC plays a crucial role in promoting innovation and entrepreneurship in the institution.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The council works towards creating an ecosystem that encourages innovative thinking, 
                  supports startup activities, and provides a platform for students and faculty to 
                  showcase their innovative ideas and solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To create a vibrant local innovation ecosystem
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To prepare students for entrepreneurship and innovation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To support incubation of new ideas and startups
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    To establish strong networks with industry and academia
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-700">Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Innovation Workshops</h4>
                    <p className="text-sm text-gray-600">Regular workshops on design thinking and innovation methodologies</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Startup Support</h4>
                    <p className="text-sm text-gray-600">Mentoring and incubation support for student startups</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Industry Connect</h4>
                    <p className="text-sm text-gray-600">Connecting students with industry experts and mentors</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">Innovation Challenges</h4>
                    <p className="text-sm text-gray-600">Organizing hackathons and innovation competitions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-700">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">Innovation Policy</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">Startup Guidelines</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">IIC Committee</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">Innovation Reports</a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-700">Contact IIC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Email:</strong> iic@poornima.org</p>
                  <p><strong>Phone:</strong> +91-141-2761001</p>
                  <p><strong>Office:</strong> Innovation Cell, PIET Campus</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default IIC;