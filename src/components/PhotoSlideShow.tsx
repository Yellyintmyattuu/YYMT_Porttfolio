import React, { useState, useEffect } from 'react';

interface PhotoSlideshowProps {
  photos: string[];
  className?: string;
  autoSlide?: boolean;
  interval?: number;
}

export const PhotoSlideshow: React.FC<PhotoSlideshowProps> = ({
  photos,
  className = '',
  autoSlide = true,
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide || photos.length <= 1) return;

    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(slideTimer);
  }, [autoSlide, interval, photos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!photos.length) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Professional photo ${index + 1}`}
            className={`
              absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}
        
        {/* Gradient Overlay for better contrast with indicators */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20"></div>
      </div>

      {/* Slide Indicators */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300 border border-white/30
                ${index === currentIndex 
                  ? 'bg-yellow-400 shadow-lg' 
                  : 'bg-white/20 hover:bg-white/40'
                }
              `}
            />
          ))}
        </div>
      )}

      {/* Navigation Arrows (appear on hover) */}
      {photos.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => goToSlide((currentIndex - 1 + photos.length) % photos.length)}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => goToSlide((currentIndex + 1) % photos.length)}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
