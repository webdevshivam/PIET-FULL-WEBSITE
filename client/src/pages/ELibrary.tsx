
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

const ELibrary = () => {
  const quickAccessLinks = [
    { title: "Web OPAC", href: "#", icon: "fas fa-search" },
    { title: "TCSion", href: "#", icon: "fas fa-graduation-cap" },
    { title: "KOHA - LMS", href: "#", icon: "fas fa-database" },
    { title: "E-Resources", href: "#", icon: "fas fa-laptop" },
  ];

  const eResources = [
    { title: "Subscribed Resources @PIET", href: "#" },
    { title: "DELNET", href: "#" },
    { title: "DELNET List of International Journals Engineering and technology", href: "#" },
    { title: "DELNET List of National Journals Engineering and technology", href: "#" },
    { title: "IEEE", href: "#" },
    { title: "List of IEEE Publication Title", href: "#" },
    { title: "List of IEEE Publication Article", href: "#" },
    { title: "J-Gate – Largest e-Journal Gateway | Journal Finder | Journal", href: "#" },
    { title: "Sage Journal", href: "#" },
  ];

  const govInitiatives = [
    { title: "Gov. of India Initiatives Open Access 24*7", href: "#" },
    { title: "Indian Knowledge System ( IKS)", href: "#" },
    { title: "National Digital Library of India (NDLI)", href: "#" },
    { title: "e-KUMBH", href: "#" },
    { title: "Abhilekh Patal", href: "#" },
    { title: "SWAYAM", href: "#" },
    { title: "e-PG Pathshala", href: "#" },
    { title: "Shodhganga", href: "#" },
    { title: "Services for Devyangjan", href: "#" },
    { title: "National Digital Library of India", href: "#" },
    { title: "DELNET", href: "#" },
    { title: "Internet Archive", href: "#" },
  ];

  const questionPapers = [
    { title: "MID Term Previous Year Question Paper", href: "#" },
    { title: "RTU Term Previous Year Question Paper", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <AccessibilityFeatures />
      <Header />
      
      <BreadCrumb
        title="E-Library"
        description="Access digital resources, journals, and academic materials online"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'E-Library', isCurrent: true },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Quick Access Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Access</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickAccessLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <i className={`${link.icon} text-2xl text-primary group-hover:text-white`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Library Images */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <LazyImage
                src="https://www.piet.poornima.org/images/library/c1.png"
                alt="Library Study Area"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Study Area</h3>
                  <p className="text-sm opacity-90">Spacious reading rooms with comfortable seating</p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-80 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <i className="fas fa-laptop text-6xl mb-4 opacity-80"></i>
                  <h3 className="text-xl font-bold mb-2">Digital Resources</h3>
                  <p className="text-sm opacity-90">Access thousands of e-books and journals online</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Resources Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <i className="fas fa-globe mr-3"></i>
              E-Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="flex items-center p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <i className="fas fa-external-link-alt text-primary mr-3 group-hover:text-secondary"></i>
                  <span className="text-gray-700 group-hover:text-primary transition-colors">
                    {resource.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Government Initiatives */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <i className="fas fa-flag-india mr-3"></i>
              Government Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {govInitiatives.map((initiative, index) => (
                <a
                  key={index}
                  href={initiative.href}
                  className="flex items-center p-4 rounded-lg hover:bg-secondary/5 transition-colors group"
                >
                  <i className="fas fa-link text-secondary mr-3 group-hover:text-primary"></i>
                  <span className="text-gray-700 group-hover:text-secondary transition-colors text-sm">
                    {initiative.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Question Papers */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <i className="fas fa-file-alt mr-3"></i>
              Previous Year Question Papers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questionPapers.map((paper, index) => (
                <a
                  key={index}
                  href={paper.href}
                  className="flex items-center p-4 rounded-lg hover:bg-accent/5 transition-colors group border border-gray-200"
                >
                  <i className="fas fa-download text-accent mr-3 group-hover:text-primary"></i>
                  <span className="text-gray-700 group-hover:text-accent transition-colors font-medium">
                    {paper.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Timings Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Library Timings */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-clock mr-3"></i>
                Library Timings
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-3 text-accent">Summer Timings</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Monday to Saturday:</span>
                      <span className="font-semibold">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday:</span>
                      <span className="font-semibold">1:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-3 text-accent">Winter Timings</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Monday to Saturday:</span>
                      <span className="font-semibold">8:30 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday:</span>
                      <span className="font-semibold">1:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Circulation Timings */}
            <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-xl p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-exchange-alt mr-3"></i>
                Circulation Timings
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-3 text-accent">Summer Timings</h3>
                  <div className="flex justify-between items-center">
                    <span>Monday to Saturday:</span>
                    <span className="font-semibold">8:30 AM - 3:00 PM</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-3 text-accent">Winter Timings</h3>
                  <div className="flex justify-between items-center">
                    <span>Monday to Saturday:</span>
                    <span className="font-semibold">9:00 AM - 3:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Cta />
      <Footer />
    </div>
  );
};

export default ELibrary;
