// Checklist.tsx
import React from 'react';
import ChecklistItem from './ChecklistItem';

interface ChecklistProps {
    items: string[];
}

const Checklist: React.FC<ChecklistProps> = ({ items }) => {
    return (
        <ul className="list-none space-y-3 mt-4">
            {items.map((item, index) => (
                <ChecklistItem key={index} text={item} />
            ))}
        </ul>
    );
};

export default Checklist;
