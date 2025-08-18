import React from "react";
import LazyImage from "./LazyImage";

interface MessageProps {
    title: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
}

const Message: React.FC<MessageProps> = ({
    title,
    content,
    imageUrl,
    imageAlt,
}) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-primary to-secondary p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-white/30 rounded"></div>
                </div>

                <div className="p-8">
                    {/* Mobile view - Image above text */}
                    <div className="block md:hidden mb-8">
                        <div className="flex justify-center">
                            <LazyImage
                                src={imageUrl}
                                alt={imageAlt}
                                className="max-w-sm h-auto rounded-xl border-2 border-primary"
                            />
                        </div>
                    </div>

                    {/* Desktop view - Text wraps around image */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <div className="hidden md:block float-left mr-8 mb-0">
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-72 h-auto rounded-xl border border-primary"
                            />
                        </div>
                        {content &&
                            content.split("\n").map(
                                (paragraph, index) =>
                                    paragraph.trim() && (
                                        <p
                                            key={index}
                                            className="mb-6 text-justify leading-7 text-gray-600"
                                        >
                                            {paragraph}
                                        </p>
                                    ),
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
