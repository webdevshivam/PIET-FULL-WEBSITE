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
    "Providing a platform for students to engage in technical discussions and projects.",
    "Encouraging innovation through competitions, exhibitions, and knowledge-sharing events.",
    "Bridging the gap between academic knowledge and industry trends.",
    "Offering mentorship and guidance for students pursuing careers in electronics, telecommunications, and allied fields.",
    "Facilitating collaboration with professionals, industry leaders, and researchers.",
    "Enhancing technical skills through hands-on workshops and seminars.",
];

const activities = [
    "Project Expos – Showcasing innovative student projects and research work.",
    "Technical Exhibitions – Displaying emerging technologies and student-led innovations.",
    "Meetups and Conferences – Providing networking opportunities with industry experts and researchers.",
    "Workshops and Seminars – Hands-on learning sessions on trending technologies.",
    "Industry Visits – Exposure to real-world industrial practices and work environments.",
    "Technical Competitions – Encouraging problem-solving and technical creativity.",
];

const scopePoints = [
    "Opportunities to work on interdisciplinary projects.",
    "Exposure to the latest advancements in electronics, telecommunications, and computer science.",
    "Access to exclusive industry-oriented training programs and certifications.",
    "Opportunities to publish research papers and patents.",
    "Enhanced career prospects through networking and collaboration.",
];

const committeeColumns = [
    { label: "Role", key: "role" },
    { label: "Name", key: "name" },
];

const committeeData = [
    { role: "Student Coordinator", name: "Dr. Payal Bansal" },
    { role: "Chair", name: "Mr. Aditya Pareek" },
    { role: "Co-Chair", name: "Ms. Suhani Bansal" },
    { role: "Secretary", name: "Mr. Kuldeep Soni" },
    { role: "Advisor", name: "Mr. Kuldeep Soni" },
    { role: "Treasurer", name: "Mr. Manan Jain" },
    { role: "Ambassador", name: "Mr. Ujjawal Dubey" },
];

const activityColumns = [
    { label: "Date", key: "date" },
    { label: "Activity", key: "activity" },
    { label: "Description", key: "description" },
    { label: "Coordinator(s)", key: "coordinator" },
];

const activityData = [
    {
        date: "Feb 1, 2025",
        activity: "Inauguration of the Student Forum",
        description:
            "A formal launch event introducing ISF, its vision, and objectives, along with a keynote session from distinguished professionals.",
        coordinator: "Dr. Payal Bansal",
    },
    {
        date: "Feb 14, 2025",
        activity: "Project Expo",
        description:
            "A technical exhibition where students presented innovative projects, showcasing practical applications of their academic learning.",
        coordinator: "Dr. Payal Bansal",
    },
];

const achievementColumns = [
    { label: "Sr. No.", key: "sno" },
    { label: "Activity", key: "activity" },
    { label: "Date", key: "date" },
    { label: "Achievement", key: "achievement" },
    { label: "Student", key: "student" },
];

const achievementData = [
    {
        sno: 1,
        activity: "IETE Day Project Competition at IETE Bhawan",
        date: "2/2/2025",
        achievement: "Second Position",
        student: "Aditya Pareek, Suhani Bansal, Khushi Gupta",
    },
];

const IETEPage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - IETE Student Forum (ISF)"
                description="Engage, innovate, and grow through the IETE Student Forum at Poornima Institute."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "PIET - IETE", isCurrent: true },
                ]}
            />

            <OverviewSection
                title="About IETE Student Forum (ISF)"
                subtitle="Empowering Future Engineers"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/electronics.jpeg",
                    alt: "IETE Forum at PIET",
                    caption: "Fostering Innovation & Technical Excellence",
                }}
            >
                <p>
                    The IETE Student Forum (ISF) at PIET is established with the
                    aim of fostering a vibrant technical ecosystem for students,
                    promoting research, innovation, and professional
                    development.
                </p>
            </OverviewSection>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
                <InfoCard
                    title="Objectives"
                    iconClass="fas fa-bullseye"
                    content={<Checklist items={objectives} />}
                />
                <InfoCard
                    title="Type of Activities"
                    iconClass="fas fa-cogs"
                    content={<Checklist items={activities} />}
                />
                <InfoCard
                    title="Scope of ISF"
                    iconClass="fas fa-lightbulb"
                    content={<Checklist items={scopePoints} />}
                />
                <InfoCard
                    title="Benefits of Joining ISF"
                    iconClass="fas fa-handshake"
                    content="Students gain access to national/international events, live projects, mentorship, certifications, career networking, and recognition."
                />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center">
                    Organizational Structure
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable columns={committeeColumns} data={committeeData} />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center">
                    Key Activities of ISF
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable columns={activityColumns} data={activityData} />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center">
                    Student Achievements
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable
                    columns={achievementColumns}
                    data={achievementData}
                />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IETEPage;
