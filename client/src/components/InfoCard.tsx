
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface InfoCardProps {
    title: string;
    iconClass: string;
    content: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, iconClass, content }) => {
    return (
        <Card className="border shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4 ">
                <i className={`${iconClass} text-xl`}></i>
                <CardTitle className="text-primary">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-neutral-700 leading-relaxed text-base space-y-2">{content}</div>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
