import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const HostelLife = () => {
    const hostelDetails = [
        {
            name: "Gayatri Girls Hostel",
            type: "Girls",
            capacity: "1100 Students",
        },
        {
            name: "Aravali Boys Hostel",
            type: "Boys",
            capacity: "1900 Students",
        },
        {
            name: "Gurushikhar Boys Hostel",
            type: "Boys",
            capacity: "Expandable",
        },
        { name: "Gargi Girls Hostel", type: "Girls", capacity: "Expandable" },
        { name: "Himalaya Boys Hostel", type: "Boys", capacity: "Expandable" },
    ];

    const basicFacilities = [
        "Reasonably big and airy rooms with good natural light",
        "Semi-furnished with complete fittings",
        "Choice to share with students from same or different fields",
        "Safe and secure environment 24/7",
        "Regular housekeeping and maintenance",
        "Hot water through solar water heater in winters",
    ];

    const diningFacilities = [
        "4 vegetarian meals daily in hygienic mess",
        "Self-service mode with student involvement in menu planning",
        "Morning tea, breakfast, lunch, evening snacks, dinner and milk",
        "Menu designed considering student requirements",
        "Variety of items at canteen and provision store",
        "Healthy snacks and refreshments available",
    ];

    const recreationFacilities = [
        "Open grounds for outdoor team games and athletics",
        "Natural lawn for relaxation and leisure",
        "Multi-facility gymnasium with ultramodern equipment",
        "Indoor games: Table Tennis, Chess, Carom Board, Foosball, Pool",
        "TV room for entertainment and news",
        "Seminar halls and convention centre",
    ];

    const securityFeatures = [
        "100% secured campus with CCTV surveillance",
        "Fire warning systems throughout hostels",
        "24-hour security guards on duty",
        "Unauthorized persons and vehicles not permitted",
        "Electronic access control systems",
        "Emergency response protocols in place",
    ];

    const additionalAmenities = [
        "24x7 electricity backup with generators",
        "24x7 Wi-Fi facilities for all devices",
        "Purified and chilled RO water systems",
        "24x7 medical facilities and ambulance service",
        "Laundry facilities for students",
        "Guest house facility for visiting parents",
    ];

    const hostelAdvantages = [
        "Congenial atmosphere for focused study",
        "Fixed schedule making students disciplined",
        "Opportunity to learn from brighter students",
        "Development of self-reliance and independence",
        "Enhanced cultural and intellectual values",
        "Better attendance, results and placement records",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <AccessibilityFeatures />
            <Header />

            <BreadCrumb
                title="Hostel Life at PIET"
                description="Experience world-class hostel facilities with a home-like environment for holistic student development."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Student Life", href: "#" },
                    { label: "Hostel Life", isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="bg-primary rounded-2xl p-8 mb-12 text-white shadow-xl">
                    <div className="flex items-center mb-6">
                        <div className="bg-white bg-opacity-20 rounded-full p-4 mr-6">
                            <i className="fas fa-home text-4xl"></i>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-2">
                                Poornima Institute Hostels
                            </h1>
                            <p className="text-xl opacity-90">
                                Your Home Away From Home
                            </p>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed max-w-4xl">
                        Poornima Institute hostels are designed to provide
                        students with ample opportunities for all-round
                        personality development and leadership qualities. Our
                        hostels offer a perfect blend of comfort, security, and
                        academic environment under expert faculty guidance.
                    </p>
                </div>

                {/* Hostel Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                        <div className="flex items-center">
                            <i className="fas fa-building text-3xl text-primary mr-4"></i>
                            <div>
                                <h3 className="text-2xl font-bold text-primary">
                                    5
                                </h3>
                                <p className="text-gray-600">Modern Hostels</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary">
                        <div className="flex items-center">
                            <i className="fas fa-users text-3xl text-secondary mr-4"></i>
                            <div>
                                <h3 className="text-2xl font-bold text-primary">
                                    3000+
                                </h3>
                                <p className="text-gray-600">
                                    Student Capacity
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary">
                        <div className="flex items-center">
                            <i className="fas fa-home text-3xl text-primary mr-4"></i>
                            <div>
                                <h3 className="text-2xl font-bold text-primary">
                                    1M+
                                </h3>
                                <p className="text-gray-600">
                                    Sq. Ft. Built Area
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hostel Gallery */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-images text-secondary mr-3"></i>
                        Hostel Life Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative overflow-hidden rounded-xl shadow-lg group">
                            <img
                                src="/images/hostel/room2.png"
                                alt="Modern hostel room"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Modern Rooms
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Comfortable and well-furnished
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl shadow-lg group">
                            <img
                                src="/images/hostel/dining.jfif"
                                alt="Hostel dining hall"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Dining Hall
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Hygienic mess with quality food
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl shadow-lg group">
                            <img
                                src="/images/hostel/room.jfif"
                                alt="Study area"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Study Areas
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Quiet spaces for focused learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl shadow-lg group">
                            <img
                                src="/images/hostel/sports.png"
                                alt="Recreation room"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Recreation
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Indoor games and entertainment
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl shadow-lg group">
                            <img
                                src="/images/hostel/gym.png"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Gymnasium
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Modern fitness equipment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hostel Details Table */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-list-alt text-secondary mr-3"></i>
                        Hostel Details
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="py-4 px-6 text-left rounded-tl-lg">
                                        Hostel Name
                                    </th>
                                    <th className="py-4 px-6 text-left">
                                        Type
                                    </th>
                                    <th className="py-4 px-6 text-left rounded-tr-lg">
                                        Capacity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {hostelDetails.map((hostel, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                                    >
                                        <td className="py-4 px-6 font-semibold text-primary">
                                            {hostel.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    hostel.type === "Girls"
                                                        ? "bg-pink-100 text-pink-800"
                                                        : "bg-blue-100 text-blue-800"
                                                }`}
                                            >
                                                {hostel.type}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            {hostel.capacity}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Basic Facilities */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                            <i className="fas fa-bed text-secondary mr-3"></i>
                            Basic Facilities
                        </h3>
                        <ul className="space-y-3">
                            {basicFacilities.map((facility, index) => (
                                <li key={index} className="flex items-start">
                                    <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                                    <span className="text-gray-700">
                                        {facility}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dining Facilities */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                            <i className="fas fa-utensils text-secondary mr-3"></i>
                            Dining Excellence
                        </h3>
                        <ul className="space-y-3">
                            {diningFacilities.map((facility, index) => (
                                <li key={index} className="flex items-start">
                                    <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                                    <span className="text-gray-700">
                                        {facility}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recreation & Sports */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                            <i className="fas fa-gamepad text-secondary mr-3"></i>
                            Recreation & Sports
                        </h3>
                        <ul className="space-y-3">
                            {recreationFacilities.map((facility, index) => (
                                <li key={index} className="flex items-start">
                                    <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                                    <span className="text-gray-700">
                                        {facility}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Security Features */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                            <i className="fas fa-shield-alt text-secondary mr-3"></i>
                            Security & Safety
                        </h3>
                        <ul className="space-y-3">
                            {securityFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                                    <span className="text-gray-700">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Additional Amenities */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-plus-circle text-secondary mr-3"></i>
                        Additional Amenities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {additionalAmenities.map((amenity, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-gray-50 rounded-lg p-4"
                            >
                                <i className="fas fa-star text-secondary mr-3 mt-1"></i>
                                <span className="text-gray-700">{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Student Welfare Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 border border-primary">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-user-graduate text-secondary mr-3"></i>
                        Director, Student Welfare
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        The Office of the Director, Student Welfare serves as
                        the central hub for promoting collaboration and
                        fellowship among students. We coordinate various
                        activities considering students' diverse backgrounds and
                        needs, providing platforms for creativity and personal
                        growth while maintaining social harmony and campus
                        peace.
                    </p>
                </div>

                {/* Hostel Life Advantages */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-trophy text-secondary mr-3"></i>
                        Advantages of Hostel Life
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {hostelAdvantages.map((advantage, index) => (
                            <div
                                key={index}
                                className="bg-primary text-white rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start">
                                    <i className="fas fa-medal text-yellow-300 mr-3 mt-1"></i>
                                    <span className="font-medium">
                                        {advantage}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Healthcare Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-heartbeat text-secondary mr-3"></i>
                        Healthcare Services
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-semibold text-primary mb-4">
                                        Medical Facilities
                                    </h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>
                                            • First aid facility available 24/7
                                        </li>
                                        <li>
                                            • Hospitalization arrangements with
                                            nearby Mahatma Gandhi Hospital
                                        </li>
                                        <li>
                                            • Walking distance to medical
                                            facilities
                                        </li>
                                        <li>• Emergency ambulance service</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-primary mb-4">
                                        Health Awareness
                                    </h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>
                                            • Regular health awareness campaigns
                                        </li>
                                        <li>
                                            • Educational materials on health
                                            topics
                                        </li>
                                        <li>• Blood donation drives</li>
                                        <li>• Immunization programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Healthcare facility"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-bold">
                                        Medical Center
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        24/7 healthcare support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculty Accommodation */}
                <div className="bg-green-50 rounded-xl p-8 mb-12 border border-primary">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-chalkboard-teacher text-secondary mr-3"></i>
                        Faculty & Staff Accommodation
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        To encourage faculty and staff members to be part of the
                        hostel community, the management provides affordable and
                        comfortable accommodation facilities. This ensures
                        better mentorship and guidance for students while
                        creating a supportive academic environment.
                    </p>
                </div>

                {/* Important Documents */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-file-alt text-secondary mr-3"></i>
                        Important Documents
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="py-4 px-6 text-left rounded-tl-lg">
                                        S. No
                                    </th>
                                    <th className="py-4 px-6 text-left">
                                        Document
                                    </th>
                                    <th className="py-4 px-6 text-left rounded-tr-lg">
                                        Download
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold text-primary">
                                        1
                                    </td>
                                    <td className="py-4 px-6">
                                        Hostel Form Student
                                    </td>
                                    <td className="py-4 px-6">
                                        <a
                                            href="https://drive.google.com/file/d/1ku51d8ANKaZvTPI9c5KCHbz1ohW08Vo7/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition inline-flex items-center gap-2"
                                        >
                                            <i className="fas fa-download"></i>
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold text-primary">
                                        2
                                    </td>
                                    <td className="py-4 px-6">
                                        Employee Accommodation Form
                                    </td>
                                    <td className="py-4 px-6">
                                        <a
                                            href="https://drive.google.com/file/d/1fKsvUFDmiFSK5HgACIlMzRJ5cuQcJGMp/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition inline-flex items-center gap-2"
                                        >
                                            <i className="fas fa-download"></i>
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold text-primary">
                                        3
                                    </td>
                                    <td className="py-4 px-6">
                                        General Requirements of new hosteller
                                    </td>
                                    <td className="py-4 px-6">
                                        <a
                                            href="https://drive.google.com/file/d/1I6HjwFcTszKrKrcjoBB-IYUYDzsrxubx/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition inline-flex items-center gap-2"
                                        >
                                            <i className="fas fa-download"></i>
                                            Download
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-blue-50 transition-colors">
                                    <td className="py-4 px-6 font-semibold text-primary">
                                        4
                                    </td>
                                    <td className="py-4 px-6">Fee Structure</td>
                                    <td className="py-4 px-6">
                                        <a
                                            href="https://drive.google.com/file/d/1D2n3TpM7yala7acW2e-WGh9oWBZjK9di/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition inline-flex items-center gap-2"
                                        >
                                            <i className="fas fa-download"></i>
                                            Download
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-primary rounded-xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Join Our Hostel Community?
                    </h2>
                    <p className="text-xl mb-6 opacity-90">
                        Experience the perfect blend of comfort, security, and
                        academic excellence at PIET hostels.
                    </p>
                    <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                        <i className="fas fa-download mr-2"></i>
                        Download Hostel Forms
                    </button>
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default HostelLife;
