import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import WhyChoosePIET from "@/components/WhyChoosePIET";
import TopRecruitersSection from "@/components/TopRecruitersSection";
import AcademicPrograms from "@/components/AcademicPrograms";
import FacilitiesSection from "@/components/FacilitiesSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlacementSection from "@/components/PlacementSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import GreenPIETSection from "@/components/GreenPIETSection";
import Footer from "@/components/Footer";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import ConnectionStatus from "@/components/ConnectionStatus";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 font-body">
      <AccessibilityFeatures />
      <ConnectionStatus />
      <Header />
      <main id="main-content" className="pt-16"> {/* Added pt-16 for header spacing */}
        <HeroSlider />
        <QuickLinks />
        <AboutSection />
        <WhyChoosePIET />
        <TopRecruitersSection />
        <AcademicPrograms />
        <FacilitiesSection />
        <GreenPIETSection />
        <TestimonialsSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}