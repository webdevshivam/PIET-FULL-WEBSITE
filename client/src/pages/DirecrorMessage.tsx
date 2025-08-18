import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import Message from '@/components/Message'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'


const DirecrorMessage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Director Message"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Director Message', isCurrent: true
                    },
                ]}

            />
            <Message
                title="Message from the Director"
                content="Dr. Dinesh Goyal, having B.E, M.Tech & PhD in Computer Science & Engineering, is working as Professor in Computer Science and Engineering and Principal at Poornima Institute of Engineering & Technology. Under his leadership the Institute has become 1st Institution across India to offer Engineering Education in Regional Language under “New Education Policy”. Acquiring an experience of more than 24 years in teaching, and perceive keen interest in research area relating Cloud Security, Image Processing, Data Analytic and Information Security he has been pivotal in many turnkey projects & research and development activities. With a mission to append more and better skill set, he has organized many Conferences/ Workshops/ Seminars and FDP’s as Convener and Co-Convener within during this short career span.

With his great exposure with Outcome based Education in higher Education, he has been instrumental in obtaining accreditation's for his institutions, from various agencies like NAAC & NBA. He is also an empanel Assessor in NAAC since 2021 and has chaired NAAC Peer Team too. He has also received Grants-in-Aid for Research, Development, Conference & workshops, amounting more than Rs. 81 Lakh, from agencies like AICTE, TEQIP, ISTE etc, that include Combined Research Project, MODROBS, AICTE-IDEA Lab (Only institution in Rajasthan to part of such a great mission), GoC and many more.

He has been awarded by “Elets Excellence Award 2017” at Higher Education & Human Resource Conclave by Higher Education Department of Government of Rajasthan. He has also completed his CMI level 5 Award in “Management and Leadership”, under AICTE-UKIERI Technical Leadership Development Program in association with Dudley University . Under his leadership, Institutions has also excelled in Industry Academia Interface, has established centers with major tech giants like Microsoft, Google & Amazon etc. He has 28 Full patents published & 1 Copyright under his name. He has successfully published 13 edited books with big publishing giants like Springer, Wiley, IGI Global, Apple Academic Press, Taylor & Francis and Eureka. He has published 3 SCI & 100 Scopus and 47 Web of Science indexed papers & is editors of 2 SCI & 5 Scopus Indexed Journals, special issues. He has successfully guided 16 PhD Scholars & 31 PG Scholars. He has also attended more than 25 International Conferences & has been invited speaker for more than 15 Conferences & Seminars. He is life member of ISC, CSI, IETE & ISTE and fellow member of ACM & IEEE.

Engineers don’t think the glass is half empty or half full. They just think the glass needs to be redesigned."
                imageUrl="/images/messages/principle.png"
                imageAlt="Photo of Dr. Dinesh Goyal"
            />
            <Cta />
            <Footer />
        </div>
    )
}

export default DirecrorMessage