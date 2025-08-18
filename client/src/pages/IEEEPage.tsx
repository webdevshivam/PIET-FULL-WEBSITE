import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const benefits = [
    "Opportunities to network on a local level.",
    "Free website hosting for the branch.",
    "Funding for events, projects, and activities.",
    "Project development & sponsorship via IEEE.",
    "Support in hosting professional awareness programs.",
    "Connection with like‑minded global IEEE groups.",
];

const cisObjectives = [
    "Hands‑on workshops in neural networks, fuzzy systems, evolutionary computation.",
    "Career guidance sessions by industry experts.",
    "Networking with professionals and researchers.",
    "Encourage student research projects in computational intelligence.",
    "Seminars, guest lectures, and conferences to share latest trends.",
];

const membershipBenefits = [
    "Access to IEEE Xplore digital library.",
    "Webinars, workshops & certification programs.",
    "Global professional networking.",
    "Mentoring, job boards & career fairs.",
    "Discounts on IEEE conferences and publications.",
    "Leadership opportunities within IEEE.",
    "Local community engagement and outreach.",
    "Recognition through IEEE awards.",
];

const cisActivities = [
    {
        date: "March 15, 2024",
        event: "Session on Text Classification and Sentiment Analysis",
        coordinator: "Dr. Budesh Kanwar",
    },
    {
        date: "March 06, 2024",
        event: "Launch of IEEE CIS PIET Student Branch",
        coordinator: "Dr. Budesh Kanwar",
    },
    {
        date: "Feb 28–29, 2024",
        event: "ANN Workshop using Python & TensorFlow",
        coordinator: "Dr. Sandeep Gupta, Kamal Saini, Alka Rani",
    },
];

const cisCommittee = [
    { role: "Advisor", name: "Dr. Budesh Kanwar" },
    { role: "Counselor", name: "Dr. Sourabh Raj" },
    { role: "Chair", name: "Vikas Sharma" },
    { role: "Vice Chair", name: "Vanshaj Gaur" },
    { role: "Secretary", name: "Tanishq Soni" },
    { role: "Web Master", name: "Rishabh Gupta" },
    { role: "Treasurer", name: "Shashank Singh Shekhawat" },
];

const members = [
    { name: "Divya Jangid", id: "99805880" },
    { name: "Gargi Sharma", id: "99804233" },
    { name: "Gargi Tak", id: "99799641" },
    { name: "Heena Kuntal", id: "99802894" },
    { name: "Rhythm Verma", id: "99799165" },
    { name: "Navdeep Doriya", id: "99802968" },
    { name: "Rishabh Gupta", id: "99802537" },
    { name: "Sejal Jain", id: "99805824" },
    { name: "Sangita Biswas", id: "100042492" },
    { name: "Sakshi Mundra", id: "100042583" },
    { name: "Shashank Shekhawat", id: "99802409" },
    { name: "Simran Jethwani", id: "99805889" },
    { name: "Vanshaj Gaur", id: "99799567" },
    { name: "Vikas Sharma", id: "99793894" },
    { name: "Tanishq Soni", id: "99873568" },
];

const IEEEPage = () => (
    <div>
        <AccessibilityFeatures />
        <Header />
        <BreadCrumb
            title="IEEE Student Branch"
            description="Fostering technical excellence, networking, and research at PIET."
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "IEEE Student Branch", isCurrent: true },
            ]}
        />

        {/* Cards Section */}
        <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
                iconClass="fas fa-layer-group"
                title="Scope & Structure"
                content="A campus-level unit promoting technical development & networking; led by chair, vice-chair, secretary, treasurer under faculty advisor guidance."
            />
            <InfoCard
                iconClass="fas fa-chalkboard-teacher"
                title="Activities"
                content="We organize workshops, seminars, industrial visits, competitions, enhancing students’ skills in engineering and technology."
            />
            <InfoCard
                iconClass="fas fa-user-check"
                title="Membership"
                content="Open to all IEEE student members at PIET; includes CIS & Circuits & Systems Society chapters."
            />
            <InfoCard
                iconClass="fas fa-trophy"
                title="Membership Benefits"
                content={<Checklist items={membershipBenefits} />}
            />
            <InfoCard
                iconClass="fas fa-robot"
                title="IEEE CIS Objectives"
                content={<Checklist items={cisObjectives} />}
            />
            <InfoCard
                iconClass="fas fa-handshake"
                title="Branch Benefits"
                content={<Checklist items={benefits} />}
            />
        </div>

        {/* Committee Section */}
        <div className="container mx-auto mt-10 px-4">
            <h2 className="text-3xl text-primary font-bold mb-4">
                IEEE CIS Committee @ PIET
            </h2>
            <div className="overflow-x-auto">
                <DynamicTable
                    columns={[
                        { label: "Role", key: "role" },
                        { label: "Name", key: "name" },
                    ]}
                    data={cisCommittee}
                />
            </div>
        </div>

        {/* Members Section */}
        <div className="container mx-auto mt-10 px-4">
            <h2 className="text-3xl text-primary font-bold mb-4">
                IEEE CIS Members
            </h2>
            <div className="overflow-x-auto">
                <DynamicTable
                    columns={[
                        { label: "Member Name", key: "name" },
                        { label: "Member ID", key: "id" },
                    ]}
                    data={members}
                />
            </div>
        </div>

        {/* Activities Table */}
        <div className="container mx-auto mt-10 px-4 mb-10">
            <h2 className="text-3xl text-primary font-bold mb-4">
                Key Activities (2024)
            </h2>
            <div className="overflow-x-auto">
                <DynamicTable
                    columns={[
                        { label: "Date", key: "date" },
                        { label: "Activity", key: "event" },
                        { label: "Coordinator(s)", key: "coordinator" },
                    ]}
                    data={cisActivities}
                />
            </div>
        </div>

        <Cta />
        <Footer />
    </div>
);

export default IEEEPage;
