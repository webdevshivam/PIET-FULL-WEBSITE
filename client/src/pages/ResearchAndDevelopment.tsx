import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import OverviewSection from "@/components/OverviewSection";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const objectives = [
    "To promote and enhance research culture in the institution.",
    "To encourage faculty and students to engage in research projects and publish their findings.",
    "To facilitate industry-institute collaboration for applied research.",
    "To support faculty in submitting proposals for funded research projects.",
    "To organize workshops, seminars, and conferences for knowledge sharing.",
];

const activities = [
    "Organizing research methodology workshops and writing seminars.",
    "Encouraging interdisciplinary research among departments.",
    "Facilitating patent filing and intellectual property rights awareness.",
    "Assisting in securing funding from government and non-government bodies.",
    "Establishing research centers and labs equipped with modern facilities.",
];

const policies = [
    "All research activities are governed by the institutional R&D policy.",
    "Ethical standards and plagiarism checks are mandatory before submission.",
    "The institution promotes open access and proper citation of published work.",
    "Incentives and awards are provided for high-impact publications.",
    "Collaborative research with industry partners is strongly supported.",
];

const documentColumns = [
    { label: "S. No", key: "sno" },
    { label: "Document", key: "name" },
    { label: "Download", key: "download" },
];

const documentData = [
    {
        sno: 1,
        name: "Notification of Research & development Cell",
        download: (
            <a
                href="https://drive.google.com/file/d/1FlluNOj31HC5s6vJ8U3uvp8S95WDvuF6/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition">
                    Download
                </button>
            </a>
        ),
    },
];

const ResearchAndDevelopment = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Research and Development"
                description="Explore the vibrant research ecosystem at PIET."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Research and Development", isCurrent: true },
                ]}
            />

            <OverviewSection
                title="About R&D Cell"
                subtitle="Igniting Innovation through Research"
                reverse={false}
                image={{
                    src: "/images/r&d/r.jpeg",
                    alt: "Research Image",
                    caption: "Inspiring Innovation and Inquiry",
                }}
            >
                <p>
                    The Research and Development (R&D) Cell at PIET Jaipur aims
                    to cultivate a robust research culture across all
                    disciplines. It plays a pivotal role in encouraging faculty
                    and students to undertake innovative projects that address
                    real-world challenges and contribute to academic excellence.
                </p>
                <br />
                <p>
                    The cell provides guidance, infrastructure, and
                    administrative support for the smooth execution of research
                    initiatives and helps connect with national and
                    international funding agencies, industries, and academic
                    institutions.
                </p>
            </OverviewSection>

            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objectives"
                    iconClass="fas fa-bullseye"
                    content={<Checklist items={objectives} />}
                />

                <InfoCard
                    title="Key Activities"
                    iconClass="fas fa-project-diagram"
                    content={<Checklist items={activities} />}
                />

                <InfoCard
                    title="Policy Highlights"
                    iconClass="fas fa-book-open"
                    content={<Checklist items={policies} />}
                />

                <InfoCard
                    title="Encouragement for Researchers"
                    iconClass="fas fa-lightbulb"
                    content="PIET recognizes the importance of research in building knowledge societies. Faculty and students are encouraged and supported through various grants, mentorship, and facilities to innovate and publish impactful research."
                />
            </div>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Important Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={documentColumns} data={documentData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default ResearchAndDevelopment;
