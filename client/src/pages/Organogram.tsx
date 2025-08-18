import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import LazyImage from '@/components/LazyImage'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const Organogram = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Organogram"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Organogram', isCurrent: true
                    },
                ]}
            />
            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Organogram

                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>



                <LazyImage
                    src={'/images/O.png'}
                    alt={'Organogram'}
                    className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                />
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default Organogram
