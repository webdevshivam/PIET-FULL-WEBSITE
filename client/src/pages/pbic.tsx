import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import LazyImage from "@/components/LazyImage";
import InfoCard from "@/components/InfoCard";
import Checklist from "@/components/Checklist";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
const objectivePoints = [
    "To create awareness on entrepreneurship among the students.",
    "To inculcate entrepreneurial spirit and culture among the Science and Engineering  graduates",
    "To conduct programs in Entrepreneurship  enabling  skills.",
    "To promote innovation and entrepreneurship .",
];
const elegibilty = [
    "Students & Alumni of Poornima Group",
    "TPoornima Group s R&D partners (sponsors of R&D and consultancy projects)",
    "Poornima Groups partner universities(having R & D collaborations in place) and government agencies associated with Poornima Groups research and innovations.",
    "Permanent staff of Poornima Group",
    "PBIC alumni on selective basis.",
    "Applicants supported under any program managed by PBIC.",
];
const Physical = [
    "Fully furnished Office Space",
    "Shared resources: Meeting rooms, Conference rooms.",
    "Office productivity equipment: Fax, Photocopier, Printer, Scanner, Projector",
    "Lab: PBIC Lab with Equipment and software tools, Facilitation for access to PIET Labs",
];
const Innovation = [
    "PR Registration and examination for the start-ups is also facilitated by PIET-PBIC at no cost.",
];
const Utility = ["PElectricity", "Internet"];

const reports = [
    {
        year: "2023-24",
        title: "PBIC Report 2023-24",
        pdfUrl: "https://drive.google.com/file/d/1WgPtWfEbI33-Fvp1R3mzdyrl1CCR0fYu/view?usp=sharing",
    },
    {
        year: "2022-23",
        title: "PBIC Annual Report 2022-23",
        pdfUrl: "https://drive.google.com/file/d/1IASXV3tMBzs2kFLRQNO6TOvpyAi_inOH/view?usp=sharing",
    },
    {
        year: "2021-22",
        title: "PBIC Annual Report 2021-22",
        pdfUrl: "https://drive.google.com/file/d/1tOWCmLM4dOXMKbBaTYIHhylJavtFZVPX/view?usp=sharing",
    },
    {
        year: "2020-21",
        title: "PBIC Annual Report 2020-21",
        pdfUrl: "https://drive.google.com/file/d/1Q9MYxtON8G0eIRWj5Hv7ZRibBgu4hmK7/view?usp=sharing",
    },
];

import ImageGallery from "@/components/ImageGallery";
import FacultySwiper from "@/components/FacultySwiper";
import DynamicTable from "@/components/DynamicTable ";
import ReportTimeline from "@/components/ReportTimeline";

const facultyData = [
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. Ajay Maurya	",
        gender: "Male",
        designation: "PBIC Coordinator",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Mr. Varun Chahar	",
        gender: "Male",
        designation: "PBIC Student Coordinator",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Mr. Shubham Pratap Singh",
        gender: "Male",
        designation: "PBIC Student Coordinator",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "	Dr. Balwan",
        gender: "Male",
        designation: "PBIC, Campus Coordinator, PIET",
    },
    {
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. Mukesh Chandra",
        gender: "Male",
        designation: "PBIC Campus Coordinator, PIET",
    },
];

const columns = [
    { label: "S.No", key: "sno" },
    { label: "Startup Name", key: "startupName" },
    { label: "Student Name", key: "studentName" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Year", key: "year" },
];

const data = [
    {
        sno: 1,
        startupName: "Theta Electronics",
        studentName: "Ajay Saini",
        phoneNumber: "9314226135",
        year: 2018,
    },
    {
        sno: 2,
        startupName: "RashanBag",
        studentName: "Shubham Khandelwal",
        phoneNumber: "9772110285",
        year: 2018,
    },
    {
        sno: 3,
        startupName: "Writer's Voice Society",
        studentName: "Ram Kinkar Tripathi",
        phoneNumber: "9649676563",
        year: 2018,
    },
    {
        sno: 4,
        startupName: "Tinkers Town",
        studentName: "Ravi Suthar",
        phoneNumber: "7425967157",
        year: 2018,
    },
    {
        sno: 5,
        startupName: "NamasteSir.com",
        studentName: "Nitin Jindal",
        phoneNumber: "8952834418",
        year: 2018,
    },
    {
        sno: 6,
        startupName: "REGOOLUR PRODUCT AND TECHNOLOGIES PRIVATE LIMITED",
        studentName: "Tanya Kumawat",
        phoneNumber: "7742481873",
        year: 2018,
    },
    {
        sno: 7,
        startupName: "M/s. BREADNBUTTER TECH",
        studentName: "Saksham Saxena",
        phoneNumber: "7230093372",
        year: 2019,
    },
    {
        sno: 8,
        startupName: "READINGBOX.IN",
        studentName: "Amit Jangid",
        phoneNumber: "8440902650",
        year: 2019,
    },
    {
        sno: 9,
        startupName: "TECHNOBUILD PRIVATE LIMITED",
        studentName: "Abhishek Parashar",
        phoneNumber: "9950890635",
        year: 2019,
    },
    {
        sno: 10,
        startupName: "Auxicuix Consultancies LLP",
        studentName: "Abhinav Tiwari",
        phoneNumber: "7976178647",
        year: 2020,
    },
    {
        sno: 11,
        startupName: "olxtech (Bech Do)",
        studentName: "Yash Saxena",
        phoneNumber: "8890170172",
        year: 2020,
    },
    {
        sno: 12,
        startupName: "Digital Darzi",
        studentName: "Himanshu Hingorani",
        phoneNumber: "7014648668",
        year: 2021,
    },
    {
        sno: 13,
        startupName: "Book of Youth",
        studentName: "Priyanshi Goyal",
        phoneNumber: "9461233742",
        year: 2021,
    },
    {
        sno: 14,
        startupName: "Local Eyes",
        studentName: "Yuvraj Dagur",
        phoneNumber: "8949090660",
        year: 2021,
    },
    {
        sno: 15,
        startupName: "The Engineers Cafe",
        studentName: "Amit Jangid",
        phoneNumber: "8440902650",
        year: 2021,
    },
    {
        sno: 16,
        startupName: "PIE Star Interactive Studio",
        studentName: "Vikash Sharma",
        phoneNumber: "9214993678",
        year: 2021,
    },
    {
        sno: 17,
        startupName: "Kanha Ji Handicrafts",
        studentName: "Gaurav Prajapat",
        phoneNumber: "7427022709",
        year: 2022,
    },
    {
        sno: 18,
        startupName: "Rent N Earn",
        studentName: "Ankit Khemani",
        phoneNumber: "9057599584",
        year: 2022,
    },
    {
        sno: 19,
        startupName: "Aerophantom",
        studentName: "Rahul Sharma",
        phoneNumber: "9509206534",
        year: 2022,
    },
    {
        sno: 20,
        startupName: "CAFTRO",
        studentName: "Sourav Sharma",
        phoneNumber: "8239753202",
        year: 2023,
    },
    {
        sno: 21,
        startupName: "REP-X",
        studentName: "NITESH SHARMA",
        phoneNumber: "8690643265",
        year: 2023,
    },
    {
        sno: 22,
        startupName: "MOOONTECH",
        studentName: "Jeki Panchal",
        phoneNumber: "8209023368",
        year: 2023,
    },
    {
        sno: 23,
        startupName: "Devils Honey",
        studentName: "Abhinav Tiwari",
        phoneNumber: "7976178647",
        year: 2023,
    },
    {
        sno: 24,
        startupName: "Bitesfly",
        studentName: "Bhavya Agarwal",
        phoneNumber: "8290999582",
        year: 2023,
    },
    {
        sno: 25,
        startupName: "V-gthr",
        studentName: "Dhruv Sharma",
        phoneNumber: "9079907146",
        year: 2023,
    },
    {
        sno: 26,
        startupName: "Staqia",
        studentName: "Lakshya Jain",
        phoneNumber: "9521688043",
        year: 2023,
    },
    {
        sno: 27,
        startupName: "Comacks",
        studentName: "Arpit Singh",
        phoneNumber: "7303908344",
        year: 2023,
    },
    {
        sno: 28,
        startupName: "Teknokrshak",
        studentName: "Rajendra Choudhary",
        phoneNumber: "6305255383",
        year: 2023,
    },
    {
        sno: 29,
        startupName: "WEBTECH.IT",
        studentName: "Saurav Singh",
        phoneNumber: "8094636030",
        year: 2024,
    },
    {
        sno: 30,
        startupName: "MKG Servicemen",
        studentName: "Dhruv Gupta",
        phoneNumber: "8619292633",
        year: 2024,
    },
    {
        sno: 31,
        startupName: "Blinxher",
        studentName: "Sneha Meghnani",
        phoneNumber: "9772229206",
        year: 2024,
    },
    {
        sno: 32,
        startupName: "Borrow-Hub",
        studentName: "Anurag Dadhich",
        phoneNumber: "8000384690",
        year: 2024,
    },
    {
        sno: 33,
        startupName: "PG-Pyaara Ghar",
        studentName: "Varun Chahar",
        phoneNumber: "8949738298",
        year: 2024,
    },
    {
        sno: 34,
        startupName: "Diksha Education",
        studentName: "KOUSHAL ACHARYA",
        phoneNumber: "9549423454",
        year: 2024,
    },
    {
        sno: 35,
        startupName: "NexTech",
        studentName: "Ansh Kumawat",
        phoneNumber: "9829093593",
        year: 2024,
    },
    {
        sno: 36,
        startupName: "Memory",
        studentName: "Aashika Singhal",
        phoneNumber: "9351065897",
        year: 2024,
    },
    {
        sno: 37,
        startupName: "Scribblesslott",
        studentName: "Ayushi Bhardwaj",
        phoneNumber: "6375869121",
        year: 2024,
    },
    {
        sno: 38,
        startupName: "Expoliv",
        studentName: "Kartikey Sharma",
        phoneNumber: "7727873273",
        year: 2024,
    },
    {
        sno: 39,
        startupName: "Empire Edge Marketing",
        studentName: "Aakash Singh",
        phoneNumber: "6378318162",
        year: 2025,
    },
    {
        sno: 40,
        startupName: "Pick Your Price",
        studentName: "Shubham",
        phoneNumber: "7023109077",
        year: 2025,
    },
    {
        sno: 41,
        startupName: "Urban Loft",
        studentName: "Jayansh Jaiminee",
        phoneNumber: "6367308482",
        year: 2025,
    },
    {
        sno: 42,
        startupName: "Graphic Moron",
        studentName: "Sahaj Jain",
        phoneNumber: "7340624097",
        year: 2025,
    },
    {
        sno: 43,
        startupName: "CollabClan",
        studentName: "ASHISH KUMAR",
        phoneNumber: "9608449442",
        year: 2025,
    },
    {
        sno: 44,
        startupName: "WELKIN MEDIA & ENTERTAINMENT",
        studentName: "MANAS JOSHI",
        phoneNumber: "9079774988",
        year: 2025,
    },
    {
        sno: 45,
        startupName: "NOVA",
        studentName: "EKANSH SHARMA",
        phoneNumber: "9352605981",
        year: 2025,
    },
    {
        sno: 46,
        startupName: "3RE-Tech",
        studentName: "Sujal Tarafdar",
        phoneNumber: "8306215860",
        year: 2025,
    },
    {
        sno: 47,
        startupName: "Zapserve",
        studentName: "Akshat Varshney",
        phoneNumber: "7014688024",
        year: 2025,
    },
    {
        sno: 48,
        startupName: "Nivi Inc",
        studentName: "Vivek Kumar",
        phoneNumber: "7297880860",
        year: 2025,
    },
];

const pbic = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Poornima Business Incubation Centre"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Poornima Business Incubation Centre",
                        isCurrent: true,
                    },
                ]}
            />
            <div className="container mx-auto py-10 px-4">
                <LazyImage
                    src="/images/pbic/pbic.jpg"
                    alt={"Poornima Business Incubation Centre"}
                    className="w-full border h-auto border-primary"
                />
                <p className="my-3">
                    Poornima Business Incubation Centre (PBIC) is the venture
                    arm of Poornima Institute of Engineering & Technology (PIET)
                    nurtures and fosters incubation of startups. It is an
                    incubation centre for startups whose objectives are to
                    cultivate and promote entrepreneurism among talented youth,
                    students and experienced alike. Anyone with an idea and
                    unflinching determination to give it a shape is an ideal
                    candidate to associate with PBIC. Poornima Business
                    Incubation Centre (PBIC) is set up to promote innovation and
                    entrepreneurship by converting and translating technology
                    ideas and innovation in various disciplines of science and
                    engineering into products, processes and services for
                    commercial exploitation and for the benefit of society. PBIC
                    offers incubation facilities and services to prospective
                    entrepreneurs to their innovative ideas into commercially
                    viable products. PBIC provides certain facilities like
                    physical infrastructure and support systems necessary for
                    business incubation activities, Services such as training or
                    High- speed Internet access, links to higher education
                    resources, accounting and financial management etc. It
                    facilitates networking with professional resources, which
                    include mentors, experts, consultants and advisors for the
                    incubates. PBIC also conducts events like entrepreneurial
                    talk series, workshops, open pitches and seminars to offer a
                    good interface and visibility in the region. Poornima
                    Institute of Engineering & Technology has been supporting
                    the new budding Entrepreneurs since 2014 through a club
                    which was known as E-cell and which is now working in
                    coordination with PBIC.
                </p>
            </div>

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objective"
                    iconClass="fas fa-eye"
                    content={<Checklist items={objectivePoints} />}
                />

                <InfoCard
                    title="Eligibility"
                    iconClass="fas fa-eye"
                    content={<Checklist items={elegibilty} />}
                />
            </div>
            <div className="bg-blue-50 border border-primary p-10">
                <div className="container mx-auto border-primary y">
                    <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                        Structure Of PBIC
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <FacultySwiper profiles={facultyData} />
                </div>
            </div>

            <div className="container mt-10 mx-auto  border-primary">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Details Of Facilities{" "}
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <LazyImage
                    src="/images/pbic/pbic1.jpg"
                    alt={"Poornima Business Incubation Centre"}
                    className="w-full border h-auto border-primary rounded-sm shadow-sm"
                />
            </div>
            <div className="my-14 p-3 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                            <i className="fas fa-arrow-right text-secondary"></i>
                            Physical infrastructure:
                        </h2>
                        <Checklist items={Physical} />
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                            <i className="fas fa-arrow-right text-secondary"></i>
                            Innovation Support
                        </h2>
                        <Checklist items={Innovation} />
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
                            <i className="fas fa-arrow-right text-secondary"></i>
                            Utility
                        </h2>
                        <Checklist items={Utility} />
                    </div>
                </div>
            </div>
            <div className="bg-red-50 border border-red p-10">
                <div className="container mt-10 mx-auto">
                    <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                        List of Startups Registered under PBIC
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <DynamicTable columns={columns} data={data} />
                </div>
            </div>

            <div className="text-center my-10container mx-auto px-4 lg:px-0 relative z-10 my-10 flex items-center justify-center flex-col">
                <h2 className="text-3xl  font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 mb-4 pb-2  inline-block">
                    PBIC Annual Report
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <div className="px-4 py-8">
                    <ReportTimeline title="" data={reports} />
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default pbic;
