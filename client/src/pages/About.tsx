import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import MissionVision from "@/components/MissionVision";
import DirectorMessage from "@/components/DirectorMessage";
import FacilitiesSection from "@/components/FacilitiesSection";
import WhyChoosePIET from "@/components/WhyChoosePIET";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import {
    Award,
    Users,
    BookOpen,
    TrendingUp,
    Target,
    Eye,
    Heart,
    Lightbulb,
} from "lucide-react";

type StatProps = {
    number: string;
    label: string;
    icon: React.ReactNode;
};

const Stat = ({ number, label, icon }: StatProps) => (
    <div className="group relative bg-white rounded-2xl shadow-lg border border-neutral-200 hover:shadow-2xl hover:border-primary transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <span className="text-primary font-bold text-4xl mb-2 group-hover:text-secondary transition-colors duration-300">
                {number}
            </span>
            <span className="text-neutral-700 text-center font-medium group-hover:text-neutral-900 transition-colors duration-300">
                {label}
            </span>
        </div>
    </div>
);

const FeatureCard = ({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) => (
    <div className="group bg-white rounded-xl p-6 shadow-md border border-neutral-200 hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const About = () => {
    const stats: StatProps[] = [
        {
            number: "15+",
            label: "Years of Excellence",
            icon: <Award className="h-6 w-6" />,
        },
        {
            number: "90+",
            label: "Faculty Members",
            icon: <Users className="h-6 w-6" />,
        },
        {
            number: "1800+",
            label: "Students",
            icon: <BookOpen className="h-6 w-6" />,
        },
        {
            number: "75%",
            label: "Placement Rate",
            icon: <TrendingUp className="h-6 w-6" />,
        },
    ];

    const highlights = [
        {
            icon: <Target className="h-5 w-5" />,
            title: "NEP 2020 Aligned",
            description:
                "First institute in India to offer B.Tech in Computer Engineering in Hindi, supporting accessible education.",
        },
        {
            icon: <Lightbulb className="h-5 w-5" />,
            title: "Innovation Focus",
            description:
                "Cutting-edge programs in AI, Data Science, IoT, and core engineering fields with flexible learning paths.",
        },
        {
            icon: <Award className="h-5 w-5" />,
            title: "Quality Assurance",
            description:
                "IQAC-driven academic excellence through audits, reviews, and Outcome Based Education practices.",
        },
        {
            icon: <Heart className="h-5 w-5" />,
            title: "Holistic Development",
            description:
                "UHV-based programs focusing on ethics, well-being, and responsibility for complete personality development.",
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-50">
            <AccessibilityFeatures />
            <Header />

            {/* Enhanced Hero Section with Breadcrumb */}
            <div className="relative mb-12 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://res.cloudinary.com/ddygzamv4/image/upload/v1747648404/gp8krjucihqxre0zs3jl.jpg"
                        alt="About Banner"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 lg:px-0 py-20">
                    <div className="max-w-2xl">
                        <Breadcrumb className="mb-6">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href="/"
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-white/60" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-white font-medium">
                                        About Us
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            About <span className="text-secondary">PIET</span>
                        </h1>
                        <p className="text-white/90 text-xl leading-relaxed max-w-xl">
                            Discover the legacy, innovation, and excellence that
                            makes Poornima Institute a premier center of
                            engineering education.
                        </p>
                    </div>
                </div>
            </div>

            {/* Enhanced Statistics Section */}
            <div className="container mx-auto px-4 lg:px-0 -mt-20 relative z-20 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Stat key={index} {...stat} />
                    ))}
                </div>
            </div>

            {/* Enhanced College Overview Section */}
            <div className="container mx-auto px-4 lg:px-0 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                                College{" "}
                                <span className="text-secondary">Overview</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-8"></div>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                Leading the future of engineering education with
                                innovation, excellence, and inclusivity.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                                <p className="text-neutral-700 leading-relaxed">
                                    PIET is the{" "}
                                    <strong className="text-primary">
                                        first institute in India
                                    </strong>{" "}
                                    to offer B.Tech in Computer Engineering in
                                    Hindi, supporting NEP 2020 and promoting
                                    accessible, language-inclusive education.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary">
                                <p className="text-neutral-700 leading-relaxed">
                                    The institute offers NEP-aligned programs in{" "}
                                    <strong className="text-secondary">
                                        AI, Data Science, IoT, and core
                                        engineering
                                    </strong>{" "}
                                    fields with flexible learning paths like
                                    certificates, diplomas, and honors.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                                <p className="text-neutral-700 leading-relaxed">
                                    Academic quality is driven by the{" "}
                                    <strong className="text-primary">
                                        Internal Quality Assurance Cell (IQAC)
                                    </strong>{" "}
                                    through audits, reviews, and Outcome Based
                                    Education (OBE) practices.
                                </p>
                            </div>

                            <a
                                href="https://drive.google.com/file/d/1xqXnU3LVu667Uwn6HO4qDelFEaNn-yB_/view?usp=sharing"
                                target="_blank"
                                className="btn-primary rounded-lg shadow-md hover-lift"
                            >
                                Know More
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="https://res.cloudinary.com/ddygzamv4/image/upload/v1747648404/gp8krjucihqxre0zs3jl.jpg"
                                alt="NAAC Accreditation"
                                className="rounded-2xl shadow-2xl w-full h-auto"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-neutral-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary">
                                            Grade 'A'
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            NAAC Accredited
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Decorations */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Key Highlights Section */}
            <div className="bg-gradient-to-br from-neutral-100 to-white py-20 mb-20">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">
                            Why Choose{" "}
                            <span className="text-secondary">PIET</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Experience excellence through our unique approach to
                            education and development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {highlights.map((highlight, index) => (
                            <FeatureCard key={index} {...highlight} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose PIET Section */}
            <WhyChoosePIET />

            {/* Enhanced Vision and Mission Section */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 mb-20">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">
                            Vision &{" "}
                            <span className="text-secondary">Mission</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Our guiding principles that shape the future of
                            engineering education
                        </p>
                    </div>
                    <MissionVision />
                </div>
            </div>

            {/* Director Message Section */}
            <div className="container mx-auto px-4 lg:px-0 mb-20">
                <DirectorMessage />
            </div>

            {/* Facilities Section */}
            <FacilitiesSection />

            {/* Call to Action */}
            <Cta />

            <Footer />
        </div>
    );
};

export default About;
