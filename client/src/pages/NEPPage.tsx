import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import OverviewSection from "@/components/OverviewSection";
import InfoCard from "@/components/InfoCard";
import DynamicTable from "@/components/DynamicTable ";
import Checklist from "@/components/Checklist";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const nepHighlights = [
    "Curriculum strengthening",
    "Skill Development",
    "Technology Integration",
    "Faculty Members Training",
    "Research and Innovation",
    "Inclusive Education",
    "Multiple Entry and Exit Points",
    "Global Collaborations",
    "Infrastructure Development",
    "Community Engagement",
    "Monitoring and Feedback Mechanism",
    "Offering Program in Indian Regional Language",
    "Offering Program in Indian Knowledge System",
];

const nepCommittee2024 = [
    { name: "Dr.Dinesh Goyal", designation: "Chairman" },
    { name: "Dr. Sonia Kaur Bansal", designation: "Faculty Coordinator" },
    { name: "Dr. Anil Kumar", designation: "Member" },
    { name: "Dr. Sama Jain", designation: "Member" },
    { name: "Dr. Payal Bansal", designation: "Member" },
    { name: "Dr. Budesh Kanwar", designation: "Member" },
    { name: "Ms. Himani Agarwal", designation: "Student Member" },
    { name: "Mr. Davit Kumar Fadia", designation: "Student Member" },
    { name: "Mr. Mayank Singh", designation: "Student Member" },
];

const nepCommittee2023 = [
    { name: "Dr.Dinesh Goyal", designation: "Chairman" },
    { name: "Dr.Gautam Singh", designation: "Convenor" },
    { name: "Dr. Sonia Kaur Bansal", designation: "Co-ordinator" },
    { name: "Mr.Deepak Moud", designation: "Member" },
    { name: "Dr.Sama Jain", designation: "Member" },
];

const saarthiTeam = [
    {
        sno: 1,
        name: "Dr. Sonia Kaur Bansal",
        designation: "Faculty Coordinator",
    },
    { sno: 2, name: "Ms. Himani Agarwal", designation: "Student Coordinator" },
    {
        sno: 3,
        name: "Mr. Davit Kumar Fadia",
        designation: "Student Coordinator",
    },
    { sno: 4, name: "Mr. Mayank Singh", designation: "Student Coordinator" },
];

const committeeColumns = [
    { label: "Name", key: "name" },
    { label: "Designation", key: "designation" },
];

const saarthiColumns = [
    { label: "S. No", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Designation", key: "designation" },
];

const implementationColumns = [
    { label: "S. No", key: "sno" },
    { label: "Objective", key: "objective" },
    { label: "Timeline", key: "timeline" },
    { label: "Office Responsible", key: "office" },
];

const implementationData = [
    {
        sno: 1,
        objective: "Offering B.Tech in Regional Language",
        timeline: "2021-22",
        office: "Principal office",
    },
    {
        sno: 2,
        objective: "Technology in Education",
        timeline: "2021-22",
        office: "HoD's",
    },
    {
        sno: 3,
        objective: "Skill Development (VAC)",
        timeline: "2021-22",
        office: "HoD's",
    },
    {
        sno: 4,
        objective: "Activities under IKS",
        timeline: "2022-23",
        office: "NEP Coordinator",
    },
    {
        sno: 5,
        objective: "Quality Benchmarking",
        timeline: "2022-23",
        office: "Principal office",
    },
    {
        sno: 6,
        objective: "Internship Based Education",
        timeline: "2022-23",
        office: "HoD's",
    },
    {
        sno: 7,
        objective: "Holistic Education (JHV, Ethics, Life Skills)",
        timeline: "2022-23",
        office: "NEP Coordinator",
    },
    {
        sno: 8,
        objective: "Faculty Grooming & Internationalization",
        timeline: "2022-23",
        office: "IQAC",
    },
    {
        sno: 9,
        objective: "Outstanding Research to cater toward IKS & Society",
        timeline: "2022-23",
        office: "NEP Coordinator",
    },
    {
        sno: 10,
        objective: "Academic Bank of Credit",
        timeline: "2023-24",
        office: "Registrar office",
    },
    {
        sno: 11,
        objective: "Autonomous Institution Status",
        timeline: "2025",
        office: "Principal office",
    },
    {
        sno: 12,
        objective: "Academic Flexibility",
        timeline: "As per Affiliating University",
        office: "RTU Guideline",
    },
];

const activitiesColumns = [
    { label: "S.No", key: "sno" },
    { label: "Department", key: "department" },
    { label: "Activity", key: "activity" },
    { label: "Date", key: "date" },
    { label: "Co-ordinator", key: "coordinator" },
    { label: "Category", key: "category" },
];

const activities2024 = [
    {
        sno: 1,
        department: "CS IoT",
        activity: "3-Day Workshop on Problem-Solving Skills in Programming",
        date: "21-23 August 2024",
        coordinator: "Ms Reshma Kala",
        category: "Skill Development",
    },
    {
        sno: 2,
        department: "CS IoT",
        activity: "Exploring Future Trends & Opportunities in IoT",
        date: "13 Nov 2024",
        coordinator: "Dr. Payal Bansal",
        category: "Multidisciplinary",
    },
    {
        sno: 3,
        department: "CS IoT",
        activity: "CORE CONCEPTS OF OBJECT - ORIENTED PROGRAMMING",
        date: "14 Nov 2024",
        coordinator: "Dr. Madhav Sharma",
        category: "Multidisciplinary",
    },
    {
        sno: 4,
        department: "CS",
        activity:
            "Four Days Workshop on Mastering Programming Skills Required for Data Structures & C++",
        date: "3-6 Sept 2024",
        coordinator: "Dr. Navin Kr. Goyal",
        category: "Skill Development",
    },
    {
        sno: 5,
        department: "CS",
        activity: "Five Days Workshop on Cyber Security & Ethical Hacking",
        date: "18-22 Nov 2024",
        coordinator: "Dr. Navin Kr. Goyal",
        category: "Skill Development",
    },
    {
        sno: 6,
        department: "AI & DS",
        activity: "Swachhta Hi Seva Hai 2024",
        date: "2-Oct-24",
        coordinator: "Dr. Uday Pratap Singh & Ms Alka Rani",
        category: "IKS",
    },
    {
        sno: 7,
        department: "AI & DS",
        activity:
            "Empowering Digital Classrooms: A Workshop on TCSion Cloud Learning & Course File Preparation",
        date: "5-Oct-24",
        coordinator: "Mr Mohneesh Sachdeva & Ms Alka Rani",
        category: "Skill Development",
    },
    {
        sno: 8,
        department: "AI & DS",
        activity: "Plantation",
        date: "10-Sep-24",
        coordinator: "Mr Anurag Anand Duvey",
        category: "IKS",
    },
    {
        sno: 9,
        department: "AI & DS",
        activity: "Vastra Daan 4.0",
        date: "12-13 Nov 2024",
        coordinator: "Mr Anurag Anand Duvey",
        category: "Multidisciplinary",
    },
    {
        sno: 10,
        department: "AI & DS",
        activity: "Industrial Visit to Bhamashah Techno Hub, Jaipur",
        date: "27 Nov 2024",
        coordinator: "Dr. Uday Pratap Singh & Bharat Thatera",
        category: "Multidisciplinary",
    },
    {
        sno: 11,
        department: "Applied Sciences",
        activity: "Motivational Talk",
        date: "3-Sep-24",
        coordinator: "Dr. Sama Jain",
        category: "Multidisciplinary",
    },
    {
        sno: 12,
        department: "Applied Sciences",
        activity: "Session on UHV by Dr. Sangeeta Sharma",
        date: "3-Sep-24",
        coordinator: "Dr. Krati Sharma",
        category: "IKS",
    },
    {
        sno: 13,
        department: "Applied Sciences",
        activity: "Session on Study Abroad",
        date: "5-Sep-24",
        coordinator: "Dr. Krati Sharma",
        category: "Multidisciplinary",
    },
    {
        sno: 14,
        department: "Applied Sciences",
        activity: "Technical Session in Association with Yi",
        date: "5-Sep-24",
        coordinator: "Dr. Sama Jain",
        category: "Skill Development",
    },
    {
        sno: 15,
        department: "Applied Sciences",
        activity: "Motivational Talk",
        date: "6-Sep-24",
        coordinator: "Dr. Sama Jain",
        category: "Multidisciplinary",
    },
    {
        sno: 16,
        department: "Applied Sciences",
        activity: "Alumni Session",
        date: "2, 6, 10 Sept 2024",
        coordinator: "Dr. Krati Sharma",
        category: "Multidisciplinary",
    },
    {
        sno: 17,
        department: "Applied Sciences",
        activity: "Motivational Talk by Ethicraft",
        date: "11-Sep-24",
        coordinator: "Dr. Bhanu Pratap & Dr. Ashish Laddha",
        category: "Multidisciplinary",
    },
    {
        sno: 18,
        department: "Applied Sciences",
        activity: "Language Proficiency Session",
        date: "12-Sep-24",
        coordinator: "Dr. Sama Jain",
        category: "Skill Development",
    },
    {
        sno: 19,
        department: "Applied Sciences",
        activity: "Yoga Session",
        date: "17-20 Sep 2024",
        coordinator: "Dr. Nupur Jain",
        category: "IKS",
    },
    {
        sno: 20,
        department: "Applied Sciences",
        activity: "Report of Jaipur Visit",
        date: "18-Sep-24",
        coordinator: "Mr. Shamal Burman",
        category: "IKS",
    },
    {
        sno: 21,
        department: "Applied Sciences",
        activity:
            "Preserving Local Dialects Using Multi-layer Perceptron for Sustainable Development of Communities",
        date: "20/01/2025 to 25/01/2025",
        coordinator: "Dr. Krati Sharma & Dr. Ashish Laddha",
        category: "Sustainable Development and Community Engagement",
    },
    {
        sno: 22,
        department: "Applied Sciences",
        activity: "Introductory Face to Face UHV FDP",
        date: "3 January 2025 - 5 January 2025",
        coordinator: "Dr. Krati Sharma",
        category: "Holistic Education and Value-Based Learning",
    },
    {
        sno: 23,
        department: "Applied Sciences",
        activity: "Sewage Treatment Plant Visit/Site Visit",
        date: "18-Feb-25",
        coordinator: "Mr. Shamal Burman",
        category: "Environmental Awareness and Sustainability",
    },
    {
        sno: 24,
        department: "Applied Sciences",
        activity: "Expert Awareness Session on World Health Day",
        date: "7-Apr-25",
        coordinator: "Dr. Nupur Jain",
        category: "Health and Well-being",
    },
    {
        sno: 25,
        department: "Applied Sciences",
        activity: "Essay Writing Competition",
        date: "22-Apr-25",
        coordinator: "Dr. Sonia Kaur Bansal",
        category: "Language and Literature Education, Critical Thinking",
    },
];

const activities2023 = [
    {
        sno: 1,
        department: "Applied Sciences",
        activity:
            "FDP on Universal Values and Ethics as Remote Centre from NITTTR, Chandigarh",
        date: "21 August-25 August 2023",
        coordinator: "Dr.Krati Sharma",
        category: "Skill Development",
    },
    {
        sno: 2,
        department: "Applied Sciences",
        activity:
            'Expert Session on the Theme- "Nurturing Mental Health Well Being: Strategies for Resilience and Balance" Dr Vandana Choudhary.',
        date: "6 Sept.,2023",
        coordinator: "Dr.Soni Kaur Bansal",
        category: "Multidisciplinary",
    },
    {
        sno: 3,
        department: "Applied Sciences",
        activity: "Workshop on Universal Human Values",
        date: "11 Sept, 2023",
        coordinator: "Dr.Krati Sharma",
        category: "Skill Development",
    },
    {
        sno: 4,
        department: "Applied Sciences",
        activity: "Motivational Session by Mr. P. M. Bhardwaj",
        date: "11 Sept, 2023",
        coordinator: "Dr.Krati Sharma",
        category: "Skill Development",
    },
    {
        sno: 5,
        department: "Applied Sciences",
        activity: 'Session on "You are a Torch Barrier" Ms. Neeta Boochra',
        date: "13 Sept.,2023",
        coordinator: "Dr.Sama Jain",
        category: "Multidisciplinary",
    },
    {
        sno: 6,
        department: "Applied Sciences",
        activity: "Yoga Session",
        date: "14 Sep.-18 Sep 2023",
        coordinator: "Dr.Sama Jain",
        category: "Skill Development",
    },
    {
        sno: 7,
        department: "Applied Sciences",
        activity: "Visit to Historical Places",
        date: "14 & 20 Sept.,2023",
        coordinator: "Dr.Bhanu Pratap",
        category: "IKS",
    },
    {
        sno: 8,
        department: "Applied Sciences",
        activity: "Workshop on Universal Human Values",
        date: "15 Sept., 2023",
        coordinator: "Dr.Krati Sharma",
        category: "Skill Development",
    },
    {
        sno: 9,
        department: "Applied Sciences",
        activity: "Motivational Session by Paresh Gupta",
        date: "15 Sept,2023",
        coordinator: "Dr.Sama Jain",
        category: "Multidisciplinary",
    },
    {
        sno: 10,
        department: "Applied Sciences",
        activity: "Workshop on Universal Human Values",
        date: "16 Sept, 2023",
        coordinator: "Dr.Krati Sharma",
        category: "IKS",
    },
    {
        sno: 11,
        department: "Applied Sciences",
        activity:
            'Resource Person in the NEP Lecture Series lecture on "Indian Women Autobiographies: An Overview"',
        date: "21 Oct.,2023",
        coordinator: "Dr. Krati Sharma",
        category: "Skill Development",
    },
    {
        sno: 12,
        department: "Applied Sciences",
        activity:
            "Role of Mathematics in Artificial Intelligence and Machine Learning",
        date: "22 Dec,2023",
        coordinator: "Dr.Aisha Rafi",
        category: "Multidisciplinary",
    },
    {
        sno: 13,
        department: "Applied Sciences",
        activity: "Visit to Jaipur Literature by Faculty",
        date: "2 Feb.,2024",
        coordinator: "Dr. Krati Sharma",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 14,
        department: "Applied Sciences",
        activity: "National Science Day",
        date: "28 Feb,2023",
        coordinator: "Dr. Sama Jain",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 15,
        department: "Applied Sciences",
        activity: "World Health Day",
        date: "8 April, 2024",
        coordinator: "Ms.Garima Kachhara",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 16,
        department: "Applied Sciences",
        activity: "Visit to Gaushala",
        date: "16 April,2024",
        coordinator: "Ms.Garima Kachhara",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 17,
        department: "Applied Sciences",
        activity: "Visit to Ashirvaad Old Age Home",
        date: "17 April,2024",
        coordinator: "Dr.Krati Sharma",
        category: "IKS",
    },
    {
        sno: 18,
        department: "Applied Sciences",
        activity: "Environment Day",
        date: "22 April, 2024",
        coordinator: "Ms.Garima Kachhara",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 19,
        department: "Applied Sciences",
        activity: "World Environment Day",
        date: "5 June,2024",
        coordinator: "Ms.Garima Kachhara",
        category: "Multidisciplinary Approach",
    },
];

const activities2022 = [
    {
        sno: 1,
        department: "Applied Sciences",
        activity: "Certification of Student in MOOC",
        date: "31 Jan. 2022-10 Feb. 22",
        coordinator: "Mr. Manish Yadav",
        category: "Skill Development",
    },
    {
        sno: 2,
        department: "Applied Sciences",
        activity: "Certification of Student in MOOC",
        date: "4.April.22-9.April 22",
        coordinator: "Mr. Parv Sharma",
        category: "Skill Development",
    },
    {
        sno: 3,
        department: "Applied Sciences",
        activity: "FDP on Implementation of NEP 2020 for HEI's",
        date: "4 July, 2022 to 7 July 2022",
        coordinator: "Dr. Krati Sharma.",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 4,
        department: "Applied Sciences",
        activity: "Certification of Faculty in MOOC",
        date: "2 August 2022-9 August 2022",
        coordinator: "Dr. Ritu Soryan",
        category: "Skill Development",
    },
    {
        sno: 5,
        department: "Applied Sciences",
        activity: "Azadi ka Amrit Mahotsav",
        date: "13 to 22 August, 2022",
        coordinator: "Dr. Sama Jain",
        category: "IKS",
    },
    {
        sno: 6,
        department: "Applied Sciences",
        activity: "Udbhav -NSP",
        date: "August 22,2022",
        coordinator: "Mr. Udit Mamodia",
        category: "OBE",
    },
    {
        sno: 7,
        department: "Applied Sciences",
        activity: "Certification of Faculty in MOOC",
        date: "22 August 2022-26 August 2022",
        coordinator: "Dr. Purushottam L. Bihari",
        category: "Skill Development",
    },
    {
        sno: 8,
        department: "Applied Sciences",
        activity: "Yoga Session",
        date: "4 November, 2022",
        coordinator: "Dr. Ritu Soryan",
        category: "IKS",
    },
    {
        sno: 9,
        department: "Applied Sciences",
        activity: "Session on Success Mantra",
        date: "5 November, 2022",
        coordinator: "Dr. Krati Sharma",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 10,
        department: "Applied Sciences",
        activity: "Session on Human Values",
        date: "7 November, 2022",
        coordinator: "Dr. Ritu Soryan",
        category: "IKS",
    },
    {
        sno: 11,
        department: "Applied Sciences",
        activity: "Life and Communication Skill Development",
        date: "9 November, 2022",
        coordinator: "Dr. Ritu Soryan",
        category: "IKS",
    },
    {
        sno: 12,
        department: "Applied Sciences",
        activity: "Visit to Historical Places",
        date: "9 November to 11 November, 2022",
        coordinator: "Mr. Saurabh Agarwal",
        category: "IKS",
    },
    {
        sno: 13,
        department: "Applied Sciences",
        activity: "Certification of Faculty in MOOC",
        date: "26 December, 2022 to 30 December, 2022",
        coordinator: "Mr. Rahul Gupta",
        category: "Skill Development",
    },
    {
        sno: 14,
        department: "Applied Sciences",
        activity: "Visit to Jaipur Literature by Faculty",
        date: "January 21, 2023",
        coordinator: "Dr. Krati Sharma",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 15,
        department: "Applied Sciences",
        activity: "Visit to Sewage Treatment Plant",
        date: "February 2, 2023",
        coordinator: "Dr. Shivanshi",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 16,
        department: "Applied Sciences",
        activity: "ICIDLHV-2023",
        date: "10 February to 11 February, 2023",
        coordinator: "Dr. Sama Jain",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 17,
        department: "Applied Sciences",
        activity: "National Science Day",
        date: "28 February, 2023",
        coordinator: "Dr. Sama Jain",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 18,
        department: "WISE",
        activity: "Effective Stress Management for Female Academicians",
        date: "8 March, 2023",
        coordinator: "Dr. Priya Mathur",
        category: "Multidisciplinary Approach",
    },
    {
        sno: 19,
        department: "Applied Sciences",
        activity: "Workshop on Enriching Human Life through Solitude",
        date: "26 April, 2023",
        coordinator: "Dr. Sama Jain",
        category: "Skill Development",
    },
    {
        sno: 20,
        department: "Applied Sciences",
        activity: "Yuva Sangam",
        date: "15 May, 2023 to 25 May, 2023",
        coordinator: "Mr. Rajender Singh",
        category: "IKS",
    },
    {
        sno: 21,
        department: "Applied Sciences / CS / AI&DS",
        activity: "Value Added Courses",
        date: "Session 2022-23",
        coordinator: "",
        category: "Multi Disciplinary",
    },
];

const activities2021 = [
    {
        sno: 1,
        department: "Applied Sciences",
        activity: "Inaugural of Regional Branch in PIET",
        date: "29 July 2021",
        coordinator: "Dr. Gautam Singh",
        category: "Multidisciplinary Category",
    },
    {
        sno: 2,
        department: "Applied Sciences",
        activity: "अर्थशास्त्र की शिक्षा अब विदेशी भाषा में",
        date: "7 August 2021",
        coordinator: "Dr. Sama Jain",
        category: "Skill Development",
    },
    {
        sno: 3,
        department: "Applied Sciences",
        activity: "Faculty Certification in MOOC",
        date: "5 July 2021 to 9 July 2021",
        coordinator: "Mr. Mohit Bajpai",
        category: "IKS",
    },
    {
        sno: 4,
        department: "Applied Sciences",
        activity: "Student Certification in MOOC",
        date: "14 Feb. 2022 to 24 Feb. 2022",
        coordinator: "Ms. Garima Saraswat",
        category: "IKS",
    },
    {
        sno: 5,
        department: "Applied Sciences",
        activity: "Student Certification in MOOC",
        date: "4 April 2022 to 9 April 2022",
        coordinator: "Mr. Parv Sharma",
        category: "IKS",
    },
    {
        sno: 6,
        department: "Applied Sciences",
        activity: "Visit to Historical Places",
        date: "19 November",
        coordinator: "Mr. Saurabh",
        category: "IKS",
    },
    {
        sno: 7,
        department: "Applied Sciences",
        activity: "Human Values Session",
        date: "27 Nov. 2021",
        coordinator: "Dr. Ritu Soryan",
        category: "Indian Knowledge System",
    },
    {
        sno: 8,
        department: "Applied Sciences",
        activity: "Session on MOOC Courses",
        date: "27 November, 2021",
        coordinator: "Dr. Arshad",
        category: "Skill Development",
    },
    {
        sno: 9,
        department: "Applied Sciences",
        activity: "Session on Self-Defence",
        date: "12 December 2021",
        coordinator: "Dr. Aisha Rafi",
        category: "Multidisciplinary Category",
    },
    {
        sno: 10,
        department: "Applied Sciences",
        activity: "Session on Gender Equality",
        date: "12 December 2021",
        coordinator: "Dr. Ritu Soryan",
        category: "Multidisciplinary Category",
    },
    {
        sno: 11,
        department: "Applied Sciences",
        activity: "Effective Stress Management for Female Academicians",
        date: "8 March 2022",
        coordinator: "Dr. Priya Mathur",
        category: "Multidisciplinary Category",
    },
    {
        sno: 12,
        department: "Applied Sciences",
        activity: "Workshop on Yoga Day Celebration",
        date: "15 - 21 June 2022",
        coordinator: "Dr. Priya Mathur",
        category: "Indian Knowledge System",
    },
];

const activities2020 = [
    {
        sno: 1,
        department: "Applied Sciences",
        activity: "Yoga Week",
        date: "24 October 2020 to 7 November 2020",
        coordinator: "Dr. Ritu Soryan",
        category: "Indian Knowledge System",
    },
    {
        sno: 2,
        department: "Applied Sciences",
        activity: "Human Rights Days",
        date: "10 December 2020",
        coordinator: "Dr. Ritu Soryan",
        category: "Multidisciplinary",
    },
    {
        sno: 3,
        department: "Applied Sciences",
        activity: "Role of Education in Holistic Development",
        date: "21 October 2020",
        coordinator: "Dr. Mamta Sharma",
        category: "Multidisciplinary",
    },
    {
        sno: 4,
        department: "Applied Sciences",
        activity: "Universal Human Values and its Applicability in Human Life",
        date: "22 October 2020",
        coordinator: "Mr. Pramod Sadarjoshi",
        category: "Skill development",
    },
    {
        sno: 5,
        department: "Applied Sciences",
        activity: "Professional Skills from Performing Arts",
        date: "28 October 2020",
        coordinator: "Dr. Vasant Kiran",
        category: "Skill development",
    },
    {
        sno: 6,
        department: "Applied Sciences",
        activity: "Winning Over Adversities-A Life Lesson",
        date: "29 October 2020",
        coordinator: "Ms. Nikita Vaid",
        category: "Skill development",
    },
    {
        sno: 7,
        department: "Applied Sciences",
        activity: "Session on MOOC Courses",
        date: "30 October 2020",
        coordinator: "Dr. Arshad",
        category: "Skill development",
    },
    {
        sno: 8,
        department: "Applied Sciences",
        activity: "Session on Human Values",
        date: "18 – 19 November 2020",
        coordinator: "Dr. Ritu Soryan",
        category: "Skill development",
    },
];

const importantNotices = [
    {
        sno: 1,
        name: "NEP Core Team 2024-25",
        document: (
            <a
                href="https://drive.google.com/file/d/1Au-7L2wAK5mdXu7b611zO18ylWzKDuNi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    View PDF
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "NET SAARTHI Team 2024-25",
        document: (
            <a
                href="https://drive.google.com/file/d/1_eIqbvBq6lYtBZEmJUXgXzo0b9uPehPC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    View PDF
                </button>
            </a>
        ),
    },
];

const noticesColumns = [
    { label: "S. No", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Document", key: "document" },
];

const NEPPage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - NEP & IKS Initiatives"
                description="Driving holistic, flexible and inclusive education under NEP 2020."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "NEP", isCurrent: true },
                ]}
            />

            <OverviewSection
                title="National Education Policy (NEP) 2020"
                subtitle="Transforming Education at PIET"
                reverse={false}
                image={{
                    src: "/images/NEP.png",
                    alt: "NEP at PIET",
                    caption: "Inclusive, Flexible & Forward-Thinking Education",
                }}
            >
                <p>
                    PIET is implementing the Curriculum and Credit Framework for
                    Under Graduate Programme as per the National Education
                    Policy-2020 (NEP-2020) of the Government of India and the
                    UGC Guidelines. The goal is to introduce a "learner-centric"
                    approach and provide greater flexibility in the education
                    system. This will enable students to choose
                    multi-disciplinary, intra-disciplinary and skill-based
                    courses based on their interests.
                </p>
            </OverviewSection>

            <div className="container mx-auto my-10 px-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10">
                    <h2 className="text-3xl text-primary font-bold mb-6 text-center">
                        NEP 2020: A Thrust on Indian Knowledge System
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                        The Indian Knowledge System (IKS) has been a topic of
                        discussion in Indian education. For centuries, the
                        Western perception has been the dominant influence in
                        our education, ignoring or rejecting Indian-origin
                        knowledge. IKS aims to balance knowledge and skills to
                        create graduates who can produce new knowledge, use it
                        wisely, and apply it effectively. The traditional Indian
                        Knowledge Tradition focuses on 'how' to know rather than
                        'what' to know.
                    </p>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
                <InfoCard
                    title="Why NEP 2020?"
                    iconClass="fas fa-graduation-cap"
                    content={<Checklist items={nepHighlights} />}
                />
                <InfoCard
                    title="What is IKS?"
                    iconClass="fas fa-lightbulb"
                    content="Indian Knowledge System (IKS) is a vast repository of knowledge available in Sanskrit, Pali, Prakrit, and all native Indian languages. It encompasses Foundational knowledge, Science, Engineering & Technology, Humanities, and Social Sciences through a structured classification. IKS has a wide range of branches like Astronomy, Ayurveda & Yoga, Mathematics, and Computing, Languages and Linguistics, and many more. Eighteen Vidya Sthanas were part of ancient Indian education. Today, this knowledge base is much needed for knowledge diplomacy."
                />
                <InfoCard
                    title="NEP Implementation at PIET"
                    iconClass="fas fa-university"
                    content="PIET is affiliated to Rajasthan Technical University, Kota and offers various engineering programs in Computer Science, Artificial Intelligence, Data Science, Artificial Intelligence & Data Science and IOT. The institute promotes interdisciplinary interaction among students and faculty and aligns its vision with NEP for the holistic development of the learners. PIET is also the first institute to offer the B.Tech in Regional Language."
                />
                <InfoCard
                    title="Benefits to Students"
                    iconClass="fas fa-user-graduate"
                    content="Flexible learning pathways, skill certification, multidisciplinary opportunities, regional language education, IKS exposure, career readiness, and access to NPTEL-Swayam MOOCs and Coursera courses. The institute also offers clubs like PBIC, Aptinues Club, and Literary Club for holistic development."
                />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center transition-transform hover:scale-105 duration-300">
                    NEP Implementation Timeline
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable
                    columns={implementationColumns}
                    data={implementationData}
                />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center transition-transform hover:scale-105 duration-300">
                    Core Committee (2024-25)
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable
                    columns={committeeColumns}
                    data={nepCommittee2024}
                />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center transition-transform hover:scale-105 duration-300">
                    Core Committee (2023-24)
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable
                    columns={committeeColumns}
                    data={nepCommittee2023}
                />
            </div>

            {/* NEP SAARTHI Section */}
            <div className="container mx-auto my-16 px-4">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
                    <h2 className="text-3xl text-primary font-bold mb-6 text-center">
                        NEP SAARTHI
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Introduction
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The National Education Policy (NEP) 2020 is a
                                crucial reform that aims to transform the
                                education system in India, focusing on quality,
                                equity, and access. To enhance students'
                                participation and make them aware of the various
                                reforms of the higher education system, the UGC
                                is launching the "NEP SAARTHI" at campuses of
                                HEIs.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Objectives
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>
                                    • Create awareness and promote the
                                    initiatives of NEP 2020 among students on
                                    campus
                                </li>
                                <li>
                                    • Encourage and motivate students to
                                    actively participate in implementing the NEP
                                    2020 initiatives
                                </li>
                                <li>
                                    • Establish a feedback mechanism for the UGC
                                    to understand the impact of NEP 2020
                                    initiatives
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Role of NEP SAARTHI
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>
                                    • Work as an ambassador to promote NEP 2020
                                </li>
                                <li>• Create awareness regarding NEP 2020</li>
                                <li>
                                    • Disseminate information regarding NEP 2020
                                </li>
                                <li>
                                    • Promote NEP 2020 initiatives on social
                                    media
                                </li>
                                <li>
                                    • Collect feedback from students to improve
                                    implementation
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Responsibilities
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>
                                    • Organise awareness drives regarding the
                                    latest NEP initiatives
                                </li>
                                <li>• Connect with student groups</li>
                                <li>
                                    • Establish meaningful dialogue among
                                    stakeholders
                                </li>
                                <li>
                                    • Plan events, debates, discussions,
                                    competitions, quizzes
                                </li>
                                <li>
                                    • Set up NEP help desks at college fests
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center transition-transform hover:scale-105 duration-300">
                    Core SAARTHI Team
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable columns={saarthiColumns} data={saarthiTeam} />
            </div>

            {/* NEP Activities Section */}
            <div className="container mx-auto my-16">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    NEP Activities
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-10"></div>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                            Activities 2024-25
                        </h3>
                        <DynamicTable
                            columns={activitiesColumns}
                            data={activities2024}
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                            Activities 2023-24
                        </h3>
                        <DynamicTable
                            columns={activitiesColumns}
                            data={activities2023}
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                            Activities 2022-23
                        </h3>
                        <DynamicTable
                            columns={activitiesColumns}
                            data={activities2022}
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                            Activities 2021-22
                        </h3>
                        <DynamicTable
                            columns={activitiesColumns}
                            data={activities2021}
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                            Activities 2020-21
                        </h3>
                        <DynamicTable
                            columns={activitiesColumns}
                            data={activities2020}
                        />
                    </div>
                </div>
            </div>

            {/* Important Notices Section */}
            <div className="container mx-auto my-16">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Important Notices
                </h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-10"></div>
                <DynamicTable
                    columns={noticesColumns}
                    data={importantNotices}
                />
            </div>

            {/* Digital Initiatives Section */}
            <div className="container mx-auto my-16 px-4">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                    <h2 className="text-3xl text-primary font-bold mb-6 text-center">
                        Digital Initiatives
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Online Learning Platforms
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• NPTEL-Swayam MOOCs integration</li>
                                <li>• Coursera course offerings</li>
                                <li>• Digital content delivery</li>
                                <li>• Interactive online sessions</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Technology Integration
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Smart classroom infrastructure</li>
                                <li>• Virtual laboratories</li>
                                <li>• AI-powered learning tools</li>
                                <li>• Digital assessment systems</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-primary">
                                Student Support Systems
                            </h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Academic Bank of Credits</li>
                                <li>• Digital portfolio management</li>
                                <li>• Online mentoring programs</li>
                                <li>• Career guidance platforms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default NEPPage;
