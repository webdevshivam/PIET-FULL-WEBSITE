
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const partnerCategories = {
    industry: [
        { id: 1, src: "https://www.piet.poornima.org/images/partners/Aerophantom.PNG", alt: "Aerophantom", name: "Aerophantom", type: "Technology Partner" },
        { id: 2, src: "https://www.piet.poornima.org/images/partners/ats.PNG", alt: "ATS", name: "ATS", type: "Industry Partner" },
        { id: 3, src: "https://www.piet.poornima.org/images/partners/machineautomation.PNG", alt: "Machine Automation", name: "Machine Automation", type: "Technology Partner" },
        { id: 4, src: "https://www.piet.poornima.org/images/partners/h2s.PNG", alt: "H2S", name: "H2S", type: "Industry Partner" },
        { id: 5, src: "https://www.piet.poornima.org/images/partners/zeetron.PNG", alt: "Zeetron", name: "Zeetron", type: "Technology Partner" }
    ],
    academic: [
        { id: 6, src: "https://www.piet.poornima.org/images/partners/muscat.PNG", alt: "Muscat University", name: "Muscat University", type: "Academic Partner" },
        { id: 7, src: "https://www.piet.poornima.org/images/partners/asiauniversity.PNG", alt: "Asia University", name: "Asia University", type: "International Partner" }
    ],
    publishing: [
        { id: 8, src: "https://www.piet.poornima.org/images/partners/Aippublishing.png", alt: "AIP Publishing", name: "AIP Publishing", type: "Publishing Partner" }
    ],
    training: [
        { id: 9, src: "https://www.piet.poornima.org/images/partners/geekster.png", alt: "Geekster", name: "Geekster", type: "Training Partner" }
    ]
}

const stats = [
    { number: "50+", label: "Industry Partners", icon: "🏭" },
    { number: "20+", label: "Academic Partners", icon: "🎓" },
    { number: "15+", label: "International Partners", icon: "🌍" },
    { number: "100+", label: "Collaborative Projects", icon: "🤝" }
]

const PartnerCard = ({ partner }: { partner: any }) => (
    <Card className="group relative overflow-hidden bg-white border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
        <div className="aspect-video relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
            <img
                src={partner.src}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.insertAdjacentHTML('beforeend', `
                        <div class="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
                            <span class="text-sm font-medium">${partner.name}</span>
                        </div>
                    `);
                }}
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 bg-white">
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                {partner.name}
            </h3>
            <Badge variant="secondary" className="text-xs">
                {partner.type}
            </Badge>
        </div>
    </Card>
)

const StatCard = ({ stat }: { stat: any }) => (
    <Card className="text-center p-6 bg-white border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <div className="text-4xl mb-3">{stat.icon}</div>
        <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
        <div className="text-gray-600 font-medium">{stat.label}</div>
    </Card>
)

const CategorySection = ({ title, partners, gradient }: { title: string; partners: any[]; gradient: string }) => (
    <section className="mb-16">
        <div className="text-center mb-10">
            <div className={`inline-block px-6 py-2 rounded-full ${gradient} text-white font-semibold text-sm uppercase tracking-wide mb-4`}>
                {title}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {title} Collaborations
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
            ))}
        </div>
    </section>
)

const Collbration = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="OUR PARTNERS"
                description="Building bridges to excellence through strategic partnerships and collaborations that enhance learning, research, and innovation opportunities."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'OUR PARTNERS', isCurrent: true },
                ]}
            />

            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-r from-primary/10 via-blue-50 to-primary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Strategic <span className="text-primary">Partnerships</span> for Excellence
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We collaborate with leading industry players, renowned academic institutions, and innovative organizations to provide our students with unparalleled opportunities for growth, learning, and career advancement.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">🎯 Industry Exposure</span>
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">🔬 Research Collaboration</span>
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">💼 Placement Opportunities</span>
                            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 font-medium">🌐 Global Network</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Impact</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Sections */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Valued Partners</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our diverse network of partners across various sectors, each contributing to our mission of delivering world-class education and research opportunities.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
                    </div>

                    <CategorySection
                        title="Industry"
                        partners={partnerCategories.industry}
                        gradient="bg-gradient-to-r from-blue-600 to-blue-700"
                    />

                    <CategorySection
                        title="Academic"
                        partners={partnerCategories.academic}
                        gradient="bg-gradient-to-r from-green-600 to-green-700"
                    />

                    <CategorySection
                        title="Publishing"
                        partners={partnerCategories.publishing}
                        gradient="bg-gradient-to-r from-purple-600 to-purple-700"
                    />

                    <CategorySection
                        title="Training"
                        partners={partnerCategories.training}
                        gradient="bg-gradient-to-r from-orange-600 to-orange-700"
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🎓</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Learning</h3>
                            <p className="text-gray-600">Access to industry-standard tools, technologies, and methodologies through our partner network.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Opportunities</h3>
                            <p className="text-gray-600">Direct placement opportunities and internships with our industry and corporate partners.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🔬</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Excellence</h3>
                            <p className="text-gray-600">Collaborative research projects and access to cutting-edge facilities and expertise.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Exposure</h3>
                            <p className="text-gray-600">International exchange programs and global perspective through our academic partners.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Hub</h3>
                            <p className="text-gray-600">Access to innovation labs, incubation centers, and startup ecosystem through strategic partnerships.</p>
                        </Card>
                        <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Connect</h3>
                            <p className="text-gray-600">Regular industry interactions, guest lectures, and mentorship programs from partner organizations.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    )
}

export default Collbration
