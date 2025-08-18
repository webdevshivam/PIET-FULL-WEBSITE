import React from 'react';

interface ReportItem {
    year: string;
    title: string;
    pdfUrl: string;
}

interface ReportTimelineProps {
    title?: string;
    data: ReportItem[];
}

const ReportTimeline: React.FC<ReportTimelineProps> = ({ title, data }) => {
    return (
        <div className="w-full max-w-3xl mx-auto">
            {title && <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>}
            <div className="-my-6">
                {data.map((report, index) => (
                    <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-red-100 rounded-full">
                                {report.year}
                            </time>
                            <div className="text-xl font-bold text-slate-900">{report.title}</div>
                        </div>
                        <a
                            href={report.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-xs px-2 py-1 text-sm mt-2"
                        >
                            <i className="fas fa-file-pdf mr-1 text-xs"></i> View PDF
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReportTimeline;
