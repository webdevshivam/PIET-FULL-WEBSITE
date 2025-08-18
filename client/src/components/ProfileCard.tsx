// components/ProfileCard.tsx

import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import LazyImage from "./LazyImage";

interface ProfileCardProps {
    imageSrc: string;
    imageAlt?: string;
    name: string;
    gender: string;
    designation: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    imageSrc,
    imageAlt,
    name,
    gender,
    designation,
}) => {
    return (
        <Card className="max-w-sm mx-auto h-full flex flex-col justify-between">
            <CardHeader className="flex flex-col items-center">
                <LazyImage
                    src={imageSrc}
                    alt={imageAlt || name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-center">
                    {designation} • {gender}
                </CardDescription>
            </CardHeader>

            <CardContent>
                {/* You can put more content here if needed */}
            </CardContent>

            <CardFooter className="justify-center">{/* Optional footer */}</CardFooter>
        </Card>
    );
};

export default ProfileCard;
