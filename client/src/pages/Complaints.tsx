import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import OverviewSection from "@/components/OverviewSection";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import StepwiseReportTimeline from "@/components/StepwiseReportTimeline";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const points = [
    " To create and maintain a safe academic and work environment, free from sexual harassment and discrimination.",
    "To develop a policy against sexual harassment in compliance with statutory requirements.",
    " To sensitize students and employees about the rights, responsibilities, and consequences regarding workplace behavior.",
    "To provide a platform for the redressal of complaints in a confidential and timely manner",
    " To promote awareness through workshops, seminars, and orientation programs.",
];

const Roles = [
    "Receive complaints on sexual harassment at the workplace.",
    "C Conduct inquiry and investigation into complaints following due process.",
    "Recommend appropriate action against those found guilty.",
    "Offer counseling and support services to victims.",
    " Maintain strict confidentiality during the process of investigation.",
    "Organize awareness programs, sensitization drives, and training sessions.",
];

const steps = [
    " Submitting a written complaint to the ICC Presiding Officer or designated ICC email.",
    " The complaint must be filed within three months from the date of the incident.",
    "The committee will ensure that the complaint is processed in a confidential, fair, and unbiased manner.",
    " Necessary action will be taken as per the findings of the inquiry report.",
    " Any student, faculty, or staff member facing issues related to harassment can lodge a complaint by:",
];

const documentColumns = [
    { label: "S. No", key: "sno" },
    { label: "Document", key: "name" },
    { label: "Download", key: "download" },
];

const documentData = [
    {
        sno: 1,
        name: "Notification of Internal Complaints Committee",
        download: (
            <a
                className="btn btn-primary"
                href="https://drive.google.com/file/d/1Ny5IRceBgIFmF7gD6vM2nUA4sw_vziFO/view?usp=sharing"
                target="__blank"
            >
                Download
            </a>
        ),
    },
];

const momColums = [
    { label: "S. No", key: "sno" },
    { label: "Document", key: "name" },
    { label: "Download", key: "download" },
];

const momData = [
    {
        sno: 1,
        name: "Minutes of Meeting of ICC",
        download: (
            <a
                href="https://drive.google.com/file/d/1a8Ekevx9bx3KAJVVXLQdIQBRE0s9VUJg/view?usp=sharing"
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

    {
        sno: 1,
        name: "Minutes of Meeting of SGRC",
        download: (
            <a
                href="https://drive.google.com/file/d/1dmDOHT7hQiIX_hnLlrssQUQsYg9-IV5M/view?usp=sharing"
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

const Complaints = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - Internal Complaints Committee"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "PIET - Internal Complaints Committee",
                        isCurrent: true,
                    },
                ]}
            />

            <OverviewSection
                title="About ICC (Internal Complaints Committee)"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/idealab.jpeg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>
                    At Poornima Institute of Engineering & Technology, Jaipur,
                    the Internal Complaint Committee (ICC) has been constituted
                    as per the guidelines of the University Grants Commission
                    (UGC) and in accordance with the provisions of the Sexual
                    Harassment of Women at Workplace (Prevention, Prohibition
                    and Redressal) Act, 2013.
                </p>
                <br />
                <p>
                    AICTE- IDEA Lab ( Simulation lab, Testing Lab, PCB Design
                    Lab, Mechancial Workshop lab, 3D Printing lab and laser
                    cutter & Beam Works lab) Internet of Things Lab Embedded
                    System Lab Robotics Lab Machine learning & Data Analytics
                    Lab Advanced Computing lab
                </p>
                <p>
                    The committee is committed to providing a safe, secure, and
                    respectful environment for all students, faculty, and staff.
                    It actively addresses grievances related to gender-based
                    harassment and ensures that the dignity and rights of every
                    individual are upheld within the institution.
                </p>

                <br />
            </OverviewSection>

            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objectives"
                    iconClass="fas fa-bullseye" // 🎯 Target icon — represents goals or objectives
                    content={<Checklist items={points} />}
                />

                <InfoCard
                    title="Roles and Responsibilities"
                    iconClass="fas fa-user-shield"
                    content={<Checklist items={Roles} />}
                />

                <InfoCard
                    title="Complaint Procedure"
                    iconClass="fas fa-file-alt"
                    content={<Checklist items={steps} />}
                />

                <InfoCard
                    title="Confidentiality"
                    iconClass="fas fa-lock"
                    content="The identity and personal details of the complainant, respondent, witnesses, and contents of the complaint are kept strictly confidential to protect all parties involved and uphold the integrity of the inquiry process."
                />
            </div>

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">
                <InfoCard
                    title="Message to Students and Staff:"
                    iconClass="fas fa-eye"
                    content={
                        "At PIET, Jaipur, we believe that mutual respect, dignity, and equality are the cornerstones of a vibrant academic community. The Internal Complaint Committee (ICC) stands committed to ensuring that every individual feels safe, valued, and heard. If you experience or witness inappropriate behavior, do not hesitate to reach out. We are here to support and protect you."
                    }
                />
            </div>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    {" "}
                    Important Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={documentColumns} data={documentData} />
            </div>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    {" "}
                    Minutes of Meetings
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={momColums} data={momData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Complaints;
