
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const IndustryInstituteInnovation = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Innovation", href: "#" },
        { label: "Industry Institute Innovation", isCurrent: true },
    ];

    const objectives = [
        "Curriculum Alignment: To ensure that the engineering curriculum reflects the latest industry trends, technologies, and practices, thereby enhancing the relevance and applicability of academic learning.",
        "Skill Development: To provide students with practical skills and hands-on experience through internships, industry projects, and workshops, thereby improving their readiness for the workforce.",
        "Enhanced Employability: To increase the employability of graduates by equipping them with industry-relevant skills, knowledge, and professional networks that align with job market requirements.",
        "Research and Innovation: To foster collaborative research and development initiatives between academia and industry, leading to innovative solutions and advancements that benefit both sectors.",
        "Professional Networking: To create opportunities for students and faculty to connect with industry professionals, facilitating mentorship, career guidance, and potential job placements.",
        "Resource Sharing: To leverage industry resources, such as expertise, equipment, and funding, which can enhance the institution's research capabilities and educational infrastructure.",
        "Continuous Improvement: To continuously update and improve academic programs based on feedback and input from industry partners, ensuring that educational offerings remain cutting-edge and effective."
    ];

    const coordinators = [
        { sno: "01", name: "Dr. Puneet Mathur", designation: "Sr. Administrative Officer", duration: "Nov, 2018 to Nov, 2020" },
        { sno: "02", name: "Dr. Rekha Jain", designation: "Professor", duration: "Nov, 2020 to Sept, 2022" },
        { sno: "03", name: "Dr. Ajay Maurya", designation: "Professor", duration: "Sept, 2022 to till date" }
    ];

    const annualReports = [
        { sno: "01", name: "III Annual Report 2023-24" },
        { sno: "02", name: "III Annual Report 2022-23" },
        { sno: "03", name: "III Annual Report 2021-22" },
        { sno: "04", name: "III Annual Report 2020-21" },
        { sno: "05", name: "III Annual Report 2019-20" },
        { sno: "06", name: "III Annual Report 2018-19" }
    ];

    const achievements = [
        {
            title: "Rated PLATINUM by AICTE-CII Survey",
            description: "PIET has been Rated PLATINUM by AICTE-CII Survey for Industry-linked technical Institutes, mapping the industry linkages in a distinctive way."
        },
        {
            title: "More than 80% placements with regular growth in last 05 years",
            description: "PIET has achieved 80% student placements with average packages growing from 2.7 Lakh per annum to 5.6 Lakh per annum."
        },
        {
            title: "Rated 3.5 Star in IIC Rating by MoE",
            description: "Rated by Innovation Council, Ministry of Education, Government of India for promoting quality professional & technical education."
        },
        {
            title: "15 Papers published in association with Industry",
            description: "Quality research papers published in Scopus Journal, Springer, and UGC care journals with industry collaboration."
        },
        {
            title: "Received funding 21.7 lakhs from Industry",
            description: "Secured funding for Consultancy & Endowment projects, with Rs. 15 lakh worth projects completed."
        },
        {
            title: "35 Startups incubated at PIET campus",
            description: "PBIC has nurtured diverse entrepreneurial ventures including Aerophentum, Local eyes, Theta Electronics, and many more."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Industry Institute Innovation"
                description="Bridging the gap between academia and industry through collaborative innovation"
                breadcrumbs={breadcrumbItems}
            />

            {/* Hero Image Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <img 
                            src="https://www.piet.poornima.org/images/iii_event.png" 
                            alt="Industry Institute Innovation Event" 
                            className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Introduction</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <p className="mb-6">
                                Industry-Institute interactions play a pivotal role in shaping the future of engineering education in India. By fostering collaborations between academic institutions and industry, these interactions ensure that engineering curricula remain relevant and aligned with current industry demands. Through initiatives such as guest lectures by industry experts, internships, and joint research projects, students gain valuable hands-on experience and insights into real-world applications of their studies.
                            </p>
                            <p className="mb-6">
                                These engagements not only enhance the employability of graduates by equipping them with practical skills but also foster a dynamic learning environment where academic knowledge is constantly updated to reflect industry trends. Moreover, such collaborations help institutions stay abreast of technological advancements and industry requirements, thereby bridging the gap between theoretical learning and practical application.
                            </p>
                            <p>
                                Ultimately, effective industry-institute interactions contribute to producing a highly skilled workforce, driving innovation, and strengthening the overall quality of engineering education in India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Objectives</h2>
                    <div className="max-w-5xl mx-auto">
                        <p className="text-lg text-gray-700 mb-8 text-center">
                            The key objectives of Industry Institute Interactions are:
                        </p>
                        <div className="grid gap-6">
                            {objectives.map((objective, index) => (
                                <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-secondary">
                                    <p className="text-gray-700 leading-relaxed">{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Coordinators Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Coordinators of Industry Institute Interactions</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-md">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">S. No</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coordinators.map((coordinator) => (
                                        <tr key={coordinator.sno} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3">{coordinator.sno}</td>
                                            <td className="border border-gray-300 px-4 py-3 font-medium">{coordinator.name}</td>
                                            <td className="border border-gray-300 px-4 py-3">{coordinator.designation}</td>
                                            <td className="border border-gray-300 px-4 py-3">{coordinator.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Annual Reports Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Industry Institute Interaction Annual Reports</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-md">
                                <thead>
                                    <tr className="bg-secondary text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">S. No</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Report Name</th>
                                        <th className="border border-gray-300 px-4 py-3 text-center">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {annualReports.map((report) => (
                                        <tr key={report.sno} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3">{report.sno}</td>
                                            <td className="border border-gray-300 px-4 py-3">{report.name}</td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">
                                                <button className="text-secondary hover:text-primary transition-colors">
                                                    <i className="fas fa-download mr-2"></i>
                                                    PDF
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-secondary hover:shadow-xl transition-shadow">
                                <h3 className="text-lg font-semibold text-primary mb-4">{achievement.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Activities Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Key Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-3xl text-secondary mb-4">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Industry Collaboration</h3>
                            <p className="text-gray-600">Making collaborations with industries through MoUs and partnerships.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-3xl text-secondary mb-4">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Faculty Workshops</h3>
                            <p className="text-gray-600">Regular workshops led by industry experts for faculty development.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-3xl text-secondary mb-4">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Student Internships</h3>
                            <p className="text-gray-600">Organizing internships with industry partners for practical experience.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-3xl text-secondary mb-4">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Innovation Labs</h3>
                            <p className="text-gray-600">Establishment of industry-funded labs with cutting-edge technology.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-3xl text-secondary mb-4">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Startup Incubation</h3>
                            <p className="text-gray-600">Supporting entrepreneurship through PBIC with 35+ startups incubated.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="text-3xl text-secondary mb-4">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-3">Placement Support</h3>
                            <p className="text-gray-600">Achieving 80%+ placements with industry partnerships.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    );
};

export default IndustryInstituteInnovation;
