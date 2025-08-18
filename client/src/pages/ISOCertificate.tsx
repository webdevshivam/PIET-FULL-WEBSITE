import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import LazyImage from "@/components/LazyImage";

const ISOCertificatePage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="ISO Certificate 14001:2015 for Environmental Management System"
                description="ISO 14001:2015 certification for Environmental Management System demonstrates our commitment to environmental sustainability."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Accreditation", href: "#" },
                    { label: "ISO Certificate 14001:2015", isCurrent: true },
                ]}
            />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-8">
                        ISO 14001:2015 Environmental Management System
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-8 mx-auto"></div>

                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="relative">
                            <LazyImage
                                src="/images/ISO.png"
                                alt="ISO 14001:2015 Environmental Management System Certificate - Poornima Institute of Engineering & Technology"
                                className="w-full h-auto object-contain bg-gray-50"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                ISO 14001:2015 Certification
                            </h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                Poornima Institute of Engineering & Technology
                                has been certified with ISO 14001:2015 for
                                Environmental Management System, demonstrating
                                our commitment to environmental sustainability
                                and responsible environmental practices.
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

export default ISOCertificatePage;
