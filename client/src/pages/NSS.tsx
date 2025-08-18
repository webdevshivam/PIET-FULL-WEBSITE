import React from 'react'
import LazyImage from '@/components/LazyImage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import OverviewSection from '@/components/OverviewSection'
import Checklist from '@/components/Checklist'
import InfoCard from '@/components/InfoCard'
import GallerySection from '@/components/GallerySection'
import ImageGallery from '@/components/ImageGallery'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const points = [
    'First, regular NSS activities during which volunteers devote 120 hours per year for various community service initiatives.',
    'Second, special camping programs where volunteers work with adopted villages or urban siums for seven days, addressing specific community challenges.',
];

const objectivePoints = [
    'To understand and connect with our community',
    'To identify the needs and problems of the community and involve ourselves in problem-solving',
    'To develop among ourselves a sense of social and Civic Responsibilities.',
    'To utilize our knowledge in finding practical solutions to community problems',
    'To develop competence required for group living and sharing responsibilities',
]
const objectiveContent = (
    <Checklist items={objectivePoints} />
);

const imageItems = [
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-1.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-2.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-3.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-4.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-5.jpg",
    },
    {
        title: "",
        imageUrl: "https://www.piet.poornima.org/images/media-6.jpg",
    },


];


const activityColumns = [
    { label: 'S.N.', key: 'sno' },
    { label: 'Activity', key: 'activity' },
    { label: 'Date', key: 'date' },
    { label: 'Time', key: 'time' },
    { label: 'No. of Attendees', key: 'attendees' },
    { label: 'Venue', key: 'venue' },
];

const activityData = [
    { sno: 1, activity: 'World AIDS Day', date: '10/12/2025', time: '10:20AM-12:20PM', attendees: '60+', venue: 'PIET JAIPUR' },
    { sno: 2, activity: 'Run for Viksit Rajasthan', date: '12/12/2024', time: '7:00AM-3:30PM', attendees: '57+', venue: 'Amar Jawan Jyoti (Janpath), Jaipur' },
    { sno: 3, activity: 'Health Check-Up Camp', date: '13/12/2024', time: '10:20AM-3:20PM', attendees: '200+', venue: 'PIET JAIPUR' },
    { sno: 4, activity: 'NSS Inaugural and Orientation Ceremony', date: '24/12/2024', time: '10:45AM–12:25PM', attendees: '150+', venue: 'Seminar PIET' },
    { sno: 5, activity: 'National Youth Day: Debate Competition', date: '12/01/2025', time: '1:00PM-2:00PM', attendees: '75+', venue: '003 block A' },
    { sno: 6, activity: '76th Republic Day Celebration', date: '26/01/2025', time: '8:50AM-12:30PM', attendees: '300+', venue: 'Administrative Block' },
    { sno: 7, activity: 'CSAY 1.0 Cyber Security Awareness', date: '31/01/2025', time: '10:00AM-12:00PM', attendees: '500+', venue: 'SM Seth Auditorium, PIET' },
    { sno: 8, activity: 'Awareness Regarding Financial Security', date: '15/02/2025', time: '12:00PM-3:20PM', attendees: '100+', venue: 'Seminar Hall' },
    { sno: 9, activity: 'Rise Mental Health Awareness Program', date: '15/02/2025', time: '8:30AM-6:00PM', attendees: '600+', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Inauguration and Environmental Consciousness', date: '25/02/2025', time: '9:00AM-3:30PM', attendees: '150+', venue: 'Seminar Hall' },
    { sno: 10, activity: 'Special 7 Day Camp - Sports and Fitness or Social Inclusion', date: '26/02/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'Volleyball court' },
    { sno: 10, activity: 'Special 7 Day Camp - Cultural Expression for Social Transformation', date: '27/02/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Visual Arts for Social Commentary', date: '28/02/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Nukkad Natak', date: '01/03/2025', time: '9:00AM-3:30PM', attendees: '-', venue: 'PIET JAIPUR' },
    { sno: 10, activity: 'Special 7 Day Camp - Educational Outreach', date: '02/03/2025', time: '9:30AM-3:00PM', attendees: '100+', venue: 'Ashawala Village' },
    { sno: 10, activity: 'Special 7 Day Camp - Health Equity and Concluding Reflections', date: '03/03/2025', time: '9:30AM-3:00PM', attendees: '100+', venue: 'Ashawala Village' },
    { sno: 11, activity: 'International Woman’s Day', date: '08/03/2025', time: '8:30AM-3:20PM', attendees: '40+', venue: 'PIET JAIPUR' },
    { sno: 12, activity: 'Blood Donation Day', date: '10/03/2025', time: '8:30AM-3:20PM', attendees: '700+', venue: 'PIET JAIPUR' },
    { sno: 13, activity: 'Old Age Home Visit', date: '20/03/2024', time: '12:00PM-3:20PM', attendees: '250+', venue: 'Old Age Home' },
];






const NSS = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - National Service Scheme"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'PIET - National Service Scheme', isCurrent: true
                    },
                ]}
            />
            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/nss-1.png",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>
                    The National Service Scheme, popularly known as NSS, was launched in 1969 with one primary motto: <b> "Not Me, But You".</b> This simple yet powerful phrase encapsulates the essence of our mission to instil the spirit of selfless service in our youth.


                </p>
                <br />
                <p>
                    The National Service Scheme (NSS), a flagship program of the Ministry of Youth Affairs and Sports, Government of India, has allotted ONE UNIT to Poornima Institute of Engineering & Technology, Jaipur. The allotment was made on 28th August 2024, and it is an honor to be a part of this prestigious program.

                </p>
                <br />
                <p>
                    The scheme operates with two fundamental approaches:


                </p>


                <Checklist items={points} />


                <br />

            </OverviewSection>


            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">


                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
            </div>

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">PIET-NSS Volunteers Core Team</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <LazyImage
                    src={'https://www.piet.poornima.org/images/Nss_Team.jpg'}
                    alt={'Nss'}
                    className="rounded-xl shadow-xl w-full h-auto z-10 relative border border-primary"
                />
            </section>


            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Media Coverage</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {/* cards with galler options */}
                <ImageGallery items={imageItems} />

            </section>

            <div className="container mt-10 mx-auto py-8">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center"> Key Activities of PIET-NSS</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={activityColumns} data={activityData} />

            </div>
            <Cta />
            <Footer />
        </div>
    )
}

export default NSS
