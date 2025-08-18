
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import LazyImage from "@/components/LazyImage";
import { ChevronDown, ChevronUp, Calendar, Users, Award } from "lucide-react";

const StudentCouncil = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [openEventsYear, setOpenEventsYear] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const toggleEventsYear = (year: string) => {
        setOpenEventsYear(openEventsYear === year ? null : year);
    };

    const clubsData = [
        { name: "Literary Club", image: "/images/council/literary.png", link: "/literary" },
        { name: "Aptineus Club", image: "/images/council/ac.png", link: "/ac" },
        { name: "Udaan Club", image: "/images/council/uam.png", link: "/uam" },
        { name: "Helping Hands", image: "/images/council/hh.png", link: "/hh" },
        { name: "WISE", image: "/images/council/wise.png", link: "/wise" },
        { name: "JDC", image: "/images/council/jdc.png", link: "/jdc" },
        { name: "Debug Club", image: "/images/council/debug.png", link: "/debug" },
        { name: "IDEA Lab", image: "/images/council/idea.png", link: "/ideal-lab" },
        { name: "Desi Kalakar", image: "/images/council/dk.png", link: "#" },
        { name: "Gaming & Development", image: "/images/council/gnd.png", link: "/gnd" },
        { name: "Perfect Pixels", image: "/images/council/pp.png", link: "#" },
        { name: "PBIC", image: "/images/council/pbic.png", link: "/pbic" },
        { name: "Sports Club", image: "/images/council/sports.png", link: "/sports" },
        { name: "Origin", image: "/images/council/origin.png", link: "#" },
        { name: "ISTE", image: "/images/council/iste.png", link: "/ISTE" },
        { name: "IEEE", image: "/images/council/ieee.png", link: "/IEEE" },
        { name: "ACM", image: "/images/council/acm.png", link: "/ACM" },
        { name: "Cyborgs", image: "/images/council/cyborgs.png", link: "#" },
        { name: "AWS", image: "/images/council/Logo_AWS.jpg", link: "#" },
        { name: "Graduate Gateway", image: "/images/council/graduateGateway.jpg", link: "#" },
        { name: "MS Learn", image: "/images/council/MSLearn_SA.png", link: "#" },
        { name: "SPIC MACAY", image: "/images/council/spic_macay.jpg", link: "#" },
        { name: "Vibrant Vision", image: "/images/council/vibrantVision.png", link: "#" },
    ];

    const councilYears = [
        { year: "2024-25", image: "/images/council/council24-25.png" },
        { year: "2023-24", image: "/images/council/council23-24.png" },
        { year: "2022-23", image: "/images/council/council22-23.png" },
        { year: "2021-22", image: "/images/council/council21-22.jpg" },
        { year: "2020-21", image: "/images/council/council20-21.png" },
    ];

    const eventsData = {
        "2023-24": [
            { sno: 1, activity: "KALANIDHI", club: "Council" },
            { sno: 2, activity: "Freshers", club: "Council" },
            { sno: 3, activity: "Onboarding Session", club: "PBIC" },
            { sno: 4, activity: "Entrepreneurship Awareness Drive", club: "PBIC" },
            { sno: 5, activity: "AWS Community", club: "PBIC" },
            { sno: 10, activity: "SILENT TOLL (JAM)", club: "WISE" },
            { sno: 11, activity: "Nurturing Mental Wellness (session)", club: "WISE" },
            { sno: 12, activity: "Expressing Insights (Essay competition)", club: "WISE" },
            { sno: 14, activity: "IIT JODHPUR SPORTS FEST", club: "SPORTS" },
            { sno: 16, activity: "Garba Workshop", club: "DK" },
            { sno: 17, activity: "Rythmic Fusion- Dance Competition", club: "DK" },
            { sno: 31, activity: "Muskan 2.0", club: "HHG" },
            { sno: 32, activity: "World sight Day", club: "HHG" },
            { sno: 60, activity: "Manthan 2023", club: "Literary Club" },
            { sno: 67, activity: "Introductory session", club: "Debug Club" },
            // Add more events as needed...
        ],
        "2022-23": [
            { sno: 1, activity: "IIT Jodhpur", club: "Sports Club" },
            { sno: 2, activity: "Rebel yell 2.O", club: "Gaming And Development" },
            { sno: 3, activity: "Introductory session", club: "Literary Club" },
            { sno: 6, activity: "Freshers", club: "Council" },
            { sno: 37, activity: "Aarohan", club: "Council" },
            // Add more events...
        ],
        "2021-22": [
            { sno: 1, activity: "Brain Games", club: "Aptineus Club" },
            { sno: 6, activity: "CODE FOR NATION", club: "Debug Club" },
            { sno: 58, activity: "Aarohan", club: "council Activity" },
            { sno: 64, activity: "Freshers 2021 (PRABHAV 2K21)", club: "council Activity" },
            // Add more events...
        ],
        "2020-21": [
            { sno: 1, activity: "QUIZ COMPETITION", club: "Aptineus Club" },
            { sno: 8, activity: "VOCAL FOR LOCAL", club: "Helping Hands" },
            { sno: 39, activity: "SIT-UPS CHALLENGE", club: "Sports" },
            // Add more events...
        ],
        "2019-20": [
            { sno: 1, activity: "Self Defense Activity", club: "Helping Hands" },
            { sno: 2, activity: "Swachata Pakhwada", club: "Helping Hands" },
            { sno: 5, activity: "Blood Donation", club: "Helping Hands" },
            // Add more events...
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Student Council"
                description="Empowering students through leadership, community service, and academic excellence"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Student Council", isCurrent: true },
                ]}
            />

            {/* Council Logo Section */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <LazyImage
                        src="/images/council/councillogo.png"
                        alt="Student Council Logo"
                        className="w-full max-w-md mx-auto h-auto"
                    />
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-white bg-gray-800 py-4 rounded-lg mb-8">
                            Introduction
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify px-4 md:px-8">
                            The future of India sits on our benches in class everyday and we at Poornima
                            Institute of Engineering & Technology believe that to make the future of a nation better equipped
                            in all respects is our moral responsibility. We take pride in introducing the idea of a student
                            Council from the session 2019-20. To empower our youth, to strengthen their roots, to make them
                            world leaders and to polish their skills the student Council shall play an eminent role. Poornima
                            believes that we are creating Global citizens today and this concept of student Council shall help
                            create strong individuals with a vision of the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-white bg-gray-800 py-4 rounded-lg mb-8">
                            Objectives
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify px-4 md:px-8">
                            To develop the best in a student during the college life and to make a confident,
                            matured and an vivid personality with the best abilities inculcated in them which bring about
                            empathy for the lesser blessed and help them serve the community for its welfare and
                            encouraging the society for the betterment in every aspects of life with their leadership qualities
                            and sound skills.
                        </p>
                        <br />
                        <p className="text-lg text-gray-700 leading-relaxed text-justify px-4 md:px-8">
                            The Students' council will consist of a hierarchy initializing with the Chair & 2 Co-Chairs of the
                            council.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-white bg-gray-800 py-4 rounded-lg mb-8">
                            Benefits to the members of Student's Council
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-700 px-4 md:px-8">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                Completely Student Driven, Student run council with least intervention of Management.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                It will empower the student to become responsible and develops leadership qualities.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                Certificate for volunteering will be given to each individual upon successful completion of the term.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                Student member availing college transport will have the liberty to use faculty bus service on Tuesday, Thursday and Saturday.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                10 Bonus Attendance will be given against time taken out to plan various meetings & activities.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                It will foster a strong sense of community within its members.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                An Annual budget of INR 100000 will be provided to the council for marketing of various activities planned & executed throughout the year.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Faculty Advisor Message Section */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-center text-white bg-gray-600 py-4 rounded-lg mb-8">
                            Message
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/3 text-center">
                                <LazyImage
                                    src="/images/faculty1styr/AshokKumar.png"
                                    alt="Mr. Ashok Kumar"
                                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-200"
                                />
                                <h3 className="text-xl font-bold text-blue-600 mt-4">Mr. Ashok Kumar</h3>
                                <p className="text-blue-600 font-semibold">Faculty Advisor<br />Student's Council</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                    The Students' Council serves as a vital communication link between the Management and students, fostering effective dialogue. It plays a key role in planning and nurturing diverse interests such as cultural, sports, social, recreational, and educational activities within the institution. Through active involvement in the Students' Council, students can contribute to the development of their leadership skills, engage in program planning, and participate in volunteering opportunities.
                                </p>
                                <br />
                                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                                    Every significant journey begins with a single step, just as a graph depicting rapid development starts with a solitary dot. Therefore, it is highly recommended that all students of the institution consider joining the Students' Council. This experience not only promises enjoyable moments but also forms enduring connections and friendships that provide unwavering support during both challenging and rewarding times.
                                </p>
                                <br />
                                <p className="text-gray-700 text-lg leading-relaxed text-justify italic">
                                    "Embrace the opportunity to make new friends, forge lasting bonds, and embark on a journey of learning and growth by becoming a part of your Students' Council."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Constitution Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-white bg-gray-800 py-4 rounded-lg mb-8">
                            Constitution of Student's Council
                        </h2>
                        <ul className="space-y-3 text-lg text-gray-700 px-4 md:px-8">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                1 Faculty Advisor: Mr. Ashok Kumar
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                1 Chair: from III year
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                2 Co-Chairs from II Years
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                1 Captain of Each Club from II Year
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                1 Vice-Captain of each club from I Year
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Clubs Section */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-white bg-gray-800 py-4 rounded-lg mb-12">
                        Student's Council Clubs
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {clubsData.map((club, index) => (
                            <a
                                key={index}
                                href={club.link}
                                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                            >
                                <LazyImage
                                    src={club.image}
                                    alt={club.name}
                                    className="w-full h-24 object-contain mb-2"
                                />
                                <p className="text-sm font-medium text-gray-700">{club.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Council Members by Year */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-white bg-gray-600 py-4 rounded-lg mb-8">
                        Student's Council
                    </h2>
                    <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6">
                        {councilYears.map((council, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg mb-4">
                                <button
                                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200 rounded-lg"
                                    onClick={() => toggleSection(council.year)}
                                >
                                    <span className="text-lg font-semibold text-gray-800">
                                        Council {council.year}
                                    </span>
                                    {openSection === council.year ? (
                                        <ChevronUp className="h-5 w-5 text-gray-600" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-600" />
                                    )}
                                </button>
                                {openSection === council.year && (
                                    <div className="p-6 bg-white border-t border-gray-200">
                                        <LazyImage
                                            src={council.image}
                                            alt={`Council ${council.year}`}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Council Events Year Wise */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-white bg-gray-600 py-4 rounded-lg mb-8">
                        Council Events Year Wise
                    </h2>
                    <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6">
                        {Object.entries(eventsData).map(([year, events]) => (
                            <div key={year} className="border border-gray-200 rounded-lg mb-4">
                                <button
                                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200 rounded-lg"
                                    onClick={() => toggleEventsYear(year)}
                                >
                                    <span className="text-lg font-semibold text-gray-800">
                                        {year}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                            {events.length}+ events
                                        </span>
                                        {openEventsYear === year ? (
                                            <ChevronUp className="h-5 w-5 text-gray-600" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-gray-600" />
                                        )}
                                    </div>
                                </button>
                                {openEventsYear === year && (
                                    <div className="p-6 bg-white border-t border-gray-200">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border border-gray-300 rounded-lg">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                                        <th className="border border-gray-300 px-4 py-3 text-left">S.No</th>
                                                        <th className="border border-gray-300 px-4 py-3 text-left">Name of Activity</th>
                                                        <th className="border border-gray-300 px-4 py-3 text-left">Club</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {events.map((event, index) => (
                                                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                                            <td className="border border-gray-300 px-4 py-3">{event.sno}</td>
                                                            <td className="border border-gray-300 px-4 py-3">{event.activity}</td>
                                                            <td className="border border-gray-300 px-4 py-3">{event.club}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    );
};

export default StudentCouncil;
