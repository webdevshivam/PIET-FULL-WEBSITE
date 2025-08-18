import { useState } from "react";
import { Link, useLocation } from "wouter";
import LazyImage from "./LazyImage";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuState, setMobileSubmenuState] = useState({
    about: false,
    admin: false,
    academics: false,
    research: false,
    accreditation: false,
    chapters: false,
    innovation: false,
    studentLife: false,
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (submenu: keyof typeof mobileSubmenuState) => {
    setMobileSubmenuState((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [, setLocation] = useLocation();

  const toggleSearchModal = () => {
    setSearchOpen(!isSearchOpen);
    setSearchTerm("");
  };

  const searchItems = [
    // Main Pages
    {
      title: "Home",
      description:
        "PIET Homepage - Poornima Institute of Engineering and Technology",
      link: "/",
      category: "Main",
    },
    {
      title: "About PIET",
      description: "About Poornima Institute of Engineering & Technology",
      link: "/about",
      category: "About",
    },
    {
      title: "Admission & Fees",
      description: "Engineering admission process and fee structure at PIET",
      link: "/admission-fees",
      category: "Admission",
    },
    {
      title: "Gallery",
      description: "PIET campus and event photo gallery",
      link: "/gallery",
      category: "Campus",
    },

    // Academic Departments
    {
      title: "Computer Science Engineering",
      description: "CSE Department at PIET with latest curriculum",
      link: "/computer-science",
      category: "Academics",
    },
    {
      title: "Artificial Intelligence & Data Science",
      description: "AI & DS Department offering cutting-edge programs",
      link: "/artificial-intelligence",
      category: "Academics",
    },
    {
      title: "Internet of Things (IoT)",
      description: "IoT Department with industry-relevant curriculum",
      link: "/dep-iot",
      category: "Academics",
    },
    {
      title: "Applied Sciences",
      description: "Department of Applied Sciences at PIET",
      link: "/applied-sceince",
      category: "Academics",
    },
    {
      title: "Academic Calendar",
      description: "PIET academic calendar and important dates",
      link: "/calendar",
      category: "Academics",
    },

    // Administration
    {
      title: "Principal Message",
      description: "Message from Principal of PIET",
      link: "/director-message",
      category: "Administration",
    },
    {
      title: "Registrar Message",
      description: "Message from Registrar/Ombudsperson",
      link: "/registar-message",
      category: "Administration",
    },
    {
      title: "Controller of Examination",
      description: "COE message and examination details",
      link: "/coe-message",
      category: "Administration",
    },
    {
      title: "Governing Council",
      description: "PIET Governing Council members",
      link: "/governing-council",
      category: "Administration",
    },
    {
      title: "Management Team",
      description: "PIET management team and leadership",
      link: "/management-team",
      category: "Administration",
    },
    {
      title: "Organogram",
      description: "PIET organizational structure",
      link: "/organogram",
      category: "Administration",
    },

    // Research & Innovation
    {
      title: "Research & Development",
      description: "R&D activities and projects at PIET",
      link: "/research-development",
      category: "Research",
    },
    {
      title: "PBIC - Business Incubation",
      description: "Poornima Business Incubation Center",
      link: "/pbic",
      category: "Research",
    },
    {
      title: "AICTE IDEA Lab",
      description: "Innovation and entrepreneurship lab",
      link: "/ideal-lab",
      category: "Research",
    },
    {
      title: "Publications",
      description: "Research publications by PIET faculty",
      link: "/publications",
      category: "Research",
    },
    {
      title: "IPR Cell",
      description: "Intellectual Property Rights cell at PIET",
      link: "/ipr-cell",
      category: "Research",
    },
    {
      title: "IPRs List",
      description: "Patents and intellectual property portfolio",
      link: "/iprs",
      category: "Research",
    },

    // Accreditation & Rankings
    {
      title: "NAAC Accreditation",
      description: "NAAC A Grade accreditation details",
      link: "/naac",
      category: "Accreditation",
    },
    {
      title: "NBA Accreditation",
      description: "National Board of Accreditation status",
      link: "/nba",
      category: "Accreditation",
    },
    {
      title: "NIRF Ranking",
      description: "National Institutional Ranking Framework",
      link: "/nirf",
      category: "Accreditation",
    },
    {
      title: "QS I-Gauge Ranking",
      description: "QS I-Gauge university rankings",
      link: "/qs-gauge",
      category: "Accreditation",
    },
    {
      title: "Times Ranking",
      description: "Times Higher Education rankings",
      link: "/times-ranking",
      category: "Accreditation",
    },
    {
      title: "ISO Certificate",
      description: "ISO certification and quality standards",
      link: "/iso-certificate",
      category: "Accreditation",
    },
    {
      title: "AISHE",
      description: "All India Survey on Higher Education",
      link: "/aishe",
      category: "Accreditation",
    },

    // Student Life
    {
      title: "Placements",
      description: "PIET placement records and top recruiters",
      link: "/placements",
      category: "Student Life",
    },
    {
      title: "Hostel Facilities",
      description: "PIET hostel accommodation and amenities",
      link: "/hostel-facilties",
      category: "Student Life",
    },
    {
      title: "Hostel Life",
      description: "Student life in PIET hostels",
      link: "/hostel-life",
      category: "Student Life",
    },
    {
      title: "Sports Facilities",
      description: "Sports and recreational facilities at PIET",
      link: "/sports",
      category: "Student Life",
    },
    {
      title: "Campus Facilities",
      description: "Infrastructure and facilities at PIET",
      link: "/facilties",
      category: "Student Life",
    },
    {
      title: "Annual Events",
      description: "PIET annual events and celebrations",
      link: "/annual-events",
      category: "Student Life",
    },
    {
      title: "Hackathons",
      description: "Coding competitions and hackathons",
      link: "/hackathons",
      category: "Student Life",
    },
    {
      title: "NSS Unit",
      description: "National Service Scheme activities",
      link: "/nss",
      category: "Student Life",
    },
    {
      title: "Health Care",
      description: "Medical facilities and health services",
      link: "/health",
      category: "Student Life",
    },

    // Chapters & Organizations
    {
      title: "IEEE Chapter",
      description: "PIET-IEEE student chapter activities",
      link: "/iee",
      category: "Chapters",
    },
    {
      title: "ACM Chapter",
      description: "PIET-ACM student chapter",
      link: "/acm",
      category: "Chapters",
    },
    {
      title: "IETE Chapter",
      description: "PIET-IETE electronics chapter",
      link: "/iete",
      category: "Chapters",
    },
    {
      title: "ISTE Chapter",
      description: "PIET-ISTE technical education chapter",
      link: "/iste",
      category: "Chapters",
    },
    {
      title: "Editorial Literacy Forum",
      description: "Democratic awareness and voting education",
      link: "/electoral-literacy-forum",
      category: "Chapters",
    },

    // Innovation & Cells
    {
      title: "ICC - Internal Complaints Committee",
      description: "Internal complaints committee for grievances",
      link: "/complaints",
      category: "Innovation",
    },
    {
      title: "IIC - Innovation Council",
      description: "Institution's Innovation Council",
      link: "/iic",
      category: "Innovation",
    },
    {
      title: "Industry Institute Innovation",
      description: "Industry-academia collaboration programs",
      link: "/industry-institute-innovation",
      category: "Innovation",
    },
    {
      title: "Cells & Committees",
      description: "Various academic and administrative cells",
      link: "/cells-committees",
      category: "Innovation",
    },

    // Policies & Compliance
    {
      title: "NEP 2020",
      description: "New Education Policy implementation at PIET",
      link: "/nep",
      category: "Policies",
    },
    {
      title: "OBE - Outcome Based Education",
      description: "Outcome-based education methodology",
      link: "/obe",
      category: "Policies",
    },
    {
      title: "Rules & Regulations",
      description: "Academic and disciplinary rules",
      link: "/rules-regulation",
      category: "Policies",
    },
    {
      title: "Grievance Cell",
      description: "Student grievance redressal mechanism",
      link: "/greviance",
      category: "Policies",
    },
    {
      title: "Anti-Ragging",
      description: "Anti-ragging policies and measures",
      link: "/greviance",
      category: "Policies",
    },
    {
      title: "Disability Support",
      description: "Support for differently-abled students",
      link: "/disable",
      category: "Policies",
    },

    // Resources
    {
      title: "E-Library",
      description: "Digital library resources and databases",
      link: "/e-library",
      category: "Resources",
    },
    {
      title: "IQAC",
      description: "Internal Quality Assurance Cell",
      link: "/iqac",
      category: "Resources",
    },
    {
      title: "Alumni",
      description: "PIET alumni network and connections",
      link: "/alumni",
      category: "Resources",
    },
    {
      title: "Alumni Registration",
      description: "Register with PIET alumni network",
      link: "/alumni-registration",
      category: "Resources",
    },

    // Contact & Support
    {
      title: "Complaints Registration",
      description: "Submit complaints and feedback",
      link: "/complaints-registration",
      category: "Support",
    },
    {
      title: "Messages",
      description: "Messages from leadership and faculty",
      link: "/messages",
      category: "About",
    },
  ];

  const filteredResults = searchTerm
    ? searchItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : searchItems.slice(0, 5);

  const handleResultClick = (link) => {
    setLocation(link);
    toggleSearchModal();
  };
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+911414071500"
              className="text-sm hover:text-accent-light transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>+91-141-4071500
            </a>
            <a
              href="mailto:info@poornima.org"
              className="text-sm hover:text-accent-light transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i>info@poornima.org
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Link
                to="/alumni"
                className="text-sm hover:text-accent-light transition-colors"
              >
                Alumni
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden z-10 mt-1 w-48">
                <Link
                  to="/alumni"
                  className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  Alumni Home
                </Link>
                <Link
                  to="/alumni-registration"
                  className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  Alumni Registration
                </Link>
              </div>
            </div>
            <Link
              to="/careers"
              className="text-sm hover:text-accent-light transition-colors"
            >
              Careers
            </Link>
            <Link
              to="/gallery"
              className="text-sm hover:text-accent-light transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/e-library"
              className="text-sm hover:text-accent-light transition-colors"
            >
              E-Library
            </Link>
            <Link
              to="/nirf"
              className="text-sm hover:text-accent-light transition-colors"
            >
              NIRF
            </Link>
            <Link
              to="/nba"
              className="text-sm hover:text-accent-light transition-colors"
            >
              NBA
            </Link>
            <Link
              to="/iqac"
              className="text-sm hover:text-accent-light transition-colors"
            >
              IQAC
            </Link>
            <div className="flex space-x-3 ml-4">
              <a
                href="https://www.facebook.com/PoornimaInstitute/"
                aria-label="Facebook"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/piet_jaipur/"
                aria-label="Twitter"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/piet_jaipur/"
                aria-label="Instagram"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/poornima-group-of-colleges/posts/?feedView=all"
                aria-label="LinkedIn"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="www.youtube.com/@PoornimaUniversityTV"
                aria-label="YouTube"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="w-full">
              <LazyImage
                src={"/images/logo/pietlogo.png"}
                alt={"NAAC Accreditation"}
                className="w-full max-w-md md:max-w-lg object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 md:mt-0 gap-4">
              <div className="flex items-center gap-3">
                  <button
                    onClick={toggleSearchModal}
                    className="text-primary hover:text-secondary focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Open search"
                  >
                    <i className="fas fa-search text-xl"></i>
                  </button>
                  {/* ... */}
                </div>
                <Link
                  href="/admission-fees"
                  className="btn-secondary rounded-lg shadow-md hover-lift"
                >
                  <i className="fas fa-graduation-cap mr-2"></i> Apply Now
                </Link>
              </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-primary hidden md:block">
        <div className=" mx-auto">
          <ul className="flex flex-col md:flex-row justify-center">
            <li className="group relative">
              <Link
                href="/"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-home mr-2"></i>Home
              </Link>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-university mr-2"></i>About
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/about"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-info-circle mr-2"></i>About PIET
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1cFORo7Udcbnw7OqiDXs4eenTXl1Ur7H5/view?usp=sharing"
                    target="_blank"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-info-circle mr-2"></i>Institutional
                    Development Plan
                  </a>
                  <Link
                    href="/director-message"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-user-tie mr-2"></i>Director's Message
                  </Link>
                  <Link
                    href="/messages"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-envelope mr-2"></i>Messages
                  </Link>

                  <Link
                    href="/sponsering-body"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-handshake mr-2"></i>Sponsoring Body
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1sSR8B4kEzt1Ize_lfLveVmmtil6XTeUd/view?usp=sharing"
                    target="_blank"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-info-circle mr-2"></i>Institutional
                    OutReach Plan
                  </a>
                  <Link
                    href="/organogram"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-project-diagram mr-2"></i>Organogram
                  </Link>
                  <Link
                    href="/advisery-board"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users-cog mr-2"></i>Advisory Board
                  </Link>
                  <Link
                    href="/governing-council"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-gavel mr-2"></i>Governing Council
                  </Link>
                  <Link
                    href="/management-team"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users mr-2"></i>Management Team
                  </Link>
                  <Link
                    href="/annual-report"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-file-alt mr-2"></i>Annual Report
                  </Link>
                  <Link
                    href="/annual-account"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-calculator mr-2"></i>Annual Account
                  </Link>
                  <Link
                    href="/recognization"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-calculator mr-2"></i>Recognization &
                    Approvals
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-university mr-2"></i>Adminstrator
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/director-message"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-user-tie mr-2"></i>Principal
                  </Link>

                  <Link
                    href="/registar-message"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-clipboard-user mr-2"></i>
                    Registrar/Ombudsperson
                  </Link>

                  <Link
                    href="/coe-message"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-clipboard-check mr-2"></i>Controller of
                    Examination
                  </Link>

                  <Link
                    href="/governing-council"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users-cog mr-2"></i>Governing Council
                  </Link>

                  <Link
                    href="/complaints"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    Internal Complaints Committee
                  </Link>

                  <Link
                    href="/complaints-registration"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-edit mr-2"></i>Submit Complaint
                  </Link>

                  <Link
                    href="/management-team"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users mr-2"></i> Management Team
                  </Link>

                  <Link
                    href="/cells-committees"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-sitemap mr-2"></i>Cells & Committees
                  </Link>

                  <Link
                    href="/nep"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-book mr-2"></i>New Education Policy
                    2020
                  </Link>

                  <span
                    onClick={() => (window.location.href = "/organogram")}
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                  >
                    <i className="fas fa-project-diagram mr-2"></i>Organogram
                  </span>

                  <span
                    onClick={() => (window.location.href = "/obe")}
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                  >
                    <i className="fas fa-cogs mr-2"></i>Process of OBE
                  </span>

                  <span
                    onClick={() => (window.location.href = "/rules-regulation")}
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                  >
                    <i className="fas fa-gavel mr-2"></i>Rules & Regulation
                  </span>

                  <a
                    href="https://drive.google.com/file/d/145iDgqszkMq3-IjjSMjfckJrmEhEGp-I/view?usp=sharing"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                    target="_blank"
                  >
                    <i className="fas fa-chalkboard-teacher mr-2"></i>Teaching
                    Learning Process
                  </a>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-book-open mr-2"></i>Academics
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <span
                    onClick={() => (window.location.href = "/calendar")}
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>Academic
                    Calendar
                  </span>
                  <Link
                    href="/applied-sceince"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-flask mr-2"></i>Departement of Applied
                    Sciences
                  </Link>
                  <Link
                    href="/artificial-intelligence"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-robot mr-2"></i>Departement of AI & DS
                  </Link>
                  <Link
                    href="/computer-science"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-laptop-code mr-2"></i> Departement of
                    Computer Engg.
                  </Link>

                  <Link
                    href="/dep-iot"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-wifi mr-2"></i> Departement of Internet
                    of Things
                  </Link>
                  <Link
                    href="/collbration"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-handshake mr-2"></i>Academic
                    Collaborations
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-microscope mr-2"></i>Research
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/research-development"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-microscope mr-2"></i>R&D Cell
                  </Link>

                  <Link
                    href="/pbic"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-seedling mr-2"></i>Poornima Business
                    Incubation Center(PBIC)
                  </Link>

                  <Link
                    href="/ideal-lab"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-lightbulb mr-2"></i>AICTE IDEA Lab
                  </Link>

                  <Link
                    href="/conferences"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users mr-2"></i>Conference
                  </Link>

                  <Link
                    href="/funding"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-hand-holding-usd mr-2"></i>Fundings
                  </Link>

                  <Link
                    href="/iprs"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-shield-alt mr-2"></i>IPRs
                  </Link>

                  <Link
                    href="/activities"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-chart-line mr-2"></i>Research
                    Activities
                  </Link>

                  <Link
                    href="/publications"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-book-open mr-2"></i>Publications
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-certificate mr-2"></i>Accreditation
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/aishe"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-university mr-2"></i>AISHE
                  </Link>

                  <Link
                    href="/iso-certificate"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-certificate mr-2"></i>ISO Certificate
                  </Link>

                  <Link
                    href="/naac"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-star mr-2"></i>NAAC Grade 'A'
                  </Link>

                  <Link
                    href="/nba"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-award mr-2"></i>NBA
                  </Link>

                  <Link
                    href="/nirf"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-chart-bar mr-2"></i>NIRF
                  </Link>

                  <Link
                    href="/qs-gauge"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-globe-americas mr-2"></i>QS I-Gauge
                  </Link>

                  <Link
                    href="/qiv-ranking"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-trophy mr-2"></i>QIV Ranking
                  </Link>

                  <Link
                    href="/times-ranking"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-book mr-2"></i>Times Ranking
                  </Link>
                </div>
              </div>
            </li>

            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-network-wired mr-2"></i>Chapters
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/iee"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-microchip mr-2"></i>PIET-IEEE Chapter
                  </Link>

                  <Link
                    href="/acm"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-laptop-code mr-2"></i>PIET-ACM Chapter
                  </Link>

                  <Link
                    href="/iete"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-satellite-dish mr-2"></i>PIET-IETE
                    Chapter
                  </Link>

                  <Link
                    href="/iste"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-graduation-cap mr-2"></i>PIET-ISTE
                    Chapter
                  </Link>

                  <Link
                    href="/conference"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users mr-2"></i>Student Council
                  </Link>

                  <Link
                    href="/electoral-literacy-forum"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-vote-yea mr-2"></i>Electoral Literacy
                    Forum
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-lightbulb mr-2"></i>Innovation
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/complaints"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-shield-alt mr-2"></i>ICC
                  </Link>
                  <Link
                    href="/ipr-cell"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-shield-alt mr-2"></i>IPR Cell
                  </Link>
                  <Link
                    href="/industry-institute-innovation"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users mr-2"></i>Industry Institute
                    Innovation
                  </Link>
                </div>
              </div>
            </li>
            <li className="group relative">
              <Link
                href="/admission-fees"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-graduation-cap mr-2"></i>Admission & Fees
              </Link>{" "}
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors flex items-center"
              >
                <i className="fas fa-user-graduate mr-2"></i>Student Life
                <i className="fas fa-chevron-down ml-2 text-xs"></i>
              </a>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/sports"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-futbol mr-2"></i>Sports Zone
                  </Link>

                  <Link
                    href="/nss"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-hands-helping mr-2"></i>NSS Unit
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1VEIAJ8dgTDsxpj6RicdpVX7jMwFLBOIr/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-users mr-2"></i>SEDG Cell
                  </a>

                  <Link
                    href="/hostel-life"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-bed mr-2"></i>Hostel Life
                  </Link>

                  <Link
                    href="/placements"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-whitetransition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-briefcase mr-2"></i>Placements
                  </Link>

                  <Link
                    href="/greviance"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-comments mr-2"></i>Grievance Cell
                  </Link>

                  <Link
                    href="/health"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-heartbeat mr-2"></i>Health Care
                  </Link>

                  <Link
                    href="/complaints"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-balance-scale mr-2"></i>Complaints
                  </Link>

                  <Link
                    href="/complaints-registration"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-edit mr-2"></i>Submit Complaint
                  </Link>

                  <Link
                    href="/greviance"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-ban mr-2"></i>Anti Ragging
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1H-G1_SYhblhZ4O-q7tUHPLKVo8yYYwT3/view?usp=sharing"
                    target="__blank"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-universal-access mr-2"></i>Equal Rights
                  </a>

                  <Link
                    href="/disable"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-wheelchair mr-2"></i>Accessible Ed
                  </Link>

                  <Link
                    href="/annual-events"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>Annual Events
                  </Link>

                  <Link
                    href="/facilties"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-tools mr-2"></i>Campus Tools
                  </Link>

                  <Link
                    href="/hackathons"
                    className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    <i className="fas fa-code mr-2"></i>Hackathons
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`bg-white shadow-xl md:hidden rounded-b-lg ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="px-4">
          <li>
            <Link href="/">
              <a className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors">
                <i className="fas fa-home mr-2"></i>Home
              </a>
            </Link>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-university mr-2"></i>About
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("about")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.about ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.about ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/about"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-info-circle mr-2"></i>About PIET
                </Link>
              </li>
              <li>
                <Link
                  href="/director-message"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-user-tie mr-2"></i>Director's Message
                </Link>
              </li>
              <li>
                <Link
                  href="/messages"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-envelope mr-2"></i>Messages
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1cFORo7Udcbnw7OqiDXs4eenTXl1Ur7H5/view?usp=sharing"
                  target="_blank"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-info-circle mr-2"></i>Institutional
                  Development Plan
                </a>
              </li>
              <li>
                <Link
                  href="/sponsering-body"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-handshake mr-2"></i>Sponsoring Body
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1sSR8B4kEzt1Ize_lfLveVmmtil6XTeUd/view?usp=sharing"
                  target="_blank"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-info-circle mr-2"></i>Institutional
                  OutReach Plan
                </a>
              </li>
              <li>
                <Link
                  href="/organogram"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-project-diagram mr-2"></i>Organogram
                </Link>
              </li>
              <li>
                <Link
                  href="/advisery-board"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users-cog mr-2"></i>Advisory Board
                </Link>
              </li>
              <li>
                <Link
                  href="/governing-council"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-gavel mr-2"></i>Governing Council
                </Link>
              </li>
              <li>
                <Link
                  href="/management-team"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Management Team
                </Link>
              </li>
              <li>
                <Link
                  href="/annual-report"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-file-alt mr-2"></i>Annual Report
                </Link>
              </li>
              <li>
                <Link
                  href="/annual-account"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-calculator mr-2"></i>Annual Account
                </Link>
              </li>
              <li>
                <Link
                  href="/recognization"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-calculator mr-2"></i>Recognization &
                  Approvals
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-university mr-2"></i>Administrator
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() =>
                  setMobileSubmenuState((prev) => ({
                    ...prev,
                    admin: !prev.admin,
                  }))
                }
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.admin ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.admin ? "block" : "hidden"}`}
            >
              <li>
                <span
                  onClick={() => (window.location.href = "/director-message")}
                  className="block py-2 hover:text-secondary transition-colors cursor-pointer"
                >
                  <i className="fas fa-user-tie mr-2"></i>Principal
                </span>
              </li>
              <li>
                <span
                  onClick={() => (window.location.href = "/registar-message")}
                  className="block py-2 hover:text-secondary transition-colors cursor-pointer"
                >
                  <i className="fas fa-clipboard-user mr-2"></i>Registrar
                </span>
              </li>
              <li>
                <Link
                  href="/coe-message"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-clipboard-check mr-2"></i>Controller
                </Link>
              </li>
              <li>
                <Link
                  href="/governing-council"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users-cog mr-2"></i>Council
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-exclamation-triangle mr-2"></i>Complaints
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints-registration"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-edit mr-2"></i>Submit Complaint
                </Link>
              </li>
              <li>
                <Link
                  href="/management-team"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Management Team
                </Link>
              </li>
              <li>
                <Link
                  href="/cells-committees"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-sitemap mr-2"></i>Cells & Committees
                </Link>
              </li>
              <li>
                <Link
                  href="/nep"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-book mr-2"></i>NEP 2020
                </Link>
              </li>
              <li>
                <Link
                  href="/organogram"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-project-diagram mr-2"></i>Organogram
                </Link>
              </li>
              <li>
                <Link
                  href="/obe"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-cogs mr-2"></i>OBE
                </Link>
              </li>
              <li>
                <Link
                  href="/rules-regulation"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-gavel mr-2"></i>Rules
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/145iDgqszkMq3-IjjSMjfckJrmEhEGp-I/view?usp=sharing"
                  target="_blank"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-chalkboard-teacher mr-2"></i>Teaching
                  Learning Process
                </a>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-book-open mr-2"></i>Academics
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("academics")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.academics ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.academics ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/calendar"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>Academic Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/applied-sceince"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-flask mr-2"></i>Applied Sciences
                </Link>
              </li>
              <li>
                <Link
                  href="/artificial-intelligence"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-robot mr-2"></i>AI & Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/computer-science"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-laptop-code mr-2"></i>Computer Eng.
                </Link>
              </li>
              <li>
                <Link
                  href="/dep-iot"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-wifi mr-2"></i>Internet of Things
                </Link>
              </li>
              <li>
                <Link
                  href="/collbration"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-handshake mr-2"></i>Collaborations
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-microscope mr-2"></i>Research
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() =>
                  setMobileSubmenuState((prev) => ({
                    ...prev,
                    research: !prev.research,
                  }))
                }
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.research ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.research ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/research-development"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-microscope mr-2"></i>R&D Cell
                </Link>
              </li>
              <li>
                <Link
                  href="/pbic"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-seedling mr-2"></i>Business Incubation
                </Link>
              </li>
              <li>
                <Link
                  href="/ideal-lab"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-lightbulb mr-2"></i>IDEA Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/conferences"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Conference
                </Link>
              </li>
              <li>
                <Link
                  href="/funding"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-hand-holding-usd mr-2"></i>Fundings
                </Link>
              </li>
              <li>
                <Link
                  href="/iprs"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-shield-alt mr-2"></i>IPRs
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-chart-line mr-2"></i>Research Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-book-open mr-2"></i>Publications
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-certificate mr-2"></i>Accreditation
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() =>
                  setMobileSubmenuState((prev) => ({
                    ...prev,
                    accreditation: !prev.accreditation,
                  }))
                }
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.accreditation ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.accreditation ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/aishe"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-university mr-2"></i>AISHE
                </Link>
              </li>
              <li>
                <Link
                  href="/iso-certificate"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-certificate mr-2"></i>ISO Certificate
                </Link>
              </li>
              <li>
                <Link
                  href="/naac"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-star mr-2"></i>NAAC Grade 'A'
                </Link>
              </li>
              <li>
                <Link
                  href="/nba"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-award mr-2"></i>NBA
                </Link>
              </li>
              <li>
                <Link
                  href="/nirf"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-chart-bar mr-2"></i>NIRF
                </Link>
              </li>
              <li>
                <Link
                  href="/qs-gauge"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-globe-americas mr-2"></i>QS I-Gauge
                </Link>
              </li>
              <li>
                <Link
                  href="/qiv-ranking"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-trophy mr-2"></i>QIV Ranking
                </Link>
              </li>
              <li>
                <Link
                  href="/times-ranking"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-book mr-2"></i>Times Ranking
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-network-wired mr-2"></i>Chapters
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() =>
                  setMobileSubmenuState((prev) => ({
                    ...prev,
                    chapters: !prev.chapters,
                  }))
                }
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.chapters ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.chapters ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/iee"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-microchip mr-2"></i>IEEE
                </Link>
              </li>
              <li>
                <Link
                  href="/acm"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-laptop-code mr-2"></i>ACM
                </Link>
              </li>
              <li>
                <Link
                  href="/iete"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-satellite-dish mr-2"></i>IETE
                </Link>
              </li>
              <li>
                <Link
                  href="/iste"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-graduation-cap mr-2"></i>ISTE
                </Link>
              </li>
              <li>
                <Link
                  href="/conference"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Student Council
                </Link>
              </li>
              <li>
                <Link
                  href="/electoral-literacy-forum"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-vote-yea mr-2"></i>Electoral Literacy
                  Forum
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-lightbulb mr-2"></i>Innovation
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() =>
                  setMobileSubmenuState((prev) => ({
                    ...prev,
                    innovation: !prev.innovation,
                  }))
                }
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.innovation ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.innovation ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/complaints"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-shield-alt mr-2"></i>ICC
                </Link>
              </li>
              <li>
                <Link
                  href="/ipr-cell"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-shield-alt mr-2"></i>IPR Cell
                </Link>
              </li>
              <li>
                <Link
                  href="/industry-institute-innovation"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Industry Institute
                  Innovation
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/admission-fees"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              <i className="fas fa-graduation-cap mr-2"></i>Admission & Fees
            </Link>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <i className="fas fa-user-graduate mr-2"></i>Student Life
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() =>
                  setMobileSubmenuState((prev) => ({
                    ...prev,
                    studentLife: !prev.studentLife,
                  }))
                }
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.studentLife ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.studentLife ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/sports"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-futbol mr-2"></i>Sports Zone
                </Link>
              </li>
              <li>
                <Link
                  href="/nss"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-hands-helping mr-2"></i>NSS Unit
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1VEIAJ8dgTDsxpj6RicdpVX7jMwFLBOIr/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>SEDG Cell
                </a>
              </li>
              <li>
                <Link
                  href="/hostel-life"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-bed mr-2"></i>Hostel Life
                </Link>
              </li>
              <li>
                <Link
                  href="/placements"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-briefcase mr-2"></i>Placements
                </Link>
              </li>
              <li>
                <Link
                  href="/greviance"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-comments mr-2"></i>Grievance Cell
                </Link>
              </li>
              <li>
                <Link
                  href="/health"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-heartbeat mr-2"></i>Health Care
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-balance-scale mr-2"></i>Complaints
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints-registration"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-edit mr-2"></i>Submit Complaint
                </Link>
              </li>
              <li>
                <Link
                  href="/greviance"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-ban mr-2"></i>Anti Ragging
                </Link>
              </li>
              <li>
                <Link
                  href="/equal-opportunity"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-universal-access mr-2"></i>Equal Rights
                </Link>
              </li>
              <li>
                <Link
                  href="/disable"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-wheelchair mr-2"></i>Accessible Ed
                </Link>
              </li>
              <li>
                <Link
                  href="/annual-events"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>Annual Events
                </Link>
              </li>
              <li>
                <Link
                  href="/facilties"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-tools mr-2"></i>Campus Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/hackathons"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  <i className="fas fa-code mr-2"></i>Hackathons
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black z-[9999] overflow-y-auto">          
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="/images/logo/pietlogo.png"
                    alt="PIET Logo"
                    className="h-10"
                  />
                  <h1 className="text-2xl font-bold text-primary">
                    Search PIET
                  </h1>
                </div>
                <button
                  onClick={toggleSearchModal}
                  className="text-gray-500 hover:text-gray-800 focus:outline-none p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close search"
                >
                  <i className="fas fa-times text-2xl"></i>
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search anything at PIET - departments, facilities, admissions, placements..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="container mx-auto px-4 py-6">
            {searchTerm === "" ? (
              /* Popular Searches */
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Popular Searches
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    "Computer Science Engineering",
                    "Placements",
                    "Admission & Fees",
                    "NAAC Accreditation",
                    "Hostel Facilities",
                    "Research & Development",
                  ].map((term, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchTerm(term)}
                      className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <i className="fas fa-search text-primary"></i>
                        <span className="font-medium text-gray-800">
                          {term}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Browse by Category */}
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Browse by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Academics",
                    "Student Life",
                    "Research",
                    "Accreditation",
                    "Administration",
                    "Resources",
                    "Chapters",
                    "Support",
                  ].map((category, idx) => {
                    const categoryItems = searchItems.filter(
                      (item) => item.category === category,
                    );
                    const icons = {
                      Academics: "fas fa-book-open",
                      "Student Life": "fas fa-user-graduate",
                      Research: "fas fa-microscope",
                      Accreditation: "fas fa-certificate",
                      Administration: "fas fa-university",
                      Resources: "fas fa-laptop",
                      Chapters: "fas fa-network-wired",
                      Support: "fas fa-headset",
                    };
                    return (
                      <div
                        key={idx}
                        className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <i
                            className={`${icons[category]} text-2xl text-primary`}
                          ></i>
                          <h3 className="font-semibold text-lg text-gray-800">
                            {category}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {categoryItems.length} items
                        </p>
                        <button
                          onClick={() => setSearchTerm(category)}
                          className="text-primary hover:text-secondary font-medium text-sm"
                        >
                          Explore {category} →
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Search Results */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {filteredResults.length} results for "{searchTerm}"
                  </h2>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="text-primary hover:text-secondary font-medium"
                    >
                      Clear search
                    </button>
                  )}
                </div>

                {filteredResults.length === 0 ? (
                  <div className="text-center py-12">
                    <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No results found
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Try searching for something else or browse by category
                    </p>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="btn-primary"
                    >
                      Browse All Categories
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredResults.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleResultClick(item.link)}
                        className="w-full p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all text-left group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                {item.category}
                              </span>
                            </div>
                            <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <i className="fas fa-arrow-right text-gray-400 group-hover:text-primary transition-colors ml-4"></i>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
