import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import { Calendar, Download, Eye } from 'lucide-react';

const academicCalendars = [
    {
        year: "2024-25",
        semester: "Odd Semester 2024",
        image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        status: "active"
    },
    {
        year: "2024-25",
        semester: "Even Semester 2025",
        image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        status: "active"
    },
    {
        year: "2023-24",
        semester: "Odd Semester 2023",
        image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        status: "completed"
    },
    {
        year: "2023-24",
        semester: "Even Semester 2024",
        image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        status: "completed"
    },
    {
        year: "2022-23",
        semester: "Odd Semester 2022",
        image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        status: "archive"
    },
    {
        year: "2022-23",
        semester: "Even Semester 2023",
        image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        status: "archive"
    },
    {
        year: "2021-22",
        semester: "Odd Semester 2021",
        image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        status: "archive"
    },
    {
        year: "2021-22",
        semester: "Even Semester 2022",
        image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        status: "archive"
    }
];

const CalendarPage = () => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedTitle, setSelectedTitle] = useState<string>('');

    const openImageModal = (image: string, title: string) => {
        setSelectedImage(image);
        setSelectedTitle(title);
        setIsImageModalOpen(true);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'from-green-500 to-emerald-600';
            case 'completed': return 'from-blue-500 to-indigo-600';
            case 'archive': return 'from-gray-500 to-slate-600';
            default: return 'from-gray-500 to-slate-600';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'active': return 'Current';
            case 'completed': return 'Completed';
            case 'archive': return 'Archive';
            default: return 'Archive';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Academic Calendar"
                description="View and download our comprehensive academic calendars featuring semester schedules, important dates, and examination timelines."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Academic Calendar', isCurrent: true },
                ]}
            />

            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white rounded-2xl shadow-lg">
                                <Calendar className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Academic Calendar
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Access current and previous year schedules, important dates, and examination timelines.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{Math.ceil(academicCalendars.length / 2)}+</div>
                                <div className="text-sm text-gray-600">Academic Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">{academicCalendars.length}+</div>
                                <div className="text-sm text-gray-600">Semester Calendars</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent">100%</div>
                                <div className="text-sm text-gray-600">Updated Information</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {academicCalendars.map((calendar, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                                <div className={`h-2 bg-gradient-to-r ${getStatusColor(calendar.status)}`}></div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{calendar.semester}</h3>
                                            <p className="text-sm text-gray-600">Academic Year {calendar.year}</p>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(calendar.status)}`}>
                                            {getStatusText(calendar.status)}
                                        </div>
                                    </div>

                                    <div className="relative group/image mb-4">
                                        <LazyImage
                                            src={calendar.image}
                                            alt={calendar.semester}
                                            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover/image:scale-105 cursor-pointer"
                                            onClick={() => openImageModal(calendar.image, calendar.semester)}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                                            <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex gap-2">
                                                <button 
                                                    onClick={() => openImageModal(calendar.image, calendar.semester)}
                                                    className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200"
                                                    title="View Calendar"
                                                >
                                                    <Eye className="h-5 w-5 text-gray-700" />
                                                </button>
                                                <button 
                                                    onClick={() => window.open(calendar.image, '_blank')}
                                                    className="bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200"
                                                    title="Download Calendar"
                                                >
                                                    <Download className="h-5 w-5 text-gray-700" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600 font-medium">Academic Year {calendar.year}</span>
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={() => openImageModal(calendar.image, calendar.semester)}
                                                className="text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium flex items-center gap-1"
                                            >
                                                <Eye className="h-4 w-4" />
                                                View
                                            </button>
                                            <button 
                                                onClick={() => window.open(calendar.image, '_blank')}
                                                className="text-secondary hover:text-secondary-dark transition-colors duration-200 text-sm font-medium flex items-center gap-1"
                                            >
                                                <Download className="h-4 w-4" />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl max-h-full overflow-auto bg-white rounded-lg">
                        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800">{selectedTitle}</h3>
                            <button 
                                onClick={() => setIsImageModalOpen(false)}
                                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                            >
                                <span className="text-xl">&times;</span>
                            </button>
                        </div>
                        <div className="p-4">
                            <img 
                                src={selectedImage} 
                                alt={selectedTitle}
                                className="max-w-full max-h-full object-contain mx-auto"
                            />
                        </div>
                    </div>
                </div>
            )}

            <Cta />
            <Footer />
        </div>
    )
}

export default CalendarPage