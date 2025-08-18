import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

const Card = ({ iconClass, title, description, color }) => (
    <div className={`bg-white shadow-md border-2 border-primary border-l-8  rounded-xl p-8 flex flex-col items-start transition hover:scale-[1.02] duration-300 min-h-[250px]`}>
        <div className="text-5xl text-secondary mb-4">
            <i className={`fas ${iconClass}`}></i>
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 text-base whitespace-pre-line">{description}</p>
    </div>
);

const HostelFacilities = () => {
    const hostels = [
        { name: 'Gayatri Girls Hostel', type: 'Girls', capacity: 1100 },
        { name: 'Aravali Boys Hostel', type: 'Boys', capacity: 1900 },
        { name: 'Gurushikhar Boys Hostel', type: 'Boys', capacity: null },
        { name: 'Gargi Girls Hostel', type: 'Girls', capacity: null },
        { name: 'Himalaya Boys Hostel', type: 'Boys', capacity: null },
    ];

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Hostel Facilities"
                description="Explore student and faculty hostel life at Poornima."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Hostel', isCurrent: true },
                ]}
            />

            <div className="container mx-auto py-10 px-4">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <Card
                        iconClass="fa-house-user"
                        title="Poornima Hostels Overview"
                        description={`Poornima hostels are a home away from home. They provide opportunities for students’ personal growth, social interaction, and leadership development through well-organized activities under faculty coordination.`}
                        color="border-yellow-400"
                    />
                    <Card
                        iconClass="fa-people-group"
                        title="Life at Hostels"
                        description={`Hostel life at Poornima fosters independence, mutual cooperation, and holistic development. It inspires students to be active, responsible, and socially connected.`}
                        color="border-green-500"
                    />
                    <Card
                        iconClass="fa-utensils"
                        title="Basic & Dining Facilities"
                        description={`Spacious semi-furnished rooms, 4 vegetarian meals/day, hygienic mess, self-service, student-involved menu planning, and a canteen with healthy snacks.`}
                        color="border-pink-500"
                    />
                    <Card
                        iconClass="fa-heart-pulse"
                        title="Recreation & Healthcare"
                        description={`Open grounds, indoor games (Chess, TT, Carrom, Pool), gym, medical assistance, and proximity to Mahatma Gandhi hospital for emergencies.`}
                        color="border-purple-500"
                    />
                </div>

                {/* Students & Alumni Section */}
                <div className="my-16 p-8 bg-blue-50 rounded-xl border-2 border-blue-900 shadow-md">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-users text-secondary mr-3"></i>
                        Students & Alumni of Poornima Group
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Active alumni network across industries</li>
                            <li>Frequent alumni meetups and mentorships</li>
                            <li>Cross-campus collaboration and engagement</li>
                            <li>Strong student council and clubs</li>
                            <li>Leadership through event organization</li>
                        </ul>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Participation in inter-college fests</li>
                            <li>Cultural, technical, and sports activities</li>
                            <li>Peer learning and skill development</li>
                            <li>Volunteering and social impact initiatives</li>
                            <li>Guidance from alumni in top companies</li>
                        </ul>
                    </div>
                </div>

                {/* Faculty & Staff Accommodation Section */}
                <div className="bg-white border-2 border-blue-900 rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6 text-secondary text-5xl">
                        <i className="fas fa-building-user mr-4"></i>
                        <h2 className="text-3xl font-bold text-primary">Accommodation for Faculty & Staff</h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        Affordable and comfortable living arrangements are provided for Poornima faculty & staff to encourage a strong academic community.
                    </p>

                    <h3 className="text-2xl text-primary font-semibold mb-3 mt-6 flex items-center">
                        <i className="fas fa-hotel text-secondary mr-3" />
                        Hostel Details
                    </h3>

                    <div className="overflow-x-auto rounded-lg border border-blue-900 mt-4">
                        <table className="w-full text-left table-auto">
                            <thead className="bg-blue-100 text-blue-900">
                                <tr>
                                    <th className="py-3 px-4">Hostel Name</th>
                                    <th className="py-3 px-4">Type</th>
                                    <th className="py-3 px-4">Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hostels.map((hostel, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="py-3 px-4">{hostel.name}</td>
                                        <td className="py-3 px-4">{hostel.type}</td>
                                        <td className="py-3 px-4">
                                            {hostel.capacity ? hostel.capacity : 'N/A'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>

                <h3 className="text-2xl text-primary font-semibold mb-3 mt-10 flex items-center">
                    <i className="fas fa-file-alt text-secondary mr-3" />
                    Important Documents
                </h3>

                <div className="overflow-x-auto rounded-lg border border-blue-900 mt-4">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-blue-100 text-blue-900">
                            <tr>
                                <th className="py-3 px-4">S. No.</th>
                                <th className="py-3 px-4">Document</th>
                                <th className="py-3 px-4">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { no: 1, title: 'Hostel Form Student', file: '#' },
                                { no: 2, title: 'Employee Accommodation Form', file: '#' },
                                { no: 3, title: 'General Requirements of new hosteller', file: '#' },
                                { no: 4, title: 'Fee Structure', file: '#' },
                            ].map((doc, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-3 px-4">{doc.no}</td>
                                    <td className="py-3 px-4">{doc.title}</td>
                                    <td className="py-3 px-4 text-blue-600 hover:underline">
                                        <a href={doc.file} target="_blank" rel="noopener noreferrer">
                                            Download
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default HostelFacilities;
