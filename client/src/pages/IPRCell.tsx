
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const IPRCell = () => {
    const iprCommittee = [
        {
            sno: 1,
            name: "Dr. Dinesh Goyal",
            designation: "Director",
            institute: "Poornima Institute of Engineering & Technology, Jaipur",
            contact: "9887678379",
            email: "dinesh.goyal@poornima.org"
        },
        {
            sno: 2,
            name: "Mr. Pankaj kumar",
            designation: "IPR Trainer and Facilitator",
            institute: "I P constellation (IPC) Private Limited",
            contact: "8619109061",
            email: "ipr.pkumar@gmail.com"
        },
        {
            sno: 3,
            name: "Dr. Payal Bansal",
            designation: "HOD, IOT",
            institute: "Poornima Institute of Engineering & Technology, Jaipur",
            contact: "97854 87195",
            email: "payal.bansal@poornima.org"
        },
        {
            sno: 4,
            name: "Mr Ashish Jain",
            designation: "Managing Director",
            institute: "Anktech Software Pvt. Ltd.",
            contact: "9001070444",
            email: "ashish.jain2@anktech.co.in"
        },
        {
            sno: 5,
            name: "Ms Sonal Srivastava",
            designation: "Founding Partner, Patent Agent",
            institute: "Freelance IPR Attorny",
            contact: "9953275218",
            email: "sonal@onlinepatentfiling.com"
        }
    ];

    const usefulLinks = [
        { name: "IPR India", url: "https://ipindia.gov.in/" },
        { name: "IP services India", url: "https://ipindia.gov.in/ip-services.htm" },
        { name: "Patent Facilitating Centre", url: "https://ipindia.gov.in/patent-facilitating-centre.htm" },
        { name: "Rajiv Gandhi National Institute of Intellectual Property", url: "https://rgniipm.gov.in/" }
    ];

    const patentSearchLinks = [
        { name: "InPass (Indian Patent Advanced Search System)", url: "https://iprsearch.ipindia.gov.in/publicsearch" },
        { name: "WIPO (World Intellectual Property Organization) Patentscope", url: "https://patentscope.wipo.int/" },
        { name: "USPTO (United States Patent and Trademark Office)", url: "https://www.uspto.gov/patents/search" },
        { name: "Espacenet (European Patent Office- Patent Search)", url: "https://worldwide.espacenet.com/" },
        { name: "Google Patents", url: "https://patents.google.com/" },
        { name: "IP India", url: "https://ipindia.gov.in/" }
    ];

    const incentiveTable = [
        { category: "Successful Registration / Application for Copyright/Patent", amount: "INR 3000" },
        { category: "Grant Of Copyright", amount: "INR 3000" },
        { category: "Publishing Of Patent", amount: "INR 5000" },
        { category: "Grant Of Patent(Non-Commercial)", amount: "INR 30000" },
        { category: "Grant Of Patent(Commercial)", amount: "INR 50000" }
    ];

    return (
        <div>
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Intellectual Property Rights (IPR) Cell"
                description="Encouraging, protecting, managing and commercializing Intellectual Property generated through the College."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Innovation", href: "#" },
                    { label: "IPR Cell", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-6 py-12">
                {/* Introduction Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-shield-alt text-secondary mr-3"></i>
                            About IPR Cell
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Intellectual property plays an important role in providing a competitive edge to any Institution. 
                            The tangible assets like inventions, designs, software, brand name and other creative & innovative 
                            ideas are more valuable than physical assets. PIET IPR Cell is committed to encourage, protect, 
                            manage and commercialize Intellectual Property such as Patent, Copyright, Trademark etc. generated 
                            through the College. The cell creates conducive environment in the academics for the development 
                            of Intellectual Property. Faculty and students of PIET are actively participating in the IPR 
                            filing process in different disciplines of Engineering & Technology.
                        </p>
                    </div>
                </section>

                {/* Importance of IPR */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-lightbulb text-secondary mr-3"></i>
                            Importance of IPR
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            It is necessary to protect the Intellectual property in order to enable organizations to earn 
                            recognition or financial benefits. Governments of various countries protect the innovative ideas 
                            of the inventors through Intellectual Property Rights (IPR). Recently, IPR has become a central 
                            issue in the developed and developing countries. The rationale for this IPR lies in the need to 
                            create awareness about the importance of IPRs as a marketable financial asset and economic tool 
                            among the researchers, faculty and students of the College. Intellectual property Rights: means 
                            the rights derived from the IP e.g. Patents, registered designs, copyright etc.
                        </p>
                    </div>
                </section>

                {/* Objectives */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-bullseye text-secondary mr-3"></i>
                            Objectives
                        </h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To create an awareness about IPR for faculties and students of the Institution.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To impart training on future endeavours regarding patent filing processes, procedure of IPR, screen projects, make drafts and file patents to the competing authority.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To conduct workshops, seminars and training course on IPR.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To promote better understanding of IPR.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To encourage faculty members and students to go patentable works.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Frame and keep updated IPR Policy of the Institution.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Communicate the IPR Policy to the various stakeholders and the Inventors of the Institution, students in general.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Identify prospective inventions, innovations, Service improvement ideas and Copy rights.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                Study and recommend inventions etc for feasibility of converting to patents/Copy Rights.
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                                To promote technology advancements for improved quality of life and environment protection.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Strategies */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-chess text-secondary mr-3"></i>
                            Strategies
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>IPR cell shall guide and help the faculty members and students of PIET in patentability assessment and to apply for various IPRs such as Invention(s), Designs, Integrated Circuit Layouts and other creative works.</p>
                            
                            <p>The faculty members /students desirous of filing a patent or for any other IPR application would be given the necessary advice and guidance by the IPR cell.</p>
                            
                            <p>An internal approval from the Principal wherein the names of the Inventors/Authors shall be mentioned is to be signed by the Principal and forwarded by the HOD for approval of the Head of IPR Cell.</p>
                            
                            <p>Invention Patent /Trademark and similar documents are to be treated and maintained confidentially by the IPR Cell.</p>
                            
                            <p>The IPR cell shall help the inventor in drafting the patent application/ or any other IPR application and filling of relevant forms.</p>
                            
                            <p>The draft application along with the relevant forms shall be forwarded to the concerned authority by the IPR cell.</p>
                            
                            <p>Any work sought to be filed by a faculty member and or student(s) arising out of R&D work done at PIET will be filed in joint names as inventors or authors while PIET shall be the applicant and owner of Intellectual Property (IP).</p>
                            
                            <p>After filing of the application for IP protection, the inventors shall inform the IPR cell of any further development, if any, in the related R & D work.</p>
                        </div>
                    </div>
                </section>

                {/* Types of IP */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-layer-group text-secondary mr-3"></i>
                            Types of Intellectual Property
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Patent</h3>
                                <p className="text-gray-700 text-sm">An exclusive right granted for an invention, which is a product or a process that provides a new way of doing something, or offers a new technical solution to a problem.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Copyright</h3>
                                <p className="text-gray-700 text-sm">An exclusive right given to the author of the original literary, architectural, dramatic, musical and artistic works; cinematograph films; and sound recordings.</p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Trade/Service Mark</h3>
                                <p className="text-gray-700 text-sm">A mark capable of being represented graphically and which is capable of distinguishing the goods or services of one person from those of others.</p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Industrial Design</h3>
                                <p className="text-gray-700 text-sm">Features of shape, configuration, pattern, ornament or composition of lines or colours applied to any article by any industrial process.</p>
                            </div>
                            <div className="border-l-4 border-red-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">IC Layout Designs</h3>
                                <p className="text-gray-700 text-sm">A layout of transistors and other circuitry elements and includes lead wires connecting such elements expressed in a semiconductor integrated circuit.</p>
                            </div>
                            <div className="border-l-4 border-indigo-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">New Plant Variety</h3>
                                <p className="text-gray-700 text-sm">A plant variety that is novel, distinct and shows uniform and stable characteristics.</p>
                            </div>
                            <div className="border-l-4 border-pink-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Biotechnology Inventions</h3>
                                <p className="text-gray-700 text-sm">Include recombinant products such as vectors, nucleotide sequences and micro‐organisms.</p>
                            </div>
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="font-semibold text-lg text-primary mb-2">Traditional Knowledge</h3>
                                <p className="text-gray-700 text-sm">Knowledge developed by indigenous or local communities for the use of natural resources, passed from one generation to another traditionally.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IPR Committee */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-users text-secondary mr-3"></i>
                            IPR Committee
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Institute/Company</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Contact</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {iprCommittee.map((member) => (
                                        <tr key={member.sno} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-3">{member.sno}</td>
                                            <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
                                            <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                                            <td className="border border-gray-300 px-4 py-3">{member.institute}</td>
                                            <td className="border border-gray-300 px-4 py-3">{member.contact}</td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
                                                    {member.email}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Useful Links */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-link text-secondary mr-3"></i>
                            Useful Links
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {usefulLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow hover:text-secondary"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Promotional Scheme */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-gift text-secondary mr-3"></i>
                            Promotional Scheme for Patents & Copyrights
                        </h2>
                        <div className="mb-6">
                            <p className="text-gray-700 mb-4">
                                The Management of Poornima is pleased to declare the "PROMOTIONAL SCHEME FOR PATENTS & COPYRIGHTS" 
                                for faculty & staff members. This scheme will cover the registration/ filing as well as award/ grant 
                                of copyrights and patents (including design registration, Silicon Chip Design etc.).
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">Key Features:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                                    100% reimbursement of filing fees for any Patent/Copyright filed in India
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                                    50% of registration/application fee borne by Poornima, 50% by applicant(s)
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                                    Separate agreement required before initiating application process
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">Incentive Structure:</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-primary text-white">
                                            <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {incentiveTable.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="border border-gray-300 px-4 py-3">{item.category}</td>
                                                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">{item.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Important Conditions:</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Incentive applicable for applicants who have served Poornima for minimum 1 year</li>
                                <li>• In case of multiple applicants, amount will be equally divided</li>
                                <li>• Incentive given to principal applicant only</li>
                                <li>• No incentive for provisional copyrights/patents</li>
                                <li>• Copy of proof of award/grant must be submitted to Office of Registrar</li>
                                <li>• Expert committee will be constituted for consideration of applications</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Patent Search */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-search text-secondary mr-3"></i>
                            Patent Search Resources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {patentSearchLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow hover:text-secondary"
                                >
                                    <i className="fas fa-external-link-alt mr-2"></i>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Details of Published Patents */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            <i className="fas fa-file-alt text-secondary mr-3"></i>
                            Details of Published Patents
                        </h2>
                        <div className="text-center">
                            <a
                                href="/iprs"
                                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors shadow-md hover:shadow-lg"
                            >
                                <i className="fas fa-list mr-2"></i>
                                View List of Published Patents
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IPRCell;
