

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LazyImage from "./LazyImage";

interface ImageCardProps {
    title: string;
    imageUrl: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Card
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer border border-primary shadow-md hover:shadow-lg transition-shadow duration-300"
            >
                <CardHeader>
                    <CardTitle className="text-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <LazyImage
                        src={imageUrl}
                        alt={title}
                        className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                </CardContent>
            </Card>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div
                        className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        &times;
                    </div>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-w-full max-h-full object-contain rounded"
                    />
                </div>
            )}
        </>
    );
};

export default ImageCard;
