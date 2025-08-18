import React from "react";
import LazyImage from "./LazyImage";

interface IntroductionSectionProps {
    heading: React.ReactNode; // allow JSX in heading too, optional
    paragraphs: React.ReactNode[]; // accept JSX nodes here
    images: { src: string; alt: string }[];
    reverse?: boolean; // new prop to reverse content and image positions
    className?: string;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
    heading,
    paragraphs,
    images,
    reverse = false,
    className = "",
}) => {
    return (
        <section className={` dark:bg-gray-900 ${className}`}>
            <div
                className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl 
          lg:grid lg:grid-cols-2 lg:py-16 lg:px-6
          ${reverse ? "lg:grid-flow-col-dense" : ""}`}
            >
                {/* Content block */}
                <div
                    className={`${reverse ? "lg:col-start-2" : "lg:col-start-1"}  sm:text-lg dark:text-gray-400`}
                >
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {heading}
                    </h2>
                    {paragraphs.map((content, i) => (
                        <p key={i} className={i === paragraphs.length - 1 ? "" : "mb-4"}>
                            {content}
                        </p>
                    ))}
                </div>

                {/* Images block */}
                <div
                    className={`${reverse ? "lg:col-start-1" : "lg:col-start-2"} grid gap-4 mt-8 ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                        }`}
                >
                    {images.map((image, i) => (
                        <LazyImage
                            key={i}
                            className={`w-full rounded-lg ${images.length > 1 && i === 1 ? "mt-4 lg:mt-10" : ""
                                }`}
                            src={image.src}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
