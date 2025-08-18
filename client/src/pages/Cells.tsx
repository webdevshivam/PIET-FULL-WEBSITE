import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

interface CellsCommittees {
    sno: number;
    name: string;
    download: JSX.Element;
}

const Cells = () => {
    const [cellsCommittees, setCellsCommittees] = useState<CellsCommittees[]>([]);
    const [loading, setLoading] = useState(true);

    const documentColumns = [
        { label: 'S. No', key: 'sno' },
        { label: 'Committee/Cell', key: 'name' },
        { label: 'Download', key: 'download' }
    ];

    useEffect(() => {
        const fetchCellsCommittees = async () => {
            try {
                const response = await fetch('/api/cells-committees');
                const data = await response.json();

                if (data.success && data.data) {
                    const formattedData = data.data.map((item: any, index: number) => ({
                        sno: index + 1,
                        name: item.name,
                        download: (
                            <a href={item.pdfUrl} download target="_blank" rel="noopener noreferrer">
                                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                                    <i className="fas fa-download"></i> Download
                                </button>
                            </a>
                        )
                    }));
                    setCellsCommittees(formattedData);
                }
            } catch (error) {
                console.error('Error fetching cells & committees:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCellsCommittees();
    }, []);

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Cells and Committees"
                description="Discover our institutional cells and committees that ensure academic excellence and student welfare."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Administration', href: '#' },
                    { label: 'Cells and Committees', isCurrent: true },
                ]}
            />
            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Cells and Committees</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>

                {loading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : cellsCommittees.length > 0 ? (
                    <DynamicTable columns={documentColumns} data={cellsCommittees} />
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-600">No cells and committees data available at the moment.</p>
                    </div>
                )}
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default Cells