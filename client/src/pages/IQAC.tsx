import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import { ChevronDown, ChevronRight, Download, Eye, Users, Target, Award, BookOpen, FileText, Calendar, CheckCircle } from 'lucide-react';

const iqacConstitution = [
    'Constitution 2024-25 (After Visit)',
    'Constitution 2024-25',
    'Constitution 2023-24',
    'Constitution 2022-23',
    'Constitution 2021-22',
    'Constitution 2020-21',
    'Constitution 2019-20',
    'Constitution 2018-19'
];

const iqacInitiatives = [
    'IQAC Initiatives (After 2018)',
    'IQAC Initiatives (Before 2018)'
];

const aqarReports = [
    'AQAR (2022-23)',
    'AQAR (2021-22)',
    'AQAR (2020-21)',
    'AQAR (2019-20)',
    'AQAR (2018-19)'
];

const strategicPlans = [
    'Strategic Development Plan 2023 Onwards',
    'Measured Analysis of Strategic Development Plan 2018-22 by IQAC',
    'Strategic Development Plan 2018-22'
];

const feedbackForms = [
    'Alumni Survey Questionnaire',
    'Employer\'s Feedback Form',
    'Faculty Feedback form',
    'Student Feedback form on Ambience',
    'Student Feedback form on Academics',
    'Student Feedback on Academics over ERP (Process)'
];

const feedbackAnalysis = [
    'Action Taken Report of Feedback (2023-24)',
    'Feedback Analysis (2023-24)',
    'Action Taken Report of Feedback (2022-23)',
    'Feedback Analysis (2022-23)',
    'Action Taken Report of Feedback (2021-22)',
    'Feedback Analysis (2021-22)',
    'Action Taken Report of Feedback (2020-21)',
    'Feedback Analysis (2020-21)',
    'Action Taken Report of Feedback (2019-20)',
    'Feedback Analysis (2019-20)',
    'Action Taken Report of Feedback (2018-19)',
    'Feedback Analysis (2018-19)'
];

const studentSurveys = [
    'Students Satisfaction Survey 2023-24',
    'Students Satisfaction Survey 2022-23',
    'Students Satisfaction Survey 2021-22',
    'Students Satisfaction Survey 2020-21',
    'Students Satisfaction Survey 2019-20',
    'Students Satisfaction Survey 2018-19'
];

const academicAudits = [
    'Academic & Administrative Audit 2023-24',
    'Academic & Administrative Audit 2022-23',
    'Academic & Administrative Audit 2021-22',
    'Academic & Administrative Audit 2020-21',
    'Academic & Administrative Audit 2019-20',
    'Academic & Administrative Audit 2018-19'
];

const bestPractices = [
    'Best Practices 1',
    'Best Practices 2'
];

const bestPracticesEvidence = [
    'Best Practices 1 Evidence',
    'Best Practices 2 Evidence'
];

// Enhanced data for IQAC Meetings & Action Taken Reports with triple nested structure
const iqacMeetingsData = {
    '2024-25': {
        'Meeting 27': [
            'Action Taken of Meeting - 26',
            'Agenda of meeting - 27',
            'Minutes of Meeting - 27'
        ],
        'Meeting 26': [
            'Action Taken of Meeting - 25',
            'Agenda of meeting - 26',
            'Minutes of Meeting - 26'
        ],
        'Meeting 25': [
            'Action Taken of Meeting - 24',
            'Agenda of meeting - 25',
            'Minutes of Meeting - 25'
        ]
    },
    '2023-24': {
        'Meeting 24': [
            'Action Taken of Meeting - 23',
            'Agenda of meeting - 24',
            'Minutes of Meeting - 24'
        ],
        'Meeting 23': [
            'Action Taken of Meeting - 22',
            'Agenda of meeting - 23',
            'Minutes of Meeting - 23'
        ],
        'Meeting 22': [
            'Action Taken of Meeting - 21',
            'Agenda of meeting - 22',
            'Minutes of Meeting - 22'
        ],
        'Meeting 21': [
            'Action Taken of Meeting - 20',
            'Agenda of meeting - 21',
            'Minutes of Meeting - 21'
        ]
    },
    '2022-23': {
        'Meeting 20': [
            'Action Taken of Meeting - 19',
            'Agenda of meeting - 20',
            'Minutes of Meeting - 20'
        ],
        'Meeting 19': [
            'Action Taken of Meeting - 18',
            'Agenda of meeting - 19',
            'Minutes of Meeting - 19'
        ],
        'Meeting 18': [
            'Action Taken of Meeting - 17',
            'Agenda of meeting - 18',
            'Minutes of Meeting - 18'
        ]
    },
    '2021-22': {
        'Meeting 17': [
            'Action Taken of Meeting - 16',
            'Agenda of meeting - 17',
            'Minutes of Meeting - 17'
        ],
        'Meeting 16': [
            'Action Taken of Meeting - 15',
            'Agenda of meeting - 16',
            'Minutes of Meeting - 16'
        ],
        'Meeting 15': [
            'Action Taken of Meeting - 14',
            'Agenda of meeting - 15',
            'Minutes of Meeting - 15'
        ]
    },
    '2020-21': {
        'Meeting 14': [
            'Action Taken of Meeting - 13',
            'Agenda of meeting - 14',
            'Minutes of Meeting - 14'
        ],
        'Meeting 13': [
            'Action Taken of Meeting - 12',
            'Agenda of meeting - 13',
            'Minutes of Meeting - 13'
        ]
    },
    '2019-20': {
        'Meeting 12': [
            'Action Taken of Meeting - 11',
            'Agenda of meeting - 12',
            'Minutes of Meeting - 12'
        ],
        'Meeting 11': [
            'Action Taken of Meeting - 10',
            'Agenda of meeting - 11',
            'Minutes of Meeting - 11'
        ]
    },
    '2018-19': {
        'Meeting 10': [
            'Action Taken of Meeting - 9',
            'Agenda of meeting - 10',
            'Minutes of Meeting - 10'
        ]
    }
};

// Enhanced data for IQAC Quality Activities with proper structure
const iqacQualityActivities = {
    '2023-2024': [
        {
            name: 'Innovation,Design,and Entrepreneurship(IDE) Bootcamp for Students Innovations and Teachers of Schools',
            organization: 'AICTE'
        },
        {
            name: '5th International Conference on Information Management & Machine Intelligence (ICIMMI-2023)',
            organization: 'Asian University and IIIT Nagpur'
        },
        {
            name: 'First International Conference on "Mathematics, Modelling and Statistics (ICMMS 2023)"',
            organization: 'ISTE'
        },
        {
            name: 'International Conference on Smart Innovations for Society (ICSIS- 2024)',
            organization: 'PIET'
        },
        {
            name: 'International Conference on Intelligent Systems & Computing (ICISC 2024)',
            organization: 'PIET'
        },
        {
            name: 'International Conference on Recent Advances in Artificial intelligence, Computer Vision & Smart Systems (ICRACS 2024)',
            organization: 'PIET'
        },
        {
            name: 'Smart India Hackathon (Software Edition) Grand Finale -2023',
            organization: 'Ministry of Education Govt of India and AICTE'
        },
        {
            name: 'Approach to Innovation and IPR Registration',
            organization: 'AICTE IDEA LAB'
        }
    ],
    '2022-2023': [
        {
            name: '4th International Conference on Information Management &Machine Intelligence (ICIMMI2022)',
            organization: 'ICPS (Published by ACM), ISTE, Computer society of India'
        },
        {
            name: 'Offline FDP on "Advanced Tools & Techniques for Quality Research Analysis & Writing"',
            organization: 'ISTE'
        },
        {
            name: 'Six days Faculty Development Program on "Python Programming A-Z"',
            organization: 'AICTE MODROB'
        },
        {
            name: 'Session on "Quality Enhancement through Reverse Engineering for Product Design Using CAD"',
            organization: 'CADEMATE'
        },
        {
            name: 'Offline FDP on "Advanced Tools & Techniques for Quality Research Analysis & Writing"',
            organization: 'ISTE'
        }
    ],
    '2021-2022': [
        {
            name: 'Faculty Development Program on "Effective Implementation of National Education Policy 2020"',
            organization: 'IQAC'
        },
        {
            name: 'One Week Skill Development Program on "Office Tools" for non-teaching staff',
            organization: 'IQAC'
        },
        {
            name: 'Faculty Induction Program on "Strategic Planning and Implementation in Teaching-Learning, Research and Innovations"',
            organization: 'IQAC'
        }
    ],
    '2020-2021': [
        {
            name: 'RTU-PIET Hackathon-21',
            organization: 'RTU-TEQIP-III'
        },
        {
            name: 'International Conference on "Post Covid Challenges on Life and Livelihood (ICPCC)"',
            organization: 'RTU-TEQIP-III'
        },
        {
            name: 'Five Days Short Term Training Program "Environmental Impacts of COVID-19 Pandemic: Challenges and Remedies through Science and Engineering"',
            organization: 'ISTE'
        },
        {
            name: 'Three days International Online Faculty Development Program on "Computational Mathematics for Engineers and Researchers"',
            organization: 'IQAC'
        }
    ],
    '2019-2020': [
        {
            name: 'A session on "Research and Development"',
            organization: 'IQAC'
        },
        {
            name: 'FDP on "Vision-Mission, CO, PO, PSO Mapping, Assessment and Attainment"',
            organization: 'IQAC'
        },
        {
            name: '"The Smart City" Hackathon 2020',
            organization: 'RTU-TEQIP-III'
        }
    ],
    '2018-2019': [
        {
            name: 'Session on "Elaborate the Quality Benchmarks"',
            organization: 'IQAC'
        },
        {
            name: 'Short Term Training Programme on "NBA Accreditation (ICT01)"',
            organization: 'NITTTR, Kolkata'
        },
        {
            name: 'FDP on "Quality Improvement in the Teaching Learning Process"',
            organization: 'IQAC'
        },
        {
            name: 'A session on "Improving the quality of Student Induction"',
            organization: 'AICTE-IDEA Lab'
        }
    ]
};

// Data for other dropdowns
const fdpWorkshopsData = {
    '2023-2024': [
        'Advanced Teaching Methodologies Workshop',
        'Research Methodology FDP',
        'Digital Tools Training',
        'Quality Enhancement Program'
    ],
    '2022-2023': [
        'Innovative Teaching Practices',
        'Academic Leadership FDP',
        'Technology Integration Workshop',
        'Assessment Techniques Training'
    ],
    '2021-2022': [
        'Online Teaching Excellence',
        'Curriculum Development FDP',
        'Student Engagement Strategies',
        'Quality Assurance Training'
    ],
    '2020-2021': [
        'Virtual Classroom Management',
        'Digital Assessment FDP',
        'Remote Learning Workshop',
        'Online Quality Training'
    ],
    '2019-2020': [
        'Traditional Teaching Methods',
        'Classroom Management FDP',
        'Student Mentoring Workshop',
        'Academic Excellence Program'
    ],
    '2018-2019': [
        'Basic Teaching Skills',
        'Foundation FDP Program',
        'Quality Basics Workshop',
        'Initial Training Sessions'
    ]
};

const academicCalendars = {
    '2024-25': ['Academic Calendar 2024-25'],
    '2023-24': ['Academic Calendar 2023-24'],
    '2022-23': ['Academic Calendar 2022-23'],
    '2021-22': ['Academic Calendar 2021-22'],
    '2020-21': ['Academic Calendar 2020-21'],
    '2019-20': ['Academic Calendar 2019-20'],
    '2018-19': ['Academic Calendar 2018-19']
};

const environmentAuditCertificates = {
    '2024-25': ['Environment Audit Certificate 2024-25'],
    '2023-24': ['Environment Audit Certificate 2023-24'],
    '2022-23': ['Environment Audit Certificate 2022-23'],
    '2021-22': ['Environment Audit Certificate 2021-22']
};

const environmentAuditReports = {
    '2023-24': ['Environment Audit Report 2023-24'],
    '2020-2023': ['Environment Audit Report 2020-2023']
};

const IQACPage = () => {
    const [openMeetingsYear, setOpenMeetingsYear] = useState(null);
    const [openMeetingsSubItem, setOpenMeetingsSubItem] = useState(null);
    const [openQualityYear, setOpenQualityYear] = useState(null);
    const [openFDPYear, setOpenFDPYear] = useState(null);
    const [openFDPItem, setOpenFDPItem] = useState(null);
    const [openCalendarYear, setOpenCalendarYear] = useState(null);
    const [openEnvCertYear, setOpenEnvCertYear] = useState(null);
    const [openEnvReportYear, setOpenEnvReportYear] = useState(null);

    // Helper function to get document links
    const getDocumentLink = (docName: string, year: string, meetingName: string) => {
        // Default fallback link
        return 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    const getFDPDocumentLink = (item: string, year: string) => {
        // Map specific FDP documents to their Google Drive links
        const fdpLinks = {
            'Faculty induction program IQAC21-22': 'https://drive.google.com/file/d/1xRzrYmtQT7DJFUy-nqkpcSzwSaLckn6b/view?usp=sharing',
            'IQAC REPORT OF FDP19-20': 'https://drive.google.com/file/d/17idbHTjjg2deF2TU4Y7VTlH7uQjKyfY6/view?usp=sharing',
            'FDP PIET Report on Faculty Preparedness Training': 'https://drive.google.com/file/d/1N_hCWGGdKRwsY4DLIrD11O8MriKehUWy/view?usp=sharing',
            'FDP PIET NN ML FDP Report Final22-23': 'https://drive.google.com/file/d/1LJonNdgL92p_jGn1u__JahQTPlmd9CEK/view?usp=sharing',
            'FDP PIET Report-FDP on Python Programming A-Z-22-23': 'https://drive.google.com/file/d/1aRuAhSgA017_CBFiTSa4bWxD23rX4ECC/view?usp=sharing',
            'FDP IDEA LAB': 'https://drive.google.com/file/d/1SnvajPBqHhnQfkTTBhK5tNal8Zx9UJ5k/view?usp=sharing',
            'IQAC Faculty induction program': 'https://drive.google.com/file/d/1vQ1TYppLTe7PJ8pxW1HqXKx-YwWCGA4D/view?usp=sharing'
        };
        
        return fdpLinks[item] || 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    const getSimpleDocumentLink = (item: string, year: string) => {
        // Map specific documents to their Google Drive links
        const documentLinks = {
            'Academic Calendar': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'Environment Audit Certificate': 'https://drive.google.com/file/d/1go2UONAOssmyJpJpovkgu2ESauCIflxD/view?usp=sharing',
            'Environment Audit Report': 'https://drive.google.com/file/d/1go2UONAOssmyJpJpovkgu2ESauCIflxD/view?usp=sharing'
        };
        
        return documentLinks[item] || 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    const getTableDocumentLink = (item: string) => {
        // Map specific table documents to their Google Drive links
        const tableLinks = {
            'Quality Policy': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'IQAC Handbook': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'IQAC Initiatives (After 2018)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'IQAC Initiatives (Before 2018)': 'https://drive.google.com/file/d/1SHI5G6qmxlekI8oboO2bi7PLk6wKt5yA/view?usp=sharing',
            'Institute Perspective Plan': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'AQAR (2022-23)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'AQAR (2021-22)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'AQAR (2020-21)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'AQAR (2019-20)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'AQAR (2018-19)': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'Academic & Administrative Audit 2023-24': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'Academic & Administrative Audit 2022-23': 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing',
            'Academic & Administrative Audit 2021-22': 'https://drive.google.com/file/d/1SLiD_-xilJKRenkVUMiXUSLpvJaOvBZG/view?usp=sharing',
            'Academic & Administrative Audit 2020-21': 'https://drive.google.com/file/d/1SLiD_-xilJKRenkVUMiXUSLpvJaOvBZG/view?usp=sharing',
            'Academic & Administrative Audit 2019-20': 'https://drive.google.com/file/d/1PLhjSQHoyLbK4c8xuoDi6pFHVqKs9JtV/view?usp=sharing',
            'Academic & Administrative Audit 2018-19': 'https://drive.google.com/file/d/1wjLwaqZp0Yj9uttE3jbIN-yqoCbc0-X_/view?usp=sharing'
        };
        
        return tableLinks[item] || 'https://drive.google.com/file/d/1VwqO--p7iGGd2cxT_678MCPAQabZk1hM/view?usp=sharing';
    };

    // Triple Nested Dropdown for IQAC Meetings
    const TripleNestedDropdown = ({ title, data, openYear, setOpenYear, openSubItem, setOpenSubItem, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, meetings]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => {
                                setOpenYear(openYear === year ? null : year);
                                setOpenSubItem(null);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-blue-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    {Object.keys(meetings).length} meetings
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-200" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-blue-600 transition-transform duration-200" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-blue-50 space-y-3">
                                {Object.entries(meetings).map(([meetingName, documents]) => (
                                    <div key={meetingName} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
                                        <button
                                            className="w-full text-left p-4 text-gray-700 hover:bg-blue-50 focus:outline-none flex justify-between items-center group"
                                            onClick={() => setOpenSubItem(openSubItem === `${year}-${meetingName}` ? null : `${year}-${meetingName}`)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Users className="h-4 w-4 text-blue-500 group-hover:text-blue-600" />
                                                <span className="font-medium">{meetingName}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                                                    {documents.length} docs
                                                </span>
                                                {openSubItem === `${year}-${meetingName}` ? (
                                                    <ChevronDown className="h-4 w-4 text-blue-500" />
                                                ) : (
                                                    <ChevronRight className="h-4 w-4 text-blue-500" />
                                                )}
                                            </div>
                                        </button>
                                        {openSubItem === `${year}-${meetingName}` && (
                                            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
                                                <div className="space-y-3">
                                                    {documents.map((doc, idx) => (
                                                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                                                            <div className="flex items-center gap-3">
                                                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                                                                    {String(idx + 1).padStart(2, '0')}
                                                                </span>
                                                                <FileText className="h-4 w-4 text-blue-500" />
                                                                <span className="text-gray-700 font-medium">{doc}</span>
                                                            </div>
                                                            <a
                                                                href={getDocumentLink(doc, year, meetingName)}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <Download className="h-3 w-3" />
                                                                Download
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    // Enhanced Quality Activities Dropdown with table structure
    const QualityActivitiesDropdown = ({ title, data, openYear, setOpenYear, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, activities]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => setOpenYear(openYear === year ? null : year)}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-blue-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    {activities.length} activities
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-blue-600" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-blue-600" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50">
                                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                                    <div className="grid grid-cols-12 gap-4 p-4">
                                        <div className="col-span-1 font-semibold text-sm">S. No.</div>
                                        <div className="col-span-7 font-semibold text-sm">Name of quality initiative by IQAC</div>
                                        <div className="col-span-4 font-semibold text-sm">Collaborating Organization/Institute</div>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {activities.map((activity, idx) => (
                                        <div key={idx} className="grid grid-cols-12 gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group">
                                            <div className="col-span-1 flex items-center">
                                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <div className="col-span-7 flex items-center">
                                                <div className="flex items-start gap-3">
                                                    <Award className="h-4 w-4 text-blue-500 group-hover:text-blue-600 mt-1 flex-shrink-0" />
                                                    <span className="font-medium text-gray-800 group-hover:text-gray-900 text-sm leading-relaxed">{activity.name}</span>
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex items-center">
                                                <div className="flex items-start gap-2">
                                                    <Users className="h-4 w-4 text-purple-500 group-hover:text-purple-600 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700 group-hover:text-gray-800 text-sm leading-relaxed">{activity.organization}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const ModernDoubleDropdown = ({ title, data, openYear, setOpenYear, openItem, setOpenItem, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => {
                                setOpenYear(openYear === year ? null : year);
                                setOpenItem(null);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-purple-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    {items.length} items
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-purple-600 transition-transform duration-200" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-purple-600 transition-transform duration-200" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-purple-50 space-y-3">
                                <div className="py-2">
                                    {items.map((item, idx) => (
                                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
                                            <button
                                                type="button"
                                                className="w-full text-left p-4 text-gray-700 hover:bg-purple-50 focus:outline-none flex justify-between items-center group"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenItem(openItem === `${year}-${idx}` ? null : `${year}-${idx}`);
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <FileText className="h-4 w-4 text-purple-500 group-hover:text-purple-600" />
                                                    <span className="font-medium">{item}</span>
                                                </div>
                                                {openItem === `${year}-${idx}` ? (
                                                    <ChevronDown className="h-4 w-4 text-purple-500" />
                                                ) : (
                                                    <ChevronRight className="h-4 w-4 text-purple-500" />
                                                )}
                                            </button>
                                            {openItem === `${year}-${idx}` && (
                                                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-gray-200">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-1">
                                                            <p className="text-sm text-gray-600 mb-3">
                                                                Access and download the complete document for "{item}".
                                                                This document contains detailed information and official records.
                                                            </p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                                                <CheckCircle className="h-3 w-3 text-green-500" />
                                                                <span>Verified Document</span>
                                                                <span>•</span>
                                                                <span>Last Updated: {year}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <a
                                                            href={getFDPDocumentLink(item, year)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Download className="h-4 w-4" />
                                                            Download PDF
                                                        </a>
                                                        <a
                                                            href={getFDPDocumentLink(item, year)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                            Preview
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const ModernTable = ({ title, data, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                    <div className="grid grid-cols-12 gap-4 p-6">
                        <div className="col-span-1 font-semibold">S. No.</div>
                        <div className="col-span-8 font-semibold">Document</div>
                        <div className="col-span-3 font-semibold text-center">Action</div>
                    </div>
                </div>
                <div className="divide-y divide-gray-100">
                    {data.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-12 gap-4 p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group">
                            <div className="col-span-1 flex items-center">
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="col-span-8 flex items-center">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-blue-500 group-hover:text-blue-600" />
                                    <span className="font-medium text-gray-800 group-hover:text-gray-900">{item}</span>
                                </div>
                            </div>
                            <div className="col-span-3 flex justify-center">
                               <a
                                    href={getTableDocumentLink(item)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Download className="h-4 w-4" />
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const SimpleDropdown = ({ title, data, openYear, setOpenYear, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => setOpenYear(openYear === year ? null : year)}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-purple-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    {items.length} items
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-purple-600" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-purple-600" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-purple-50">
                                {items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-4 w-4 text-purple-500" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                        <a
                                            href={getSimpleDocumentLink(item, year)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Download className="h-4 w-4" />
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Header />
            <BreadCrumb
                title="IQAC"
                description="Internal Quality Assurance Cell - Enhancing educational standards and academic excellence at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'IQAC', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-8 py-4 mb-6">
                        <Award className="h-8 w-8 text-blue-500" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Excellence in Quality Assurance
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Internal Quality <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Assurance Cell</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fostering a culture of excellence and continuous improvement in educational standards at PIET
                    </p>
                </div>

                {/* About IQAC - Enhanced */}
                <div className="mb-16">
                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-4xl font-bold text-primary">
                                About IQAC
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                The Internal Quality Assurance Cell (IQAC) of Poornima Institute of Engineering and Technology, Jaipur was established in <strong>2018</strong> to enhance teaching-learning quality and sustain the institution's performance. The IQAC focuses on fostering a culture of belongingness and stakeholder participation in all activities.
                            </p>
                            <p className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                                The institute's vision emphasizes <strong>"Pursuit of Excellence in Education,"</strong> followed by Research and Entrepreneurship. The institution practices outcome-based education, student-centric experimental learning, participative learning, and problem-solving methodologies to improve learning experiences.
                            </p>
                            <p className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                The IQAC monitors academic activities, channels efforts, and institutionalizes good practices towards academic excellence. The IQAC includes the head of the institution, senior faculty members, distinguished educationalists, industry experts, local management representatives, and stakeholders.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To practice benchmarks and sustainable quality mechanism in academic and research initiative and process.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Mission</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To be the driving force for enhancing quality and channelize efforts towards academic excellence.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To establish student Learning-Centric environment by use of ICT tools for teaching and learning process.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To assess the progress through audit system and ensure transparent operations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To ensure adequacy of support structure and build association with stakeholders.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* IQAC Strategies and Functions - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                                <Target className="h-6 w-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">IQAC Strategies</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            {[
                                'Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks',
                                'The relevance and quality of academic and research programmes',
                                'Equitable access to and affordability of academic programmes',
                                'Optimization and integration of modern methods of teaching and learning',
                                'The credibility of evaluation procedures',
                                'Ensuring the adequacy, maintenance and proper allocation of support structure'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl">
                                <BookOpen className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">IQAC Functions</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            {[
                                'Development and application of quality benchmarks/parameters',
                                'Facilitating the creation of a learner-centric environment',
                                'Arrangement for feedback response from stakeholders',
                                'Dissemination of information on various quality parameters',
                                'Organization of workshops, seminars on quality related themes',
                                'Documentation of various programs/activities leading to quality improvement',
                                'Development and maintenance of institutional database through MIS'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tables with modern design */}
                <ModernTable title="Quality Policy" data={['Quality Policy']} icon={FileText} />
                <ModernTable title="IQAC Constitution" data={iqacConstitution} icon={Users} />
                <ModernTable title="IQAC Handbook" data={['IQAC Handbook']} icon={BookOpen} />
                <ModernTable title="IQAC Initiatives" data={iqacInitiatives} icon={Target} />
                <ModernTable title="Institute Perspective Plan" data={['Institute Perspective Plan']} icon={FileText} />

                {/* Enhanced Triple Nested Dropdown for IQAC Meetings */}
                <TripleNestedDropdown 
                    title="IQAC Meetings & Action Taken Reports"
                    data={iqacMeetingsData}
                    openYear={openMeetingsYear}
                    setOpenYear={setOpenMeetingsYear}
                    openSubItem={openMeetingsSubItem}
                    setOpenSubItem={setOpenMeetingsSubItem}
                    icon={Users}
                />

                {/* Enhanced Quality Activities with table structure */}
                <QualityActivitiesDropdown 
                    title="IQAC Quality Activities"
                    data={iqacQualityActivities}
                    openYear={openQualityYear}
                    setOpenYear={setOpenQualityYear}
                    icon={Award}
                />

                <ModernTable title="Annual Quality Assurance Report (AQAR)" data={aqarReports} icon={FileText} />
                <ModernTable title="Strategic Development Plan" data={strategicPlans} icon={Target} />
                <ModernTable title="Feedback Policy" data={['Feedback Policy']} icon={FileText} />
                <ModernTable title="Feedback Forms" data={feedbackForms} icon={FileText} />
                <ModernTable title="Feedback Analysis & ATR" data={feedbackAnalysis} icon={FileText} />
                <ModernTable title="Students Satisfaction Survey" data={studentSurveys} icon={Users} />

                <ModernDoubleDropdown 
                    title="FDP's/Workshops for Faculty & Staff"
                    data={fdpWorkshopsData}
                    openYear={openFDPYear}
                    setOpenYear={setOpenFDPYear}
                    openItem={openFDPItem}
                    setOpenItem={setOpenFDPItem}
                    icon={BookOpen}
                />

                <SimpleDropdown 
                    title="Academic Calendars"
                    data={academicCalendars}
                    openYear={openCalendarYear}
                    setOpenYear={setOpenCalendarYear}
                    icon={Calendar}
                />

                <ModernTable title="Academic & Administrative Audit" data={academicAudits} icon={FileText} />

                <SimpleDropdown 
                    title="Environment Audits Certificates"
                    data={environmentAuditCertificates}
                    openYear={openEnvCertYear}
                    setOpenYear={setOpenEnvCertYear}
                    icon={Award}
                />

                <SimpleDropdown 
                    title="Environment Audits Reports"
                    data={environmentAuditReports}
                    openYear={openEnvReportYear}
                    setOpenYear={setOpenEnvReportYear}
                    icon={FileText}
                />

                <ModernTable title="Best Practices" data={bestPractices} icon={Award} />
                <ModernTable title="Best Practices Evidence" data={bestPracticesEvidence} icon={FileText} />
                <ModernTable title="Institute Distinctiveness" data={['Institute Distinctiveness']} icon={Award} />
                <ModernTable title="Institute Distinctiveness Evidences" data={['Institute Distinctiveness Evidences']} icon={FileText} />
                <ModernTable title="Green Initiatives" data={['Green Initiatives']} icon={Award} />
                <ModernTable title="Events on Green Practices" data={['Events on Green Practices']} icon={FileText} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IQACPage;