import React from "react";
import LazyImage from "./LazyImage";

interface InfoCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
}

const FacilitiesCard: React.FC<InfoCardProps> = ({ title, description, imageUrl, linkUrl }) => {
    return (
        <div
            className="
        max-w-sm border border-primary rounded-lg shadow-md
        bg-white dark:bg-gray-800 dark:border-gray-700
        transform transition-transform duration-300 ease-in-out
        hover:shadow-xl hover:scale-[1.03]
        overflow-hidden
      "
        >
            <a href={linkUrl} className="block overflow-hidden rounded-t-lg">
                <LazyImage
                    className="w-full h-52 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    src={imageUrl}
                    alt={title}
                />
            </a>
            <div className="p-6">
                <a href={linkUrl} className="block">
                    <h5 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:text-primary transition-colors duration-300">
                        {title}
                    </h5>
                </a>
                <p className="mb-4 text-gray-700 dark:text-gray-400 text-base leading-relaxed">{description}</p>


            </div>
        </div>
    );
};

export default FacilitiesCard;
