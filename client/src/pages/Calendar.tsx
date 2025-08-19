
import React, { useState } from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import { Calendar, Download } from 'lucide-react';

const academicCalendars = [
    {
        year: "2024-25",
        oddSemester: {
            title: "Odd Semester 2024",
            image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        },
        evenSemester: {
            title: "Even Semester 2025",
            image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        },
        status: "active"
    },
    {
        year: "2023-24",
        oddSemester: {
            title: "Odd Semester 2023",
            image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        },
        evenSemester: {
            title: "Even Semester 2024",
            image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        },
        status: "completed"
    },
    {
        year: "2022-23",
        oddSemester: {
            title: "Odd Semester 2022",
            image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        },
        evenSemester: {
            title: "Even Semester 2023",
            image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        },
        status: "archive"
    },
    {
        year: "2021-22",
        oddSemester: {
            title: "Odd Semester 2021",
            image: "https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg",
        },
        evenSemester: {
            title: "Even Semester 2022",
            image: "https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg",
        },
        status: "archive"
    }
];

const CalendarPage = () => {
    const [activeYear, setActiveYear] = useState(academicCalendars[0].year);

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

    const activeCalendar = academicCalendars.find(cal => cal.year === activeYear);

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
                                <div className="text-2xl font-bold text-primary">{academicCalendars.length}+</div>
                                <div className="text-sm text-gray-600">Academic Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secondary">{academicCalendars.length * 2}+</div>
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

            {/* Year Tabs */}
            <section className="py-8">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {academicCalendars.map((calendar) => (
                            <button
                                key={calendar.year}
                                onClick={() => setActiveYear(calendar.year)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    activeYear === calendar.year
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                <span>{calendar.year}</span>
                                <div className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getStatusColor(calendar.status)}`}>
                                    {getStatusText(calendar.status)}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Calendar Content */}
                    {activeCalendar && (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className={`h-2 bg-gradient-to-r ${getStatusColor(activeCalendar.status)}`}></div>
                            
                            <div className="p-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                        Academic Year {activeCalendar.year}
                                    </h2>
                                    <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getStatusColor(activeCalendar.status)}`}>
                                        {getStatusText(activeCalendar.status)} Academic Year
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Odd Semester */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {activeCalendar.oddSemester.title}
                                            </h3>
                                            <button 
                                                onClick={() => window.open(activeCalendar.oddSemester.image, '_blank')}
                                                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                                title="Download Odd Semester Calendar"
                                            >
                                                <Download className="h-4 w-4" />
                                                Download
                                            </button>
                                        </div>
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <LazyImage
                                                src={activeCalendar.oddSemester.image}
                                                alt={activeCalendar.oddSemester.title}
                                                className="w-full h-auto rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>

                                    {/* Even Semester */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {activeCalendar.evenSemester.title}
                                            </h3>
                                            <button 
                                                onClick={() => window.open(activeCalendar.evenSemester.image, '_blank')}
                                                className="flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                                title="Download Even Semester Calendar"
                                            >
                                                <Download className="h-4 w-4" />
                                                Download
                                            </button>
                                        </div>
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <LazyImage
                                                src={activeCalendar.evenSemester.image}
                                                alt={activeCalendar.evenSemester.title}
                                                className="w-full h-auto rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Year Summary */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        Academic Year {activeCalendar.year} Summary
                                    </h4>
                                    <p className="text-gray-600">
                                        Complete academic calendar showing all important dates, examination schedules, 
                                        holidays, and semester timelines for both odd and even semesters.
                                    </p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                                            <span className="text-sm text-gray-700">Odd Semester</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                                            <span className="text-sm text-gray-700">Even Semester</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getStatusColor(activeCalendar.status)}`}></div>
                                            <span className="text-sm text-gray-700">{getStatusText(activeCalendar.status)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    )
}

export default CalendarPage
