import React from "react";
import SimpleImageSlider from "@/components/SimpleImageSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import FacultySwiper from "@/components/FacultySwiper";
import LazyImage from "@/components/LazyImage";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const images = [
    "https://www.piet.poornima.org/img_idealab/ud1.PNG",
    "https://www.piet.poornima.org/img_idealab/ud2.PNG",
    "https://www.piet.poornima.org/img_idealab/ud3.PNG",
    "https://www.piet.poornima.org/img_idealab/ud4.PNG",
];

const objectivePoints = [
    "Promotes innovation and entrepreneurship.",
    "For students in technical institutions.",
    "Provides a supportive environment. ",
    "Offers resources and guidance.",
    "Helps turn ideas into startups.",
];
const altTexts = [
    "Description for image 1",
    "Description for image 2",
    "Description for image 3",
];
const objectiveContent = <Checklist items={objectivePoints} />;

const visionContent = (
    <p>
        The IDEA Lab will be set up in technical education institutions across
        the country. It will be equipped with state-of-the-art facilities and
        resources to support the development of student ideas and projects. The
        lab will also provide students with access to mentors, experts, and
        industry leaders who can provide guidance and support throughout the
        development process.
        <br />
    </p>
);

const facultyData = [
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/1_Dr._Dinesh_Goyal.jpg",
        name: "Prof (Dr.) Dinesh Goyal",
        gender: "Male",
        designation:
            "Chief Mentor, PIET-AICTE IDEA LAB, Principal & Director, PIET",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/2_Dr._Payal_Bansal.jpg",
        name: "Dr. Payal Bansal",
        gender: "Female",
        designation:
            "HoD, IDEA Lab Outreach & Research, Professor, Department of ECE",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/3_Reshma_Kala.jpg",
        name: "Ms. Reshma Kala",
        gender: "Female",
        designation: "Assistant Professor, Co-coordinator PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/4_Dr._Ritam_Dutta.jpg",
        name: "Dr. Ritam Dutta",
        gender: "Male",
        designation: "Professor, Department of IoT",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/5_Aniva_Sharma.JPG",
        name: "Ms. Aniva Sharma",
        gender: "Female",
        designation: "Assistant Professor, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/6_Ashish_Ladda.jpg",
        name: "Mr. Ashish Laddha",
        gender: "Male",
        designation: "Technical Guru, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/7_Lakshman_Singh.jpg",
        name: "Mr. Lakshman Singh Chauhan",
        gender: "Male",
        designation: "Technical Officer, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/8_Sanjeev_Rishi.jpg",
        name: "Mr. Sanjeev Rishi",
        gender: "Male",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/9_Divya_Rostogi.jpg",
        name: "Ms. Divya Rastogi",
        gender: "Female",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
    {
        imageSrc:
            "https://www.piet.poornima.org/img_idealab/10_Sumit_Lunia.jpg",
        name: "Mr. Sumit Lunia",
        gender: "Male",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
];
const columns = [
    { label: "S.No", key: "sno" },
    { label: "Participants", key: "participants" },
    { label: "Venue", key: "venue" },
    { label: "Outcomes", key: "outcome" },
];
const data = [
    {
        sno: 1,
        participants:
            "Team Name - Parksphere: Sudhanshu Tiwari, Kunal Sharma, Megh Shah, Dev Tekwani",
        venue: "Panipat Institute Of Engineering and Technology (National Innovation Challenge), Dec 2022, 1 day",
        outcome: "National Innovation Challenge",
    },
    {
        sno: 2,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "Abes Engineering College (Idea Lab Innovation Challenge), 2 days",
        outcome: "2nd winner",
    },
    {
        sno: 3,
        participants: "Team Name - Error: Kunal Sharma",
        venue: "LNMIIT (LNM HACKS), Jan 2023, 3 days",
        outcome: "3rd position",
    },
    {
        sno: 4,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "VGU (Hackathon), 3 days",
        outcome: "Top 10",
    },
    {
        sno: 5,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "VIT (Project Exhibition), 1 day",
        outcome: "2nd Position",
    },
    {
        sno: 6,
        participants:
            "Team Name - Web3 Wizards: Megh Shah, Mitushi Yadav, Arun Joseph",
        venue: "JIET Jodhpur (Hackathon), Mar 2023",
        outcome: "2nd prize",
    },
    {
        sno: 7,
        participants:
            "Team Name - Bug Squashers: Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "DU (Hackathon), Feb 2023, 2 days",
        outcome: "Top 15",
    },
    {
        sno: 8,
        participants:
            "Team Name - netWork: Rhythm Verma, Kartik Mehta, Sahaj Jain, Mayank Arora",
        venue: "SKIT (Start-up Expo), Apr 2023, 1 day",
        outcome: "Invited to work in their incubation cell",
    },
    {
        sno: 9,
        participants:
            "Team Name - Bug Squashers: Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "Thapar Institute of Engineering and Technology (Hackathon), Mar 2023, 2 days",
        outcome: "Built NFT games",
    },
    {
        sno: 10,
        participants:
            "Team Name - Bit-4-Byte: Hiya Gurbani, Lavina Sevani, Harshit Verma, Jatin Nama",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Top 7 in Software category",
    },
    {
        sno: 11,
        participants:
            "Team Name - The Errors: Kartikey Sharma, Gauri Singhal, Garvit Arora, Arpita Garg",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Top 5 in Hardware category",
    },
    {
        sno: 12,
        participants:
            "Team Name - Error 404: Harshvardhan Sharma, Mahendra Kumawat, Anurag Dadhich",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
    {
        sno: 13,
        participants: "Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
    {
        sno: 14,
        participants:
            "Burhanuddin Bohra, Kinana Bohra, Paawan Sharma, Diksha Kanwar",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
    {
        sno: 15,
        participants:
            "Pranav Agrawal, Lakshay Singh Chouhan, Chaitanya Sharma, Kashish Aggarwal",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome:
            "Learned about the latest technologies and gained practical knowledge",
    },
];

const facilitiesData = [
    {
        title: "CNC Router",
        description:
            "A CNC router is a computer-controlled cutting machine used to cut various materials like wood, metals, and plastics. It operates using CAD/CAM software to convert designs into G-code, guiding the machine's movements. CNC routers are versatile and can produce items such as furniture, signboards, and musical instruments with high precision and efficiency.",
        imageUrl: "/images/mach/1.jpg",
    },
    {
        title: "3D Printer SLA",
        description:
            "Stereolithography (SLA) 3D printers use light to cure liquid resin into hardened plastic, making them ideal for creating detailed prototypes, medical models, and production parts. This technology helps businesses reduce outsourcing costs, accelerate development cycles, and optimize production processes.",
        imageUrl: "/images/mach/2.jpg",
    },
    {
        title: "3D Printer FDM",
        description:
            "Fused Deposition Modeling (FDM) 3D printing involves extruding thermoplastic material layer by layer to create durable parts and prototypes. This method uses a heated nozzle to fuse material in precise patterns, forming strong objects. FDM is widely used for industrial applications, including prototyping and prosthetics.",
        imageUrl: "/images/mach/3.jpg",
    },
    {
        title: "Vinyl Cutter",
        description:
            "A vinyl cutter is a computer-controlled machine that uses a sharp blade to cut shapes and letters from adhesive vinyl for signs, banners, and advertisements. It can also cut specialty papers and thin magnets.",
        imageUrl: "/images/mach/4.jpg",
    },
    {
        title: "Laser Cutter",
        description:
            "Laser cutting uses a high-power laser to vaporize materials, resulting in precise cuts, commonly used in industrial manufacturing, small businesses, and hobbyist projects. It works by directing a focused laser beam through CNC-controlled optics.",
        imageUrl: "/images/mach/5.jpg",
    },
    {
        title: "Reflow Oven",
        description:
            "A reflow oven is used for soldering surface mount components to PCBs. It heats PCBs using infrared, convection, or a combination of both methods to ensure precise temperature control.",
        imageUrl: "/images/mach/6.jpg",
    },
    {
        title: "PCB Drilling",
        description:
            "PCB drilling creates holes and cavities in a circuit board for mounting components. The process involves mechanical drilling and chemical etching to achieve precise hole sizes.",
        imageUrl: "/images/mach/7.jpg",
    },
    {
        title: "3D Scanner",
        description:
            "3D scanning captures the shape and appearance of real-world objects to create digital 3D models. Technologies like LIDAR, structured light, and computed tomography are used.",
        imageUrl: "/images/mach/8.jpg",
    },
    {
        title: "PCB Milling",
        description:
            "A PCB milling system creates prototype circuit boards by removing copper from a sheet. This non-chemical process is ideal for in-house fabrication, reducing PCB turnaround time.",
        imageUrl: "/images/mach/9.jpg",
    },
    {
        title: "Scroll Saw",
        description:
            "A scroll saw cuts intricate shapes in wood, metal, and other materials using a thin, vibrating blade. It's useful for making detailed items like jewelry and ornaments.",
        imageUrl: "/images/mach/10.jpg",
    },
    {
        title: "Disc Sander",
        description:
            "A disc sander uses a rotating sanding disc to smooth and shape materials like wood, metal, and plastic. It's versatile for tasks like shaping, finishing, and polishing surfaces.",
        imageUrl: "/images/mach/11.jpg",
    },
    {
        title: "Multi-purpose Lathe/Drill/Mill Machine",
        description:
            "A multi-purpose lathe/drill/mill machine is versatile for turning, drilling, milling, and engraving various materials. It features a lathe bed, drill chuck, milling head, and engraving tool.",
        imageUrl: "/images/mach/11.jpg",
    },
    {
        title: "Cone Pulley",
        description:
            "A cone pulley/belt-driven heavy-duty machine uses a cone pulley and belt to transmit power, making it ideal for heavy-duty tasks like turning metal and wood.",
        imageUrl: "/images/mach/12.jpg",
    },
    {
        title: "Bench Grinder",
        description:
            "A bench grinder uses two abrasive wheels to grind, sharpen, polish, and clean metal and other materials. It's versatile for tasks like sharpening tools and shaping metal.",
        imageUrl: "/images/mach/13jpg",
    },
    {
        title: "Pratham 5.0",
        description:
            "Pratham 5.0 is an industrial 3D printer with a 500 x 500 x 500 mm build volume, capable of printing large and complex objects. It features fast print speeds, auto bed leveling, and filament detection.",
        imageUrl: "/images/mach/14.jpg",
    },
    {
        title: "SMD Hot Air Gun",
        description:
            "An SMD hot air gun is designed for precise SMD soldering and desoldering, offering adjustable temperature settings and various nozzles for controlled heating.",
        imageUrl: "/images/mach/15.jpg",
    },
    {
        title: "Analog Soldering Station",
        description:
            "Analog soldering stations use a mechanical thermostat for temperature control, with adjustments made via a knob. They are more affordable and user-friendly compared to digital models.",
        imageUrl: "/images/mach/16.jpg",
    },
    {
        title: "Industrial Vacuum Cleaner",
        description:
            "Industrial vacuum cleaners are robust machines designed for heavy-duty cleaning in factories and warehouses. They feature powerful motors and HEPA filters for dust control.",
        imageUrl: "/images/mach/17.jpg",
    },
    {
        title: "Oscilloscope 2 Analogue",
        description:
            "Analog oscilloscopes display electrical signal waveforms using a cathode ray tube (CRT). They measure signal properties like amplitude and frequency.",
        imageUrl: "/images/mach/18.jpg",
    },
    {
        title: "Oscilloscope Model EL 801",
        description:
            "The EL 801 is a general-purpose oscilloscope with 1 MHz bandwidth and various controls for signal analysis. Known for its reliability and versatility.",
        imageUrl: "/images/mach/19.jpg",
    },
    {
        title: "Laser Cutter Machine",
        description:
            "A laser cutter is a precision machine tool that uses a high-powered laser beam to cut, engrave, and shape various materials. It accurately cuts complex designs and patterns with minimal waste. The laser cutter's advanced technology ensures precise control, high speed, and clean finishes.",
        imageUrl: "/images/mach/20.jpg",
    },
    {
        title: "SMT Pick and Place",
        description:
            "An SMT (Surface-Mount Technology) pick-and-place machine is an automated system used in electronics manufacturing to place surface-mount components onto printed circuit boards (PCBs). It uses precision nozzles and cameras to accurately pick components from feeders and place them on the board.",
        imageUrl: "/images/mach/22.jpeg",
    },
    {
        title: "Robotic Arm",
        description:
            "A robotic arm is a programmable mechanical device that mimics the movement of a human arm. It typically consists of joints, links, and end-effectors, allowing it to perform tasks such as gripping, lifting, and manipulating objects. Robotic arms are widely used in manufacturing, automation, and medical applications.",
        imageUrl: "/images/mach/23.jpeg",
    },
];

const IdealLab = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="AICTE IDEA LAB"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "AICTE IDEA LAB",
                        isCurrent: true,
                    },
                ]}
            />

            {/* Enhanced About IDEA Lab Section */}
            <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            About{" "}
                            <span className="text-secondary">IDEA Lab</span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                            Innovation • Development • Entrepreneurship •
                            Advancement
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-lightbulb text-white text-xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-primary">
                                        Our Mission
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The All India Council for Technical
                                    Education (AICTE) has launched the IDEA
                                    (Innovation, Development, Entrepreneurship
                                    and Advancement) Lab to promote innovation
                                    and entrepreneurship among students in
                                    technical education institutions.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-secondary">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-rocket text-white text-xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-secondary">
                                        Our Purpose
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The IDEA Lab is designed to provide a
                                    platform for students to conceptualize and
                                    develop their ideas into sustainable
                                    projects and startups, fostering innovation
                                    and entrepreneurial thinking.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-primary/10 rounded-lg">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        500+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Students Trained
                                    </div>
                                </div>
                                <div className="text-center p-6 bg-secondary/10 rounded-lg">
                                    <div className="text-3xl font-bold text-secondary mb-2">
                                        75+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Workshops Conducted
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image Slider */}
                        <div className="relative">
                            <div className="bg-white rounded-xl shadow-xl p-4 border">
                                <SimpleImageSlider
                                    images={images}
                                    altTexts={altTexts}
                                    autoPlayInterval={5000}
                                    aspectRatio="16/9"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-cogs text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
                <InfoCard
                    title="Execution"
                    iconClass="fas fa-eye"
                    content={visionContent}
                />
            </div>
            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-6 text-center">
                    Faculties and Staff
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <FacultySwiper profiles={facultyData} />
            </section>
            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    AICTE IDEA Lab Committee
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <LazyImage
                    src={
                        "https://www.piet.poornima.org/img_idealab/Idealab_Committee.jpeg"
                    }
                    alt={"AICTE IDEA Lab Committee"}
                    className="rounded-xl shadow-xl w-full h-auto z-10 relative border border-primary"
                />
            </section>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Achievements
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />
            </div>

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            State-of-the-Art Facilities
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Our IDEA Lab is equipped with cutting-edge
                            technology and advanced manufacturing equipment to
                            support innovation and product development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilitiesData.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <LazyImage
                                        src={facility.imageUrl}
                                        alt={facility.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                        {facility.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                                        {facility.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                                            Advanced Equipment
                                        </span>
                                        <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform duration-300"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Statistics */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-primary mb-2">
                                23
                            </div>
                            <div className="text-sm text-gray-600">
                                Advanced Machines
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-secondary mb-2">
                                75+
                            </div>
                            <div className="text-sm text-gray-600">
                                Training Programs
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-primary mb-2">
                                65+
                            </div>
                            <div className="text-sm text-gray-600">
                                Published Patents
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl font-bold text-secondary mb-2">
                                40+
                            </div>
                            <div className="text-sm text-gray-600">
                                Student Projects
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seminars/Workshop/FDP Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Seminars, Workshops & FDP
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Comprehensive training programs and educational
                            events conducted at our IDEA Lab
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        S. No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Name of Event
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Start Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        End Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Participants
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        sno: "01",
                                        name: "Robotics in Indian Industry- Future Trends",
                                        start: "5/27/2022",
                                        end: "5/27/2022",
                                        participants: "18",
                                    },
                                    {
                                        sno: "02",
                                        name: "School Visit",
                                        start: "6/8/2022",
                                        end: "6/8/2022",
                                        participants: "23",
                                    },
                                    {
                                        sno: "03",
                                        name: "Summer Internship Program on IoT based Product Development, using Advanced Digital Manufacturing Equipment, Tools and Resources",
                                        start: "7/18/2022",
                                        end: "7/18/2022",
                                        participants: "146",
                                    },
                                    {
                                        sno: "04",
                                        name: 'National level project exhibition "UDHBHAV" 2022',
                                        start: "8/22/2022",
                                        end: "8/22/2022",
                                        participants: "610",
                                    },
                                    {
                                        sno: "05",
                                        name: "INTER COLLAGE STUDENT AWARENESS PROGRAM",
                                        start: "9/9/2022",
                                        end: "9/9/2022",
                                        participants: "17",
                                    },
                                    // Add more rows as needed - showing first 5 for brevity
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.sno}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.start}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.end}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.participants}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Patents Section */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Patents & Intellectual Property
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Our research innovations and intellectual property
                            achievements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Published Patents */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <i className="fas fa-file-alt text-secondary mr-3"></i>
                                Published Patents
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-primary">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                S. No
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                Application No.
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                Applicant
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                Title
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            {
                                                sno: "01",
                                                appNo: "202241025599",
                                                applicant: "Dr. Rakhi Mutha",
                                                title: "A DATA PROCESSING DEVICE FOR ELECTRIC VEHICLE BASED ON IOT",
                                            },
                                            {
                                                sno: "02",
                                                appNo: "202211005093",
                                                applicant:
                                                    "Dr. Priyanka Kaushik",
                                                title: "Method for cursor mention control calibration and object selection using Deep Learning",
                                            },
                                            // Add more as needed
                                        ].map((item, index) => (
                                            <tr
                                                key={index}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-gray-50"
                                                        : "bg-white"
                                                }
                                            >
                                                <td className="px-4 py-2 text-sm font-medium text-gray-900">
                                                    {item.sno}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-gray-500">
                                                    {item.appNo}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-gray-900">
                                                    {item.applicant}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-gray-900">
                                                    {item.title}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Design Patents */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <i className="fas fa-award text-secondary mr-3"></i>
                                Design Patents (Granted)
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                S. No
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                Application No.
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                Applicant
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">
                                                Title
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            {
                                                sno: "01",
                                                appNo: "362610-001",
                                                applicant: "Udit Mamodiya",
                                                title: "A Handheld Medical Test Device",
                                            },
                                            {
                                                sno: "02",
                                                appNo: "377668-001",
                                                applicant: "Udit Mamodiya",
                                                title: "ARTIFICIAL INTELLIGENCE BASED ALARM CLOCK",
                                            },
                                            // Add more as needed
                                        ].map((item, index) => (
                                            <tr
                                                key={index}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-gray-50"
                                                        : "bg-white"
                                                }
                                            >
                                                <td className="px-4 py-2 text-sm font-medium text-gray-900">
                                                    {item.sno}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-gray-500">
                                                    {item.appNo}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-gray-900">
                                                    {item.applicant}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-gray-900">
                                                    {item.title}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Projects Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Student Projects
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Innovative projects developed by our students using
                            IDEA Lab facilities
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gradient-to-r from-primary to-secondary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        S. No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Project Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Student Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Faculty Coordinator
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Facility Used
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        sno: "1",
                                        title: "Laser Cut Wall Clock",
                                        student: "Rahul Jain",
                                        coordinator: "Nitin Mukesh Mathur",
                                        facility:
                                            "LASER cutter, various hardware and software support",
                                    },
                                    {
                                        sno: "2",
                                        title: "3D printer lithophane technology",
                                        student: "Rachit Agarwal",
                                        coordinator: "Udit Mamodiya",
                                        facility:
                                            "FDM printer and other hardware and software support",
                                    },
                                    {
                                        sno: "3",
                                        title: "Reverse engineering",
                                        student: "Parv Sharma",
                                        coordinator: "Udit Mamodiya",
                                        facility:
                                            "3D scanning, 3D printer, and other hardware and software support",
                                    },
                                    {
                                        sno: "4",
                                        title: "3D printed mobile stand",
                                        student: "Vaidika Duggar",
                                        coordinator: "Nitin Mukesh Mathur",
                                        facility:
                                            "3D printer and raw material support",
                                    },
                                    {
                                        sno: "5",
                                        title: "Stone paper scissor machine",
                                        student: "Yuvraj Dagur",
                                        coordinator: "Udit Mamodiya",
                                        facility:
                                            "3D printer for printing elements, Laser cutter for sheet parts",
                                    },
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.sno}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-primary">
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.student}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {item.coordinator}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {item.facility}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Funding Section */}
            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Funding & Grants
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Major funding received for innovation and
                            development activities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                event: "Innovation, Design, and Entrepreneurship (IDE) Bootcamp for Students Innovations and Teachers of Schools",
                                date: "9th - 10th April 2024",
                                agency: "AICTE",
                                amount: "₹12,69,000",
                            },
                            {
                                event: "SMART INDIA HACKATHON (SOFTWARE EDITION) GRAND FINALE -2023",
                                date: "19th - 20th December 2023",
                                agency: "MoE Innovation Cell",
                                amount: "₹11,05,000",
                            },
                            {
                                event: "AU-Small Finance Bank Endowment Fund",
                                date: "Ongoing",
                                agency: "AU-Small Finance Bank",
                                amount: "₹7,00,000",
                            },
                        ].map((fund, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                        <i className="fas fa-hand-holding-dollar text-white text-xl"></i>
                                    </div>
                                    <div className="text-2xl font-bold text-secondary">
                                        {fund.amount}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                    {fund.event}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    <i className="fas fa-calendar mr-2"></i>
                                    {fund.date}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <i className="fas fa-university mr-2"></i>
                                    Funded by: {fund.agency}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOUs Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Memorandum of Understanding (MOUs)
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Strategic partnerships with industry leaders and
                            organizations
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gradient-to-r from-secondary to-primary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        S. No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Company Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        Start Year
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                        MOU Document
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    {
                                        sno: "1",
                                        company:
                                            "Exeliq Tech Solutions Pvt. Ltd.",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1fUnsn8K1pO5i2rhDfx09E6rcLVT2_BMr/view?usp=sharing",
                                    },
                                    {
                                        sno: "2",
                                        company: "Elektrolites",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1YnD388LO3raAQF9psNLqU26UDOxotHK7/view?usp=sharing",
                                    },
                                    {
                                        sno: "3",
                                        company: "VMK Digitals",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1edH0uky2U1vkvvSknADWVnO2iQUjKkun/view?usp=sharing",
                                    },
                                    {
                                        sno: "4",
                                        company: "Club First Robotics",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1FZ7PXYlNRkcK8KPGs0abWsptOhB06kCh/view?usp=sharing",
                                    },
                                    {
                                        sno: "5",
                                        company: "Johns Automation Systems",
                                        year: "2021",
                                        link: "https://drive.google.com/file/d/1w1McA5XxMOFdEx20x_33h2H22PzLF1ui/view?usp=sharing",
                                    },
                                    {
                                        sno: "6",
                                        company: "KARYTECK",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1wDe15RQgW7H5vQak5vb1rC5Ga3OjcGZ8/view?usp=sharing",
                                    },
                                    {
                                        sno: "7",
                                        company: "ROBOFI",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1fe0wNwIzeniCeUsWAFOvQamCI3rJdI1w/view?usp=sharing",
                                    },
                                    {
                                        sno: "8",
                                        company: "SINCGRID LLP",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1235SU4bo_WUt2PvM1xDLbJGrwttkWPmM/view?usp=sharing",
                                    },
                                    {
                                        sno: "9",
                                        company: "Hack2Skills",
                                        year: "2022",
                                        link: "https://drive.google.com/file/d/1E4mzGIdaxHyrO9CpM8-1zhN2gOVFDQtS/view?usp=sharing",
                                    },
                                    {
                                        sno: "10",
                                        company:
                                            "MACHIN AUTOMATION Private Limited",
                                        year: "2023",
                                        link: "https://drive.google.com/file/d/1Rs_DdFJhYjctN8s90EMRYzGwmaXbZ0tM/view?usp=sharing",
                                    },
                                    {
                                        sno: "11",
                                        company: "Technos COE",
                                        year: "2024",
                                        link: "https://drive.google.com/file/d/1A1suuwimCqzzTqIh4MuGVZqmgMzyEKpK/view?usp=sharing",
                                    },
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {item.sno}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-primary">
                                            {item.company}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {item.year}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-secondary hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"
                                            >
                                                <i className="fas fa-download mr-2"></i>
                                                View MOU
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    );
};

export default IdealLab;
