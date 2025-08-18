import React from 'react';

interface ReportItem {
    title: string;
}

interface StepwiseReportTimelineProps {
    title?: string;
    data: ReportItem[];
}

const StepwiseReportTimeline: React.FC<StepwiseReportTimelineProps> = ({ title, data }) => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            {title && <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>}

            <div className="flex flex-col relative border-l-4 border-primary ml-4">
                {data.map((report, index) => (
                    <div key={index} className="mb-10 ml-8 relative">
                        {/* Circle for step number */}
                        <div className="absolute -left-7 top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm select-none">
                            {index + 1}
                        </div>

                        {/* Title */}
                        <div className="text-lg font-semibold text-slate-900">{report.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepwiseReportTimeline;
