
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import DynamicTable from "@/components/DynamicTable ";

interface Column<T> {
    label: string;
    key: keyof T;
}

interface MemberRow {
    sno: number;
    name: string;
    designation: string;
}

interface ActivityRow {
    activityNo: number;
    activityName: string;
    date: string;
    description: string;
}

const memberColumns: Column<MemberRow>[] = [
    { label: "S.No", key: "sno" },
    { label: "Name of Members", key: "name" },
    { label: "Designation", key: "designation" },
];

const activityColumns: Column<ActivityRow>[] = [
    { label: "Activity No.", key: "activityNo" },
    { label: "Activity Name", key: "activityName" },
    { label: "Date", key: "date" },
    { label: "Description", key: "description" },
];

const memberData: MemberRow[] = [
    { sno: 1, name: "Dr. Dinesh Goyal", designation: "Chairman" },
    { sno: 2, name: "Dr. Gautam Singh", designation: "Registrar" },
    { sno: 3, name: "Mr. Ashok Kumar", designation: "Faculty Coordinator" },
    { sno: 4, name: "Mr. Yash Bhatia", designation: "Student Coordinator" },
    { sno: 5, name: "Mr. Sachin Sharma", designation: "Student Member" },
    { sno: 6, name: "Mr. Lakshay Tanwani", designation: "Student Member" },
    { sno: 7, name: "Ms. Gargi Tanwar", designation: "Student Member" },
];

const activityData: ActivityRow[] = [
    {
        activityNo: 1,
        activityName: "Voter Registration Drive",
        date: "16/09/21",
        description: "Organize a voter registration drive on campus to encourage students and faculty to register to vote in upcoming elections."
    },
    {
        activityNo: 2,
        activityName: "Electoral Literacy Session",
        date: "21/10/21",
        description: "Conduct a workshop to educate participants about the electoral process, voting rights, and the importance of civic engagement."
    },
    {
        activityNo: 3,
        activityName: "Constitution Day",
        date: "26/11/21",
        description: "Host a mock election to simulate the voting experience and familiarize participants with the ballot and voting procedures."
    },
    {
        activityNo: 4,
        activityName: "Nukkad Natak",
        date: "26/01/22",
        description: "To create about Electoral Literacy in the society"
    },
    {
        activityNo: 5,
        activityName: "Election Awareness Campaign",
        date: "15/09/22",
        description: "Launch a campus-wide awareness campaign to promote the importance of voting and encourage voter turnout in upcoming elections."
    },
    {
        activityNo: 6,
        activityName: "Constitution Day",
        date: "26/11/22",
        description: "Oath taking"
    },
    {
        activityNo: 7,
        activityName: "Nukkad Natak",
        date: "15/08/23",
        description: "To create about Electoral Literacy in the society"
    },
    {
        activityNo: 8,
        activityName: "Constitution Day",
        date: "26/11/23",
        description: "Session"
    },
    {
        activityNo: 9,
        activityName: "Poster Making Competition",
        date: "26/01/24",
        description: "To spread awareness about voting right students take part in Poster Making Competition"
    },
    {
        activityNo: 10,
        activityName: "Mera Pehla Vote Desh Ke liye",
        date: "06/03/24",
        description: "To provide comprehensive information about electoral process"
    },
];

const ElectoralLiteracyForum: React.FC = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Poornima Electoral Literacy Forum (PELF)"
                description="Promoting electoral literacy and fostering responsible citizenship through democratic participation and awareness programs."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Chapters", href: "#" },
                    { label: "Electoral Literacy Forum", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Preamble Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-primary mb-6">
                            Preamble
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-lg text-neutral-700 leading-relaxed text-justify">
                            We, the students and faculty of Poornima Institute of Engineering and Technology, 
                            recognizing the importance of electoral literacy in fostering responsible citizenship 
                            and participatory democracy, hereby establish the Poornima Electoral Literacy Forum (PELF) 
                            to promote awareness, education, and engagement in the electoral process among the members 
                            of our community.
                        </p>
                    </div>
                </section>

                {/* Objectives Section */}
                <section className="mb-12">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
                        <h2 className="text-3xl font-bold text-center text-primary mb-6">
                            Objectives
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">1</span>
                                    </div>
                                    <p className="text-neutral-700">
                                        To educate students and faculty about the electoral process, including voter registration, voting rights, and the significance of elections.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">2</span>
                                    </div>
                                    <p className="text-neutral-700">
                                        To raise awareness about the importance of active participation in democratic processes.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">3</span>
                                    </div>
                                    <p className="text-neutral-700">
                                        To conduct workshops, seminars, and campaigns to promote electoral literacy.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">4</span>
                                    </div>
                                    <p className="text-neutral-700">
                                        To facilitate voter registration drives and voter education initiatives.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">5</span>
                                    </div>
                                    <p className="text-neutral-700">
                                        To collaborate with external organizations and authorities to enhance electoral literacy within the community.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">6</span>
                                    </div>
                                    <p className="text-neutral-700">
                                        To encourage ethical and responsible electoral practices among members.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Membership & Structure Section */}
                <section className="mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-primary mb-6">
                            Membership & Structure
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">
                                    <i className="fas fa-users mr-2"></i>Membership
                                </h3>
                                <ul className="space-y-2 text-neutral-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-secondary mr-2 mt-1"></i>
                                        Open to all students, faculty, and staff of PIET
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-secondary mr-2 mt-1"></i>
                                        Must support the objectives of the organization
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-secondary mr-2 mt-1"></i>
                                        Uphold principles of democratic participation
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">
                                    <i className="fas fa-sitemap mr-2"></i>Structure
                                </h3>
                                <ul className="space-y-2 text-neutral-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-user-tie text-secondary mr-2 mt-1"></i>
                                        Faculty Coordinator (1)
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-user-graduate text-secondary mr-2 mt-1"></i>
                                        Student Coordinator (1)
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-users text-secondary mr-2 mt-1"></i>
                                        Student Members (3)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Constitution Members */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        Constitution of Poornima Electoral Literacy Forum
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <DynamicTable
                            columns={memberColumns}
                            data={memberData}
                        />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-sm text-neutral-600">
                            <i className="fas fa-calendar-alt mr-2"></i>
                            Ratified and adopted on 07/09/2021 by the founding members of the Poornima Electoral Literacy Forum
                        </p>
                    </div>
                </section>

                {/* Activities Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        Activities of Poornima Electoral Literacy Forum
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <DynamicTable
                            columns={activityColumns}
                            data={activityData}
                        />
                    </div>
                </section>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default ElectoralLiteracyForum;
