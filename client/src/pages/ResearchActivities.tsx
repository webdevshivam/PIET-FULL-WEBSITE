import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Calendar,
    Users,
    Award,
    TrendingUp,
} from "lucide-react";

const researchActivitiesData = {
    "2024-25": [
        {
            sno: 1,
            activity:
                "Four Days Workshop on Mastering Programming Skills Required for Data Structures & C++",
            date: "3-6 Sep-2024",
        },
        {
            sno: 2,
            activity: "Summer Internship on Java Full Stack Web Development",
            date: "8 July-17 August 2024",
        },
        {
            sno: 3,
            activity: "Five Days workshop on Cyber Security & Ethical Hacking",
            date: "18-22 Nov 2024",
        },
        {
            sno: 4,
            activity: "UDBHAV-2024: National Level Project Exhibition",
            date: "6-Nov-24",
        },
        {
            sno: 5,
            activity:
                "FDP On Advanced Tools & Techniques For Quality Research, Innovation And Analysis",
            date: "19-23 Nov 2024",
        },
        {
            sno: 6,
            activity: "AICTE-FDP on Universal Human Values",
            date: "3-5 Jan 2025",
        },
        {
            sno: 7,
            activity:
                "AICTE-ATAL FDP (Online) _Preserving Local Dialects Using Multi-layer Perceptron for Sustainable Development of Communities.",
            date: "20-25 Jan 2025",
        },
        {
            sno: 8,
            activity:
                "Empowering Digital Classrooms: A Workshop on TCSion Cloud Learning & Course File Preparation",
            date: "05 October 2024",
        },
        {
            sno: 9,
            activity:
                "AWS Academy Educator Online Workshop Introduction to AWS Academy LMS",
            date: "07 January 2025",
        },
        {
            sno: 10,
            activity:
                "Faculty Development Program on Mobile Application Development",
            date: "9-10 January 2025",
        },
        {
            sno: 11,
            activity: "6 Days Master Class on Machine Learning",
            date: "10-15 February 2025",
        },
        {
            sno: 12,
            activity: "3-Day Workshop on Problem-Solving Skills in Programming",
            date: "21-23 August 2024",
        },
        {
            sno: 13,
            activity: "Mastering Algorithms for Competitive Programming",
            date: "20-Oct-24",
        },
        {
            sno: 14,
            activity: "CORE CONCEPTS OF OBJECT - ORIENTED PROGRAMING",
            date: "14 Nov 24",
        },
        {
            sno: 15,
            activity: "Designing the Future - IoT Workshop for Beginners",
            date: "8th-10th Jan 2024",
        },
        {
            sno: 16,
            activity:
                "Designing the Future - Navigating the World of PCBs with Cutting-Edge Software Solutions",
            date: "4th-6th Jan 2024",
        },
        {
            sno: 17,
            activity:
                "Advanced 3D Printing Workshop: Unleashing Innovation in Additive Manufacturing",
            date: "18th-20th Jan 2024",
        },
        {
            sno: 18,
            activity:
                "Unlocking Creativity: Introducing the IDEA LAB to School Faculty",
            date: "11th-13th Jan 2024",
        },
        {
            sno: 19,
            activity: "The Ideation Workshop on Integrated Manufacturing",
            date: "27-29 January 2024",
        },
        {
            sno: 20,
            activity:
                "Interactive Session: Integration of IoT with PCBs - Challenges and Solutions",
            date: "4th February 2024",
        },
        {
            sno: 21,
            activity: "Introduction to 3D Scanning",
            date: "22-24 April 2024",
        },
        {
            sno: 22,
            activity:
                "Workshop on Introduction to Sensors and Their Application",
            date: "2nd May 2024",
        },
        {
            sno: 23,
            activity:
                "The Student Ideation Program on Experimental Learning in IoT",
            date: "16th-17th May 2024",
        },
        {
            sno: 24,
            activity:
                "Technology Awareness Session: Bridging Gaps, Shaping the Future",
            date: "11-May-24",
        },
        {
            sno: 25,
            activity:
                "Workshop on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs.",
            date: "18th to 20th May 2024",
        },
        { sno: 26, activity: "Laser cutting workshop", date: "28-Aug-24" },
        {
            sno: 27,
            activity: "Orientation Session on Smart India Hackathon",
            date: "10-Sep-24",
        },
        {
            sno: 28,
            activity: "Smart India Internal Hackathon",
            date: "13 - 14 September 2024",
        },
        { sno: 29, activity: "UDHBHAV 2024", date: "6-Nov-24" },
        {
            sno: 30,
            activity: "IEEE NEXUS : Connecting you to technological excellence",
            date: "6th March 2024",
        },
        {
            sno: 31,
            activity:
                "Field Visit: Pre-Incubation Units at Bhamashah Techno Hub, Jaipur",
            date: "3rd April,2024",
        },
        {
            sno: 32,
            activity:
                "Expert Talk on The Development of Company Resources Through Virtualization Technology",
            date: "10th February2024",
        },
        { sno: 33, activity: "IDE Bootcamp", date: "9th - 10th April 2024" },
        {
            sno: 34,
            activity: "Approach to Innovation and IPR Registration",
            date: "26th April, 2024",
        },
        {
            sno: 35,
            activity: "Leadership Talk with Prof. T.G. Sitharam",
            date: "15th April,2024",
        },
        {
            sno: 36,
            activity:
                "Expert Talk on The Topic of Utilizing Virtualization Technology",
            date: "10th May 2024",
        },
        { sno: 37, activity: "Hack India", date: "3 - 4 October 2024" },
        {
            sno: 38,
            activity: "Hack Sprint DCGC 2.0 Google Cloud Hackathon",
            date: "13-Nov-24",
        },
        { sno: 39, activity: "IPR session", date: "8 Feb 2025" },
    ],
    "2023-24": [
        {
            sno: 1,
            activity:
                "Session on Industry Academia Connect- Trailblaze Your Career with Salesforce and Altimetrik",
            participants: 200,
            date: "16th January, 2024",
        },
        {
            sno: 2,
            activity: "Five Days Bootcamp on Hackwithinfy",
            participants: 194,
            date: "27th-31st, March 2024",
        },
        {
            sno: 3,
            activity:
                "Advanced 3D Printing Workshop: Unleashing Innovation in Additive Manufacturing",
            participants: 60,
            date: "18th-20th January 2024",
        },
        {
            sno: 4,
            activity: "Session on Reverse Engineering for Security",
            participants: 42,
            date: "15th-17th January 2024",
        },
        {
            sno: 5,
            activity:
                "Unlocking Creativity: Introducing the IDEA LAB to School Faculty",
            participants: 35,
            date: "11th-13th January 2024",
        },
        {
            sno: 6,
            activity: "The Ideation Workshop on Integrated Manufacturing",
            participants: 40,
            date: "27th to 29th January 2024",
        },
        {
            sno: 7,
            activity: "Workshop on Innovation in 3D Modeling Using AutoCAD",
            participants: 42,
            date: "26th – 28th February 2024",
        },
        {
            sno: 8,
            activity: "Ideation Workshop",
            participants: 52,
            date: "22nd February 2024",
        },
        {
            sno: 9,
            activity:
                "Workshop on Creating Innovative 3D Models using 3D Printer",
            participants: 55,
            date: "11th -13th March 2024",
        },
        {
            sno: 10,
            activity:
                "Innovative Session on Fabrication of PCB using Ink-Toner Method",
            participants: 60,
            date: "18th - 20th March 2024",
        },
        {
            sno: 11,
            activity:
                "Advance learning Session on Introduction to SLA 3D Printing",
            participants: 45,
            date: "26th - 28th March 2024",
        },
        {
            sno: 12,
            activity: "Approach to Innovation and IPR Registration",
            participants: 42,
            date: "26th April, 2024",
        },
        {
            sno: 13,
            activity: "IDE Bootcamp",
            participants: 280,
            date: "9th - 10th April 2024",
        },
        {
            sno: 14,
            activity:
                "Hands on Workshop on Introduction to Sensors and Their Application",
            participants: 50,
            date: "2nd May 2024",
        },
        {
            sno: 15,
            activity:
                "The Student Ideation Program on Experimental Learning in IoT",
            participants: 60,
            date: "16th-17th May 2024",
        },
        {
            sno: 16,
            activity: "Hands on Workshop on Coding for Sensor Integration",
            participants: 48,
            date: "13th -15th May 2024",
        },
        {
            sno: 17,
            activity: "Workshop on Design Thinking and Product Development",
            participants: 55,
            date: "24th – 26th May 2024",
        },
        {
            sno: 18,
            activity:
                "Workshop on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
            participants: 50,
            date: "18th to 20th May 2024",
        },
        {
            sno: 19,
            activity:
                "Start-Up Expo: Connecting Innovators with Ecosystem Leaders",
            participants: 56,
            date: "24 August 2024",
        },
        {
            sno: 20,
            activity:
                "The Development of Company Resources Through Virtualization Technology",
            participants: 50,
            date: "10th February 2024",
        },
        {
            sno: 21,
            activity: "Idea to Impact: Start-Up Pitch Competition",
            participants: "100+",
            date: "15 July 2024",
        },
        {
            sno: 22,
            activity: "Innovation to Launch: Validating Your Start-Up Idea",
            participants: 56,
            date: "02 August 2024",
        },
        {
            sno: 23,
            activity: "Entrepreneurship and Innovation as Career Opportunities",
            participants: "100+",
            date: "13 September 2023",
        },
        {
            sno: 24,
            activity:
                "Information Conference on Management & Machine Intelligence ICIMMI-2023",
            participants: 760,
            date: "14th-16th December, 2023",
        },
        {
            sno: 25,
            activity:
                "International Conference on Mathematics, Modelling and Statistics (ICMMS 2023)",
            participants: 130,
            date: "1st-2nd September, 2023",
        },
        {
            sno: 26,
            activity:
                "International Conference on Intelligent Systems & Computation (ICSIC-2024)",
            participants: "100+",
            date: "24th-25th April, 2024",
        },
        {
            sno: 27,
            activity: "ICSIS-2024",
            participants: "100+",
            date: "24th-25th April, 2024",
        },
        {
            sno: 28,
            activity:
                "International Conference on Recent Advances in Artificial Intelligence, Computer Vision and Smart Systems-2024",
            participants: "100+",
            date: "24th-25th April, 2024",
        },
        {
            sno: 29,
            activity: "Smart India Hackathon-2023",
            participants: 160,
            date: "19-20 December, 2023",
        },
        {
            sno: 30,
            activity: "PIET Hackathon-2023",
            participants: "300+",
            date: "22-23 September, 2023",
        },
        {
            sno: 31,
            activity: "AWS Community Day- A Startup Meet",
            participants: 240,
            date: "November 04, 2023",
        },
        {
            sno: 32,
            activity: "Networking Session on Building a Startup",
            participants: 55,
            date: "December 15, 2023",
        },
        {
            sno: 33,
            activity:
                "Motivational Session for startups on Sculpting calm from clocks",
            participants: 100,
            date: "March 13, 2024",
        },
        {
            sno: 34,
            activity: "Unravelling the backbone: Statistics in Data Science",
            participants: "100+",
            date: "22 November, 2023",
        },
        {
            sno: 35,
            activity:
                "Mentoring Event: Demo Day/Exhibition/Poster Presentation of Innovations/Prototypes & linkage with Innovation Ambassadors/Experts for Mentorship Support",
            participants: "50+",
            date: "16 December,2023",
        },
        {
            sno: 36,
            activity: "National Entrepreneurship Day",
            participants: "150+",
            date: "9 November, 2023",
        },
    ],
    "2022-23": [
        {
            sno: 1,
            activity:
                "Leadership Talk with Prof. T. G. Sitharam, Hon'ble Chairman, All India Council for Technical Education (AICTE)",
            from: "January 30, 2023",
            to: "January 30, 2023",
        },
        {
            sno: 2,
            activity: "2nd Edition of Poornima Hackathon",
            from: "March 3, 2023",
            to: "March 04, 2023",
        },
        {
            sno: 3,
            activity:
                "Session on Angel Investment/VC Funding Opportunity for Early Stage Entrepreneurs",
            from: "March 11, 2023",
            to: "March 23, 2023",
        },
        {
            sno: 4,
            activity:
                "An ISTE sponsored FDP on Advanced Tools and Techniques for Quality Research Analysis and Writing",
            from: "March 28, 2023",
            to: "March 28, 2023",
        },
        {
            sno: 5,
            activity:
                "Workshop on Intellectual Property Rights (IPRs) and IP management for start up",
            from: "April 5, 2023",
            to: "April 06, 2023",
        },
        {
            sno: 6,
            activity:
                "Leadership Talk on 'Exploring the Opportunity for the Start-up with Ethical and Legal Prospective'",
            from: "April 28, 2023",
            to: "April 28, 2023",
        },
        {
            sno: 7,
            activity:
                "One Day Seminar on Innovation in game development using Python",
            from: "May 5, 2023",
            to: "May 23, 2023",
        },
        {
            sno: 8,
            activity:
                "A workshop on IoT from IDEA to prototype: Rapid prototyping techniques",
            from: "May 18, 2023",
            to: "May 20, 2023",
        },
        {
            sno: 9,
            activity: "Innovation and Entrepreneurship-G 20",
            from: "May 18, 2023",
            to: "May 18, 2023",
        },
        {
            sno: 10,
            activity:
                "Session on Accelerators/Incubation - Opportunities for Students & Faculties - Early Stage Entrepreneurs",
            from: "May 18, 2023",
            to: "May 20, 2023",
        },
        {
            sno: 11,
            activity:
                "Session/Panel discussion with innovation and Start-up Ecosystem Enablers from the region/state/national level",
            from: "June 2, 2023",
            to: "June 24, 2023",
        },
        {
            sno: 12,
            activity:
                "Ideation Workshop on Integrated Manufacturing Techniques",
            from: "August 7, 2023",
            to: "August 09, 2023",
        },
        {
            sno: 13,
            activity:
                "Student ideation program on experiential learning in IoT",
            from: "July 12, 2023",
            to: "July 14, 2023",
        },
        {
            sno: 14,
            activity:
                "Organise Session on Lean Start-up & Minimum Viable Product/Business- Boot Camp (or) Mentoring Session",
            from: "August 12, 2023",
            to: "August 14, 2023",
        },
        {
            sno: 15,
            activity:
                "Student Skilling Program on Design Thinking and Product Development",
            from: "July 24, 2023",
            to: "July 26, 2023",
        },
        {
            sno: 16,
            activity:
                "Transforming Research into Publication, Patent, Project and Product Development",
            from: "July 26, 2023",
            to: "July 28, 2023",
        },
        {
            sno: 17,
            activity: "Outside Participation LNMIIT Hackathon",
            from: "January 27, 2023",
            to: "January 29, 2023",
        },
        {
            sno: 18,
            activity: "How to Become Entrepreneur",
            from: "March 11, 2023",
            to: "March 11, 2023",
        },
        {
            sno: 19,
            activity:
                "Entrepreneurship the Real World Challenges & the Road Ahead",
            from: "Febuary 06, 2023",
            to: "Febuary 06, 2023",
        },
        {
            sno: 20,
            activity:
                "Six-Days Workshop on Textual Magic: Exploring NLP with NLTK",
            from: "March 27, 2023",
            to: "April 01, 2023",
        },
        {
            sno: 21,
            activity: "Workshop on 3D printing in industry 4.0",
            from: "January 17, 2023",
            to: "January 17, 2023",
        },
        {
            sno: 22,
            activity:
                "4th International Conference on Information Management & Machine Intelligence (ICIMMI 2022)",
            from: "December 23, 2022",
            to: "December 24, 2022",
        },
        {
            sno: 23,
            activity:
                "FDP on IoT based Product Development (using Advanced Digital Manufacturing Equipment, Tools and Resources)",
            from: "July 13, 2022",
            to: "July 15, 2022",
        },
        {
            sno: 24,
            activity:
                "Summer Internship Program on IoT based Product Development, using Advanced Digital Manufacturing Equipment, Tools and Resources",
            from: "July 18, 2022",
            to: "August 01, 2022",
        },
        {
            sno: 25,
            activity: "National level project exhibition UDHBHAV 2022",
            from: "August 22, 2022",
            to: "August 22, 2022",
        },
        {
            sno: 26,
            activity: "Ideation Workshop For Students",
            from: "September 21, 2022",
            to: "September 23, 2022",
        },
        {
            sno: 27,
            activity: "National Innovation Challenge at Piet, Panipat",
            from: "December 10, 2022",
            to: "December 10, 2022",
        },
        {
            sno: 28,
            activity:
                "Session on Achieving Problem-Solution Fit & Product-Market Fit",
            from: "February 23, 2022",
            to: "February 23, 2022",
        },
        {
            sno: 29,
            activity:
                "My Story - Motivational Session by Successful Entrepreneur/Start-up founder.",
            from: "November 2, 2022",
            to: "November 23, 2022",
        },
        {
            sno: 30,
            activity:
                "My Story - Motivational Session by Successful Innovators.",
            from: "November 5, 2022",
            to: "November 07, 2022",
        },
        {
            sno: 31,
            activity: "A Session on Design Thinking",
            from: "November 18, 2022",
            to: "November 18, 2022",
        },
        {
            sno: 32,
            activity:
                "ABES Aicte Idea Lab Student Ambassador Regional Innovation Challenge",
            from: "November 18, 2022",
            to: "November 19, 2022",
        },
        {
            sno: 33,
            activity:
                "Workshop on Entrepreneurship and Innovation as Career Opportunity",
            from: "November 23, 2022",
            to: "November 29, 2022",
        },
        {
            sno: 34,
            activity: "Success Story by Incubate (Startup - RentNEarn)",
            from: "December 9, 2022",
            to: "December 09, 2022",
        },
        {
            sno: 35,
            activity: "session on How to become a successful Entrepreneur",
            from: "December 10, 2022",
            to: "December 10, 2022",
        },
        {
            sno: 36,
            activity: "Session/Workshop on Business Model Canvas (BMC)",
            from: "December 6, 2022",
            to: "December 10, 2022",
        },
        {
            sno: 37,
            activity: "Entrepreneurship For Absolute Beginners",
            from: "December 27, 2022",
            to: "December 27, 2022",
        },
    ],
    "2021-22": [
        {
            sno: 38,
            activity: "National Startup Day",
            from: "January 23, 2022",
            to: "January 23, 2022",
        },
        {
            sno: 39,
            activity:
                "IDEATION WORKSHOP with collaboration of PIET AICTE IDEA LAB",
            from: "February 22, 2022",
            to: "February 22, 2022",
        },
        {
            sno: 40,
            activity: "Design Searching and Filing",
            from: "February 24, 2022",
            to: "February 24, 2022",
        },
        {
            sno: 41,
            activity:
                "Process of Innovation Development & Technology Readiness Level(TRL) & Commercialization of Lab Technology & Tech-Transfer",
            from: "January 10, 2022",
            to: "January 10, 2022",
        },
        {
            sno: 42,
            activity: "World Intellectual Property Day",
            from: "January 24, 2022",
            to: "January 26, 2022",
        },
        {
            sno: 43,
            activity: "IPR Awareness Program",
            from: "April 26, 2022",
            to: "April 26, 2022",
        },
        {
            sno: 44,
            activity:
                "A Session on Achieving Value Proposition Fit & Business Fit",
            from: "June 11, 2022",
            to: "June 11, 2022",
        },
        {
            sno: 45,
            activity: "Toycathon 2021 Nodel Center for Digital Edition",
            from: "May 22, 2022",
            to: "May 25, 2022",
        },
        {
            sno: 46,
            activity: "Trends and Innovations in Healthcare It Landscape",
            from: "December 16, 2021",
            to: "December 16, 2021",
        },
        {
            sno: 47,
            activity: "Campus Entrepreneur Master Class",
            from: "May 27, 2022",
            to: "May 27, 2022",
        },
        {
            sno: 48,
            activity: "Session on How to Build a Startup From Bottom to Top",
            from: "June 10, 2022",
            to: "June 10, 2022",
        },
        {
            sno: 49,
            activity:
                "Field/Exposure Visit to Pre-incubation units at Bhamashah Techno Hub, Centre, Jaipur",
            from: "December 3, 2022",
            to: "December 03, 2022",
        },
        {
            sno: 50,
            activity:
                "Project Exhibition of Start-ups Developed & Linkage with Innovation",
            from: "June 25, 2022",
            to: "June 25, 2022",
        },
        {
            sno: 51,
            activity:
                "An Expert Talk On Development of Company Resources through Virtualization Technology",
            from: "February 10, 2022",
            to: "February 10, 2022",
        },
        {
            sno: 52,
            activity:
                "Workshop on Enterpreneurship skills attitude and behaviour development",
            from: "February 19, 2022",
            to: "February 19, 2022",
        },
        {
            sno: 53,
            activity: "Why, What and how of patents",
            from: "October 27, 2021",
            to: "October 27, 2021",
        },
    ],
    "2020-21": [
        {
            sno: 54,
            activity: "Workshop on Entrepreneurial Achievement Motivation",
            from: "May 29, 2021",
            to: "May 29, 2021",
        },
        {
            sno: 55,
            activity:
                "Webinar on The Journey of a thesis of a research paper to a patent",
            from: "February 9, 2021",
            to: "February 9, 2021",
        },
        {
            sno: 56,
            activity: "Rtu poornima hackathon-2021",
            from: "June 22, 2021",
            to: "June 24, 2021",
        },
        {
            sno: 57,
            activity:
                "RTU(ATU) TEQIP III sponsored Industry Expert session on Setting up and growing business venture",
            from: "March 22, 2021",
            to: "March 23, 2021",
        },
        {
            sno: 58,
            activity: "A Seminar on Industry Readiness",
            from: "July 10, 2021",
            to: "July 10, 2021",
        },
        {
            sno: 59,
            activity:
                "Expert Session on The Journey of a thesis of a research paper to a patent",
            from: "February 9, 2021",
            to: "February 9, 2021",
        },
        {
            sno: 60,
            activity: "Business Communication & Leadership Skills for Startups",
            from: "January 20, 2021",
            to: "January 20, 2021",
        },
        {
            sno: 61,
            activity: "Intellectual Property Rights - 2021",
            from: "January 23, 2021",
            to: "January 23, 2021",
        },
        {
            sno: 62,
            activity: "The game has changed crafting a career in new normal",
            from: "January 13, 2021",
            to: "January 13, 2021",
        },
        {
            sno: 63,
            activity:
                "Expert Session on awareness session on Intellectual property rights, patent and Trademarks",
            from: "July 14, 2020",
            to: "July 14, 2020",
        },
        {
            sno: 64,
            activity:
                "Utilization of Design Experiment for Assessing Quality Research",
            from: "June 19, 2020",
            to: "June 19, 2020",
        },
    ],
    "2019-20": [
        {
            sno: 65,
            activity:
                "Innocity Entrepreneurship Bootcamp - 3-day program organized by Startup Oasis in association with Innocity and Gensus Edutainers",
            from: "July 25, 2019",
            to: "July 27, 2019",
        },
        {
            sno: 66,
            activity: "Inauguration of Startup Accelerator Program - Genstart",
            from: "October 12, 2019",
            to: "October 12, 2019",
        },
    ],
    "2018-19": [
        {
            sno: 67,
            activity: "IPR for Students and Faculty Members-I",
            from: "January 10, 2019",
            to: "January 10, 2019",
        },
        {
            sno: 68,
            activity: "IPR for Students and Faculty Members-II",
            from: "January 25, 2019",
            to: "January 25, 2019",
        },
        {
            sno: 69,
            activity:
                "CliffHangersByWVS organized by Writer's Voice Society supported by PBIC",
            from: "August 14, 2018",
            to: "August 24, 2018",
        },
        {
            sno: 70,
            activity: "Udyamita-2018",
            from: "August 20, 2018",
            to: "August 23, 2018",
        },
        {
            sno: 71,
            activity:
                "EAD-18 (Entrepreneurship Awareness Drive-2018) Supported by e-cell, IIT Kharagpur",
            from: "October 16, 2018",
            to: "October 16, 2018",
        },
        {
            sno: 72,
            activity: "PRAYAG 2K18",
            from: "September 25, 2018",
            to: "September 28, 2018",
        },
    ],
};

const ResearchActivities = () => {
    const [openSections, setOpenSections] = useState<{
        [key: string]: boolean;
    }>({});

    const toggleSection = (year: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [year]: !prev[year],
        }));
    };

    const stats = [
        {
            icon: Calendar,
            number: "200+",
            label: "Research Activities",
            gradient: "bg-gradient-to-br from-primary to-primary-dark",
        },
        {
            icon: Users,
            number: "10000+",
            label: "Participants",
            gradient: "bg-gradient-to-br from-secondary to-secondary-dark",
        },
        {
            icon: Award,
            number: "100+",
            label: "Workshops & Seminars",
            gradient: "bg-gradient-to-br from-green-500 to-green-600",
        },
        {
            icon: TrendingUp,
            number: "50+",
            label: "Conferences",
            gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Research Activities"
                description="Comprehensive overview of IPR, Entrepreneurship and Research activities conducted at PIET"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Research", href: "/research-development" },
                    { label: "Research Activities", isCurrent: true },
                ]}
            />

            {/* Activities Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                                <h2 className="text-2xl font-bold text-center">
                                    Research Activities by Academic Year
                                </h2>
                            </div>

                            <div className="p-6">
                                {Object.entries(researchActivitiesData).map(
                                    ([year, activities]) => (
                                        <div
                                            key={year}
                                            className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                                        >
                                            <button
                                                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors duration-200"
                                                onClick={() =>
                                                    toggleSection(year)
                                                }
                                            >
                                                <span className="text-lg font-semibold text-gray-800">
                                                    {year}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                                        {activities.length}{" "}
                                                        activities
                                                    </span>
                                                    {openSections[year] ? (
                                                        <ChevronUp className="h-5 w-5 text-gray-600" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5 text-gray-600" />
                                                    )}
                                                </div>
                                            </button>

                                            {openSections[year] && (
                                                <div className="border-t border-gray-200">
                                                    <div className="p-6">
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                                                <thead>
                                                                    <tr className="bg-gradient-to-r from-secondary to-primary text-white">
                                                                        <th className="border border-gray-300 px-4 py-3 text-left">
                                                                            S.No
                                                                        </th>
                                                                        <th className="border border-gray-300 px-4 py-3 text-left">
                                                                            Name
                                                                            of
                                                                            the
                                                                            Activity/Workshop/Seminar/Conference
                                                                        </th>
                                                                        {year ===
                                                                            "2023-24" && (
                                                                            <th className="border border-gray-300 px-4 py-3 text-left">
                                                                                Number
                                                                                of
                                                                                Participants
                                                                            </th>
                                                                        )}
                                                                        {year ===
                                                                            "2022-23" ||
                                                                        year ===
                                                                            "2021-22" ||
                                                                        year ===
                                                                            "2020-21" ||
                                                                        year ===
                                                                            "2019-20" ||
                                                                        year ===
                                                                            "2018-19" ? (
                                                                            <>
                                                                                <th className="border border-gray-300 px-4 py-3 text-left">
                                                                                    From
                                                                                </th>
                                                                                <th className="border border-gray-300 px-4 py-3 text-left">
                                                                                    To
                                                                                </th>
                                                                            </>
                                                                        ) : (
                                                                            <th className="border border-gray-300 px-4 py-3 text-left">
                                                                                Date:
                                                                                From-To
                                                                            </th>
                                                                        )}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {activities.map(
                                                                        (
                                                                            activity,
                                                                            index,
                                                                        ) => (
                                                                            <tr
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className="hover:bg-gray-50 transition-colors duration-150"
                                                                            >
                                                                                <td className="border border-gray-300 px-4 py-3">
                                                                                    {
                                                                                        activity.sno
                                                                                    }
                                                                                </td>
                                                                                <td className="border border-gray-300 px-4 py-3">
                                                                                    {
                                                                                        activity.activity
                                                                                    }
                                                                                </td>
                                                                                {year ===
                                                                                    "2023-24" && (
                                                                                    <td className="border border-gray-300 px-4 py-3">
                                                                                        {(
                                                                                            activity as any
                                                                                        )
                                                                                            .participants ||
                                                                                            "N/A"}
                                                                                    </td>
                                                                                )}
                                                                                {year ===
                                                                                    "2022-23" ||
                                                                                year ===
                                                                                    "2021-22" ||
                                                                                year ===
                                                                                    "2020-21" ||
                                                                                year ===
                                                                                    "2019-20" ||
                                                                                year ===
                                                                                    "2018-19" ? (
                                                                                    <>
                                                                                        <td className="border border-gray-300 px-4 py-3">
                                                                                            {
                                                                                                (
                                                                                                    activity as any
                                                                                                )
                                                                                                    .from
                                                                                            }
                                                                                        </td>
                                                                                        <td className="border border-gray-300 px-4 py-3">
                                                                                            {
                                                                                                (
                                                                                                    activity as any
                                                                                                )
                                                                                                    .to
                                                                                            }
                                                                                        </td>
                                                                                    </>
                                                                                ) : (
                                                                                    <td className="border border-gray-300 px-4 py-3">
                                                                                        {
                                                                                            (
                                                                                                activity as any
                                                                                            )
                                                                                                .date
                                                                                        }
                                                                                    </td>
                                                                                )}
                                                                            </tr>
                                                                        ),
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    );
};

export default ResearchActivities;
