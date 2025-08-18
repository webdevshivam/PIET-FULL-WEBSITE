
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { useState } from "react";

const reports = [
    {
        year: "2023-24",
        title: "2023-24 Annual Report",
        pdfUrl: "https://drive.google.com/file/d/1YkphJItAMwcJ3Mo-MB04OpzLQ7koahYX/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2022-23",
        title: "2022-23 Annual Report",
        pdfUrl: "https://drive.google.com/file/d/1dI9LkIjI_M9CHJGykSe8eU7P-wj4RAU7/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2021-22",
        title: "2021-22 Annual Report",
        pdfUrl: "https://drive.google.com/file/d/1KBQPNjL8M7Ud0VyEtxiTuDt47Eo4Na3S/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2020-21",
        title: "2020-21 Annual Report",
        pdfUrl: "https://drive.google.com/file/d/1_xFuBT9XcQwmLNizgWfkxqYCQ7MUVVN5/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2019-20",
        title: "2019-20 Annual Report",
        pdfUrl: "https://drive.google.com/file/d/17USzPNxCfpEne93k3duIfXDCd1iLZABE/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2018-19",
        title: "2018-19 Annual Report",
        pdfUrl: "https://drive.google.com/file/d/15oIjoy5G3SD8xyWsWRrBt8G5NJu4xs-6/view?usp=sharing",
        description: "",
        highlights: [],
    },
];

const accounts = [
    {
        year: "2023-24",
        title: "2023-24 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1BkWHn0J9p98nrM5NolmIHVRai0xaNNe0/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2022-23",
        title: "2022-23 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1-FKocNSQDpKeWfR41GIQQywu6BOeZkEu/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2021-22",
        title: "2021-22 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1h2SYQXBCbpadM3xm7yCM9qltbLvKTzYD/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2020-21",
        title: "2020-21 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1il4Tu-GQI4kR5Rul3pU4lZLqFTaiP1AH/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2019-20",
        title: "2019-20 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1iwYC80ZDU2wN4nWvFQdCBK-sjPkG3b77/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2018-19",
        title: "2018-19 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1h0AwFvlpxVwke1AxlMjihAZvlElpcl5O/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2017-18",
        title: "2017-18 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1RdmaDOLmgsyMWNEEZ4OknS9YYFY32cp3/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2016-17",
        title: "2016-17 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1UmnasaBIjIQrOHx10u1QX43XgZf1IgU7/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2015-16",
        title: "2015-16 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1zJnNDlsYV4z1x6dmqPDiKb7gRoHD_4Gc/view?usp=sharing",
        description: "",
        highlights: [],
    },
    {
        year: "2014-15",
        title: "2014-15 Annual Account",
        pdfUrl: "https://drive.google.com/file/d/1EcEGz2YcOUtWqm-wyVC1XWGLym5WKsJc/view?usp=sharing",
        description: "",
        highlights: [],
    },
];

const AnnualReportsAndAccounts = () => {
    const [activeTab, setActiveTab] = useState("reports");

    const renderTimeline = (data: any[], type: string) => (
        <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

            {data.map((item, index) => (
                <div
                    key={index}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10">
                        <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div
                        className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                    >
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                            {/* Year Badge */}
                            <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold">
                                        {item.year}
                                    </span>
                                    <div className="flex items-center space-x-2">
                                        <i className={`fas ${type === 'reports' ? 'fa-calendar-alt' : 'fa-file-invoice-dollar'}`}></i>
                                        <span className="text-sm opacity-90">
                                            {type === 'reports' ? 'Academic Year' : 'Financial Year'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                        Key Highlights:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.highlights.map(
                                            (highlight: string, idx: number) => (
                                                <span
                                                    key={idx}
                                                    className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                                                >
                                                    {highlight}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Download Button */}
                                <a
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 group"
                                >
                                    <i className="fas fa-download group-hover:animate-bounce"></i>
                                    <span className="font-medium">
                                        Download {type === 'reports' ? 'Report' : 'Statements'}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Year Display on Opposite Side */}
                    <div
                        className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"}`}
                    >
                        <div className="text-center">
                            <div className="text-6xl font-bold text-primary/20 mb-2">
                                {item.year.split("-")[0]}
                            </div>
                            <div className="text-lg text-gray-500">
                                {type === 'reports' ? 'Academic Year' : 'Financial Year'}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Annual Reports & Accounts"
                description="Comprehensive documentation of our institutional journey, achievements, and financial transparency over the years."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Annual Reports & Accounts", isCurrent: true },
                ]}
            />

            <main className="container mx-auto px-4 lg:px-0 relative z-10 my-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-primary mb-4 leading-tight">
                        Annual Reports & Financial Statements
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our institutional journey through detailed annual reports and transparent financial documentation.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg shadow-md p-1 flex">
                        <button
                            onClick={() => setActiveTab("reports")}
                            className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                                activeTab === "reports"
                                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                                    : "text-gray-600 hover:text-primary"
                            }`}
                        >
                            <i className="fas fa-file-alt mr-2"></i>
                            Annual Reports
                        </button>
                        <button
                            onClick={() => setActiveTab("accounts")}
                            className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                                activeTab === "accounts"
                                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                                    : "text-gray-600 hover:text-primary"
                            }`}
                        >
                            <i className="fas fa-calculator mr-2"></i>
                            Annual Accounts
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === "reports" && renderTimeline(reports, "reports")}
                {activeTab === "accounts" && renderTimeline(accounts, "accounts")}

                {/* Statistics Section */}
                <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">
                            Documentation Statistics
                        </h3>
                        <p className="opacity-90">
                            Our commitment to transparency and accountability
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">
                                {reports.length}+
                            </div>
                            <div className="text-sm opacity-90">
                                Annual Reports
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">
                                {accounts.length}+
                            </div>
                            <div className="text-sm opacity-90">
                                Financial Statements
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">100%</div>
                            <div className="text-sm opacity-90">
                                Transparency
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">1500+</div>
                            <div className="text-sm opacity-90">
                                Pages of Documentation
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Cta />
            <Footer />
        </div>
    );
};

export default AnnualReportsAndAccounts;
