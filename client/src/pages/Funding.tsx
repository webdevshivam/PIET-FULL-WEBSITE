import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

const fundingColumns = [
    { label: 'Name of the research project/ endowment', key: 'project' },
    { label: 'Year of Sanction', key: 'year' },
    { label: 'Sanction Amount (in Lakhs)', key: 'amount' },
    { label: 'Duration', key: 'duration' },
    { label: 'Funding Agency', key: 'agency' },
    { label: 'Category', key: 'category' }
];

const fundingData = [
    { project: 'Scientific Tools in Research Methodology', year: '2018-19', amount: '2.0', duration: '1 Year', agency: 'RTU (ATU)/ TEQIP-III/F (56)/ 2018-19/ 1625-47', category: 'Government' },
    { project: 'National/International Conference under RTU (ATU)', year: '2018-19', amount: '4.7', duration: '1 year', agency: 'RTU (ATU)/ TEQIP-III/F (56)/ 2018-19/ 2202-2207', category: 'Government' },
    { project: ".Secure Cloud Computing & it's real life application", year: '2018-19', amount: '3.0', duration: '1 year', agency: 'RTU (ATU) TEQIP-IIIRTU (ATU)/ TEQIP-III/F(56)/ 2018-19/ 1625-47', category: 'Government' },
    { project: 'Design, Development and fabrication of solar converter for 2KW of SPV system', year: '2019-20', amount: '2.4', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/32', category: 'Government' },
    { project: 'Modeling Sediment yield form the Indian Watershed', year: '2019-20', amount: '2.4', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/09', category: 'Government' },
    { project: 'Feasibility, Evaluation of Urban Growth Prospects in satellite Town: solution for urban growth of jaipur', year: '2019-20', amount: '2.4', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/08', category: 'Government' },
    { project: 'Cloud Based Model for Analysis and sharing Health Information of patients Across various Hospitals using Machine Learning', year: '2019-20', amount: '2.4', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/15', category: 'Government' },
    { project: 'Design, Analysis and Implementation of smart Voice Operated Geekboat for handling social, Technical & general Issues', year: '2019-20', amount: '2.4', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/14', category: 'Government' },
    { project: 'Design, Analysis and implementation of form filling Boat using AI for UI Design', year: '2019-20', amount: '2.4', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/57', category: 'Government' },
    { project: 'A study on the radiative heat transfer in micropolar fluid', year: '2019-20', amount: '2.0', duration: '1 year', agency: 'RTU (ATU) TEQIP-III-CRS/2019-20/03', category: 'Government' },
    { project: 'International Conference of Information Management & Machine Intelligence', year: '2019-20', amount: '5.0', duration: '1 year', agency: 'AICTE-GOC/POLICY-2/2019-20', category: 'Government' },
    { project: 'STTP-Image Processing & its application', year: '2019-20', amount: '2.3', duration: '1 year', agency: 'AICTE-STTP 34-65/131/RIFD/STTP/Policy-1/2018-19', category: 'Government' },
    { project: 'Consultancy Project "A Case Study on Water Quality Assesssment of jawai River, Pali"', year: '2019-20', amount: '0.9', duration: '09 Month', agency: 'TeXeL Consulting', category: 'Non-Government' },
    { project: 'Effect of Corrosion on Different sizes of Beam and slab covers', year: '2019-20', amount: '0.6', duration: '08 Month', agency: 'BZ Structure and Consultant, Jaipur', category: 'Non-Government' },
    { project: 'HUMAN RESOURCE & WAGE COMPUTING', year: '2019-20', amount: '0.8', duration: '1 year', agency: 'Arkle consultancy pvt. ltd', category: 'Non-Government' },
    { project: 'Deep Learning & Neural Network lab under AICTE-MODROB Project', year: '2020-21', amount: '12.8', duration: '1 year', agency: 'AICTE-MODROB/Policy-1/2019-20', category: 'Government' },
    { project: 'International Conference of post covid challenges on life and Livelihood ICPCC 2021', year: '2020-21', amount: '0.8', duration: '1 year', agency: 'RTU (ATU) TEQIP-III/F.(56)/2020-21/5426-30', category: 'Government' },
    { project: 'RTU-PIET Hackathon-21 "Hacathon & Innovation startup competiion"', year: '2020-21', amount: '15.0', duration: '1 year', agency: 'RTU (ATU) TEQIP-III/F.(56)/2020-21/7062-67', category: 'Government' },
    { project: 'ATAL FDP on “Big Data Analytics”', year: '2020-21', amount: '0.9', duration: '1 year', agency: 'AICTE-ATAL-HQ/2020-21/1583555143', category: 'Government' },
    { project: 'ATAL FDP on “Cyber Security”', year: '2020-21', amount: '0.9', duration: '1 year', agency: 'AICTE-ATAL-HQ/2020-21/1582954155', category: 'Government' },
    { project: 'AICTE-IDEA Lab Project', year: '2021-22', amount: '50.4', duration: '2 year', agency: 'AICTE/ IDEA202000241/2021', category: 'Government' },
    { project: 'AICTE-ISTE-FDP Application of Artificial Intelligence', year: '2021-22', amount: '0.9', duration: '1 year', agency: 'ISTE/AICTE-ISTE FDP/ 2021-22', category: 'Government' },
    { project: '(ATAL) FDP-Recent Trends in Digital Image Processing', year: '2021-22', amount: '0.9', duration: '1 year', agency: 'AICTE-ATAL-HQ/2021-22/1614760016', category: 'Government' },
    { project: 'NPTEL/SWAYAM-Translation "Stats I"', year: '2021-22', amount: '0.1', duration: '1 year', agency: 'Ministry of Education', category: 'Government' },
    { project: '(ATAL) FDP- Blockchain & its Applications', year: '2021-22', amount: '0.9', duration: '1 year', agency: 'AICTE-ATAL-HQ/2020-21/1614760668', category: 'Government' },
    { project: 'SPICES- Scheme for promoting Interest, Creativity and Ethics amoung Students', year: '2022-23', amount: '1.0', duration: '1 year', agency: 'AICTE-SPICES (10-128/AICTE/IDC/SPICES/2021-22)', category: 'Government' },
    { project: 'AU-Small Finance Bank Endowment Fund', year: '2022-23', amount: '7.0', duration: '1 year', agency: 'AU-Small Finance Bank', category: 'Non-Government' },
    { project: 'AU-Small Finance Bank Endowment Fund', year: '2022-23', amount: '6.8', duration: '1 year', agency: 'AU-Small Finance Bank', category: 'Non-Government' },
    { project: 'Consultancy Project "Home Automation with smart sensors"', year: '2022-23', amount: '2.6', duration: '1 year', agency: 'SINCGRID LLP', category: 'Non-Government' },
    { project: 'CNC Machine remote monitoring and maintenance', year: '2022-23', amount: '3.0', duration: '1 year', agency: 'Karyteck Pvt. Ltd', category: 'Non-Government' },
    { project: 'SIH(Smart India Hackathon) Software Edition', year: '2023-24', amount: '11.05', duration: '1 year', agency: 'AICTE-ATAL-P/3/2023-US C1/1-Part(2)/Software 21', category: 'Government' },
    { project: 'IDE Bootcamp', year: '2023-24', amount: '12.69', duration: '1 year', agency: 'AICTE-ATAL-M/1395/2024-MIC-16', category: 'Government' },
    { project: 'AI & NLP Integrated IOMT System for Smart Healthcare in Indian Languages', year: '2023-24', amount: '3.5', duration: '1 year', agency: 'AICTE-ATAL/2023-24/1691487784', category: 'Government' },
    { project: '1st International Conference on Networked Computing & Data Analytics (ICNCDA-2025)', year: '2024-25', amount: '1.0', duration: 'During Conference', agency: 'ANRF(SERB) File No: SSY/2025/000412', category: 'Government' },
    { project: 'Six day online Faculty Development Program', year: '2024-25', amount: '1.0', duration: 'During FDP', agency: 'File No. AICTE/ATAL/2024', category: 'Government' }
];

const Funding = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Funding and Grants"
                description="View details of funded research projects and consultancies."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Funding and Grants', isCurrent: true }
                ]}
            />

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Grants Received</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={fundingColumns} data={fundingData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Funding;
