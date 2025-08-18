import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';

interface TimesDataItem {
    sno: number;
    name: string;
    download: JSX.Element;
}

interface TableColumn {
    label: string;
    key: keyof TimesDataItem;
}

const timesColumns: TableColumn[] = [
    { label: 'S. No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

const timesData: TimesDataItem[] = [
    {
        sno: 1,
        name: 'Top 170 Engineering Institute Rankings 2023',
        download: (
            <a href="/downloads/times-top-170-engineering-2023.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Times Engineering North Zone',
        download: (
            <a href="/downloads/times-engineering-north-zone.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Top 125 Private Engineering Institute Rankings 2023',
        download: (
            <a href="/downloads/times-top-125-private-engineering-2023.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];

const TimesRankingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="Times Rankings"
                description="Explore the Times Engineering Rankings where Poornima Institute is featured among top institutions."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Times Rankings', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Times Rankings
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={timesColumns} data={timesData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default TimesRankingPage;
