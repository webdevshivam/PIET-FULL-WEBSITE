
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import OverviewSection from '@/components/OverviewSection'
import InfoCard from '@/components/InfoCard'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const studentOfficeBearers = [
  { registrationNo: 'PIET21CS506', name: 'Chiya Jamwal', phone: '9103225456', designation: 'Chair Person' },
  { registrationNo: 'PIET21CS110', name: 'Narendra Kumar', phone: '7023826876', designation: 'Treasurer' },
  { registrationNo: 'PIET22CS502', name: 'Chahat Gupta', phone: '8825009085', designation: 'Secretary' },
  { registrationNo: 'PIET23CS015', name: 'Anag Agarwal', phone: '6005200192', designation: 'Executive Committee Members' },
  { registrationNo: 'PIET23CS065', name: 'Harsh Khandelwal', phone: '7357745972', designation: 'Executive Committee Members' },
  { registrationNo: 'PIET23CS136', name: 'Rishab Jain', phone: '9214805770', designation: 'Executive Committee Members' },
  { registrationNo: 'PIET23AD050', name: 'Rudraksh Garg', phone: '7597714387', designation: 'Executive Committee Members' },
  { registrationNo: 'PIET23CR020', name: 'Gargi Sharma', phone: '8955325419', designation: 'Executive Committee Members' },
  { registrationNo: 'PIET23CI031', name: 'Keshav Kumar Sharma', phone: '8619819682', designation: 'Executive Committee Members' }
]

const facultyCoordinators = [
  { department: 'Applied Sciences', name: 'Dr. Gaurtam Singh', phone: '9001893262', designation: 'Chairman' },
  { department: 'Applied Sciences', name: 'Dr. Mukesh Chandra', phone: '9897195374', designation: 'Secretary' },
  { department: 'Applied Sciences', name: 'Dr. Sama Jain', phone: '9414321634', designation: 'Faculty Advisor' },
  { department: 'Applied Sciences', name: 'Dr. Bhanu Pratap', phone: '8118874724', designation: 'Faculty Coordinators' },
  { department: 'AI&DS', name: 'Dr. Uday Pratap', phone: '6394235053', designation: 'Faculty Coordinators' },
  { department: 'AI&DS', name: 'Dr. Budesh Kanwar', phone: '9460503316', designation: 'Faculty Coordinators' },
  { department: 'CSE', name: 'Dr. Anil Kumar', phone: '9896017351', designation: 'Faculty Coordinators' },
  { department: 'CSE', name: 'Mr. Dinesh Bhatia', phone: '9828153460', designation: 'Faculty Coordinators' },
  { department: 'CSE', name: 'Mr. Vivek Saxena', phone: '7568555557', designation: 'Faculty Coordinators' }
]

const studentColumns = [
  { label: 'Registration No.', key: 'registrationNo' },
  { label: 'Name', key: 'name' },
  { label: 'Phone No.', key: 'phone' },
  { label: 'Designation', key: 'designation' }
]

const facultyColumns = [
  { label: 'Department', key: 'department' },
  { label: 'Name', key: 'name' },
  { label: 'Phone No.', key: 'phone' },
  { label: 'Designation', key: 'designation' }
]

const activitiesData = [
  {
    sno: 1,
    name: 'ISTE Sponsored Activities Report (2018-2024)',
    download: (
      <a href="https://drive.google.com/file/d/1_b5bvncn_i3ksY-qvpT31z497feAE5-C/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
        <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
          <i className="fas fa-download" /> Download PDF
        </button>
      </a>
    )
  }
]

const activitiesColumns = [
  { label: 'S.No', key: 'sno' },
  { label: 'Document Name', key: 'name' },
  { label: 'Download', key: 'download' }
]

const ISTEPage = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb
        title="PIET ISTE Chapter"
        description="Discover how our ISTE chapter promotes technical education excellence at PIET."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'ISTE Chapter', isCurrent: true },
        ]}
      />

      <OverviewSection
        title="ISTE Student Chapter @ PIET"
        subtitle="About ISTE"
        reverse={false}
        image={{
          src: 'https://www.piet.poornima.org/images/idealab.jpeg',
          alt: 'ISTE Chapter at PIET',
        }}
      >
        <p>
          The Indian Society for Technical Education (ISTE) stands as the foremost national non-profit professional society dedicated to the advancement of the technical education system in our nation. With a primary focus on fostering the career development of teachers and nurturing the personality development of students, ISTE is committed to the holistic growth of our technical education system.
        </p>
        <br />
        <p>
          First started in 1941 as the Association of Principals of Technical Institutions (APTI), it was converted into "Indian Society for Technical Education" in 1968 with a view to enlarge its activities to advance the cause of technological education. The ISTE at PIET was started in the year 2010.
        </p>
        <br />
        <p>
          ISTE conducts various co-curricular activities which restore with the changing curriculum and educational processes. It has always tried to improve students' technical prowess, and boost them to put their learning into practice.
        </p>
      </OverviewSection>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Vision"
          iconClass="fas fa-eye"
          content={
            <p>
              ISTE's vision is that all educators are empowered to harness technology to accelerate innovation in teaching and learning, and inspire learners to reach their greatest potential.
            </p>
          }
        />
        
        <InfoCard
          title="Mission"
          iconClass="fas fa-bullseye"
          content={
            <p>
              ISTE inspires educators worldwide to use technology to innovate teaching and learning, accelerate good practice and solve tough problems in education by providing community, knowledge and the ISTE standards.
            </p>
          }
        />
      </div>

      <div className="container mx-auto my-10">
        <InfoCard
          title="Aims & Objectives of ISTE Student Chapter"
          iconClass="fas fa-target"
          content={
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>Outline the overall objectives and duties of technical education.</li>
                <li>Utilize the expertise of Engineering Sciences to benefit society.</li>
                <li>Cultivate proficient educators and educational leaders.</li>
                <li>Enhance instructional techniques, practices, and administrative procedures.</li>
                <li>Elevate professional values and benchmarks.</li>
                <li>Establish strong connections between technical institutions, industry, and society.</li>
                <li>Recognize individuals with honorary fellowships, awards, and prizes for advancing the goals of Technical Education.</li>
              </ul>
            </>
          }
        />
      </div>

      <div className="container mx-auto my-10">
        <InfoCard
          title="ISTE at PIET"
          iconClass="fas fa-university"
          content={
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>The PIET maintains an Educational Institution Membership with ISTE, encompassing both faculty and students.</li>
                <li>The membership for faculty members is granted for a lifetime, while for students, it is valid for duration of 4 years.</li>
                <li>Currently, the chapter boasts an impressive count of approximately 800 student members, alongside 15 faculty members from diverse departments.</li>
                <li>The ISTE Student Chapter arranges Inter-departmental competitions, Quiz competitions, and Guest Lectures by distinguished experts.</li>
                <li>Programs focused on enhancing skills in report writing and project management are organized.</li>
                <li>Lectures on moral values and ethics are conducted to inspire these essential principles among members.</li>
                <li>The chapter actively encourages discussions, brain-storming sessions, and group activities to foster innovation.</li>
              </ul>
            </>
          }
        />
      </div>

      <div className="container mt-10 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Student Office Bearers</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={studentColumns} data={studentOfficeBearers} />
      </div>

      <div className="container mt-14 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">Faculty Coordinators</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={facultyColumns} data={facultyCoordinators} />
      </div>

      <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Activities at PIET"
          iconClass="fas fa-calendar-alt"
          content={
            <>
              <p className="mb-3">
                Respective departments decide about technical activities under the ISTE banner. Activities are planned to not affect regular academics.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Inter-departmental competitions and Quiz competitions</li>
                <li>Guest lectures by industry experts</li>
                <li>Skill enhancement programs</li>
                <li>Report writing and project management workshops</li>
                <li>Moral values and ethics sessions</li>
              </ul>
            </>
          }
        />

        <InfoCard
          title="Financial Support"
          iconClass="fas fa-money-bill-wave"
          content={
            <p>
              Financial support for activities is managed through the ISTE account of PIET itself, which includes remuneration for guest speakers, travel allowance, mementos, refreshments, certificates, and gifts. No permission from ISTE New Delhi is required for institute-level activities.
            </p>
          }
        />
      </div>

      <div className="container mt-14 mx-auto">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">ISTE Sponsored Activities in Last Six Years</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <DynamicTable columns={activitiesColumns} data={activitiesData} />
      </div>

      <div className="container mt-14 mx-auto mb-16">
        <h2 className="text-3xl text-primary font-bold mb-8 text-center">ISTE Certificates</h2>
        <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
            <img 
              src="/attached_assets/image_1753950676913.png" 
              alt="ISTE Institutional Membership Certificate" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center mt-4 text-gray-600 font-medium">
              ISTE Institutional Membership Certificate - Established 2010
            </p>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  )
}

export default ISTEPage
