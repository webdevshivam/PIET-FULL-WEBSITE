import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import Message from '@/components/Message'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const Registrar = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Registrar Message"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Registrar Message', isCurrent: true
                    },
                ]}

            />
            <Message
                title="Message from the Registrar"
                content="Dr. Balwan is a distinguished academician and administrator with extensive experience in civil engineering education and institutional leadership. Currently serving as the Registrar at Poornima Institute of Engineering & Technology, Jaipur, he is known for his commitment to academic excellence, research innovation, and administrative efficiency. His expertise in advanced concrete technology and structural engineering highlights his strong foundation in technical knowledge and professional practice.

As Registrar, Dr. Balwan oversees critical administrative functions including student admissions, academic records, examination coordination, and institutional compliance. His leadership ensures seamless operations and maintains the highest standards of academic integrity. With a vision to transform educational processes through technology and innovation, he continuously works toward enhancing the student experience and institutional effectiveness.

Dr. Balwan's dedication to fostering a culture of excellence and his unwavering commitment to student success make him an invaluable leader in the PIET community. His administrative acumen and academic insights contribute significantly to the institute's mission of providing quality engineering education and creating future-ready professionals."
                imageUrl="/images/messages/reg.jpg"
                imageAlt="Photo of Dr. Balwan (Registrar)"
            />
            <Cta />
            <Footer />
        </div>
    )
}

export default Registrar