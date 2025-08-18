import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Cta from "@/components/Cta";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const ICCPage = () => {
  return (
    <div>
      <AccessibilityFeatures />
      <Header />
      <BreadCrumb
        title="Internal Complaints Committee (ICC)"
        description="Ensuring a respectful and safe academic environment at PIET"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "ICC", isCurrent: true },
        ]}
      />

      {/* Hero Block */}
      <section className="bg-blue-50 py-12 px-6 text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-primary mb-4">About ICC</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Poornima Institute is committed to maintaining a secure and respectful
          environment for all individuals. ICC ensures grievances related to
          harassment are addressed with transparency, confidentiality, and
          justice.
        </p>
      </section>

      {/* Objectives & Roles */}
      <section className="container mx-auto px-4 py-14 grid md:grid-cols-2 gap-12">
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            <i className="fas fa-bullseye text-secondary mr-2"></i>
            Objectives
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-7">
            <li>Safe, discrimination-free academic & work environment</li>
            <li>Compliance with UGC & POSH guidelines</li>
            <li>Awareness via seminars, workshops, orientation</li>
            <li>Timely redressal of complaints with confidentiality</li>
          </ul>
        </div>
        <div className="animate-slide-up animation-delay-100">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            <i className="fas fa-tasks text-secondary mr-2"></i>
            Roles & Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-7">
            <li>Receive & investigate complaints</li>
            <li>Recommend actions & provide counseling</li>
            <li>Maintain strict confidentiality</li>
            <li>Conduct sensitization programs</li>
          </ul>
        </div>
      </section>

      {/* Complaint Procedure */}
      <section className="bg-white py-14 px-6 animate-fade-in">
        <h3 className="text-3xl font-bold text-center text-primary mb-10">
          <i className="fas fa-clipboard-list text-secondary mr-2"></i>
          Complaint Procedure
        </h3>
        <div className="max-w-4xl mx-auto grid gap-6">
          <div className="border-l-4 border-secondary pl-4">
            <p>
              <strong>Step 1:</strong> Submit written complaint to ICC Presiding
              Officer or via email.
            </p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <p>
              <strong>Step 2:</strong> File must be submitted within 3 months of
              the incident.
            </p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <p>
              <strong>Step 3:</strong> Committee ensures confidential, unbiased
              processing.
            </p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <p>
              <strong>Step 4:</strong> Action taken based on inquiry results.
            </p>
          </div>
        </div>
      </section>

      {/* ICC Support Cards */}
      <section className="container mx-auto px-4 py-14">
        <h3 className="text-3xl font-bold text-center text-primary mb-12">
          <i className="fas fa-hands-helping text-secondary mr-2"></i>
          ICC Support Services
        </h3>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 animate-zoom-in">
          {[
            {
              icon: "fa-shield-alt",
              title: "Safe Campus",
              desc: "Zero-tolerance for harassment and bullying",
            },
            {
              icon: "fa-hand-holding-heart",
              title: "Confidentiality",
              desc: "All complaints handled with strict privacy",
            },
            {
              icon: "fa-chalkboard-teacher",
              title: "Awareness Drives",
              desc: "Workshops, sessions, and gender sensitization",
            },
            {
              icon: "fa-user-check",
              title: "Action-Oriented",
              desc: "Timely investigations and just resolutions",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl border-2 border-blue-900 rounded-xl p-6 transition-transform hover:scale-105 text-center"
            >
              <div className="text-4xl text-secondary mb-4">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h4>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-12 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">
            <i className="fas fa-address-card text-secondary mr-2"></i>
            ICC Contact Details
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            Dr. Sama Jain, Presiding Officer (ICC)
          </p>
          <p className="text-gray-700">
            HoD, Department of Applied Sciences, PIET Jaipur
          </p>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:sama.jain@poornima.org"
              className="text-secondary font-medium"
            >
              sama.jain@poornima.org
            </a>
          </p>
        </div>
      </section>

      {/* Official Documents Section */}
      <section className="container mx-auto py-16 px-4 animate-slide-up">
        <h3 className="text-3xl font-bold text-center text-primary mb-12">
          <i className="fas fa-file-alt text-secondary mr-2"></i>
          ICC Official Documents
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Documents Table */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">
              Important Documents
            </h4>
            <table className="w-full table-auto border border-gray-300 rounded-xl overflow-hidden">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="p-2 text-left">S. No</th>
                  <th className="p-2 text-left">Document</th>
                  <th className="p-2 text-left">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="p-2">1</td>
                  <td>Notification of Internal Complaints Committee</td>
                  <td>
                    <a
                      className="text-blue-600 underline"
                      href="https://drive.google.com/file/d/1Ny5IRceBgIFmF7gD6vM2nUA4sw_vziFO/view?usp=sharing"
                      target="__blank"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Minutes Table */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-primary">
              Minutes of Meetings
            </h4>
            <table className="w-full table-auto border border-gray-300 rounded-xl overflow-hidden">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="p-2 text-left">S. No</th>
                  <th className="p-2 text-left">Document</th>
                  <th className="p-2 text-left">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="p-2">1</td>
                  <td>Minutes of Meeting of ICC</td>
                  <td>
                    <a
                      target="__blank"
                      className="text-blue-600 underline"
                      href="https://drive.google.com/file/d/1a8Ekevx9bx3KAJVVXLQdIQBRE0s9VUJg/view?usp=sharing"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-2">2</td>
                  <td>Minutes of Meeting of SGRC</td>
                  <td>
                    <a
                      target="__blank"
                      className="text-blue-600 underline"
                      href="https://drive.google.com/file/d/1dmDOHT7hQiIX_hnLlrssQUQsYg9-IV5M/view?usp=sharing"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default ICCPage;
