import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import Message from "@/components/Message";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const CoE = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Controller of Examination Message"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Controller of Examination Message",
                        isCurrent: true,
                    },
                ]}
            />
            <Message
                title="Message from the Controller of Examination"
                content="Dr. Amit Shrivastava is a seasoned academician and administrator with more than 22 years of extensive experience in the field of Electrical   
            Engineering education, academic governance, and institutional quality enhancement. He is currently serving as the Controller of Examinations at Poornima Institute of Engineering and Technology, Jaipur.
            In this capacity, Dr. Shrivastava oversees the planning, coordination, and execution of all examination-related activities,ensuring fairness, transparency, and academic integrity in the evaluation process.
Dr. Shrivastava holds a B.E., M.E., in Electrical Engineering from the prestigious Madhav Institute of Technology and Science (MITS), Gwalior and Ph.D. in Electrical Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal. His academic journey reflects a deep commitment to excellence and innovation in engineering education.

Throughout his career, he has held several key academic and administrative positions including Professor, Head of Department, Dean-IQAC, and Deputy Registrar at reputed institutions. His leadership has been instrumental in securing high-level accreditations and rankings for institutions. Notably, he led the NAAC accreditation process at PIET, resulting in an 'A' Grade, and played a central role in achieving Diamond and Platinum ratings in QS I- GAUGE assessments.
In the area of quality assurance and institutional benchmarking, Dr. Shrivastava has contributed significantly as the overall coordinator for NIRF submissions and the QS I- GAUGE Institution of Happiness Award initiatives. His efforts have not only enhanced institutional visibility but also ensured compliance with national regulatory frameworks.


Dr. Shrivastava has also actively contributed to research and innovation. He has supervised Ph.D. scholars, published over 20 papers in reputed SCOPUS and SCI-indexed journals. His areas of research interest include fault detection in electrical machines, renewable energy systems, and energy conservation technologies.
In addition to his academic and administrative accomplishments, he has been actively involved in faculty development, organizing national conferences, technical festivals, and training programs. He is a life member of professional bodies such as the Institution of Engineers (India) and ISTE, and serves as a reviewer for reputed international journals including IEEE Access and Hindawi.
Dr. Shrivastava’s approach is marked by a blend of strategic vision, operational efficiency, and academic rigor, making him a vital contributor to the institute’s mission of delivering quality education and institutional excellence."
                imageUrl="/images/messages/controller.jpg"
                imageAlt="Photo of Dr. Amit Shrivastava, Controller of Examination"
            />
            <Cta />
            <Footer />
        </div>
    );
};

export default CoE;
