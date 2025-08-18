import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const eventsData = [
    {
        year: "2024-25",
        events: [
            {
                name: "Session on Industry Academia Connect- Trailblaze Your Career with Salesforce and Altimetrik",
                participants: "200",
                date: "16th January, 2024"
            },
            {
                name: "Five Days Bootcamp on “Hackwithinfy”",
                participants: "194",
                date: "27th-31st, March 2024"
            },
            {
                name: "Advanced 3D Printing Workshop: Unleashing Innovation in Additive Manufacturing",
                participants: "60",
                date: "18th-20th January 2024"
            },
            {
                name: "Session on Reverse Engineering for Security",
                participants: "42",
                date: "15th-17th January 2024"
            },
            {
                name: "Unlocking Creativity: Introducing the IDEA LAB to School Faculty",
                participants: "35",
                date: "11th-13th January 2024"
            },
            {
                name: "The Ideation Workshop on Integrated Manufacturing",
                participants: "40",
                date: "27th to 29th January 2024"
            },
            {
                name: "Workshop on Innovation in 3D Modeling Using AutoCAD",
                participants: "42",
                date: "26th – 28th February 2024"
            },
            {
                name: "Ideation Workshop",
                participants: "52",
                date: "22nd February 2024"
            },
            {
                name: "Workshop on Creating Innovative 3D Models using 3D Printer",
                participants: "55",
                date: "11th -13th March 2024"
            },
            {
                name: "Innovative Session on Fabrication of PCB using Ink-Toner Method",
                participants: "60",
                date: "18th - 20th March 2024"
            },
            {
                name: "Advance learning Session on Introduction to SLA 3D Printing",
                participants: "45",
                date: "26th - 28th March 2024"
            },
            {
                name: "Approach to Innovation and IPR Registration",
                participants: "42",
                date: "26th April, 2024"
            },
            {
                name: "IDE Bootcamp",
                participants: "280",
                date: "9th - 10th April 2024"
            },
            {
                name: "Hands on Workshop on Introduction to Sensors and Their Application",
                participants: "50",
                date: "2nd May 2024"
            },
            {
                name: "The Student Ideation Program on Experimental Learning in IoT",
                participants: "60",
                date: "16th-17th May 2024"
            },
            {
                name: "Hands on Workshop on Coding for Sensor Integration",
                participants: "48",
                date: "13th -15th May 2024"
            },
            {
                name: "Workshop on Design Thinking and Product Development",
                participants: "55",
                date: "24th – 26th May 2024"
            },
            {
                name: "Workshop on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
                participants: "50",
                date: "18th to 20th May 2024"
            },
            {
                name: "Start-Up Expo: Connecting Innovators with Ecosystem Leaders",
                participants: "56",
                date: "24 August 2024"
            },
            {
                name: "The Development of Company Resources Through Virtualization Technology",
                participants: "50",
                date: "10th February 2024"
            },
            {
                name: "Idea to Impact: Start-Up Pitch Competition",
                participants: "100+",
                date: "15 July 2024"
            },
            {
                name: "Innovation to Launch: Validating Your Start-Up Idea",
                participants: "56",
                date: "02 August 2024"
            },
            {
                name: "Entrepreneurship and Innovation as Career Opportunities",
                participants: "100+",
                date: "13 September 2023"
            },
            {
                name: "Information Conference on Management & Machine Intelligence ICIMMI-2023",
                participants: "760",
                date: "14th-16th December, 2023"
            },
            {
                name: "International Conference on Mathematics, Modelling and Statistics (ICMMS 2023)",
                participants: "130",
                date: "1st-2nd September, 2023"
            },
            {
                name: "International Conference on Intelligent Systems & Computation (ICSIC-2024)",
                participants: "100+",
                date: "24th-25th April, 2024"
            },
            {
                name: "ICSIS-2024",
                participants: "100+",
                date: "24th-25th April, 2024"
            },
            {
                name: "International Conference on Recent Advances in Artificial Intelligence, Computer Vision and Smart Systems-2024",
                participants: "100+",
                date: "24th-25th April, 2024"
            },
            {
                name: "Smart India Hackathon-2023",
                participants: "160",
                date: "19-20 December, 2023"
            },
            {
                name: "PIET Hackathon-2023",
                participants: "300+",
                date: "22-23 September, 2023"
            },
            {
                name: "AWS Community Day- A Startup Meet",
                participants: "240",
                date: "November 04, 2023"
            },
            {
                name: "Networking Session on \"Building a Startup\"",
                participants: "55",
                date: "December 15, 2023"
            },
            {
                name: "Motivational Session for startups on Sculpting calm from clocks",
                participants: "100",
                date: "March 13, 2024"
            },
            {
                name: "Unravelling the backbone: Statistics in Data Science",
                participants: "100+",
                date: "22 November, 2023"
            },
            {
                name: "Mentoring Event: Demo Day/Exhibition/Poster Presentation of Innovations/Prototypes & linkage with Innovation Ambassadors/Experts for Mentorship Support",
                participants: "50+",
                date: "16 December,2023"
            },
            {
                name: "National Entrepreneurship Day",
                participants: "150+",
                date: "9 November, 2023"
            }
        ]
    },
    {
        year: "2023-24",

        events: [
            {
                name: "International Conference on Mathematics, Modelling and Statistics (ICMMS 2023)",
                participants: "130",
                date: "1st-2nd September, 2023"
            },
            {
                name: "Entrepreneurship and Innovation as Career Opportunities",
                participants: "100+",
                date: "13 September 2023"
            },
            {
                name: "PIET Hackathon-2023",
                participants: "300+",
                date: "22-23 September, 2023"
            },
            {
                name: "AWS Community Day- A Startup Meet",
                participants: "240",
                date: "November 04, 2023"
            },
            {
                name: "National Entrepreneurship Day",
                participants: "150+",
                date: "9 November, 2023"
            },
            {
                name: "Unravelling the backbone: Statistics in Data Science",
                participants: "100+",
                date: "22 November, 2023"
            },
            {
                name: "Information Conference on Management & Machine Intelligence ICIMMI-2023",
                participants: "760",
                date: "14th-16th December, 2023"
            },
            {
                name: "Networking Session on \"Building a Startup\"",
                participants: "55",
                date: "December 15, 2023"
            },
            {
                name: "Mentoring Event: Demo Day/Exhibition/Poster Presentation of Innovations/Prototypes & linkage with Innovation Ambassadors/Experts for Mentorship Support",
                participants: "50+",
                date: "16 December,2023"
            },
            {
                name: "Smart India Hackathon-2023",
                participants: "160",
                date: "19-20 December, 2023"
            },
            {
                name: "Session on Industry Academia Connect- Trailblaze Your Career with Salesforce and Altimetrik",
                participants: "200",
                date: "16th January, 2024"
            },
            {
                name: "Advanced 3D Printing Workshop: Unleashing Innovation in Additive Manufacturing",
                participants: "60",
                date: "18th-20th January 2024"
            },
            {
                name: "Session on Reverse Engineering for Security",
                participants: "42",
                date: "15th-17th January 2024"
            },
            {
                name: "Unlocking Creativity: Introducing the IDEA LAB to School Faculty",
                participants: "35",
                date: "11th-13th January 2024"
            },
            {
                name: "The Ideation Workshop on Integrated Manufacturing",
                participants: "40",
                date: "27th to 29th January 2024"
            },
            {
                name: "The Development of Company Resources Through Virtualization Technology",
                participants: "50",
                date: "10th February 2024"
            },
            {
                name: "Ideation Workshop",
                participants: "52",
                date: "22nd February 2024"
            },
            {
                name: "Workshop on Innovation in 3D Modeling Using AutoCAD",
                participants: "42",
                date: "26th – 28th February 2024"
            },
            {
                name: "Workshop on Creating Innovative 3D Models using 3D Printer",
                participants: "55",
                date: "11th -13th March 2024"
            },
            {
                name: "Innovative Session on Fabrication of PCB using Ink-Toner Method",
                participants: "60",
                date: "18th - 20th March 2024"
            },
            {
                name: "Advance learning Session on Introduction to SLA 3D Printing",
                participants: "45",
                date: "26th - 28th March 2024"
            },
            {
                name: "Motivational Session for startups on Sculpting calm from clocks",
                participants: "100",
                date: "March 13, 2024"
            },
            {
                name: "Five Days Bootcamp on \"Hackwithinfy\"",
                participants: "194",
                date: "27th-31st, March 2024"
            },
            {
                name: "IDE Bootcamp",
                participants: "280",
                date: "9th - 10th April 2024"
            },
            {
                name: "International Conference on Intelligent Systems & Computation (ICSIC-2024)",
                participants: "100+",
                date: "24th-25th April, 2024"
            },
            {
                name: "ICSIS-2024",
                participants: "100+",
                date: "24th-25th April, 2024"
            },
            {
                name: "International Conference on Recent Advances in Artificial Intelligence, Computer Vision and Smart Systems-2024",
                participants: "100+",
                date: "24th-25th April, 2024"
            },
            {
                name: "Approach to Innovation and IPR Registration",
                participants: "42",
                date: "26th April, 2024"
            },
            {
                name: "Hands on Workshop on Introduction to Sensors and Their Application",
                participants: "50",
                date: "2nd May 2024"
            },
            {
                name: "Hands on Workshop on Coding for Sensor Integration",
                participants: "48",
                date: "13th -15th May 2024"
            },
            {
                name: "The Student Ideation Program on Experimental Learning in IoT",
                participants: "60",
                date: "16th-17th May 2024"
            },
            {
                name: "Workshop on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
                participants: "50",
                date: "18th to 20th May 2024"
            },
            {
                name: "Workshop on Design Thinking and Product Development",
                participants: "55",
                date: "24th – 26th May 2024"
            },
            {
                name: "Idea to Impact: Start-Up Pitch Competition",
                participants: "100+",
                date: "15 July 2024"
            },
            {
                name: "Innovation to Launch: Validating Your Start-Up Idea",
                participants: "56",
                date: "02 August 2024"
            },
            {
                name: "Start-Up Expo: Connecting Innovators with Ecosystem Leaders",
                participants: "56",
                date: "24 August 2024"
            }
        ]
    },
    {
        year: "2022-23",

        events: [
            {
                name: "FDP on IoT based Product Development (using Advanced Digital Manufacturing Equipment, Tools and Resources)",
                participants: "N/A",
                date: "July 13, 2022 - July 15, 2022"
            },
            {
                name: "Summer Internship Program on IoT based Product Development, using Advanced Digital Manufacturing Equipment, Tools and Resources",
                participants: "N/A",
                date: "July 18, 2022 - August 01, 2022"
            },
            {
                name: "National level project exhibition \"UDHBHAV\" 2022",
                participants: "N/A",
                date: "August 22, 2022"
            },
            {
                name: "Ideation Workshop For Students",
                participants: "N/A",
                date: "September 21, 2022 - September 23, 2022"
            },
            {
                name: "My Story - Motivational Session by Successful Entrepreneur/Start-up founder.",
                participants: "N/A",
                date: "November 2, 2022 - November 23, 2022"
            },
            {
                name: "My Story - Motivational Session by Successful Innovators.",
                participants: "N/A",
                date: "November 5, 2022 - November 07, 2022"
            },
            {
                name: "A Session on Design Thinking",
                participants: "N/A",
                date: "November 18, 2022"
            },
            {
                name: "ABES Aicte Idea Lab Student Ambassador Regional Innovation Challenge",
                participants: "N/A",
                date: "November 18, 2022 - November 19, 2022"
            },
            {
                name: "Workshop on \"Entrepreneurship and Innovation as Career Opportunity\"",
                participants: "N/A",
                date: "November 23, 2022 - November 29, 2022"
            },
            {
                name: "Session/Workshop on Business Model Canvas (BMC)",
                participants: "N/A",
                date: "December 6, 2022 - December 10, 2022"
            },
            {
                name: "Success Story by Incubate (Startup - RentNEarn)",
                participants: "N/A",
                date: "December 9, 2022"
            },
            {
                name: "National Innovation Challenge at Piet, Panipat",
                participants: "N/A",
                date: "December 10, 2022"
            },
            {
                name: "session on \"How to become a successful Entrepreneur\"",
                participants: "N/A",
                date: "December 10, 2022"
            },
            {
                name: "4th International Conference on Information Management & Machine Intelligence (ICIMMI 2022)",
                participants: "N/A",
                date: "December 23, 2022 - December 24, 2022"
            },
            {
                name: "Entrepreneurship For Absolute Beginners",
                participants: "N/A",
                date: "December 27, 2022"
            },
            {
                name: "Workshop on 3D printing in industry 4.0",
                participants: "N/A",
                date: "January 17, 2023"
            },
            {
                name: "Outside Participation LNMIIT Hackathon",
                participants: "N/A",
                date: "January 27, 2023 - January 29, 2023"
            },
            {
                name: "Leadership Talk with Prof. T. G. Sitharam, Hon'ble Chairman, All India Council for Technical Education (AICTE)",
                participants: "N/A",
                date: "January 30, 2023"
            },
            {
                name: "Session on Achieving Problem-Solution Fit & Product-Market Fit",
                participants: "N/A",
                date: "February 23, 2022"
            },
            {
                name: "Entrepreneurship the Real World Challenges & the Road Ahead",
                participants: "N/A",
                date: "Febuary 06, 2023"
            },
            {
                name: "2nd Edition of Poornima Hackathon",
                participants: "N/A",
                date: "March 3, 2023 - March 04, 2023"
            },
            {
                name: "Session on Angel Investment/VC Funding Opportunity for Early Stage Entrepreneurs",
                participants: "N/A",
                date: "March 11, 2023 - March 23, 2023"
            },
            {
                name: "How to Become Entrepreneur",
                participants: "N/A",
                date: "March 11, 2023"
            },
            {
                name: "Six-Days Workshop on Textual Magic: Exploring NLP with NLTK",
                participants: "N/A",
                date: "March 27, 2023 - April 01, 2023"
            },
            {
                name: "An ISTE sponsored FDP on \"Advanced Tools and Techniques for Quality Research Analysis and Writing\"",
                participants: "N/A",
                date: "March 28, 2023"
            },
            {
                name: "Workshop on Intellectual Property Rights (IPRs) and IP management for start up",
                participants: "N/A",
                date: "April 5, 2023 - April 06, 2023"
            },
            {
                name: "Leadership Talk on 'Exploring the Opportunity for the Start-up with Ethical and Legal Prospective'",
                participants: "N/A",
                date: "April 28, 2023"
            },
            {
                name: "One Day Seminar on \"Innovation in game development using Python\"",
                participants: "N/A",
                date: "May 5, 2023 - May 23, 2023"
            },
            {
                name: "A workshop on IoT from IDEA to prototype: Rapid prototyping techniques",
                participants: "N/A",
                date: "May 18, 2023 - May 20, 2023"
            },
            {
                name: "Innovation and Entrepreneurship-G 20",
                participants: "N/A",
                date: "May 18, 2023"
            },
            {
                name: "Session on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
                participants: "N/A",
                date: "May 18, 2023 - May 20, 2023"
            },
            {
                name: "Session/Panel discussion with innovation and Start-up Ecosystem Enablers from the region/state/national level",
                participants: "N/A",
                date: "June 2, 2023 - June 24, 2023"
            },
            {
                name: "Student ideation program on experiential learning in IoT",
                participants: "N/A",
                date: "July 12, 2023 - July 14, 2023"
            },
            {
                name: "Student Skilling Program on Design Thinking and Product Development",
                participants: "N/A",
                date: "July 24, 2023 - July 26, 2023"
            },
            {
                name: "Transforming Research into Publication, Patent, Project and Product Development",
                participants: "N/A",
                date: "July 26, 2023 - July 28, 2023"
            },
            {
                name: "Ideation Workshop on Integrated Manufacturing Techniques",
                participants: "N/A",
                date: "August 7, 2023 - August 09, 2023"
            },
            {
                name: "Organise Session on \"Lean Start-up & Minimum Viable Product/Business\"- Boot Camp (or) Mentoring Session",
                participants: "N/A",
                date: "August 12, 2023 - August 14, 2023"
            }
        ]
    },
    {
        year: "2021-22",

        events: [
            {
                name: "Why, What and how of patents",
                participants: "N/A",
                date: "October 27, 2021"
            },
            {
                name: "Trends and Innovations in Healthcare It Landscape",
                participants: "N/A",
                date: "December 16, 2021"
            },
            {
                name: "Process of Innovation Development & Technology Readiness Level(TRL) & Commercialization of Lab Technology & Tech-Transfer",
                participants: "N/A",
                date: "January 10, 2022"
            },
            {
                name: "National Startup Day",
                participants: "N/A",
                date: "January 23, 2022"
            },
            {
                name: "World Intellectual Property Day",
                participants: "N/A",
                date: "January 24, 2022 - January 26, 2022"
            },
            {
                name: "An Expert Talk On \"Development of Company Resources through Virtualization Technology\"",
                participants: "N/A",
                date: "February 10, 2022"
            },
            {
                name: "Workshop on \"Enterpreneurship skills attitude and behaviour development\"",
                participants: "N/A",
                date: "February 19, 2022"
            },
            {
                name: "IDEATION WORKSHOP with collaboration of PIET AICTE IDEA LAB",
                participants: "N/A",
                date: "February 22, 2022"
            },
            {
                name: "Design Searching and Filing",
                participants: "N/A",
                date: "February 24, 2022"
            },
            {
                name: "IPR Awareness Program",
                participants: "N/A",
                date: "April 26, 2022"
            },
            {
                name: "Toycathon 2021 Nodel Center for Digital Edition",
                participants: "N/A",
                date: "May 22, 2022 - May 25, 2022"
            },
            {
                name: "\"Campus Entrepreneur Master Class\"",
                participants: "N/A",
                date: "May 27, 2022"
            },
            {
                name: "Session on How to Build a Startup From Bottom to Top",
                participants: "N/A",
                date: "June 10, 2022"
            },
            {
                name: "A Session on Achieving \"Value Proposition Fit\" & \"Business Fit\"",
                participants: "N/A",
                date: "June 11, 2022"
            },
            {
                name: "Project Exhibition of Start-ups Developed & Linkage with Innovation",
                participants: "N/A",
                date: "June 25, 2022"
            },
            {
                name: "Field/Exposure Visit to Pre-incubation units at Bhamashah Techno Hub, Centre, Jaipur",
                participants: "N/A",
                date: "December 3, 2022"
            }
        ]
    },
    {
        year: "2020-21",

        events: [
            {
                name: "Utilization of Design Experiment for Assessing Quality Research",
                participants: "N/A",
                date: "June 19, 2020"
            },
            {
                name: "Expert Session on awareness session on Intellectual property rights, patent and Trademarks",
                participants: "N/A",
                date: "July 14, 2020"
            },
            {
                name: "The game has changed crafting a career in new normal",
                participants: "N/A",
                date: "January 13, 2021"
            },
            {
                name: "Business Communication & Leadership Skills for Startups",
                participants: "N/A",
                date: "January 20, 2021"
            },
            {
                name: "Intellectual Property Rights - 2021",
                participants: "N/A",
                date: "January 23, 2021"
            },
            {
                name: "Webinar on The Journey of a thesis of a research paper to a patent",
                participants: "N/A",
                date: "February 9, 2021"
            },
            {
                name: "Expert Session on The Journey of a thesis of a research paper to a patent",
                participants: "N/A",
                date: "February 9, 2021"
            },
            {
                name: "RTU(ATU) TEQIP III sponsored Industry Expert session on Setting up and growing business venture",
                participants: "N/A",
                date: "March 22, 2021 - March 23, 2021"
            },
            {
                name: "Workshop on Entrepreneurial Achievement Motivation",
                participants: "N/A",
                date: "May 29, 2021"
            },
            {
                name: "Rtu poornima hackathon-2021",
                participants: "N/A",
                date: "June 22, 2021 - June 24, 2021"
            },
            {
                name: "A Seminar on Industry Readiness",
                participants: "N/A",
                date: "July 10, 2021"
            }
        ]
    },
    {
        year: "2019-20",

        events: [
            {
                name: "Innocity Entrepreneurship Bootcamp - 3-day program organized by Startup Oasis in association with Innocity and Gensus Edutainers",
                participants: "N/A",
                date: "July 25, 2019 - July 27, 2019"
            },
            {
                name: "Inauguration of Startup Accelerator Program - Genstart",
                participants: "N/A",
                date: "October 12, 2019"
            }
        ]
    },
    {
        year: "2018-29",

        events: [
            {
                name: "CliffHangersByWVS organized by Writer's Voice Society supported by PBIC",
                participants: "N/A",
                date: "August 14, 2018 - August 24, 2018"
            },
            {
                name: "Udyamita-2018",
                participants: "N/A",
                date: "August 20, 2018 - August 23, 2018"
            },
            {
                name: "PRAYAG 2K18",
                participants: "N/A",
                date: "September 25, 2018 - September 28, 2018"
            },
            {
                name: "EAD-18 (Entrepreneurship Awareness Drive-2018) Supported by e-cell, IIT Kharagpur",
                participants: "N/A",
                date: "October 16, 2018"
            },
            {
                name: "IPR for Students and Faculty Members-I",
                participants: "N/A",
                date: "January 10, 2019"
            },
            {
                name: "IPR for Students and Faculty Members-II",
                participants: "N/A",
                date: "January 25, 2019"
            }
        ]
    }
];

const ExpandableCard = ({ year, events }: { year: string; events: any[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card className="my-4">
            <CardContent className="p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{year}</h2>
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "Hide" : "Show"}
                    </Button>
                </div>
                {isOpen && (
                    <table className="w-full mt-4 table-auto border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">S.No</th>
                                <th className="border px-4 py-2">Name of Activity</th>
                                <th className="border px-4 py-2">Number of Participants</th>
                                <th className="border px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">{event.name}</td>
                                    <td className="border px-4 py-2">{event.participants}</td>
                                    <td className="border px-4 py-2">{event.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </CardContent>
        </Card>
    );
};

const EventPage = () => {
    return (
        <>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Department Of Applied Science"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Department of Applied Science', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold my-6">Workshops, Seminars & Conferences</h1>
                {eventsData.map((data, index) => (
                    <ExpandableCard key={index} year={data.year} events={data.events} />
                ))}
            </div>

            <Cta />
            <Footer />
        </>

    );
};

export default EventPage;
