import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import ProfileMessageSection from '@/components/ProfileMessageSection'
import OverviewSection from '@/components/OverviewSection'
import Checklist from '@/components/Checklist'
import { Check } from 'lucide-react'
import InfoCard from '@/components/InfoCard'
import Message from '@/components/Message'
import ProfileCard from '@/components/ProfileCard'
import FacultySwiper from '@/components/FacultySwiper'
import LabInfoCard from '@/components/LabInfoCard'
import CourseOutcomeAccordion, { SubjectCO } from '@/components/CourseOutcomeAccordion'
import Cta from '@/components/Cta'
import DynamicTable from '@/components/DynamicTable '
import StudentProjectsGrid from '@/components/StudentProjectsGrid'
import { StudentProject } from '@/components/types'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

interface Faculty {
  _id: string;
  name: string;
  department: string;
  designation: string;
  gender: string;
  imageUrl?: string;
}
const projectData: StudentProject[] = [
    {
        sno: 1,
        title: 'Laser Cut Wall Clock',
        studentCoordinator: 'Rahul Jain',
        facultyCoordinator: 'Nitin Mukesh Mathur',
        facilityUsed: 'LASER cutter, various hardware and software support',
    },
    {
        sno: 2,
        title: '3D printer lithophane technology',
        studentCoordinator: 'Rachit Agarwal',
        facultyCoordinator: 'Udit Mamodiya',
        facilityUsed: 'FDM printer and other hardware and software support',
    },
    {
        sno: 3,
        title: 'Reverse engineering',
        studentCoordinator: 'Parv Sharma',
        facultyCoordinator: 'Udit Mamodiya',
        facilityUsed: '3D scanning, 3D printer, and other hardware and software support',
    },
    {
        sno: 4,
        title: '3D printed mobile stand',
        studentCoordinator: 'Vaidika Duggar',
        facultyCoordinator: 'Nitin Mukesh Mathur',
        facilityUsed: '3D printer and raw material support',
    },
    {
        sno: 5,
        title: 'Stone paper scissor machine',
        studentCoordinator: 'Yuvraj Dagur',
        facultyCoordinator: 'Udit Mamodiya',
        facilityUsed: '3D printer for printing out the elements and parts of hand, Laser cutter to cut out the sheet parts and to give support in working of hands, other components and machines to assemble the fingers, palm, wrist and the forearm.',
    },
    {
        sno: 6,
        title: 'Li fi',
        studentCoordinator: 'Satish Parmar',
        facultyCoordinator: 'Pradeep Kumar',
        facilityUsed: 'PCB router, solder etc.',
    },
    {
        sno: 7,
        title: 'Fingerprint Door system',
        studentCoordinator: 'Ishaan Jain',
        facultyCoordinator: 'Nitin Mukesh Mathur',
        facilityUsed: 'PCB, LASER cutter, and other hardware support',
    },
    {
        sno: 8,
        title: 'World Map on laser cutting and engraving machine',
        studentCoordinator: 'Pranay Sharma',
        facultyCoordinator: 'Nitin Mukesh Mathur',
        facilityUsed: 'LASER cutting and engraving machine, acrylic sheets, etc.',
    },
    {
        sno: 9,
        title: 'Mini Tape dispenser',
        studentCoordinator: 'Harshit Gupta',
        facultyCoordinator: 'Nitin Mukesh Mathur',
        facilityUsed: 'Cura, 3D printer, PLA rolls, etc.',
    },
    {
        sno: 10,
        title: 'Decorative Wall',
        studentCoordinator: 'Himanshu Moyal',
        facultyCoordinator: 'Nitin Mukesh Mathur',
        facilityUsed: 'RD works, LASER cutting and engraving machine, acrylic sheets, etc.',
    },
    // ... other projects
];

const columns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Application No.', key: 'applicationNo' },
    { label: 'Applicant Name', key: 'applicantName' },
    { label: 'Affiliation', key: 'affiliation' },
    { label: 'Title of Invention', key: 'title' },
    { label: 'Status', key: 'status' },
];


const data = [
    {
        sno: 1,
        applicationNo: '202411000922',
        applicantName: 'Indra Kishor',
        affiliation: 'PIET',
        title: 'IoT enabled extended reality for college virtual tour: an immersive mobile application with real voice and avatar assistant',
        status: 'Published',
    },
    {
        sno: 2,
        applicationNo: '202311076140',
        applicantName: 'Indra Kishor',
        affiliation: 'PIET',
        title: 'Development of AI intelligence-based agrigenous system enhancing farming efficiency based on the IoT-AR Drone approach',
        status: 'Published',
    },
    {
        sno: 3,
        applicationNo: '202311051802',
        applicantName: 'Indra Kishor',
        affiliation: 'PIET',
        title: 'Impressive XR system with voice assistant interaction for exploring educational institutions',
        status: 'Published',
    },
    {
        sno: 4,
        applicationNo: '202311037396',
        applicantName: 'Abhishek Dadhich',
        affiliation: 'PIET',
        title: 'Digital system for student presence',
        status: 'Published',
    },
    {
        sno: 5,
        applicationNo: '202311075320',
        applicantName: 'Indra Kishor',
        affiliation: 'PIET',
        title: 'An IoT-based two-way people counter with dynamic tracking and data regression for single door entry and exit',
        status: 'Published',
    },
    {
        sno: 6,
        applicationNo: '202211039557',
        applicantName: 'Dr. Rakhi Mutha',
        affiliation: 'PIET, Jaipur',
        title: 'Identification and mitigation of attacks in wireless sensor networks using trust-based blockchain mechanism',
        status: 'Published (2022)',
    },
    {
        sno: 7,
        applicationNo: '202211066470',
        applicantName: 'Mr. Atrakesh Pandey',
        affiliation: 'PIET, Jaipur',
        title: 'A hybrid approach using RNN and CNN for predicting 1-4D structure of protein from amino acid sequences',
        status: 'Published (2022)',
    },
    {
        sno: 8,
        applicationNo: '202211033519',
        applicantName: 'Dr. Shashi Kant Rathore',
        affiliation: 'PIET, Jaipur',
        title: 'Bayesian approach in spam detection with nature-inspired optimization',
        status: 'Published (2022)',
    },
    {
        sno: 9,
        applicationNo: '202211065546',
        applicantName: 'Dr. Purushottam Lal',
        affiliation: 'PIET, Jaipur',
        title: 'Automatic signature verification to maintain social distancing',
        status: 'Published (2022)',
    },
    {
        sno: 10,
        applicationNo: '202211065546',
        applicantName: 'Mr. Deepak Moud',
        affiliation: 'PIET, Jaipur',
        title: 'Automatic signature verification to maintain social distancing',
        status: 'Published (2022)',
    },
    {
        sno: 11,
        applicationNo: '202211067216',
        applicantName: 'Mr. Rahul Gupta',
        affiliation: 'PIET, Jaipur',
        title: 'Reduced switch multilevel inverter for improved power quality based on solar photovoltaic systems',
        status: 'Published (2022)',
    },
    {
        sno: 12,
        applicationNo: '202211067504',
        applicantName: 'Dr. Shruti Thapar',
        affiliation: 'PIET, Jaipur',
        title: 'System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime',
        status: 'Published (2022)',
    },
    {
        sno: 13,
        applicationNo: '202211067504',
        applicantName: 'Dr. Purushottam Lal',
        affiliation: 'PIET, Jaipur',
        title: 'System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime',
        status: 'Published (2022)',
    },
    {
        sno: 14,
        applicationNo: '202211067504',
        applicantName: 'Dr. Uday Pratap Singh',
        affiliation: 'PIET, Jaipur',
        title: 'System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime',
        status: 'Published (2022)',
    },
    {
        sno: 15,
        applicationNo: '202211067504',
        applicantName: 'Ms. Ritu Shukla',
        affiliation: 'PIET, Jaipur',
        title: 'System and model for development of energy-efficient routing protocol for wireless sensor networks for enhancement of sensor node and battery lifetime',
        status: 'Published (2022)',
    },
    {
        sno: 16,
        applicationNo: '202211067216',
        applicantName: 'Dr. Purushottam Lal',
        affiliation: 'PIET, Jaipur',
        title: 'Reduced switch multilevel inverter for improved power quality based on solar photovoltaic systems',
        status: 'Published (2022)',
    },
    {
        sno: 17,
        applicationNo: '202211062722',
        applicantName: 'Dr. Purushottam Lal',
        affiliation: 'PIET, Jaipur',
        title: 'An intelligent system for peer-to-peer wireless power transfer among ubiquitous devices',
        status: 'Published (2022)',
    },
    {
        sno: 18,
        applicationNo: '202211069267',
        applicantName: 'Dr. Purushottam Lal',
        affiliation: 'PIET, Jaipur',
        title: 'Security improvement in storage of Dockers containers on cloud server',
        status: 'Published (2022)',
    },
    {
        sno: 19,
        applicationNo: '202211069267',
        applicantName: 'Dr. Uday Pratap Singh',
        affiliation: 'PIET, Jaipur',
        title: 'Security improvement in storage of Dockers containers on cloud server',
        status: 'Published (2022)',
    },
    {
        sno: 20,
        applicationNo: '202211069267',
        applicantName: 'Mr. Vivek Saxena',
        affiliation: 'PIET, Jaipur',
        title: 'Security improvement in storage of Dockers containers on cloud server',
        status: 'Published (2022)',
    },
    {
        sno: 21,
        applicationNo: '202211070247',
        applicantName: 'Ms. Shikha Gautam',
        affiliation: 'PIET, Jaipur',
        title: 'QR-based automated system for the collection & donation of residual medicine stocks',
        status: 'Published (2022)',
    },
];


const fdpColumns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Title of FDP / Workshop', key: 'title' },
];

const fdpData = [
    { sno: 1, title: 'SUMMER INTERNSHIP 2022 ON ARTIFICIAL INTELLIGENCE AND DATA SCIENCE' },
    { sno: 2, title: 'SUMMER INTERNSHIP-2022 FULL STACK WEB DEVELOPER (PHP WITH MYSQL)' },
    { sno: 3, title: 'WEEKS AICTE TRAINING AND LEARNING (ATAL) FACULTY DEVELOPMENT PROGRAM' },
    { sno: 4, title: 'SIX DAY WORKSHOP ON CORE JAVA-HANDS ON' },
    { sno: 5, title: 'ONLINE EXPERT TALK ON “A FIRST DIVE TO MOBILE APP DEVELOPMENT”' },
    { sno: 6, title: 'Five DAYS WORKSHOP ON CYBER SECURITY AND ETHICAL HACKING' },
    { sno: 7, title: 'Three DAYS FACULTY DEVELOPMENT PROGRAM ON CYBER SECURITY AND ETHICAL HACKING' },
    { sno: 8, title: 'AN EXPERT TALK ON CORPORATE AND SERVICE INDUSTRY READY' },
    { sno: 9, title: '5 DAYS INDUSTRIAL WORKSHOP ON “DEVOPS VIRTUALIZATION”' },
    { sno: 10, title: 'AN EXPERT TALK ON “METAVERSE BEYOND THE HYPE”' },
    { sno: 11, title: 'SIX DAYS WORKSHOP ON “INTERNET OF THINGS”' },
    { sno: 12, title: 'SUMMER INTERNSHIP ON MACHINE LEARNING AND DATASCIENCE-2022' },
    { sno: 13, title: 'ENGIFEST-2022, ENGINEERS DAY CELEBRATION, 2022' },
];


export const courseData: SubjectCO[] = [
    {
        subject: "Communication Skills & 1FY1-04",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend the fundamental Principles, Types, and Methods of good communication." },
            { coNumber: "CO2", coDefinition: "Apply the basic structural and grammatical knowledge of the constituents for technical writing." },
            { coNumber: "CO3", coDefinition: "Develop the competence in writing skills related to various forms of technical and business communication." },
            { coNumber: "CO4", coDefinition: "Understand the genre of prose by reading loudly with correct pronunciation, stress intonation, and articulation of voice along with identifying and describing the connection between Literature and reality." },
            { coNumber: "CO5", coDefinition: "Develop the creativity and imagination through value-based genre of poetry by enhancing aesthetic and verbal ability." },
        ]
    },
    {
        subject: "Human Values & 1FY1-05/2FY1-05",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend co-relationship between “Values”; and “skills” to ensure persistent happiness and prosperity." },
            { coNumber: "CO2", coDefinition: "Evaluate the coexistence of the Human Being - Harmony in Myself." },
            { coNumber: "CO3", coDefinition: "Identify the role of harmony in family, society and universal order." },
            { coNumber: "CO4", coDefinition: "Develop and evaluate the holistic perception of harmony at all levels of existence." },
            { coNumber: "CO5", coDefinition: "Create harmony in professional and personal lives by understanding Co-existence between human being with nature." },
        ]
    },
    {
        subject: "ENGINEERING MATHEMATICS I & 1FY2-01",
        semester: "I semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Learn the concept of calculus to appraise improper integral, surface area and volume of solid of revolution of various laminas." },
            { coNumber: "CO2", coDefinition: "Differentiate the different techniques for convergence of sequence and series." },
            { coNumber: "CO3", coDefinition: "Differentiate the different techniques for convergence of sequence and series." },
            { coNumber: "CO4", coDefinition: "Application of Partial differentiation, problem-solving using concepts and techniques from PDE's." },
            { coNumber: "CO5", coDefinition: "Apply the concept of calculus to support improper integral, surface area and volume of solid of revolution of various laminas." },
        ]
    },
    {
        subject: "ENGINEERING MATHEMATICS-II & 2FY2-01",
        semester: "II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend the computational techniques and algebraic skills essential for the study of systems of linear equations, matrix algebra, Eigen values, Eigen vectors, orthogonality and diagonalization." },
            { coNumber: "CO2", coDefinition: "Recognize ODEs and interpret the various methods for solving differential equation of first order and first degree." },
            { coNumber: "CO3", coDefinition: "Differentiate the various applications of function of one variable in ODE of higher order." },
            { coNumber: "CO4", coDefinition: "Evaluate the multivariable function using the concept of PDEs of first order." },
            { coNumber: "CO5", coDefinition: "Apply the various uses of multivariable function and solve by the partial differential equation of higher order." },
        ]
    },
    {
        subject: "Engineering Physics & 1FY2-02 /2FY2-02",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend the concepts of wave optics and phenomenon of interference and diffraction of light." },
            { coNumber: "CO2", coDefinition: "Recognize ODEs and interpret the various methods for solving differential equation of first order and first degree." },
            { coNumber: "CO3", coDefinition: "Apply the conceptual knowledge of coherence of light wave in different application of light wave and use in optical fiber communication." },
            { coNumber: "CO4", coDefinition: "Synthesize the scientific and engineering principles of materials science to identify the properties of material related to appropriate field of application." },
            { coNumber: "CO5", coDefinition: "Apply the laws of electromagnetic theory in propagation of wave and use in communication." },
        ]
    },
    {
        subject: "Engineering Chemistry & 1FY2-03 / 2FY2-03",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Describe the fundamental water quality for domestic and industrial purpose so that students will be able to describe impurities present in water, boiler troubles and removal of impurities." },
            { coNumber: "CO2", coDefinition: "Analyse the composition, characteristics and manufacturing methods of various types of solid, liquid and gaseous fuels and calculated calorific value of fuels for Industrial as well as domestic purposes." },
            { coNumber: "CO3", coDefinition: "Classify the dry and wet corrosion mechanisms and their protection methods. To investigate deterioration of metal through corrosion." },
            { coNumber: "CO4", coDefinition: "Understand the composition and manufacturing methods of engineering materials namely cement and glass and recognize and estimate various properties of lubricants in several engineering process." },
            { coNumber: "CO5", coDefinition: "Generating the generic drugs or medicines for various services in life long purpose by identifying the applications of organic reaction mechanism." },
        ]
    },
    {
        subject: "Programming for Problem Solving & 1FY3-06/2FY3-06",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamental concepts of computers, algorithms, flowcharts and problem solving techniques." },
            { coNumber: "CO2", coDefinition: "Translate the algorithms and flowcharts into C programs." },
            { coNumber: "CO3", coDefinition: "Analyse the debug process in C programming language and to express in written form." },
            { coNumber: "CO4", coDefinition: "Formulate a problem into functions and create modular code that can be reused." },
            { coNumber: "CO5", coDefinition: "Develop C programs to demonstrate the applications of derived data types such as arrays, pointers, strings and functions." },
        ]
    },
    {
        subject: "Basic Mechanical Engineering & 1FY3-07/2FY3-07",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the concepts of thermodynamics, power plants, machine design, Manufacturing Engineering and Industrial Engineering." },
            { coNumber: "CO2", coDefinition: "Receive the basic knowledge of pump and IC engine." },
            { coNumber: "CO3", coDefinition: "Comprehend the concept, types and application of refrigerator and air conditioning system and Transmission of Power." },
            { coNumber: "CO4", coDefinition: "Explain the different Patterns, Molding, Casting, Forging and Extrusion of Primary Manufacturing Processes." },
            { coNumber: "CO5", coDefinition: "Describe the various process and uses of Welding, Brazing, Engineering materials and Heat treatment of steel." },
        ]
    },
    {
        subject: "Basic Electrical Engineering & 1FY3-08/2FY3-08",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Evaluate the concept and process of various AC and DC circuit related elements, sources, laws, methods and theorems." },
            { coNumber: "CO2", coDefinition: "Explore the knowledge of transformers and its uses in applying the acquired knowledge to solve electrical circuit problem." },
            { coNumber: "CO3", coDefinition: "Analyse the characteristics, significance, construction and working of various power electronic devices." },
            { coNumber: "CO4", coDefinition: "Understand electromechanical energy conversion process." },
            { coNumber: "CO5", coDefinition: "Explore knowledge of protective devices and energy consumption calculations." },
        ]
    },
    {
        subject: "Basic Civil Engineering & 1FY3-09/2FY3-09",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understanding the scope, specialization, and role of civil engineer with impact of infrastructural development on economy of country." },
            { coNumber: "CO2", coDefinition: "Explain the Object, Principles & Types of Surveying, Analyses the Linear Measurements of surveying and evaluates the angular measurement through compass and leveling process through the various leveling instrument." },
            { coNumber: "CO3", coDefinition: "Analyse the importance of site selection, type of building Layout and Plan with introduction and components of Buildings & their functions." },
            { coNumber: "CO4", coDefinition: "Understanding the traffic and road safety and evaluate the Modes of Transportation, Causes of Accidents and Create the Road Safety Measures." },
            { coNumber: "CO5", coDefinition: "Classify the different types of pollutions, understand the Rainwater Harvesting, Global warming, Climate Change and solid Waste Management, Analyse the Primary and Secondary air pollutants." },
        ]
    },
    {
        subject: "Engineering Chemistry Lab & 1/2FY2-21",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Evaluate the strength of CuSO4.5H2O solution with the help of Hypo solution, Ferrous Ammonium Sulphate solution with the help of K2Cr2O7 solution and NaOH and Na2CO3 in an alkali." },
            { coNumber: "CO2", coDefinition: "Analyse different properties of lubricating oil." },
            { coNumber: "CO3", coDefinition: "Analyse quality of coal by proximate analysis." },
            { coNumber: "CO4", coDefinition: "Evaluate various quality parameters of water like harness, DO, Chlorine in water." },
            { coNumber: "CO5", coDefinition: "Understand about synthesis of generic drugs." },
        ]
    },
    {
        subject: "Engineering Physics Lab & 1/2FY2-20",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamental concepts of wave optics through the interference and diffraction experiment." },
            { coNumber: "CO2", coDefinition: "Analyse the concept of light in dispersive power of material and height of a celestial object." },
            { coNumber: "CO3", coDefinition: "Describe and demonstrate the behavior of semiconductor characteristics." },
            { coNumber: "CO4", coDefinition: "Applying the knowledge to show the charging and discharging behavior of capacitor with time in form of electrical energy." },
            { coNumber: "CO5", coDefinition: "Interpret the properties of Laser light and application in optical communication through optical fiber." },
        ]
    },
    {
        subject: "Human Values Activities and Sports & 1/2FY1-23",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Course Introduction - Need, Basic Guidelines, Content and Process for Value Education." },
            { coNumber: "CO2", coDefinition: "Understanding Harmony in the Human Being - Harmony in Myself." },
            { coNumber: "CO3", coDefinition: "Understanding Harmony in the Family and Society - Harmony in Human-Human Relationship." },
            { coNumber: "CO4", coDefinition: "Understanding Harmony in the Nature and Existence - Whole existence as Coexistence." },
            { coNumber: "CO5", coDefinition: "Implications of the above Holistic Understanding of Harmony on Professional Ethics. Natural acceptance of human values." },
        ]
    },
    {
        subject: "Language Lab & 1/2FY1-22",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "To understand Phonetic Symbols and Transcriptions." },
            { coNumber: "CO2", coDefinition: "To enable students to participate in Extempore." },
            { coNumber: "CO3", coDefinition: "To enable students to participate in Group Discussion." },
            { coNumber: "CO4", coDefinition: "To improve writing skills of students by Dialogue Writing." },
            { coNumber: "CO5", coDefinition: "To improve writing skills of students by Dialogue Writing." },
        ]
    },
    {
        subject: "Manufacturing Practices Workshop & 1/2FY3-25",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand various tools, materials, instruments required for workshop operations." },
            { coNumber: "CO2", coDefinition: "Apply techniques to perform workshop operations with hand tools and power tools such as center lathe machine, drilling machine using given job drawing." },
            { coNumber: "CO3", coDefinition: "Understand application of the hand tools used in fitting, carpentry, foundry, welding shop, machine tools and sheet metal shop." },
            { coNumber: "CO4", coDefinition: "Write a report related to hand tools and machine tools description referring to library books and laboratory manuals." },
            { coNumber: "CO5", coDefinition: "Apply safety consciousness along with team work." },
        ]
    }
];


const labData = [
    {
        image: "https://stock.adobe.com/274385444", // computer lab
        title: "Computer Programming Lab",
        facultyInCharge: "Ms. Reshma Kala",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083", // language/computer cubicle lab
        title: "Language Lab",
        facultyInCharge: "Dr. Prince Dawar",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444", // reuse for Manufacturing Workshop temporarily
        title: "Manufacturing Practices Workshop",
        facultyInCharge: "Mr. Ram Mohan",
        labAssistant: "Mr. Vimal Jain",
        roomNumber: "AB‑04",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "Engineering Physics Lab",
        facultyInCharge: "Dr. Prince Dawar",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "Engineering Physics Lab",
        facultyInCharge: "Dr. Mukesh Chandra",
        labAssistant: "Ms. Neha Nigam",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Basic Electrical Engineering",
        facultyInCharge: "Dr. Amit Shrivastava",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AG‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },


];
const points = [
    'AICTE- IDEA Lab ( Simulation lab, Testing Lab, PCB Design Lab, Mechancial Workshop lab, 3D Printing lab and laser cutter & Beam Works lab)',
    'Internet of Things Lab',
    'Embedded System Lab',
    "Robotics Lab",
    "Machine learning & Data Analytics Lab",
    "Advanced Computing lab",
];

const missionPoints = [
    'To provide a comprehensive outcome-based education through a robust curriculum and hands-on learning.',
    'To promote research, innovation, and entrepreneurial thinking among students and faculty.',
    'To bridge the gap between academia and industry through real-world projects, internships, and technical collaborations.',
    'To ensure holistic student development by nurturing ethical values, professional skills, and lifelong learning.',

];

const objectivePoints = [
    'Deliver high-quality education in core and emerging areas of computer engineering.',
    'Facilitate research and innovation through faculty guidance, conferences, and technical events.',
    'Equip students with industry-ready skills through workshops, coding contests, and placement preparation.',
    'Encourage students to contribute to society with transparency and integrity through tech-enabled solutions.',
]

const visionContent = (
    <p>
        To foster an environment of innovation, research, and academic excellence that prepares future technocrats and leaders to address global challenges in computer engineering and technology.
    </p>
);



const projects = [
    { name: "Airtificial Intelligence and Machine Learning	" },
    {
        name: "Augmented and Virtual Reality	"
    },
    { name: "Blockchain" },
    { name: "Deep Learning	" },
    {
        name: "Internet of Things	"
    },
    { name: "E-commerce website" },
    { name: "Mobile Application Development	" },
    { name: "LIBRARY MANAGEMENT" },
    { name: "5 MIN TAXI" },
    { name: "Flexstart" },
    { name: "Task management system" },
    { name: "WeatherHub" },
    { name: "React Weather" },
    { name: "To-Do List, Calculator" },
    { name: "MusicBee" },
    { name: "Flexstart" },
    { name: "SPOTIFY CLONE" },
    { name: "AnCrypt" },
    { name: "Havenly" },
    { name: "Restaurant website" },
    { name: "Interior product website" },

    // Add more...
];










const missionContent = (
    <Checklist items={missionPoints} />
);

const objectiveContent = (
    <Checklist items={objectivePoints} />
);


const IOT = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch('/api/faculty');
                if (response.ok) {
                    const data = await response.json();
                    // Filter faculty by Internet of Things department
                    const iotFaculty = data.data?.filter((faculty: Faculty) => 
                        faculty.department === 'Internet of Things'
                    ) || [];
                    
                    // Transform data to match FacultySwiper expected format
                    const transformedFaculty = iotFaculty.map((faculty: Faculty) => ({
                        imageSrc: faculty.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
                        name: faculty.name,
                        gender: faculty.gender,
                        designation: faculty.designation,
                    }));
                    
                    setFacultyData(transformedFaculty);
                }
            } catch (error) {
                console.error('Error loading faculty:', error);
            } finally {
                setLoading(false);
            }
        };

        loadFaculty();
    }, []);

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Department of Internet of Things"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Department of Internet of Things', isCurrent: true
                    },
                ]}
            />

            {/* overview sections start */}

            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/idealab.jpeg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>
                    The Department of Internet of Things (IoT) at Poornima Institute of Engineering and Technology was established in session 2023-24 with a visionary goal to cultivate a dynamic ecosystem where innovation and technological advancements converge to shape the technocrats and innovators of tomorrow who work in collaborative domains of Computer Engineering, Electronics & communication and leading to creating IoT based solutions for ease of life for society. The department offers B.Tech Computer Science & Engineering (IoT) program with an intake of 60 seats, duly approved by AICTE and affiliated to Rajasthan Technical University. With a faculty comprising dedicated mentors, a substantial percentage holding Ph.D. degrees, and state-of-the-art infrastructure, we've consistently attracted bright minds from both within the state and beyond. Through initiatives like project exhibitions and international conferences, we will provide a platform for students to showcase their innovative projects and engage in research endeavors. Furthermore, our department fosters a culture of continuous learning and skill development through workshops, technical seminars, and industry partnerships, ensuring our students are well-equipped for the challenges of the digital age.

                </p>
                <br />
                <p>
                    AICTE- IDEA Lab ( Simulation lab, Testing Lab, PCB Design Lab, Mechancial Workshop lab, 3D Printing lab and laser cutter & Beam Works lab)
                    Internet of Things Lab
                    Embedded System Lab
                    Robotics Lab
                    Machine learning & Data Analytics Lab
                    Advanced Computing lab
                </p>


                <Checklist items={points} />


                <br />

            </OverviewSection>



            {/* vision and mission section */}

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                <InfoCard
                    title="Vision"
                    iconClass="fas fa-eye"
                    content={visionContent}
                />

                <InfoCard
                    title="Mission"
                    iconClass="fas fa-bullseye"
                    content={missionContent}
                />
                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
            </div>


            {/* hod message */}

            <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="container mx-auto px-4">
                    <Message
                        title="Message from the HOD"
                        content={`Dear Students, Faculty, and Visitors,

As the Head of Department (HoD), it is my privilege to lead a team of dedicated faculty members and passionate students who are at the forefront of shaping the future of IoT (Internet of Things). Our department serves as a hub for cutting-edge research, technological advancement, and academic excellence.

At the core of our mission is the belief that IoT has the potential to revolutionize industries, enhance quality of life, and address complex societal challenges. Through our interdisciplinary approach, we strive to empower students with the knowledge, skills, and mindset required to thrive in this rapidly evolving field.

Our department is more than just a collection of classrooms and laboratories; it is a vibrant community of innovators, problem solvers, and visionaries. Here, collaboration is key, and diversity of thought is celebrated. We provide a nurturing environment where students are encouraged to explore, experiment, and push the boundaries of what is possible.

As the landscape of IoT continues to evolve, we remain committed to staying at the forefront of innovation. Our faculty members are actively engaged in groundbreaking research and industry partnerships, ensuring that our curriculum remains relevant and our students are prepared for the challenges of tomorrow.

The Department of Internet of Things at PIET stands as a testament to our commitment to excellence in education and research. We are dedicated to developing smart solutions that connect devices, systems, and people, creating a more efficient and sustainable world.

Whether you are a prospective student, a current member of our department, or a curious visitor, I invite you to join us on this exciting journey. Together, let's explore the endless possibilities of IoT and inspire the next generation of technological leaders.

Thank you for your interest in the IoT Department. I look forward to welcoming you to our community.

- Dr. Payal Bansal
HOD, Department of Internet of Things, PIET`}
                        imageUrl="/images/hod/iot.jpg"
                        imageAlt="Dr. Payal Bansal - HOD, Department of Internet of Things"
                    />
                </div>
            </section>


            {/* faculty cards */}

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Meet Our Faculty</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">Loading faculty...</p>
                    </div>
                ) : facultyData.length > 0 ? (
                    <FacultySwiper profiles={facultyData} />
                ) : (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">No faculty members found for Internet of Things department.</p>
                    </div>
                )}
            </section>



            {/* labs cards */}

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Laboratories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labData.map((lab, index) => (
                            <LabInfoCard key={index} {...lab} />
                        ))}
                    </div>
                </div>
            </section>

            {/* student projects section */}
            <section className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-4">Student Projects</h2>
                    <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
                        Explore innovative ideas and solutions created by our students across various disciplines.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 rounded-lg p-5 shadow hover:shadow-md transition-all group cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                                    <i className="fa-solid fa-hand-point-right text-secondary"></i>  {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CourseOutcomeAccordion data={courseData} />



            {/* ipr's data */}

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">IPR's</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />

            </div>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center"> FDP / Workshop</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={fdpColumns} data={fdpData} />

            </div>
            <div className="container mt-10 mx-auto">

                <StudentProjectsGrid projects={projectData} />;

            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default IOT
