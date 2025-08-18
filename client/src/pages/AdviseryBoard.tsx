import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";
import Message from "@/components/Message";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

const AdviseryBoard = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Advisery Boards"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Advisery Boards", isCurrent: true },
                ]}
            />

            <Message
                title="Padma Bhushan Shri D. R. Mehta"
                imageUrl="/images/adviser-board/1.jpg"
                imageAlt="Shri D. R. Mehta"
                content={`Padma Bhushan Shri D. R. Mehta, a top bureaucrat, is a law graduate who studied at Royal Institute of Public Administration, London (UK) and Alfred Sloan School of Management, MIT, Boston (USA).

Shri Mehta joined the Indian Administrative Services in 1961. He was designated on several key level positions both in Govt. of Rajasthan and Govt. of India. He retired from active service as the Chairman of Securities and Exchange Board of India (SEBI), the Regulator of the capital market in India, after holding this post for seven years up to 2002. Before that, Shri Mehta was the Deputy Governor, Reserve Bank of India and the Director General of Foreign Trade, Govt. of India. Earlier he served the Government of India and the State Government of Rajasthan on various important key assignments.

As a social worker, Shri Mehta established an NGO, Bhagwan Mahaveer Viklang Sahayata Samiti, Jaipur in 1975, which provides, cost free artificial limbs, calipers and other aids and appliances to the handicapped. In the last three decades, the Society, of which Shri Mehta is the Founder and Patron, has benefited around 12, 00,000 handicapped including those in 25 other countries.`}
            />

            <Message
                title="Dr. Kanta Ahuja"
                imageUrl="/images/adviser-board/2.jpg"
                imageAlt="Dr. Kanta Ahuja"
                content={`Dr. (Mrs.) Kanta Ahuja, has a brilliant academic career from Delhi, Agra and Michigan Universities. She is an eminent educationalist and economist. She has taught International and development economics at Master's and Research level for almost 30 years. Dr. Kanta Ahuja has been the Vice Chancellor of University of Rajasthan, Jaipur and MDS University, Ajmer. Before that, she served the University of Rajasthan as Principal, Maharani College, Professor and Head, Dept. of Economics, Dean, Faculty of Social Sciences and Director, Social Science Research Centre.

Dr. Ahuja has been founder Member and Hon. Associate Director of Institute of Development Studies, Chairperson of MGD School and visiting professor of Agnes Scott College, Decatur and USA. Presently, she is faculty in international development courses of the Minnesota University.

Dr. Ahuja's knowledge and contributions have been widely recognized by the Govt. of India and nominated her as Director of various public sector banks and Member of a number of committees/councils such as University Grants Commission's Pay Review Committee, the Governing Council for Universities and Colleges in India, Working Group of the National Sample Survey, High Powered Committee on Fertilizer Prices, Expert Group for review of the structure and programs of the National Institute of Rural Development and the National Assessment and Accreditation Council for Universities and Colleges in India. She has been President of Indian Economic Association and Member of the Governing Council of Tata Institute of Social Science Research. SEBI has recently nominated her as public representative on the Board of Jaipur Stock Exchange.`}
            />

            <Message
                title="Dr. S. S. Acharya"
                imageUrl="/images/adviser-board/3.jpg"
                imageAlt="Dr. S. S. Acharya"
                content={`Dr. S. S. Acharya, has Master's and Ph.D. degrees in Agricultural Economics. He studied at Indian Agricultural Research Institute and the Ohio State University, USA. .Dr. Acharya is currently Hon. Professor at the Institute of Development Studies and has been its Director for more than seven years. He has also been the Chairman, Commission for Agricultural Costs and Prices, Govt. of India. Before joining CACP, he was the Professor and Head of the Department of Agricultural Economics of Rajasthan Agricultural University.

In recognition of his professional contributions, Dr. Acharya was awarded Professorial Chair of National Fellow by the Indian Council of Agricultural Research during 1980 to 1985. He has also been the Chairman/ Member of a number of National and State level Commissions and Committees. The American Biographical Research Association has conferred him with Hon. Membership of Gamma Sigma Delta, the Honor Society of Agriculture of USA. Currently, he is Vice President of National Academy of Agricultural Sciences, President of Agricultural Economics Research Association of India and National Coordinator of an International Project on Food Security.

Dr. Acharya has visited more than 20 countries in connection with academic work. He has remained associated as consultant with or as contributor to several international organizations, important among those being USAID, FAO of UN, ILO, UNDP and CGIAR. He participated as Chairman or Keynote Speaker in 227 international, 418 national and 298 state level conferences, seminars, workshops, symposia or dialogues.

Dr. Acharya has written extensively and has to his credit 11 books, 33 chapters in other books, 66 research monographs/reports and 368 research papers and articles.`}
            />

            <Message
                title="Prof. Vishwanath Sinha"
                imageUrl="/images/adviser-board/4.jpg"
                imageAlt="Prof. Vishwanath Sinha"
                content={`Prof. Vishwanath Sinha, MS (Electronics) and D.Sc. Electrical Engineering from University of Ljubljana, Slovenia (erstwhile Yugoslavia), is Professor at Indian Institute of Technology, Kanpur and is currently working as the Director of LNMIT, Jaipur. He has been a Visiting Professor, since 1977, in a number of foreign Universities/Institutions in Germany, Switzerland, USA, Brazil and Yugoslavia. The main areas of his interest are Telematics, Error Control Coding, Satellite Communications and Technical Education.

Prof. Sinha is a fellow of Institution of Electronics and Telecommunication Engineers and Institution of Engineers, India and senior Member of Institute of Electrical and Electronics Engineers, USA. He is also a Life Member of Indian Society for Technical Education. Several awards including S.K. Mitra and J.C. Bose Memorial Awards for best papers presented by him and published in 1976 and 1979 which have recognized his rich knowledge and contribution in engineering.

Prof. Sinha has a long teaching experience at IIT, Kanpur, Brazilian Space Research Institute and University of Puerto Rico and has supervised 36 Ph.D. theses. He has organized different courses for engineering colleges, working engineers and scientists, and also organized a number of national/international conferences. Prof. Sinha has to his credit more than 80 papers published/presented in national/ international journals/ conferences/ seminars. His research activities at IIT, Kanpur and Brazilian Space Research Institute have made notable contribution in various areas including development of Remote Tutor, a product which establishes a Virtual University and provides online interactive teaching tool, Telematics Projects, Graphics and Indian Script Terminal Project, Military Communication Satellite Systems, Systems for Space Telecommunications and Modulation Techniques.

Prof. Sinha endows rich administrative experience in various capacities within and outside the teaching institutes.`}
            />

            <Message
                title="Shri Inderjeet Khanna"
                imageUrl="/images/adviser-board/5.jpg"
                imageAlt="Shri Inderjeet Khanna"
                content={`Shri Inderjeet Khanna, a top bureaucrat, who joined the Indian Administrative Service in 1966. He was the Chief Secretary of the Rajasthan State for 3 years from January 2000 to December 2002. After Retirement from IAS, He held the post of state election commissioner, Rajasthan for 5 years. SEBI has recently nominated him as a public representative for the Board of Jaipur Stock Exchange. Shri Khanna, in his long career, has hold several key level positions in Govt. of Rajasthan and Govt. of India. The assignments assigned to him by the Govt. of India included, Secretary, University Grants Commission, Additional Secretary and later Special Secretary to Govt. of India, Ministry of Finance and Director of Enforcement and Ex-Officio Secretary to Govt. of India, Dept. of Revenue in the State govt. Besides, working in the field administration as District Collector and Magistrate of three districts, he has worked as the head of various Govt. organizations and as Secretary to Government in important departments like Planning, Energy and Finance. As Secretary Planning, he made significant contribution in the formulation of various plans for the development of the State and their close monitoring at the State level.

Shri Inderjeet Khanna has also been the visiting professor of the Indian Institute of Management, Ahmadabad.`}
            />

            <Message
                title="Shri Vinod K. Ladia"
                imageUrl="/images/adviser-board/6.jpg"
                imageAlt="Shri Vinod K. Ladia"
                content={`Shri Vinod K. Ladia, is a torch bearer for Poornima College of Engineering. His vision consistently helps Poornima Group of Colleges to establish its reputation firmly in the world of technical education. He is GOLD MEDALIST in B. Sc. (Textiles) from Technological Institute of Textiles, Bhiwani 1966 and MBA from Indian Institute of Management, Ahmadabad in 1968. In his career, he joined M/s. J.K. Synthetics Ltd., Kota in 1968. His last post held was General Manager Commercial in 1977. In the year 1979, he established Shree Rajasthan Syntex Limited, Dungarpur. He is the Chairman & Managing Director of it. He is associated with many other companies like M/s. Swan Industries Limited, Shree Shyam Industries Pvt. Ltd., V.K. Texchem Pvt. Ltd. and Sumeet Industries Ltd., as a Director.

Mr. Ladia is the Chairman of SRSL Charitable Trust, SRSL Employees Welfare Trust and SRSL Education Society. He is also the Founder member of Lions Charitable Trust and trustee of Shanti Devi Raghunath Prasad Ladia Charitable Trust. Mr. Ladia has visited number of times U.S.A., Europe, South America, China, Pakistan and Far Eastern Countries on business trips. He is recipient of UDYOG PATRA AWARD by the hands of Hon'ble President of India in May, 1987 on the occasion of 9th Economic Development Conference sponsored by Institute of Trade & Industrial Development. He is the president of Indian Spinners Association, Vice Chairman of The Synthetic & Rayon Textile Export Promotion Council, Member of All India Management Association, and Central Excise Advisory Committee & North Zone Insurance Advisory Board. Mr. Ladia is the Ex- Chairman of Confederation of Indian Textile Industry and the Rajasthan Textile Mills Association.`}
            />

            <Message
                title="Dr. S. M. Seth"
                imageUrl="/images/adviser-board/7.png"
                imageAlt="Dr. S. M. Seth"
                content={`Dr. S. M. Seth, a renowned Administrator, Academician and Researcher has been a founding member of Poornima Foundation. He started his journey as founder Principal of its flagship institution named Poornima College of Engineering in the year 2000. Later from the year 2007 he carried the responsibilities of Director General of the Foundation. He has been given the responsibility as Chairman, Poornima Foundation in the year 2009.

In the year 2012, Dr. Seth while being designated as Chairman, PF, was also assigned the prestigious position of Chairperson (Chancellor) of newly established Poornima University by Government of Rajasthan under the aegis of Shanti Education Society.

Under his direction and stewardship over last 17 years, in capacity of Principal, Director General, Chairman, PF, and Chairperson, Poornima University, the Poornima Foundation has made landmark achievements and earned a reputation in academics and professional development of its students.

As a teacher, researcher and administrator, Dr. Seth has excellent academic career in Civil Engineering. He holds a M.E. Degree specializing in Dam Design, Irrigation Engineering and Hydraulics from University of Roorkee in 1965. He did his Ph.D. in Hydrology, as a Commonwealth scholar, from Victoria University of Manchester, UK in 1972. A major part of his teaching experience was at University of Jodhpur and University of Roorkee (now IIT Roorkee). As a teacher, he made significant contributions in development of UNESCO Sponsored P.G. Course in Hydrology at University of Roorkee.`}
            />

            <Footer />
        </div>
    );
};

export default AdviseryBoard;
