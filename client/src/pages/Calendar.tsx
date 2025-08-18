
import React, { useState } from 'react'
import Tabs, { TabItem } from '@/components/Tabs'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import { Calendar, Download, Eye, Clock, GraduationCap } from 'lucide-react';

const academicYearData = [
    {
        year: "2024-25",
        description: "Current Academic Year - Latest curriculum and updated schedule",
        status: "active",
        semesters: {
            odd: {
                name: "Odd Semester 2024",
                image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
                startDate: "July 2024",
                endDate: "December 2024"
            },
            even: {
                name: "Even Semester 2025",
                image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
                startDate: "January 2025",
                endDate: "June 2025"
            }
        }
    },
    {
        year: "2023-24",
        description: "Previous Academic Year - Reference for past schedules",
        status: "completed",
        semesters: {
            odd: {
                name: "Odd Semester 2023",
                image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
                startDate: "July 2023",
                endDate: "December 2023"
            },
            even: {
                name: "Even Semester 2024",
                image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
                startDate: "January 2024",
                endDate: "June 2024"
            }
        }
    },
    {
        year: "2022-23",
        description: "Academic Year 2022-23 - Archive",
        status: "archive",
        semesters: {
            odd: {
                name: "Odd Semester 2022",
                image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
                startDate: "July 2022",
                endDate: "December 2022"
            },
            even: {
                name: "Even Semester 2023",
                image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
                startDate: "January 2023",
                endDate: "June 2023"
            }
        }
    },
    {
        year: "2021-22",
        description: "Academic Year 2021-22 - Archive",
        status: "archive",
        semesters: {
            odd: {
                name: "Odd Semester 2021",
                image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
                startDate: "July 2021",
                endDate: "December 2021"
            },
            even: {
                name: "Even Semester 2022",
                image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
                startDate: "January 2022",
                endDate: "June 2022"
            }
        }
    }
];

const SemesterCard = ({ semester, type, yearStatus }: { semester: any, type: string, yearStatus: string }) => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    
    const getStatusColor = () => {
        switch (yearStatus) {
            case 'active': return 'from-green-500 to-emerald-600';
            case 'completed': return 'from-blue-500 to-indigo-600';
            case 'archive': return 'from-gray-500 to-slate-600';
            default: return 'from-gray-500 to-slate-600';
        }
    };

    const getTypeIcon = () => {
        return type === 'odd' ? '🌅' : '🌇';
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
            <div className={`h-2 bg-gradient-to-r ${getStatusColor()}`}></div>
            
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{getTypeIcon()}</span>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 capitalize">{type} Semester</h3>
                            <p className="text-sm text-gray-600">{semester.startDate} - {semester.endDate}</p>
                        </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor()}`}>
                        {yearStatus.charAt(0).toUpperCase() + yearStatus.slice(1)}
                    </div>
                </div>

                <div className="relative group/image mb-4">
                    <LazyImage
                        src={semester.image}
                        alt={semester.name}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover/image:scale-105 cursor-pointer"
                        onClick={() => setIsImageModalOpen(true)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex gap-2">
                            <button 
                                onClick={() => setIsImageModalOpen(true)}
                                className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
                                title="View Calendar"
                            >
                                <Eye className="h-5 w-5 text-gray-700" />
                            </button>
                            <button 
                                onClick={() => window.open(semester.image, '_blank')}
                                className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
                                title="Download Calendar"
                            >
                                <Download className="h-5 w-5 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">{semester.name}</span>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setIsImageModalOpen(true)}
                            className="text-primary hover:text-primary-dark transition-colors duration-200 text-sm font-medium flex items-center gap-1"
                        >
                            <Eye className="h-4 w-4" />
                            View
                        </button>
                        <button 
                            onClick={() => window.open(semester.image, '_blank')}
                            className="text-secondary hover:text-secondary-dark transition-colors duration-200 text-sm font-medium flex items-center gap-1"
                        >
                            <Download className="h-4 w-4" />
                            Download
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="relative max-w-4xl max-h-full overflow-auto bg-white rounded-lg">
                        <button 
                            onClick={() => setIsImageModalOpen(false)}
                            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full z-10"
                        >
                            <span className="text-xl">&times;</span>
                        </button>
                        <img 
                            src={semester.image} 
                            alt={semester.name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const tabItems: TabItem[] = academicYearData.map(yearData => ({
    id: yearData.year,
    label: yearData.year,
    iconClass: "fas fa-calendar-alt",
    content: (
        <div className="space-y-8">
            {/* Year Overview */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${
                        yearData.status === 'active' ? 'from-green-100 to-emerald-100' :
                        yearData.status === 'completed' ? 'from-blue-100 to-indigo-100' :
                        'from-gray-100 to-slate-100'
                    }`}>
                        <GraduationCap className={`h-6 w-6 ${
                            yearData.status === 'active' ? 'text-green-600' :
                            yearData.status === 'completed' ? 'text-blue-600' :
                            'text-gray-600'
                        }`} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Academic Year {yearData.year}</h2>
                        <p className="text-gray-600">{yearData.description}</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">Duration: July {yearData.year.split('-')[0]} - June {yearData.year.split('-')[1]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Two Semesters: Odd & Even</span>
                    </div>
                </div>
            </div>

            {/* Semesters Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SemesterCard 
                    semester={yearData.semesters.odd} 
                    type="odd" 
                    yearStatus={yearData.status}
                />
                <SemesterCard 
                    semester={yearData.semesters.even} 
                    type="even" 
                    yearStatus={yearData.status}
                />
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span>📋</span>
                    Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                        onClick={() => {
                            window.open(yearData.semesters.odd.image, '_blank');
                            window.open(yearData.semesters.even.image, '_blank');
                        }}
                        className="flex items-center gap-2 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200"
                    >
                        <Download className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Download Both Calendars</span>
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors duration-200">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary">Add to My Calendar</span>
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Set Reminders</span>
                    </button>
                </div>
            </div>
        </div>
    ),
}));

const CalendarPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Academic Calendar"
                description="Stay updated with our comprehensive academic calendar featuring semester schedules, important dates, and examination timelines."
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
                            Plan your academic journey with our detailed semester calendars. Access current and previous year schedules, important dates, and examination timelines all in one place.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">4+</div>
                                <div className="text-sm text-gray-600">Academic Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">8+</div>
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

            {/* Calendar Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 lg:px-0">
                    <Tabs items={tabItems} />
                </div>
            </section>
            
            <Cta />
            <Footer />
        </div>
    )
}

export default CalendarPage
