// components/FacultySwiper.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProfileCard from "@/components/ProfileCard";
import "./FacultySwiper.css"; // We'll define styles here

interface FacultyProfile {
    imageSrc: string;
    name: string;
    gender: string;
    designation: string;
}

interface FacultySwiperProps {
    profiles: FacultyProfile[];
    slidesPerView?: number;
    spaceBetween?: number;
    className?: string;
    autoplayDelay?: number;
}

const FacultySwiper: React.FC<FacultySwiperProps> = ({
    profiles,
    slidesPerView = 3,
    spaceBetween = 30,
    className = "",
    autoplayDelay = 3000,
}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView },
            }}
            className={`faculty-swiper ${className}`}
        >
            {profiles.map((profile, idx) => (
                <SwiperSlide key={idx}>
                    <ProfileCard
                        imageSrc={profile.imageSrc}
                        name={profile.name}
                        gender={profile.gender}
                        designation={profile.designation}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FacultySwiper;
