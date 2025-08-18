import { useState, useEffect, useCallback } from 'react';

interface UseSliderProps {
  totalSlides: number;
  autoPlayInterval?: number;
  initialSlide?: number;
}

export function useSlider({ 
  totalSlides, 
  autoPlayInterval = 5000, 
  initialSlide = 0 
}: UseSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  }, [totalSlides]);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    isPlaying,
    toggleAutoPlay
  };
}
