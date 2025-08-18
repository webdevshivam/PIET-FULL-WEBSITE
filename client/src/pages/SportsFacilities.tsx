import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const Card = ({ iconClass, title, description, color }) => (
    <div className={`bg-white shadow-md border-2 border-primary border-l-8  rounded-xl p-8 flex flex-col items-start transition hover:scale-[1.02] duration-300 min-h-[250px]`}>
        <div className="text-5xl text-secondary mb-4">
            <i className={`fas ${iconClass}`}></i>
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 text-base whitespace-pre-line">{description}</p>
    </div>
);

const SportsFacilities = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Sports & Gym Facilities"
                description="Explore the vibrant sports and fitness infrastructure available at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Sports & Gym', isCurrent: true },
                ]}
            />

            <div className="container mx-auto py-10 px-4">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        iconClass="fa-landmark"
                        title="Overview"
                        description={`PIET promotes holistic development through indoor & outdoor facilities, certified coaches, and diverse equipment for student fitness.`}
                        color="border-yellow-400"
                    />

                    <Card
                        iconClass="fa-chart-bar"
                        title="Key Facts"
                        description={`Sports Facilities: Indoor & Outdoor\nPlaygrounds: 4\nPlayground Area: 38,878 sq. ft.\nCertified Coaches: 3`}
                        color="border-blue-500"
                    />

                    <Card
                        iconClass="fa-futbol"
                        title="Outdoor Sports"
                        description={`Cricket, Football, Volleyball, Basketball, Track & Field (Shot put, Discus, Javelin, Kho-Kho, etc.)`}
                        color="border-green-500"
                    />

                    <Card
                        iconClass="fa-table-tennis"
                        title="Indoor Sports"
                        description={`Badminton, Table Tennis (68 bats, 89 balls, 16 nets), Carrom, Chess, Rubik’s Cubes, Boxing Gloves`}
                        color="border-purple-500"
                    />

                    <Card
                        iconClass="fa-person-praying"
                        title="Yoga & Wellness"
                        description={`57 yoga mats (sports section) + 3 in gym.\nStructured sessions by expert instructors.`}
                        color="border-pink-400"
                    />

                    <Card
                        iconClass="fa-dumbbell"
                        title="Gym - Cardio & Strength"
                        description={`Treadmills, Spin Bikes, Lat Pull, Leg Curl, Chest Press, Cable Machines, Bicep Curl Bench.`}
                        color="border-red-400"
                    />

                    <Card
                        iconClass="fa-weight-hanging"
                        title="Weight Training"
                        description={`Dumbbells (2.5–35 kg), Barbells, Rods, Plates, Squat Stands, Deadlift Platform.`}
                        color="border-indigo-500"
                    />

                    <Card
                        iconClass="fa-toolbox"
                        title="Additional Equipment"
                        description={`Benches (Incline, Decline, Curl), Massager, Music System, Measurement Machine.`}
                        color="border-cyan-500"
                    />

                    <Card
                        iconClass="fa-user-graduate"
                        title="Coaching Support"
                        description={`Certified coaches guide students, prepare for competitions, and support skill development.`}
                        color="border-orange-400"
                    />

                    <Card
                        iconClass="fa-star"
                        title="Highlights"
                        description={`30+ Sports Activities\n40+ Gym Machines & Accessories\n4 Playgrounds\nIndoor/Outdoor Zones\nWellness Sessions`}
                        color="border-lime-500"
                    />
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default SportsFacilities;
