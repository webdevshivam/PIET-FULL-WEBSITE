
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import LazyImage from '@/components/LazyImage';
import BreadCrumb from '@/components/BreadCrumb';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Campus Buildings
  {
    id: '1',
    src: 'https://www.piet.poornima.org/images/Campus/MainBuilding1.JPG',
    alt: 'Main Academic Block',
    title: 'Main Academic Block Front View',
    category: 'campus'
  },
  {
    id: '2',
    src: 'https://www.piet.poornima.org/images/Campus/MainBuilding2.JPG',
    alt: 'Main Academic Block Upper View',
    title: 'Main Academic Block Upper View',
    category: 'campus'
  },
  {
    id: '3',
    src: 'https://www.piet.poornima.org/images/Campus/Block3.JPG',
    alt: 'Academic Block 3',
    title: 'Academic Block 3',
    category: 'campus'
  },
  {
    id: '4',
    src: 'https://www.piet.poornima.org/images/Campus/AdminBlock.JPG',
    alt: 'Administration Block',
    title: 'Administration Block',
    category: 'campus'
  },
  {
    id: '5',
    src: 'https://www.piet.poornima.org/images/Campus/Entrance.JPG',
    alt: 'Campus Entrance',
    title: 'Campus Main Entrance',
    category: 'campus'
  },

  // Library
  {
    id: '6',
    src: 'https://www.piet.poornima.org/images/Library/CentralLibrary1.JPG',
    alt: 'Central Library',
    title: 'Central Library Reading Hall',
    category: 'library'
  },
  {
    id: '7',
    src: 'https://www.piet.poornima.org/images/Library/LibraryBooks.JPG',
    alt: 'Library Collection',
    title: 'Extensive Book Collection',
    category: 'library'
  },
  {
    id: '8',
    src: 'https://www.piet.poornima.org/images/Library/DigitalLibrary.JPG',
    alt: 'Digital Library',
    title: 'Digital Library Section',
    category: 'library'
  },

  // Laboratories
  {
    id: '9',
    src: 'https://www.piet.poornima.org/images/Labs/ComputerLab1.JPG',
    alt: 'Computer Laboratory',
    title: 'Computer Programming Lab',
    category: 'labs'
  },
  {
    id: '10',
    src: 'https://www.piet.poornima.org/images/Labs/ElectronicsLab.JPG',
    alt: 'Electronics Lab',
    title: 'Electronics & Communication Lab',
    category: 'labs'
  },
  {
    id: '11',
    src: 'https://www.piet.poornima.org/images/Labs/MechanicalLab.JPG',
    alt: 'Mechanical Lab',
    title: 'Mechanical Engineering Lab',
    category: 'labs'
  },
  {
    id: '12',
    src: 'https://www.piet.poornima.org/images/Labs/PhysicsLab.JPG',
    alt: 'Physics Lab',
    title: 'Physics Laboratory',
    category: 'labs'
  },

  // Research & Development
  {
    id: '13',
    src: 'https://www.piet.poornima.org/images/Research/ResearchCenter1.JPG',
    alt: 'Research Center',
    title: 'Research & Development Center',
    category: 'research'
  },
  {
    id: '14',
    src: 'https://www.piet.poornima.org/images/Research/InnovationLab.JPG',
    alt: 'Innovation Lab',
    title: 'Innovation & Incubation Lab',
    category: 'research'
  },
  {
    id: '15',
    src: 'https://www.piet.poornima.org/images/Research/ProjectLab.JPG',
    alt: 'Project Lab',
    title: 'Student Project Laboratory',
    category: 'research'
  },

  // Sports Grounds
  {
    id: '16',
    src: 'https://www.piet.poornima.org/images/Sports/PlayGround1.JPG',
    alt: 'Main Playground',
    title: 'Main Sports Ground',
    category: 'sports'
  },
  {
    id: '17',
    src: 'https://www.piet.poornima.org/images/Sports/BasketballCourt.JPG',
    alt: 'Basketball Court',
    title: 'Basketball Court',
    category: 'sports'
  },
  {
    id: '18',
    src: 'https://www.piet.poornima.org/images/Sports/IndoorGames.JPG',
    alt: 'Indoor Games',
    title: 'Indoor Games Hall',
    category: 'sports'
  },

  // Annual Events
  {
    id: '19',
    src: 'https://www.piet.poornima.org/images/Events/TechFest1.JPG',
    alt: 'Technical Festival',
    title: 'Annual Technical Festival',
    category: 'events'
  },
  {
    id: '20',
    src: 'https://www.piet.poornima.org/images/Events/CulturalEvent.JPG',
    alt: 'Cultural Event',
    title: 'Cultural Program',
    category: 'events'
  },
  {
    id: '21',
    src: 'https://www.piet.poornima.org/images/Events/Convocation.JPG',
    alt: 'Convocation Ceremony',
    title: 'Annual Convocation',
    category: 'events'
  },

  // Activities
  {
    id: '22',
    src: 'https://www.piet.poornima.org/images/Activities/Workshop1.JPG',
    alt: 'Technical Workshop',
    title: 'Technical Workshop',
    category: 'activities'
  },
  {
    id: '23',
    src: 'https://www.piet.poornima.org/images/Activities/Seminar.JPG',
    alt: 'Expert Seminar',
    title: 'Expert Lecture Series',
    category: 'activities'
  },
  {
    id: '24',
    src: 'https://www.piet.poornima.org/images/Activities/Competition.JPG',
    alt: 'Student Competition',
    title: 'Inter-College Competition',
    category: 'activities'
  }
];

const categories = [
  { id: 'all', name: 'All Images', icon: 'fas fa-layer-group' },
  { id: 'campus', name: 'Campus Buildings', icon: 'fas fa-building' },
  { id: 'library', name: 'Library', icon: 'fas fa-book' },
  { id: 'labs', name: 'Laboratories', icon: 'fas fa-flask' },
  { id: 'research', name: 'Research & Development', icon: 'fas fa-microscope' },
  { id: 'sports', name: 'Sports Grounds', icon: 'fas fa-futbol' },
  { id: 'events', name: 'Annual Events', icon: 'fas fa-calendar-alt' },
  { id: 'activities', name: 'Activities', icon: 'fas fa-users' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const imageCount = filteredImages.length;

  const openModal = (image: GalleryImage) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <AccessibilityFeatures />
      <Header />

      <BreadCrumb
        title="Campus Gallery"
        description="Explore the beautiful campus, modern facilities, and vibrant student life at Poornima Institute of Engineering & Technology"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", isCurrent: true },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              <i className="fas fa-images mr-3"></i>
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-105'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                  }`}
                >
                  <i className={`${category.icon} text-sm`}></i>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-4xl font-bold text-primary mb-3 flex items-center justify-center lg:justify-start">
                <i className={`${activeCategoryData?.icon} mr-4 text-secondary`}></i>
                {activeCategoryData?.name}
              </h3>
              <p className="text-lg text-neutral-600 max-w-2xl">
                {activeCategory === 'campus' && 'Modern architecture and state-of-the-art academic facilities designed for excellence in education'}
                {activeCategory === 'library' && 'World-class learning resources and digital facilities for comprehensive academic support'}
                {activeCategory === 'labs' && 'Advanced laboratory facilities equipped with cutting-edge technology and instruments'}
                {activeCategory === 'research' && 'Innovation centers fostering research, development, and entrepreneurial thinking'}
                {activeCategory === 'sports' && 'Comprehensive sports and recreational facilities promoting physical wellness'}
                {activeCategory === 'events' && 'Vibrant campus life with annual celebrations, festivals, and cultural events'}
                {activeCategory === 'activities' && 'Rich academic and co-curricular activities enhancing overall student development'}
                {activeCategory === 'all' && 'Complete visual journey through our beautiful campus and vibrant academic community'}
              </p>
            </div>
            <div className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 py-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">{imageCount}</div>
                <div className="text-sm font-medium opacity-90">Images</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h4>
                    <div className="flex items-center text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <i className={`${categories.find(cat => cat.id === image.category)?.icon} mr-2`}></i>
                      <span className="capitalize">{image.category.replace('_', ' ')}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand-alt text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <i className="fas fa-images text-6xl text-neutral-400 mb-6"></i>
              <h3 className="text-xl font-bold text-neutral-600 mb-3">No Images Found</h3>
              <p className="text-neutral-500">No images are available in this category at the moment.</p>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleUp" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            
            <div className="relative">
              <LazyImage
                src={modalImage.src}
                alt={modalImage.alt}
                className="w-full max-h-[75vh] object-contain bg-neutral-50"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{modalImage.title}</h3>
                <div className="flex items-center text-white/90">
                  <i className={`${categories.find(cat => cat.id === modalImage.category)?.icon} mr-2`}></i>
                  <span className="capitalize text-lg">{modalImage.category.replace('_', ' ')}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{modalImage.title}</h3>
                  <p className="text-neutral-600 capitalize flex items-center">
                    <i className={`${categories.find(cat => cat.id === modalImage.category)?.icon} mr-2 text-secondary`}></i>
                    {modalImage.category.replace('_', ' ')}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium">
                  <i className="fas fa-eye mr-2"></i>
                  Gallery View
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
