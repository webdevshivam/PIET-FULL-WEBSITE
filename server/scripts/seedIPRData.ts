
import mongoose from 'mongoose';
import { IPR } from '../models/IPR';
import { config } from 'dotenv';

config();

const iprData = [
  // 2022 Data
  { year: '2022', grantNo: '202241065504', affiliation: 'PIET, Jaipur', title: 'A Smart Evaluation Method Of The Effect Of Economic Development On Crypto-Currency Using Machine Learning Techniques' },
  { year: '2022', grantNo: '202241054495', affiliation: 'PIET, Jaipur', title: 'A Smart Management System For Controlling Medical Robot Beds For Preventing Bedsores Using Artificial Intelligence And Machine Learning' },
  { year: '2022', grantNo: '202241051919', affiliation: 'PIET, Jaipur', title: 'An Intelligent Method For Defect Recognition In Additive Manufacturing Using Image Processing Based On Iot & Ai' },
  { year: '2022', grantNo: '202241042430', affiliation: 'PIET, Jaipur', title: 'An Intelligent System And A Method For Monitoring Laundry Machine Operations Using Machine Learning For Analysis Of Acoustic Transducer Signal Information' },
  { year: '2022', grantNo: '202241026520', affiliation: 'PIET, Jaipur', title: 'Intelligent System For Automatic Penalty On Traffic Rule Violations Based On Blockchain And Machine Learning' },
  { year: '2022', grantNo: '202241025599', affiliation: 'PIET, Jaipur', title: 'A Data Processing Device for Electric Vehicle Based on Iot' },
  { year: '2022', grantNo: '202241020511', affiliation: 'PIET, Jaipur', title: 'Integrated library management system for various public and private institutions based on iot sensor' },
  { year: '2022', grantNo: '202231005248', affiliation: 'PIET, Jaipur', title: 'Intelligent System For Automatic Outdoor Street Lighting Fault Detection And Management System Based On Iot And Machine Learning' },
  { year: '2022', grantNo: '202211074981', affiliation: 'PIET, Jaipur', title: 'Development Of An Intelligent Transistor System For Smart Cities To Provide Commercial Parking Spaces Using Artificial Intelligence And Machine Learning Techniques' },
  { year: '2022', grantNo: '202211067502', affiliation: 'PIET, Jaipur', title: 'System And Model For Development Of Energy Efficient Routing Protocol For Wireless Sensor Networks For Enhancement Of Sensor Node And Battery Lifetime' },
  { year: '2022', grantNo: '202211066190', affiliation: 'PIET, Jaipur', title: 'An Artificial Intelligence Based System For Providing Empirical Investigation Of The Determinants Of Corporate Capital Structure Decisions And Method Thereof' },
  { year: '2022', grantNo: '202211039557', affiliation: 'PIET, Jaipur', title: 'Identification And Mitigation Of Attacks In Wireless Sensor Network Using Trust Based Blockchain Mechanism' },
  { year: '2022', grantNo: '202211023593', affiliation: 'PIET, Jaipur', title: 'Data Science based Machine Learning Model on Economic Applications' },
  { year: '2022', grantNo: '202211022102', affiliation: 'PIET, Jaipur', title: 'Systems and Methods for Monitoring and Diagnostics of Cyber/Network Security Remotely Using Machine Learning Feature' },
  { year: '2022', grantNo: '202211005093', affiliation: 'PIET, Jaipur', title: 'Method for cursor mention control calibration and object selection using Deep Learning' },
  { year: '2022', grantNo: '202211070762', affiliation: 'PIET, Jaipur', title: 'Enhancement in Navigation system with Verbalbriefing and short video of important destinations' },
  { year: '2022', grantNo: '202211070247', affiliation: 'PIET, Jaipur', title: 'QR based Automated System for the Collection & Donation of Residuals Medicine Stocks' },
  { year: '2022', grantNo: '202211069267', affiliation: 'PIET, Jaipur', title: 'Security Improvement In Storage Of Dockers Containers On Cloud Server' },
  { year: '2022', grantNo: '202211068998', affiliation: 'PIET, Jaipur', title: 'An Intelligent System And Method For Smart Cities To Provide Parking Solutions By Leasing Out Personal And Commercial Parking Spaces Using Artificial Intelligence' },
  { year: '2022', grantNo: '202211067851', affiliation: 'PIET, Jaipur', title: 'An Intelligent System And Method For Developing Iot Based Virtual Doctor' },
  { year: '2022', grantNo: '202211067504', affiliation: 'PIET, Jaipur', title: 'System And Model For Development Of Energy Efficient Routing Protocol For Wireless Sensor Networks For Enhancement Of Sensor Node And Battery Lifetime' },
  { year: '2022', grantNo: '202211067216', affiliation: 'PIET, Jaipur', title: 'Reduced Switch Multilevel Inverter For Improved Power Quality Based On Solar Photovoltaic Systems' },
  { year: '2022', grantNo: '202211065546', affiliation: 'PIET, Jaipur', title: 'Automatic Signature Verification To Maintain Social Distancing' },
  { year: '2022', grantNo: '202211062722', affiliation: 'PIET, Jaipur', title: 'An Intelligent System For Peer-To-Peer Wireless Power Transfer Among Ubiquitous Devices' },
  { year: '2022', grantNo: '202211062261', affiliation: 'PIET, Jaipur', title: 'An Intelligent System & Method For Autonomous Sunlight Reflector And Moisture Level Indicator With Nutrient Provider' },
  { year: '2022', grantNo: '202211060618', affiliation: 'PIET, Jaipur', title: 'An Intelligent Management System For Foul Detection And Performance Analysis In Football Matches Using Artificial Intelligence With Machine Learning Techniques' },
  { year: '2022', grantNo: '202211059380', affiliation: 'PIET, Jaipur', title: 'System & Method For Intelligent Virtual Stock Trading And Management Using Machine Learning Approach' },
  { year: '2022', grantNo: '202211007358', affiliation: 'PIET, Jaipur', title: 'Design and Implementation of Wireless Sensor Network Architecture for Leak Detection and Monitoring in Gas Supply Distribution Network' },
  { year: '2022', grantNo: '202211007357', affiliation: 'PIET, Jaipur', title: 'Novel Resin Based Dental Composites filled with Wollastonite and Nano Alumina' },
  { year: '2022', grantNo: '202211007356', affiliation: 'PIET, Jaipur', title: 'Automated Time table Generator Using mc learning' },
  { year: '2022', grantNo: '202211007355', affiliation: 'PIET, Jaipur', title: 'Energy Aware Aggregate and Clustering Node Rotation with Sink Relocation in MANET' },
  { year: '2022', grantNo: '202211007354', affiliation: 'PIET, Jaipur', title: 'Manufacture of highly efficient & low-cost solar cells using Perovskites based on TiO2 nanostructure' },
  { year: '2022', grantNo: '202211007353', affiliation: 'PIET, Jaipur', title: 'Skin Disease Identification Using Machine Learning Algorithms (SVM, KNN and RNN)' },
  { year: '2022', grantNo: '202211007352', affiliation: 'PIET, Jaipur', title: 'An Intelligent System for Automated Text Caption Generation from Medical Images Using Image Processing' },
  { year: '2022', grantNo: '202211007351', affiliation: 'PIET, Jaipur', title: 'An Intelligent Iot-Based Solar Tracking System with Deep Learning Analysis and Method for its Application' },
  { year: '2022', grantNo: '202211007350', affiliation: 'PIET, Jaipur', title: 'System & Method for Intelligent Virtual Stock Trading and Management Using Machine Learning Approach' },
  { year: '2022', grantNo: '202211007349', affiliation: 'PIET, Jaipur', title: 'Time, Service and Energy Based Credit Token System in BlockChain Applicable in Indian Urban Areas' },
  { year: '2022', grantNo: '202231062750', affiliation: 'PIET, Jaipur', title: 'Development Of A Smart Vehicle Horn management System Based On Artificial Intelligence And Machine Learning for Noise Pollution Control' },
  { year: '2022', grantNo: '372899-001', affiliation: 'PIET, Jaipur', title: 'Dr. Pankaj Rahi' },
  
  // 2021 Data
  { year: '2021', grantNo: '202111011259', affiliation: 'PIET, Jaipur', title: 'Method and system for modeling of scalable cloud environment' },
  { year: '2021', grantNo: '202111009955', affiliation: 'PIET, Jaipur', title: 'Development of Scene Perception System for Visually impaired People using IoT based System' },
  { year: '2021', grantNo: '202111056332', affiliation: 'PIET, Jaipur', title: 'Best HR Practices in an Organized Retail Sector' },
  { year: '2021', grantNo: '202111058507', affiliation: 'PIET, Jaipur', title: 'Cushioned Piled Raft foundation to protect buildings: Novel composite piled raft' },
  { year: '2021', grantNo: '2021105547', affiliation: 'PIET, Jaipur', title: 'Smart and Intelligent Medical Bed for Child Patient Care' },
  { year: '2021', grantNo: '2021105487', affiliation: 'PIET, Jaipur', title: 'Novel Granular piles installation process in soft clays with the calculation using design Charts' },
  { year: '2021', grantNo: '2021104892', affiliation: 'PIET, Jaipur', title: 'Method of Garbage Monitoring and Cleaning Process by IoT' },
  
  // 2020 Data
  { year: '2020', grantNo: '202011008465', affiliation: 'PIET, Jaipur', title: 'Method of food delivery for matching supply and demand of food donators and food receivers' },
  { year: '2020', grantNo: '202011009938', affiliation: 'PIET, Jaipur', title: 'Method of obstacles detection and control of robotic wheelchair' },
  { year: '2020', grantNo: '202011022112', affiliation: 'PIET, Jaipur', title: 'VITRO: Virtual Trial Room' },
  { year: '2020', grantNo: '202011025393', affiliation: 'PIET, Jaipur', title: 'A Real Time Drowsiness Detection using Machine Learning & Artificial Intelligence' },
  { year: '2020', grantNo: '202041017124', affiliation: 'PIET, Jaipur', title: 'Wearable Device For Monitor And Control The Mental Stress During Isolation' },
  { year: '2020', grantNo: '202041048753', affiliation: 'PIET, Jaipur', title: 'Method for semantic segmentation of digital image in electronic device interface using machine learning' },
  
  // 2019 Data
  { year: '2019', grantNo: '201911017877', affiliation: 'PIET, Jaipur', title: 'System Of Power Management With Maximum Power Point Tracking (Mppt) Control Of Large-Scale Grid Connected Inverter For Photovoltaic Applications' },
  { year: '2019', grantNo: '201911031482', affiliation: 'PIET, Jaipur', title: 'System of smart grid network for electricity supply in smart cities using big data computing' },
  { year: '2019', grantNo: '201921031179', affiliation: 'PIET, Jaipur', title: 'Machine-learning based method for optimization of power management in renewable and nonrenewable energy resources' },
  { year: '2019', grantNo: '201941029525', affiliation: 'PIET, Jaipur', title: 'System of heat sink motor control for consumer electronic devices' }
];

async function seedIPRData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect('mongodb+srv://helloyourwebsitedesign:NQMOEQPEOynSzjNk@cluster0.0bhjtbu.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0');
    
    console.log('Connected to MongoDB. Clearing existing IPR data...');
    await IPR.deleteMany({});
    
    console.log('Inserting new IPR data...');
    const insertedData = await IPR.insertMany(iprData);
    
    console.log(`Successfully inserted ${insertedData.length} IPR records!`);
    console.log('IPR data seeding completed successfully!');
    
  } catch (error) {
    console.error('Error seeding IPR data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Database connection closed.');
  }
}

seedIPRData();
