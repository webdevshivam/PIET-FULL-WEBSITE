import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';

interface QivDataItem {
    sno: number;
    name: string;
    download: JSX.Element;
}

interface TableColumn {
    label: string;
    key: keyof QivDataItem;
}

const qivColumns: TableColumn[] = [
    { label: 'S. No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

const qivData: QivDataItem[] = [
    {
        sno: 1,
        name: 'QIV Ranking 2023-24',
        download: (
            <a href="https://drive.google.com/file/d/1wcH90Pfz61gbgmL6bPCTxo4Mb0b5zlBg/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'QIV Ranking 2022-23',
        download: (
            <a href="https://drive.google.com/file/d/115_nJi1oEp8tdYvfbM7nGh9_vM-ZLt-Q/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'QIV Ranking 2021-22',
        download: (
            <a href="https://drive.google.com/file/d/1BIiXQWsqN2k4fY7n-ZOd2GCQUZ29mJn5/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'QIV Ranking 2020-21',
        download: (
            <a href="https://drive.google.com/file/d/1_A6IWJyoryIKqxC5e65KeaGo_0uCVn_q/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'QIV Ranking 2019-20',
        download: (
            <a href="https://drive.google.com/file/d/1H8KjVjvcJvUpx3PpILjde3z-XoLp0p9h/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'QIV Ranking 2018-19',
        download: (
            <a href="https://drive.google.com/file/d/1JRENSEMe1JmMt4SNAG34_kUd-DCoq0OV/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];

const QivRankingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="QIV Ranking"
                description="Access the QIV Rankings for the past academic years at Poornima Institute."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'QIV Ranking', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    QIV Rankings
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={qivColumns} data={qivData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default QivRankingPage;
