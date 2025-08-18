import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallbackSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/api/placeholder/400/300',
  fallbackSrc = '/images/placeholder.jpg'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const maxRetries = 2;

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    setError(false);
  };

  const handleError = () => {
    if (retryCount < maxRetries && currentSrc === src) {
      // Try fallback src
      setCurrentSrc(fallbackSrc);
      setRetryCount(prev => prev + 1);
    } else if (retryCount < maxRetries && currentSrc === fallbackSrc) {
      // Try placeholder
      setCurrentSrc(placeholder);
      setRetryCount(prev => prev + 1);
    } else {
      setError(true);
      setIsLoaded(false);
    }
  };

  // Reset when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setError(false);
    setIsLoaded(false);
    setRetryCount(0);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center p-4">
            <div className="mb-2 text-2xl">📷</div>
            <div>Image unavailable</div>
          </div>
        </div>
      )}

      {isInView && !error && (
        <img
          src={currentSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default LazyImage;