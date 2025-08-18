import React from "react";
import clsx from "clsx";
import LazyImage from "./LazyImage";

interface OverviewSectionProps {
    title: string;
    subtitle?: string;
    image: {
        src: string;
        alt: string;
        caption?: string;
    };
    reverse?: boolean;
    children: React.ReactNode;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
    title,
    subtitle,
    image,
    reverse = false,
    children,
}) => {
    return (
        <div className="container mx-auto px-4 lg:px-0 relative z-10 my-10">
            <div
                className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    reverse && "lg:flex-row-reverse"
                )}
            >

                <div
                    className={clsx(
                        "animate-slideInLeft",
                        reverse ? "lg:order-last" : "lg:order-first"
                    )}
                >
                    <div className="mb-8">
                        <h2 className="font-heading font-bold text-primary mb-6 leading-tight" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                            {title}
                        </h2>
                        {subtitle && <div className="bg-secondary mb-6" style={{ width: 'clamp(4rem, 8vw, 6rem)', height: '4px' }}></div>}
                    </div>
                    <div className="flex flex-col items-stretch">{children}</div>
                </div>


                <div className="relative animate-slideInRight">
                    <LazyImage
                        src={image.src}
                        alt={image.alt}
                        className="rounded-xl shadow-xl w-full h-auto z-10 relative border border-primary"
                    />
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10 opacity-40"></div>
                    <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-lg -z-10 opacity-40"></div>

                    {image.caption && (
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                            <p className="text-primary font-medium">{image.caption}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OverviewSection;
