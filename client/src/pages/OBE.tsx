import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';
import Cta from '@/components/Cta';
import InfoCard from '@/components/InfoCard';
import IntroductionSection from '@/components/IntroductionSection';
import LazyImage from '@/components/LazyImage';
const introductionContent = (
    <p>
        Outcome-based Education (OBE) emphasizes on many components in terms of student achievement in a program. The most important components are the Course Outcome (CO's) Program Outcomes (POs), Program Specific Outcome (PSO's).


        <br />
        <br />
        A knowledge-based society characterized by a scientific outlook and a culture of cooperation is the long-term goal of the Poornima Institute of Engineering & Technology, Jaipur. The institute's mission is to educate students for success in an increasingly globalized economy by providing them with a balanced education. Course Outcomes (COs) are defined for each course using Bloom's Taxonomy by each course coordinator and are approved Department Advisory Board. The Program Outcomes are in line with Washington Accord & NBA guidelines, catering to Graduate Attributed. All the CO’s and mapped with Program Outcomes (POs) and Program Specific Outcomes (PSOs) for further attainment analysis. The attainment of CO’s, PSO & PO’s in a academic year become benchmarks for Next academic session, for bridging the gap in Quality teaching pedagogy, Faculty Quality, Ambience of Institutions, Innovative practices in Teaching methodology including ICT techniques, enrichment of co-curricular & beyond curricular activities and improvement in curriculum. All of the undergraduate degree programs at the institution use this instructional strategy.


    </p>
);
const ProgramsContent = (
    <>
        <p>
            The National Board of Accreditation (NBA) defines program outcomes as statements that specify what students are expected to know and be able to do by the time of their graduation. These are in line with the Graduate Attributes as defined by the Washington Accord. These outcomes articulate the skills, knowledge, and attitudes that students should possess upon completing their educational program. Program outcomes serve as benchmarks for assessing the effectiveness of the curriculum and ensuring that it aligns with the objectives of the program. They provide a framework for evaluating student performance and guiding continuous improvement efforts within the educational institution.
        </p>

        <br />

        <ul className='gap-2'>
            <li><b>Engineering Knowledge:</b> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
            </li>
            <li><b>Problem Analysis: </b>Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.

            </li>
            <li>
                <b>Design/Development of Solutions:</b> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
            </li>
            <li>
                <b>Conduct Investigations of Complex Problems:</b> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
            </li>
            <li>
                <b>Modern Tool Usage:</b> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
            </li>
            <li>
                <b>The Engineer and Society:</b> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
            </li>
            <li>
                <b>Environment and Sustainability:</b> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
            </li>
            <li>
                <b>Ethics:</b> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
            </li>
            <li>
                <b>Individual and Team Work:</b> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
            </li>
            <li>
                <b>Communication:</b> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
            </li>
            <li>
                <b>Project Management and Finance:</b> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
            </li>
            <li>
                <b>Life-Long Learning:</b> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
            </li>

        </ul>
    </>




);
const data = {
    heading: "",
    paragraphs: [
        <ul key="list" className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>
                Identify & define the learning outcomes at all levels and explicitly document the same in the curriculum.
            </li>
            <li>
                Organizing the teaching and learning activity through student – centered activity and project base learning.
            </li>
            <li>
                Assessment and evaluation at all levels of learning outcomes i.e. PSOs , POs and COs
            </li>
        </ul>,
    ],
    images: [
        {
            src: "/images/obe/1.png",
            alt: "office content 1",
        },
    ],
};
const Formulation = {
    heading: "",
    paragraphs: [
        <p>
            Program Specific Outcomes (PSOs): » Program Specific Outcomes means what the graduate students of a specific degree program should be able to do and Course Outcomes are the resultant knowledge skills that the students acquire at the end of the course. PSOs are built on three behavioral components: knowledge, skill, and attitude. PSOs are statements made by the institute to stakeholders (employers, students, etc.) that should be measurable, appropriate, realistic, and achievable. They describe the career and professional accomplishments that the program is preparing graduates to accomplish after 4 years of graduation.

            <br />
            <br />
            <p>
                Program Specific Outcomes (PSOs): » Program Specific Outcomes means what the graduate students of a specific degree program should be able to do and Course Outcomes are the resultant knowledge skills that the students acquire at the end of the course. PSOs are built on three behavioral components: knowledge, skill, and attitude. PSOs are statements made by the institute to stakeholders (employers, students, etc.) that should be measurable, appropriate, realistic, and achievable. They describe the career and professional accomplishments that the program is preparing graduates to accomplish after 4 years of graduation.


            </p>
        </p>
    ],
    images: [
        {
            src: "/images/obe/2.png",
            alt: "office content 1",
        },
    ],
};


const OBE = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="OBE"
                description="Meet the distinguished members and access minutes of the OBE of Poornima Institute."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'OBE', isCurrent: true },
                ]}
            />

            <div className=" container mx-auto my-10 grid   gap-6 items-stretch">

                <InfoCard
                    title="Introduction"
                    iconClass="fas fa-info-circle "
                    content={introductionContent}
                />


            </div>

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">OBE Framework</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <IntroductionSection {...data} reverse={false} />;
            </section>
            <div className="container-fluid p-12 bg-blue-50 border border-gray-300">
                <section className="container py-12 mx-auto ">
                    <h2 className="text-3xl text-primary font-bold mb-8 text-center">Formulation PO’s and PSO’s:</h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <IntroductionSection {...Formulation} reverse={true} />;
                </section>
            </div>


            <div className=" container mx-auto my-10 grid   gap-6 items-stretch">

                <InfoCard
                    title="Program Outcomes"
                    iconClass="fas fa-info-circle "
                    content={ProgramsContent}
                />


            </div>


            <div className="container mx-auto bg-primary rounded text-white p-12">
                <h1 className='text-2xl text-center font-bold'>The Process of Refinement of PO’s</h1>

                <p className='md:mt-5 sm:mt-5 lg:mt-10'>
                    The refinement of Program Outcomes (POs) involves iterative assessment, stakeholder engagement, and curriculum alignment. Initially defined based on accreditation guidelines, POs are continuously reviewed with input from faculty, industry experts, and students. Curriculum alignment ensures that educational objectives match desired outcomes. Assessment methods are refined to measure PO attainment effectively. Feedback from stakeholders informs adjustments, fostering alignment with industry needs and educational standards. This iterative process ensures POs remain relevant and reflective of program goals, facilitating continuous improvement in educational quality.


                </p>
            </div>

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Process for Defining PSOs
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <p>
                    The program Assessment committee along with the stake holders define the program specific outcomes after having a brain storming session with the stake holders.


                </p>

                <LazyImage
                    src="/images/obe/3.png"
                    alt="image"
                    className="  h-auto mx-auto block"
                />


            </section>

            <Cta />
            <Footer />
        </div>
    )
}

export default OBE
