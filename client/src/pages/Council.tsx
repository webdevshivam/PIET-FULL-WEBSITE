import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable';

const councilMembersColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Position in GC', key: 'position' },
    { label: 'Nominated By', key: 'nominatedBy' },
    { label: 'Category', key: 'category' },
    { label: 'Name', key: 'name' },
    { label: 'Email ID', key: 'email' }
];

const councilMinutesColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

const councilMembersData = [
    {
        sno: 1,
        position: 'Chairman',
        nominatedBy: 'Society',
        category: 'Entrepreneur/Industrialist/Educationist',
        name: 'Mr Anupam Gupta (Co-Founder Celebal Technologies)',
        email: 'anupam@celebaltech.com'
    },
    {
        sno: 2,
        position: 'Member-1',
        nominatedBy: 'Society',
        category: 'Ex-Officio (Chairman, Poornima)',
        name: 'Sh. Shashikant Singhi',
        email: 'sksinghi@poornima.org'
    },
    {
        sno: 3,
        position: 'Member-2',
        nominatedBy: 'Society',
        category: 'Director, Infrastructure',
        name: 'Sh. Hari Singh Shekhawat',
        email: 'shekhawat_erhs@poornima.org'
    },
    {
        sno: 4,
        position: 'Member-3',
        nominatedBy: 'Society',
        category: 'Director General',
        name: 'Sh. MKM Shah',
        email: 'mkm@poornima.org'
    },
    {
        sno: 5,
        position: 'Member-4',
        nominatedBy: 'Society',
        category: 'Advisor, Poornima Alumni Societies',
        name: 'Ms. Renu Singhi',
        email: 'renusinghi@poornima.org'
    },
    {
        sno: 6,
        position: 'Member-5',
        nominatedBy: 'Society',
        category: 'Director (Alumni & Corporate Relations)',
        name: 'Smt. Dipti Lodha',
        email: 'diptilodha@poornima.org'
    },
    {
        sno: 7,
        position: 'Member-6',
        nominatedBy: 'Society',
        category: 'Director (Admissions)',
        name: 'Dr. Neeraj Jain',
        email: 'neerajj@poornima.org'
    },
    {
        sno: 8,
        position: 'Member-7',
        nominatedBy: 'Society',
        category: 'Director (Student Welfare)',
        name: 'Mr. Ashwini Lata',
        email: 'dsw@poornima.org'
    },
    {
        sno: 9,
        position: 'Member-8',
        nominatedBy: 'Affiliating University',
        category: 'Ex-Officio',
        name: 'Prof (Dr.) Dheeraj Palwalia',
        email: 'dheerajpalwalia@gmail.com'
    },
    {
        sno: 10,
        position: 'Member-9',
        nominatedBy: 'AICTE',
        category: 'Ex-Officio',
        name: 'Request forwarded via speed post',
        email: '---'
    },
    {
        sno: 11,
        position: 'Member-10',
        nominatedBy: 'State Government',
        category: 'Ex-Officio',
        name: 'Request forwarded via speed post',
        email: '---'
    },
    {
        sno: 12,
        position: 'Member-11',
        nominatedBy: 'State Government',
        category: 'Educationalist from NIT',
        name: 'Prof. Gunwant Sharma, HOD Civil Engineering, MNIT Jaipur',
        email: 'gunwantsharma2010@gmail.com'
    },
    {
        sno: 13,
        position: 'Member Secretary',
        nominatedBy: 'Institute',
        category: 'Principal & Director',
        name: 'Dr. Dinesh Goyal',
        email: 'principal.piet@poornima.org'
    },
    {
        sno: 14,
        position: 'Member-12',
        nominatedBy: 'Institute',
        category: 'Registrar',
        name: 'Dr. Gautam Singh',
        email: 'registrar.piet@poornima.org'
    },
    {
        sno: 15,
        position: 'Member-13',
        nominatedBy: 'Institute',
        category: 'Professor (Convener IQAC)',
        name: 'Dr. Mukesh Chandra',
        email: 'iqac.piet@poornima.org'
    },
    {
        sno: 16,
        position: 'Member-14',
        nominatedBy: 'Institute',
        category: 'Professor (Academic Representation)',
        name: 'Dr. Sama Jain',
        email: 'samajain@poornima.org'
    },
    {
        sno: 17,
        position: 'Member-15 (Additional)',
        nominatedBy: 'Expert',
        category: 'Alumni/Industry Expert of CS/IT',
        name: 'Sonu Bala, COO, W3 Care Technologies',
        email: 'sonu@w3care.com'
    },
    {
        sno: 18,
        position: 'Member-16 (Additional)',
        nominatedBy: 'Expert',
        category: 'Alumni/Industry Expert of Civil',
        name: 'Mr. Sumit Sharma, CEO, The Horizon Architecture',
        email: 'sksharma2050@gmail.com'
    },
    {
        sno: 19,
        position: 'Member-17 (Additional)',
        nominatedBy: 'Expert',
        category: 'Alumni/Industry Expert of Emerging Tech',
        name: 'Mr. Khushal Gupta, QA Specialist, Hornblower Group',
        email: 'khushal.dec@gmail.com'
    },
    {
        sno: 20,
        position: 'Member-18 (Additional)',
        nominatedBy: 'Expert',
        category: 'Alumni/Industry Expert of ECE/EE',
        name: 'Mr. Arun Kumar, SINCGRID',
        email: 'arun@sincgrid.com'
    },
    {
        sno: 21,
        position: 'Member-19 (Additional)',
        nominatedBy: 'Expert',
        category: 'Alumni/Industry Expert of HR',
        name: 'Mr. Manoj Papapersia, CEO, Softserva',
        email: 'manoj@softserv.in'
    },
    {
        sno: 22,
        position: 'Member-20 (Additional)',
        nominatedBy: 'Society',
        category: 'Special Invitee',
        name: 'Ar. Rahul Singhi, Director, Poornima Group',
        email: 'rahulsinghi@poornima.org'
    },
    {
        sno: 23,
        position: 'Member-21 (Additional)',
        nominatedBy: 'Society',
        category: 'Special Invitee',
        name: 'Mr. Jai Sharma',
        email: 'jaisharma@poornima.org'
    },
    {
        sno: 24,
        position: 'Member-22',
        nominatedBy: 'Institution',
        category: 'Student Council Chair',
        name: 'Ms. Saloni Mittal',
        email: '2021pietcssaloni152@poornima.org'
    }
];

const councilMinutesData = [
    {
        sno: 1,
        name: '16th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/16th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: '15th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/15th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: '14th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/14th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: '13th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/13th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: '12th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/12th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: '11th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/11th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 7,
        name: '10th GC Minutes Of Meeting',
        download: (
            <a href="/downloads/10th-gc-minutes.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];

const GoverningCouncil = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="Governing Council"
                description="Meet the distinguished members and access minutes of the Governing Council of Poornima Institute."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Governing Council', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Governing Council Members</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={councilMembersColumns} data={councilMembersData} />

                <h2 className="text-3xl text-primary font-bold mt-16 mb-8 text-center">Minutes of Meetings</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={councilMinutesColumns} data={councilMinutesData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default GoverningCouncil;
