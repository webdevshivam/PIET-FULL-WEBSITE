import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import LazyImage from "@/components/LazyImage";

const QSGaugePage = () => {
    const featuredImage = {
        src: "/images/qs/1.png",
        alt: "QS I-GAUGE Featured Certificate",
        title: "QS I-GAUGE Recognition Certificate",
    };

    const gridImages = [
        {
            src: "/images/qs/2.jpg",
            alt: "QS I-GAUGE Certificate 1",
            title: "Academic Excellence Recognition",
        },
        {
            src: "/images/qs/3.jpg",
            alt: "QS I-GAUGE Certificate 2",
            title: "Research Quality Assessment",
        },
        {
            src: "/images/qs/4.jpg",
            alt: "QS I-GAUGE Certificate 3",
            title: "Infrastructure Rating",
        },
        {
            src: "/images/qs/5.jpg",
            alt: "QS I-GAUGE Certificate 4",
            title: "Faculty Evaluation",
        },
        {
            src: "/images/qs/6.jpg",
            alt: "QS I-GAUGE Certificate 5",
            title: "Student Satisfaction Score",
        },
        {
            src: "/images/qs/7.jpg",
            alt: "QS I-GAUGE Certificate 6",
            title: "Industry Interface Rating",
        },
        {
            src: "/images/qs/8.jpg",
            alt: "QS I-GAUGE Certificate 7",
            title: "Placement Performance",
        },
        {
            src: "/images/qs/9.jpg",
            alt: "QS I-GAUGE Certificate 8",
            title: "Overall Institutional Rating",
        },
    ];

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="QS I-GAUGE"
                description="QS I-GAUGE (India Gauge for University Ranking and Growth Excellence) - India's first comprehensive university ranking system."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Accreditation", href: "#" },
                    { label: "QS I-GAUGE", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Featured Certificate Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        QS I-GAUGE Recognition
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                            <div className="relative">
                                <LazyImage
                                    src={featuredImage.src}
                                    alt={featuredImage.alt}
                                    className="w-full h-auto object-contain bg-gray-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-primary mb-2">
                                    {featuredImage.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Certificates Section */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        QS I-GAUGE Assessment Certificates
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gridImages.map((image, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <LazyImage
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About QS I-GAUGE Section */}
                <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            About QS I-GAUGE
                        </h2>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                            QS I-GAUGE is India's first comprehensive university
                            ranking system that evaluates institutions across
                            multiple parameters including academic reputation,
                            research output, faculty quality, infrastructure,
                            and student satisfaction. Our recognition reflects
                            our commitment to maintaining world-class
                            educational standards and continuous improvement in
                            all aspects of institutional excellence.
                        </p>
                    </div>
                </section>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default QSGaugePage;
