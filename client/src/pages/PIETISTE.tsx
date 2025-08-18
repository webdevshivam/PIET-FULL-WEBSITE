import React from 'react';
import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import InfoCard from '@/components/InfoCard';
import Checklist from '@/components/Checklist';
import DynamicTable from '@/components/DynamicTable ';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const objectives = [
    'Outline the overall objectives and duties of technical education.',
    'Utilize the expertise of Engineering Sciences to benefit society.',
    'Cultivate proficient educators and educational leaders.',
    'Enhance instructional techniques, practices, and administrative procedures.',
    'Elevate professional values and benchmarks.',
    'Establish strong connections between technical institutions, industry, and society.',
    'Recognize individuals with honorary fellowships, awards, and prizes for advancing the goals of Technical Education.'
];

const features = [
    'Lifetime membership for faculty; 4-year membership for students.',
    'Over 800 student members and 15 faculty members.',
    'Events include inter-departmental competitions, quizzes, and guest lectures.',
    'Programs for report writing, project management, and ethics.',
    'Guest lectures from industry, R&D, and defense sectors.',
    'Encourages brainstorming, group activities, and skill building.'
];

const activities = [
    'Departments manage their ISTE activities independently.',
    'Ensure events do not disrupt academics.',
    'Plan invitations, refreshments, and photography.',
    'Submit event report, selected photos, and share with ISTE coordinator and secretary.',
    'ISTE banner should be handled with care and returned post-event.'
];

const financial = [
    'No external ISTE permission required for internal events.',
    'Financial support comes from ISTE PIET account.',
    'Covers guest remuneration, TA, mementos, refreshments, certificates, etc.',
    'FDPs sponsored by ISTE New Delhi follow separate procedure.'
];

const studentTable = [
    { sno: 1, reg: 'PIET21CS506', name: 'Chiya Jamwal', phone: '9103225456', role: 'Chair Person' },
    { sno: 2, reg: 'PIET21CS110', name: 'Narendra Kumar', phone: '7023826876', role: 'Treasurer' },
    { sno: 3, reg: 'PIET22CS502', name: 'Chahat Gupta', phone: '8825009085', role: 'Secretary' },
    { sno: 4, reg: 'PIET23CS015', name: 'Anag Agarwal', phone: '6005200192', role: 'Executive Committee Member' },
    { sno: 5, reg: 'PIET23CS065', name: 'Harsh Khandelwal', phone: '7357745972', role: 'Executive Committee Member' },
    { sno: 6, reg: 'PIET23CS136', name: 'Rishab Jain', phone: '9214805770', role: 'Executive Committee Member' },
    { sno: 7, reg: 'PIET23AD050', name: 'Rudraksh Garg', phone: '7597714387', role: 'Executive Committee Member' },
    { sno: 8, reg: 'PIET23CR020', name: 'Gargi Sharma', phone: '8955325419', role: 'Executive Committee Member' },
    { sno: 9, reg: 'PIET23CI031', name: 'Keshav Kumar Sharma', phone: '8619819682', role: 'Executive Committee Member' },
];

const facultyTable = [
    { sno: 1, dept: 'Applied Sciences', name: 'Dr. Gaurtam Singh', phone: '9001893262', role: 'Chairman' },
    { sno: 2, dept: 'Applied Sciences', name: 'Dr. Mukesh Chandra', phone: '9897195374', role: 'Secretary' },
    { sno: 3, dept: 'Applied Sciences', name: 'Dr. Sama Jain', phone: '9414321634', role: 'Faculty Advisor' },
    { sno: 4, dept: 'Applied Sciences', name: 'Dr. Bhanu Pratap', phone: '8118874724', role: 'Faculty Coordinator' },
    { sno: 5, dept: 'AI&DS', name: 'Dr. Uday Pratap', phone: '6394235053', role: 'Faculty Coordinator' },
    { sno: 6, dept: 'AI&DS', name: 'Dr. Budesh Kanwar', phone: '9460503316', role: 'Faculty Coordinator' },
    { sno: 7, dept: 'CSE', name: 'Dr. Anil Kumar', phone: '9896017351', role: 'Faculty Coordinator' },
    { sno: 8, dept: 'CSE', name: 'Mr. Dinesh Bhatia', phone: '9828153460', role: 'Faculty Coordinator' },
    { sno: 9, dept: 'CSE', name: 'Mr. Vivek Saxena', phone: '7568555557', role: 'Faculty Coordinator' },
];

const PIETISTE = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - ISTE"
                description="Empowering technical education through innovation and collaboration."
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'PIET - ISTE', isCurrent: true }]}
            />

            {/* 🖼️ Banner Image */}
            <div className="w-full bg-gray-100 py-6">
                <div className="container mx-auto px-4">
                    <img
                        src="https://www.piet.poornima.org/images/labs/AI-lab.jpeg"
                        alt="PIET ISTE Activities"
                        className="rounded-lg shadow-lg w-full object-cover h-[400px]"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2 italic">
                        Empowering Engineers Through ISTE at PIET – Since 2010
                    </p>
                </div>
            </div>

            {/* Info Cards */}
            <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <InfoCard title="Overview" iconClass="fas fa-info-circle" content="The Indian Society for Technical Education (ISTE) is India’s leading national professional society for technical education, supporting faculty growth and student development." />
                <InfoCard title="About ISTE" iconClass="fas fa-users" content="Formed in 1968, ISTE is a non-profit society registered under the Societies Registration Act. It aims to elevate technical education standards and connect institutions with industry." />
                <InfoCard title="Vision & Mission" iconClass="fas fa-lightbulb" content="Vision: Empower educators through technology.\nMission: Accelerate innovation in education through ISTE standards and global community." />
                <InfoCard title="Aims & Objectives" iconClass="fas fa-bullseye" content={<Checklist items={objectives} />} />
                <InfoCard title="ISTE at PIET" iconClass="fas fa-school" content={<Checklist items={features} />} />
                <InfoCard title="Activities at PIET" iconClass="fas fa-calendar-check" content={<Checklist items={activities} />} />
                <InfoCard title="Financial Support" iconClass="fas fa-rupee-sign" content={<Checklist items={financial} />} />
                <InfoCard title="Faculty Chapter Note" iconClass="fas fa-chalkboard-teacher" content="FDPs sponsored by ISTE follow strict approval norms, while internal activities are department-led and funded by the PIET ISTE account." />
            </div>

            {/* Student Table */}
            <div className="container mx-auto mt-10">
                <h2 className="text-3xl text-primary font-bold text-center mb-6">Office Bearers - ISTE Student Chapter</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={[
                        { label: 'S. No', key: 'sno' },
                        { label: 'Registration No.', key: 'reg' },
                        { label: 'Name', key: 'name' },
                        { label: 'Phone No.', key: 'phone' },
                        { label: 'Designation', key: 'role' },
                    ]}
                    data={studentTable}
                />
            </div>

            {/* Faculty Table */}
            <div className="container mx-auto mt-10">
                <h2 className="text-3xl text-primary font-bold text-center mb-6">Faculty Coordinators - ISTE Student Chapter</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={[
                        { label: 'S. No', key: 'sno' },
                        { label: 'Department', key: 'dept' },
                        { label: 'Name', key: 'name' },
                        { label: 'Phone No.', key: 'phone' },
                        { label: 'Designation', key: 'role' },
                    ]}
                    data={facultyTable}
                />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default PIETISTE;