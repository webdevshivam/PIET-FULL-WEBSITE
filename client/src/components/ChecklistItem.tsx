// ChecklistItem.tsx
import React from 'react';

interface ChecklistItemProps {
    text: string;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text }) => {
    return (
        <li className="flex items-center">
            <i className="fas fa-check-circle text-primary mr-2 mt-1"></i>
            <span>{text}</span>
        </li>
    );
};

export default ChecklistItem;
