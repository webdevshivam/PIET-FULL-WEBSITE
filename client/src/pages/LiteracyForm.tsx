import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';

const members = [
    { sno: 1, name: 'Dr. Dinesh Goyal', designation: 'Chairman' },
    { sno: 2, name: 'Dr. Gautam Singh', designation: 'Registrar' },
    { sno: 3, name: 'Mr. Ashok Kumar', designation: 'Faculty Coordinator' },
    { sno: 4, name: 'Mr. Yash Bhatia', designation: 'Student Coordinator' },
    { sno: 5, name: 'Mr. Sachin Sharma', designation: 'Student Member' },
    { sno: 6, name: 'Mr. Lakshay Tanwani', designation: 'Student Member' },
    { sno: 7, name: 'Ms. Gargi Tanwar', designation: 'Student Member' },
];

const activities = [
    {
        no: 1,
        name: 'Voter Registration Drive',
        date: '16/09/21',
        description: 'Organized a voter registration drive to encourage registration for upcoming elections.',
    },
    {
        no: 2,
        name: 'Electoral Literacy Session',
        date: '21/10/21',
        description: 'Workshop on the electoral process, voting rights, and civic engagement.',
    },
    {
        no: 3,
        name: 'Constitution Day',
        date: '26/11/21',
        description: 'Mock election to simulate voting and ballot procedures.',
    },
    {
        no: 4,
        name: 'Nukkad Natak',
        date: '26/01/22',
        description: 'Street play to promote electoral literacy in society.',
    },
    {
        no: 5,
        name: 'Election Awareness Campaign',
        date: '15/09/22',
        description: 'Awareness campaign to promote voter turnout in upcoming elections.',
    },
    {
        no: 6,
        name: 'Constitution Day',
        date: '26/11/22',
        description: 'Oath-taking ceremony to mark Constitution Day.',
    },
    {
        no: 7,
        name: 'Nukkad Natak',
        date: '15/08/23',
        description: 'Street play to promote electoral literacy in society.',
    },
    {
        no: 8,
        name: 'Constitution Day',
        date: '26/11/23',
        description: 'Educational session on constitutional values and voting rights.',
    },
    {
        no: 9,
        name: 'Poster Making Competition',
        date: '26/01/24',
        description: 'Students participated to spread awareness on voting rights.',
    },
    {
        no: 10,
        name: 'Mera Pehla Vote Desh Ke Liye',
        date: '06/03/24',
        description: 'Provided comprehensive information on the electoral process.',
    },
];

const LiteracyForum = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="Electoral Literacy Forum"
                description="Promoting responsible citizenship through electoral awareness and participation at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Electoral Literacy Forum', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-10">
                <h2 className="text-3xl text-primary font-bold mb-6 text-center">Preamble</h2>
                <p className="text-center text-gray-700 mb-10 max-w-4xl mx-auto">
                    We, the students and faculty of Poornima Institute of Engineering and Technology,
                    recognizing the importance of electoral literacy in fostering responsible citizenship
                    and participatory democracy, hereby establish the Poornima Electoral Literacy Forum (PELF)
                    to promote awareness, education, and engagement in the electoral process among our community.
                </p>

                <h2 className="text-3xl text-primary font-bold mb-4 text-center">Constitution Members</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {members.map((member) => (
                        <div
                            key={member.sno}
                            className="bg-white shadow-md p-6 rounded-xl border-l-4 border-primary transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.designation}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl text-primary font-bold mb-4 text-center">Activities</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {activities.map((activity) => (
                        <div
                            key={activity.no}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h4 className="text-xl font-semibold text-secondary mb-2">{activity.name}</h4>
                            <p className="text-sm text-gray-500 mb-1">
                                <strong>Date:</strong> {activity.date}
                            </p>
                            <p className="text-gray-700">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default LiteracyForum;
