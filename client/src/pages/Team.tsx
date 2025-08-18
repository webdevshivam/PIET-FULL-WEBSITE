import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const gcColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Branch/Depatment', key: 'department' },
    { label: 'Designation', key: 'designation' },
    { label: 'Mobile No.', key: 'mobileNo' },
];
const gcData = [

    {
        sno: 1,
        name: 'Dr. Dinesh Goyal',
        department: 'Management',
        designation: 'Director (PIET)',
        mobileNo: '9887678379',
    },
    {
        sno: 2,
        name: 'Dr. Balwan',
        department: 'Admin',
        designation: 'Registrar (PIET)',
        mobileNo: '9001893262',
    },
    {
        sno: 3,
        name: 'Dr. Nitin Mukesh Mathur',
        department: 'Exam',
        designation: 'Controller of Examination',
        mobileNo: '9694729323',
    },
    {
        sno: 4,
        name: 'Dr. Anil Kumar',
        department: 'CSE',
        designation: 'HoD',
        mobileNo: '99896017351',
    },
    {
        sno: 5,
        name: 'Dr. Budesh Kanwer',
        department: 'AI & DS',
        designation: 'HoD',
        mobileNo: '99460503316',
    },
    {
        sno: 6,
        name: 'Dr. Sama Jain',
        department: 'Applied Sciences',
        designation: 'HoD',
        mobileNo: '9414351634',
    },
    {
        sno: 7,
        name: 'Dr. Payal Bansal',
        department: 'CS (IOT)',
        designation: 'HoD',
        mobileNo: '9785487195',
    },
    {
        sno: 8,
        name: 'Mr. Mukul Nama',
        department: 'Civil',
        designation: 'HoD',
        mobileNo: '9784032091',
    },
    {
        sno: 9,
        name: 'Mr. Ashok Kumar',
        department: 'Admin',
        designation: 'Proctor & Advisor Student Council',
        mobileNo: '9460422437',
    },
    {
        sno: 10,
        name: 'Ms. Shikha Gautam',
        department: 'CSE',
        designation: 'Dy.HoD Academic',
        mobileNo: '8003863442',
    },
    {
        sno: 11,
        name: 'Mr. Abhishek Dadhich',
        department: 'CSE',
        designation: 'Dy.HoD Admin',
        mobileNo: '9001571710',
    },
    {
        sno: 12,
        name: 'Ms. Alka Rani',
        department: 'CAI & DS',
        designation: 'Dy.HoD Academic',
        mobileNo: '9660555466',
    },
    {
        sno: 13,
        name: 'Dr. Payal Bansal',
        department: 'CS (IOT)',
        designation: 'HoD',
        mobileNo: '9785487195',
    },
    {
        sno: 14,
        name: 'Dr. Payal Bansal',
        department: 'CS (IOT)',
        designation: 'HoD',
        mobileNo: '9785487195',
    },
    {
        sno: 15,
        name: 'Dr. Uday Pratap Singh',
        department: 'AI & DS',
        designation: 'Dy.HoD Admin',
        mobileNo: '6394235053',
    },
    {
        sno: 16,
        name: 'Dr. Bhanu Pratap',
        department: 'Applied Sciences',
        designation: 'Dy.HoD Academic',
        mobileNo: '8118874724',
    },
    {
        sno: 17,
        name: 'Dr. Mukesh Chandra',
        department: 'Coordinator',
        designation: 'IQAC, QIV and Website',
        mobileNo: '9897195374',
    },
    {
        sno: 18,
        name: 'Dr. Priya Mathur',
        department: 'Coordinator',
        designation: 'Institute Innovation Cell (Alumni Relations, PBIC & IPR)',
        mobileNo: '7790974955',
    },
    {
        sno: 19,
        name: 'Dr. Krati Sharma',
        department: 'Coordinator',
        designation: 'Universal Human Values',
        mobileNo: '8305750628',
    },
    {
        sno: 20,
        name: 'Dr. Sonia Kaur Bansal',
        department: 'Coordinator',
        designation: 'National Education Policy 2020',
        mobileNo: '9829156512',
    },
    {
        sno: 21,
        name: 'Dr. Amit Shrivastava',
        department: 'Coordinator',
        designation: 'Ratings & Rankings',
        mobileNo: '9314860660',
    },
    {
        sno: 22,
        name: 'Dr. Shruti Thapar',
        department: 'Coordinator',
        designation: 'Research & Development Coordinator',
        mobileNo: '9602211879',
    },
    {
        sno: 23,
        name: 'Dr. Rekha Rani Agarwal',
        department: 'Coordinator',
        designation: 'OBE Coordinator',
        mobileNo: '9414030450',
    },
    {
        sno: 24,
        name: 'Dr. Ajay Maurya',
        department: 'Coordinator',
        designation: 'Industry Institute Interaction Coordinator',
        mobileNo: '9314528543',
    },
    {
        sno: 25,
        name: 'Dr. Nupur Jain',
        department: 'Coordinator',
        designation: 'NSS',
        mobileNo: '8290066224',
    },
    {
        sno: 26,
        name: 'Garima Kachhara',
        department: 'Coordinator',
        designation: 'SPIC MACAY',
        mobileNo: '9828501324'
    }


];
const Team = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Management Team"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Management Team', isCurrent: true
                    },
                ]}
            />
            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Management Team

                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={gcColumns} data={gcData} />

            </div>


            <Cta />
            <Footer />
        </div>
    )
}

export default Team
