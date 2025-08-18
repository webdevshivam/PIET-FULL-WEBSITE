import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

const conferenceColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Title of the proceedings of the conference', key: 'title' },
    { label: 'Name of the conference', key: 'name' },
    { label: 'Date of Conference', key: 'date' },
    { label: 'National / International', key: 'type' },
    { label: 'Year of publication', key: 'year' },
    { label: 'Link to Proceedings', key: 'link' }
];

const conferenceData = [
    { sno: 1, title: 'International Conference on Smart Innovations for Society', name: 'ICSIS- 2024', date: '24-25 April 2024', type: 'International', year: '2024', link: 'ICSIS-2024 (IJTE)' },
    { sno: 2, title: 'International Conference on Intelligent Systems & Computing', name: 'ICISC- 2024', date: '24-25 April 2024', type: 'International', year: '2024', link: 'ICISC- 2024 (IJTE)' },
    { sno: 3, title: 'International Conference on Recent Advances in Artificial intelligence, Computer Vision & Smart Systems', name: 'ICRACS 2024', date: '24-25 April 2024', type: 'International', year: '2024', link: 'ICRACS 2024 (IJTE)' },
    { sno: 4, title: 'International Conference on Information Management and Machine Intelligence', name: 'ICIMMI 2023', date: '14-16 December 2023', type: 'International', year: '2023', link: 'ICIMMI 2023 (ACM-NY)' },
    { sno: 5, title: 'International Conference on Mathematics, Modeling and Statistics', name: 'ICMMS 2023', date: '1-2 September 2023', type: 'International', year: '2023', link: 'ICMMS-2023 (Taru Publication)' },
    { sno: 6, title: 'International Conference on Research Trends of ICT Using Digital Libraries with Human Values & Ethics', name: 'ICIDLHV 2023', date: '10-11 February 2023', type: 'International', year: '2023', link: 'ICIDLHV 2023 (STM Publication)' },
    { sno: 7, title: 'International Conference on Information Management and Machine Intelligence', name: 'ICIMMI 2022', date: '23-24 December 2022', type: 'International', year: '2023', link: 'ICIMMI 2022 (ACM NY)' },
    { sno: 8, title: 'International Conference on Smart Innovations for Society', name: 'ICSIS 2022', date: '6-7 May 2022', type: 'International', year: '2023', link: 'ICSIS 2022 (AIP Proceeding)' },
    { sno: 9, title: 'International Conference on Intelligent Systems and Computation', name: 'ICISC 2022', date: '6-7 May 2022', type: 'International', year: '2023', link: 'ICISC-2022 (AIP Proceeding)' },
    { sno: 10, title: 'International Conference on Information Management and Machine Intelligence', name: 'ICIMMI-2021', date: '23-24 December 2021', type: 'International', year: '2022', link: 'ICIMMI-2021 (Springer Nature)' },
    { sno: 11, title: 'International Conference on Post-Covid Challenges on Life and Livelihood', name: 'ICPCC 2021', date: '5-6 March 2021', type: 'International', year: '2021', link: 'ICPCC 2021 (STM Publication)' },
    { sno: 12, title: 'International Conference on Smart Innovations for Society 2021', name: 'ICSIS 2021', date: '20-21 August 2021', type: 'International', year: '2021', link: 'ICSIS 2021 (ECS Transactions)' },
    { sno: 13, title: 'International Conference on Intelligent System & Computation 2021', name: 'ICISC 2021', date: '20-21 August 2021', type: 'International', year: '2021', link: 'IISC 2021 (ECS Transactions)' },
    { sno: 14, title: 'International Conference on Information Management and Machine Intelligence', name: 'ICIMMI-2020', date: '24-25 July 2020', type: 'International', year: '2021', link: 'ICIMMI-2020 (Springer Nature)' },
    { sno: 15, title: 'Proceedings of Second International Conference on Smart Energy and Communication', name: 'ICSEC-2020', date: '20-21 March 2020', type: 'International', year: '2020', link: 'ICSEC-2020 (Springer Nature)' },
    { sno: 16, title: 'International Conference on Smart Innovations for Society 2020', name: 'ICSIS 2020', date: '20-21 March 2020', type: 'International', year: '2020', link: 'ICSIS 2020' },
    { sno: 17, title: 'International Conference on Intelligent Systems & Computation 2020', name: 'ICISC 2020', date: '20-21 March 2020', type: 'International', year: '2020', link: 'ICISC 2020' },
    { sno: 18, title: 'Information Management and Machine Intelligence: Proceedings of ICIMMI', name: 'ICIMMI-2019', date: '14-15 December 2019', type: 'International', year: '2020', link: 'ICIMMI-2019 (Springer Nature)' },
    { sno: 19, title: 'International Conference on Smart Innovations for Society 2019', name: 'ICSIS 2019', date: '6-7 April 2019', type: 'International', year: '2019', link: 'ICSIS 2019 (JETIR)' },
    { sno: 20, title: 'International Conference on Smart Computation and Technology', name: 'ICSCT 2019', date: '6-7 April 2019', type: 'International', year: '2019', link: 'ICSCT 2019 (UGC Care)' },
    { sno: 21, title: 'International Conference on Smart infrastructure and Environment', name: 'ICSIE 2019', date: '6-7 April 2019', type: 'International', year: '2019', link: 'ICSIE 2019 (UGC Care)' },
    { sno: 22, title: 'International Conference on Smart Energy and Communication', name: 'ICSEC 2019', date: '6-7 April 2019', type: 'International', year: '2019', link: 'ICSEC 2019 (UGC Care)' }
];

const Conferences = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Conferences Organised"
                description="Explore the various national and international conferences organized at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Conferences', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Conferences Organised
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={conferenceColumns} data={conferenceData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Conferences;
