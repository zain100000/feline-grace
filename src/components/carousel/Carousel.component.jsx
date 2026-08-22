/**
 * @file Carousel.component.jsx
 * @module Components/HeroCarousel
 * @description A full-screen hero carousel component with auto-sliding, navigation controls, and elegant animations.
 * Auto-slides every 5 seconds with infinite loop.
 */

import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../../constants/data.constant.hero";
import Button from "../../utils/button/Button.util";

const HeroCarousel = ({ onExplore }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  /**
   * Navigate to the next slide
   * @function next
   */
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  /**
   * Navigate to the previous slide
   * @function prev
   */
  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  /**
   * Auto-slide effect
   * @effect
   * @description Automatically advances to the next slide every 5 seconds unless paused
   */
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Don't start if paused
    if (isPaused) return;

    // Start new interval calling next()
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, next]); // Added 'next' back to dependencies

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              // Added: sharper rendering, centered object, and disabled drag/pointer events for better visual quality
              className={`w-full h-full object-cover object-center select-none pointer-events-none ${
                index === current ? "animate-slow-zoom" : ""
              }`}
              style={{ imageRendering: "-webkit-optimize-contrast" }}
              draggable="false"
            />
          </div>

          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 hero-vignette" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <div
                className={`gold-divider mx-auto mb-8 transition-all duration-1000 ${
                  index === current ? "w-16 opacity-100" : "w-0 opacity-0"
                }`}
              />
              <h1
                className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-luxury leading-tight mb-6 transition-all duration-1000 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: index === current ? "200ms" : "0ms" }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 text-shadow-luxury transition-all duration-1000 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: index === current ? "400ms" : "0ms" }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
                  index === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: index === current ? "600ms" : "0ms" }}
              >
                <Button
                  title={slide.cta}
                  size="md"
                  onPress={onExplore}
                  className="!bg-[var(--secondary)] !text-[var(--primary)] !px-8 !py-3.5 !rounded-full !text-sm !font-semibold !uppercase !tracking-wide hover:!bg-[var(--secondary)]/80 !shadow-luxury !border-0"
                />

                <Button
                  title="Learn More"
                  size="md"
                  onPress={onExplore}
                  className="!bg-transparent !text-white !px-8 !py-3.5 !rounded-full !text-sm !font-semibold !uppercase !tracking-wide hover:!bg-white hover:!text-[var(--primary)] !border !border-white/60 hover:!border-white !shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-[var(--secondary)] hover:border-[var(--secondary)] flex items-center justify-center text-white hover:text-[var(--primary)] transition-all duration-400"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-[var(--secondary)] hover:border-[var(--secondary)] flex items-center justify-center text-white hover:text-[var(--primary)] transition-all duration-400"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === current
                ? "w-10 bg-[var(--secondary)]"
                : "w-5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
