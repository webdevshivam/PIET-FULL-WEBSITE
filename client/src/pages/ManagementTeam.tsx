import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import BreadCrumb from "@/components/BreadCrumb";
import DynamicTable from "@/components/DynamicTable ";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";

interface ManagementTeamMember {
    sno: number;
    name: string;
    position: string;
    imageUrl?: string;
}

const ManagementTeam = () => {
    const [managementTeam, setManagementTeam] = useState<
        ManagementTeamMember[]
    >([]);
    const [loading, setLoading] = useState(true);

    const managementColumns = [
        { label: "S. No", key: "sno" },
        { label: "Name", key: "name" },
        { label: "Designation", key: "designation" },
        { label: "Mobile Number", key: "Phone" },
    ];

    useEffect(() => {
        const fetchManagementTeam = async () => {
            try {
                const response = await fetch("/api/management-team");
                const data = await response.json();

                if (data.success && data.data) {
                    const formattedData = data.data.map(
                        (member: any, index: number) => ({
                            sno: index + 1,
                            name: member.name,
                            designation: member.designation,
                            Phone: member.mobileNo,
                        }),
                    );
                    setManagementTeam(formattedData);
                }
            } catch (error) {
                console.error("Error fetching management team:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchManagementTeam();
    }, []);

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Management Team"
                description="Meet our distinguished management team leading Poornima Institute of Engineering & Technology."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Administration", href: "#" },
                    { label: "Management Team", isCurrent: true },
                ]}
            />
            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Management Team
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>

                {loading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : managementTeam.length > 0 ? (
                    <DynamicTable
                        columns={managementColumns}
                        data={managementTeam}
                    />
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-600">
                            No management team data available at the moment.
                        </p>
                    </div>
                )}
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default ManagementTeam;
