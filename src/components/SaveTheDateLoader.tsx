'use client';

import { useEffect, useState } from 'react';

export function SaveTheDateLoader() {
  const [displayedText, setDisplayedText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = 'Save the Date';

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 1;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 80); // 80ms per character (faster)

    // Start fade out after 3 seconds (giving more time for typing)
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => {
      clearInterval(typewriterInterval);
      clearTimeout(timer);
    };
  }, [fullText]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-8 px-4">
        {/* Animated Hearts */}
        <div className="relative w-full flex justify-center mb-8">
          <div className="absolute animate-float-slow">
            <svg
              className="w-8 h-8 text-primary-400 opacity-60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div className="absolute left-1/4 animate-float-delay">
            <svg
              className="w-6 h-6 text-primary-300 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div className="absolute right-1/4 animate-float">
            <svg
              className="w-6 h-6 text-primary-300 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Main Text with Typewriter Effect */}
        <div className="space-y-6">
          <h1 className="font-script text-7xl md:text-9xl text-primary-600">
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-delayed">
            <div className="h-px w-16 bg-primary-300"></div>
            <svg
              className="w-5 h-5 text-primary-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-px w-16 bg-primary-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
