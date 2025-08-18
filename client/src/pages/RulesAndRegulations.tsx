import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const codeOfConductColumns = [
    { label: "S. No", key: "sno" },
    { label: "Code of Conduct", key: "name" },
    { label: "Download", key: "download" },
];

const policyColumns = [
    { label: "S. No", key: "sno" },
    { label: "Policy", key: "name" },
    { label: "Download", key: "download" },
];

const codeOfConductData = [
    {
        sno: 1,
        name: "Code of Conduct for (Director/Faculty/Staff) 2023-2024",
        download: (
            <a
                href="https://drive.google.com/file/d/1ZTQh08bdRkshMRzd9IbYHog2hp7FWCEB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "Code of Conduct for (Director/Faculty/Staff) 2022-2023",
        download: (
            <a
                href="https://drive.google.com/file/d/12Ihxq3b5NV1nCYJQ6hb2lmUJMvcn4h0p/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 3,
        name: "Code of Conduct for (Director/Faculty/Staff) 2021-2022",
        download: (
            <a
                href="https://drive.google.com/file/d/1R5Tm2DfkN9aoED_S15vhStT_-cuStdWB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 4,
        name: "Code of Conduct for (Director/Faculty/Staff) 2020-2021",
        download: (
            <a
                href="https://drive.google.com/file/d/1NSI2J22Hz1xDefKNx7BWBaulvLj2N-_x/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 5,
        name: "Code of Conduct for (Director/Faculty/Staff) 2019-2020",
        download: (
            <a
                href="https://drive.google.com/file/d/1yyURC6YpIAl6tA8zqJ6pJW6ztiLwglFJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 6,
        name: "Code of Conduct for (Director/Faculty/Staff) 2018-2019",
        download: (
            <a
                href="https://drive.google.com/file/d/1zZN0GWzGRWG4x2sp06OFdNvRiFKOwb8O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
];

const policyData = [
    {
        sno: 1,
        name: "Academia Industry Interaction Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1uQ6WyfdhSSzpqI_2XG1coCR8IPbxL3eN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "Academic Manual",
        download: (
            <a
                href="https://drive.google.com/file/d/15kdoF95vFZM0VPWZxkw5pzGvntHl_2A8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 3,
        name: "Admission Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1fPFuygnbBY_RD9zxBJH_7ajC7aRZ94zy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 4,
        name: "Alumni Relations Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1t5m1cVzW2OnvTSGhtAdC-bBNtX1IL5Vf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 5,
        name: "Code of Conduct for Faculty and Staff Members",
        download: (
            <a
                href="https://drive.google.com/file/d/1vsi_6FrfkIOOHlI9tM6fTVAevWKHf8IC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 6,
        name: "E-Governance Policy and ERP Manual",
        download: (
            <a
                href="https://drive.google.com/file/d/1zoByxtLDgmAwMDpH1KSyPRuvO9a5mnw2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 7,
        name: "Equal Opportunity Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1xBlKPmy9Sx-RHh-ha0jXPbwgHXjr8aEp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 8,
        name: "Environment Management Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1S_yubJUX_xUamaoiK0RNcmBA0EpHbMGv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 9,
        name: "Energy Management Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/17iPTTT1nh5CI9zGN3g7QXTJYC_A4GCRL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 10,
        name: "Feedback Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1wpg_GicjxCQ44J-4wMwM17tMpcIZOiPD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 11,
        name: "Gender Equality Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1Ih6Vd43WkIRhxVWaMePxZq1subWkskwG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 12,
        name: "HR and Welfare Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1T-fPtAhwGuKgahTu0VDwHyNhy-MExMZj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 13,
        name: "ICT Policy & Website",
        download: (
            <a
                href="https://drive.google.com/file/d/1rgnDF3-bKFoVF7ZwoDAYIzcZfvER3rKM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 14,
        name: "IDEA Lab Manual",
        download: (
            <a
                href="https://drive.google.com/file/d/16eta25Cf3vwBVHLs71pILzmTklrYz6MG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 15,
        name: "Infrastructure Manual & Maintenance Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1M_C14L90EkCKy-VjDXoRG5_kU4KsrPHY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 16,
        name: "IQAC-Handbook",
        download: (
            <a
                href="https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 17,
        name: "IT policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1wxjPH6VwFwFoZsIuRAfapz-Ed05Rmil1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 18,
        name: "Library Manual",
        download: (
            <a
                href="https://drive.google.com/file/d/1fLUpgsdIwzwjr0GdC9tdZ-QGAFsosA5N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 19,
        name: "Tutor Guardian (Mentor-Mentee) System Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1T5quoVKiwDqdYy6pKSwkk-t3psM4eLvF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 20,
        name: "PIET Examination Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1kSzX51aIvOTzYmz3-cfniHwdzNMjzmcN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 21,
        name: "Policy for Beyond Classroom Learning and Value Added Courses",
        download: (
            <a
                href="https://drive.google.com/file/d/15jEDzyKBTOoutTqiqdEhoDa5-UAsZZPq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 22,
        name: "Policy for e-Waste",
        download: (
            <a
                href="https://drive.google.com/file/d/1-6cik22VPnU7fenupEdMfG-6xpMul_Do/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 23,
        name: "Policy for Entrepreneurship & Business Incubation",
        download: (
            <a
                href="https://drive.google.com/file/d/1IbZeXAKzPyvGmHNV4Jk_NGy2DrjIF267/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 24,
        name: "Policy for Ethics, Values, Women Empowerment & Inclusive Environment",
        download: (
            <a
                href="https://drive.google.com/file/d/1iV_kZvFARJeB6e_EOAScBssxP0jlCMk6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 25,
        name: "Grievances Redressal",
        download: (
            <a
                href="https://drive.google.com/file/d/1CxjIZygLQ3wMvc3ZlqSxN4YWYF9pYVgG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 26,
        name: "NEP Policy 2020",
        download: (
            <a
                href="https://drive.google.com/file/d/1Ws5O8chsYtFHty3-zrFWwL7eLGjGkRLe/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 27,
        name: "Purchase Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1uIL-GHoi32ZLYYndsg8NtNznzVqjtCEw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 28,
        name: "Quality Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1mkrUlHTcZTi-EalofIRnpBYncxynYdcu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 29,
        name: "Research & Development Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1E1SAKv1UpD6_h3-pt4lJ0YOgHbexS5VY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 30,
        name: "Scholorship Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1aIR2UavRK9rftVkBoeVT1_YELjZH7Yjm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 31,
        name: "Social Outreach Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1Vu7yyGml2OhdVxE6ZAjohqpr2hE9-Hkn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 32,
        name: "Student Activities Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1_HuX9hSsL4iX8veWSW52MYpw1q2i5975/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 33,
        name: "Training and Placement & Higher Studies Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1fCZHQYXUVpBNiMgJ0PCCieC7UZELY2Z2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 34,
        name: "Transportation Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1bzQlwUpg3jT9lEo7T75wwFxW03AwQiU5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 35,
        name: "Waste Management Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1ev3oWyaIvGc968h2rrVjOJANS7MG953w/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 36,
        name: "Water Management Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/1Ax7OHL3wlr79lJikGAsqVE0W82jrBgUj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 37,
        name: "Fee Refund Policy",
        download: (
            <a
                href="https://drive.google.com/file/d/11Sk42Fd1opFSsa0AwR_yEIMqOfOa6Im0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
];

const RulesAndRegulations = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Rules and Regulations"
                description="Get access to institutional policies and codes of conduct at Poornima Institute."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Rules and Regulations", isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Code of Conduct
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={codeOfConductColumns}
                    data={codeOfConductData}
                />

                <h2 className="text-3xl text-primary font-bold mt-16 mb-8 text-center">
                    Policies
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={policyColumns} data={policyData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default RulesAndRegulations;
