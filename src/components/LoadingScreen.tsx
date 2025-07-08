import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      setProgress(0);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Delay before starting fade out
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(() => {
                onComplete?.();
              }, 800); // Match fade out duration
            }, 300);
            return 100;
          }
          return prev + Math.random() * 15 + 5; // Random increment between 5-20
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onComplete]);

  if (!isVisible && !isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-800 ${
        !isVisible ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-12 animate-pulse-slow">
        <img 
          src="/Untitled_Artwork.png" 
          alt="Chiaroscuro Logo" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>

      {/* Loading Bar */}
      <div className="w-64 md:w-80 h-0.5 bg-gray-200 overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center">
        <p className="text-sm font-light tracking-[0.2em] text-gray-600 uppercase">
          Loading
        </p>
        <p className="text-xs font-light tracking-wider text-gray-400 mt-2">
          {Math.round(Math.min(progress, 100))}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;