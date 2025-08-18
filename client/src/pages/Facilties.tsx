import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import FaciltiesCard from '@/components/FaciltiesCard'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const cardData = [
    {
        title: "ATM",
        description: "The HDFC Bank ATM at PIET is a valuable asset for the community, providing convenient cash withdrawals for students, faculty, staff, and residents. Its 24/7 availability allows for easy account access and transactions, helping individuals manage their finances effectively. Located at the main entrance of PIET, it offers convenient banking services to the community. Overall, the ATM plays a vital role in meeting financial needs and enhancing convenience for all.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/atm.png",
        linkUrl: "#",
    },
    {
        title: "Auditorium",
        description: "The PIET's Auditorium, also known as the Arbuda Convention Centre, is a versatile event venue designed to cater to various gatherings. With a seating capacity of up to 480 persons, it is ideal for conferences, seminars, symposiums and cultural events. Equipped with state-of-the-art audio-visual systems, comfortable seating, ample parking, and an adaptable layout, it ensures a seamless and immersive experience for both presenters and attendees. The elegant ambiance adds a touch of sophistication to any event held at the auditorium.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/audi.png",
        linkUrl: "#",
    },

    {
        title: "Cafeteria",
        description: "The cafeteria at Poornima Institute of Engineering Technology is more than just a place to eat; it's a hub for socializing and building community. Students study together over coffee, faculty discuss research projects, and friends catch up over delicious food. The menu caters to diverse tastes, offering traditional Indian dishes and continental cuisine. The food is made with top-quality ingredients and strict hygiene standards. Snacks, drinks, and juices are also available throughout the day. The cafeteria's convenient location on campus makes it a popular spot for students and faculty to relax and unwind. The friendly staff adds to the welcoming atmosphere, always ready to help with a smile.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/cafeteria.png",
        linkUrl: "#",
    },
    {
        title: "Library",
        description: "PIET's library serves as an extensive repository of knowledge, equipped with advanced KOHA and TCS-iON systems, containing a collection of more than 29,000 physical books and 41,000 electronic resources. The facility offers comfortable study spaces, up-to-date computer software, and convenient remote access to materials, catering to a wide range of educational requirements. The library is accessible throughout the day to accommodate the needs of students, as well as teaching and non-teaching staff.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/library.png",
        linkUrl: "#",
    },

    {
        title: "Disable Friendly Campus",
        description: "The campus of Poornima Institute of Engineering and Technology has been meticulously designed to ensure complete accessibility for individuals with disabilities. This includes a dedicated lab with assistive tools and technologies, accessible restrooms, ramps, and a range of wheelchairs. These facilities are aimed at facilitating smooth movement and fostering an inclusive learning environment for everyone.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/disable.png",
        linkUrl: "#",
    },

    {
        title: "Generator BackUp and UPS Supply",
        description: "The Poornima Institute of Engineering and Technology ensures an uninterrupted power supply through the use of a reliable generator backup and UPS system. This allows students and faculty to focus on their studies and research without any interruptions. This dedication to investing in infrastructure demonstrates the institute's commitment to providing a high-quality learning and working environment for all individuals involved.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/generator.png",
        linkUrl: "#",
    },


    {
        title: "Gymnasium",
        description: "The gymnasium at PIET serves as a central point for promoting physical fitness, well-being, and fostering a sense of community. Equipped with cutting-edge facilities, expert guidance from trained professionals, and a wide range of fitness programs, the gymnasium is dedicated to helping individuals reach their fitness objectives and lead a wholesome life.",
        imageUrl: "hhttps://www.piet.poornima.org/images/facilities/gym.png",
        linkUrl: "#",
    },

    {
        title: "Hostel and Mess",
        description: "Poornima Institute of Engineering and Technology provides separate hostel facilities for male and female students, ensuring a secure and comfortable living environment. The well-furnished rooms are supervised by attentive hostel wardens, and students receive four nutritious meals daily, including breakfast, lunch, a mid-day snack, and dinner with fresh fruits and vegetables. The hostel also offers recreational areas and sports facilities to enhance the overall experience.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/hostel.png",
        linkUrl: "#",
    },

    {
        title: "ICT Classroomss",
        description: "The educational facilities at PIET are furnished with advanced ICT resources such as smart boards, high-speed internet, and projectors. These contemporary amenities enrich the learning experience by facilitating interactive and captivating teaching sessions, fostering a dynamic and efficient learning environment.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/ict.png",
        linkUrl: "#",
    },

    {
        title: "Indoor Games",
        description: "Poornima Institute of Engineering and Technology recognizes the importance of recreational activities in promoting holistic development among its students. By providing dedicated areas for indoor games such as table tennis, carrom, chess, foosball, and billiards, the institute offers students the opportunity to unwind, socialize, and improve their cognitive skills and hand-eye coordination during class breaks. These recreational activities not only provide entertainment but also contribute to the overall well-being and growth of the students.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/indoor.png",
        linkUrl: "#",
    },

    {
        title: "Laboratories",
        description: "The Poornima Institute of Engineering and Technology offers a hands-on learning experience through its state-of-the-art laboratories and computer labs, which boast a grand total of 630 computers. These cutting-edge facilities are meticulously designed with the most up-to-date hardware and software configurations, enabling students to delve into programming, software development, and simulation-based experiments. By engaging in these activities, students are able to enhance their technical skills and gain valuable practical knowledge.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/labs.png",
        linkUrl: "#",
    },

    {
        title: "Laundry",
        description: "The laundry service provided by Poornima Institute of Engineering and Technology is dedicated to meeting the needs of its students. Understanding the hectic schedules and time constraints that students encounter, the institute ensure that the laundry requirements are met promptly and effectively. By offering next-day service, students can conveniently drop off their soiled clothes at the on-campus laundry facility and anticipate them to be washed and ironed by the next day. This efficient service enables students to have clean and well-pressed clothes on hand for their day-to-day tasks.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/labs.png",
        linkUrl: "#",
    },

    {
        title: "Medical Facility",
        description: "Poornima Institute of Engineering and Technology prioritizes student and faculty well-being by offering essential medical services. The college has a medical room with a doctor and ambulance on standby for emergencies. These facilities cater to healthcare needs, ensuring regular check-ups and immediate attention. The college recognizes the importance of providing comprehensive medical facilities on campus for the overall well-being and academic success of students. With two medical rooms, doctors, nurses, and a well-equipped facility, the college offers comprehensive healthcare services for physical and mental health needs.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/medical.png",
        linkUrl: "#",
    },

    {
        title: "Outdoor Games",
        description: "The Poornima Institute of Engineering and Technology provides a range of outdoor sports facilities, encompassing cricket, volleyball, basketball, and kabaddi. These sports are supported by dedicated courts and fields within the campus, fostering physical fitness, teamwork, and sportsmanship among the students. This commitment to providing comprehensive sporting opportunities contributes to a holistic educational experience.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/outdoor.JPG",
        linkUrl: "#",
    },

    {
        title: "Parking",
        description: "PIET Campus provides ample parking facilities for both cars and motorcycles, ensuring convenient access for students and faculty. The campus includes designated parking areas on-site, as well as additional spaces outside, to accommodate the transportation needs of the college community. This feature not only improves convenience but also ensures accessibility for all individuals",
        imageUrl: "https://www.piet.poornima.org/images/facilities/parking.png",
        linkUrl: "#",
    },

    {
        title: "PIET AICTE IDEA Lab",
        description: "AICTE has recently introduced a program aimed at establishing an IDEA lab with a substantial funding of Rs. 55 Lakh. This initiative has garnered significant interest, with over 200 institutions from across India applying for the opportunity. We are delighted to announce that Poornima Institute of Engineering & Technology has been selected as one of the recipients of this grant, making it the sole institute in Rajasthan to achieve this remarkable feat. The PIET AICTE IDEA lab is dedicated to nurturing the ideas and innovation of individuals, providing them with a platform to explore their creativity. The IDEA Lab offers a range of facilities that can be integrated into its framework, including reverse engineering, rapid prototyping, and 3D printing, among others.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/idea1.png",
        linkUrl: "#",
    },

    {
        title: "Rain Water Harvesting",
        description: " Poornima Institute of Engineering and Technology has successfully integrated a rainwater harvesting system to collect and preserve rainwater for multiple purposes, including landscaping, irrigation, and recharging groundwater. This endeavor exemplifies the college's dedication to environmental responsibility and its efforts towards sustainability and water conservation.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/rainwater.png",
        linkUrl: "#",
    },

    {
        title: "STUDENT’S COOPERATIVE STORE",
        description: " The Poornima Institute of Engineering and Technology provides various amenities for both students and faculty members. Among these amenities is a student cooperative store, which offers essential items and stationery, making it convenient for students to obtain their daily necessities.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/store.png",
        linkUrl: "#",
    },

    {
        title: "Transport Facility",
        description: " The Poornima Institute of Engineering and Technology in Jaipur provides a dependable transportation service through a fleet of buses that cover all areas of the city. This service is specifically for faculty members, ensuring convenient and reliable transportation for the entire college community. Additionally, the college has a well-organized transport system with buses catering to the commuting needs of students, faculty, and staff. The buses follow designated routes to make it easy for everyone to access various locations.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/store.png",
        linkUrl: "#",
    },
    {
        title: "Versatile Event Spaces on Campus",
        description: "Poornima Institute of Engineering and Technology boasts Three Conference Rooms, Four Seminar Halls, and One Board Room. These multifunctional spaces are designed to accommodate a diverse range of co-curricular and extra-curricular activities, providing abundant opportunities for hosting events such as Faculty Development Programs (FDP), Training Programs, Seminars, and Workshops etc.",
        imageUrl: "https://www.piet.poornima.org/images/facilities/versatile.png",
        linkUrl: "#",
    },
];
const Facilties = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Facilities"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Facilities', isCurrent: true
                    },
                ]}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4 container mx-auto">
                {cardData.map((card, index) => (
                    <FaciltiesCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        linkUrl={card.linkUrl}
                    />
                ))}
            </div>
            <Cta />
            <Footer />
        </div>
    )
}

export default Facilties
