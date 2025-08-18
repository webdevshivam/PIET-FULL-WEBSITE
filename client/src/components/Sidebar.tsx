// Sidebar.tsx
import React from 'react';

export interface SidebarLink {
    label: string;
    href: string;
}

interface SidebarProps {
    links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
    return (
        <aside className="hidden lg:block w-64 bg-white p-6 border-r sticky top-20 h-full">
            <nav className="space-y-4">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="block text-primary hover:text-secondary font-medium transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
