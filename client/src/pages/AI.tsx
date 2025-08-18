import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import ProfileMessageSection from "@/components/ProfileMessageSection";
import OverviewSection from "@/components/OverviewSection";
import Checklist from "@/components/Checklist";
import { Check } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import Message from "@/components/Message";
import ProfileCard from "@/components/ProfileCard";
import FacultySwiper from "@/components/FacultySwiper";
import LabInfoCard from "@/components/LabInfoCard";

import CourseOutcomeAccordion, {
    SubjectCO,
} from "@/components/CourseOutcomeAccordion";
import Cta from "@/components/Cta";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

interface Faculty {
    _id: string;
    name: string;
    department: string;
    designation: string;
    gender: string;
    imageUrl?: string;
}

export const courseData: SubjectCO[] = [
    {
        subject: "Communication Skills & 1FY1-04",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Comprehend the fundamental Principles, Types, and Methods of good communication.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Apply the basic structural and grammatical knowledge of the constituents for technical writing.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Develop the competence in writing skills related to various forms of technical and business communication.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Understand the genre of prose by reading loudly with correct pronunciation, stress intonation, and articulation of voice along with identifying and describing the connection between Literature and reality.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Develop the creativity and imagination through value-based genre of poetry by enhancing aesthetic and verbal ability.",
            },
        ],
    },
    {
        subject: "Human Values & 1FY1-05/2FY1-05",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Comprehend co-relationship between “Values”; and “skills” to ensure persistent happiness and prosperity.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Evaluate the coexistence of the Human Being - Harmony in Myself.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Identify the role of harmony in family, society and universal order.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Develop and evaluate the holistic perception of harmony at all levels of existence.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Create harmony in professional and personal lives by understanding Co-existence between human being with nature.",
            },
        ],
    },
    {
        subject: "ENGINEERING MATHEMATICS I & 1FY2-01",
        semester: "I semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Learn the concept of calculus to appraise improper integral, surface area and volume of solid of revolution of various laminas.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Differentiate the different techniques for convergence of sequence and series.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Differentiate the different techniques for convergence of sequence and series.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Application of Partial differentiation, problem-solving using concepts and techniques from PDE's.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Apply the concept of calculus to support improper integral, surface area and volume of solid of revolution of various laminas.",
            },
        ],
    },
    {
        subject: "ENGINEERING MATHEMATICS-II & 2FY2-01",
        semester: "II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Comprehend the computational techniques and algebraic skills essential for the study of systems of linear equations, matrix algebra, Eigen values, Eigen vectors, orthogonality and diagonalization.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Recognize ODEs and interpret the various methods for solving differential equation of first order and first degree.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Differentiate the various applications of function of one variable in ODE of higher order.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Evaluate the multivariable function using the concept of PDEs of first order.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Apply the various uses of multivariable function and solve by the partial differential equation of higher order.",
            },
        ],
    },
    {
        subject: "Engineering Physics & 1FY2-02 /2FY2-02",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Comprehend the concepts of wave optics and phenomenon of interference and diffraction of light.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Recognize ODEs and interpret the various methods for solving differential equation of first order and first degree.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Apply the conceptual knowledge of coherence of light wave in different application of light wave and use in optical fiber communication.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Synthesize the scientific and engineering principles of materials science to identify the properties of material related to appropriate field of application.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Apply the laws of electromagnetic theory in propagation of wave and use in communication.",
            },
        ],
    },
    {
        subject: "Engineering Chemistry & 1FY2-03 / 2FY2-03",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Describe the fundamental water quality for domestic and industrial purpose so that students will be able to describe impurities present in water, boiler troubles and removal of impurities.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Analyse the composition, characteristics and manufacturing methods of various types of solid, liquid and gaseous fuels and calculated calorific value of fuels for Industrial as well as domestic purposes.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Classify the dry and wet corrosion mechanisms and their protection methods. To investigate deterioration of metal through corrosion.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Understand the composition and manufacturing methods of engineering materials namely cement and glass and recognize and estimate various properties of lubricants in several engineering process.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Generating the generic drugs or medicines for various services in life long purpose by identifying the applications of organic reaction mechanism.",
            },
        ],
    },
    {
        subject: "Programming for Problem Solving & 1FY3-06/2FY3-06",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Understand the fundamental concepts of computers, algorithms, flowcharts and problem solving techniques.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Translate the algorithms and flowcharts into C programs.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Analyse the debug process in C programming language and to express in written form.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Formulate a problem into functions and create modular code that can be reused.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Develop C programs to demonstrate the applications of derived data types such as arrays, pointers, strings and functions.",
            },
        ],
    },
    {
        subject: "Basic Mechanical Engineering & 1FY3-07/2FY3-07",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Understand the concepts of thermodynamics, power plants, machine design, Manufacturing Engineering and Industrial Engineering.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Receive the basic knowledge of pump and IC engine.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Comprehend the concept, types and application of refrigerator and air conditioning system and Transmission of Power.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Explain the different Patterns, Molding, Casting, Forging and Extrusion of Primary Manufacturing Processes.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Describe the various process and uses of Welding, Brazing, Engineering materials and Heat treatment of steel.",
            },
        ],
    },
    {
        subject: "Basic Electrical Engineering & 1FY3-08/2FY3-08",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Evaluate the concept and process of various AC and DC circuit related elements, sources, laws, methods and theorems.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Explore the knowledge of transformers and its uses in applying the acquired knowledge to solve electrical circuit problem.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Analyse the characteristics, significance, construction and working of various power electronic devices.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Understand electromechanical energy conversion process.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Explore knowledge of protective devices and energy consumption calculations.",
            },
        ],
    },
    {
        subject: "Basic Civil Engineering & 1FY3-09/2FY3-09",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Understanding the scope, specialization, and role of civil engineer with impact of infrastructural development on economy of country.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Explain the Object, Principles & Types of Surveying, Analyses the Linear Measurements of surveying and evaluates the angular measurement through compass and leveling process through the various leveling instrument.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Analyse the importance of site selection, type of building Layout and Plan with introduction and components of Buildings & their functions.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Understanding the traffic and road safety and evaluate the Modes of Transportation, Causes of Accidents and Create the Road Safety Measures.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Classify the different types of pollutions, understand the Rainwater Harvesting, Global warming, Climate Change and solid Waste Management, Analyse the Primary and Secondary air pollutants.",
            },
        ],
    },
    {
        subject: "Engineering Chemistry Lab & 1/2FY2-21",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Evaluate the strength of CuSO4.5H2O solution with the help of Hypo solution, Ferrous Ammonium Sulphate solution with the help of K2Cr2O7 solution and NaOH and Na2CO3 in an alkali.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Analyse different properties of lubricating oil.",
            },
            {
                coNumber: "CO3",
                coDefinition: "Analyse quality of coal by proximate analysis.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Evaluate various quality parameters of water like harness, DO, Chlorine in water.",
            },
            {
                coNumber: "CO5",
                coDefinition: "Understand about synthesis of generic drugs.",
            },
        ],
    },
    {
        subject: "Engineering Physics Lab & 1/2FY2-20",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Understand the fundamental concepts of wave optics through the interference and diffraction experiment.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Analyse the concept of light in dispersive power of material and height of a celestial object.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Describe and demonstrate the behavior of semiconductor characteristics.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Applying the knowledge to show the charging and discharging behavior of capacitor with time in form of electrical energy.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Interpret the properties of Laser light and application in optical communication through optical fiber.",
            },
        ],
    },
    {
        subject: "Human Values Activities and Sports & 1/2FY1-23",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Course Introduction - Need, Basic Guidelines, Content and Process for Value Education.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Understanding Harmony in the Human Being - Harmony in Myself.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Understanding Harmony in the Family and Society - Harmony in Human-Human Relationship.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Understanding Harmony in the Nature and Existence - Whole existence as Coexistence.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Implications of the above Holistic Understanding of Harmony on Professional Ethics. Natural acceptance of human values.",
            },
        ],
    },
    {
        subject: "Language Lab & 1/2FY1-22",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "To understand Phonetic Symbols and Transcriptions.",
            },
            {
                coNumber: "CO2",
                coDefinition: "To enable students to participate in Extempore.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "To enable students to participate in Group Discussion.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "To improve writing skills of students by Dialogue Writing.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "To improve writing skills of students by Dialogue Writing.",
            },
        ],
    },
    {
        subject: "Manufacturing Practices Workshop & 1/2FY3-25",
        semester: "I / II semester",
        outcomes: [
            {
                coNumber: "CO1",
                coDefinition:
                    "Understand various tools, materials, instruments required for workshop operations.",
            },
            {
                coNumber: "CO2",
                coDefinition:
                    "Apply techniques to perform workshop operations with hand tools and power tools such as center lathe machine, drilling machine using given job drawing.",
            },
            {
                coNumber: "CO3",
                coDefinition:
                    "Understand application of the hand tools used in fitting, carpentry, foundry, welding shop, machine tools and sheet metal shop.",
            },
            {
                coNumber: "CO4",
                coDefinition:
                    "Write a report related to hand tools and machine tools description referring to library books and laboratory manuals.",
            },
            {
                coNumber: "CO5",
                coDefinition:
                    "Apply safety consciousness along with team work.",
            },
        ],
    },
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
    "Established in 2021 with cutting-edge AI & Data Science programs.",
    "Industry partnerships with leaders like AWS for real-world exposure.",
    "100% student placement in top software and IT companies.",
    "Faculty actively engaged in research and innovation.",
];

const missionPoints = [
    "FDeliver high-quality, industry-relevant education in AI and Data Science aligned with global standards.",
    "Foster innovation and research through collaboration with academia and industry partners like AWS.",
    "Empower students with practical skills, ethical awareness, and entrepreneurial mindset for successful careers.",
    "Promote continuous learning and professional development among faculty and students.",
];

const objectivePoints = [
    "Provide a robust curriculum integrating AI, Data Science, and foundational computer science principles.",
    "Facilitate industry engagement through projects, internships, and guest lectures.",
    "Support student research and participation in conferences and workshops.",
    "Ensure 100% placement by building strong industry connections and skill development initiatives.",
];

const visionContent = (
    <p>
        To be a center of excellence in Artificial Intelligence and Data Science
        education and research, nurturing innovative leaders who transform
        society through cutting-edge technology and interdisciplinary
        collaboration.
    </p>
);

const projects = [
    { name: "Machine Learning/Deep Learning" },
    {
        name: "Blockchain",
    },
    { name: "Web Development" },
    { name: "AR / VR" },
    {
        name: "Artificial Intelligence",
    },
    { name: "NLP" },

    // Add more...
];

const missionContent = <Checklist items={missionPoints} />;

const objectiveContent = <Checklist items={objectivePoints} />;

const columns = [
    { label: "S.No", key: "sno" },
    { label: "Title of FDP / Workshop", key: "title" },
];

const data = [
    {
        sno: 1,
        title: "Workshop Faculty Development Program Conference Event Conducted",
    },
    { sno: 2, title: "SPL Webinar Conducted" },
    { sno: 3, title: "FDPs Workshop Conference Seminar Participation Details" },
    { sno: 4, title: "Student Achievements" },
    { sno: 5, title: "Appeared in Gate" },
    { sno: 6, title: "Paper Published By Students" },
    { sno: 7, title: "Workshop Conference Seminar of Students" },
    { sno: 8, title: "Inside outside Participation" },
    { sno: 9, title: "Award Recognization" },
];
const AI = () => {
    const [facultyData, setFacultyData] = useState<Faculty[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFaculty = async () => {
            try {
                const response = await fetch("/api/faculty");
                if (response.ok) {
                    const data = await response.json();
                    // Filter faculty by AI and Data Science department
                    const aiFaculty =
                        data.data?.filter(
                            (faculty: Faculty) =>
                                faculty.department === "AI and Data Science",
                        ) || [];

                    // Transform data to match FacultySwiper expected format
                    const transformedFaculty = aiFaculty.map(
                        (faculty: Faculty) => ({
                            imageSrc:
                                faculty.imageUrl ||
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
                            name: faculty.name,
                            gender: faculty.gender,
                            designation: faculty.designation,
                        }),
                    );

                    setFacultyData(transformedFaculty);
                }
            } catch (error) {
                console.error("Error loading faculty:", error);
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
                title="Artificial Intelligence & Data Science Deptartment"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Artificial Intelligence & Data Science Deptartment",
                        isCurrent: true,
                    },
                ]}
            />

            {/* overview sections start */}

            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "/images/department/ai.jpg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p className="mb-6 leading-relaxed text-neutral-800">
                    The Department of Artificial Intelligence & Data Science at
                    Poornima Institute of Engineering & Technology was
                    established in 2021 with a commitment to deliver exceptional
                    education in the dynamic fields of AI and DS. Our mission is
                    to nurture innovation and research while providing students
                    with a robust curriculum endorsed by Rajasthan Technical
                    University, KOTA.
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
                        content={`Welcome to the Department of Artificial Intelligence & Data Science at Poornima Institute of Engineering & Technology!

Established in 2021, our department is at the forefront of innovation and excellence within the Poornima Foundation. With a focus on providing quality education and fostering research and innovation in the dynamic fields of Artificial Intelligence & Data Science, we are dedicated to nurturing the next generation of leaders and researchers.

Our undergraduate program, leading to a B.Tech. in Artificial Intelligence & Data Science, offers students a comprehensive curriculum aligned with the standards set by Rajasthan Technical University, KOTA. With an emphasis on hands-on learning and practical experience, our state-of-the-art infrastructure and cutting-edge laboratory facilities provide students with the tools and resources they need to succeed in today's rapidly evolving technological landscape.

At our department, we believe in fostering a culture of innovation, critical thinking, and ethical responsibility. Our faculty members are not only educators but also mentors who guide students in their academic and professional journey. Through industry partnerships, research collaborations, and practical projects, we ensure that our graduates are well-prepared to meet the challenges of the AI and Data Science industry.

We invite you to explore our programs, facilities, and opportunities. Together, let's shape the future of technology and make a positive impact on society through the power of Artificial Intelligence and Data Science.

- Dr. Budesh Kanwar
HOD, Department of AI & Data Science, PIET`}
                        imageUrl="/images/hod/ai.png"
                        imageAlt="Dr. Budesh Kanwar - HOD, Department of AI & Data Science"
                    />
                </div>
            </section>

            {/* faculty cards */}

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Meet Our Faculty
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">Loading faculty...</p>
                    </div>
                ) : facultyData.length > 0 ? (
                    <FacultySwiper profiles={facultyData} />
                ) : (
                    <div className="text-center py-8">
                        <p className="text-neutral-600">
                            No faculty members found for AI and Data Science
                            department.
                        </p>
                    </div>
                )}
            </section>

            {/* labs cards */}

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">
                        Our Laboratories
                    </h2>
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
                    <h2 className="text-3xl font-bold text-center text-primary mb-4">
                        Student Projects
                    </h2>
                    <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
                        Explore innovative ideas and solutions created by our
                        students across various disciplines.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 rounded-lg p-5 shadow hover:shadow-md transition-all group cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                                    <i className="fa-solid fa-hand-point-right text-secondary"></i>{" "}
                                    {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="/programs">
                            <a className="btn-primary rounded-lg shadow-md hover-lift">
                                View All Projects{" "}
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </section>
            <CourseOutcomeAccordion data={courseData} />
            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    FDP / Workshop
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />
            </div>
            <Cta />
            <Footer />
        </div>
    );
};

export default AI;
