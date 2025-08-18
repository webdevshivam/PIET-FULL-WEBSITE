import React from "react";

export type LabInfoCardProps = {
    image: string;
    title: string;
    facultyInCharge: string;
    labAssistant: string;
    roomNumber: string;
    syllabusLink: string;
};

const LabInfoCard: React.FC<LabInfoCardProps> = ({
    image,
    title,
    facultyInCharge,
    labAssistant,
    roomNumber,
    syllabusLink,
}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-neutral-200 hover:shadow-lg transition-all duration-300 group">
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
            />
            <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-4 text-primary group-hover:text-secondary transition-colors">
                    {title}
                </h3>

                <ul className="text-sm text-neutral-700 space-y-2 mb-4">
                    <li>
                        <strong>Faculty Lab In-Charge:</strong> {facultyInCharge}
                    </li>
                    <li>
                        <strong>Lab Assistant:</strong> {labAssistant}
                    </li>
                    <li>
                        <strong>Room No.:</strong> {roomNumber}
                    </li>
                </ul>

                <a
                    href={syllabusLink}
                    className="text-secondary hover:text-secondary-dark font-semibold flex items-center transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Syllabus
                    <i className="fas fa-arrow-right ml-2 transition-all duration-200 group-hover:ml-3" />
                </a>
            </div>
        </div>
    );
};

export default LabInfoCard;
