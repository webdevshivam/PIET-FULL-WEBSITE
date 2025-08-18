import { useSlider } from "@/hooks/use-slider";
import { useRef } from "react";
import LazyImage from "./LazyImage";

interface SimpleImageSliderProps {
    images: string[];
    autoPlayInterval?: number;
    altTexts?: string[];
    aspectRatio?: string; // optional aspect ratio (e.g., '16/9' or '4/3')
}

export default function SimpleImageSlider({
    images,
    autoPlayInterval = 6000,
    altTexts = [],
    aspectRatio = "16/9", // default aspect ratio
}: SimpleImageSliderProps) {
    const { currentSlide, goToSlide, nextSlide, prevSlide } = useSlider({
        totalSlides: images.length,
        autoPlayInterval,
    });

    const slideContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="image-slider relative overflow-hidden w-full">
            <div
                ref={slideContainerRef}
                className="slider-container relative w-full"
                style={{ aspectRatio }} // CSS aspect-ratio handles height automatically
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`slide absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                            }`}
                    >
                        <LazyImage
                            src={src}
                            alt={altTexts[index] || `Slide image ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                    aria-label="Previous slide"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                    aria-label="Next slide"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${index === currentSlide ? "bg-secondary w-8" : "bg-white/60 hover:bg-white/80"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
