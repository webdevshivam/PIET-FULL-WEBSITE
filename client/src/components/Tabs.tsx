import React, { useState } from "react";

export interface TabItem {
    id: string;
    label: string;
    iconClass?: string; // e.g. 'fas fa-user'
    disabled?: boolean;
    content: React.ReactNode;
}

interface TabsProps {
    items: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
    const [activeTab, setActiveTab] = useState(
        items.find((tab) => !tab.disabled)?.id || items[0].id
    );

    const handleClick = (id: string, disabled?: boolean) => {
        if (!disabled) setActiveTab(id);
    };

    return (
        <div className="md:flex">
            {/* Tab Navigation */}
            <ul className="flex flex-col space-y-4 text-sm font-medium text-primary md:me-4 mb-4 md:mb-0 w-full md:w-auto">
                {items.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => handleClick(item.id, item.disabled)}
                            disabled={item.disabled}
                            className={`inline-flex items-center w-full px-4 py-3 rounded-lg transition ${item.disabled
                                    ? "cursor-not-allowed text-gray-400 bg-gray-50 dark:bg-gray-800 dark:text-gray-500"
                                    : activeTab === item.id
                                        ? "bg-primary text-white"
                                        : "bg-gray-50 hover:bg-primary/10 dark:bg-gray-800 dark:hover:bg-primary/10 hover:text-primary"
                                }`}
                        >
                            {item.iconClass && (
                                <i className={`${item.iconClass} me-2 text-inherit`} />
                            )}
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow w-full">
                {items.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;
