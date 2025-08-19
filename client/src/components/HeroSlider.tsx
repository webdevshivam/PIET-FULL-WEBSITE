import { useSlider } from "@/hooks/use-slider";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Banner {
  _id: string;
  title: string;
  imageUrl: string;
  priority: number;
  isActive: boolean;
}

export default function HeroSlider() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { currentSlide, goToSlide, nextSlide, prevSlide } = useSlider({
    totalSlides: banners.length,
    autoPlayInterval: 6000,
  });

  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideContainerRef.current) {
      const slideHeight = window.innerWidth <= 768 ? "400px" : "560px";
      slideContainerRef.current.style.height = slideHeight;
    }
  }, []);

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/banners');

      if (!response.ok) {
        throw new Error('Failed to fetch banners');
      }

      const data = await response.json();

      // Banners are already filtered and sorted by the API
      setBanners(data.data);
    } catch (error) {
      console.error('Error loading banners:', error);
      setError('Failed to load banners');
    } finally {
      setIsLoading(false);
    }
  };

  // Show skeleton loading while fetching banners
  if (isLoading) {
    return (
      <section className="hero-slider relative overflow-hidden">
        <div ref={slideContainerRef} className="slider-container h-full">
          <div className="h-full bg-gray-200 relative min-h-[400px] md:min-h-[560px]">
            <Skeleton className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p>Loading banners...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error or fallback if no banners
  if (error || banners.length === 0) {
    return (
      <section className="hero-slider relative overflow-hidden">
        <div ref={slideContainerRef} className="slider-container h-full">
          <div className="h-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center min-h-[400px] md:min-h-[560px]">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Welcome to PIET</h2>
              <p className="text-xl">Poornima Institute of Engineering & Technology</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-slider relative overflow-hidden">
      <div ref={slideContainerRef} className="slider-container h-full mt-24">
        {banners.map((banner, index) => (
          <div
            key={banner._id}
            className={`slide h-full bg-cover bg-center bg-no-repeat absolute inset-0 transition-all duration-1000 ${index === currentSlide
                ? "opacity-100 z-10 scale-100"
                : "opacity-0 z-0 scale-105"
              }`}
            style={{ 
              backgroundImage: `url('${banner.imageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >


            {/* Banner title overlay */}

          </div>
        ))}

        {/* Show navigation only if there are multiple banners */}
        {banners.length > 1 && (
          <>
            {/* Slider Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-primary/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-primary hover:bg-primary/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Slider Dots Navigation */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 shadow-md ${index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-white/80 hover:bg-white border border-gray-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}