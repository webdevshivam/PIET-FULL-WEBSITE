import React from 'react';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadCrumbProps {
    title: string;
    description?: string;
    backgroundImage?: string;
    breadcrumbs: {
        label: string;
        href?: string;
        isCurrent?: boolean;
    }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
    title,
    description,
    backgroundImage = 'https://res.cloudinary.com/ddygzamv4/image/upload/v1747648404/gp8krjucihqxre0zs3jl.jpg',
    breadcrumbs,
}) => {
    return (
        <div className="relative mt-16rem">
            <img
                src={backgroundImage}
                alt={`${title} Banner`}
                className="w-full h-[250px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center px-8 md:px-16">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs && breadcrumbs.map((item, index) => (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem>
                                        {item.isCurrent ? (
                                            <BreadcrumbPage className="text-white">{item.label}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={item.href} className="text-white">
                                                {item.label}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">{title}</h1>
                    {description && <p className="text-white/80 mt-2 max-w-xl">{description}</p>}
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;