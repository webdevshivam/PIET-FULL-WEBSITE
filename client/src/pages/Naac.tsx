import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";

interface Column<T> {
    label: string;
    key: keyof T;
}

interface NaacFirstCycleRow {
    sno: number;
    name: string;
    download: React.ReactNode;
}

const naacFirstCycleColumns: Column<NaacFirstCycleRow>[] = [
    { label: "S. No", key: "sno" },
    { label: "Name", key: "name" },
    { label: "Download", key: "download" },
];

const naacFirstCycleData: NaacFirstCycleRow[] = [
    {
        sno: 1,
        name: "NAAC Certificate",
        download: (
            <a
                href="https://drive.google.com/file/d/1fJcFEU1aiHIiVjM0in0Nyagww5LpAKwo/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 2,
        name: "NAAC Score Card",
        download: (
            <a
                href="/downloads/naac-first-cycle-score-card.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
    {
        sno: 3,
        name: "NAAC SSR Report (Second Cycle)",
        download: (
            <a
                href="https://drive.google.com/file/d/174GPWntu1bvNlEVsukp_hNGaNAqCNcmN/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        ),
    },
];

const NaacFirstCycle: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="NAAC - First Cycle"
                description="Download the NAAC Certificate, Score Card, and SSR Report from the first cycle of accreditation."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "NAAC - First Cycle", isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    NAAC First Cycle Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable
                    columns={naacFirstCycleColumns}
                    data={naacFirstCycleData}
                />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default NaacFirstCycle;
