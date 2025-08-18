import React, { useState, useMemo } from 'react';

interface Column {
    label: string;
    key: string;
}

interface DynamicTableProps {
    columns: Column[];
    data: Record<string, React.ReactNode | string | number>[];
}

const ITEMS_PER_PAGE = 8;

const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Filtered data by search
    const filteredData = useMemo(() => {
        const lowerSearch = searchTerm.toLowerCase();
        return data.filter((row) =>
            columns.some(({ key }) =>
                String(row[key]).toLowerCase().includes(lowerSearch)
            )
        );
    }, [searchTerm, data, columns]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    // Paginated data for current page
    const currentPageData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredData.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredData, currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="space-y-4">
            <div className="w-full flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                    className="border border-primary text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <div className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 bg-white">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            {columns.map(({ label, key }) => (
                                <th
                                    key={key}
                                    className="px-6 py-3 text-left text-lg font-bold text-primary border-b border-gray-300 uppercase tracking-wide whitespace-nowrap"
                                >
                                    {label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, idx) => (
                            <tr
                                key={idx}
                                className="cursor-pointer hover:bg-secondary/10 transition-colors"
                            >
                                {columns.map(({ key }) => (
                                    <td
                                        key={key}
                                        className="px-6 py-4 whitespace-nowrap font-medium text-primary border-b border-gray-200"
                                    >
                                        {row[key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {currentPageData.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center py-6 text-primary"
                                >
                                    No matching records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center gap-2 pt-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded-md ${currentPage === i + 1
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DynamicTable;
