import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const publicationsList = [
    'Book / Book Chapters and Papers Published in Conferences',
    'Research Papers Published in the Journals',
    'Mandatory Disclosure',
    'Grievance Submission',
    'Campus Life @ PIET',
    'Green Campus',
    'Study In India',
    'AICTE Feedback Facility',
    'UGC Compliances',
]

const Publications = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Publications and Information"
                description="Explore books, research papers, and important disclosures at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Publications', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12 flex justify-center">
                <div
                    className="
            bg-white
            rounded-3xl
            shadow-lg
            max-w-lg
            p-8
            text-gray-900
            transition-transform duration-300
            hover:scale-[1.03]
            hover:shadow-xl
            border border-gray-200
            hover:border-gray-400
          "
                    aria-label="Publications and Resources card"
                >
                    <h2 className="text-3xl text-primary font-bold mb-8 text-center tracking-wide">
                        Publications & Resources
                    </h2>

                    <ul className="space-y-5 text-lg font-medium">
                        {publicationsList.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-3 group cursor-pointer">
                                <svg
                                    className="w-6 h-6 text-primary group-hover:text-gray-700 transition-colors duration-200 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="transition-colors duration-200 group-hover:text-gray-700">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            <Cta />
            <Footer />
        </div>
    )
}

export default Publications
