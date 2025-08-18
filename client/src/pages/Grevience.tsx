import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const Card = ({ iconClass, title, description, color }) => (
    <div
        className={`bg-white shadow-md border-2 border-primary border-l-8  rounded-xl p-6 flex flex-col min-h-[250px] transition hover:scale-[1.02] duration-300`}
    >
        <div className="text-4xl text-secondary mb-4">
            <i className={`fas ${iconClass}`}></i>
        </div>
        <h3 className="text-xl font-semibold  text-primary mb-2">{title}</h3>
        <p className="text-gray-600 whitespace-pre-line text-sm">
            {description}
        </p>
    </div>
);

const Grievances = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Grievances & Redressal"
                description="Ensuring a fair, safe, and inclusive campus environment."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Grievances", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        iconClass="fa-pen"
                        title="Submit Your Complaint"
                        description="Report your concern online. We ensure fair and prompt handling of all grievances submitted."
                        color="border-yellow-500"
                    />

                    <Card
                        iconClass="fa-users"
                        title="Minority Cell"
                        description={`Protects rights of minority students.\nResolves academic/admin issues.\nPromotes awareness of rights.`}
                        color="border-indigo-500"
                    />

                    <Card
                        iconClass="fa-handshake"
                        title="SC/ST/OBC Cell"
                        description={`Handles caste-based issues.\nAssists in scholarships and reservations.\nSupports underrepresented groups.`}
                        color="border-green-500"
                    />

                    <Card
                        iconClass="fa-shield-alt"
                        title="Anti-Ragging Committee"
                        description={`Monitors campus to prevent ragging.\nEnsures UGC compliance.\nResponds quickly to incidents.`}
                        color="border-red-400"
                    />

                    <Card
                        iconClass="fa-venus"
                        title="Women's Rights Committee / ICC"
                        description={`Handles gender-based issues.\nActs on harassment complaints.\nConducts gender sensitization.`}
                        color="border-pink-400"
                    />

                    <Card
                        iconClass="fa-comments"
                        title="Student Grievance Redressal"
                        description={`Deals with complaints on academics and facilities.\nFair and transparent resolution system.`}
                        color="border-blue-500"
                    />

                    <Card
                        iconClass="fa-stream"
                        title="Grievance Submission Process"
                        description={`1. Choose correct cell.\n2. Submit complaint.\n3. Acknowledgment in 3 days.\n4. Resolution in 15 days.`}
                        color="border-cyan-500"
                    />

                    <Card
                        iconClass="fa-user-shield"
                        title="Confidentiality & Safety"
                        description={`All grievances are confidential.\nZero tolerance for retaliation.\nSupport assured.`}
                        color="border-orange-400"
                    />
                </div>

                {/* Download Notifications Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                        📢 Download Notifications
                    </h3>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>
                            <a
                                href="https://drive.google.com/file/d/165QbjW_C9-toksqv-LqGRmBylCe1j-wg/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Minority Cell Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1nSwXPqNgVyZ4fxe3QfZpolRtq1vKmJr-/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SC/ST/OBC Cell Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1G3dBnSywZ20D9DY2wJ63p7GxvuqKdH9Q/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Anti-Ragging Committee Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/18oEkJEw1e-xe5fXUiqfO5qbuB8zEFOJm/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ICC Notification
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1u75ohJQHsFpKo2JhVmBMlUxl3-SeO_ok/view?usp=sharing"
                                className="text-secondary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Student Grievance Redressal Cell Notification
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default Grievances;
