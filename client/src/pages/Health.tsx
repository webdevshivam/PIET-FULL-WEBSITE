import React from 'react'
import SimpleImageSlider from '@/components/SimpleImageSlider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const images = [
    "https://www.piet.poornima.org/images/med-img1.jpg",
    "https://www.piet.poornima.org/images/med-img2.jpg",
    "https://www.piet.poornima.org/images/med-img3.jpg",
    "https://www.piet.poornima.org/images/med-img4.jpg",
];

const altTexts = [
    "Description for image 1",
    "Description for image 2",
    "Description for image 3",
];
const Health = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Medical Facilities"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Medical Facilities', isCurrent: true
                    },
                ]}
            />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-6 max-w-7xl mx-auto">

                {/* Left Column */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl text-primary font-bold mb-4">
                        Details
                    </h1>
                    <p className="text-lg text-gray-700">
                        Poornima Institute of Engineering and Technology prioritizes student and faculty well-being by offering essential medical services. The college has a medical room with a doctor and ambulance on standby for emergencies. These facilities cater to healthcare needs, ensuring regular check-ups and immediate attention.

                        <br />
                        The college recognizes the importance of providing comprehensive medical facilities on campus for the overall well-being and academic success of students. With two medical rooms, doctors, nurses, and a well-equipped facility, the college offers comprehensive healthcare services for physical and mental health needs.



                    </p>
                    <a href="#" className='btn btn-primary mt-4'>Need Help</a>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 w-full">
                    <SimpleImageSlider
                        images={images}
                        altTexts={altTexts}
                        autoPlayInterval={5000}
                        aspectRatio="4/3"
                    />
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default Health
