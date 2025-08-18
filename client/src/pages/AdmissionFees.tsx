import React from "react";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, DollarSign, FileText } from "lucide-react";

const AdmissionFees = () => {
    const branches = [
        { name: "Computer Sci. & Engg. (Artificial Intelligence)" },
        { name: "Computer Engineering (Indian Language)" },
        { name: "Computer Engineering (IoT)" },
        { name: "Computer Engineering (Data Science)" },
        { name: "Computer Engineering" },
        { name: "Artificial Intelligence & Data Science" },
        { name: "Electronics and Communication Engineering" },
        { name: "Electrical Engineering" },
    ];

    const feeStructure = [
        {
            sno: 1,
            program: "Computer Engineering",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 2,
            program: "Artificial Intelligence & Data Science",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 3,
            program: "Computer Sci. & Engg. (Artificial Intelligence)",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 4,
            program: "Computer Engineering (Data Science)",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 5,
            program: "Computer Engineering (Indian Language)",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 6,
            program: "Computer Engineering (IoT)",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 7,
            program: "Electronics & Communication Engineering",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
        {
            sno: 8,
            program: "Electrical Engineering",
            tuitionFee: "85,575",
            developmentFee: "12,835",
            naacFee: "21,395",
            totalFee: "1,19,805",
        },
    ];

    const studentProspectus = [
        {
            sno: 1,
            name: "Student Prospectus 2024-25",
            document:
                "https://drive.google.com/file/d/1i_YTB4BkOleU_mVotgiuCXU5UhNGaPoU/view?usp=sharing",
        },
        {
            sno: 2,
            name: "Student Prospectus 2023-24",
            document:
                "https://drive.google.com/file/d/14CaYDWKX2nqR8l-RusQCUNF4fIkYb7YF/view?usp=sharing",
        },
        {
            sno: 3,
            name: "Student Prospectus 2022-23",
            document:
                "https://drive.google.com/file/d/12ANVV-DrCrvn-BGTG7SBPN1FJjaNL0RK/view?usp=sharing",
        },
        {
            sno: 4,
            name: "Student Prospectus 2021-22",
            document:
                "https://drive.google.com/file/d/1IGGCxc6t-Ak_5E_mhIGduB5BefC9yZPp/view?usp=sharing",
        },
        {
            sno: 5,
            name: "Student Prospectus 2020-21",
            document:
                "https://drive.google.com/file/d/1zRrGDfJMlRCRHUyWISdjFNM9rRS9tD4m/view?usp=sharing",
        },
        {
            sno: 6,
            name: "Student Prospectus 2019-20",
            document:
                "https://drive.google.com/file/d/1jZMZ4pBXtFQLNHR2GlPuKVfQ2Q9X339h/view?usp=sharing",
        },
        {
            sno: 7,
            name: "Student Prospectus 2018-19",
            document:
                "https://drive.google.com/file/d/13Osip-LUfKLVeJdcy7y3OCkdW45qgAo4/view?usp=sharing",
        },
        {
            sno: 8,
            name: "PIET Fee Refund Policy",
            document:
                "https://drive.google.com/file/d/12W3KoHEZyWchiXXOjTaPKqkyaTN5Va9j/view?usp=sharing",
        },
    ];

    const feeRefundPolicy = [{ sno: 1, name: "Fee Refund Policy" }];

    const otherFees = [
        {
            type: "Registration Charges",
            amount: "Rs 1,500",
            frequency: "(One time)",
        },
        {
            type: "RTU Development Fee",
            amount: "Rs 2,500",
            frequency: "(One time)",
        },
        { type: "Uniform Fee", amount: "Rs 4,000", frequency: "(One time)" },
        { type: "Activity Fee", amount: "Rs 5,000", frequency: "(Per Annum)" },
        {
            type: "RTU exam & Enrollment Fee",
            amount: "Actual",
            frequency: "(As per RTU)",
        },
    ];

    const admissionSteps = [
        "Check eligibility criteria for the desired program",
        "Fill the online application form",
        "Upload required documents",
        "Pay application fee",
        "Attend counseling session (if required)",
        "Complete admission formalities",
    ];

    return (
        <div className="min-h-screen bg-neutral-50">
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Admission & Fees"
                description="Comprehensive information about B.Tech admissions and fee structure"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Admission & Fees", isCurrent: true },
                ]}
            />

            {/* Overview Section */}
            <div className="container mx-auto px-4 lg:px-0 mb-16 mt-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-primary mb-6">
                        B.Tech{" "}
                        <span className="text-secondary">Admission 2025</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                    <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                        B.Tech is an abbreviation for 'Bachelor of Technology'.
                        This is an undergraduate degree course for the duration
                        of 4 years. It is a skill-oriented course that opens
                        doors to various career paths after completion.
                    </p>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        Measured as the best B.Tech College across Rajasthan, in
                        Poornima, B.Tech. is regulated and set up under the
                        aegis of Rajasthan Technical University, Kota (RTU),
                        University Grants Commission of India (UGC) and All
                        India Council for Technical Education (AICTE).
                    </p>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                8
                            </h3>
                            <p className="text-neutral-600">Programs Offered</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                4
                            </h3>
                            <p className="text-neutral-600">Years Duration</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                ₹1,19,805
                            </h3>
                            <p className="text-neutral-600">Annual Fee</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center border-primary/20 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                A+
                            </h3>
                            <p className="text-neutral-600">NAAC Grade</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Available Branches */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary flex items-center gap-3">
                            <GraduationCap className="h-8 w-8" />
                            Available Branches
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-neutral-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            S. No.
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            Branch
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {branches.map((branch, index) => (
                                        <tr
                                            key={index}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-neutral-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {index + 1}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {branch.name}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Fee Structure */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary flex items-center gap-3">
                            <DollarSign className="h-8 w-8" />
                            Fee Structure: Academic Year 2025-26
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-neutral-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            S. No.
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            Name of Program
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-right">
                                            Tuition Fee (Per Annum)
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-right">
                                            Development Fee (Per Annum)
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-right">
                                            NAAC Accreditation Fee (Per Annum)
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-right">
                                            Total Fee (Per Annum)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeStructure.map((fee) => (
                                        <tr
                                            key={fee.sno}
                                            className={
                                                fee.sno % 2 === 0
                                                    ? "bg-neutral-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {fee.sno}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {fee.program}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-right">
                                                ₹{fee.tuitionFee}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-right">
                                                ₹{fee.developmentFee}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-right">
                                                ₹{fee.naacFee}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-right font-semibold text-primary">
                                                ₹{fee.totalFee}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Other Fees */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">
                            Other Fees
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {otherFees.map((fee, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-neutral-200 rounded-lg"
                                >
                                    <h4 className="font-semibold text-primary mb-2">
                                        {fee.type}
                                    </h4>
                                    <p className="text-xl font-bold text-secondary">
                                        {fee.amount}
                                    </p>
                                    <p className="text-sm text-neutral-600">
                                        {fee.frequency}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Admission Process */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">
                            Admission Process
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {admissionSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 border border-neutral-200 rounded-lg"
                                >
                                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-neutral-700">{step}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Student Prospectus */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary flex items-center gap-3">
                            <FileText className="h-8 w-8" />
                            Student Prospectus
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-neutral-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            S. No.
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            Name
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-center">
                                            See in Detail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentProspectus.map((item) => (
                                        <tr
                                            key={item.sno}
                                            className={
                                                item.sno % 2 === 0
                                                    ? "bg-neutral-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {item.sno}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {item.name}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-center">
                                                <a
                                                    href={item.document}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition-colors"
                                                >
                                                    View Details
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Fee Refund Policy */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">
                            Fee Refund Policy
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-neutral-300">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            S. No.
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-left">
                                            Name
                                        </th>
                                        <th className="border border-neutral-300 px-4 py-3 text-center">
                                            See in Detail
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeRefundPolicy.map((item) => (
                                        <tr
                                            key={item.sno}
                                            className={
                                                item.sno % 2 === 0
                                                    ? "bg-neutral-50"
                                                    : "bg-white"
                                            }
                                        >
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {item.sno}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3">
                                                {item.name}
                                            </td>
                                            <td className="border border-neutral-300 px-4 py-3 text-center">
                                                <a
                                                    href="https://drive.google.com/file/d/12W3KoHEZyWchiXXOjTaPKqkyaTN5Va9j/view?usp=sharing"
                                                    target="_blank"
                                                    className="inline-block bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition-colors"
                                                >
                                                    View Details
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default AdmissionFees;
