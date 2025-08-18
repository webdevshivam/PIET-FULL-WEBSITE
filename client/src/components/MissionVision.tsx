import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumb from "./BreadCrumb";

const MissionVision = () => {
  return (
    <>
      {/* Vision Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-eye text-blue-600 text-xl"></i>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              To create knowledge-based society with scientific temper through
              cutting-edge technologies, innovative research and to become
              valuable resource for enriching mankind.
            </p>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-bullseye text-green-600 text-xl"></i>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              To deliver quality technical education through outcome-based
              learning, promote ethical values, and encourage entrepreneurship,
              research, and continuous improvement.
            </p>
          </CardContent>
        </Card>

        {/* Values Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-hand-holding-heart text-red-600 text-xl"></i>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              Integrity, innovation, inclusivity, and social responsibility
              guide our actions and decisions, fostering a culture of trust,
              collaboration, and lifelong learning.
            </p>
          </CardContent>
        </Card>

        {/* Objectives Card */}
        <Card className="animate-scaleUp">
          <CardHeader className="flex flex-row items-center gap-4">
            <i className="fas fa-list-check text-yellow-600 text-xl"></i>
            <CardTitle>Our Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed text-base">
              To equip students with technical knowledge and skills, promote
              industry collaboration, encourage innovation and research, and
              contribute to national development.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MissionVision;
