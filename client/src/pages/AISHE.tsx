import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import LazyImage from "@/components/LazyImage";

const AISHEPage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="All India Survey on Higher Education (AISHE) 2023-24"
                description="All India Survey on Higher Education (AISHE) is a comprehensive survey covering all Higher Educational Institutions (HEIs) in the country."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Accreditation", href: "#" },
                    { label: "AISHE 2023-24", isCurrent: true },
                ]}
            />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        AISHE 2023-24 Certificate
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>

                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="relative">
                            <LazyImage
                                src="/images/AISH.png"
                                alt="AISHE 2023-24 Certificate - Poornima Institute of Engineering & Technology"
                                className="w-full h-auto object-contain bg-gray-50"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                All India Survey on Higher Education (AISHE)
                                2023-24
                            </h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Poornima Institute of Engineering & Technology
                                is officially registered and recognized in the
                                All India Survey on Higher Education (AISHE)
                                2023-24, conducted by the Ministry of Education,
                                Government of India.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default AISHEPage;
